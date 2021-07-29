import React, { useState, useEffect } from 'react';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import { tabData } from './data';

export default function App() {
	const [isActive, setIsActive] = useState(0);
	const [tabs, setTabs] = useState(tabData);

	useEffect(() => {
		setTabs(tabData);
	}, []);

	const newTab = () => {
		setTabs((prevTabs) => {
			return [...prevTabs, { label: 'New Tab', content: 'New Tab Conent' }];
		});
	};

	console.log('tabs', tabs);

	return (
		<div className='w-screen flex justify-center items-center'>
			<div className='w-2/3 '>
				<Tabs setIsActive={setIsActive} isActive={isActive}>
					{tabs.map((tab, i) => {
						const label = tab.label;
						const ContentComponent = tab.component;
						const content = tab.content;
						if (ContentComponent) {
							return (
								<Tab isActive={isActive === i} content={<ContentComponent />}>
									{label}
								</Tab>
							);
						}
						return (
							<Tab isActive={isActive === i} content={content}>
								{label}
							</Tab>
						);
					})}
				</Tabs>
			</div>
		</div>
	);
}
