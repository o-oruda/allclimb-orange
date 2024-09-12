import { create } from 'zustand';

interface ISignUpData {
	// 관심 암장
	preferGround: string[];

	// 활동지역
	activityArea: string;

	// 경력
	careerDuration: string;
}

interface ISignUpState {
	// 현재 스텝
	step: number;

	// 회원가입 선택 정보
	signUpState: ISignUpData;

	// 현재 스텝 업데이트
	updateStep: (step: number) => void;

	// 회원가입 선택 정보 업데이트
	updateSignUpState: (newValue: string | string[]) => void;

	gymList: string[];
	setGymList: (gymList: string[]) => void;

	// 사용자 직접 추가 클라이밍장 목록
	customGymList: string[];
	setCustomGymList: (customList: string[]) => void;
}

const defaultGroundList = [
	'신촌담장',
	'온사이트클라이밍',
	'손상원클라이밍 강남점',
	'허브클라이밍',
	'치즈클라이밍',
	'몽키즈',
	'크래커클라이밍',
];

const useSignUpStore = create<ISignUpState>((set) => ({
	step: 1,
	signUpState: {
		preferGround: [''],
		activityArea: '',
		careerDuration: '',
	},
	updateStep: (step: number) => set({ step }),
	updateSignUpState: (newValue: string | string[]) =>
		set((state) => ({
			signUpState: {
				...state.signUpState,
				...(state.step === 1 &&
					Array.isArray(newValue) && { preferGround: newValue }),
				...(state.step === 2 &&
					typeof newValue === 'string' && { activityArea: newValue }),
				...(state.step === 3 &&
					typeof newValue === 'string' && {
						careerDuration: newValue,
					}),
			},
		})),

	gymList: defaultGroundList,
	setGymList: (gymList: string[]) => set({ gymList }),
	customGymList: [],
	setCustomGymList: (customGymList) => set({ customGymList }),
}));

export default useSignUpStore;
