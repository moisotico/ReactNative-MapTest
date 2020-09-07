import React from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import Colors from "../constants/Colors";

const ImgPicker = (props: any) => {
  const verifyPermissions = async () => {
   const result = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status !== "granted") {
      Alert.alert(
        "Cannot run: Insufficient permissions",
        "Tip: You need to grant camera and gallery permissions to use this app",
        [{text: 'Ok'}]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async() => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions){
      return;
    }

    ImagePicker.launchCameraAsync();
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text>No image picked yet </Text>
        <Image style={styles.image} />
      </View>
      <Button
        title="Open Camera"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    
  },
  imagePreview: {
    width: "100%",
    height: 250,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImgPicker;
