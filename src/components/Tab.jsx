import React from 'react';

export default function Tab({ isActive, content }) {
	return (
		<div className={`h-96 bg-gray-200  p-4 ${!isActive ? 'hidden' : 'block'}`}>
			{content}
		</div>
	);
}
