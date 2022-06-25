import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const PhotoDetail = ({title, imageUrl}) => {
  const styles = StyleSheet.create({
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    headerTextStyle: {
      fontSize: 18,
    },
    thumbnailStyle: {
      height: 50,
      width: 50,
      borderRadius: 50,
      borderWidth: 1.5,
      borderColor: '#007aff',
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    imageStyle: {
      height: 200,
      flex: 1,
      width: null,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#007aff',

    },
    viewBorder: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 20,
      width: '50%',
      margin: 5,
    }
  });

  return (
    <View style={styles.viewBorder}>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{uri: imageUrl}} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image resizeMode='stretch' style={styles.imageStyle} source={{uri: imageUrl}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(imageUrl)}>See Now!</Button>
      </CardSection>
    </View>
  );
};



export default PhotoDetail;
