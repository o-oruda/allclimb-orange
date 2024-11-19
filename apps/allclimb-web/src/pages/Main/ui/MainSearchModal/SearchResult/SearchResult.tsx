import ClimbingLogo from '@/shared/component/ClimbingLogo';
import styles from '../MainSearch.module.scss';
import classNames from 'classnames/bind';
import { useHighLight } from '@/shared/hook/useHighLight';
import { IGymInfo } from '@/pages/Main/type/gymInfo';
const cx = classNames.bind(styles);

const SearchResult = ({
	text,
	keyword,
}: {
	text: IGymInfo;
	keyword: string;
}) => {
	const highlightedText = useHighLight({ text: text.name, keyword });
	const highlightedLocation = useHighLight({
		text: text.location || '',
		keyword,
	});

	return (
		<li className={cx('main-search-reulst__item')}>
			<a href="#" className={cx('main-search-reulst__link')}>
				<div className={cx('main-search-reulst__img')}>
					<ClimbingLogo />
				</div>

				<div>
					{/* 클밍장 이름 */}
					<h4 className={cx('main-search-reulst__name')}>
						{highlightedText}
					</h4>

					{/* 클밍장 위치 */}
					<p className={cx('main-search-reulst__location')}>
						{highlightedLocation}
					</p>
				</div>
			</a>
		</li>
	);
};

export default SearchResult;
