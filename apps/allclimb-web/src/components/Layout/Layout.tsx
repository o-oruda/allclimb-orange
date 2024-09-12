import { ReactNode, useEffect } from 'react';
import '../../styles/index.scss';

type TComponentProps = {
	children: ReactNode;
};

const Layout = ({ children }: TComponentProps) => {
	useEffect(() => {
		/**
		 * 뷰포트 사이즈 재설정
		 */
		const handleResize = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return children;
};

export default Layout;
