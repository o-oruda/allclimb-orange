import styles from '../MainPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NewGyms = () => {
	return (
		<div className={cx('main-content__box', 'main-content__box--new')}>
			<div className={cx('main-content__header')}>
				<h2 className={cx('main-content__title')}>
					새로운 클밍장도 둘러봐!
				</h2>
			</div>

			<ul className={cx('main-content-new')}>
				<li className={cx('main-content-new__item')}>
					<a href="#" className={cx('main-content-new__link')}>
						<img src="" width={120} height={80} alt="암장명" />
						<h4 className={cx('main-content-new__title')}>
							암장명
						</h4>
					</a>
				</li>

				<li className={cx('main-content-new__item')}>
					<a href="#" className={cx('main-content-new__link')}>
						<img src="" width={120} height={80} alt="암장명" />
						<h4 className={cx('main-content-new__title')}>
							암장명
						</h4>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default NewGyms;
