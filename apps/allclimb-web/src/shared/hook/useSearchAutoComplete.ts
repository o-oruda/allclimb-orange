import { IGymInfo } from '@/pages/Main/type/gymInfo';
import useSearchStore from '@/shared/component/Search/features/useSearchStore';
import { useEffect, useState } from 'react';

interface IAutoCompleteProps {
	list: any[];
	criteria: string[];
}

const useSearchAutoComplete = (props: IAutoCompleteProps) => {
	const { list, criteria } = props;

	const { searchValue } = useSearchStore();

	// 자동완성 검색 결과
	const [matchResult, setMatchResult] = useState<IGymInfo[]>([]);

	useEffect(() => {
		searchValue && fnMatchGround();
	}, [searchValue]);

	/**
	 * 검색 결과 자동완성
	 */
	const fnMatchGround = () => {
		if (!searchValue) setMatchResult([]);
		else {
			setMatchResult(
				list.filter((gym) => {
					for (const item of criteria) {
						if (gym[item].includes(searchValue)) {
							return true;
						}
					}
				}),
			);
		}
	};

	return { fnMatchGround, matchResult };
};

export default useSearchAutoComplete;
