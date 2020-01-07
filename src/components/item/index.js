import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props
        return(
        <View style={styles.item}>
            <View>
                <Image style={{height: 100, width: 100}} source={{uri: item.foto}} />
            </View>
            <View style={styles.descricao}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text>R$ {item.valor}</Text>
                <Text>{item.local_anuncio}</Text>
                <Text>{item.data_publicacao}</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        borderWidth: .5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    descricao: {
        marginLeft: 10
    },
    titulo: {
        color: '#453',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    }
})
export default Item;