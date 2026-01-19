import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';

const checklist = [
  { id: 'shoes', label: 'Running shoes', store: 'Sneaker Vault' },
  { id: 'gift', label: 'Birthday card', store: 'Paper Lane' },
  { id: 'groceries', label: 'Groceries', store: 'Fresh Market' },
];

export default function TripPlannerScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Trip Planner
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Your mission list</Text>
            {checklist.map((item) => (
              <View key={item.id} style={styles.listRow}>
                <View>
                  <Text variant="bodyLarge">{item.label}</Text>
                  <Text variant="bodySmall" style={styles.mutedText}>
                    Suggested stop: {item.store}
                  </Text>
                </View>
                <Chip icon="check-circle-outline">Ready</Chip>
              </View>
            ))}
            <Button mode="outlined" icon="plus">
              Add another stop
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Optimised route</Text>
            <Text variant="bodyMedium" style={styles.mutedText}>
              3 stops • 14 min walk • Ends near Parking Lift A
            </Text>
            <View style={styles.chipRow}>
              <Chip icon="map-marker">Level 1</Chip>
              <Chip icon="stairs">Level 2</Chip>
              <Chip icon="walk">Accessible route</Chip>
            </View>
            <Button mode="contained" icon="navigation">
              Start route
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
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  mutedText: {
    color: '#6B7280',
    marginTop: 4,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 12,
  },
});
