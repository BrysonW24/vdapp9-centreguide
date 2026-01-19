import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const popularStops = [
  { id: 'uniqlo', name: 'Uniqlo', floor: 'Level 1', distance: '4 min' },
  { id: 'david-jones', name: 'David Jones', floor: 'Level 2', distance: '7 min' },
  { id: 'food-court', name: 'Food Court', floor: 'Level 2', distance: '6 min' },
];

const nearbyOffers = [
  { id: 'offer-1', title: '20% off at Sneaker Vault', detail: 'Ends in 3 hours' },
  { id: 'offer-2', title: 'Lunch combo at Urban Bowl', detail: 'Level 2, Food Court' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          CentreGuide
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge">You are at North Entrance</Text>
            <Text variant="bodyMedium" style={styles.mutedText}>
              Wi-Fi positioning locked • Accuracy within 4m
            </Text>
            <View style={styles.chipRow}>
              <Chip icon="map-marker">Level 1</Chip>
              <Chip icon="elevator">Lift nearby</Chip>
              <Chip icon="wifi">Node online</Chip>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Find your next stop</Text>
            <TextInput
              placeholder="Search stores, bathrooms, exits..."
              mode="outlined"
              style={styles.searchInput}
              left={<TextInput.Icon icon="magnify" />}
              onFocus={() => navigation.navigate('Directory')}
            />
            <View style={styles.actionRow}>
              <Button
                mode="contained"
                icon="map-search"
                onPress={() =>
                  navigation.navigate('Main', { screen: 'Map' })
                }
              >
                Open Map
              </Button>
              <Button
                mode="outlined"
                icon="store-search"
                onPress={() => navigation.navigate('Directory')}
              >
                Browse Stores
              </Button>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Popular right now</Text>
            {popularStops.map((stop) => (
              <View key={stop.id} style={styles.listRow}>
                <View>
                  <Text variant="bodyLarge">{stop.name}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    {stop.floor} • {stop.distance}
                  </Text>
                </View>
                <Button
                  mode="text"
                  onPress={() =>
                    navigation.navigate('StoreDetails', {
                      id: stop.id,
                      name: stop.name,
                      floor: stop.floor,
                      distance: stop.distance,
                    })
                  }
                >
                  Navigate
                </Button>
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Top offers near you</Text>
            {nearbyOffers.map((offer) => (
              <View key={offer.id} style={styles.offerRow}>
                <Text variant="bodyLarge">{offer.title}</Text>
                <Text variant="bodySmall" style={styles.mutedText}>
                  {offer.detail}
                </Text>
              </View>
            ))}
            <Button
              mode="contained"
              icon="tag"
              onPress={() => navigation.navigate('Main', { screen: 'Offers' })}
              style={styles.offerButton}
            >
              See all offers
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
    fontWeight: '700',
  },
  card: {
    marginBottom: 16,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  searchInput: {
    marginTop: 12,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 12,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  offerRow: {
    paddingVertical: 8,
  },
  offerButton: {
    marginTop: 12,
  },
  mutedText: {
    color: '#6B7280',
  },
});
