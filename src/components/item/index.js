import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props
        return(
        <View>
            <Image style={{height: 100, width: 100}} source={{uri: item.foto}} />
            <Text>{item.titulo}</Text>
            <Text>{item.valor}</Text>
            <Text>{item.local_anuncio}</Text>
            <Text>{item.data_publicacao}</Text>
        </View>
        )
    }
}

export default Item;