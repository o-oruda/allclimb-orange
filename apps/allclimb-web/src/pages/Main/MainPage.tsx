import styles from './MainPage.module.scss';
import classNames from 'classnames/bind';
import MainSearch from './popup/MainSearch/MainSearch';
import BottomNavi from '@/components/BottomNavi/BottomNavi';
import ClimbingLogo from '@/components/ClimbingLogo';

const cx = classNames.bind(styles);

const MainPage = () => {
	return (
		<>
			<div className={cx('main')}>
				<div className={cx('main-header')}>
					<div className={cx('main-header__inner')}>
						<h1 className={cx('main-header__title')}>
							<span className="blind">올클</span>
						</h1>

						<button
							type="button"
							className={cx('main-header__search')}
						>
							<span className="blind">검색</span>
						</button>
					</div>
				</div>

				<div className={cx('main-content')}>
					<div className={cx('main-content__header')}>
						<h2 className={cx('main-content__title')}>
							볼더링 실력을 올리고 싶다면? <br /> 다양한 문제의
							올클라이밍 짐!
						</h2>
					</div>

					<div
						className={cx(
							'main-content__box',
							'main-content__box--pick',
						)}
					>
						<div className={cx('main-content__header')}>
							<h2 className={cx('main-content__title')}>
								올클러’s Pick!
							</h2>
						</div>

						<ul className={cx('main-content-pcik')}>
							<li className={cx('main-content-pcik__item')}>
								<a
									href="#"
									className={cx('main-content-pcik__link')}
								>
									<img
										src=""
										width={312}
										height={180}
										alt="암장명이들어갑니다."
									/>
									<h4
										className={cx(
											'main-content-pcik__title',
										)}
									>
										암장명이 들어갑니다
									</h4>

									<ul
										className={cx('main-content-pcik-hash')}
									>
										<li
											className={cx(
												'main-content-pcik-hash__item',
											)}
										>
											#해시태그
										</li>

										<li
											className={cx(
												'main-content-pcik-hash__item',
											)}
										>
											#해시태그
										</li>
									</ul>
								</a>
							</li>

							<li className={cx('main-content-pcik__item')}>
								<a
									href="#"
									className={cx('main-content-pcik__link')}
								>
									<img
										src=""
										width={312}
										height={180}
										alt="암장명이들어갑니다."
									/>
									<h4
										className={cx(
											'main-content-pcik__title',
										)}
									>
										암장명이 들어갑니다
									</h4>

									<ul
										className={cx('main-content-pcik-hash')}
									>
										<li
											className={cx(
												'main-content-pcik-hash__item',
											)}
										>
											#해시태그
										</li>

										<li
											className={cx(
												'main-content-pcik-hash__item',
											)}
										>
											#해시태그
										</li>
									</ul>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div
					className={cx(
						'main-content__box',
						'main-content__box--new',
					)}
				>
					<div className={cx('main-content__header')}>
						<h2 className={cx('main-content__title')}>
							새로운 클밍장도 둘러봐!
						</h2>
					</div>

					<ul className={cx('main-content-new')}>
						<li className={cx('main-content-new__item')}>
							<a
								href="#"
								className={cx('main-content-new__link')}
							>
								<img
									src=""
									width={120}
									height={80}
									alt="암장명"
								/>
								<h4 className={cx('main-content-new__title')}>
									암장명
								</h4>
							</a>
						</li>

						<li className={cx('main-content-new__item')}>
							<a
								href="#"
								className={cx('main-content-new__link')}
							>
								<img
									src=""
									width={120}
									height={80}
									alt="암장명"
								/>
								<h4 className={cx('main-content-new__title')}>
									암장명
								</h4>
							</a>
						</li>
					</ul>
				</div>

				<div
					className={cx(
						'main-content__box',
						'main-content__box--location',
					)}
				>
					<div className={cx('main-content__header')}>
						<h2 className={cx('main-content__title')}>
							지역별 대표 클밍장
						</h2>
						<a href="#" className={cx('main-content__button')}>
							더보기
						</a>
					</div>

					<ul
						className={cx('main-content-location-option')}
						role="listbox"
					>
						{/* TODO - 선택 되었을 경우 aria-selected="true" 적용 */}
						<li
							className={cx('main-content-location-option__item')}
							role="option"
							aria-selected="true"
						>
							<button
								type="button"
								className={cx(
									'main-content-location-option__button',
								)}
							>
								서울
							</button>
						</li>

						<li
							className={cx('main-content-location-option__item')}
							role="option"
							aria-selected="false"
						>
							<button
								type="button"
								className={cx(
									'main-content-location-option__button',
								)}
							>
								경기도
							</button>
						</li>
					</ul>

					<ul className={cx('main-content-location')}>
						<li className={cx('main-content-location__item')}>
							<a
								href="#"
								className={cx('main-content-location__link')}
							>
								<div
									className={cx('main-content-location__img')}
								>
									<ClimbingLogo />
								</div>

								<div>
									<h4
										className={cx(
											'main-content-location__name',
										)}
									>
										클라이밍
									</h4>
									<p
										className={cx(
											'main-content-location__location',
										)}
									>
										서울시
									</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<BottomNavi />
			</div>
			<MainSearch />
		</>
	);
};

export default MainPage;
