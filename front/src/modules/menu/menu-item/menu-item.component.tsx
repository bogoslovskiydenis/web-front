import { FC } from 'react'

interface MenuItemProps{
	imagePath: any,
	weight: number,
	title: string,
	description: string,
	price: number
}


const MenuItem:FC<MenuItemProps> = ({imagePath, weight,title,description,price}) => {
	return (
		<div className='w-96 shadow-xl rounded-2xl bg-white'>
			<div className='relative '>
				<img src={imagePath} alt='' className='rounded-t-2xl object-cover w-full h-[15rem] object-center' />
				<span className='absolute  bottom-2 right-3  text-white text-sm px-2 rounded-[2rem]'>{weight}</span>

			</div>
			<div className='p-8 '>
				<h2 className='text-xl font-semibold'>{title}</h2>
				<p className='mb-8 '>{description}</p>
				<span className='text-xl font-semibold'>{price}</span>
			</div>
		</div>
	)
}

export default MenuItem