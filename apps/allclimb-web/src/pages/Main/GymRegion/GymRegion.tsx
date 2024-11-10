import styles from '../MainPage.module.scss';
import classNames from 'classnames/bind';
import ClimbingLogo from '@/components/ClimbingLogo';
import Badge from '@/components/Badge';
import { REGIONS } from './models/consts';

const cx = classNames.bind(styles);

const GymRegion = () => {
	return (
		<div className={cx('main-content__box', 'main-content__box--location')}>
			<div className={cx('main-content__header')}>
				<h2 className={cx('main-content__title')}>
					지역별 대표 클밍장
				</h2>
				<a href="#" className={cx('main-content__button')}>
					더보기
				</a>
			</div>

			<ul className={cx('main-content-location-option')} role="listbox">
				{/* TODO - 선택 되었을 경우 aria-selected="true" 적용 */}
				{REGIONS.map((region) => (
					<li
						className={cx('main-content-location-option__item')}
						role="option"
						aria-selected="false"
						key={region.id}
					>
						<Badge
							className={cx(
								'main-content-location-option__button',
							)}
						>
							{region.name}
						</Badge>
					</li>
				))}
			</ul>

			<ul className={cx('main-content-location')}>
				<li className={cx('main-content-location__item')}>
					<a href="#" className={cx('main-content-location__link')}>
						<div className={cx('main-content-location__img')}>
							<ClimbingLogo />
						</div>

						<div>
							<h4 className={cx('main-content-location__name')}>
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
	);
};

export default GymRegion;
