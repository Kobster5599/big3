import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import bg from '../assets/belt1.jpg';


const PressScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bgImage} >
      <Text style={{color: 'white'}}>PressScreen</Text>

      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{color: 'white'}}>Back</Text>
      </Pressable>
      <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}

export default PressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButton: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 12
  }
});
