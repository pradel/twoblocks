import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import * as Sentry from '@sentry/react';
import 'typeface-roboto';
import { config } from '../config';

Sentry.init({
  dsn: config.sentryDsn,
});

const DynamicComponent = dynamic(() => import('../App'), { ssr: false });

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <DynamicComponent />;
};

export default Home;
