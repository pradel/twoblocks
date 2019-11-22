import React, { createContext, useReducer, useEffect } from 'react';
import Fathom from 'fathom-client';
import { File, getFile, putFile } from '../utils/accounts';
import { Account } from '../types';
import { Goals } from '../utils/fathom';

export const FileContext = createContext<{
  file?: File;
  loading?: boolean;
  setFile(file: File): void;
  addAccount(account: Account): Promise<void>;
  editAccount(index: number, account: Account): Promise<void>;
  removeAccount(index: number): Promise<void>;
}>(undefined as any);

interface Props {
  children: React.ReactNode;
}

type Action =
  | { type: 'success'; file?: File }
  | { type: 'error'; error: string };

interface State {
  file?: File;
  loading?: boolean;
  error?: string;
}

const initialState: State = {
  file: undefined,
  loading: true,
  error: undefined,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'success':
      return {
        ...state,
        loading: false,
        file: action.file,
      };
    case 'error':
      return { ...state, loading: false, error: action.error };
    default:
      throw new Error();
  }
};

export const FileContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchFile = async () => {
    try {
      const file = await getFile();
      dispatch({ type: 'success', file });
    } catch (error) {
      dispatch({ type: 'error', error: error.message });
      alert(error.message);
    }
  };

  const setFile = (file: File) => {
    dispatch({ type: 'success', file });
  };

  /**
   * Add an account to the file and save it
   */
  const addAccount = async (account: Account) => {
    if (!state.file) return;
    Fathom.trackGoal(Goals.ADD_NEW_ACCOUNT, 0);
    const file = state.file;
    file.accounts.push(account);
    await putFile(file);
    dispatch({ type: 'success', file });
  };

  /**
   * Edit an account and save it
   */
  const editAccount = async (index: number, account: Account) => {
    if (!state.file) return;
    const file = state.file;
    file.accounts[index] = account;
    await putFile(file);
    dispatch({ type: 'success', file });
  };

  /**
   * Remove an account at a given index and save it
   */
  const removeAccount = async (index: number) => {
    if (!state.file) return;
    const file = state.file;
    file.accounts.splice(index, 1);
    await putFile(file);
    dispatch({ type: 'success', file });
  };

  useEffect(() => {
    fetchFile();
  }, []);

  return (
    <FileContext.Provider
      value={{
        file: state.file,
        loading: state.loading,
        setFile,
        addAccount,
        editAccount,
        removeAccount,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
