import classNames from 'classnames/bind';
import styles from '@/pages/SignUp/SignUpPage.module.scss';
import useSignUpStore from '@/store/useSignupStore';
import useManagePreferList from '../../hooks/useManagePreferList';
import { useCallback } from 'react';
import { IFunnelStep } from '@/models/common';

const cx = classNames.bind(styles);

interface INextButtonProps extends IFunnelStep {
	activeGym: { [key: string]: boolean };
}

const NextButton = (props: INextButtonProps) => {
	const { activeGym, onNext } = props;
	const { getActiveGymList } = useManagePreferList();
	const { customGymList, setGymList } = useSignUpStore();

	const onClickNextHandler = useCallback(() => {
		const updateList = [...getActiveGymList(activeGym), ...customGymList];
		setGymList([...updateList]);

		onNext?.();
	}, [activeGym, customGymList, onNext]);

	return (
		<div
			className={cx('sign-up-bottom', {
				'sign-up-bottom--active':
					Object.values(activeGym).includes(true) ||
					customGymList.length,
			})}
		>
			<button
				type="button"
				className={cx('sign-up-bottom__button')}
				onClick={onClickNextHandler}
			>
				다음
			</button>
		</div>
	);
};

export default NextButton;
