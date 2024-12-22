import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';

export default function Transaction() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');

  const products = [
    { id: '1', name: 'Kemeja Batik Parang', quantity: 2, price: 250000 },
    { id: '2', name: 'Selendang Batik Truntum', quantity: 1, price: 120000 },
  ];

  const totalPrice = products.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    if (paymentMethod && shippingAddress) {
      // Simulate payment process
      alert('Pembayaran Sukses');
    } else {
      alert('Pastikan semua kolom terisi');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Konfirmasi Transaksi</Text>
      
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDetails}>Jumlah: {item.quantity}</Text>
            <Text style={styles.productDetails}>Harga: Rp {item.price.toLocaleString()}</Text>
            <Text style={styles.productDetails}>Total: Rp {(item.price * item.quantity).toLocaleString()}</Text>
          </View>
        )}
      />

      {/* Shipping Address */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Alamat Pengiriman</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan alamat pengiriman"
          value={shippingAddress}
          onChangeText={setShippingAddress}
        />
      </View>

      {/* Payment Method */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Metode Pembayaran</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan metode pembayaran"
          value={paymentMethod}
          onChangeText={setPaymentMethod}
        />
      </View>

      {/* Total Price */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Harga: Rp {totalPrice.toLocaleString()}</Text>
      </View>

      {/* Payment Button */}
      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
        <Text style={styles.paymentButtonText}>Bayar Sekarang</Text>
      </TouchableOpacity>
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
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productDetails: {
    fontSize: 14,
    color: '#555',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  totalContainer: {
    marginBottom: 16,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
  paymentButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
