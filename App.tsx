/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const StudentSide = React.lazy(
  () => import(/* webpackChunkName: "student" */ './component/stu'),
);

const TeacherSide = React.lazy(
  () => import(/* webpackChunkName: "teacher" */ './component/tea'),
);

const App = () => {
  const [userRole, setUserRole] = React.useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Side = () => {
    const user = {name: 'my'};
    return userRole === 0 ? (
      <StudentSide user={user} />
    ) : (
      <TeacherSide user={user} />
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <React.Suspense fallback={<Text>Loading...</Text>}>
          <Side />
        </React.Suspense>
        <View style={{flexDirection: 'row'}}>
          <Button title="加载学生端小程序" onPress={() => setUserRole(0)} />
          <Button title="加载老师端小程序" onPress={() => setUserRole(1)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
