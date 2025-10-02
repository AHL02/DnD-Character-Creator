import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditPage3() {
  const [values, setvalues] = useState("")

  function changeValue(i: string){
    setvalues
  }
    return(
      <ScrollView>
        <View style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", marginBottom: 10 }}>
          <View style={styles.box}>
            <Text style={styles.title}>
              CHA
            </Text>
            <TextInput
              value={values}
              style={styles.input}
              keyboardType="numeric"
            />
            <Text style={styles.subText} >
              Performance
            </Text>
            <Text style={styles.subText}>
              Deception
            </Text>
            <Text style={styles.subText}>
              Intimidation
            </Text>
            <Text style={styles.subText}>
              Persuasion
            </Text>            
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>
              Con
            </Text>
            <TextInput
              value={values}
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>
              DEX
            </Text>
            <TextInput
              value={values}
              style={styles.input}
              keyboardType="numeric"
            />
            <Text style={styles.subText} >
              Acrobatics
            </Text>
            <Text style={styles.subText}>
              Sleight of Hand
            </Text>
            <Text style={styles.subText}>
              Stealth
            </Text>      
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>
              INT
            </Text>
            <TextInput
              value={values}
              style={styles.input}
              keyboardType="numeric"
            />
            <Text style={styles.subText} >
              Arcana
            </Text>
            <Text style={styles.subText}>
              History
            </Text>
            <Text style={styles.subText}>
              Investigation
            </Text>
            <Text style={styles.subText}>
              Nature
            </Text>            
            <Text style={styles.subText}>
              Religion 
            </Text>     
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>
              STR
            </Text>
            <TextInput
              value={values}
              style={styles.input}
              keyboardType="numeric"
            />
            <Text style={styles.subText} >
              Athletics
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>
              WIS
            </Text>
            <TextInput
              value={values}
              style={styles.input}
              keyboardType="numeric"
            />
            <Text style={styles.subText} >
              Animal Handling
            </Text>
            <Text style={styles.subText}>
              Insight
            </Text>
            <Text style={styles.subText}>
              Medicine
            </Text>
            <Text style={styles.subText}>
              Perception
            </Text>     
            <Text style={styles.subText}>
              Survival
            </Text>         
          </View>
        </View>

      </ScrollView>
    );
};


export const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f0f0f0", // light gray background
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    width: 140, // adjust as needed
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  subText: {
    width: 100,
    fontSize: 14,
    color: "#555",
    marginVertical: 2,
    textAlign: "center",
  },
});