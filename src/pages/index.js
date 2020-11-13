import { useState } from 'react'
import Head from 'next/head'
import PhoneInput from 'react-phone-input-2'

export default function Home() {
	const [number, setNumber] = useState(null)
	const [isDisableToChat, setisDisableToChat] = useState(true)

	function onSumbmit(event) {
		event.preventDefault()
		window.open(`https://wa.me/${number}`)
	}

	return (
		<div className='container'>
			<Head>
				<title>Watsapan</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=''>
				<span>Masukan No Whatsapp</span>

				<form onSubmit={(event) => onSumbmit(event)}>
					<PhoneInput
						country={'id'}
						defaultMask={'...-....-....'}
						enableSearch={true}
						disableSearchIcon={true}
						countryCodeEditable={false}
						value={number}
						onChange={(phone) => {
							setNumber(phone)
							if (number?.length >= 11) {
								setisDisableToChat(false)
							} else {
								setisDisableToChat(true)
							}
						}}
					/>
					<button disabled={isDisableToChat} type='submit'>
						Chat Now
					</button>
				</form>
			</main>

			<footer className=''></footer>
		</div>
	)
}
