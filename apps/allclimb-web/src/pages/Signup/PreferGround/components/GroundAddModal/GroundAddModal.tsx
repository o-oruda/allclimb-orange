import classNames from 'classnames/bind';
import styles from '@/pages/SignUp/SignUpPage.module.scss';
import { useState } from 'react';

import useModalStore from '@/components/Modal/useModalStore';
import useSearchStore from '@/components/Search/features/useSearchStore';
import useManagePreferList from '../../hooks/useManagePreferList';
import useSearchAutoComplete from '../../hooks/useSearchAutoComplete';
import FullPageModal from '@/components/Modal/FullPageModal/FullPageModal';
import Search from '@/components/Search';
import NavBar from '@/components/NavBar/NavBar';

const cx = classNames.bind(styles);

const GroundAddModal = () => {
	// 선택한 클라이밍장 결과
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const { matchResult } = useSearchAutoComplete();
	const { searchValue, setSearchValue } = useSearchStore();
	const { addPreferGround } = useManagePreferList();
	const { closeModal } = useModalStore();

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
												key={ground}
												onClick={() => {
													setSelectedTags([
														...selectedTags,
														ground,
													]);
												}}
											>
												{ground}
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
					{selectedTags?.length > 0 &&
						selectedTags.map((selected) => {
							return (
								<div
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
										onClick={() => {
											const newSelected =
												selectedTags.filter(
													(item) => item !== selected,
												);
											setSelectedTags(newSelected);
										}}
									>
										<span className="blind">입력 삭제</span>
									</button>
								</div>
							);
						})}
				</div>
			</div>

			<div
				className={cx('sign-up-bottom', {
					'sign-up-bottom--active': selectedTags.length > 0,
				})}
			>
				<button
					type="button"
					className={cx('sign-up-bottom__button')}
					onClick={() => {
						setSearchValue('');
						addPreferGround(selectedTags);
						closeModal();
					}}
				>
					추가
				</button>
			</div>
		</FullPageModal>
	);
};

export default GroundAddModal;
