import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function TabComponent(props) {
  return (
    <View style={styles.container} key={props.index}>
      <Text style={[styles.containerText, { fontWeight: 'bold' }]}>
        {props.items.note}
      </Text>
      <Text style={styles.containerText}>{props.items.date}</Text>
      <TouchableOpacity style={styles.doneButton} onPress={props.deleteNote}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderColor: 'blue',
    // borderWidth: 2,
    paddingRight: 70,
    paddingTop: 10,
    position: 'relative',
    paddingBottom: 20,
    justifyContent: 'center',
    borderBottomColor:"#d6d6d6",
    borderBottomWidth:3,
  },
  containerText: {
    fontSize: 15,
    borderLeftColor: '#d6d6d6',
    borderLeftWidth: 7,
    paddingLeft: 20,
    marginLeft: 10,
  },
  doneButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonText: {
    backgroundColor: 'grey',
    padding: 5,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    marginRight: 10,
  },
});

