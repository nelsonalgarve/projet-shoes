import { AntDesign } from '@expo/vector-icons';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../../../constants/colors';
import { radius } from '../../../../constants/radius';
import { spaces } from '../../../../constants/spaces';
import TextBoldL from '../../../../ui-components/texts/TextBoldL';
import TextMediumM from '../../../../ui-components/texts/TextMediumM';
import TextMediumS from '../../../../ui-components/texts/TextMediumS';

export default function VerticalCard({ item }) {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={item.items[0].image} style={styles.image} />
			</View>
			<View style={styles.descriptionContainer}>
				<View>
					<TextMediumS blue>TOP VENTE</TextMediumS>
					<TextBoldL style={styles.itemName}>{item.name}</TextBoldL>
				</View>
				<TextMediumM>{item.price} €</TextMediumM>
			</View>
			<View style={styles.btn}>
				<AntDesign name="plus" size={24} color={colors.WHITE} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 180,
		height: '100%',
		maxHeight: 200,
		backgroundColor: colors.white,
		borderRadius: radius.regular,
		padding: spaces.s,
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: spaces.s,
	},
	image: {
		width: '100%',
		height: '100%',
		transform: [
			{ rotate: '-20deg' },
			{ translateX: -spaces.s },
			{ translateY: -spaces.s },
		],
	},
	descriptionContainer: {
		flex: 0.7,
		justifyContent: 'space-between',
		padding: spaces.s,
	},
	itemName: {
		marginTop: spaces.s,
	},
	btn: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		backgroundColor: colors.blue,
		borderTopLeftRadius: radius.regular,
		borderBottomRightRadius: radius.regular,
		justifyContent: 'center',
		alignItems: 'center',
		width: 36,
		height: 36,
	},
});
