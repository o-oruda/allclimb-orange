import styles from '../MainSearch.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const RealTimeSearch = () => {
	return (
		<div className={cx('main-search__box')}>
			<h3 className={cx('main-search__title')}>실시간 인기 클밍장</h3>

			<ul className={cx('main-search-rank')}>
				<li className={cx('main-search-rank__item')}>
					<a href="#" className={cx('main-search-rank__button')}>
						가나다라마바사가나다라마바사가나다라마바사
					</a>
				</li>

				<li className={cx('main-search-rank__item')}>
					<a href="#" className={cx('main-search-rank__button')}>
						가나다라마바사가나다라마바사가나다라마바사
					</a>
				</li>

				<li className={cx('main-search-rank__item')}>
					<a href="#" className={cx('main-search-rank__button')}>
						가나다라마바사가나다라마바사가나다라마바사
					</a>
				</li>

				<li className={cx('main-search-rank__item')}>
					<a href="#" className={cx('main-search-rank__button')}>
						가나다라마바사가나다라마바사가나다라마바사
					</a>
				</li>
			</ul>
		</div>
	);
};

export default RealTimeSearch;
