import styles from './LoginPage.module.scss';
import classNames from 'classnames/bind';
import { ROUTE } from '@/shared/constant/route';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const LoginPage = () => {
	const navigate = useNavigate();

	return (
		<div className={cx('sign-in')}>
			<div className={cx('sign-in__box')}>
				<h1 className={cx('sign-in__title')}>
					<span className="blind">올클</span>
				</h1>
				<p className={cx('sign-in__text')}>
					하나로 어디든 오르는 즐거움
				</p>
			</div>

			<div className={cx('sign-in-bottom')}>
				<button
					className={cx(
						'sign-in-bottom__button',
						'sign-in-bottom__button--kakao',
					)}
					type="button"
				>
					카카오 로그인
				</button>

				<button
					className={cx(
						'sign-in-bottom__button',
						'sign-in-bottom__button--google',
					)}
					type="button"
					onClick={() => navigate(ROUTE.GOOGLE_LOGIN)}
				>
					구글 로그인
				</button>

				<button
					className={cx(
						'sign-in-bottom__button',
						'sign-in-bottom__button--apple',
					)}
					type="button"
				>
					Apple 로그인
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
