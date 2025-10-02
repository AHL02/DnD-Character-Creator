import ClassDetails from "@/components/classDetails";
import { CharacterAtom } from "@/data/atoms";
import { DndListResponse, ListItem } from "@/data/types";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditPage2() {

  const { status, data, error } = useQuery<DndListResponse>({
    queryKey: ["dnd-2014-classes"],
    queryFn: async () => {
      const response = await fetch(
        'https://www.dnd5eapi.co/api/2014/classes/',
      )
      return await response.json()
    },
  });
    const [character, setCharacter] = useAtom(CharacterAtom)
    const [open, setOpen] = useState(false);
    const [openLv, setOpenLv] = useState(false);

    if (status === "pending") return <Text>Loading classes...</Text>;
    if (status === "error") return <Text>Error: {error?.message}</Text>;
    return(
      <SafeAreaView style={styles.titleContainer}>
        <View style={{flexDirection: "row"}}>
          <DropDownPicker
              open={open}
              value={character.class}
              items={data!.results.map((cls: ListItem) => ({
                label: cls.name,   // shows up in dropdown
                value: cls.index,  // internal value you can use
              }))}
              setOpen={setOpen}
              setValue={(callback) => {
                setCharacter((prev) => ({
                  ...prev,
                  class: typeof callback === "function" ? callback(prev.class) : callback,
                }));
              }}
              style={styles.input}
              textStyle={{ color: "#ffffff" }}
              dropDownContainerStyle={styles.dropDownContainer}
              containerStyle={{ flex: 0.78 }}
              zIndex={2000}
              zIndexInverse={2000}
            />
            <DropDownPicker
              open={openLv}
              value={character.lv}
              items={Array.from({length: 20} , (_,i) => i+ 1).map((num: number) => ({
                label: num.toString(),
                value: num,
              }))}
              setOpen={setOpenLv}
              setValue={(callback) => {
                setCharacter((prev) => ({
                  ...prev,
                  lv: typeof callback === "function" ? callback(prev.lv) : callback,
                }));
              }}
              style={styles.input}
              textStyle={{ color: "#ffffff" }}
              dropDownContainerStyle={styles.dropDownContainer}
              containerStyle={{ flex: 0.22 }}
              zIndex={1000}
              zIndexInverse={2000}
            />
        </View> 
       <ClassDetails value={character.class} lv={character.lv} />
      </SafeAreaView>
    );
};


const styles = StyleSheet.create({
 titleContainer: {
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