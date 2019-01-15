import * as blockstack from 'blockstack';
import { Account } from '../types';

const fileName = '2fa.json';

export interface File {
  accounts: Account[];
}

/**
 * Return the file
 * Initialize the file if some values are missing
 */
export const getFile = async (): Promise<File> => {
  let file = await blockstack.getFile(fileName);
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
  await blockstack.putFile(fileName, JSON.stringify(file));
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
