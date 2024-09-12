import { create } from 'zustand';

interface ModalState {
	// 모달 오픈 여부
	isOpen: boolean;

	// 모달 오픈 함수
	openModal: () => void;

	// 모달 닫기 함수
	closeModal: () => void;

	// 모달 id
	id: string;
}

const useModalStore = create<ModalState>((set) => ({
	isOpen: false,
	openModal: () => set({ isOpen: true }),
	closeModal: () => set({ isOpen: false }),
	id: '',
}));

export default useModalStore;
