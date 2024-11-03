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
	// 회원가입 선택 정보
	signUpState: ISignUpData;

	// 회원가입 선택 정보 업데이트
	updateSignUpState: () => void;

	// 관심 클라이밍장
	gymList: string[];
	setGymList: (gymList: string[]) => void;

	// 사용자 직접 추가 클라이밍장 목록
	customGymList: string[];
	setCustomGymList: (customList: string[]) => void;

	// 활동 장소
	activityArea: string;
	setActivityArea: (activityArea: string) => void;

	// 처음 시작 날짜
	careerDuration: string;
	setCareerDuration: (careerDuration: string) => void;
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
	signUpState: {
		preferGround: [''],
		activityArea: '',
		careerDuration: '',
	},

	gymList: defaultGroundList,
	setGymList: (gymList: string[]) => set({ gymList }),
	customGymList: [],
	setCustomGymList: (customGymList) => set({ customGymList }),

	activityArea: '',
	setActivityArea: (activityArea: string) => set({ activityArea }),

	careerDuration: '',
	setCareerDuration: (careerDuration: string) => set({ careerDuration }),

	updateSignUpState: () =>
		set((state) => ({
			signUpState: {
				...state.signUpState,
				...{ preferGround: state.gymList },
				...{ activityArea: state.activityArea },
				...{ careerDuration: state.careerDuration },
			},
		})),
}));

export default useSignUpStore;
