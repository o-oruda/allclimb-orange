import FullPageModal from '@/components/Modal/FullPageModal/FullPageModal';
import styles from './MainSearch.module.scss';
import classNames from 'classnames/bind';
import Search from '@/components/Search';
import useSearch from '@/components/Search/features/useSearch';
import RecentSearch from './RecentSearch/RecentSearch';
import RealTimeSearch from './RealTimeSearch/RealTimeSearch';
import SearchResult from './SearchResult/SearchResult';
import useSearchAutoComplete from '@/hooks/useSearchAutoComplete';
import { CLIMBING_GROUND } from '@/models/const/common';

const cx = classNames.bind(styles);

const MainSearch = () => {
	const { searchValue } = useSearch();
	const { matchResult } = useSearchAutoComplete({
		list: CLIMBING_GROUND,
		criteria: ['name', 'location'],
	});

	return (
		<FullPageModal>
			<div className={cx('main-search')}>
				<div className={cx('main-search__top')}>
					<Search />
				</div>

				<div className={cx('main-search__scroll')}>
					{searchValue ? (
						<ul className={cx('main-search-reulst')}>
							{matchResult.map((result) => {
								return (
									<SearchResult
										text={result}
										keyword={searchValue}
										key={result.name}
									/>
								);
							})}
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
