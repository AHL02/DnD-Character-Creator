import { Class, ClassLevelsResponse, feature } from "@/data/types";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { ClassCard } from "./classCard";
import { ClassLvCard } from "./classLvCard";

interface Props {
  value: string; // e.g. "dragonborn"
  lv: number
}

const ClassDetails: React.FC<Props> = ({ value, lv }) => {

  const { data, isLoading, error } = useQuery<Class>({
    queryKey: ["dnd-2014-class", value],
    queryFn: async () => {
      const response = await fetch(
        "https://www.dnd5eapi.co/api/2014/classes/" + value
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return (await response.json()) as Class;
    },
    enabled: !!value, // only fetch if value is defined
  });

  const lvData = useQuery<ClassLevelsResponse>({
    queryKey: ["dnd-2014-class-lv", value],
    queryFn: async () => {
      const response = await fetch(
        "https://www.dnd5eapi.co/api/2014/classes/" + value + "/levels" 
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return (await response.json()) as ClassLevelsResponse;
    },
    enabled: !!value, // only fetch if value is defined
  });

  const [expand, setExpand] = useState(true)
  
  
  if (isLoading || lvData.isLoading) return <ActivityIndicator size="large" />;
  
  if (error || lvData.error) return <Text>Error loading class data</Text>;
  
  if (!data || !lvData.data) return <Text>No class found</Text>;
   const features : feature[] = lvData.data
   .filter((lvl) => (lvl.level && lvl.level <= lv))
   .flatMap((lvl) =>
    lvl.features?.map((f) => ({
      ...f,
      level: lvl.level,
    }))) as feature[];
  return ( 
    <View style={{ flex: 1 }}>

      <Pressable onPress={() => setExpand(!expand)} style={styles.iconButton}>
        <Text style={styles.buttonText}>
          {expand ? "Class" : "Levels"}
        </Text>
      </Pressable>

      {expand ? (
        <ClassLvCard
          dndClass={data}
          level={lvData.data[lv - 1]}
          features={features}
        />
      ) : (
        <ClassCard dndClass={data} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9b30ff", // purple accent for dark theme
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: "flex-start", // keeps the button aligned left
  },
  buttonText: {
    color: "#ffffff", // white text for contrast
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ClassDetails;