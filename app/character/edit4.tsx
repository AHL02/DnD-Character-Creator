import { ScrollView, StyleSheet, Text } from "react-native";

export default function EditPage4() {
    return(
        <ScrollView style={styles.titleContainer}>
            <Text style={styles.text}>
              Edit
            </Text>
        </ScrollView>
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