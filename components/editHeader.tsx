import { CharacterAtom } from "@/data/atoms";
import { addCharacter } from "@/data/db";
import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import { useAtomValue } from "jotai";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function EditHeader(){

   const character = useAtomValue(CharacterAtom)
    function SaveAndExit() {
      addCharacter(character.id, character.name, character.race, character.class, character.lv )
        router.navigate("/")
    }
  return(
    <View style={styles.titleContainer}>
      <Text style={styles.text}>
        Edit
      </Text>
      <Pressable 
      style={{margin: 5, padding: 2, width: 60, flexDirection: 'row' , backgroundColor: '#4F46E5'}}
      onPress={SaveAndExit}
        >
        <Text style={{fontSize: 20}}> Save</Text>
        <Entypo
          size={20}
          name="save"
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.1,
    flexDirection: "row",
      backgroundColor: '#b40087ff',
  },
  text:{
    color: '#D0D0D0',
    fontSize: 40,
  
    textAlign: 'center',
    flex: 0.8
  },
    iconButton:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F46E5',
    padding: 5,
    justifyContent: 'space-between',
    flex: 0.2,
    margin: 8
  }
});