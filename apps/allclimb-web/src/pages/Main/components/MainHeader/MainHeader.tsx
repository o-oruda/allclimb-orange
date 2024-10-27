import useModalStore from '@/components/Modal/useModalStore';
import styles from '../../MainPage.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const MainHeader = () => {
	const { openModal } = useModalStore();

	return (
		<div className={cx('main-header')}>
			<div className={cx('main-header__inner')}>
				<h1 className={cx('main-header__title')}>
					<span className="blind">올클</span>
				</h1>

				<button
					type="button"
					className={cx('main-header__search')}
					onClick={openModal}
				>
					<span className="blind">검색</span>
				</button>
			</div>
		</div>
	);
};

export default MainHeader;
