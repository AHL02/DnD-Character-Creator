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
    <SafeAreaView style={styles.titleContainer}>
      <TextInput
        value={character.name}
        style={styles.input}
        placeholder="Name"
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
      />
      <RaceDetails value={character.race}></RaceDetails> 
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    
  },
  text:{
    color: '#D0D0D0',
    fontSize: 40,
    backgroundColor: '#b40087ff',
    textAlign: 'center'
  },
  infoText:{
        color: '#D0D0D0',
    fontSize: 12,
    backgroundColor: '#ae6301ff',
    textAlign: 'center'
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
     backgroundColor: '#ae6301ff',
  },
});