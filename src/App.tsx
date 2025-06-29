import RouteRenderer from '@/routes/route-renderer';
import Provider from '@/providers';

function App() {
	return (
		<Provider>
			<RouteRenderer />
		</Provider>
	);
}

export default App;
