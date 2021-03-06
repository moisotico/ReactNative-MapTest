import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import Colors from "../constants/Colors";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapPreview from "./MapPreview";

const LocationPicker = (props: any) => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation]: any = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "Cannot run: Insufficient permissions",
        "Tip: You need to grant location permissions to use this app",
        [{ text: "Ok" }]
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 6000,
      });
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (err) {
      Alert.alert(
        "Could not fetch location",
        "We cannot access your location, please try again or pick a location on the map",
        [{ text: "Ok" }]
      );
    }

    setIsFetching(false);
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview styles={styles.mapPreview} location={pickedLocation}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text> No location chosen yet!📍</Text>
        )}
      </MapPreview>
      <Button
        title="Get location"
        color={Colors.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 15,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default LocationPicker;
