import { useState } from 'react'
import Head from 'next/head'
import PhoneInput from 'react-phone-input-2'

export default function Home() {
	const [number, setNumber] = useState(null)

	return (
		<div className='container'>
			<Head>
				<title>Watsapan</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=''>
				<span>Masukan No Whatsapp</span>

				<PhoneInput
					country={'id'}
					defaultMask={'...-....-....'}
					enableSearch={true}
					disableSearchIcon={true}
					countryCodeEditable={false}
					value={number}
					onChange={(phone) => setNumber(phone)}
				/>
				<button>Chat Now</button>
			</main>

			<footer className=''></footer>
		</div>
	)
}
