import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import App from 'next/app';
import AppLayout from '../layouts/app-layout';
import '../assets/style/main.scss';
import '../config/fa.config';
import Head from 'next/head';
 
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        </Head>
        <ThemeProvider theme={theme}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
