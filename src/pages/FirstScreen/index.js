import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function FirstScreen() {
    const { navigate } = useNavigation();

    function handleNavigateToSecondScreen(){
        navigate('SecondScreen');
    }

    return (
        <View style={styles.container}>
            <Button title="Navigate to Second Screen" onPress={handleNavigateToSecondScreen} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  