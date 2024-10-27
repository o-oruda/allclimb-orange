import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import useSearch from './features/useSearch';

const cx = classNames.bind(styles);

const Search = () => {
	const { onChange, searchValue, resetSearchValue } = useSearch();

	return (
		<div className={cx('search')}>
			<div className={cx('search-box')}>
				<input
					type="text"
					placeholder="클라이밍장 검색"
					title="검색창"
					className={cx('search-box__input')}
					value={searchValue}
					onChange={onChange}
				/>
				{/* TODO [F/E] - 노출시 한글자라도 있고 포커스 시 search-box__clear--active 추가 */}
				<button
					className={cx('search-box__clear', {
						'search-box__clear--active': searchValue,
					})}
					type="button"
					onClick={resetSearchValue}
				>
					<span className="blind">입력 삭제</span>
				</button>
			</div>
			<button className={cx('search__close')} type="button">
				취소
			</button>
		</div>
	);
};

export default Search;
