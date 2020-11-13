import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import Meta from '@components/meta'

export default function Home() {
	const [number, setNumber] = useState(null)
	const [isDisableToChat, setisDisableToChat] = useState(true)

	function onSumbmit(event) {
		event.preventDefault()
		window.open(`https://wa.me/${number}`)
	}

	return (
		<div className='container home'>
			<Meta />

			<main className='home__main'>
				<div>Masukan No Whatsapp</div>

				<form className='home__main__form' onSubmit={(event) => onSumbmit(event)}>
					<PhoneInput
						country={'id'}
						defaultMask={'...-....-....'}
						enableSearch={true}
						disableSearchIcon={true}
						countryCodeEditable={false}
						value={number}
						onChange={(phone) => {
							setNumber(phone)
							if (phone?.length >= 11) {
								setisDisableToChat(false)
							} else {
								setisDisableToChat(true)
							}
						}}
					/>
					<button className={`home__main__submit${isDisableToChat ? '--disabled' : '--primary'}`} disabled={isDisableToChat} type='submit'>
						Chat Now
					</button>
				</form>
			</main>
			<footer className='home__footer'>© Masagus Hariadi Arief 2020 all rights reserved</footer>
		</div>
	)
}
