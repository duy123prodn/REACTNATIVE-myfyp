import React, { Component } from 'react'
import { Button, Text, TextInput, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import firebase from 'firebase'

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            email:'',
            password:'',
            errorMessage: null
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            firebase.firestore().collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
                name,
                email,
            })
            console.log(result)
        })
        .catch((error => this.setState({errorMessage: error.message})))
    }

    render() {
        return (
            <View style={styles.container}>
                <Image 
                    style={styles.imgLanding}  
                    source={require("../assets/logo.png")}></Image>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>}
                </View>


                <View style={styles.form}>

                    <View>
                        <Text style={styles.inputTitle}>Name</Text>
                        <TextInput style={styles.input} 
                            autoCapitalize="none"
                            placeholder="Enter your full name"
                            onChangeText={(name) => this.setState({ name })}
                        />
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Username</Text>
                        <TextInput style={styles.input} 
                            autoCapitalize="none"
                            placeholder="Enter your email"
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            placeholder="Enter your password"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>

                    <View style={{marginTop: 32}} >
                        <TouchableOpacity style={styles.button}
                            title="Sign Up"
                            onPress={() => this.onSignUp()}
                        ><Text style={{ color: "#FFF"}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <TouchableOpacity style={styles.signin}
                    onPress={() => this.props.navigation.navigate("Login")}>
                    <Text>Already have an account? <Text style={styles.signin}>Sign in</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    errorMessage: {
        justifyContent: "center",
        alignItems:"center"
    },
    error: {
        color: "#E9446A",
        fontSize: 12,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginTop: 48,
        marginHorizontal: 30
    },
    imgLanding: {
        width: "100%",
        height: 200,
        marginTop: 50
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color:"#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        justifyContent: "center",
        alignItems: "center"
    },
    signin: {
        marginTop: 10,
        fontWeight: "500",
        alignItems:'center'
    }

});

export default Register
