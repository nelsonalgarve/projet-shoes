import { StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { textSize } from '../../constants/textSize';

const TextMediumS = ({ children, blue = false }) => {
	return (
		<Text style={[styles.txt, { color: blue ? colors.blue : colors.dark }]}>
			{children}
		</Text>
	);
};

export default TextMediumS;

const styles = StyleSheet.create({
	txt: {
		fontFamily: 'Medium',
		fontSize: textSize.s,
	},
});
