import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';

type AuthContextType = {
	isAuthenticated: boolean;
	isLoading: boolean;
	login: () => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		// 실제 인증 상태를 확인하는 로직을 추가하세요 (예: 로컬 스토리지, API 호출 등)
		const checkAuth = async () => {
			// 예시: 로컬 스토리지에서 토큰 확인
			const token = localStorage.getItem('authToken');
			if (token) {
				setIsAuthenticated(true);
			}
			setIsLoading(false);
		};

		checkAuth();
	}, []);

	const login = () => {
		// 실제 로그인 로직을 추가하세요
		setIsAuthenticated(true);
		// 예시: 토큰 저장
		localStorage.setItem('authToken', 'your-token');
	};

	const logout = () => {
		// 실제 로그아웃 로직을 추가하세요
		setIsAuthenticated(false);
		// 예시: 토큰 제거
		localStorage.removeItem('authToken');
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, isLoading, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
