import {
	Outlet,
	ScrollRestoration,
	createBrowserRouter,
} from 'react-router-dom';
import { LoginPage, MainPage, SignupPage } from '@/pages';
import { Suspense } from 'react';

export const webPath = {
	login: () => '/login',
	signup: () => '/signup',
	main: () => '/',
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
			<Suspense
				fallback={
					<div className="h-full w-full flex items-center justify-center">
						로딩중
					</div>
				}
			>
				<Outlet />
			</Suspense>
			<ScrollRestoration />
		</MainLayout>
	);
};

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
		],
	},
];

export const router = createBrowserRouter(routes);
