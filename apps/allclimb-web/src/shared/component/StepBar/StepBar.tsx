import React, { memo, useMemo } from 'react';
import styles from './StepBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface IProps {
	// 현재 스텝
	step: number;

	// 전체 스텝
	totalStep: number;

	// 시맨틱 태그용 타이틀
	hiddenTitle?: string;
}

/**
 * 스텝 타입의 프로그레스바
 */
const StepBar: React.FC<IProps> = ({ step, totalStep, hiddenTitle }) => {
	const renderStep = useMemo(
		() =>
			Array.from({ length: totalStep }, (_, i) => (
				<div
					key={i + 1}
					className={cx('progress-bar__step', {
						'progress-bar__step--active': i + 1 === step,
					})}
				>
					<span className="blind">{i + 1}단계</span>
				</div>
			)),
		[step, totalStep],
	);

	return (
		<div className={cx('progress-bar')}>
			{hiddenTitle && <h3 className="blind">{hiddenTitle}</h3>}
			{renderStep}
		</div>
	);
};

export default memo(StepBar);
