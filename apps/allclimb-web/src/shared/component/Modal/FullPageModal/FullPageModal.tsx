import styles from './FullPageModal.module.scss';
import classNames from 'classnames/bind';
import { FullPageModalProps } from './type';
import useModalStore from '@/shared/hook/useModalStore';

const cx = classNames.bind(styles);

const FullPageModal = ({ children }: FullPageModalProps) => {
	const { isOpen } = useModalStore();

	if (!isOpen) return null;

	return <div className={cx('full-page-modal')}>{children}</div>;
};

export default FullPageModal;
