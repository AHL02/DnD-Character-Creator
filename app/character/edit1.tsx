import RaceDetails from "@/components/raceDetails";
import { DndListResponse, ListItem } from "@/data/types";
import { useQuery } from "@tanstack/react-query";
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

  const [name, onChangeText] = useState();
  const [description, setDescription] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if (status === "pending") return <Text>Loading classes...</Text>;
  if (status === "error") return <Text>Error: {error?.message}</Text>;
  return(
    <SafeAreaView style={styles.titleContainer}>
      <Text style={styles.text}>
        Edit
      </Text>
      <TextInput
        value={name}
        style={styles.input}
        placeholder="Name"
      />
      <DropDownPicker
        open={open}
        value={value}
        items={data!.results.map((cls: ListItem) => ({
          label: cls.name,   // shows up in dropdown
          value: cls.index,  // internal value you can use
        }))}
        setOpen={setOpen}
        setValue={setValue}
      />
      <RaceDetails value={value}></RaceDetails> 
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