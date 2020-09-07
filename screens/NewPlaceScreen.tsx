import React, { useState } from "react";

import PropTypes, { InferProps } from "prop-types";

import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  TextInputComponent,
} from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import * as placesActions from "../store/places-actions";
import ImagePicker from "../components/ImagePicker";

const Separator = () => <View style={styles.separator} />;

const NewPlaceScreen = (props: any) => {
  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();

  const titleChangeHandler = (text: any) => {
    //pending to add validation
    setTitleValue(text);
  };

  const imageTakenHandler = (imagePath: any) => {
    setSelectedImage(imagePath);
  };

  //check redux
  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Type the name of you new place</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <ImagePicker onImageTaken={imageTakenHandler} />

        <Separator />

        <Button
          title="Save"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add Places",
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
  },
});

export default NewPlaceScreen;
