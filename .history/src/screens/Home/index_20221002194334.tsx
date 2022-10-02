import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Dezembro de 2022</Text>
      <TextInput 
        style={styles.eventInput}
        placeholder='Nome do Participante'
        placeholderTextColor='#6b6b6b'
      />
      <TouchableOpacity>
        <Text style={styles.buttonText}>Clique aqui!</Text>
      </TouchableOpacity>
    </View>
  );
}
