import classNames from 'classnames/bind';
import styles from '@/pages/SignUp/SignUpPage.module.scss';
import useSignUpStore from '@/store/useSignupStore';
import useManagePreferList from '../../hooks/useManagePreferList';

const cx = classNames.bind(styles);

interface INextButtonProps {
	activeGym: { [key: string]: boolean };
}

const NextButton = (props: INextButtonProps) => {
	const { activeGym } = props;
	const { getActiveGymList } = useManagePreferList();
	const { customGymList, updateStep, updateSignUpState, step } =
		useSignUpStore();

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
				onClick={() => {
					const updateList = [
						...getActiveGymList(activeGym),
						...customGymList,
					];
					updateStep(step + 1);
					updateSignUpState([...updateList]);
				}}
			>
				다음
			</button>
		</div>
	);
};

export default NextButton;
