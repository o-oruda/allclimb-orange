export const REGIONS = [
	{ name: '서울', id: 'seoul' },
	{ name: '경기도', id: 'gyeonggi' },
	{ name: '충청도', id: 'chungcheong' },
	{ name: '강원도', id: 'gangwon' },
	{ name: '전라도', id: 'jeolla' },
	{ name: '경상도', id: 'gyeongsang' },
	{ name: '제주도', id: 'jeju' },
];

export const NAV_ITEMS: {
	path: string;
	label: string;
	className: string;
}[] = [
	{ path: '/', label: '홈', className: 'bottom-navi-list__button--home' },
	{
		path: '/tickets',
		label: '이용권',
		className: 'bottom-navi-list__button--ticket',
	},
	{
		path: '/pay',
		label: '올페이',
		className: 'bottom-navi-list__button--pay',
	},
	{
		path: '/record',
		label: '기록',
		className: 'bottom-navi-list__button--record',
	},
	{ path: '/my', label: '마이', className: 'bottom-navi-list__button--more' },
];
