import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR } from './colors';

export const isBetween = (num, x, y) => {
  return num >= x && num <= y;
};

export const calculateDirection = heading => {
  let direction = '';

  if (isBetween(heading, 0, 22.5)) {
    direction = 'North';
  } else if (isBetween(heading, 22.5, 67.5)) {
    direction = 'North East';
  } else if (isBetween(heading, 67.5, 112.5)) {
    direction = 'East';
  } else if (isBetween(heading, 112.5, 157.5)) {
    direction = 'South East';
  } else if (isBetween(heading, 157.5, 202.5)) {
    direction = 'South';
  } else if (isBetween(heading, 202.5, 247.5)) {
    direction = 'South West';
  } else if (isBetween(heading, 247.5, 292.5)) {
    direction = 'West';
  } else if (isBetween(heading, 292.5, 337.5)) {
    direction = 'North West';
  } else if (isBetween(heading, 337.5, 360)) {
    direction = 'North';
  } else {
    direction = 'Calculating';
  }

  return direction;
};

export const timeToString = (time = Date.now()) => {
  const date = new Date(time);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  return todayUTC.toISOString().split('T')[0];
};

export const MetricType = {
  STEPPERS: 'steppers',
  SLIDER: 'slider'
};

export const Units = {
  MILES: 'miles',
  METER: 'meter',
  HOURS: 'hours',
  RATING: 'rating'
};

const iconsStyles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  }
});

export const getMetricsMetaInfo = metric => {
  const info = {
    run: {
      displayName: 'Run',
      max: 50,
      unit: Units.MILES,
      step: 1,
      type: MetricType.STEPPERS,
      getIcon: () => (
        <View style={[iconsStyles.iconContainer, { backgroundColor: COLOR.red }]}>
          <MaterialIcons name="directions-run" color={COLOR.white} size={35} />
        </View>
      )
    },
    bike: {
      displayName: 'Bike',
      max: 100,
      unit: Units.MILES,
      step: 1,
      type: MetricType.STEPPERS,
      getIcon: () => (
        <View style={[iconsStyles.iconContainer, { backgroundColor: COLOR.orange }]}>
          <MaterialCommunityIcons name="bike" color={COLOR.white} size={35} />
        </View>
      )
    },
    swim: {
      displayName: 'Swim',
      max: 9900,
      unit: Units.METER,
      step: 100,
      type: MetricType.STEPPERS,
      getIcon: () => (
        <View style={[iconsStyles.iconContainer, { backgroundColor: COLOR.blue }]}>
          <MaterialCommunityIcons name="swim" color={COLOR.white} size={35} />
        </View>
      )
    },
    sleep: {
      displayName: 'Sleep',
      max: 24,
      unit: Units.HOURS,
      step: 1,
      type: MetricType.SLIDER,
      getIcon: () => (
        <View style={[iconsStyles.iconContainer, { backgroundColor: COLOR.purple }]}>
          <FontAwesome name="bed" color={COLOR.white} size={35} />
        </View>
      )
    },
    eat: {
      displayName: 'Eat',
      max: 10,
      unit: Units.RATING,
      step: 1,
      type: MetricType.SLIDER,
      getIcon: () => (
        <View style={[iconsStyles.iconContainer, { backgroundColor: COLOR.pink }]}>
          <MaterialCommunityIcons name="food" color={COLOR.white} size={35} />
        </View>
      )
    }
  };
  return metric ? info[metric] : info;
};

export const getDailyRemainderValue = () => ({
  today: "👋 Don't forget to log your data today!"
});
