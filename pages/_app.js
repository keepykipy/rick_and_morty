import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../globalStyle';
import { defaultTheme } from '../ui';

import 'swiper/css/swiper.css'

export default class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props
        return (
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <Component {...pageProps}/>
            </ThemeProvider>
        )
    }
}
