import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BottomNavi.module.scss';
import classNames from 'classnames/bind';
import { NAV_ITEMS } from './models/const';

const cx = classNames.bind(styles);

const BottomNavi = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div className={cx('bottom-navi')}>
			<ul className={cx('bottom-navi-list')}>
				{NAV_ITEMS.map((item) => (
					<li
						key={item.path}
						className={cx('bottom-navi-list__item')}
					>
						<button
							className={cx(
								'bottom-navi-list__button',
								item.className,
							)}
							aria-current={
								location.pathname === item.path && 'true'
							}
							onClick={() => navigate(item.path)}
						>
							{item.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BottomNavi;
