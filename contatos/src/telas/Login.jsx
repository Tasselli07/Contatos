import { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    function autenticarUsuario(){
        console.log(email)
        console.log(senha)

    }


    return(
        <View style={estilos.conteiner}>

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
                onPress={autenticarUsuario}   
            >
            
            <Text style={estilos.textoBotao}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
campo:{
    height:50,
    width: 350,
    backgroundColor: '#01233c',
    color: '#a9d6e5',
    padding:10,
    borderRadius:5,
    marginVertical:5,
    fontSize:16
},
botao:{
    height:50,
    width: 350,
    backgroundColor: '#01233c',
    justifyContent:center,
    alignItems: center,
    borderRadius:5,
    marginVertical:20,

},
textoBotao:{
    color: '#a9d6e5',
    fontSize: 16
}

})