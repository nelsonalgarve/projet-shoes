import { StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { textSize } from '../../constants/textSize';

const TextBoldM = ({ children, blue = false, style }) => {
	return (
		<Text
			style={[styles.txt, style, { color: blue ? colors.blue : colors.dark }]}
		>
			{children}
		</Text>
	);
};

export default TextBoldM;

const styles = StyleSheet.create({
	txt: {
		fontFamily: 'Bold',
		fontSize: textSize.m,
	},
});
