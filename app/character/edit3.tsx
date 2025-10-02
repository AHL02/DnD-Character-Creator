import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditPage3() {
  const [values, setvalues] = useState("")

  function changeValue(i: string){
    setvalues
  }
    return(
      <ScrollView style={styles.container}>
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
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1e1e1e", 
  },
  box: {
    backgroundColor: "#272727", 
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    width: 140,
    margin: 8,
    borderWidth: 1,
    borderColor: "#9b30ff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#ffffff",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#9b30ff",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
    color: "#ffffff", 
    backgroundColor: "#1e1e1e",
  },
  subText: {
    width: 100,
    fontSize: 14,
    color: "#cccccc",
    marginVertical: 2,
    textAlign: "center",
  },
});
