
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';

const PlacesDetailScreen = (props: any) => {
    return (
        <View>
            <Text>PlacesDetailScreen</Text>
        </View>
    );
};


PlacesDetailScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    };
};

const styles = StyleSheet.create({ });

export default PlacesDetailScreen;