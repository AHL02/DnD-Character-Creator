import ClassDetails from "@/components/classDetails";
import { DndListResponse, ListItem } from "@/data/types";
import { useQuery } from "@tanstack/react-query";
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

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [openLv, setOpenLv] = useState(false);
    const [lv, setLv] = useState(1);
    

    if (status === "pending") return <Text>Loading classes...</Text>;
    if (status === "error") return <Text>Error: {error?.message}</Text>;
    return(
      <SafeAreaView style={styles.titleContainer}>
        <View style={{flexDirection: "row"}}>
          <DropDownPicker
              open={open}
              value={value}
              items={data!.results.map((cls: ListItem) => ({
                label: cls.name,   // shows up in dropdown
                value: cls.index,  // internal value you can use
              }))}
              setOpen={setOpen}
              setValue={setValue}
                  containerStyle={{ flex: 0.8 }}
              zIndex={2000}
                  zIndexInverse={2000}
            />
            <DropDownPicker
              open={openLv}
              value={lv}
              items={Array.from({length: 20} , (_,i) => i+ 1).map((num: number) => ({
                label: num.toString(),
                value: num,
              }))}
              setOpen={setOpenLv}
              setValue={setLv}

                  containerStyle={{ flex: 0.2 }}
              zIndex={1000}
                  zIndexInverse={2000}
            />
        </View> 
       <ClassDetails value={value} lv={lv} />
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
});