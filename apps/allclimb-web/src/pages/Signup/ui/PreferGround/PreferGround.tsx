import useToggleBadge from '../../hook/common/useToggleBadge';

import { Badge } from '@/shared/component';
import useModalStore from '@/shared/hook/useModalStore';
import { IFunnelStep } from '@/shared/type/funnel';
import useSignUpStore from '@/store/useSignupStore';

import GroundAddModal from '../component/GroundAddModal';
import NextButton from '../component/NextButton';

import classNames from 'classnames/bind';
import styles from '../../SignupPage.module.scss';

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
