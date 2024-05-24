import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'

export function Usuarios(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    function verDados(){
        console.log(nome)
        console.log(email)
        console.log(senha)

    }

    return(
        <>
        <Cabecalho titulo="Usuários"/>
            <View style={estilos.conteiner}>

            <TextInput
                    style={estilos.campo}
                    placeholder="Nome"
                    placeholderTextColor='#ele5f2'
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={estilos.campo}
                    placeholder="E-mail"
                    placeholderTextColor='#ele5f2'
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={estilos.campo}
                    placeholder="Senha"
                    placeholderTextColor='#ele5f2'
                    value={senha}
                    onChangeText={setSenha}
                />

                <TouchableOpacity
                style={estilos.botao}
                onPress={verDados}
                >
                    <Text style={estilos.textoBotao}>Check</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    campo:{
        height:75,
        width: 300,
        backgroundColor: '#01233c',
        color: '#a9d6e5',
        padding:10,
        borderRadius:5,
        marginVertical:5,
        fontSize:16
    },
    botao:{
        height:75,
        width: 300,
        backgroundColor: '#01233c',
        justifyContent:center,
        alignItems: center,
        borderRadius:5,
        marginVertical:20,
    
    },
    textoBotao:{
        color: '#a9d6e5',
        fontSize: 12
    }
    
    })