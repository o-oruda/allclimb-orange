// 퍼널 type 정의
export interface IFunnelStep {
	onNext?: () => void;
	onPrev?: () => void;
}
