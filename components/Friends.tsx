import React from 'react';
import { Image, Text, View } from 'react-native';
import { friendStyles, styles } from '../styles';

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
      {numberOfFriends > 5 && (
        <Text style={[friendStyles.more, styles.font]}>+</Text>
      )}
      {displayedFriends.map((friend, index) => {
        return (
          <Image
            key={`${friend}-${index}`}
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
