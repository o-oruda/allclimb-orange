import styles from '../MainPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AllClimbPick = () => {
	return (
		<div className={cx('main-content__box', 'main-content__box--pick')}>
			<div className={cx('main-content__header')}>
				<h2 className={cx('main-content__title')}>올클러’s Pick!</h2>
			</div>

			<ul className={cx('main-content-pcik')}>
				<li className={cx('main-content-pcik__item')}>
					<a href="#" className={cx('main-content-pcik__link')}>
						<img
							src=""
							width={312}
							height={180}
							alt="암장명이들어갑니다."
						/>
						<h4 className={cx('main-content-pcik__title')}>
							암장명이 들어갑니다
						</h4>

						<ul className={cx('main-content-pcik-hash')}>
							<li className={cx('main-content-pcik-hash__item')}>
								#해시태그
							</li>

							<li className={cx('main-content-pcik-hash__item')}>
								#해시태그
							</li>
						</ul>
					</a>
				</li>

				<li className={cx('main-content-pcik__item')}>
					<a href="#" className={cx('main-content-pcik__link')}>
						<img
							src=""
							width={312}
							height={180}
							alt="암장명이들어갑니다."
						/>
						<h4 className={cx('main-content-pcik__title')}>
							암장명이 들어갑니다
						</h4>

						<ul className={cx('main-content-pcik-hash')}>
							<li className={cx('main-content-pcik-hash__item')}>
								#해시태그
							</li>

							<li className={cx('main-content-pcik-hash__item')}>
								#해시태그
							</li>
						</ul>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default AllClimbPick;
