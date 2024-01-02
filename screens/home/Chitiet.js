// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import User from './User';

// const ChiTiet = ({ route }) => {
//   const navigation = useNavigation();
//   const { product = {} } = route.params;

//   const [quantity, setQuantity] = useState(product.quantity || 0);
//   const pricePerItem = 10; // Replace with the actual price per item

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 0) {
//       setQuantity(quantity - 1);
//     }
//   };
//   const Cart = () => {
//     // Navigate to the "Register" screen
//     navigation.navigate('Cart');
//   };
//   const User = () => {
//     // Navigate to the "Register" screen
//     navigation.navigate('User');
//   };

//   if (!product) {
//     return (
//       <View>
//         <Text>Chi tiết sản phẩm không khả dụng</Text>
//       </View>
//     );
//   }

//   const totalPrice = quantity * pricePerItem;

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}>
//         <Image source={{ uri: product.image }} style={styles.image} />
//         <Text>Tên sản phẩm: {product.name}</Text>
//         <Text>Số lượng: {quantity}</Text>
//         <View style={styles.quantityContainer}>
//           <TouchableOpacity onPress={decreaseQuantity} style={styles.iconContainer}>
//             <Icon name="minus" size={16} color="black" />
//           </TouchableOpacity>
//           <Text style={styles.quantityText}>{quantity}</Text>
//           <TouchableOpacity onPress={increaseQuantity} style={styles.iconContainer}>
//             <Icon name="plus" size={16} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.bottomContainer}>
//         <View>
//           <Text style={styles.blkackPriceText}>Thành tiền: <Text style={styles.boldBlackText}>${totalPrice}</Text></Text>
//         </View>
//         <TouchableOpacity style={styles.cartIconContainer} onPress={() => navigation.navigate('Cart')}>
//           <Icon name="shopping-cart" size={30} color="green" />
//         </TouchableOpacity>
//         <View style={styles.iconGroup2}>
//         <Icon name="share" size={30} color="green" />
//       </View>
//       </View>
//       <View style={styles.iconGroup}>
//       <TouchableOpacity style={styles.iconGroup} onPress={User}>
//         <Icon name="home" size={30} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconGroup} onPress={User}>
//         <Icon name="bars" size={30} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconGroup} onPress={User}>
//         <Icon name="shopping-cart" size={30} color="white" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconGroup} onPress={User}>
//         <Icon name="user" size={30} color="white" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: 100,
//     height: 100,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     padding: 10,
//   },
//   quantityText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginHorizontal: 10,
//   },
//   iconContainer: {
//     padding: 10,
//   },
//   bottomContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//   },
//   totalPriceText: {
//     color: 'white',
//     fontSize: 20,
//   },
//   boldBlackText: {
//     fontWeight: 'bold',
//     fontSize: 24,
//     color: 'black',
//   },
//   cartIconContainer: {
//     padding: 10,
//     top: -550,
//     right: -60,
//   },
//   iconGroup: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: 'gray',
//     padding: 10,
//   },
//   iconGroup2: {
//     padding: 10,
//     top:-550,
//   },
// });

// export default ChiTiet;
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import InputSpinner from "react-native-input-spinner";
import * as Animatable from 'react-native-animatable';
import { GET_IMG } from "../api/apiservice";
const ChiTiet = ({ route, navigation }) => {

    const [selectedIcon, setSelectedIcon] = useState(null);
    const handleIconSelect = (iconName) => {
        setSelectedIcon(iconName);
    };

    const { coffee } = route.params;
    const [total, totalPrice] = useState(coffee.price);
    const [quantity, setQuantity] = useState(1);
    const [isAnimated, setIsAnimated] = useState(false);
    useEffect(() => {
        // Trigger the entrance animation
        setIsAnimated(true);
    }, []);
    return (
        <View style={styles.container}>
            
            <Animatable.View
                style={[styles.imageContainer, isAnimated && styles.slideInUp]}
                animation="slideInUp"
                duration={800}
            >
                <Image
                    source={{
                        uri: GET_IMG("products", coffee.photo),
                    }}
                    style={styles.image}
                    resizeMode="contain"
                />
            </Animatable.View>
            <View style={styles.content1}>
                <Text style={styles.content}>{coffee.title}</Text>
                

                <InputSpinner
                    style={{
                        marginLeft: "50%",
                        marginTop: "-9%",
                    }}
                    max={10}
                    min={1}
                    step={1}
                    skin={"round"}
                    color={"#FFF"}
                    value={0}
                    height={40}
                    width={110}
                    shadow={false}
                    background={"#FFF"}
                    shadowBorder={false}
                    onChange={(num) => {
                        coffee.total = num * coffee.price;
                        totalPrice(coffee.total);
                        setQuantity(num);
                    }}
                />
                <Text style={styles.content2}>{coffee.description}</Text>
            </View>
            
            <View style={styles.content5}></View>
            <View style={styles.content6}></View>
            <View style={styles.contentBottom}>
                <View style={styles.totalAmount}>
                    <Text style={styles.totalAmount2}>Total Amount</Text>
                    <Text style={styles.byn300}>BYN {total}</Text>
                </View>
                <TouchableHighlight
                    style={{ marginBottom: 20, borderRadius: 15 }}
                    activeOpacity={0.0}
                    underlayColor="#FFF"
                    onPress={() => {
                        const updatedCoffee = { ...coffee, quantity: quantity };
                        navigation.navigate("", {
                            coffee: updatedCoffee,
                            quantity: quantity,
                        });
                    }}
                >
                    <View style={styles.rectangView}>
                        <Text style={styles.next}>Next</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "10%",
    },
    contentTop: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 30,
    },
    imageContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 22,
        paddingTop: 20,
    },
    content1: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1,
    },
    content5: {
        flex: 1,
    },
    content6: {
        flex: 1,
    },
    contentBottom: {
        flex: 1.5,
    },
    title: {
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: 24,
        fontWeight: "500",
        color: "#001833",
        textAlign: "center",
    },
    content: {
        fontSize: 21,
        letterSpacing: 0,
        lineHeight: 20,
        fontWeight: "500",
        color: "#001833",
        textAlign: "left",
        fontWeight: "bold",
        marginTop: "-1%",
        marginLeft: "-55%",
    },
    content2: {
      fontSize: 17,
      letterSpacing: 0,
      lineHeight: 20,
      fontWeight: "500",
      // color: "#001833",
      textAlign: "left",
      marginTop: "20%",
      marginLeft: "-55%",
      flexDirection:'row'
  },
    rectangView: {
        borderRadius: 30,
        backgroundColor: "#324a59",
        height: "80%",
        marginHorizontal: 30,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    totalAmount: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 30,
        marginTop: "-15%",
    },
    totalAmount2: {
        fontSize: 19,
        fontWeight: "500",
        color: "#001833",
        textAlign: "left",
        width: "40%",
        height: "50%",
        fontWeight: "bold",

        transform: [
            {
                rotate: "0.14deg",
            },
        ],
    },
    byn300: {
        fontSize: 19,
        fontWeight: "500",
        color: "#001833",
        textAlign: "left",
        width: "40%",
        height: "50%",
        fontWeight: "bold",
        marginLeft: "40%",
        transform: [
            {
                rotate: "0.14deg",
            },
        ],
    },
    next: {
        fontSize: 14,
        lineHeight: 23,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
    },
    slideInUp: {
        translateY: 0,
    },
    thongtin: {
        borderRadius: 20,
        backgroundColor: 'pink',
    },
    cach: {
        padding: 5,
    },
    cach2: {
        flexDirection: 'row',
        padding: 5,
        margin: 10,
    },
    text: {
        fontSize: 20,
        marginTop: 20,
        color: 'black',
    },
    gach: {
        height: 1,
        width: '100%',
        backgroundColor: 'gray',
    },
    countText: {
        fontSize: 20,
        padding: 5,
    },
    diem: {
        marginLeft: 120,
        backgroundColor: 'pink',
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        fontSize: 18,
    },
    voucher: {
        padding: 10,
        margin: 10,
        backgroundColor: '#C58BF2',
        width: '95%',
        height: 50,
        borderRadius: 20,
        alignItems: "center",
    },

    tongtien: {

        flexDirection: 'row',
    },
    iconContainer: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'pink',
    },
    selectedIcon: {
        backgroundColor: 'white',
    },
});
export default ChiTiet;

