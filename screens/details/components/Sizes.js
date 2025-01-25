import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { radius } from '../../../constants/radius';
import { spaces } from '../../../constants/spaces';
import TextBoldXL from '../../../ui-components/texts/TextBoldXL';
import TextMediumM from '../../../ui-components/texts/TextMediumM';

export default function Sizes({ sizes, setSelectedSize, selectedSize }) {
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
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								if (sizes.includes(index + 37)) setSelectedSize(index + 37);
							}}
							key={index}
							style={[
								styles.sizeContainer,
								selectedSize === index + 37
									? styles.selectedSizeContainer
									: sizes.includes(index + 37)
									? styles.availableSizeContainer
									: styles.unavailableSizeContainer,
							]}
						>
							<TextMediumM
								style={[
									selectedSize === index + 37
										? styles.selectedsizeText
										: styles.sizeText,
								]}
							>
								{index + 37}
							</TextMediumM>
						</TouchableOpacity>
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
		marginBottom: spaces.s,
	},
	selectedSizeContainer: {
		backgroundColor: colors.blue,
		borderColor: colors.blue,
		elevation: 4,
		shadowColor: colors.dark,
		shadowOffset: { width: 2, height: 2 },
		shadowRadius: 4,
		shadowOpacity: 0.4,
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
	selectedsizeText: {
		color: colors.white,
	},
});
