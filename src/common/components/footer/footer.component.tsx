import React from 'react'
import { FooterLink } from '../footer/footer-link/footer.link.story'

export const Footer = () => {
	return (
		<div className='bg-gray-800 pt-12 px-12'>
			<div className='mb-4'>
				<span className='uppercase font-bold text-sm text-zinc-500'>Contacts</span>
			</div>
			<div>
				<ul>
					<FooterLink href="TelNumber">1234556</FooterLink>
					<FooterLink href="mailto:">Mail</FooterLink>
				</ul>
			</div>
		</div>
	)
}

export default Footer