# ReactNative-MapTest
A test for ShowPlaces, an Android map app using expo

## Install

- To install expo globally:
```shell
npm install -g expo-cli
```
Note: you should check how to [install and run android emulator](https://developer.android.com/studio/run/emulator) and [ios simulations](https://developer.apple.com/documentation/xcode/running_your_app_in_the_simulator_or_on_a_device) (Mac only).

- You'll need to install dependencies the following way
```
cd <Repo>
npm install --save react-navigation react-navigation-stack redux react-redux react-native-screens redux-thunk @expo/vector-icons
expo install expo-image-picker expo-updates expo-file-system
```


## run
```shell
cd ShowPlaces
npm start
```
## Uninstall

```shell
rm -rf  <Repo>
```

## Additional documentation
- [Based on React Native: The Practical Guide 2020 Edition](https://www.udemy.com/course/react-native-the-practical-guide) by Maximilian Schwarzmüller

- Built using [Expo's Typescript template](https://docs.expo.io/guides/typescript/)