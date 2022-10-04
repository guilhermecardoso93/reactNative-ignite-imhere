import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("")

  function handleAddPArticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante já existe",
        "Participante já cadastrado nesse evento!"
      );

      setParticipants((prevState) => [...prevState, participantName]);
    }
  }

  function handleRemovePArticipant(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
          onChangeText={e => setParticipantName(e)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddPArticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            participantName={item}
            key={item}
            onRemove={() => handleRemovePArticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Ninguém adicionado á lista ainda!!
          </Text>
        )}
      />
    </View>
  );
}
