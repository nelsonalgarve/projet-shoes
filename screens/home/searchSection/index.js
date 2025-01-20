import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { spaces } from '../../../constants/spaces';
import SearchInput from '../../../ui-components/inputs/SearchInput';
import BrandsList from './components/BrandsList';

export default SearchSection = () => {
	const [inputValue, setInputValue] = useState('');
	return (
		<View style={styles.container}>
			<SearchInput
				placeholder="Trouver vos shoes"
				value={inputValue}
				onChangeText={setInputValue}
			/>
			<BrandsList />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		flex: 120,
		justifyContent: 'space-evenly',
	},
});
