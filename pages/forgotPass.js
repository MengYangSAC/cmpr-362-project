// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import myInput from './componets/Mytextinput';
import myButton from './components/Mybutton';

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase( {name: 'UserDatabase.db'} )

const FogotPassword = ( {navigation} ) =>
{
    let [userName, setUsername] = useState('');
}

let find_Password = () =>
{
    console.log('Please enter a name: ', userName);

    if (!userName)
    {
        alert('put a userName');
        return;
    }

    db.transaction(function (tx)
    {
        tx.executeSql
        (
            'select * from userInfo where userName equals ?',
            [userName],
            (tx, results) =>
            {
                console.log('Results', results.rowAffected);
                if (results.rowAffeccted > 0)
                {
                    Alert.alert
                    (
                        'Your passWord is ?',[results],
                        [
                            {
                                text: 'ok'
                                onPress: () => navigation.navigate('HomeScreen'),
                            },
                        ],
                         { cancelale:false }
                    );
                }else alert('Username not found');

            },
        );
    });
};

export default forgotPass;