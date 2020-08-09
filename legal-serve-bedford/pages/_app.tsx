import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import App from 'next/app';
import AppLayout from '../layouts/app-layout';
import '../assets/style/main.scss';
import '../config/fa.config';
 
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    )
  }
}

export default MyApp
