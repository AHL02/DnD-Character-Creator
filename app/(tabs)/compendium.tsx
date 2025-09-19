import { StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView  style={styles.titleContainer}>
      <Text style={styles.text}>
            Compendium
      </Text>
    </SafeAreaView>
  );
}

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
