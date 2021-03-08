import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

export default function TitleNews() {
    return(
        <View style={style.box}>
            <Text style={style.texto}>Noticia do dia</Text>
        </View>
    )
}