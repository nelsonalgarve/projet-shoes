import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { spaces } from '../../../../constants/spaces';
import { brands } from '../../../../data/brands';
import BrandItem from './BrandItem';
import ItemHorizontalSeparator from './ItemHorizontalSeparator';
export default function BrandsList() {
	const [selectedBrand, setSelectedBrand] = useState('nike');
	return (
		<FlatList
			horizontal
			data={brands}
			keyExtractor={(item) => item.name}
			renderItem={({ item, index }) => (
				<BrandItem
					item={item}
					selectedBrand={selectedBrand}
					setSelectedBrand={setSelectedBrand}
					index={index}
				/>
			)}
			style={styles.listContainer}
			contentContainerStyle={styles.contentStyle}
			showsHorizontalScrollIndicator={false}
			ItemSeparatorComponent={ItemHorizontalSeparator}
		/>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		flexGrow: 0,
		// marginHorizontal: spaces.l,
	},
	contentStyle: {
		// width: '100%',
		justifyContent: 'space-between',
	},
});
