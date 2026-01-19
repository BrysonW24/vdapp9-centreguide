import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Searchbar, Card, Button, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const STORES = [
  {
    id: 'uniqlo',
    name: 'Uniqlo',
    category: 'Fashion',
    floor: 'Level 1',
    distance: '4 min',
  },
  {
    id: 'apple',
    name: 'Apple Store',
    category: 'Tech',
    floor: 'Level 2',
    distance: '6 min',
  },
  {
    id: 'lush',
    name: 'Lush',
    category: 'Beauty',
    floor: 'Level 1',
    distance: '3 min',
  },
  {
    id: 'target',
    name: 'Target',
    category: 'Department',
    floor: 'Level 3',
    distance: '8 min',
  },
];

export default function SearchScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = STORES.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayData = searchQuery ? filteredData : STORES;

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search stores, services, categories..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      <FlatList
        data={displayData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          searchQuery === '' ? (
            <View style={styles.header}>
              <Text variant="titleLarge">Store Directory</Text>
              <Text variant="bodyMedium" style={styles.emptyText}>
                Search by name, category, or intent
              </Text>
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{item.name}</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                {item.category} • {item.floor} • {item.distance}
              </Text>
              <View style={styles.tagRow}>
                <Chip icon="map-marker" compact>
                  {item.floor}
                </Chip>
                <Chip icon="walk" compact>
                  {item.distance}
                </Chip>
              </View>
              <Button
                mode="contained"
                onPress={() =>
                  navigation.navigate('StoreDetails', {
                    id: item.id,
                    name: item.name,
                    floor: item.floor,
                    category: item.category,
                    distance: item.distance,
                  })
                }
              >
                Navigate
              </Button>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text variant="titleLarge">No Results</Text>
            <Text variant="bodyMedium">
              No items match your search query
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchbar: {
    margin: 16,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
  header: {
    marginBottom: 12,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 12,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    marginTop: 8,
    textAlign: 'center',
  },
});
