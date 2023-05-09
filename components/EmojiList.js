// EmojiList accepts onSelect and onCloseModal as its props. The component renders a horizontal list of emoji images using the FlatList component. When an emoji is selected, the onSelect and onCloseModal callbacks are called. The styles for the list and its items are defined using the StyleSheet object.

// Import required dependencies from 'react' and 'react-native'.
import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

// Define the EmojiList component, which accepts onSelect and onCloseModal as props.
export default function EmojiList({ onSelect, onCloseModal }) {

  //Initialize the emoji state using useState hook with an array of emoji images.
  const [emoji] = useState([
    require('../assets/images/emoji1.png'),
    require('../assets/images/emoji2.png'),
    require('../assets/images/emoji3.png'),
    require('../assets/images/emoji4.png'),
    require('../assets/images/emoji5.png'),
    require('../assets/images/emoji6.png'),
  ]);

  // Render the FlatList component, passing in the emoji state as the data source, and set the renderItem prop with a function that renders a Pressable component containing an Image component for each emoji.
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {

        // In the renderItem function, set up an onPress handler for the Pressable component that calls both onSelect and onCloseModal when an emoji is selected.
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}>
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

// Define the styles for the listContainer and image using the StyleSheet.create method. This includes properties for borderTopRightRadius, borderTopLeftRadius, paddingHorizontal, flexDirection, alignItems, justifyContent, width, height, and marginRight.
const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});