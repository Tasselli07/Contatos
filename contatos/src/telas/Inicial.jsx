import {View, StyleSheet} from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'

export function Inicial(){
    return(
        <>
        <Cabecalho titulo="Inicial"/>
            <View style={estilos.conteiner}>

            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1
    }
})