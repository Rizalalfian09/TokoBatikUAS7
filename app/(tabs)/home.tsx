import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';

export default function Home() {
  const categories = [
    { name: 'Batik Mega Mendung', image: 'https://tse1.mm.bing.net/th?id=OIP.64a8dxdMT6Mj0FopUkY3XAHaEs&w=300&h=300&c=7' },
    { name: 'Batik Parang', image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Batik_Parang.jpg' },
    { name: 'Batik Kawung', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Batik_Kawung.jpg' },
    { name: 'Batik Truntum', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Batik_Truntum.jpg' },
    { name: 'Batik Sidomukti', image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Batik_Sidomukti.jpg' },
  ];

  const products = [
    { name: 'Kain Batik Mega Mendung', price: 'Rp 150.000', image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Batik_Mega_Mendung.jpg' },
    { name: 'Kemeja Batik Parang', price: 'Rp 250.000', image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Batik_Parang.jpg' },
    { name: 'Gaun Batik Kawung', price: 'Rp 350.000', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Batik_Kawung.jpg' },
    { name: 'Selendang Batik Truntum', price: 'Rp 120.000', image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Batik_Truntum.jpg' },
    { name: 'Kain Batik Sidomukti', price: 'Rp 200.000', image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Batik_Sidomukti.jpg' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ImageBackground
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Batik_Mega_Mendung.jpg' }}
          style={styles.headerBackground}
          imageStyle={{ borderRadius: 12 }}
        >
          <Text style={styles.headerText}>Toko Batik Nusantara</Text>
        </ImageBackground>
      </View>

      {/* Categories in Grid */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kategori Batik</Text>
        <View style={styles.categoryGrid}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Image source={{ uri: category.image }} style={styles.categoryImage} />
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Products in Two Columns */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produk Batik</Text>
        <FlatList
          data={products}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.productRow}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  headerBackground: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
    color: '#333',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  categoryCard: {
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
  },
  productRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});
