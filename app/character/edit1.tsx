import RaceDetails from "@/components/raceDetails";
import { CharacterAtom } from "@/data/atoms";
import { DndListResponse, ListItem } from "@/data/types";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from "react-native-safe-area-context";
  


export default function EditPage1() {

  const { status, data, error } = useQuery<DndListResponse>({
    queryKey: ["dnd-2014-races"],
    queryFn: async () => {
      const response = await fetch(
        'https://www.dnd5eapi.co/api/2014/races/',
      )
      return await response.json()
    },
  });
  
  const [character, setCharacter] = useAtom(CharacterAtom)
  const [description, setDescription] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if (status === "pending") return <Text>Loading classes...</Text>;
  if (status === "error") return <Text>Error: {error?.message}</Text>;
  return(
    <SafeAreaView style={styles.container}>
      <TextInput
        value={character.name}
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setCharacter((prev) => ({ ...prev, name: text}))}
      />
     <DropDownPicker
        open={open}
        value={character.race}
        items={data!.results.map((race: ListItem) => ({
          label: race.name,
          value: race.index,
        }))}
        setOpen={setOpen}
        setValue={(callback) => {
          setCharacter((prev) => ({
            ...prev,
            race: typeof callback === "function" ? callback(prev.race) : callback,
          }));
        }}
          style={styles.input}
          textStyle={{ color: "#ffffff" }}
          dropDownContainerStyle={styles.dropDownContainer}
      />
      <RaceDetails value={character.race}></RaceDetails> 
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1e1e1e",
  },
  text: {
    color: "#ffffff",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  infoText: {
    color: "#cccccc",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 8,
  },
  input: {
    height: 40,
    marginVertical: 12,
    marginHorizontal: 0,
    borderWidth: 1,
    borderColor: "#9b30ff", 
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#272727", 
    color: "#ffffff",
  },
  dropDownContainer: {
    marginVertical: 8,
    backgroundColor: "#272727",
  },
  dropDownLabel: {
    color: "#ffffff",
  },
});