import { ChangeEvent } from 'react';
import useSearchStore from './useSearchStore';

const useSearch = () => {
	const { searchValue, setSearchValue } = useSearchStore();

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

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
