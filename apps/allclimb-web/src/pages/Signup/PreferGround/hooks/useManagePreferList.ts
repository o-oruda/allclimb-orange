import useSignUpStore from '@/store/useSignupStore';

const useManagePreferList = () => {
	const { setCustomGymList } = useSignUpStore();

	/**
	 * 사용자 선택한 클라이밍장 목록
	 * @param toggleResult
	 * @returns
	 */
	const getActiveGymList = (toggleResult: {
		[key: string]: boolean;
	}): string[] => {
		return Object.entries(toggleResult)
			.filter(([key, value]) => value === true)
			.map(([key, value]) => key);
	};

	// 사용자 직접 클라이밍장 추가
	const addPreferGround = (newList: string[]) => {
		setCustomGymList(newList);
	};

	return { addPreferGround, getActiveGymList };
};

export default useManagePreferList;
