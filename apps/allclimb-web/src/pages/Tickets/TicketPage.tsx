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

							<span className={cx('ticket-list__number')}>
								(FTEADGH22)
							</span>

							<span className={cx('ticket-list__count')}>
								<em>3</em>/10회
							</span>
						</li>

						<li className={cx('ticket-list__item')}>
							<h2 className={cx('ticket-list__title')}>
								올클 블랙 이용권
							</h2>

							<span className={cx('ticket-list__number')}>
								(FTEADGH22)
							</span>

							<span className={cx('ticket-list__count')}>
								<em>3</em>/10회
							</span>
						</li>

						<li className={cx('ticket-list__item')}>
							<h2 className={cx('ticket-list__title')}>
								올클 블랙 이용권
							</h2>

							<span className={cx('ticket-list__number')}>
								(FTEADGH22)
							</span>

							<span className={cx('ticket-list__count')}>
								<em>3</em>/10회
							</span>
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
							<h2 className={cx('ticket-history__name')}>
								볼더하이웨이클라이밍
							</h2>

							<p className={cx('ticket-history__date')}>
								00-00-00 00:00
							</p>
						</div>
					</li>
				</ul>

				<div className={cx('ticket-detail')}>
					<div className={cx('ticket-detail-header')}>
						<h2 className={cx('ticket-detail-header__title')}>블랙 이용권</h2>
						<span className={cx('ticket-detail-header__state')}>부분취소</span>
					</div>

					<dl className={cx('ticket-detail-info')}>
						<div className={cx('ticket-detail-info__row')}>
							<dt className={cx('ticket-detail-info__title')}>남은 횟수</dt>
							<dd className={cx('ticket-detail-info__text')}>3회</dd>
						</div>

						<div className={cx('ticket-detail-info__row')}>
							<dt className={cx('ticket-detail-info__title')}>구매 번호</dt>
							<dd className={cx('ticket-detail-info__text')}>000000000</dd>
						</div>

						<div className={cx('ticket-detail-info__row')}>
							<dt className={cx('ticket-detail-info__title')}>취소 일시</dt>
							<dd className={cx('ticket-detail-info__text')}>12-12-12 00:00</dd>
						</div>

						<div className={cx('ticket-detail-info__row')}>
							<dt className={cx('ticket-detail-info__title')}>결제 일시</dt>
							<dd className={cx('ticket-detail-info__text')}>12-12-12 00:00</dd>
						</div>

						<div className={cx('ticket-detail-info__row')}>
							<dt className={cx('ticket-detail-info__title')}>가격</dt>
							<dd className={cx('ticket-detail-info__text')}>200,000 <span className={cx('ticket-detail-info__unit')}>원</span></dd>
						</div>

						<div className={cx('ticket-detail-info__row')}>
							<dt className={cx('ticket-detail-info__title')}>할인 금액</dt>
							<dd className={cx('ticket-detail-info__text')}>-200,000 <span className={cx('ticket-detail-info__unit')}>원</span></dd>
						</div>

						<div className={cx('ticket-detail-info__row', 'ticket-detail-info__row--total')}>
							<dt className={cx('ticket-detail-info__title')}>총 결제 금액</dt>
							<dd className={cx('ticket-detail-info__text')}>170,000 <span className={cx('ticket-detail-info__unit')}>원</span></dd>
						</div>
					</dl>

					<button
						type='button' 
						className={cx('ticket-detail-button')}
					>
						취소 상세보기
					</button>
				</div>

				<BottomNavi />
			</div>
		</>
	);
};

export default Ticket;
