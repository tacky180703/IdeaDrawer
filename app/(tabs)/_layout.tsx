import CustomTabBar from '@/components/CustomTabs'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const _layout = () => {
  return (
    <Tabs tabBar={ CustomTabBar} screenOptions={{headerShown:false}}>
      <Tabs.Screen name="index" options={{title:"Home"} } />
      <Tabs.Screen name="project"/>
      <Tabs.Screen name="setting"/>
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})