import * as React from 'react';
import db from './config';
import TabComponent from './components/TabComponent';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [note, setNote] = React.useState();
  const [noteArr, setNoteArr] = React.useState([]);

  const inputButtonPress = () => {
    if(note.length === 0)return;
    const tasks = db.ref('tasks');
    let date = new Date();
    const obj = {
      date:
        date.getDate() +
        '/' +
        month[date.getMonth() - 1] +
        '/' +
        date.getFullYear(),
      note: note,
    };
    tasks.push(obj);
    updateNotesArr();
    setNote('');
  };

  const updateNotesArr = () => {
    const tasks = db.ref('tasks');
    tasks.on('value', (data) => {
      let newNoteArr = data.val();
      let todos = [];

      for (var id in newNoteArr) {
        todos.push({ id, ...newNoteArr[id] });
      }

      setNoteArr(todos);
    });
  };

  const textChange = (data) => {
    setNote(data);
  };

  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const deleteNote = (index) => {
    const tasks = db.ref('tasks');
    const node = tasks.child(noteArr[index].id);
    node.remove();
    updateNotesArr();
  }

  React.useEffect(() => {updateNotesArr()},[])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>KeepIt</Text>
      </View>
      <ScrollView>
        <View style={{ position: 'relative' }}>
          {noteArr.map((item, index) => {
            return (
              <TabComponent
                items={item}
                index={index}
                key={index}
                deleteNote={() => deleteNote(index)}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter the task.."
          value={note}
          onChangeText={textChange}
        />
        <TouchableOpacity style={styles.inputButton} onPress={inputButtonPress}>
          <Text style={styles.inputButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  header: {
    position: 'relative',
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 3,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'gold',
    height: 70,
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
  headerText: {
    fontSize: 25,
    color: 'black',
  },
  inputView: {
    borderTopColor: 'gold',
    borderTopWidth: 2,
    backgroundColor: 'white',
    position: 'relative',
    flexDirection: 'row',
    bottom: 0,
    right: 0,
    left: 0,
  },
  inputBox: {
    height: '100%',
    width: '100%',
    outline:'none',
    // borderColor: 'red',
    // borderWidth: 1,
    flex: 8,
    padding: 20,
  },
  inputButton: {
    flex: 2,
    // borderColor: 'black',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputButtonText: {
    backgroundColor: 'gold',
    height: 40,
    width: 40,
    borderRadius: 20,
    fontSize: 28,
    paddingLeft: 12,
  },
});
