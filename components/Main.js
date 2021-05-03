import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import FeedScreen from './main/Feed'
import ArticleScreen from './main/Article'
import ProfileScreen from './main/Profile'
import SettingsScreen from './main/Settings'


const Tab = createMaterialBottomTabNavigator();

// const EmptyScreen = () => {
//     return(null)
// }

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render() {
        return (

            <Tab.Navigator initialRouteName="Feed" labeled={false}>
                <Tab.Screen name="Feed" component={FeedScreen} 
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                }}/>
                
                <Tab.Screen name="Article" component={ArticleScreen}
                    // listeners={({ navigation }) => ({
                    //     tabPress: event => {
                    //         event.preventDefault();
                    //         navigation.navigate("Add");
                    //     }
                    // })}
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
                        ),
                }}/>
                <Tab.Screen name="Settings" component={SettingsScreen}
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
                        ),
                }}/>
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                        ),
                }}/>
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch);
export default connect(mapStateToProps, mapDispatchProps)( Main )
