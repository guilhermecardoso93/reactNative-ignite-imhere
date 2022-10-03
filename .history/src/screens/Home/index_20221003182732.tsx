import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
  const participants = [
    
  ];

  function handleAddPArticipant() {
    console.log("ADD part");
  }

  function handleRemovePArticipant(name: string) {
    console.log(`Você Removeu o ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Dezembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.eventInput}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddPArticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({ item }) => (<Participant
          participantName={item}
          key={item}
          onRemove={() => handleRemovePArticipant(item)}
         />)}
         ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Ninguem adicionado á lista ainda!!
          </Text>
        )} 
      />
    </View>
  );
}
