import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { spaces } from '../../../../constants/spaces';
import { brands } from '../../../../data/brands';
import ItemSeparator from '../../../../ui-components/separators/ListItemSeparator';
import BrandItem from './BrandItem';
export default function BrandsList({ selectedBrand, setSelectedBrand }) {
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
			ItemSeparatorComponent={<ItemSeparator width={spaces.s} />}
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
