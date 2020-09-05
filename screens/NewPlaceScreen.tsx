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

const NewPlaceScreen = (props: any) => {
  const [titleValue, setTitleValue] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (text: any) => {
    //pending to add validation
    setTitleValue(text);
  };

//check redux  
  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>New Place Screen</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={() => {
            savePlaceHandler;
          }}
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
});

export default NewPlaceScreen;
