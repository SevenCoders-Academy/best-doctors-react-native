import React from 'react';
import { List } from './styles';
import { CATEGORIES_MOCK } from './settings';
import { CategoryCard } from '~/components/molecules';
import { useNavigation } from '@react-navigation/native';

export const CategoriesList = () => {
  const navigation = useNavigation();

  const onSelectCategory = item => {
    navigation.navigate('CategoryDetail', {
      title: item.title,
    });
  };

  return (
    <List
      numColumns={2}
      data={CATEGORIES_MOCK}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CategoryCard
          onPress={() => onSelectCategory(item)}
          title={item.title}
          image={item.image}
        />
      )}
    />
  );
};
