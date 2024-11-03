import classNames from 'classnames/bind';

import styles from '../SignUpPage.module.scss';

import useToggleBadge from './hooks/useToggleBadge';
import NextButton from './components/NextButton';
import useModalStore from '@/components/Modal/useModalStore';
import useSignUpStore from '@/store/useSignupStore';
import GroundAddModal from './components/GroundAddModal';
import Badge from '@/components/Badge';
import { IFunnelStep } from '@/models/common';

const cx = classNames.bind(styles);

const PreferGround = ({ onNext }: IFunnelStep) => {
	const { activeGym, toggleBadge } = useToggleBadge();
	const { openModal } = useModalStore();
	const { gymList, customGymList } = useSignUpStore();

	return (
		<>
			<h2 className={cx('sign-up__title')}>
				평소 관심있던
				<br />
				클라이밍장은 어디인가요?
			</h2>

			<div className={cx('sign-up-center')}>
				<ul className={cx('sign-up-center__list')}>
					{/* 기본 클라이밍장 정보 */}
					{gymList.map((ground: string) => (
						<li className={cx('sign-up-center__item')} key={ground}>
							<Badge
								className={cx('sign-up-center__button', {
									'sign-up-center__button--active':
										activeGym[ground],
								})}
								onClick={() => toggleBadge(ground)}
							>
								{ground}
							</Badge>
						</li>
					))}

					{/* 사용자 직접 추가 클라이밍장 정보 */}
					{customGymList.length > 0 &&
						customGymList.map((customGym: string) => (
							<li
								className={cx('sign-up-center__item')}
								key={customGym}
							>
								<Badge
									className={cx(
										'sign-up-center__button',
										'sign-up-center__button--active',
									)}
								>
									{customGym}
								</Badge>
							</li>
						))}
				</ul>

				<Badge
					className={cx(
						'sign-up-center__button',
						'sign-up-center__button--plus',
					)}
					onClick={openModal}
				>
					직접추가
				</Badge>
			</div>

			{/* 클라이밍장 직접 추가 모달 */}
			<GroundAddModal />

			{/* [다음] 버튼 */}
			<NextButton activeGym={activeGym} onNext={onNext} />
		</>
	);
};

export default PreferGround;
