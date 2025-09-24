import { Race } from "@/data/types";
import { ScrollView, StyleSheet, Text } from "react-native";

interface RaceCardProps {
  race: Race;
}

export const RaceCard: React.FC<RaceCardProps> = ({ race }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{race.name}</Text>
      <Text style={styles.section}>Speed: {race.speed}</Text>

      <Text style={styles.section}>Ability Bonuses:</Text>
      {race.ability_bonuses.map((ab, i) => (
        <Text key={i} style={styles.item}>
          {ab.ability_score.name} +{ab.bonus}
        </Text>
      ))}

      <Text style={styles.section}>Alignment:</Text>
      <Text style={styles.item}>{race.alignment}</Text>

      <Text style={styles.section}>Age:</Text>
      <Text style={styles.item}>{race.age}</Text>

      <Text style={styles.section}>Size:</Text>
      <Text style={styles.item}>
        {race.size} – {race.size_description}
      </Text>

      <Text style={styles.section}>Proficiencies:</Text>
      {race.starting_proficiencies.map((p, i) => (
        <Text key={i} style={styles.item}>
          {p.name}
        </Text>
      ))}

      <Text style={styles.section}>Languages:</Text>
      {race.languages.map((l, i) => (
        <Text key={i} style={styles.item}>
          {l.name}
        </Text>
      ))}
      <Text style={styles.item}>{race.language_desc}</Text>

      <Text style={styles.section}>Traits:</Text>
      {race.traits.map((t, i) => (
        <Text key={i} style={styles.item}>
          {t.name}
        </Text>
      ))}

      <Text style={styles.section}>Subraces:</Text>
      {race.subraces.length > 0 ? (
        race.subraces.map((s, i) => (
          <Text key={i} style={styles.item}>
            {s.name}
          </Text>
        ))
      ) : (
        <Text style={styles.item}>None</Text>
      )}

      <Text style={styles.footer}>Updated: {race.updated_at}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  section: {
    fontSize: 20,
    marginTop: 12,
    fontWeight: "600",
  },
  item: {
    fontSize: 16,
    marginLeft: 8,
    marginTop: 4,
  },
  footer: {
    fontSize: 12,
    color: "gray",
    marginTop: 20,
  },
});