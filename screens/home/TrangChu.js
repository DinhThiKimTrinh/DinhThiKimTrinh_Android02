import Header from '../home/Header.js';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, Text, TouchableOpacity, ScrollView,TouchableHighlight } from 'react-native';
import { GET_ALL, GET_IMG } from '../api/apiservice.js';
import ItemHome from './ItemHome.js';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';


// 
// const product = [
//   { id: '1', name: 'Trà cam', source: require('../../assets/images/hinh1.jpg') },
//   { id: '2', name: 'Trà sữa trái cây', source: require('../../assets/images/hinh2.jpg') },
//   { id: '3', name: 'Trà sữa chân châu đường đen', source: require('../../assets/images/hinh3.jpg') },
//   { id: '4', name: 'Trà sữa chân châu', source: require('../../assets/images/hinh4.jpg') },
//   { id: '5', name: 'Trà sữa kem dâu', source: require('../../assets/images/hinh5.jpg') },
//   { id: '6', name: 'Hồng trà', source: require('../../assets/images/hinh6.jpg') },
// ];

export default function TrangChu({ route,navigation }) {
  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [filteredCoffeeData, setFilteredCoffeeData] = useState([]);

  useEffect(() => {
    GET_ALL('products')
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setCoffeeData(responseData.content);
          setFilteredCoffeeData(responseData.content); // Initialize filtered data with all items
        } else {
          console.error('Data received from the API is not in a supported format.');
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  }, []);
  // const renderItem = ({ item }) => (
  //   <TouchableOpacity
  //     onPress={() => navigation.navigate('Chitiet', { item })}
  //     style={styles.itemContainer}
  //   >
  //     <Image source={item.source} style={styles.image} />
  //     <Text style={styles.itemText}>{item.name}</Text>
  //   </TouchableOpacity>
  // );
  const navigateToScreenDetail = (coffee) => {
    if (coffee) {
      const updatedCoffee = { ...coffee, total: coffee.price };
      navigation.navigate('Chitiet', {
        coffee: updatedCoffee,
      });
    }
  };

  return (
    <View style={styles.trangchu}>
      <Header />
      <Image
        style={styles.banner}
        source={require('../../assets/images/slider.png')}
      />
      <Text style={styles.title}>Sản phẩm</Text>
      < ScrollView>
      <View style={styles.content}>
            {isLoading ? (
              <Text>Loading</Text>
            ) : (
              coffeeData.map((coffee, index) => (
                <TouchableHighlight
                  key={coffee.id}
                  style={{ marginBottom: 20, borderRadius: 15 }}
                  activeOpacity={0.0}
                  underlayColor="#FFF"
                  onPress={() => navigateToScreenDetail(coffee)}
                >
                  <ItemHome
                    key={index}
                    imageSource={GET_IMG('products', coffee.photo)}
                    textContent={coffee.title}
                    textPrice={coffee.price}
                  />
                </TouchableHighlight>
              ))
            )}
          </View>
      </ScrollView>
      {/* <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      /> */}

    </View>
  );
}
const styles = StyleSheet.create({
  trangchu: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  content:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  banner: {
    width: 380,
    height: 200,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 10,
  },
  icon: {
    marginRight: 20,
  },
});
