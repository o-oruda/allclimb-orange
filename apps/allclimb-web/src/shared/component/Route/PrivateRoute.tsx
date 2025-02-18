import { useAuth } from '@/shared/context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { ROUTE } from '@/shared/constant';

const PrivateRoute = () => {
	const { isAuthenticated, isLoading } = useAuth();
	const location = useLocation();

	if (isLoading) {
		return <Loading />;
	}

	/**
	 * @todo 아직 토큰 검증 로직이 없어 임시로 주석 처리
	 */
	// if (!isAuthenticated) {
	// 	return <Navigate to={ROUTE.LOGIN} replace state={{ from: location }} />;
	// }

	return <Outlet />;
};

export default PrivateRoute;
