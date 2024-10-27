import ClimbingLogo from '@/components/ClimbingLogo';
import FullPageModal from '@/components/Modal/FullPageModal/FullPageModal';
import styles from './MainSearch.module.scss';
import classNames from 'classnames/bind';
import Search from '@/components/Search';
import useSearch from '@/components/Search/features/useSearch';
import RecentSearch from './RecentSearch/RecentSearch';
import RealTimeSearch from './RealTimeSearch/RealTimeSearch';

const cx = classNames.bind(styles);

const MainSearch = () => {
	const { searchValue } = useSearch();
	return (
		<FullPageModal>
			<div className={cx('main-search')}>
				<div className={cx('main-search__top')}>
					<Search />
				</div>

				<div className={cx('main-search__scroll')}>
					{searchValue ? (
						<ul className={cx('main-search-reulst')}>
							<li className={cx('main-search-reulst__item')}>
								<a
									href="#"
									className={cx('main-search-reulst__link')}
								>
									<div
										className={cx(
											'main-search-reulst__img',
										)}
									>
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
					) : (
						<>
							<RecentSearch />

							{/* 실시간 인기 클밍장 */}
							<RealTimeSearch />
						</>
					)}
				</div>
			</div>
		</FullPageModal>
	);
};

export default MainSearch;
