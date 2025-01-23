import { Image, StyleSheet, useWindowDimensions, View } from 'react-native';
import { colors } from '../../../../constants/colors';
import { radius } from '../../../../constants/radius';
import { IS_LARGE_SCREEN } from '../../../../constants/sizes';
import { spaces } from '../../../../constants/spaces';
import TextBoldM from '../../../../ui-components/texts/TextBoldM';
import TextBoldXL from '../../../../ui-components/texts/TextBoldXL';
import TextMediumM from '../../../../ui-components/texts/TextMediumM';
import Touchable from '../../../../ui-components/touchable/Touchable';

export default function HorizontalCard({ item }) {
	const { height } = useWindowDimensions();
	const landscapeImageStyle = {
		width: '100%',
		height: '100%',
		transform: [
			{ rotate: '-20deg' },
			{ translateX: -spaces.m },
			{ translateY: -spaces.l },
			{ scale: 0.8 },
		],
	};
	return (
		<View style={styles.container}>
			<Touchable style={styles.touchableContainer}>
				<View style={styles.touchableContainer}>
					<View style={styles.descriptionContainer}>
						<View>
							<TextMediumM blue>MEILLEUR CHOIX</TextMediumM>
							<TextBoldXL>{item.name}</TextBoldXL>
						</View>
						<TextBoldM>{item.price} €</TextBoldM>
					</View>
					<View style={styles.imageContainer}>
						<Image
							source={item.items[0].image}
							style={height < 400 ? landscapeImageStyle : styles.image}
						/>
					</View>
				</View>
			</Touchable>
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
		elevation: 4,
		shadowColor: colors.dark,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
	},
	touchableContainer: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
	},
	descriptionContainer: {
		flex: 1,
		height: '90%',
		justifyContent: 'space-between',
		padding: IS_LARGE_SCREEN ? spaces.xl * 1.5 : spaces.l,
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
			{ translateY: IS_LARGE_SCREEN ? -spaces.xl : -spaces.l },
			{ scale: IS_LARGE_SCREEN ? 1 : 1.3 },
		],
	},
});
