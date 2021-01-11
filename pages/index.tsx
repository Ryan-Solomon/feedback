import { Text, Heading, Button, Code } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>
        <Text>
          Current User: <Code>{auth?.user?.email}</Code>
        </Text>
        {auth?.user && (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        )}
        <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
      </main>
    </div>
  );
}
