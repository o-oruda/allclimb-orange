import { useCallback, useState } from 'react';

import useSignUpStore from '@/store/useSignupStore';
import { IFunnelStep } from '@/shared/type/funnel';

import { AREA_LIST } from '../../constant/areaList';

import styles from '../../SignupPage.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 활동지역 선택
 */
const ActivityArea = ({ onNext }: IFunnelStep) => {
	// 선택된 활동지역 데이터
	const [selectedArea, setSelectedArea] = useState<string>('');

	const { setActivityArea } = useSignUpStore();

	/**
	 * [활동지역] 클릭 이벤트
	 */
	const onClick = useCallback((area: string) => setSelectedArea(area), []);

	/**
	 * [다음] 클릭 이벤트
	 */
	const nextStep = useCallback(() => {
		setActivityArea(selectedArea);
		onNext?.();
	}, [selectedArea, onNext]);

	return (
		<>
			<h2 className={cx('sign-up__title')}>
				주로 활동하는 지역은
				<br />
				어디인가요?
			</h2>

			<div className={cx('sign-up-area')}>
				<ul className={cx('sign-up-area__list')}>
					{AREA_LIST.map((area) => (
						<li
							className={cx('sign-up-area__item')}
							key={area.value}
						>
							<button
								type="button"
								className={cx('sign-up-area__button', {
									'sign-up-area__button--active':
										area.value === selectedArea,
								})}
								onClick={() => onClick(area.value)}
							>
								{area.label}
							</button>
						</li>
					))}
				</ul>
			</div>

			<div
				className={cx('sign-up-bottom', {
					'sign-up-bottom--active': !!selectedArea,
				})}
			>
				<button
					type="button"
					className={cx('sign-up-bottom__button')}
					onClick={nextStep}
				>
					다음
				</button>
			</div>
		</>
	);
};

export default ActivityArea;
