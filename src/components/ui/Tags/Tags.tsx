import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../../../constants/styles/colors';

interface TagsProps {
  tags: string[];
}

export const Tags = (props: TagsProps) => (
  <View style={styles.container}>
    {props.tags.map((tag, index) => (
      <Text key={index} style={styles.tag}>
        {tag}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  tag: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
    color: colors.textTertirary
  }
});
