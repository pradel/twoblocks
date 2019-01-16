import React, { useState, useEffect } from 'react';
import { File } from '../utils/accounts';
import { AccountItem } from './AccountItem';

const getRemainingSeconds = () => {
  const currentSeconds = new Date().getSeconds();
  const remainingSeconds =
    30 - (currentSeconds > 30 ? currentSeconds - 30 : currentSeconds);
  return remainingSeconds === 0 ? 30 : remainingSeconds;
};

interface Props {
  file: File;
}

export const AccountList = (props: Props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(
    () => {
      const intervalId = setInterval(() => {
        setSeconds(getRemainingSeconds());
      }, 1000);

      return function cleanup() {
        clearInterval(intervalId);
      };
    },
    [false]
  );

  return (
    <React.Fragment>
      {props.file.accounts.map((account, index) => (
        <AccountItem key={index} account={account} remainingSeconds={seconds} />
      ))}
    </React.Fragment>
  );
};
