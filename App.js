import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hoa from "./components/Hoa";
import ListLoaiHoa from "./components/Listhoa";
import Capnhatloaihoa from "./components/Capnhatloaihoa";
import { Dangky } from "./components/Dangky";
import { Dangnhap } from "./components/Dangnhap";
import React, { useState, createContext } from "react";
const Stack = createNativeStackNavigator();
export const AuthContext = createContext();
export default function App() {
  const [dangNhapThanhCong, setDangNhapThanhCong] = useState(false);
  const [tendangnhap, gantendangnhap] = useState("");

  const dangxuatnguoidung = () => {
    setDangNhapThanhCong(false);
    gantendangnhap("");
  };
  return (
    <AuthContext.Provider
      value={{
        dangNhapThanhCong,
        setDangNhapThanhCong,
        tendangnhap,
        gantendangnhap,
        dangxuatnguoidung,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HoaType">
          <Stack.Screen name="Loại Hoa" component={ListLoaiHoa}></Stack.Screen>
          <Stack.Screen name="Hoa" component={Hoa}></Stack.Screen>
          <Stack.Screen
            name="Capnhatloaihoa"
            component={Capnhatloaihoa}
          ></Stack.Screen>
          <Stack.Screen
            name="dangkynguoidung"
            component={Dangky}
          ></Stack.Screen>
          <Stack.Screen
            name="dangnhapnguoidung"
            component={Dangnhap}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
