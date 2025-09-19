import Entypo from '@expo/vector-icons/Entypo';

import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView  style={styles.titleContainer}>
      <Text style={styles.text}>
        Character screen
      </Text>
      <View style={styles.characterContainer}>
        <Image source={require('./img/BarbarianIcon.png')}  style={{width: 80, height: 80,}}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
          <View style={{flexDirection: 'column', paddingLeft: 10, width: "70%"}}>
            <Text>
              Gregory
            </Text>
            <Text numberOfLines={1} ellipsizeMode='tail'>
              lv 5 barbarian
            </Text>
            <Text>
              Goblin
            </Text>
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
            <Pressable
            style={styles.iconButton}
            >
              <Text style={{width: 40}}>
                View
              </Text>
              <Entypo
              size={20}
              name="open-book"
              />
            </Pressable>
            <Pressable style={styles.iconButton}>
              <Text>
                Edit
              </Text>
              <Entypo
              size={20}
              name="edit"
              />
            </Pressable>
          </View>      
        </View>
      </View>
      <Pressable
            style={{marginTop: 5, padding: 2, width: 60, justifyContent: 'space-between', flexDirection: 'row' , backgroundColor: '#4F46E5'}}
            >
              <Text>
                New
              </Text>
              <Entypo
              size={20}
              name="add-user"
              />
      </Pressable>
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
  characterContainer:{
    backgroundColor: '#5c006eff',
    flexDirection: 'row',
    marginTop: 6,
    padding: 10
  },
  iconButton:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4F46E5',
    padding: 5,
    width: 75,
    justifyContent: 'space-between'
  }
});
