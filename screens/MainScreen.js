import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import SummaryBar from '../components/SummaryBar';

import data from '../helpers/data';


import { Calendar } from 'react-native-calendars';

import bg from '../assets/weight2.jpg';

const MainScreen = ({navigation}) => {

    return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bgImage} >
        <View style={styles.topContainer}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Big3</Text>
            <Text style={styles.subTitle}>Strength Training</Text>
          </View>
          <View style={styles.summaryBox}>
            <Text style={styles.combined}>Combined</Text>
            <Text style={styles.bigNumber}>1,500 {data.units}</Text>
            <Text style={styles.competeDays}>Compete in</Text>
            <Text style={styles.bigNumber}>22 days</Text>
          </View>
        </View>

        <View style={styles.summaryContainer}>
          <SummaryBar title="Deadlift" orm={data.ormDeadlift} tm={data.tmDeadlift} />
          <SummaryBar title="Press" orm={data.ormPress} tm={data.tmPress} />
          <SummaryBar title="Squat" orm={data.ormSquat} tm={data.tmSquat} />
          <SummaryBar title="Diet" orm={data.ormDiet} tm={data.tmDiet} />
        </View>

        <View style={styles.calendarContainer}>
          <Calendar style={{ color: 'white', backgroundColor: 'rgba(52, 52, 52, 0.4)'}}
          headerStyle={{ color: 'white', backgroundColor: 'rgba(52, 52, 52, 0.4)'}}
          />
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bgImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  summaryContainer: {
    flex: 1,
    width: '100%',
    marginTop: 28
  },

  titleBox: {
    width: '35%',
    marginTop: 42,
    marginLeft: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  title: {
    color: 'white',
    width: '100%',
    fontSize: 38,
    marginTop: 42,
    marginLeft: 24
  },

  subTitle: {
    color: 'white',
    width: '100%',
    fontSize: 14,
    marginLeft: 24
  },

  calendarContainer: {
    width: '65%',
    alignSelf: 'center'

  },

  combined: {
    color: 'white'
  },

  bigNumber: {
    color: 'white',
    fontSize: 28,
  },

  competeDays: {
    color: 'white',
    marginTop: 12
  },

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  summaryBox: {
    marginTop: 42,
    marginRight: 24,
    width: '33%',

    flexDirection: 'column',
    justifyContent: 'flex-end',

  }
});
