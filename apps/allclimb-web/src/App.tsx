import { RouterProvider } from 'react-router-dom';
import { router } from '@/apps/router';
import Layout from '@/shared/component/Layout/Layout';

function App() {
	return (
		<Layout>
			<div className="wrap">
				<RouterProvider router={router} />
			</div>
		</Layout>
	);
}

export default App;
