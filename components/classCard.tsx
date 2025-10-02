import { Class } from "@/data/types";
import { ScrollView, StyleSheet, Text } from "react-native";

import { APIReference } from "@/data/types"; // reuse from your types
import React from "react";

interface ClassCardProps {
  dndClass: Class; // type you’ll define for Bard/Class
}

export const ClassCard: React.FC<ClassCardProps> = ({ dndClass }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <Text style={styles.title}>{dndClass.name}</Text>

      <Text style={styles.section}>Hit Die:</Text>
      <Text style={styles.item}>d{dndClass.hit_die}</Text>

      <Text style={styles.section}>Saving Throws:</Text>
      {dndClass.saving_throws.map((st: APIReference, i) => (
        <Text key={i} style={styles.item}>
          {st.name}
        </Text>
      ))}

      <Text style={styles.section}>Proficiencies:</Text>
      {dndClass.proficiencies.map((p: APIReference, i) => (
        <Text key={i} style={styles.item}>
          {p.name}
        </Text>
      ))}

      <Text style={styles.section}>Subclasses:</Text>
      {dndClass.subclass ? (
        dndClass.subclass.map((s: APIReference, i) => (
          <Text key={i} style={styles.item}>
            {s.name}
          </Text>
        ))
      ) : (
        <Text style={styles.item}>None</Text>
      )}

      {dndClass.spellcasting && (
        <>
          <Text style={styles.section}>Spellcasting:</Text>
          <Text style={styles.item}>
            Spellcasting modifire: {dndClass.spellcasting.spellcasting_ability.name}
          </Text>
        </>
      )}

            <Text style={styles.section}>Starting Equipment:</Text>
      {dndClass.starting_equipment.map((eq, i) => (
        <Text key={i} style={styles.item}>
          {eq.equipment.name} ×{eq.quantity}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1e1e1e", // slightly deeper dark
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#ffffff", 
  },
  section: {
    fontSize: 20,
    marginTop: 12,
    fontWeight: "600",
    color: "#9b30ff", // brighter purple accent
  },
  item: {
    fontSize: 16,
    marginLeft: 8,
    marginTop: 4,
    color: "#bbbbbb", 
  },
});