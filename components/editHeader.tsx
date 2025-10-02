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
 return (
  <View style={styles.titleContainer}>
    <Text style={styles.text}>Edit</Text>
    <Pressable style={styles.iconButton} onPress={SaveAndExit}>
      <Text style={styles.buttonText}>Save</Text>
      <Entypo size={20} name="save" color="#ffffff" />
    </Pressable>
  </View>
);
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.1,
    flexDirection: "row",
    backgroundColor: "#1e1e2a", // dark background
    alignItems: "center",
    paddingHorizontal: 12,
  },
  text: {
    color: "#ffffff", // light text
    fontSize: 40,
    textAlign: "center",
    flex: 0.8,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b30ff", // accent purple
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    flex: 0.2,
    marginLeft: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    marginRight: 6,
    width: 45
  },
});