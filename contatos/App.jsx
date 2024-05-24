import { StatusBar, View, StyleSheet } from 'react-native'
import { Contatos } from './src/telas/Contatos'
import {Login} from './src/telas/Login'
import { Inicial } from './src/telas/Inicial'
import { Configuracoes } from './src/telas/Configuracoes'
import { Usuarios } from './src/telas/Usuarios'

export default function App() {
  return (
    <View style={estilos.conteiner}>
      <StatusBar barStyle='default' />
      <Usuarios />
    </View>
  );
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
      backgroundColor: '#000',
    },
  });
