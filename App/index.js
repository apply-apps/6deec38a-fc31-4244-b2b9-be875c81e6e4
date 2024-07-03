// Filename: index.js
// Combined code from all files

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const tales = [
    { id: '1', title: 'The Little Red Hen', content: 'Once upon a time, there was a little red hen who lived on a farm...' },
    { id: '2', title: 'The Three Little Pigs', content: 'Once upon a time, there were three little pigs who left their home to seek their fortunes...' },
    { id: '3', title: 'Goldilocks and the Three Bears', content: 'Once upon a time, there was a little girl named Goldilocks who went for a walk in the forest...' },
];

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Select a Tale</Text>
            {tales.map((tale) => (
                <TouchableOpacity
                    key={tale.id}
                    style={styles.button}
                    onPress={() => navigation.navigate('Tale', { title: tale.title, content: tale.content })}
                >
                    <Text style={styles.buttonText}>{tale.title}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    );
};

const TaleScreen = ({ route }) => {
    const { content } = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.content}>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    scrollView: {
        marginVertical: 20,
    },
    content: {
        fontSize: 18,
        lineHeight: 30,
    },
});

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tales for Kids' }} />
                <Stack.Screen name="Tale" component={TaleScreen} options={({ route }) => ({ title: route.params.title })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}