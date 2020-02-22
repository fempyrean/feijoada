import React, { useRef, useCallback } from 'react';
import { View } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import TestAnimated from './src/components/TestAnimated';

const {
    set,
    cond,
    eq,
    add,
    spring,
    startClock,
    stopClock,
    clockRunning,
    sub,
    defined,
    Value,
    Clock,
    event,
} = Animated;

const styles = {
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
};

export default function App() {
    const translateX = useRef(new Value(0)).current;
    const dragX = useRef(new Value(0)).current;
    const state = useRef(new Value(-1)).current;
    const transX = useRef(new Value()).current;

    const onGestureEvent = useCallback(() => {
        Animated.event([
            {
                nativeEvent: {
                    translationX: dragX,
                    state,
                },
            },
        ]);

        translateX.current = cond(
            eq(state, State.ACTIVE),
            [set(transX, dragX), transX],
            [set(transX, 0), transX]
        );
    }, []);

    const onHandlerStateChange = useCallback(event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            // Animated.timing(translateX, {
            //     toValue: 0,
            //     duration: 2000,
            // }).start();
        }
    }, []);

    return <TestAnimated />;

    return (
        <View style={styles.container}>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onGestureEvent}
            >
                <Animated.View
                    style={[styles.box, { transform: [{ translateX }] }]}
                />
            </PanGestureHandler>
        </View>
    );
}
