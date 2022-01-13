import React from "react";
import {
  View,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import { calendarData } from "../calendarData";

const UserCalendar = ({ navigation }) => {
  const headliner = (performances) => {
    return performances[0].displayName;
  };

  const formatEventDate = (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const renderEventItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.eventItem}
        onPress={() =>
          navigation.navigate("Event", {
            event: item,
          })
        }
      >
        <Image
          style={styles.image}
          source={require("../img/music-icon-band.jpeg")}
        />
        <View style={styles.eventWrapper}>
          <Text style={styles.eventTitle}>{headliner(item.performance)}</Text>
          <Text style={styles.eventDate}>
            {formatEventDate(item.start.date)}
          </Text>
          <Text style={styles.eventVenue}>{item.venue.displayName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({ section: { title } }) => {
    return <Text style={styles.header}>{title}</Text>;
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={calendarData}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
    backgroundColor: "white",
    paddingVertical: 8,
  },
  eventItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 12,
    backgroundColor: "#E4E5E7",
    marginVertical: 4,
    borderRadius: 12,
  },
  image: {
    height: 54,
    width: 54,
    marginRight: 12,
  },
  eventWrapper: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "black",
  },
  eventDate: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
  },
  eventVenue: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
  },
});

export default UserCalendar;
