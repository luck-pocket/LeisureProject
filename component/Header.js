import {StyleSheet,View, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function Header() {

  return (
      <View style={styles.topBar}>
        <View style={styles.bar}>
          <FontAwesome5 name="user" size={24} color="black" />
        </View>
        <View style={styles.logoname}>
          <Image source={require("../assets/logoname.png")} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 12
  },
  bar: {
    flex: 1,
    marginLeft: "6%"
  },
  logoname: {
    flex: 2,
  },
})