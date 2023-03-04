import React, { FC, PropsWithChildren } from 'react'

interface FooterLinkProps {
	href: string,
}

export const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({ href, children }) => {
	return (
		<ul className='list-none'>
			<li>
				<a className='font-bold text-sm text-zinc-400 hover:text-gray-300 hover:underline' href={href}>{children}
				</a>
			</li>
		</ul>
	)
}

export default FooterLink