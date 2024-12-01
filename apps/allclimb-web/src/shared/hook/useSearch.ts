import { ChangeEvent } from 'react';
import useSearchStore from '../component/Search/features/useSearchStore';

const useSearch = () => {
	const { searchValue, setSearchValue } = useSearchStore();

	/**
	 * 검색어 입력시 이벤트 핸들러 함수
	 */
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	/**
	 * 검색어 초기화
	 */
	const resetSearchValue = () => {
		setSearchValue('');
	};

	return {
		searchValue,
		onChange,
		resetSearchValue,
	};
};

export default useSearch;
