import { Text, TouchableOpacity, View } from "react-native";


import { styles } from "./styles";

export function Participant(){
function handleRemoveParticipant(){
  console.log('Remove')
}

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Guilherme Cardoso</Text>
      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}