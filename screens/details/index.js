import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SCREEN_HEIGTH } from '../../constants/sizes';
import { spaces } from '../../constants/spaces';
import { shoes } from '../../data/shoes';
import CustomButton from '../../ui-components/buttons/CustomButton';
import DetailsDescription from './components/DetailsDescription';
import DetailsImage from './components/DetailsImage';
import Gallery from './components/Gallery';
import Sizes from './components/Sizes';

export default function Details() {
	const data = shoes[0].stock[0];
	const imageSource = data.items[0].image;
	const images = data.items.map((item) => item.image);
	const sizes = data.items[0].sizes;
	const [selectedImage, setSelectedImage] = useState(data.items[0].image);
	const [selectedSize, setSelectedSize] = useState();
	console.log(selectedSize);

	return (
		<View style={styles.mainContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.container}>
					<DetailsImage source={selectedImage} />
					<DetailsDescription
						name={data.name}
						price={data.price}
						description={data.description}
					/>
					<Gallery
						images={images}
						setSelectedImage={setSelectedImage}
						selectedImage={selectedImage}
					/>
					<Sizes
						sizes={sizes}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
					<View style={styles.btnContainer}>
						<CustomButton
							text="Ajouter au panier"
							onPress={() => console.log('Hello')}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		height: SCREEN_HEIGTH,
	},
	container: {
		position: 'relative',
		bottom: 120,
	},
	btnContainer: {
		width: '80%',
		alignSelf: 'center',
		maxWidth: 400,
		marginVertical: spaces.xl,
	},
});
