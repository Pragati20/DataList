import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const DataItem = props => {
    const navigateToDetails = () => {
        props.navigation.navigate('DetailedDataComponent', {
            description: props.item.item.collectionCensoredName,
        });
    };

    return (
        <TouchableOpacity style={styles.item} onPress={navigateToDetails}>
            <Image
                style={styles.img}
                source={{
                    uri: props.item.item.artworkUrl60,
                }}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={[styles.txtStyle, { fontSize: 14 }]}>
                    {props.item.item.collectionCensoredName}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.txtStyle, { flex: 2 }]}>Artist Name</Text>
                    <Text style={[styles.txtStyle, { flex: 8 }]}>
                        {props.item.item.artistName}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 10,
        flex: 1,
    },
    txtStyle: {
        color: '#0000FF',
        fontSize: 10,
    },
    img: {
        width: 50,
        height: 50,
    },
});

export default DataItem;