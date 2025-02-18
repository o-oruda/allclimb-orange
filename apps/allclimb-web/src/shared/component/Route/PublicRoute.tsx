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

	if (isAuthenticated) {
		return <Navigate to={ROUTE.MAIN} replace state={{ from: location }} />;
	}

	return <Outlet />;
};

export default PrivateRoute;
