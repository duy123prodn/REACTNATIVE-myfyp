import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, StatusBar } from 'react-native';

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Image 
          style={styles.imgLanding}  
          source={require("../assets/logo.png")}></Image>
        <View style={{marginTop: 32}} >
            <TouchableOpacity style={styles.button}
                title="Register"
                onPress={() => navigation.navigate("Register")}
            >
                        <Text style={{ color: "#FFF"}}>Register</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop: 10}} >

            <TouchableOpacity style={styles.button}
                title="Log in"
                onPress={() => navigation.navigate("Login")}
            >
            <Text style={{ color: "#FFF"}}>Sign In</Text>
            </TouchableOpacity>

        </View>

        <View style={{marginTop: 10}} >

            <TouchableOpacity style={styles.button}
                title="Resetpassword"
                onPress={() => navigation.navigate("Resetpassword")}
            >
            <Text style={{ color: "#FFF"}}>Forgot password?</Text>
            </TouchableOpacity>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    width: 350,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  imgLanding: {
    width: "100%",
    height: 200,
    marginTop: 50
  }
});