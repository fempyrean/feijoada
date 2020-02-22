import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useTransition, bInterpolate } from 'react-native-redash';
import { Easing } from 'react-native-reanimated';
import Chevron from './Chevron';

export default function TestAnimated() {
    const [open, setOpen] = useState(false);
    const transition = useTransition(
        open,
        open ? 0 : 1,
        open ? 1 : 0,
        400,
        Easing.inOut(Easing.easy)
    );

    // const height = bInterpolate(transition, 0, list.items.length * LIST_ITEM_HEIGHT);

    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'green',
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
            onPress={() => setOpen(!open)}
        >
            <Text>VAI</Text>
            <Chevron {...{ transition }} />
        </TouchableOpacity>
    );
}
