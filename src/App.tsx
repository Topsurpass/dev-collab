import RouteRenderer from '@/routes/route-renderer';
import { ThemeProvider } from '@/context/theme-context.tsx';

function App() {
	return (
		<ThemeProvider>
			<RouteRenderer />
		</ThemeProvider>
	);
}

export default App;
