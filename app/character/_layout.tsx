import { Tabs } from 'expo-router';
import React from 'react';

import EditHeader from '@/components/editHeader';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CharacterLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
    <EditHeader/>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="edit1"
        options={{
          title: '1',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
        />
        <Tabs.Screen
        name="edit2"
        options={{
          title: '2',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
        />
        <Tabs.Screen
        name="edit3"
        options={{
          title: '3',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
        />
        <Tabs.Screen
        name="edit4"
        options={{
          title: '4',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
        />
    </Tabs>
    </>
  );
}
