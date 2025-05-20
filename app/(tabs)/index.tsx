import ScreenWrapper from '@/components/ScreenWrapper'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text>index</Text>
      </View>
    </ScreenWrapper>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})