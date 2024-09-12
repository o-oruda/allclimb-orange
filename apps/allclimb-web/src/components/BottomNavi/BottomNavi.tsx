import styles from './BottomNavi.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BottomNavi = () => {
	return (
		<div className={cx('bottom-navi')}>
			<ul className={cx('bottom-navi-list')}>
				<li className={cx('bottom-navi-list__item')}>
					{/* TODO - 선택시 aria-current="true" 적용 */}
					<button
						className={cx(
							'bottom-navi-list__button',
							'bottom-navi-list__button--home',
						)}
						aria-current="page"
					>
						홈
					</button>
				</li>

				<li className={cx('bottom-navi-list__item')}>
					<button
						className={cx(
							'bottom-navi-list__button',
							'bottom-navi-list__button--ticket',
						)}
						aria-current="false"
					>
						이용권
					</button>
				</li>

				<li className={cx('bottom-navi-list__item')}>
					<button
						className={cx(
							'bottom-navi-list__button',
							'bottom-navi-list__button--pay',
						)}
						aria-current="false"
					>
						올페이
					</button>
				</li>

				<li className={cx('bottom-navi-list__item')}>
					<button
						className={cx(
							'bottom-navi-list__button',
							'bottom-navi-list__button--record',
						)}
						aria-current="false"
					>
						기록
					</button>
				</li>

				<li className={cx('bottom-navi-list__item')}>
					<button
						className={cx(
							'bottom-navi-list__button',
							'bottom-navi-list__button--more',
						)}
						aria-current="false"
					>
						마이
					</button>
				</li>
			</ul>
		</div>
	);
};

export default BottomNavi;
