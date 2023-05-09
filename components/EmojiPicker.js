// EmojiPicker accepts isVisible, children, and onClose as its props. The component renders a modal window containing a title, a close button, and any children passed to it. The modal is displayed when the isVisible prop is true. The styles for the modal and its components are defined using the StyleSheet object.
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Define the EmojiPicker component, which accepts isVisible, children, and onClose as props.
export default function EmojiPicker({ isVisible, children, onClose }) {

  // Render the Modal component with the animationType, transparent, and visible properties set according to the isVisible prop.
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

// Define the styles for the modalContent, titleContainer, and title using the StyleSheet.create method. This includes properties for height, width, backgroundColor, borderTopRightRadius, borderTopLeftRadius, position, bottom, paddingHorizontal, flexDirection, alignItems, justifyContent, color, and fontSize.
const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});