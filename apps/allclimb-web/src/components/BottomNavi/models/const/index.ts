import { ROUTE } from "@/models/const/route";

// 네비게이션 아이템
export const NAV_ITEMS: {
	path: string;
	label: string;
	className: string;
}[] = [
	{
		path: ROUTE.MAIN,
		label: '홈',
		className: 'bottom-navi-list__button--home'
	},
	{
		path: ROUTE.TICKET_MAIN,
		label: '이용권',
		className: 'bottom-navi-list__button--ticket',
	},
	{
		path: ROUTE.MARKET_QR,
		label: '올페이',
		className: 'bottom-navi-list__button--pay',
	},
	{
		path: ROUTE.DAILY_RECORD,
		label: '기록',
		className: 'bottom-navi-list__button--record',
	},
	{
		path: ROUTE.MY_PAGE_MAIN,
		label: '마이',
		className: 'bottom-navi-list__button--more'
	},
];