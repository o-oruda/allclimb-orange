import { MODAL_COLOR_TYPE } from '../constant';

export interface BottomModalProps {
	// 컨텐츠
	children: React.ReactNode;

	// 클래스명
	className?: string;

	// 컬러타입
	colorType?: (typeof MODAL_COLOR_TYPE)[keyof typeof MODAL_COLOR_TYPE];
}
