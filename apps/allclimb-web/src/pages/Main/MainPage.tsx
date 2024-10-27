import styles from './MainPage.module.scss';
import classNames from 'classnames/bind';
import MainSearch from './components/popup/MainSearch/MainSearch';
import BottomNavi from '@/components/BottomNavi/BottomNavi';
import GymRegion from './GymRegion/GymRegion';
import NewGyms from './NewGyms/NewGyms';
import AllClimbPick from './AllClimbPick/AllClimbPick';
import MainHeader from './components/MainHeader/MainHeader';

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
			<MainSearch />
		</>
	);
};

export default MainPage;
