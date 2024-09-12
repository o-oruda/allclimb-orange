import ClimbingLogo from '@/components/ClimbingLogo';
import FullPageModal from '@/components/Modal/FullPageModal/FullPageModal';
import styles from './MainSearch.module.scss';
import classNames from 'classnames/bind';
import Search from '@/components/Search';

const cx = classNames.bind(styles);

const MainSearch = () => {
	return (
		<FullPageModal>
			<div className={cx('main-search')}>
				<div className={cx('main-search__top')}>
					<Search />
				</div>

				<div className={cx('main-search__scroll')}>
					{/* TODO - 검색 입력하면 미노출 */}
					<div className={cx('main-search__box')}>
						<h3 className={cx('main-search__title')}>
							최근 검색어
						</h3>

						<ul className={cx('main-search-history')}>
							<li className={cx('main-search-history__item')}>
								<button
									type="button"
									className={cx(
										'main-search-history__button',
									)}
								>
									가나다라마바사
								</button>
							</li>

							<li className={cx('main-search-history__item')}>
								<button
									type="button"
									className={cx(
										'main-search-history__button',
									)}
								>
									가나다라마바사
								</button>
							</li>

							<li className={cx('main-search-history__item')}>
								<button
									type="button"
									className={cx(
										'main-search-history__button',
									)}
								>
									가나다라마바사
								</button>
							</li>

							<li className={cx('main-search-history__item')}>
								<button
									type="button"
									className={cx(
										'main-search-history__button',
									)}
								>
									가나다라마바사
								</button>
							</li>
						</ul>
					</div>

					{/* TODO - 검색 입력하면 미노출 */}
					<div className={cx('main-search__box')}>
						<h3 className={cx('main-search__title')}>
							실시간 인기 클밍장
						</h3>

						<ul className={cx('main-search-rank')}>
							<li className={cx('main-search-rank__item')}>
								<a
									href="#"
									className={cx('main-search-rank__button')}
								>
									가나다라마바사가나다라마바사가나다라마바사
								</a>
							</li>

							<li className={cx('main-search-rank__item')}>
								<a
									href="#"
									className={cx('main-search-rank__button')}
								>
									가나다라마바사가나다라마바사가나다라마바사
								</a>
							</li>

							<li className={cx('main-search-rank__item')}>
								<a
									href="#"
									className={cx('main-search-rank__button')}
								>
									가나다라마바사가나다라마바사가나다라마바사
								</a>
							</li>

							<li className={cx('main-search-rank__item')}>
								<a
									href="#"
									className={cx('main-search-rank__button')}
								>
									가나다라마바사가나다라마바사가나다라마바사
								</a>
							</li>
						</ul>
					</div>

					<ul className={cx('main-search-reulst')}>
						<li className={cx('main-search-reulst__item')}>
							<a
								href="#"
								className={cx('main-search-reulst__link')}
							>
								<div className={cx('main-search-reulst__img')}>
									<ClimbingLogo />
								</div>

								<div>
									<h4
										className={cx(
											'main-search-reulst__name',
										)}
									>
										{/* TODO - 검색어 em 태그 감싸기 */}
										<em>클</em>라이밍
									</h4>
									<p
										className={cx(
											'main-search-reulst__location',
										)}
									>
										{/* TODO - 검색어 em 태그 감싸기 */}
										<em>서</em>울시
									</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</FullPageModal>
	);
};

export default MainSearch;
