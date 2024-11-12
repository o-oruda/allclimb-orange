import classNames from 'classnames/bind';
import styles from '../../../SignupPage.module.scss';
import useSignUpStore from '@/store/useSignupStore';
import useManagePreferList from '../../../hook/common/useManagePreferList';
import { useCallback } from 'react';
import { IFunnelStep } from '@/shared/type/funnel';

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
