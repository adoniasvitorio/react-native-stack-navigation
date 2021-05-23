import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function SecondScreen() {
    const { navigate } = useNavigation();

    function handleNavigateToFirstScreen(){
        navigate('FirstScreen');
    }
    return (
        <View style={styles.container}>
            <Button title="Navigate to First Screen" onPress={handleNavigateToFirstScreen} />
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
  