import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Characters } from '@/pages/characters';
import { Favorites } from '@/pages/favorites';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Characters /> },
			{ path: 'favorites', element: <Favorites /> }
		]
	}
]);
