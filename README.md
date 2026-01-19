# CentreGuide

Indoor navigation and live offers for shopping centres, powered by entry + in-centre Wi-Fi positioning nodes.

## Highlights

- Pin-accurate indoor wayfinding with step-by-step guidance
- Store directory with rich details and navigation CTA
- Offers near you with opt-in notifications
- Trip planner that optimizes multi-stop routes

## MVP Screens

1. Home (arrival, search, popular stops)
2. Map (indoor navigation preview)
3. Offers (nearby deals)
4. Trip Planner (multi-stop routing)
5. Settings (privacy + notifications)

## Quick Start

```bash
cd vdapp9-centreguide
npm install
npm run ios
```

## Project Structure

```
vdapp9-centreguide/
├── App.tsx
├── app.json
├── src/
│   ├── navigation/
│   ├── screens/
│   ├── store/
│   └── theme/
```

## Notes

- Indoor positioning is mocked in the UI for now.
- Replace placeholder data in `src/screens` with real store + offer feeds.
