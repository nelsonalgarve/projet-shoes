import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import StackNavigator from './navigators/StackNavigator';
import HomeScreen from './screens/home/index';

export default function App() {
	const [fontsLoaded] = useFonts({
		Light: require('./assets/fonts/Montserrat-Light.ttf'),
		Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
		Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
		SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
	});

	return (
		fontsLoaded && (
			<NavigationContainer>
				<StackNavigator />
			</NavigationContainer>
		)
	);
}
