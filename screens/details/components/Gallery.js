import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { radius } from '../../../constants/radius';
import { spaces } from '../../../constants/spaces';
import TextBoldXL from '../../../ui-components/texts/TextBoldXL';

export default function Gallery({ images }) {
	return (
		<View style={styles.galleryContainer}>
			<TextBoldXL>Galerie</TextBoldXL>
			<View style={styles.imagesContainer}>
				{images.map((image) => (
					<View style={styles.imageContainer} key={image}>
						<Image source={image} style={styles.image} />
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	galleryContainer: {
		paddingHorizontal: spaces.l,
		marginTop: spaces.l,
	},
	imagesContainer: {
		flexDirection: 'row',
		marginTop: spaces.m,
	},
	imageContainer: {
		width: 90,
		height: 90,
		backgroundColor: colors.light,
		borderRadius: radius.regular,
		marginRight: spaces.m,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: radius.regular,
		transform: [
			{ rotate: '-20deg' },
			{ translateX: -spaces.s },
			{ translateY: -spaces.s },
		],
	},
});
