import {
	Outlet,
	ScrollRestoration,
	createBrowserRouter,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from '@/shared/component/Loading/Loading';
import { AuthProvider } from '@/shared/context/AuthContext';
import { PrivateRoute, PublicRoute } from '@/shared/component';
import { ROUTE } from '@/shared/constant';

const Root = () => {
	return (
		<AuthProvider>
			<Suspense fallback={<Loading />}>
				<Outlet />
			</Suspense>
			<ScrollRestoration />
		</AuthProvider>
	);
};

// Lazy load pages
const MainPage = lazy(() => import('@/pages/Main'));
const LoginPage = lazy(() => import('@/pages/Login'));
const SignupPage = lazy(() => import('@/pages/Signup'));
const TicketPage = lazy(() => import('@/pages/Tickets'));

type TRouteType = 'PRIVATE' | 'PUBLIC';
type TRouteObject = { path: string; element: JSX.Element };

const createAuthCheckRouter = (
	routeType: TRouteType,
	children: TRouteObject[],
) => {
	const authCheckRouter = children.map((child: TRouteObject) => {
		return {
			element:
				routeType === 'PRIVATE' ? <PrivateRoute /> : <PublicRoute />,
			children: [child],
		};
	});
	return authCheckRouter;
};

const routes = [
	{ path: '*', element: <div>404 Not Found</div> },
	{
		path: '/',
		element: <Root />,
		children: [
			...createAuthCheckRouter('PRIVATE', [
				{
					path: ROUTE.MAIN,
					element: <MainPage />,
				},
				{
					path: ROUTE.TICKET_MAIN,
					element: <TicketPage />,
				},
				{
					path: ROUTE.MARKET_QR,
					element: <TicketPage />,
				},
				{
					path: ROUTE.DAILY_RECORD,
					element: <TicketPage />,
				},
			]),
			...createAuthCheckRouter('PUBLIC', [
				{
					path: ROUTE.LOGIN,
					element: <LoginPage />,
				},
				{
					path: ROUTE.SIGN_UP,
					element: <SignupPage />,
				},
			]),
		],
	},
];

export const router = createBrowserRouter(routes, {
	future: {
		v7_fetcherPersist: true,
		v7_normalizeFormMethod: true,
		v7_partialHydration: true,
		v7_skipActionErrorRevalidation: true,
		v7_relativeSplatPath: true,
	},
});
