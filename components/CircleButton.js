import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// This is a React Native functional component called CircleButton that accepts an onPress prop. The component renders a circular button with a '+' icon in the middle, using the Pressable and MaterialIcons components. The styles for the button are defined using the StyleSheet object.

// Define the CircleButton component, which accepts an onPress prop.
export default function CircleButton({ onPress }) {

// Render the View and Pressable components, along with the MaterialIcons component. The onPress prop is passed down to the Pressable component.
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

// Define the styles for the circleButtonContainer and circleButton using the StyleSheet.create method. This includes properties for width, height, margin, border, border color, border radius, padding, flex, justifyContent, alignItems, and background color.
const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});