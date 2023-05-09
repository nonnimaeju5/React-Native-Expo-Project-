// This code defines a React Native functional component called ImageViewer, which accepts placeholderImageSource and selectedImage as its props. The component renders an image with the source being either the selectedImage or the placeholderImageSource if selectedImage is not provided.
import { StyleSheet, Image } from 'react-native';

// Define the ImageViewer component, which accepts placeholderImageSource and selectedImage as props.
export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  // Determine the image source based on the value of selectedImage. If selectedImage is not null, use it as the image source; otherwise, use placeholderImageSource.
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;
// Render an Image component with the determined imageSource and apply the styles.image style.
  return <Image source={imageSource} style={styles.image} />;
}
// Define the styles object using StyleSheet.create() with the following property: image.
const styles = StyleSheet.create({  
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

