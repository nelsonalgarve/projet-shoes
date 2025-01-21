import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../../../constants/colors';
import { radius } from '../../../../constants/radius';
import { spaces } from '../../../../constants/spaces';
import TextBoldM from '../../../../ui-components/texts/TextBoldM';
import TextBoldXL from '../../../../ui-components/texts/TextBoldXL';
import TextMediumM from '../../../../ui-components/texts/TextMediumM';

export default function HorizontalCard({ item }) {
	return (
		<View style={styles.container}>
			<View style={styles.descriptionContainer}>
				<View>
					<TextMediumM blue>MEILLEUR CHOIX</TextMediumM>
					<TextBoldXL>{item.name}</TextBoldXL>
				</View>
				<TextBoldM>{item.price} €</TextBoldM>
			</View>
			<View style={styles.imageContainer}>
				<Image source={item.items[0].image} style={styles.image} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '80%',
		// width: '100%',
		backgroundColor: colors.white,
		borderRadius: radius.regular,
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginHorizontal: spaces.l,
	},
	descriptionContainer: {
		flex: 1,
		height: '90%',
		justifyContent: 'space-between',
		padding: spaces.l,
	},
	imageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: spaces.m,
	},
	image: {
		width: '100%',
		height: '100%',
		transform: [
			{ rotate: '-20deg' },
			{ translateX: -spaces.m },
			{ translateY: -spaces.l },
			{ scale: 1.3 },
		],
	},
});
