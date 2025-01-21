import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { spaces } from '../../../constants/spaces';
import SearchInput from '../../../ui-components/inputs/SearchInput';
import BrandsList from './components/BrandsList';

export default SearchSection = ({
	inputValue,
	setInputValue,
	selectedBrand,
	setSelectedBrand,
}) => {
	return (
		<View style={styles.container}>
			<SearchInput
				placeholder="Trouver vos shoes"
				value={inputValue}
				onChangeText={setInputValue}
			/>
			<BrandsList
				selectedBrand={selectedBrand}
				setSelectedBrand={setSelectedBrand}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// borderWidth: 1,
		flex: 120,
		minHeight: 120,
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});
