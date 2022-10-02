import { Text, View, TextInput } from "react-native";

import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Dezembro de 2022</Text>
      <TextInput 
        style={styles.eventInput}
        placeholder='Nome do Participante'
      />
    </View>
  );
}
