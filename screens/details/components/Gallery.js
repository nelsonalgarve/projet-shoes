import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { radius } from '../../../constants/radius';
import { spaces } from '../../../constants/spaces';
import TextBoldXL from '../../../ui-components/texts/TextBoldXL';
import Touchable from '../../../ui-components/touchable/Touchable';

export default function Gallery({ images, setSelectedImage, selectedImage }) {
	return (
		<View style={styles.galleryContainer}>
			<TextBoldXL>Galerie</TextBoldXL>

			<View style={styles.imagesContainer}>
				{images.map((image) => (
					<Touchable
						onPress={() => setSelectedImage(image)}
						color={colors.blue}
					>
						<View key={image} style={styles.imageContainer}>
							<View
								style={[
									styles.imageContainer,
									image === selectedImage ? styles.selectedImage : undefined,
								]}
							>
								<Image source={image} style={styles.image} />
							</View>
						</View>
					</Touchable>
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
	selectedImage: {
		borderWidth: 1,
		borderColor: colors.blue,
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
