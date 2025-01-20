import { StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';
import { textSize } from '../../constants/textSize';

const TextRegularM = ({ children, blue = false }) => {
	return (
		<Text style={[styles.txt, { color: blue ? colors.blue : colors.dark }]}>
			{children}
		</Text>
	);
};

export default TextRegularM;

const styles = StyleSheet.create({
	txt: {
		fontFamily: 'Regular',
		fontSize: textSize.m,
	},
});
