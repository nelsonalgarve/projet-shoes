import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { IS_LARGE_SCREEN } from '../../../constants/sizes';
import { spaces } from '../../../constants/spaces';
import { shoes } from '../../../data/shoes';
import Banner from '../components/Banner';
import HorizontalCard from './components/HorizontalCard';

export default NewsSection = ({ selectedBrand }) => {
	const { height } = useWindowDimensions();
	const landscapeStyle = {
		flex: 160,
		paddingVertical: spaces.s,
		minHeight: 240,
	};

	const item = shoes
		.find((item) => item.brand === selectedBrand)
		.stock.find((item) => item.new);
	return (
		<View style={height < 400 ? landscapeStyle : styles.container}>
			<Banner text="Nouveautés" />
			<HorizontalCard item={item} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 160,
		paddingVertical: spaces.m,
		minHeight: IS_LARGE_SCREEN ? 320 : 160,
	},
});
