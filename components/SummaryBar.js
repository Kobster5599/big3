import { BlurView } from "expo-blur";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import data from '../helpers/data';

const SummaryBar = ( { title, orm, tm } ) => {

    const navigation = useNavigation();

    return (
        <Pressable style={styles.barContainer} onPress={() => navigation.navigate(title)}>
            <View style={styles.barTitle}>
                <Text style={styles.barTitleText}>{title}</Text>
            </View>

            <View style={styles.barSection}>
                <Text style={styles.barSectionTitle}>1RM</Text>
                <Text>{orm} {data.units}</Text>
            </View>
            <View style={styles.barSection}>
                <Text style={styles.barSectionTitle}>TM</Text>
                <Text>{tm} {data.units}</Text>
            </View>
            <View style={styles.barSection}>
                <Text style={styles.barSectionTitle}>Trend</Text>
                <Text>Up</Text>
            </View>

            <View style={styles.barSection}>
                <Text style={styles.barSectionTitle}>Cal.</Text>
                <Text>2,500</Text>
            </View>
        </Pressable>
    );
}


export default SummaryBar;

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        marginBottom: 6,
        borderRadius: 15,
        marginLeft: 8,
        marginRight: 8,
        padding: 6
    },
    barTitle: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    barTitleText: {
        color: 'black',
        fontSize: 24,
        marginLeft: 16,
    },
    barSection: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    barSectionTitle: {
        color: '#777',
        fontSize: 16
    }
});