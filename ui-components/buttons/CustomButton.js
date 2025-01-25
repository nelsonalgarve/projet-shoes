import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';
import { radius } from '../../constants/radius';
import TextBoldXL from '../texts/TextBoldXL';

export default function CustomButton({ text, onPress }) {
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={styles.btnContainer}
			onPres={onPress}
		>
			<TextBoldXL style={styles.text}>{text}</TextBoldXL>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btnContainer: {
		backgroundColor: colors.blue,
		width: '100%',
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: radius.full,
	},
	btnText: {
		color: colors.white,
	},
});
