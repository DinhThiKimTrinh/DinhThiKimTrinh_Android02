import { View, Text, Image, StyleSheet, SafeAreaView,TouchableOpacity } from "react-native";


function ItemHome ({imageSource,textContent, textPrice})  {
  
  return (
    <SafeAreaView style={{
   
    }}>
      <View style={styles.menuItem}>
        <Image
          style={styles.menuImage}
          resizeMode="contain"
          source={{
            uri: imageSource
          }}
        />
        <Text style={styles.menuTitle}>{textContent}</Text>
        <Text style={styles.menuPrice}>{textPrice}.000đ</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  // Define your styles here
  menuItem: {
    marginBottom: 0,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#EEEEEE",
    overflow: "hidden",
    marginLeft:1,
    
  },
  menuImage: {
    width: 180,
    height: 220,
    marginHorizontal:"auto",
    marginLeft:"1.5%",
    marginTop:"-10%"
    
  },
  menuTitle: {
    
    
    textAlign: "center",
    fontSize: 16,
    // fontWeight: "bold",
    color:"#220000",
    marginTop:"-15%",
    // fontFamily:'Nunito-Light'
  },
  menuPrice: {
    marginTop:"5%",
    textAlign: "center",
    fontSize: 16,
    // fontWeight: "bold",
    color:"#220000"
  },
  menuDescription: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default ItemHome;
