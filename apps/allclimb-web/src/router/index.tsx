import {
	Outlet,
	ScrollRestoration,
	createBrowserRouter,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from '@/components/Loading/Loading';

export const webPath = {
	login: () => '/login',
	signup: () => '/signup',
	main: () => '/',
	tickets: () => '/tickets',
	pay: () => '/pay',
	record: () => '/record',
};

type MainLayoutProps = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
	return children;
};

const Root = () => {
	return (
		<MainLayout>
			<Suspense fallback={<Loading />}>
				<Outlet />
			</Suspense>
			<ScrollRestoration />
		</MainLayout>
	);
};

// Lazy load pages
const MainPage = lazy(() => import('@/pages/Main'));
const LoginPage = lazy(() => import('@/pages/Login'));
const SignupPage = lazy(() => import('@/pages/Signup'));
const TicketPage = lazy(() => import('@/pages/Tickets'));

const routes = [
	{ path: '*', element: <div>404 Not Found</div> },
	{
		path: '/',
		element: <Root />,
		children: [
			// {
			// 	path: '/main',
			// 	element: <Navigate to={webPath.main()} replace />,
			// },
			{ path: webPath.main(), element: <MainPage /> },
			{ path: webPath.login(), element: <LoginPage /> },
			{ path: webPath.signup(), element: <SignupPage /> },
			{ path: webPath.tickets(), element: <TicketPage /> },
			{ path: webPath.pay(), element: <TicketPage /> },
			{ path: webPath.record(), element: <TicketPage /> },
		],
	},
];

export const router = createBrowserRouter(routes);
