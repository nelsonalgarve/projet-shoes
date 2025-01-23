import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { shoes } from '../../data/shoes';

export default function List({ route }) {
	const { brand } = route.params;

	const data = shoes.find((elem) => elem.brand === brand);

	console.log(data);

	return (
		<View>
			<Text>List</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgrounColor: colors.light,
	},
});
