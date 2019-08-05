import { Account } from '../types';
import { userSession } from './blockstack';

const fileName = '2fa.json';

export interface File {
  accounts: Account[];
}

/**
 * Return the file
 * Initialize the file if some values are missing
 */
export const getFile = async (): Promise<File> => {
  let file = await userSession.getFile(fileName);
  if (file) {
    file = JSON.parse(file);
  }
  if (!file) {
    file = {};
  }
  if (!file.accounts) {
    file.accounts = [];
  }
  return file;
};

/**
 * Save the file on the storage
 */
export const putFile = async (file: File): Promise<void> => {
  await userSession.putFile(fileName, JSON.stringify(file));
};

/**
 * Add an account to the file and save it
 */
export const addAccount = async (account: Account): Promise<File> => {
  const file = await getFile();
  file.accounts.push(account);
  await putFile(file);
  return file;
};

/**
 * Remove an account at a given index and save it
 */
export const removeAccount = async (index: number): Promise<File> => {
  const file = await getFile();
  file.accounts.splice(index, 1);
  await putFile(file);
  return file;
};

export const editAccount = async (
  index: number,
  account: Account
): Promise<File> => {
  const file = await getFile();
  file.accounts[index] = account;
  await putFile(file);
  return file;
};
