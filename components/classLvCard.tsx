import { Class, ClassLevelResource, feature, SpellcastingLevelInfo } from "@/data/types";
import { ScrollView, StyleSheet, Text } from "react-native";

import React from "react";

interface ClassCardProps {
  dndClass: Class; // type you’ll define for Bard/Class
  level: ClassLevelResource;
  features: feature[];
}

export const ClassLvCard: React.FC<ClassCardProps> = ({ dndClass, level, features }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>
        {dndClass.name} - Level {level.level}
      </Text>

      <Text style={styles.section}>Proficiency Bonus:</Text>
      <Text style={styles.item}>+{level.prof_bonus}</Text>

      <Text style={styles.section}>Ability Score Bonuses:</Text>
      <Text style={styles.item}>{level.ability_score_bonuses}</Text>

      {level.spellcasting && (
        <>
          <Text style={styles.section}>Spellcasting:</Text>
          <Text style={styles.item}>
            Cantrips Known: {level.spellcasting.cantrips_known}
          </Text>
          <Text style={styles.item}>
            Spells Known: {level.spellcasting.spells_known}
          </Text>
          {level.spellcasting &&
            Array.from({ length: 9 }, (_, i) => i + 1).map((lvl) => {
            const slots = level.spellcasting?.[
              `spell_slots_level_${lvl}` as keyof SpellcastingLevelInfo
            ];
            return slots && slots > 0 ? (
              <Text key={lvl} style={styles.item}>
              Level {lvl} Slots: {slots}
              </Text>
            ) : null;
          })}
          </>
        )}

      <Text style={styles.section}>Features:</Text>
      {features? features.map((f, i) => (
        <Text key={i} style={styles.item}>
          lv {f.level} {f.name}
        </Text>
      )) : ""}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1e1e1e",
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
    color: "#9b30ff",
  },
  item: {
    fontSize: 16,
    marginLeft: 8,
    marginTop: 4,
    color: "#bbbbbb", 
  },
});