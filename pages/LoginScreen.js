// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  
  logo: {
    marginRight:'auto',
    marginLeft:'auto',
  },
});

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#055C9D' }}>
        <View style={{ flex: 1 }}>
          <Mytext text="" />
          <Image
            style={styles.logo}
            source={require('./images/Tuffy.png')}
          />

          <Mybutton
            title="Create Account"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="Login"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="Forgot Account Info"
            customClick={() => navigation.navigate('View')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;