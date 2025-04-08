import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  let Imagem = 'https://s2-g1.glbimg.com/8FnTAN34UJ4AXEoF74NOOeLXBSQ=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/4/z/PadxMjSHGqWQmNSS0Kdw/rj1-limpo-20250407-1115-frame-184036.jpeg';
  let Imagem2 = 'https://s2-g1.glbimg.com/7j3ZbbnWbNrCEP04cr8-c8fMhBg=/0x0:1267x714/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/k/C/jTnzAHSoW8xx4m4XoFKw/thumbnail-image.png';
  let Imagem3 = 'https://s2-g1.glbimg.com/d6_4nnb-aGdUGPtZaBG29Fy2b5o=/0x0:640x360/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/b/7/BV2rRZTTehZnmBFfZxag/image006-6-.jpg';
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.titulo}>Notícias Brasil 2025</Text>
      </View>
      <View style={styles.noticia}>
        <View style={styles.card}>
          <Image source={{uri: Imagem}} style={{ width: '100%', height: 240 }}></Image>
          <Text style={styles.texto}>Lady Gaga no Rio: palco começa a ser montado na praia de Copacabana</Text>
          <TouchableOpacity style={styles.botao}>
            <Text style={{ color: "#FFF", fontSize: 14 }}>Saber Mais</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{uri: Imagem2}} style={{ width: '100%', height: 240 }}></Image>
          <Text style={styles.texto}>Acidente no Morro dos Cavalos: BR-101 é liberada após caminhão tombar, explodir e incendiar veículos em SC</Text>
          <TouchableOpacity style={styles.botao}>
            <Text style={{ color: "#FFF", fontSize: 14 }}>Saber Mais</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={{uri: Imagem3}} style={{ width: '100%', height: 240 }}></Image>
          <Text style={styles.texto}>Curiosity encontra moléculas relacionadas à vida em Marte</Text>
          <TouchableOpacity style={styles.botao}>
            <Text style={{ color: "#FFF", fontSize: 14 }}>Saber Mais</Text>
          </TouchableOpacity>
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
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    margin: 5
  },
  texto: {
    color: "#000",
    fontSize: 17,
    fontWeight: 600,
    margin: 5
  },
  botao: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#292929",
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});
