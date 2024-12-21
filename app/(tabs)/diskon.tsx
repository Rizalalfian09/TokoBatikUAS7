import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

export default function Discount() {
  const products = [
    { name: 'Kemeja Batik Parang', price: 'Rp 250.000', discountPrice: 'Rp 200.000', image: 'https://tse1.mm.bing.net/th?id=OIP.T-z1JHL5WLP7zgxaCmbC5gHaJQ&w=474&h=474&c=7', discount: true },
    { name: 'Selendang Batik Truntum', price: 'Rp 120.000', discountPrice: 'Rp 100.000', image: 'https://tse4.mm.bing.net/th?id=OIP.wmbYxwj9AX0vz9Y2kUX5xgHaJ4&w=200&h=267&c=7', discount: true },
    { name: 'Kemeja Batik Parang', price: 'Rp 250.000', discountPrice: 'Rp 200.000', image: 'https://tse4.mm.bing.net/th?id=OIP.eazPJB9cljbLSNmJrnOQVgHaHa&w=474&h=474&c=7', discount: true },
    { name: 'Selendang Batik Truntum', price: 'Rp 120.000', discountPrice: 'Rp 100.000', image: 'https://tse4.mm.bing.net/th?id=OIP.wmbYxwj9AX0vz9Y2kUX5xgHaJ4&w=200&h=267&c=7', discount: true },
    { name: 'Kemeja Batik Parang', price: 'Rp 250.000', discountPrice: 'Rp 200.000', image: 'https://tse4.mm.bing.net/th?id=OIP.eazPJB9cljbLSNmJrnOQVgHaHa&w=474&h=474&c=7', discount: true },
    { name: 'Selendang Batik Truntum', price: 'Rp 120.000', discountPrice: 'Rp 100.000', image: 'https://tse4.mm.bing.net/th?id=OIP.wmbYxwj9AX0vz9Y2kUX5xgHaJ4&w=200&h=267&c=7', discount: true },
    { name: 'Kemeja Batik Parang', price: 'Rp 250.000', discountPrice: 'Rp 200.000', image: 'https://tse1.mm.bing.net/th?id=OIP.T-z1JHL5WLP7zgxaCmbC5gHaJQ&w=474&h=474&c=7', discount: true },
    { name: 'Selendang Batik Truntum', price: 'Rp 120.000', discountPrice: 'Rp 100.000', image: 'https://tse4.mm.bing.net/th?id=OIP.wmbYxwj9AX0vz9Y2kUX5xgHaJ4&w=200&h=267&c=7', discount: true },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Diskon Spesial</Text>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            {/* Product Image */}
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.discountTag}>
                <Text style={styles.discountText}>Diskon</Text>
              </View>
            </View>
            {/* Product Info */}
            <Text style={styles.productName}>{item.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{item.price}</Text>
              <Text style={styles.discountPrice}>{item.discountPrice}</Text>
            </View>
            {/* Buy Button */}
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli Sekarang</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 120,
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  discountTag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#E74C3C',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  originalPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
  buyButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
