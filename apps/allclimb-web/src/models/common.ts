export type ExtractType<T> = T[keyof T];

// 기본적인 셀렉트 데이터
export interface Select {
	label: string;
	value: string;
}

// 클라이밍장 정보
export interface IGymInfo {
	name: string;
	location?: string;
}

// 퍼널 type 정의
export interface IFunnelStep {
	onNext?: () => void;
	onPrev?: () => void;
}
