import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { colors } from '../constants/colors';
import HomeScreen from '../screens/home';
import List from '../screens/list';
import NewsList from '../screens/newsList';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: {
					backgroundColor: colors.light,
				},
				headerShadowVisible: false,
				headerTitleAlign: 'center',
				headerLeft: () => (
					<Pressable onPress={() => navigation.goBack()}>
						<Ionicons name="chevron-back" size={24} color={colors.dark} />
					</Pressable>
				),
			})}
		>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ title: 'Shoes', headerLeft: null }}
			/>
			<Stack.Screen name="List" component={List} />
			<Stack.Screen
				name="NewsList"
				component={NewsList}
				options={{ title: 'Nouveautés' }}
			/>
		</Stack.Navigator>
	);
}
