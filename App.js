import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [contagem, setContagem] = useState('00:00')
  const [pausado, setPausado]  = useState(true)

  const minutos = 0
  const segundos = 0

  useEffect(() => {}, [])
  
  function pad(number, pad) {
    let num = number.toString()
    while (num.length < pad) {
      num = '0' + num 
    }
    return num
  }

  function iniciarContagem(){
    setContagem(`${pad(minutos, 2)}:${pad(segundos, 2)}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.clockContainer}>
        <Image style={styles.img} source={require('./assets/crono.png')}/>
        <Text style={styles.colorText}>{contagem}</Text>
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity onPress={iniciarContagem} style={styles.btn}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Iniciar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Pausar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Reiniciar</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3E4E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 4
  },
  btn: {
    backgroundColor: '#fff',
    height: 50,
    width: 100,
    borderRadius: 4
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: '#303030'
  },
  img: {
    height: 300,
    width: 240
  },
  colorText: {
    color: '#303030',
    position: 'absolute',
    fontSize: 48,
    paddingTop: 50
  },
  clockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  }
});
