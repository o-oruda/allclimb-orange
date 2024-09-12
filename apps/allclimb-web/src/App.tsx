import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Layout } from './components/Layout';

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
