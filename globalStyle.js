import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

export const GlobalStyle = createGlobalStyle `
  ${normalize}

  @font-face {
        font-family: 'Circe Extra Bold';
        src: url('/fonts/Circe-ExtraBold.eot') format('embedded-opentype'),
            url('/fonts/Circe-ExtraBold.woff') format('woff'),
            url('/fonts/Circe-ExtraBold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circe Regular';
        src: url('/fonts/Circe-Regular.eot') format('embedded-opentype'),
            url('/fonts/Circe-Regular.woff') format('woff'),
            url('/fonts/Circe-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circe Bold';
        src: url('/fonts/Circe-Bold.eot') format('embedded-opentype'),
        url('/fonts/Circe-Bold.woff') format('woff'),
        url('/fonts/Circe-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'Circe Regular', "Open Sans", sans-serif;
        min-height: 100vh;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-flow: column nowrap;
        align-items: stretch;
    }

    :root {
        font-size: 13px;
    }

    * {
        box-sizing: border-box;

        &::selection {
            background-color: ${props => props.theme.colors.selected};
            color: ${props => props.theme.colors.primary};
        }
    }

    #__next {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`
