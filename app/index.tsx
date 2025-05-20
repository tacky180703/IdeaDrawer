import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";
import ScreenWrapper from '../components/ScreenWrapper';

const Index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <Button title="welcome" onPress={() => router.push('/welcome')}>
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})