import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

import { View, Text, ActivityIndicator, StyleSheet, SafeAreaView } from 'react-native'

import firebase from 'firebase'

import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {   
apiKey : "AIzaSyBkHWessJS6lIk2mmB_4fh1IAI3c3EtmRA" ,   
authDomain : "myfyp-33770.firebaseapp.com" ,   
projectId : "myfyp-33770" ,   
storageBucket : "myfyp- 33770.appspot.com " ,   
messagingSenderId : " 355170534407 " ,   
appId : " 1: 355170534407: web: 376a5881a8e88a5fff16a2 " ,   
measurementId : " G-0T6LTBRMJM " 
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'
import MainScreen from './components/Main'
import ArticleScreen from './components/main/Article'
import PostScreen from './components/main/PostScreen'
import PostArticle from './components/main/PostArticle'
import ResetPasswordScreen from './components/auth/Resetpassword'
import MakeapointmentScreen from './components/Main/Makeapointment'
import HistoryScreen from './components/Main/History'


const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loaded: false,
    }
  }

componentDidMount() {
  firebase.auth().onAuthStateChanged((user) => {
    if(!user){
      this.setState({
        isLoggedIn: false,
        loaded: true,
      })
    }
    else{
      this.setState({
        isLoggedIn: true,
        loaded: true,
      })
    }
  })
}

  render() {
    const { isLoggedIn, loaded } = this.state;
    if(!loaded){
      return(
        <SafeAreaView>
        <View style={styles.Loading}>
          <Text>Loading</Text>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
        </SafeAreaView>
      );
    }
    if(!isLoggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen 
              name="Landing" 
              component={LandingScreen}
            />
  
            <Stack.Screen 
              name="Register" 
              component={RegisterScreen}
            />
  
            <Stack.Screen 
              name="Login" 
              component={LoginScreen}
            />

            <Stack.Screen 
              name="Resetpassword" 
              component={ResetPasswordScreen}
            />
  
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
              <Stack.Screen 
                name="Main" 
                component={MainScreen}
                options={{ headerShown : false }}
              />
              <Stack.Screen 
                name="PostArticle" 
                component={PostArticle}
                navigation={this.props.navigation}
              />
              <Stack.Screen 
                name="PostScreen" 
                component={PostScreen}
                navigation={this.props.navigation}
              />
              <Stack.Screen 
                name="Article" 
                component={ArticleScreen}
                navigation={this.props.navigation}
              />
              <Stack.Screen 
                name="Makeapointment" 
                component={MakeapointmentScreen}
                navigation={this.props.navigation}
              />
              <Stack.Screen 
                name="History" 
                component={HistoryScreen}
                navigation={this.props.navigation}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  Loading: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:300,
  },
})

export default App



