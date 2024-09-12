import { useCallback, useState } from 'react';

import styles from '../SignUpPage.module.scss';
import classNames from 'classnames/bind';
import { Select } from 'models/common';
import useSignUpStore from '@/store/useSignupStore';

const cx = classNames.bind(styles);

// 선택지로 제공되는 활동 지역 리스트
const AREA_LIST: Select[] = [
	{ label: '서울', value: '서울' },
	{ label: '경기', value: '경기' },
	{ label: '강원', value: '강원' },
	{ label: '충청', value: '충청' },
	{ label: '전라', value: '전라' },
	{ label: '경상', value: '경상' },
	{ label: '부산', value: '부산' },
	{ label: '제주', value: '제주' },
	{ label: '전국', value: '전국' },
] as const;

/**
 * 활동지역 선택
 */
const ActivityArea = () => {
	// 선택된 활동지역 데이터
	const [selectedArea, setSelectedArea] = useState<string>('');

	const { step, updateStep, updateSignUpState } = useSignUpStore();

	/**
	 * [활동지역] 클릭 이벤트
	 */
	const onClick = useCallback((area: string) => setSelectedArea(area), []);

	/**
	 * [다음] 클릭 이벤트
	 */
	const nextStep = useCallback(() => {
		updateSignUpState(selectedArea);
		updateStep(step + 1);
	}, [selectedArea]);

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
