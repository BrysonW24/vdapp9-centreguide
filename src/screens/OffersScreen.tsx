import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Chip, Button } from 'react-native-paper';

const offers = [
  {
    id: 'offer-1',
    title: '20% off sneakers',
    store: 'Sneaker Vault',
    distance: '2 min',
    expires: 'Today, 5:00 PM',
  },
  {
    id: 'offer-2',
    title: 'Free drink with lunch',
    store: 'Urban Bowl',
    distance: '3 min',
    expires: 'Today, 2:00 PM',
  },
  {
    id: 'offer-3',
    title: 'Buy 1 get 1 accessories',
    store: 'Lush',
    distance: '4 min',
    expires: 'This weekend',
  },
];

export default function OffersScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Offers Near You
        </Text>

        <View style={styles.filterRow}>
          <Chip icon="target" selected>
            Near me
          </Chip>
          <Chip icon="sale">Fashion</Chip>
          <Chip icon="food">Food</Chip>
          <Chip icon="gift">Gifts</Chip>
        </View>

        {offers.map((offer) => (
          <Card key={offer.id} style={styles.card}>
            <Card.Content>
              <Text variant="titleMedium">{offer.title}</Text>
              <Text variant="bodySmall" style={styles.mutedText}>
                {offer.store} • {offer.distance}
              </Text>
              <View style={styles.chipRow}>
                <Chip icon="clock-outline" compact>
                  {offer.expires}
                </Chip>
              </View>
              <Button mode="contained" icon="navigation">
                Navigate
              </Button>
            </Card.Content>
          </Card>
        ))}
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
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
  chipRow: {
    flexDirection: 'row',
    marginVertical: 12,
  },
});
