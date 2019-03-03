import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html className="no-js">
                <Head>
                    <meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta charset="utf-8" />
                    <meta name="robots" content="INDEX,FOLLOW" />
                    <meta name="HandheldFriendly" content="true" />
                    <link rel="canonical" href="https://kylecarter-ict4515.herokuapp.com/" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons|Roboto:300,300i,400,400i,500,500i" />
                    <style global jsx>{`
                        .visually-hidden {
                            border: 0;
                            clip: rect(1px, 1px, 1px, 1px);
                            clip-path: inset(100%);
                            height: 1px;
                            overflow: hidden;
                            padding: 0;
                            position: absolute;
                            width: 1px;
                        }
                    `}</style>
                </Head>
                <body>
                    <a href="#main-content" className="visually-hidden">Skip to main content.</a>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument
