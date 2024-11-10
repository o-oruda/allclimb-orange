import React from 'react';

import styles from './FullPageModal.module.scss';
import classNames from 'classnames/bind';
import useModalStore from '../useModalStore';

const cx = classNames.bind(styles);

type FullPageModalProps = {
	children: React.ReactNode;
};

const FullPageModal: React.FC<FullPageModalProps> = ({ children }) => {
	const { isOpen } = useModalStore();

	if (!isOpen) return null;

	return <div className={cx('full-page-modal')}>{children}</div>;
};

export default FullPageModal;
