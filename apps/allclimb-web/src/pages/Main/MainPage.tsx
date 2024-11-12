import { BottomNavi } from '@/shared/component';
import {
	MainHeader,
	AllClimbPick,
	NewGyms,
	GymRegion,
	MainSearchModal,
} from './ui';

import styles from './MainPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MainPage = () => {
	return (
		<>
			<div className={cx('main')}>
				{/* 헤더 - 검색 */}
				<MainHeader />

				<div className={cx('main-content')}>
					<div className={cx('main-content__header')}>
						<h2 className={cx('main-content__title')}>
							볼더링 실력을 올리고 싶다면? <br /> 다양한 문제의
							올클라이밍 짐!
						</h2>
					</div>

					{/* 올클's pick */}
					<AllClimbPick />
				</div>

				{/* 새로운 클밍장도 둘러봐! */}
				<NewGyms />

				{/* 지역별 대표 암장 */}
				<GymRegion />

				<BottomNavi />
			</div>
			<MainSearchModal />
		</>
	);
};

export default MainPage;
