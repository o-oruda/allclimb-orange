import styles from './Ticket.module.scss';
import classNames from 'classnames/bind';
import BottomNavi from '@/shared/component/BottomNavi/BottomNavi';

const cx = classNames.bind(styles);

const Ticket = () => {
	return (
		<>
			<div className={cx('ticket')}>
				<h2 className={cx('ticket__title')}>
					내 이용권 <em>1</em>
				</h2>

				<ul className={cx('ticket-tab')} role="tablist">
					<li
						className={cx('ticket-tab__item')}
						role="tab"
						aria-selected="true"
					>
						<button
							className={cx('ticket-tab__button')}
							type="button"
						>
							이용내역
						</button>
					</li>

					<li
						className={cx('ticket-tab__item')}
						role="tab"
						aria-selected="true"
					>
						<button
							className={cx('ticket-tab__button')}
							type="button"
						>
							이용내역
						</button>
					</li>
				</ul>

				<BottomNavi />
			</div>
		</>
	);
};

export default Ticket;
