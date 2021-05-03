import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import firebase from 'firebase'

export default class Profile extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                email: "",
                displayName: "",
                errorMessage: null
            }
        }
    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    onResetPassword = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then((result) => {
            console.log(result)
        })
        .catch((error => this.setState({errorMessage: error.message})))
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };

    render() {
        return (
            <View style={styles.container }>
                <Text>Hello {this.state.email}</Text>
                
                <View style={{marginTop: 32}} >
                        <TouchableOpacity style={styles.button}
                            title="Reset Password"
                            onPress={() => this.onResetPassword()}
                        >
                        <Text style={{ color: "#FFF"}}>Reset Password</Text>
                        </TouchableOpacity>
                </View>

                <TouchableOpacity style={{marginTop: 16}}
                    onPress={this.signOutUser}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>

            </View>

            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
})
