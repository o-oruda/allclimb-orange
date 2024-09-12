import styles from './NavBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface INavBarProps {
	goBack: () => void;
}

const NavBar = ({ goBack }: INavBarProps) => {
	return (
		<div className={cx('navbar')}>
			<div className={cx('navbar__box')}>
				<div className={cx('navbar__left')}>
					<button
						type="button"
						className={cx('navbar__back-button')}
						onClick={goBack}
					>
						<span className="blind">뒤로가기</span>
					</button>
				</div>

				<div className={cx('navbar__center')}></div>

				<div className={cx('navbar__right')}></div>
			</div>
		</div>
	);
};

export default NavBar;
