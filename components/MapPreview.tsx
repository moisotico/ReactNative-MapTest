import React, { useState } from "react";
import { Image, StyleSheet, View, ImagePropTypes } from "react-native";
import ENV from "../env";

const MapPreview = (props: any) => {
  let imagePreviewUrl: any;
  if (props.location) {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?key=${ENV.googleApiKey}&center=${props.location.lat},${props.location.lng}&zoom=12&format=png&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&style=feature:landscape%7Chue:0xFFBB00%7Csaturation:43.400000000000006%7Clightness:37.599999999999994%7Cgamma:1&style=feature:poi%7Chue:0x00FF6A%7Csaturation:-1.0989010989011234%7Clightness:11.200000000000017%7Cgamma:1&style=feature:road.arterial%7Chue:0xFF0300%7Csaturation:-100%7Clightness:51.19999999999999%7Cgamma:1&style=feature:road.highway%7Chue:0xFFC200%7Csaturation:-61.8%7Clightness:45.599999999999994%7Cgamma:1&style=feature:road.local%7Chue:0xFF0300%7Csaturation:-100%7Clightness:52%7Cgamma:1&style=feature:water%7Chue:0x0078FF%7Csaturation:-13.200000000000003%7Clightness:2.4000000000000057%7Cgamma:1&size=400x200`;
  }

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
