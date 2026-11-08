import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
  } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props: any) =>
                        sheet.collectStyles(<App {...props} />),
                });

                const initialProps = await Document.getInitialProps(ctx);
                return {
                    ...initialProps,
                    styles: (
                        <>
                            {initialProps.styles}
                            {sheet.getStyleElement()}
                        </>
                    ),
                };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}
  