import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../css/style';
import { Link } from 'expo-router';

export default function login() {
  return (
    <View style={styles.imagemBody}>
      <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')}/>

    <View style={styles.form}>

        <Text style={styles.text}>LOGIN</Text>

        <TextInput placeholder="Insira seu CPF" style={styles.input}/>
        
        <Text style={styles.text}>SENHA</Text>
        
        <TextInput secureTextEntry placeholder="Insira tua senha" style={styles.input}/>

        <View style={styles.subBtn}>
            <TouchableOpacity><Link href={"início"} style={styles.subBtn1}>Cadastrar/</Link></TouchableOpacity>
            <TouchableOpacity><Link href={"início"} style={styles.subBtn1}>Esqueci a senha/</Link></TouchableOpacity>
        </View>
        </View>

        <View style={styles.formbtn}>
            <Link href={'inicio'} style={styles.btn}>ENTRAR</Link>
        </View>
        </View>
  );
}
