import React from 'react';
import { View, Text, Image } from 'react-native';
import imgNoticia from '../../../assets/imgNoticia.png';

import style from './style';


export default function News() {
    return (
        <View style={style.box}>
            <Text style={style.titulo}>Lançamento da versão 0.62</Text>
            <Image style={style.imagem} source={imgNoticia} />
            <Text style={style.texto}>
                Hoje estamos lançando a versão React Native 0.62, que inclui
                suporte para Flipper por padrão. Este lançamento vem no meio
                de uma pandemia global. Estamos lançando esta versão hoje
                para respeitar o trabalho de centenas de contribuintes que
                tornaram esse lançamento possível e para evitar que a liberação
                caia muito atrás do mestre. Por favor, esteja atento à capacidade
                reduzida dos contribuintes para ajudar com os problemas e
                prepare-se para atrasar a atualização, se necessário.
            </Text>
        </View>
    )
}