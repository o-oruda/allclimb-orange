// 전체 클라이밍장 임시
export const climbingGround: { name: string; location: string }[] = [
	{ name: '어웨이크클라이밍 타임월드점', location: '대전시 서구 둔산동' },
	{ name: '웨이브락 서면점', location: '부산시 부산진구 부전동' },
	{ name: '스톤즈클라이밍', location: '서울시 관악구 봉천동' },
	{ name: '오프더월클라이밍', location: '서울시 용산구 이태원동' },
];

// 지역 이름
export const REGIONS = [
	{ name: '서울', id: 'seoul' },
	{ name: '경기도', id: 'gyeonggi' },
	{ name: '충청도', id: 'chungcheong' },
	{ name: '강원도', id: 'gangwon' },
	{ name: '전라도', id: 'jeolla' },
	{ name: '경상도', id: 'gyeongsang' },
	{ name: '제주도', id: 'jeju' },
];

// 네비게이션 아이템
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

export const SIGNUP_STEP = {
	PREFER: 'prefer',
	ACTIVITY: 'activity',
	DURATION: 'duration',
	COMPLETE: 'complete',
};
