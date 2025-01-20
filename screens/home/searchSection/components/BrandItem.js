import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../../constants/colors';
import { radius } from '../../../../constants/radius';
import { ICON_SIZE } from '../../../../constants/sizes';
import { spaces } from '../../../../constants/spaces';
import { brands } from '../../../../data/brands';
import TextBoldL from '../../../../ui-components/texts/TextBoldM';

export default function BrandItem({
	item,
	selectedBrand,
	setSelectedBrand,
	index,
}) {
	const onPressBrand = () => setSelectedBrand(item.name);

	return (
		<TouchableOpacity
			onPress={onPressBrand}
			style={{
				marginLeft: index === 0 ? spaces.l : 0,
				marginRight: index === brands.length - 1 ? spaces.l : 0,
			}}
		>
			{item.name === selectedBrand ? (
				<View style={styles.selectedBrandContainer}>
					<View style={styles.iconContainer}>
						<Image source={item.logo} style={styles.image} />
					</View>
					<TextBoldL style={styles.brandText}>
						{item.name.replace('-', ' ')}
					</TextBoldL>
				</View>
			) : (
				<View style={[styles.iconContainer, styles.unselectedBrandContainer]}>
					<Image source={item.logo} style={styles.image} />
				</View>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	selectedBrandContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: radius.full,
		backgroundColor: colors.blue,
		padding: spaces.s,
	},
	iconContainer: {
		backgroundColor: colors.white,
		borderRadius: radius.full,
		padding: spaces.s,
	},
	image: {
		width: ICON_SIZE,
		height: ICON_SIZE,
		resizeMode: 'contain',
	},
	brandText: {
		color: colors.white,
		marginHorizontal: spaces.m,
		textTransform: 'capitalize',
	},
	unselectedBrandContainer: {
		marginTop: spaces.s,
	},
});
