import React, { useState, useEffect } from 'react';
import { File } from '../utils/accounts';
import { AccountItem } from './AccountItem';

interface Props {
  file: File;
  setFile: (file: File) => void;
}

export const AccountList = (props: Props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(otplib.authenticator.timeRemaining());
    }, 1000);

    return function cleanup() {
      clearInterval(intervalId);
    };
  }, [false]);

  return (
    <React.Fragment>
      {props.file.accounts.map((account, index) => (
        <AccountItem
          key={index}
          index={index}
          account={account}
          remainingSeconds={seconds}
          setFile={props.setFile}
        />
      ))}
    </React.Fragment>
  );
};
