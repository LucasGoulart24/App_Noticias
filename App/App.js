import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  let Imagem = 'https://s2-g1.glbimg.com/8FnTAN34UJ4AXEoF74NOOeLXBSQ=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/4/z/PadxMjSHGqWQmNSS0Kdw/rj1-limpo-20250407-1115-frame-184036.jpeg'
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.titulo}>Notícias Brasil 2025</Text>
      </View>
      <View style={styles.noticia}>
        <View style={styles.card}>
          <Image source={{uri: Imagem}} style={{ width: '100%', height: 240 }}></Image>
          <Text style={styles.texto}>Lady Gaga no Rio: palco começa a ser montado na praia de Copacabana</Text>
        </View>
        <View style={styles.card}>
          <Image source={{uri: Imagem}} style={{ width: '100%', height: 240 }}></Image>
          <Text style={styles.texto}>Lady Gaga no Rio: palco começa a ser montado na praia de Copacabana</Text>
        </View>
        <View style={styles.card}>
          <Image source={{uri: Imagem}} style={{ width: '100%', height: 240 }}></Image>
          <Text style={styles.texto}>Lady Gaga no Rio: palco começa a ser montado na praia de Copacabana</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#EEE"
  },
  titulo: {
    fontSize: 30,
    fontWeight: '500'
  },
  noticia: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 380,
    borderRadius: 10,
    backgroundColor: '#292929',
    margin: 5
  },
  texto: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: 600,
    margin: 8
  }
});
