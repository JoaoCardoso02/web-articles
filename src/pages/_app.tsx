import type { AppProps } from 'next/app'
import Header from 'src/components/Header'
import { GlobalStyle } from 'src/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<>
			<GlobalStyle />
			<Header />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
