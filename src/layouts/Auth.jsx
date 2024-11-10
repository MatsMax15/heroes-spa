import { Outlet } from 'react-router-dom'

export const Auth = () => {
	return (
		<>
			<div className='container-login'>
				<section className='w-7/12 md:w-1/2 min-h-[500px] backdrop-blur-sm rounded-xl border-2 border-gray-500/20 shadow relative flex justify-center items-center'>
					<header className='absolute top-0 left-[calc(50%-3rem)] w-24 text-center rounded-b-xl border-b border-gray-500 bg-gray-400/50 shadow'>
						<span className='text-lg text-gray-200'>Login</span>
					</header>

					<Outlet />
				</section>

				{/* <section>
				</section> */}
			</div>
		</>
	)
}
