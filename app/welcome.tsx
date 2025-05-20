import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark"/>
      <View style={styles.container}>
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>
            IdeaDrawer
          </Text>
        </View>
        {/* footer */}
        <View style={styles.footer}>
        <Button
          title="Getting Started"
          buttonStyle={{ marginHorizontal: wp(3) }}
          onPress={()=>router.push('/(tabs)')}
        />
      </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingHorizontal: wp(4),
  },
  title: {
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold,
  },
  footer: {
    gap: 30,
    width:'100%'
  }
})