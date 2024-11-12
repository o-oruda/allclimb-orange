import classNames from 'classnames/bind';
import styles from '@/pages/SignUp/SignupPage.module.scss';
import { useState } from 'react';

import useModalStore from '@/shared/hook/useModalStore';
import useSearchStore from '@/shared/component/Search/features/useSearchStore';
import useManagePreferList from '../../../hook/common/useManagePreferList';
import FullPageModal from '@/shared/component/Modal/FullPageModal/FullPageModal';
import useSignUpStore from '@/store/useSignupStore';
import useSearchAutoComplete from '@/shared/hook/useSearchAutoComplete';
import { CLIMBING_GROUND } from '@/shared/constant/common';
import { Search, NavBar } from '@/shared/component';

const cx = classNames.bind(styles);

const GroundAddModal = () => {
	// 선택한 클라이밍장 결과
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [showAddButton, setShowAddButton] = useState<boolean>(false);

	const { matchResult } = useSearchAutoComplete({
		list: CLIMBING_GROUND,
		criteria: ['name'],
	});
	const { searchValue, setSearchValue } = useSearchStore();
	const { addPreferGround } = useManagePreferList();
	const { closeModal } = useModalStore();
	const { customGymList } = useSignUpStore();

	/**
	 * 클라이밍장 추가
	 * @param value // 클라이밍장
	 */
	const onClickGround = (value: string) => {
		if (!selectedTags.includes(value)) {
			setSelectedTags([...selectedTags, value]);
		}

		setSearchValue('');
	};

	/**
	 * 추가한 클라이밍장 제거
	 * @param value
	 */
	const onDeleteBadge = (value: string) => {
		const newSelected = selectedTags.filter((item) => item !== value);
		setSelectedTags(newSelected);

		newSelected.length === 0 &&
			customGymList.length &&
			setShowAddButton(true);
	};

	/**
	 * 모달 상태 초기화
	 */
	const fnSetDefault = () => {
		setSearchValue('');
		addPreferGround(selectedTags);
		closeModal();
		setShowAddButton(false);
	};

	return (
		<FullPageModal>
			<NavBar goBack={closeModal} />
			<div className={cx('sign-up-search')}>
				<h3 className={cx('sign-up-search__title')}>
					관심있는 클라이밍 장을
					<br />
					추가해보세요!
				</h3>

				<div className={cx('sign-up-search__box')}>
					<Search />

					{/* [TODO] 자동완성 div  */}
					{searchValue &&
						(matchResult?.length > 0 ? (
							<div className={cx('sign-up-auto-search__box')}>
								<ul>
									{matchResult.map((ground) => {
										return (
											<li
												key={ground.name}
												onClick={() =>
													onClickGround(ground.name)
												}
											>
												{ground.name}
											</li>
										);
									})}
								</ul>
							</div>
						) : (
							<div className={cx('sign-up-auto-search__box')}>
								검색 결과가 없습니다
							</div>
						))}
				</div>

				<div className={cx('sign-up-search-result__box')}>
					<ul className={cx('sign-up-center__list')}>
						{selectedTags?.length > 0 &&
							selectedTags.map((selected) => {
								return (
									<li
										className={cx(
											'sign-up-search-result__button',
										)}
										key={selected}
									>
										{selected}
										<button
											className={cx(
												'search-result-tag__clear',
											)}
											type="button"
											onClick={() =>
												onDeleteBadge(selected)
											}
										>
											<span className="blind">
												입력 삭제
											</span>
										</button>
									</li>
								);
							})}
					</ul>
				</div>
			</div>

			<div
				className={cx('sign-up-bottom', {
					'sign-up-bottom--active':
						selectedTags.length > 0 || showAddButton,
				})}
			>
				<button
					type="button"
					className={cx('sign-up-bottom__button')}
					onClick={fnSetDefault}
				>
					추가
				</button>
			</div>
		</FullPageModal>
	);
};

export default GroundAddModal;
