import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { spaces } from '../../constants/spaces';
import { shoes } from '../../data/shoes';
import VerticalCard from '../../ui-components/cards/VerticalCard';
import ListItemSeparator from '../../ui-components/separators/ListItemSeparator';

export default function List({ route }) {
	const { brand } = route.params;

	const data = shoes.find((elem) => elem.brand === brand);

	const renderItem = ({ item }) => (
		<View style={styles.cardContainer}>
			<VerticalCard item={item} listScreen />
		</View>
	);

	return (
		<FlatList
			data={data.stock}
			keyExtractor={(item) => item.id}
			renderItem={renderItem}
			numColumns={2}
			style={styles.container}
			ItemSeparatorComponent={<ListItemSeparator heigth={spaces.l} />}
			contentContainerStyle={styles.contentStyle}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgrounColor: colors.light,
		paddingTop: spaces.l,
	},
	contentStyle: {
		paddingBottom: spaces.xl,
	},
	cardContainer: {
		flex: 1,
		height: 240,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
