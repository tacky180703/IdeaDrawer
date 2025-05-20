import AddIcon from '@/assets/Icons/Add_Icon.svg'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../constants/theme'

const Index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Home</Text>
          <Pressable onPress={()=>router.push('/newIdea')}>
            <AddIcon width={24} height={24}/>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal:wp(4)
  },
  title: {
    color: theme.colors.text,
    fontSize: hp(3.2),
    fontWeight: theme.fonts.extraBold
  }
})