import { AntDesign } from '@expo/vector-icons';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';
import { radius } from '../../constants/radius';
import { IS_LARGE_SCREEN, SCREEN_WIDTH } from '../../constants/sizes';
import { spaces } from '../../constants/spaces';
import TextBoldL from '../texts/TextBoldL';
import TextMediumM from '../texts/TextMediumM';
import TextMediumS from '../texts/TextMediumS';
import Touchable from '../touchable/Touchable';

export default function VerticalCard({ item, listScreen = false }) {
	const colors = item.items.map((item) => item.color);

	return (
		<View style={styles.container}>
			<Touchable style={styles.touchableContainer}>
				<View style={styles.touchableContainer}>
					<View style={styles.imageContainer}>
						<Image source={item.items[0].image} style={styles.image} />
					</View>
					<View
						style={[
							styles.descriptionContainer,
							{ flex: listScreen ? 1 : IS_LARGE_SCREEN ? 0.7 : 0.4 },
						]}
					>
						<View>
							<TextMediumS blue>TOP VENTE</TextMediumS>
							<TextBoldL style={styles.itemName}>{item.name}</TextBoldL>
						</View>
						{listScreen ? (
							<View style={styles.bottomDescriptionContainer}>
								<View style={styles.priceContainer}>
									<TextMediumM>{item.price} €</TextMediumM>
								</View>
								<View style={styles.colorsContainer}>
									{colors.map((color) => (
										<View
											key={color}
											style={[styles.colorItem, { backgroundColor: color }]}
										/>
									))}
								</View>
							</View>
						) : (
							<TextMediumM>{item.price} €</TextMediumM>
						)}
					</View>
					{listScreen ? null : (
						<View style={styles.btn}>
							<AntDesign name="plus" size={24} color={colors.light} />
						</View>
					)}
				</View>
			</Touchable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: IS_LARGE_SCREEN ? SCREEN_WIDTH / 3.5 : 180,
		height: Platform.select({ ios: '100%', android: '98%' }),
		maxHeight: IS_LARGE_SCREEN ? 300 : 250,
		backgroundColor: colors.white,
		borderRadius: radius.regular,
		elevation: 4,
		shadowColor: colors.dark,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
	},
	touchableContainer: {
		width: '100%',
		height: '100%',
		padding: spaces.m,
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
		justifyContent: 'space-between',
		padding: spaces.s,
	},
	itemName: {
		marginTop: spaces.s,
	},
	bottomDescriptionContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: spaces.s,
	},
	priceContainer: {
		width: '50%',
	},
	colorsContainer: {
		flexDirection: 'row',
		width: '50%',
		justifyContent: 'flex-end',
	},
	colorItem: {
		width: spaces.m,
		height: spaces.m,
		borderRadius: radius.full,
		marginHorizontal: spaces.xs,
		borderWidth: 1,
		borderColor: colors.grey,
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
		width: 32,
		height: 32,
	},
});
