import React, { useState, useEffect } from 'react';
import { authenticator } from '@otplib/preset-browser';
import { File } from '../utils/accounts';
import { AccountItem } from './AccountItem';

interface Props {
  file: File;
}

export const AccountList = (props: Props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(authenticator.timeRemaining()); // eslint-disable-line
    }, 1000);

    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <React.Fragment>
      {props.file.accounts.map((account, index) => (
        <AccountItem
          key={index}
          index={index}
          account={account}
          remainingSeconds={seconds}
        />
      ))}
    </React.Fragment>
  );
};
