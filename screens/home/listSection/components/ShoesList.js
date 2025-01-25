import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text } from 'react-native';
import { spaces } from '../../../../constants/spaces';
import { shoes } from '../../../../data/shoes';
import VerticalCard from '../../../../ui-components/cards/VerticalCard';
import ItemSeparator from '../../../../ui-components/separators/ListItemSeparator';

export default function ShoesList({ selectedBrand, inputValue }) {
	const navigation = useNavigation();
	const data = shoes
		.find((elem) => elem.brand === selectedBrand)
		.stock.filter((item) => !item.new);

	const filteredData = inputValue
		? data.filter((item) =>
				item.name.toLowerCase().includes(inputValue.toLowerCase())
		  )
		: data;

	const navigateToDetails = (id) => {
		navigation.navigate('Details', { id });
	};

	return (
		<FlatList
			data={filteredData}
			renderItem={({ item }) => (
				<VerticalCard item={item} onPress={() => navigateToDetails(item.id)} />
			)}
			horizontal
			ItemSeparatorComponent={<ItemSeparator width={spaces.l} />}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={styles.listContainer}
		/>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		paddingHorizontal: spaces.l,
	},
});
