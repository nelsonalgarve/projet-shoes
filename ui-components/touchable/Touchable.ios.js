import { TouchableOpacity } from 'react-native';

export default function Touchable({ styles, children }) {
	return (
		<TouchableOpacity activeOpacity={0.7} style={styles}>
			{children}
		</TouchableOpacity>
	);
}
