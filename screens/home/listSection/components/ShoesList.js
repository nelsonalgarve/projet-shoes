import { FlatList, StyleSheet, Text } from 'react-native';
import { spaces } from '../../../../constants/spaces';
import { shoes } from '../../../../data/shoes';
import ItemSeparator from '../../../../ui-components/separators/ListItemSeparator';
import Verticalcard from './VerticalCard';

export default function ShoesList({ selectedBrand, inputValue }) {
	const data = shoes
		.find((elem) => elem.brand === selectedBrand)
		.stock.filter((item) => !item.new);

	const filteredData = inputValue
		? data.filter((item) =>
				item.name.toLowerCase().includes(inputValue.toLowerCase())
		  )
		: data;

	return (
		<FlatList
			data={filteredData}
			renderItem={({ item }) => <Verticalcard item={item} />}
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
