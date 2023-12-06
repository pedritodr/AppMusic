import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import data from './Data';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/*  Banner */}
        <Image style={styles.banner} source={data.banner.img} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.moodWeekend.title}</Text>
          <Image style={styles.icon} source={data.moodWeekend.rightIcon} />
        </View>

        <ScrollView horizontal>
          {data.moodWeekend.images.map((image, index) => (
            <Image
              style={styles.mockWeekendImg}
              source={image.img}
              key={index}
            />
          ))}
        </ScrollView>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.topAlbums.title}</Text>
        </View>
        {data.topAlbums.images.map((image, index) => (
          <Image style={styles.topAlbunsImg} source={image.img} key={index} />
        ))}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.browseAll.title}</Text>
        </View>
        <View style={styles.browseAllContainer}>
          {data.browseAll.images.map((image, index) => (
            <Image style={styles.browseImg} source={image.img} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 200,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  titleContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2caeca',
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 5,
    borderRadius: 20,
    opacity: 0.5,
  },
  mockWeekendImg: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  topAlbunsImg: {
    width: '98%',
    height: 300,
    borderRadius: 50,
    margin: 5,
  },
  browseAllContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  browseImg: {
    borderRadius: 20,
    margin: 5,
  },
});
export default App;
