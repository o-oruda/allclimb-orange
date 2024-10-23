import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BottomNavi.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NAV_ITEMS: {
	path: string;
	label: string;
	className: string;
}[] = [
	{ path: '/', label: '홈', className: 'bottom-navi-list__button--home' },
	{
		path: '/tickets',
		label: '이용권',
		className: 'bottom-navi-list__button--ticket',
	},
	{
		path: '/pay',
		label: '올페이',
		className: 'bottom-navi-list__button--pay',
	},
	{
		path: '/record',
		label: '기록',
		className: 'bottom-navi-list__button--record',
	},
	{ path: '/my', label: '마이', className: 'bottom-navi-list__button--more' },
];

const BottomNavi = () => {
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location.pathname);

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
