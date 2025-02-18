import styles from './Ticket.module.scss';
import classNames from 'classnames/bind';
import BottomNavi from '@/shared/component/BottomNavi/BottomNavi';

const cx = classNames.bind(styles);

const Ticket = () => {
	return (
		<>
			<div className={cx('ticket')}>
				<div className={cx('ticket__header')} />
				
				<h1 className={cx('ticket__title')}>
					내 이용권 <em>1</em>
				</h1>

				<div className={cx('ticket__list-box')}>
					<ul className={cx('ticket-list')}>
						<li className={cx('ticket-list__item')}>
							<h2 className={cx('ticket-list__title')}>
								올클 블랙 이용권
							</h2>
							<span className={cx('ticket-list__number')}></span>
						</li>
					</ul>
				</div>

				<ul className={cx('ticket-tab')} role="tablist">
					<li
						className={cx('ticket-tab__item')}
						role="tab"
						aria-selected="false"
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
							결제정보
						</button>
					</li>
				</ul>

				<ul className={cx('ticket-history')}>
					<li className={cx('ticket-history__item')}>
						<div className={cx('ticket-history__img')}>
							<img src='' width="100%" height="100%" alt="암장명이들어갑니다." />
						</div>

						<div className={cx('ticket-history__left')}>
							<h3 className={cx('ticket-history__name')}>
								볼더하이웨이클라이밍
							</h3>

							<p className={cx('ticket-history__date')}>
								00-00-00 00:00
							</p>
						</div>

						<div className={cx('ticket-history__right')}>
							<strong className={cx('ticket-history__count')}>
								블랙 이용권 5회권
							</strong>

							<p className={cx('ticket-history__number')}>
								(FTESDGGE)
							</p>
						</div>
					</li>

					<li className={cx('ticket-history__item')}>
						<div className={cx('ticket-history__img')}>
							<img src='' width="100%" height="100%" alt="암장명이들어갑니다." />
						</div>

						<div className={cx('ticket-history__left')}>
							<h3 className={cx('ticket-history__name')}>
								볼더하이웨이클라이밍
							</h3>

							<p className={cx('ticket-history__date')}>
								00-00-00 00:00
							</p>
						</div>
					</li>
				</ul>

				<div className={cx('ticket-detail')}>
					<div className={cx('ticket-detail-header')}>

					</div>
				</div>

				<BottomNavi />
			</div>
		</>
	);
};

export default Ticket;
