import React from 'react'
import App, { Container } from 'next/app'
import AppLayout from '../layouts/app-layout';
import '../assets/style/main.scss'
 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
 
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
