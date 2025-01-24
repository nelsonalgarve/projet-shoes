import { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { SCREEN_HEIGTH, SCREEN_WIDTH } from '../../constants/sizes';
import { spaces } from '../../constants/spaces';
import { shoes } from '../../data/shoes';
import VerticalCard from '../../ui-components/cards/VerticalCard';
import ListItemSeparator from '../../ui-components/separators/ListItemSeparator';

export default function List({ route, navigation }) {
	const { brand } = route.params;

	const data = shoes.find((elem) => elem.brand === brand);

	useEffect(() => {
		navigation.setOptions({
			title: brand.charAt(0).toUpperCase() + brand.slice(1),
		});
	}, [brand]);

	const renderItem = ({ item }) => (
		<View style={styles.cardContainer}>
			<VerticalCard item={item} listScreen />
		</View>
	);

	return (
		<View style={styles.container}>
			<FlatList
				data={data.stock}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				numColumns={2}
				ItemSeparatorComponent={<ListItemSeparator heigth={spaces.l} />}
				contentContainerStyle={styles.contentStyle}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: SCREEN_HEIGTH,
		flex: 1,
		backgroundColor: colors.light,
		paddingBottom: 106,
	},
	contentStyle: {
		paddingBottom: spaces.xl,
	},
	cardContainer: {
		flex: 0.5,
		height: 240,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
