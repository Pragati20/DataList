import React, { useEffect, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import DataItem from './DataItem';

let DataListComponent = ({ navigation }) => {
    const [listData, setListData] = useState([]);
    const [isLoading, setLoader] = useState(true);

    const fetchData = async () => {
        fetch('https://itunes.apple.com/search?term=Michael+jackson')
            .then(response => response.json())
            .then(json => setListData(json.results))
            .catch(error => console.error(error))
            .finally(() => setLoader(false));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000FF" />
            ) : (
                    <FlatList
                        data={listData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={item => <DataItem item={item} navigation={navigation} />}
                    />
                )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default DataListComponent;