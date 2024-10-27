import styles from '../MainSearch.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const RecentSearch = () => {
	return (
		<div className={cx('main-search__box')}>
			<h3 className={cx('main-search__title')}>최근 검색어</h3>
			<ul className={cx('main-search-history')}>
				<li className={cx('main-search-history__item')}>
					<button
						type="button"
						className={cx('main-search-history__button')}
					>
						가나다라마바사
					</button>
				</li>

				<li className={cx('main-search-history__item')}>
					<button
						type="button"
						className={cx('main-search-history__button')}
					>
						가나다라마바사
					</button>
				</li>

				<li className={cx('main-search-history__item')}>
					<button
						type="button"
						className={cx('main-search-history__button')}
					>
						가나다라마바사
					</button>
				</li>

				<li className={cx('main-search-history__item')}>
					<button
						type="button"
						className={cx('main-search-history__button')}
					>
						가나다라마바사
					</button>
				</li>
			</ul>
		</div>
	);
};

export default RecentSearch;
