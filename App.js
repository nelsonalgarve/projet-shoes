import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/home/index';
import TextBoldM from './ui-components/texts/TextBoldM';
import TextBoldS from './ui-components/texts/TextBoldS';
import TextBoldXL from './ui-components/texts/TextBoldXL';

export default function App() {
	const [fontsLoaded] = useFonts({
		Light: require('./assets/fonts/Montserrat-Light.ttf'),
		Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
		Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
		SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
	});

	return fontsLoaded && <HomeScreen />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
