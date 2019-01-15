import React, { useState, useEffect } from 'react';
import { File } from '../utils/accounts';

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
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(
    () => {
      const intervalIdTmp = setInterval(() => {
        setSeconds(getRemainingSeconds());
      }, 1000);
      setIntervalId(intervalIdTmp);

      return function cleanup() {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    },
    [false]
  );
  return <div>{seconds}</div>;
};
