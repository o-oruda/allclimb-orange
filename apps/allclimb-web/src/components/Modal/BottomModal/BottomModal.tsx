import React from 'react';

import styles from './BottomModal.module.scss';
import classNames from 'classnames/bind';
import useModalStore from '../useModalStore';

const cx = classNames.bind(styles);

// 컬러타입
enum EColorType {
	// 회색~
	Gray = 'gray',
}

// 바텀 Props
type BottomModalProps = {
	// 컨텐츠
	children: React.ReactNode;

	// 클래스명
	className?: string;

	// 컬러타입
	colorType?: EColorType;
};

/**
 * 바텀 팝업
 */
const BottomModal: React.FC<BottomModalProps> = ({
	children,
	className,
	colorType,
}) => {
	const { isOpen, closeModal } = useModalStore();

	if (!isOpen) return null;

	return (
		<div className={cx('bottom-modal')}>
			<div className={cx('bottom-modal__top')}>
				<h3 className={cx('bottom-modal__title')}>dd</h3>
				<button
					type="button"
					className={cx('bottom-modal__button')}
					onClick={closeModal}
				>
					<span className="blind">닫기</span>
				</button>
			</div>
			<div className={cx('bottom-modal__content')}>{children}</div>
		</div>
	);
};

export default BottomModal;
