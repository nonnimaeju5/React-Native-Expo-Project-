// This code defines a React Native functional component called EmojiSticker, which accepts imageSize and stickerSource as its props. The component renders an interactive sticker image that can be dragged and double-tapped to scale.
import { View, Image } from 'react-native';
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

// Create Animated versions of the Image and View components using Animated.createAnimatedComponent.
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);

// Define the EmojiSticker component, which accepts imageSize and stickerSource as props & Set up shared values for translateX, translateY, and scaleImage using useSharedValue.
export default function EmojiSticker({ imageSize, stickerSource }) {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scaleImage = useSharedValue(imageSize);

  //Define imageStyle and containerStyle using useAnimatedStyle.
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  // Set up gesture handlers for double-tap (scaling) and drag (translation) using useAnimatedGestureHandler.
  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value) {
        scaleImage.value = scaleImage.value * 2;
      }
    },
  });

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  // Render the PanGestureHandler component, which wraps an AnimatedView with the containerStyle and the TapGestureHandler component. The TapGestureHandler wraps the AnimatedImage with the imageStyle and displays the sticker image using the provided stickerSource and imageSize props.
  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -350 }]}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <AnimatedImage
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  );
}