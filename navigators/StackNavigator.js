import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import List from '../screens/list';
import NewsList from '../screens/newsList';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
	return (
		<Stack.Navigator screenOptions={{}}>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="List" component={List} />
			<Stack.Screen name="NewsList" component={NewsList} />
		</Stack.Navigator>
	);
}
