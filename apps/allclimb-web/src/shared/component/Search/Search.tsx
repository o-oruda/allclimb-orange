import useSearch from '@/shared/hook/useSearch';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import useModalStore from '@/shared/hook/useModalStore';

const cx = classNames.bind(styles);

const Search = () => {
	const { onChange, searchValue, resetSearchValue } = useSearch();
	const { closeModal } = useModalStore();

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
			<button
				className={cx('search__close')}
				type="button"
				onClick={closeModal}
			>
				취소
			</button>
		</div>
	);
};

export default Search;
