import { StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { textSize } from '../../constants/textSize';

const TextBoldXL = ({ children, blue = false, style }) => {
	return (
		<Text
			style={[styles.txt, { color: blue ? colors.blue : colors.dark }, style]}
		>
			{children}
		</Text>
	);
};

export default TextBoldXL;

const styles = StyleSheet.create({
	txt: {
		fontFamily: 'SemiBold',
		fontSize: textSize.xl,
	},
});
