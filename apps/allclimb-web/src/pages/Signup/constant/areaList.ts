import { Select } from '@/shared/type/select';

export const AREA_LIST: Select[] = [
	{ label: '서울', value: '서울' },
	{ label: '경기', value: '경기' },
	{ label: '강원', value: '강원' },
	{ label: '충청', value: '충청' },
	{ label: '전라', value: '전라' },
	{ label: '경상', value: '경상' },
	{ label: '부산', value: '부산' },
	{ label: '제주', value: '제주' },
	{ label: '전국', value: '전국' },
] as const;
