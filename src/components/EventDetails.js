import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const EventDetails = ({ route }) => {
  const event = route.params.event;

  const eventTitle = (eventData) => {
    return `${eventData.performance[0].displayName} at ${eventData.venue.displayName}`;
  };

  const formatEventDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <View style={styles.screen}>
      <Image
        style={styles.heroImage}
        source={require("../img/gig-image.jpeg")}
      />
      <Text style={styles.title}>{eventTitle(event)}</Text>
      <Text style={styles.date}>{formatEventDate(event.start.date)}</Text>
      <View style={styles.lineUpContainer}>
        <Text style={styles.lineUpTitle}>Line Up</Text>
        {event.performance.map((artist) => {
          return (
            <Text key={artist.id} style={styles.artistName}>
              {artist.displayName}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
  },
  heroImage: {
    width: "100%",
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
    marginVertical: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: "400",
    color: "black",
    marginBottom: 12,
  },
  lineUpContainer: {
    flexDirection: "column",
  },
  lineUpTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    marginBottom: 6,
  },
  artistName: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
  },
});

export default EventDetails;
