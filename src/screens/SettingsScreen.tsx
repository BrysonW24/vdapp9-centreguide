import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, List, Switch, Divider, Button } from 'react-native-paper';

export default function SettingsScreen() {
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [offersEnabled, setOffersEnabled] = useState(true);
  const [quietModeEnabled, setQuietModeEnabled] = useState(false);
  const [accessibleRoutes, setAccessibleRoutes] = useState(true);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          Settings
        </Text>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Location & Navigation
          </Text>
          <List.Item
            title="Indoor positioning"
            description="Improve accuracy with Wi-Fi nodes"
            left={(props) => <List.Icon {...props} icon="wifi" />}
            right={() => (
              <Switch
                value={locationEnabled}
                onValueChange={setLocationEnabled}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Accessible routes"
            description="Prioritise lifts and ramps"
            left={(props) => (
              <List.Icon {...props} icon="wheelchair-accessibility" />
            )}
            right={() => (
              <Switch
                value={accessibleRoutes}
                onValueChange={setAccessibleRoutes}
              />
            )}
          />
          <Divider />
        </View>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Notifications
          </Text>
          <List.Item
            title="Nearby offers"
            description="Get alerts when offers are close"
            left={(props) => <List.Icon {...props} icon="tag" />}
            right={() => (
              <Switch value={offersEnabled} onValueChange={setOffersEnabled} />
            )}
          />
          <Divider />
          <List.Item
            title="Quiet mode"
            description="Mute notifications while in the centre"
            left={(props) => <List.Icon {...props} icon="bell-off" />}
            right={() => (
              <Switch
                value={quietModeEnabled}
                onValueChange={setQuietModeEnabled}
              />
            )}
          />
          <Divider />
        </View>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            Privacy
          </Text>
          <List.Item
            title="Usage analytics"
            description="Share anonymous footfall data"
            left={(props) => <List.Icon {...props} icon="chart-line" />}
            right={() => (
              <Switch
                value={analyticsEnabled}
                onValueChange={setAnalyticsEnabled}
              />
            )}
          />
          <Divider />
        </View>

        <View style={styles.section}>
          <Text variant="titleMedium" style={styles.sectionTitle}>
            About
          </Text>
          <List.Item
            title="Version"
            description="1.0.0"
            left={(props) => <List.Icon {...props} icon="information" />}
          />
          <Divider />
          <List.Item
            title="Terms of Service"
            left={(props) => <List.Icon {...props} icon="file-document" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Terms of Service')}
          />
          <Divider />
          <List.Item
            title="Privacy Policy"
            left={(props) => <List.Icon {...props} icon="file-document" />}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
            onPress={() => console.log('Privacy Policy')}
          />
          <Divider />
        </View>

        <Button mode="contained" icon="help-circle-outline">
          Contact centre support
        </Button>
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
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#0F766E',
  },
});
