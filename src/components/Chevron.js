import React from 'react';
import { View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { bInterpolate, bInterpolateColor } from 'react-native-redash';

export default function Chevron({ transition }) {
    const rotateZ = bInterpolate(transition, Math.PI, 0);
    const backgroundColor = bInterpolateColor(
        transition,
        { r: 82, g: 82, b: 81 },
        { r: 228, g: 86, b: 69 }
    );

    return (
        <Animated.View
            style={{
                backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
                transform: [{ rotateZ }],
            }}
        >
            <Icon name="down" size={21} />
        </Animated.View>
    );
}
