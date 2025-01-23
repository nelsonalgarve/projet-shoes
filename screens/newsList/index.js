import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { shoes } from '../../data/shoes';

export default function NewsList() {
	const items = shoes.map((brand) => {
		return brand.stock.filter((item) => item.new);
	});

	console.log(items);

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
