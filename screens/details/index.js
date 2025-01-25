import { useEffect, useState } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SCREEN_HEIGTH } from '../../constants/sizes';
import { spaces } from '../../constants/spaces';
import { shoes } from '../../data/shoes';
import CustomButton from '../../ui-components/buttons/CustomButton';
import DetailsDescription from './components/DetailsDescription';
import DetailsImage from './components/DetailsImage';
import Gallery from './components/Gallery';
import Sizes from './components/Sizes';

export default function Details({ route, navigation }) {
	const data = shoes
		.find((el) => el.stock.find((item) => item.id === route.params.id))
		.stock.find((item) => item.id === route.params.id);

	const images = data.items.map((item) => item.image);
	const [selectedImage, setSelectedImage] = useState(data.items[0].image);
	const [selectedSize, setSelectedSize] = useState();
	const [sizes, setSizes] = useState(data.items[0].sizes);

	useEffect(() => {
		setSizes(data.items.find((el) => el.image === selectedImage).sizes);
		setSelectedSize();
	}, [selectedImage]);

	useEffect(() => {
		navigation.setOptions({
			title: data.gender === 'm' ? 'Shoes Homme' : 'Shoes Femme',
		}),
			[route.params.id];
	});

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
		bottom: Platform.select({ android: 80, ios: 100 }),
	},
	btnContainer: {
		width: '80%',
		alignSelf: 'center',
		maxWidth: 400,
		marginVertical: spaces.xl,
	},
	fixView: {
		marginBottom: Platform.select({ android: -80, ios: -100 }),
	},
});
