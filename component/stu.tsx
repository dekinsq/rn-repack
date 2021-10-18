/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text} from 'react-native';

export default function StudentSide({user}) {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text style={{color: 'white', fontSize: 18}}>Hello {user.name}!</Text>
      <Text style={{color: 'white', fontSize: 18}}>You are a student. v1</Text>
      {/* ...more student related code */}
    </View>
  );
}
