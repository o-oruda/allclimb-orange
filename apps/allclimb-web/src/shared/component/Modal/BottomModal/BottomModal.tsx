import styles from './BottomModal.module.scss';
import classNames from 'classnames/bind';
import { BottomModalProps } from './type';
import useModalStore from '@/shared/hook/useModalStore';

const cx = classNames.bind(styles);

/**
 * 바텀 팝업
 */
const BottomModal = ({
	children,
	// className,
	// colorType,
}: BottomModalProps) => {
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
