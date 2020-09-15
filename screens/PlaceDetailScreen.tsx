
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = (props: any) => {
    return (
        <View>
            <Text>PlaceDetailScreen</Text>
        </View>
    );
};


PlaceDetailScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    };
};

const styles = StyleSheet.create({ });

export default PlaceaDetailScreen;
