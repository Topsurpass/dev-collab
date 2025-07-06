import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/theme-provider';
import { WiDayLightWind } from 'react-icons/wi';
import { GiNightSleep } from 'react-icons/gi';

export default function ThemeToggleButton() {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			className="rounded-full cursor-pointer"
		>
			{theme === 'dark' ? (
				<GiNightSleep className="dark:text-yellow-400" size={20} />
			) : (
				<WiDayLightWind className="text-blue-600" size={20} />
			)}
		</Button>
	);
}