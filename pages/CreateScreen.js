// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native

import React, { useEffect } from 'react';
import { View, TextInput, Text, SafeAreaView, Image, StyleSheet, Button } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const styles = StyleSheet.create({
  logo: {
    width:  236,
    height: 300,
    resizeMode: 'stretch',
    marginRight:'auto',
    marginLeft:'auto',
  },
  text:{
    marginTop: 7,
    paddingLeft: 10,
    color: 'white'
  },
  textInput:{
    marginTop: 5,
    paddingLeft: 10,
    margin: 10,
    borderColor: 'orange',
    borderWidth: 3,
    backgroundColor: 'white'
  }
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
    <View style={{ flex: 1,backgroundColor: '#055C9D' }}>
      <Image
          style={styles.logo}
          source={require('./images/Tuffy.png')}
      />
      <Text 
        style={styles.text}>Enter Name:
      </Text>          
      <TextInput 
        style={styles.textInput}
        placeholder="Name">
      </TextInput>

       <Text style={styles.text}>Enter Last Name:</Text>
       <TextInput 
        style={styles.textInput}
        placeholder="Last name">
      </TextInput>

      <Text 
        style={styles.text}>Enter CWID:
      </Text>
      <TextInput 
        style={styles.textInput}
        placeholder="CWID">
      </TextInput>

      <Text 
        style={styles.text}>Confirm CWID:
      </Text>
      <TextInput 
        style={styles.textInput}
        placeholder="Confirm CWID">
      </TextInput>

      <Text style={styles.text}> Enter Password</Text>
      <TextInput 
        style={styles.textInput}
        placeholder="Enter Password">
      </TextInput>

      <Text style={styles.text}> Enter Password</Text>
      <TextInput 
        style={styles.textInput}
        placeholder="Enter Password">
      </TextInput>

      <Mybutton
        title="Create Account"
        customClick={() => navigation.navigate('')}
      />
    </View >
  );
};

export default HomeScreen;

