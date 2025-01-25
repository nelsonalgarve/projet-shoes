import { StyleSheet, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { spaces } from '../../../constants/spaces';
import TextBoldM from '../../../ui-components/texts/TextBoldM';
import TextBoldXL from '../../../ui-components/texts/TextBoldXL';
import TextMediumM from '../../../ui-components/texts/TextMediumM';
import TextMediumS from '../../../ui-components/texts/TextMediumS';

export default function DetailsDescription({ name, price, description }) {
	return (
		<View style={styles.descriptionContainer}>
			<View>
				<TextMediumM style={styles.textSpacing} blue>
					MEILLEUR CHOIX
				</TextMediumM>
				<TextBoldXL style={styles.textSpacing}>{name}</TextBoldXL>
			</View>
			<TextBoldXL style={styles.textSpacing}>{price} €</TextBoldXL>
			<TextMediumM style={styles.descriptionText}>{description}</TextMediumM>
		</View>
	);
}

const styles = StyleSheet.create({
	descriptionContainer: {
		paddingHorizontal: spaces.l,
	},
	textSpacing: {
		marginBottom: spaces.s,
	},
	descriptionText: {
		color: colors.grey,
	},
});
