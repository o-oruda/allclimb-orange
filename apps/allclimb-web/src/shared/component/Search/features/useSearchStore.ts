import { create } from 'zustand';

interface SearchState {
	// 검색 입력값
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
	searchValue: '',
	setSearchValue: (searchValue: string) => set({ searchValue }),
}));

export default useSearchStore;
