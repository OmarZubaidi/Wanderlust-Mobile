import React from 'react';
import { Image, Text, View } from 'react-native';
import { friendStyles } from '../styles';

interface IProps {
  friends: string[];
  size: number;
}

function Friends({ friends, size }: IProps) {
  const numberOfFriends = friends.length;
  let displayedFriends = friends;
  if (numberOfFriends > 5) displayedFriends = friends.slice(0, 5);

  return (
    <View
      style={[
        friendStyles.friends,
        {
          width: (size - 5) * Math.min(numberOfFriends, 5),
        },
      ]}
    >
      {numberOfFriends > 5 && <Text style={[friendStyles.more]}>+</Text>}
      {/* Update key later depending on downloaded data */}
      {displayedFriends.map((friend, index) => {
        return (
          <Image
            key={index}
            source={{ uri: friend }}
            style={[
              friendStyles.photo,
              {
                width: size,
                height: size,
                right: index * (size / 2.5),
              },
            ]}
          />
        );
      })}
    </View>
  );
}

export default Friends;
