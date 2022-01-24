import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { useLikes } from "../contexts/likedContext";

export const EventDetails = ({ event, eventLike, onEventLike }) => {
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
      <View style={styles.heroImageContainer}>
        <Image
          style={styles.heroImage}
          source={require("../img/gig-image.jpeg")}
        />
        <TouchableOpacity onPress={onEventLike}>
          <Image
            testID={"like-button-" + eventLike ? "selected" : "unselected"}
            style={styles.likeImage}
            source={
              eventLike
                ? require("../img/thumbs-up-selected.png")
                : require("../img/thumbs-up-unselected.png")
            }
          />
        </TouchableOpacity>
      </View>
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

export default function ConnectedEventDetails({ route }) {
  const [eventLike, setEventLike] = useState();
  const likes = useLikes();

  const event = route.params.event;

  useEffect(() => {
    (async () => {
      try {
        setEventLike(likes.ids.includes(event.id));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleEventLike = async () => {
    if (likes.ids.includes(event.id)) {
      likes.deleteId(event.id);
      setEventLike(false);
    } else {
      likes.addId(event.id);
      setEventLike(true);
    }
  };

  return (
    <EventDetails
      event={event}
      eventLike={eventLike}
      onEventLike={handleEventLike}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
  },
  heroImageContainer: {
    width: "100%",
    height: 250,
  },
  heroImage: {
    width: "100%",
    height: "100%",
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
  likeImage: {
    position: "absolute",
    bottom: 12,
    right: 12,
  },
});
