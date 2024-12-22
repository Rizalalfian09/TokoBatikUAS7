import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0f0e0e', 
        tabBarInactiveTintColor: '#686464', 
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          title: 'Home', 
        }}
      />
      <Tabs.Screen
        name="diskon"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetags" size={size} color={color} />
          ),
          title: 'Diskon',
        }}
      />
      <Tabs.Screen
        name="transaksi"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" size={size} color={color} />
          ),
          title: 'Transaksi',
        }}
      />
    </Tabs>
  );
};
