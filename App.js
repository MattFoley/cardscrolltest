/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import SideSwipe from 'react-native-sideswipe';
import SnapCarousel from 'react-native-snap-carousel';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
const ITEM_WIDTH = 140;
const DATA = [
  {
    title: 'Practice',
    data: ['Pizza', 'Burger', 'Risotto', 'French Fries', 'Onion Rings', 'Fried Shrimps', "bacon"],
  },
  {
    title: 'Head 2 Head',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps', "bacon", 'French Fries', 'Onion Rings', 'Fried Shrimps', "bacon"],
  },
  {
    title: 'Live Events',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps', "bacon", 'French Fries', 'Onion Rings', 'Fried Shrimps', "bacon"],
  },
  {
    title: 'Brackets',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps', "bacon", 'French Fries', 'Onion Rings', 'Fried Shrimps', "bacon"],
  },
  {
    title: 'Friends',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps', "bacon", 'French Fries', 'Onion Rings', 'Fried Shrimps', "bacon"],
  },
  {
    title: 'Offline',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps', "bacon", 'French Fries', 'Onion Rings', 'Fried Shrimps', "bacon"],
  },
];

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentIndex: 0,
    };
  }
  renderSubItem(item) {
    console.log('subitem: ' + JSON.stringify(item));
    return (
      <View style={styles.subitem}>
        <Text style={styles.title}>{item.item}</Text>
      </View>
    );
  }

  renderTestCarousel(row) {
    const {width} = Dimensions.get('window');
    const contentOffset = (width - ITEM_WIDTH) / 2;
    switch (row.index % 6) {
      case 0: {
        return (
          <FlatList
            data={row.item.data}
            horizontal={true}
            keyExtractor={(item, index) => item + index}
            renderItem={this.renderSubItem.bind(this)}
          />
        );
      }
      case 1: {
        return (
          <FlatList
            data={row.item.data}
            horizontal={true}
            keyExtractor={(item, index) => item + index}
            renderItem={this.renderSubItem.bind(this)}
            snapToInterval={(ITEM_WIDTH + 16)}
            snapToAlignment={'start'}
            decelerationRate={0.2}
          />
        );
      }
      case 2: {
        return (
          <FlatList
            data={row.item.data}
            horizontal={true}
            keyExtractor={(item, index) => item + index}
            renderItem={this.renderSubItem.bind(this)}
            snapToInterval={(ITEM_WIDTH + 16)}
            snapToAlignment={'start'}
            decelerationRate={0.5}
          />
        );
      }
      case 3: {
        return (
          <FlatList
            data={row.item.data}
            horizontal={true}
            keyExtractor={(item, index) => item + index}
            renderItem={this.renderSubItem.bind(this)}
            snapToInterval={(ITEM_WIDTH + 16) * 2}
            snapToAlignment={'center'}
            decelerationRate={0.5}
          />
        );
      }
      case 4: {
        return (
          <FlatList
            data={row.item.data}
            horizontal={true}
            keyExtractor={(item, index) => item + index}
            renderItem={this.renderSubItem.bind(this)}
            snapToInterval={(ITEM_WIDTH + 16) * 2}
            snapToAlignment={'end'}
            decelerationRate={0.5}
          />
        );
      }
      case 5: {
        return (
          <FlatList
            data={row.item.data}
            horizontal={true}
            keyExtractor={(item, index) => item + index}
            renderItem={this.renderSubItem.bind(this)}
            snapToInterval={(ITEM_WIDTH + 16) * 2}
            snapToAlignment={'start'}
            decelerationRate={0.5}
          />
        );
      }
    }
  }

  renderItem(row) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{row.item.title}</Text>
        {this.renderTestCarousel(row)}
      </View>
    );
  }

  renderSectionHeader(data) {
    console.log(JSON.stringify(data.section));
    return <Text style={styles.header}>{data.section.title}</Text>;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}/>
        <FlatList
          data={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={this.renderItem.bind(this)}
        />
        <View style={styles.footer}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: 60,
    backgroundColor:'darkgray',
  },
  footer: {
    height: 20,
    backgroundColor:'darkgray',
  },
  subitem: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    margin: 8,
    height: 170,
    width: ITEM_WIDTH,
  },
  item: {
    backgroundColor: 'gray',
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});
