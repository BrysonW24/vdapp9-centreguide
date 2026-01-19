import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';

const steps = [
  'Walk past Zara and keep right',
  'Take escalator to Level 2',
  'Turn left at Tech Hub',
  'Destination on the right',
];

export default function MapScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Indoor Navigation
        </Text>

        <View style={styles.mapPlaceholder}>
          <Text variant="titleMedium">Live map preview</Text>
          <Text variant="bodySmall" style={styles.mutedText}>
            Blue dot anchored by Wi-Fi nodes
          </Text>
        </View>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Route overview</Text>
            <View style={styles.chipRow}>
              <Chip icon="map-marker">North Entrance</Chip>
              <Chip icon="walk">6 min walk</Chip>
              <Chip icon="stairs">Level 2</Chip>
            </View>
            <Text variant="bodyMedium" style={styles.sectionText}>
              Destination: Apple Store
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium">Step-by-step</Text>
            {steps.map((step, index) => (
              <View key={step} style={styles.stepRow}>
                <Text variant="labelLarge" style={styles.stepIndex}>
                  {index + 1}
                </Text>
                <Text variant="bodyMedium" style={styles.stepText}>
                  {step}
                </Text>
              </View>
            ))}
            <Button mode="contained" icon="navigation" style={styles.actionButton}>
              Start guidance
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
  mapPlaceholder: {
    height: 220,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 12,
  },
  sectionText: {
    color: '#6B7280',
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 6,
  },
  stepIndex: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0F766E',
    color: '#fff',
    textAlign: 'center',
    marginRight: 10,
    paddingTop: 2,
  },
  stepText: {
    flex: 1,
  },
  actionButton: {
    marginTop: 16,
  },
  mutedText: {
    color: '#6B7280',
  },
});
