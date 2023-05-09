// This code defines a React Native functional component called Button, which accepts label, theme, and onPress as its props. The component renders a customizable button with different styling based on the theme prop, and it supports an optional icon using the FontAwesome library.
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Define the Button component, which accepts label, theme, and onPress as props. Check the value of the theme prop. If it's equal to "primary", render a button with custom styling: a white background, a border with rounded corners, and an icon from the FontAwesome library. 
export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>      
    );
  }

  // If the theme prop is not "primary", render a default-styled button without an icon.
  return (
  <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

// Define the styles object using StyleSheet.create() with the following properties: buttonContainer, button, buttonLabel, and buttonIcon.
const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});