import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../App";

import { Button, Text, TextInput, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Dangnhap = () => {
  // const [tendangnhap, gantendangnhap] = useState("");
  const [matkhau, ganmatkhau] = useState("");
  const [nguoidung, setnguoidung] = useState("");
  // const [dangNhapThanhCong, setDangNhapThanhCong] = useState(false);
  const {
    dangNhapThanhCong,
    setDangNhapThanhCong,
    tendangnhap,
    gantendangnhap,
    dangxuatnguoidung,
  } = useContext(AuthContext);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("nguoidung", JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("nguoidung");
      if (value !== null) {
        setnguoidung(JSON.parse(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const dangnhapnguoidung = async () => {
    try {
      var nd = { tendangnhap, matkhau };
      console.log(JSON.stringify(nd));
      const response = await fetch("http://192.168.1.8:3000/nguoidungs/Login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nd),
      });
      const json = await response.json();
      console.log(json);
      if (json) {
        storeData(json);
        setnguoidung(json);
        setDangNhapThanhCong(true);
        Alert.alert("Thông báo", "Đăng nhập thành công!");
      } else {
        setDangNhapThanhCong(false);
        Alert.alert("Thông báo", "Đăng nhập thất bại!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const dangxuatnguoidung = async () => {
  //   try {
  //     await AsyncStorage.removeItem("nguoidung");
  //     setnguoidung(null);
  //     setDangNhapThanhCong(false);
  //     gantendangnhap("");
  //     ganmatkhau("");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {!dangNhapThanhCong ? (
        <>
          <Text>Tên Đăng Nhập</Text>
          <TextInput
            value={tendangnhap}
            onChangeText={gantendangnhap}
          ></TextInput>
          <Text>Mật Khẩu</Text>
          <TextInput
            secureTextEntry={true}
            value={matkhau}
            onChangeText={ganmatkhau}
          ></TextInput>
          <Button title="Đăng Nhập" onPress={dangnhapnguoidung} />
        </>
      ) : (
        <View>
          <Text>Xin chào, {tendangnhap}</Text>
          <Button title="Đăng xuất" onPress={dangxuatnguoidung} />
        </View>
      )}
    </View>
  );
};

export default Dangnhap;
