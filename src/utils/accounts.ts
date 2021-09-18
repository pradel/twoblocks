import { Account } from '../types';
import { storage } from './blockstack';

const fileName = '2fa.json';

export interface File {
  accounts: Account[];
}

/**
 * Return the file
 * Initialize the file if some values are missing
 */
export const getFile = async (): Promise<File> => {
  let file;
  try {
    file = (await storage.getFile(fileName)) as any;
  } catch (error) {
    // If 404 it means user is using the app for the first time
    if (error.code !== 'does_not_exist') {
      throw error;
    }
  }
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
  await storage.putFile(fileName, JSON.stringify(file));
};
