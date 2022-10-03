import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
  const participants = ["Guilherme", "Biro", "Thiago", "Rodrigo"];

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
      {participants.map((participant) => {
        return (
          <Participant
            participantName={participant}
            key={participant}
            onRemove={() => handleRemovePArticipant(participant)}
          />
        );
      })}
    </View>
  );
}
