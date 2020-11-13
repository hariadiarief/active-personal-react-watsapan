import Head from 'next/head'
import { Fragment } from 'react'

import '../styles/main.scss'
// import 'react-phone-input-2/lib/style.css'
import 'react-phone-input-2/lib/material.css'

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp
