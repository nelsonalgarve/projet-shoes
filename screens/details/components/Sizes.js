import { ScrollView, StyleSheet, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { radius } from '../../../constants/radius';
import { spaces } from '../../../constants/spaces';
import TextBoldXL from '../../../ui-components/texts/TextBoldXL';
import TextMediumM from '../../../ui-components/texts/TextMediumM';

export default function Sizes({ sizes }) {
	return (
		<View style={styles.container}>
			<TextBoldXL style={styles.title}>Tailles</TextBoldXL>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.contentContainer}
			>
				{Array(9)
					.fill(0)
					.map((_, index) => (
						<View
							key={index}
							style={[
								styles.sizeContainer,
								sizes.includes(index + 37)
									? styles.availableSizeContainer
									: styles.unavailableSizeContainer,
							]}
						>
							<TextMediumM style={styles.sizeText}>{index + 37}</TextMediumM>
						</View>
					))}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: spaces.l,
	},
	title: {
		marginLeft: spaces.l,
		marginBottom: spaces.m,
		colors: colors.dark,
	},
	contentContainer: {
		paddingHorizontal: spaces.l,
	},
	sizeContainer: {
		width: 60,
		heigth: 60,
		borderRadius: radius.full,
		marginRigth: spaces.s,
		justfyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
	},
	availableSizeContainer: {
		backgroundColor: colors.light,
		borderColor: colors.blue,
	},
	unavailableSizeContainer: {
		backgroundColor: colors.white,
		borderColor: colors.grey,
	},
	selectedSizeContainer: {
		borderColor: colors.grey,
	},
	sizeText: {
		color: colors.dark,
	},
});
