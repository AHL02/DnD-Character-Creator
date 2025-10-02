import { CharacterAtom } from '@/data/atoms';
import { Character, DeleteCharacter, getCharacters } from '@/data/db';
import Entypo from '@expo/vector-icons/Entypo';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';


import { useAtom } from 'jotai';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [character, setCharacter] = useAtom(CharacterAtom)

  // Load data once when component mounts
  useEffect(() => {
    (async () => {
      const data = await getCharacters();
      setCharacters(data);
    })();
  }, []);
  const router = useRouter();
  function editScreen(dndcharacter: Character) {

    setCharacter(() => ({
      id: dndcharacter.id,
      name: dndcharacter.name,
      race: dndcharacter.race,
      class: dndcharacter.dndClass,
      lv: dndcharacter.level,
    }));
    router.navigate("/character/edit1");
  }

   function newScreen() {
    setCharacter(() => ({
      id: 0,
      name: "",
      race: "",
      class: "",
      lv: 1,
    }));
    router.navigate("/character/edit1");
  }

 return(
  <SafeAreaView style={styles.titleContainer}>
  <Text style={styles.text}>Character screen</Text>
  <ScrollView>
    {characters.map((cd) => (
      <View style={styles.characterContainer} key={cd.id}>
        <Image
          source={require("../../img/BarbarianIcon.png")}
          style={{ width: 80, height: 80 }}
        />

        <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
          {/* Character Info */}
          <View style={styles.characterInfo}>
            <Text style={styles.characterName}>{cd.name? cd.name: "Hero"}</Text>
            <Text style={styles.characterDetails} numberOfLines={1} ellipsizeMode="tail">
              lv {cd.level} {cd.dndClass}
            </Text>
            <Text style={styles.characterDetails}>{cd.race}</Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonColumn}>
            <Pressable style={styles.iconButton}>
              <Text style={styles.buttonText}>View</Text>
              <Entypo size={20} name="open-book" color="#ffffff" />
            </Pressable>
            <Pressable style={styles.iconButton} onPress={() => editScreen(cd)}>
              <Text style={styles.buttonText}>Edit</Text>
              <Entypo size={20} name="edit" color="#ffffff" />
            </Pressable>
          </View>

          {/* Delete Button */}
          <Pressable style={styles.deleteButton} onPress={() => DeleteCharacter(cd.id)}>
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>X</Text>
          </Pressable>
        </View>
      </View>
    ))}

    {/* New Character Button */}
    <Pressable style={styles.newButton} onPress={() => newScreen()}>
      <Text style={styles.newButtonText}>New</Text>
      <Entypo size={20} name="add-user" color="#ffffff" />
    </Pressable>
  </ScrollView>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
 titleContainer: {
    flex: 1,
    backgroundColor: "#151718", // dark background for the screen
    padding: 12,
  },
  text: {
    color: "#ffffff", // light text
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  characterContainer: {
    backgroundColor: "#272727", // dark card background
    flexDirection: "row",
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  characterInfo: {
    flexDirection: "column",
    paddingLeft: 10,
    width: "50%",
  },
  characterName: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  characterDetails: {
    color: "#cccccc",
    fontSize: 14,
  },
  buttonColumn: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 5,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b30ff", // purple accent button
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginVertical: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    marginRight: 6,
    width: 40
  },
  deleteButton: {
    marginTop: 5,
    marginLeft: 5,
    padding: 5,
    width: 30,
    height: 30,
    backgroundColor: "#c00b0b", // red accent for delete
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  newButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4F46E5",
    borderRadius: 8,
  },
  newButtonText: {
    color: "#ffffff",
    fontSize: 16,
    marginRight: 6,
  },
});