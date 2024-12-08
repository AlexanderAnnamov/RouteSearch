import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import LikeActiveIcon from '../../../assets/img/icons/like-active.svg';
import LikeStaticIcon from '../../../assets/img/icons/like.svg';
import colors from '../../../constants/styles/colors';

export const LikeIcon = () => {
  const [like, pressLike] = React.useState(false);

  return (
    <TouchableOpacity onPress={() => pressLike(!like)} style={styles.like}>
      {like ? <LikeActiveIcon /> : <LikeStaticIcon />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  like: {
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.backgroundWhite80
  }
});
