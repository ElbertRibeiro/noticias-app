import React from 'react';
import { View, Text } from 'react-native';

import Titlenews from '../components/Title';
import News from '../components/News';

export default function HomePage() {
    return (
        <View>
            <Titlenews />
            <News />
        </View>
    )
}