import EvilIcons from '@expo/vector-icons/EvilIcons';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../../constants/colors';
import { radius } from '../../constants/radius';
import { ICON_SIZE } from '../../constants/sizes';
import { spaces } from '../../constants/spaces';
import { textSize } from '../../constants/textSize';
export default function SearchInput({ placeHolder, value, onChangeText }) {
	return (
		<View style={styles.inputContainer}>
			<EvilIcons
				name="search"
				size={ICON_SIZE}
				color={colors.grey}
				style={styles.searchIcon}
			/>
			<TextInput
				placeHolder={placeHolder}
				value={value}
				onChangeText={onChangeText}
				styles={styles.input}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.white,
		borderRadius: radius.full,
		marginHorizontal: spaces.l,
		height: 50,
		maxWidth: 360,
	},
	searchIcon: {
		marginHorizontal: spaces.m,
	},
	input: {
		flex: 1,
		paddingVertical: spaces.s,
		paddingRight: spaces.s,
		padding: spaces.s,
		colors: colors.grey,
		fontFamily: 'Regular',
		fontSize: textSize.m,
	},
});
