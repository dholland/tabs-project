import React from 'react';

export default function Tabs({ setIsActive, children, isActive }) {
	return (
		//Container for the Application
		<div className='container mx-auto h-screen'>
			<nav className=' text-white w-full flex center h-12 pl-4'>
				<ul className='w-1/2 flex'>
					{children.map((child, i) => {
						return (
							<li className='mr-4'>
								<button
									onClick={() => setIsActive(i)}
									className={`w-24 h-12  hover:bg-gray-200 hover:text-black ${
										isActive === i ? 'bg-gray-200 text-black' : 'bg-gray-400'
									}`}>
									{child.props.children}
								</button>
							</li>
						);
					})}
				</ul>
			</nav>
			<div>{children}</div>
		</div>
	);
}
