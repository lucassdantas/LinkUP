import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { BottomMenu } from '../../components/bottomMenu';

export const Feed = () => {
  const [posts, setPosts] = useState([
    { id: '1', username: 'user1', text: 'Post 1' },
    { id: '2', username: 'user2', text: 'Post 2' },
    { id: '3', username: 'user3', text: 'Post 3' },
    // Adicione mais posts conforme necessário
  ]);

  const renderPost = ({ item }:any) => {
    return (
      <View style={styles.postContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
      />
      {/* <BottomMenu/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

