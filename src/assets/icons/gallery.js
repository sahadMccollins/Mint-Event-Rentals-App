import Svg, { Path, Circle } from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '@theme/appConstant';
import { useTheme } from '@react-navigation/native';

export function Gallery(props) {
    const { colors } = useTheme();
    return (
        <Svg
            width={windowWidth(22)}
            height={windowHeight(22)}
            viewBox="0 0 20 20"
            fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.5 2.17157 2.17157 1.5 3 1.5H17C17.8284 1.5 18.5 2.17157 18.5 3V17C18.5 17.8284 17.8284 18.5 17 18.5H3C2.17157 18.5 1.5 17.8284 1.5 17V3Z"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Circle
                cx="5.5"
                cy="6"
                r="1"
                fill={props.color ? props.color : colors.text}
            />
            <Path
                d="M1.5 14L6.5 9L18.5 18.5"
                stroke={props.color ? props.color : colors.text}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}