import React, { createContext, useReducer, useEffect } from 'react';
import { File, getFile } from '../utils/accounts';

export const FileContext = createContext<{
  file?: File;
  loading?: boolean;
  setFile(file: File): void;
}>({ setFile: () => null });

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

  useEffect(() => {
    fetchFile();
  }, []);

  return (
    <FileContext.Provider
      value={{ file: state.file, loading: state.loading, setFile }}
    >
      {children}
    </FileContext.Provider>
  );
};
