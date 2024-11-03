import BottomModal from '@/components/Modal/BottomModal/BottomModal';
import styles from '../SignUpPage.module.scss';
import classNames from 'classnames/bind';
import { IFunnelStep } from '@/models/common';

const cx = classNames.bind(styles);

/**
 * 경력 선택
 */
const CareerDuration = (props: IFunnelStep) => {
	return (
		<>
			{/* TODO [F/E] - 날짜 선택  */}
			<h2 className={cx('sign-up__title')}>
				클라이밍,
				<br />
				언제 시작했나요?
			</h2>
			<BottomModal className="ddddd">d</BottomModal>
		</>
	);
};

export default CareerDuration;
