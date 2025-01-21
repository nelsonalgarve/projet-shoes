import { StyleSheet, View } from 'react-native';
import { spaces } from '../../../constants/spaces';
import { shoes } from '../../../data/shoes';
import Banner from '../components/Banner';
import HorizontalCard from './components/HorizontalCard';

export default NewsSection = ({ selectedBrand }) => {
	// console.log(shoes);

	const item = shoes
		.find((item) => item.brand === selectedBrand)
		.stock.find((item) => item.new);
	return (
		<View style={styles.container}>
			<Banner text="Nouveautés" />
			<HorizontalCard item={item} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// borderWidth: 1,
		flex: 160,
		paddingVertical: spaces.m,
		minHeight: 160,
	},
});
