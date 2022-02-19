/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import backImg from './assets/images/background.jpg';
import backImg2 from './assets/images/background2.jpg';
import logo from './assets/images/logo.png';
import add from './assets/images/add.png';
import delet from './assets/images/delete.png';
import editimg from './assets/images/edit.png';

import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

const styles = StyleSheet.create({
  div: {
    // justifyContent: 'center',
    backgroundColor: '#ffebcd',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  heading: {
    fontSize: 32,
    // fontWeight: 20,
    marginTop: 10,
    textAlign: 'center',
    color: '#ffa07a',
  },
  inpText: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffa07a',
    color: '#fff',
    marginTop: 10,
    fontSize: 20,
    borderRadius: 8,
    marginHorizontal: 'auto',
  },
  btn_div: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  addBtn: {
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#ffa07a',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 15,
  },
  listBox: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffa07a',
    // width: '100%',
    marginBottom: 20,
    // marginLeft: 10,
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 16,
  },
  list: {
    fontSize: 30,
    padding: 15,
    color: '#fff',
  },
  btn: {
    padding: 15,
    color: '#ffa07a',
    backgroundColor: '#ffa07a',
    borderRadius: 20,
  },
});
// const deviceWidth = Dimensions.get('window').width;

const App = () => {
  const [text, settext] = useState('');
  const [todo, settodo] = useState([]);
  const [editTodo, seteditTodo] = useState(false);
  const [index, setIndex] = useState();

  const addtodo = () => {
    if (editTodo) {
      todo[index] = text;
      settodo([...todo]);
      seteditTodo(false);
    } else {
      settodo([...todo, text]);
      settext(' ');
    }
  };

  const deleteAll = () => {
    settodo([]);
  };
  const deleteItem = id => {
    // console.log(id);
    const list = todo.filter((ele, ind) => {
      return ind !== id;
    });
    settodo(list);
  };

  const edit = id => {
    // console.log(id);
    settext(todo[id]);
    seteditTodo(true);
    setIndex(id);
  };
  return (
    <>
      <ImageBackground>
        <View style={styles.div}>
          <View style={styles.header}>
            <Image source={logo} style={{width: 50, height: 50}} />
            <Text style={styles.heading}>TODO APP</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
              value={text}
              style={styles.inpText}
              placeholder="enter todo...."
              onChangeText={e => settext(e)}
            />
          </View>
          <View style={styles.btn_div}>
            <TouchableOpacity onPress={addtodo}>
              <Text style={styles.addBtn}>
                <Image source={add} style={{width: 20, height: 20}} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteAll}>
              <Text style={styles.addBtn}>
                <Image source={delet} style={{width: 20, height: 20}} />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listBox}>
            <ScrollView>
              {todo.map((note, ind) => (
                <>
                  <View style={styles.todos}>
                    <View key={ind}>
                      <Text style={styles.list}>{note}</Text>
                    </View>
                    <View style={styles.btn_div}>
                      <TouchableOpacity onPress={() => edit(ind)}>
                        <Text style={styles.btn}>
                          <Image
                            source={editimg}
                            style={{width: 20, height: 20}}
                          />
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => deleteItem(ind)}>
                        <Text style={styles.btn}>
                          <Image
                            source={delet}
                            style={{width: 20, height: 20, color: 'white'}}
                          />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              ))}
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default App;
