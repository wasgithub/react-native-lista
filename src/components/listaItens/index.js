import React, { Component } from'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios'

import Item from '../item';


class ListaItens extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listaItens: []
        }
    }

    componentWillMount() {
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then((resp) => {
                this.setState({listaItens: resp.data});
            })
            .catch(() => {
                console.log('Erro ao buscar os dados');
            })
    }

    render() {
        return(
            <ScrollView>
                {
                    this.state.listaItens.map((item, index) => {
                        return (
                            <Item key={index} item={item}  />
                        )
                        
                    })
                }
            </ScrollView>
        )
    }
}

export default ListaItens;
