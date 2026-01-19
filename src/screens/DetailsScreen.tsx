import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Chip, Divider, Card } from 'react-native-paper';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'StoreDetails'>;

const sampleOffers = [
  '15% off today with CentreGuide',
  'Free tote with $80 spend',
];

export default function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProp>();
  const navigation = useNavigation();

  const { id, name, floor, category, distance } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.title}>
            {name}
          </Text>
          <Text variant="bodyMedium" style={styles.mutedText}>
            {category || 'Retail'} • {floor} • {distance || '5 min'}
          </Text>
          <View style={styles.tagsContainer}>
            <Chip icon="map-marker" mode="outlined">
              {floor}
            </Chip>
            <Chip icon="walk" mode="outlined">
              {distance || '5 min'}
            </Chip>
            <Chip icon="wifi" mode="outlined">
              Node boosted
            </Chip>
          </View>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            About this store
          </Text>
          <Text variant="bodyMedium" style={styles.description}>
            Curated essentials, seasonal drops, and exclusive CentreGuide deals.
            Tap navigate for turn-by-turn directions and real-time updates.
          </Text>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Live offers
          </Text>
          {sampleOffers.map((offer) => (
            <Card key={offer} style={styles.offerCard}>
              <Card.Content>
                <Text variant="bodyMedium">{offer}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>

        <Divider style={styles.divider} />

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Amenities nearby
          </Text>
          <View style={styles.tagsContainer}>
            <Chip icon="stairs">Escalator</Chip>
            <Chip icon="toilet">Restroom</Chip>
            <Chip icon="parking">Lift to parking</Chip>
          </View>
        </View>

        <View style={styles.actions}>
          <Button
            mode="contained"
            icon="navigation"
            onPress={() => console.log('Start navigation', id)}
          >
            Start navigation
          </Button>
          <Button
            mode="outlined"
            icon="playlist-plus"
            onPress={() => console.log('Add to trip plan', id)}
          >
            Add to trip planner
          </Button>
          <Button mode="text" onPress={() => navigation.goBack()}>
            Back to directory
          </Button>
        </View>
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
    paddingBottom: 32,
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 6,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    backgroundColor: '#fff',
    gap: 8,
  },
  divider: {
    marginVertical: 8,
  },
  section: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    marginBottom: 12,
    color: '#0F766E',
  },
  description: {
    lineHeight: 24,
    color: '#424242',
  },
  mutedText: {
    color: '#6B7280',
  },
  offerCard: {
    marginBottom: 12,
  },
  actions: {
    padding: 16,
    gap: 10,
  },
});
