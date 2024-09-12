import { useState } from 'react';

/**
 * 뱃지 컴포넌트 toggle 관리 hooks
 * @returns
 */
const useToggleBadge = () => {
	// 클라이밍장 토글 상태 관리
	const [activeGym, setActiveGym] = useState<{
		[key: string]: boolean;
	}>({});

	/**
	 * 뱃지 선택 함수
	 */
	const toggleBadge = (gym: string) => {
		setActiveGym((prevStat: { [key: string]: boolean }) => ({
			...prevStat,
			[gym]: !prevStat[gym],
		}));
	};

	return {
		activeGym,
		toggleBadge,
	};
};

export default useToggleBadge;
