import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { FallbackStyles, MagicScriptTag } from '../styles/inlineCSSVariables'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Dustin Myers - React Frontend Dev" />
          <meta name="description" content="Hey there, This is Dustin Myers. I am a frontend developer passionate about ReactJS." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Dustin Myers - React Frontend Dev" />
          <meta property="og:description" content="Hey there, This is Dustin Myers. I am a frontend developer passionate about ReactJS." />
          <meta property="og:image" content="https://i.ibb.co/h8kLzSw/Dustin-Logo.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Dustin Myers - React Frontend Dev" />
          <meta property="twitter:description" content="Hey there, This is Dustin Myers. I am a frontend developer passionate about ReactJS." />
          <meta property="twitter:image" content="https://i.ibb.co/h8kLzSw/Dustin-Logo.png" />
          <FallbackStyles />
        </Head>
        <body>
          <MagicScriptTag />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
