import React from 'react';
import App from 'next/app';
import AppLayout from '../layouts/app-layout';
import '../assets/style/main.scss';
import '../config/fa.config';
 
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    )
  }
}

export default MyApp
