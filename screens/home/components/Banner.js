import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { spaces } from '../../../constants/spaces';
import TextBoldL from '../../../ui-components/texts/TextBoldL';
import TextMediumM from '../../../ui-components/texts/TextMediumM';

export default function Banner({ text, navigate }) {
	return (
		<View style={styles.container}>
			<TextBoldL>{text}</TextBoldL>
			<TouchableOpacity onPress={navigate}>
				<TextMediumM blue>Voir tout</TextMediumM>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingHorizontal: spaces.l,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: spaces.m,
	},
});
