import { CLIMBING_GROUND } from '@/shared/constant';
import { FullPageModal, Search } from '@/shared/component';
import useSearch from '@/shared/hook/useSearch';
import useSearchAutoComplete from '@/shared/hook/useSearchAutoComplete';

import RealTimeSearch from './RealTimeSearch/RealTimeSearch';
import RecentSearch from './RecentSearch/RecentSearch';
import SearchResult from './SearchResult/SearchResult';

import styles from '../../MainPage.module.scss';
import classNames from 'classnames/bind';

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
