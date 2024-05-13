import Document, {Html, Head, Main, NextScript} from 'next/document'

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    styleTags: any
}

export default class MyDocument extends Document<Props> {
    render() {
        const {
            props: {styleTags},
        } = this

        return (
            <Html lang="ko">
                <Head>
                    {styleTags}
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta property="og:type" content="article" />
                    <meta property="og:locale" content="ko_KR" />

                    <style
                        dangerouslySetInnerHTML={{
                            __html: 'body { margin: 0 !important; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); -webkit-touch-callout: none; }',
                        }}
                        type="text/css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
