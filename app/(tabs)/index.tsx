import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
   return (
      <ScrollView contentContainerStyle={styles.container} >
         <Text style={styles.titleContainer}>Hi! I'm Cory</Text>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   titleContainer: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 12,
      color: '#efefef',
   },
   container: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 20,
   },
});
