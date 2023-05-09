// IconButton, accepts icon, label, and onPress as its props. The component renders a button with an icon and a label, using the Pressable, MaterialIcons, and Text components. The styles for the button and its components are defined using the StyleSheet object.

// Import required dependencies from 'react-native' and '@expo/vector-icons'.
import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//Define the IconButton component, which accepts icon, label, and onPress as props.
export default function IconButton({ icon, label, onPress }) {

  //Render the Pressable component with the MaterialIcons and Text components as its children. The icon and label props are used to set the icon name and label text, while the onPress prop is passed down to the Pressable component.
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

// Define the styles for the iconButton and iconButtonLabel using the StyleSheet.create method. This includes properties for justifyContent, alignItems, color, and marginTop.
const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});