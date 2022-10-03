import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

interface ParticipantProps {
  participantName: string;
  onRemove: () => void;
}

export function Participant({participantName} : ParticipantProps ){
function handleRemoveParticipant(){
  console.log('Remove')
}

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{participantName}</Text>
      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}