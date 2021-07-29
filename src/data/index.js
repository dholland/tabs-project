import TabContent1 from '../components/TabContent1';

console.log('tabcontent', TabContent1);

export const tabData = [
	{ label: 'Tab 1', content: 'my content 1' },
	{ label: 'Tab 2', content: 'my content 2' },
	{ label: 'Tab 3', component: TabContent1 },
	// { label: 'Tab 3', component: NewTab },
];
