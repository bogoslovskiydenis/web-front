import React from 'react'
import { FooterLink } from '../footer/footer-link/footer.link.story'

export const Footer = () => {
	return (
		<div className='bg-gray-800 pt-12 px-12 fixed bottom-0 left-0 w-full'>
			<div className='mb-4'>
				<span className='uppercase font-bold text-sm text-zinc-500'>Contacts</span>
			</div>
			<div>
				<ul>
					<FooterLink href="TelNumber">1234556</FooterLink>
					<FooterLink href="mailto:">Mail</FooterLink>
				</ul>
			</div>
			<hr className='relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-400 mb-8'/>
			<div>
				<span className='text-xl font-semibold text-white'>
					WebApp
				</span>
			</div>
		</div>
	)
}

export default Footer