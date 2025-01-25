import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';
import ListSection from './listSection';
import NewsSection from './newsSection';
import SearchSection from './searchSection';

export default function HomeScreen({ navigation }) {
	const [inputValue, setInputValue] = useState('');
	const [selectedBrand, setSelectedBrand] = useState('nike');

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ width: '100%', backgroundColor: '#000000', height: 60 }} />
			<ScrollView style={styles.ScrollViewContainer} bounces={false}>
				<SearchSection
					inputValue={inputValue}
					setInputValue={setInputValue}
					selectedBrand={selectedBrand}
					setSelectedBrand={setSelectedBrand}
				/>
				<ListSection
					selectedBrand={selectedBrand}
					inputValue={inputValue}
					navigation={navigation}
				/>
				<NewsSection selectedBrand={selectedBrand} />
			</ScrollView>
			<View
				style={{ width: '100%', backgroundColor: '#000000', height: 106 }}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.light,
		justifyContent: 'space-between',
	},
	ScrollViewContainer: {
		flexGrow: 1,
	},
});
