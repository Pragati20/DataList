import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const DetailedDataComponent = ({ route }) => {
    return (
        <View style={styles.container}>
            <Text>{route.params.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtStyle: {
        color: '#0000FF',
        fontSize: 10,
    },
});

export default DetailedDataComponent;