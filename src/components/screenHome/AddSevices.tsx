import { AntDesign, FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function AddServices(){
  return(
    <View style={styles.containerWarraper}>
        <View style={styles.p}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.navigate("/screens/categories")}>
            <AntDesign style={styles.btnText} name="switcher" />
          </TouchableOpacity>
          <Text style={styles.descBtn}>Categorias</Text>
          <Text></Text>
        </ View>

        <View style={styles.p}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.navigate("/screens/listEntry")}>
              <FontAwesome5 style={styles.btnText} name='clipboard-list' />
          </TouchableOpacity>
          <Text style={styles.descBtn}>Lista de</Text>
          <Text style={styles.descBtn}>gastos</Text>
        </View>

        <View style={styles.p}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => router.navigate("/screens/balance")}>
            <FontAwesome6 style={styles.btnText} name='money-bill-trend-up' />
          </TouchableOpacity>
          <Text style={styles.descBtn}>Atualizar</Text>
          <Text style={styles.descBtn}>saldo</Text>
        </View>

        <View style={styles.p}>
          <TouchableOpacity style={styles.btn}>
            <MaterialIcons style={styles.btnText} name="account-balance" />
          </TouchableOpacity>
          <Text style={styles.descBtn}>Registrar</Text>
          <Text style={styles.descBtn}>reserva</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWarraper:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
    backgroundColor: '#026136',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },

  descBtn: {
    color: 'white',
  },

  p: {
    alignItems: 'center',
  },

  btn: {
    backgroundColor: '#048A59', //#207344
    width: 70,
    height: 70,
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    fontSize: 32,
    color: 'white'
  },
});

export default AddServices;
