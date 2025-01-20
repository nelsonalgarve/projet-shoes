import { StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { textSize } from '../../constants/textSize';

const TextBoldS = ({ children, blue = false }) => {
	return (
		<Text style={[styles.txt, { color: blue ? colors.blue : colors.dark }]}>
			{children}
		</Text>
	);
};

export default TextBoldS;

const styles = StyleSheet.create({
	txt: {
		fontFamily: 'SemiBold',
		fontSize: textSize.s,
	},
});
