import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Tab from './components/Tab';
import Tab1Content from './components/TabContent1';
import tabData from './data';

export default function App() {
	const [isActive, setIsActive] = useState(0);
	const [tabs, setTabs] = useState({});

	useEffect(() => {
		setTabs(tabData);
	}, []);

	return (
		<div className='w-2/3 '>
			<Tabs setIsActive={setIsActive} isActive={isActive}>
				<Tab isActive={isActive === 0} content={<Tab1Content />}>
					Tab 1
				</Tab>
				<Tab isActive={isActive === 1} content='Content 2'>
					Tab 2
				</Tab>
				<Tab isActive={isActive === 2} content='Content 3'>
					Tab 3
				</Tab>
			</Tabs>
		</div>
	);
}
