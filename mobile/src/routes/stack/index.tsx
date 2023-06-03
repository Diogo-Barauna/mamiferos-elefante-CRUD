import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../../screens/home";
import Register from "../../screens/register";
import Delete from "../../screens/delete";
import Edit from "../../screens/edit";

const { Navigator, Screen } = createNativeStackNavigator();

export default function(){
    return(
        <Navigator initialRouteName='Home'>
            <Screen name='Home' component={Home} />
            <Screen name='Register' component={Register} />
            <Screen name='Delete' component={Delete} />
            <Screen name='Edit' component={Edit} />
        </Navigator>
    )
}