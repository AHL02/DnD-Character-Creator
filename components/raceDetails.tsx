import { Race } from "@/data/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { RaceCard } from "./raceCard";

interface Props {
  value: string; // e.g. "dragonborn"
}

const RaceDetails: React.FC<Props> = ({ value }) => {

  const { data, isLoading, error } = useQuery<Race>({
    queryKey: ["dnd-2014-race", value],
    queryFn: async () => {
      const response = await fetch(
        "https://www.dnd5eapi.co/api/2014/races/" + value
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return (await response.json()) as Race;
    },
    enabled: !!value, // only fetch if value is defined
  });

  console.log(value, data)

  
  if (isLoading) return <ActivityIndicator size="large" />;
   
  if (error) return <Text>Error loading race data</Text>;
  
  if (!data) return <Text>No race found</Text>;
  
  return <RaceCard race={data} />;
};

export default RaceDetails;