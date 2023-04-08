import React, { useState } from "react";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
const Capnhatloaihoa = () => {
  const [tenloai, ganten] = useState("");
  const [maloai, ganma] = useState("");
  const themhoa = async () => {
    try {
      var lh = {
        maloai,
        tenloai,
      };
      console.log(JSON.stringify(lh));
      const response = await fetch("http://192.168.1.8:3000/loaihoas", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lh),
      });
    } catch (error) {
      console.error(error);
    } finally {
      alert("Thêm thành công");
    }
  };
  const capnhat = async () => {
    try {
      var lh = {
        maloai,
        tenloai,
      };
      console.log(lh);
      console.log(JSON.stringify(lh));
      const response = await fetch(
        "http://192.168.1.8:3000/loaihoas/" + maloai,
        {
          method: "patch",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lh),
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      alert("Cập nhật thành công");
    }
  };
  const xoa = async () => {
    try {
      var lh = {
        maloai,
        tenloai,
      };
      console.log(lh);
      console.log(JSON.stringify(lh));
      const response = await fetch(
        "http://192.168.1.8:3000/loaihoas/" + maloai,
        {
          method: "delete",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      alert("Xoá thành công");
    }
  };

  return (
    <View>
      <Text>Mã loại hoa</Text>
      <TextInput value={maloai} onChangeText={ganma}></TextInput>
      <Text>Tên loại hoa</Text>
      <TextInput value={tenloai} onChangeText={ganten}></TextInput>
      <Button title="Thêm Mới" onPress={themhoa} />
      <Button title="Cập Nhật" onPress={capnhat} />
      <Button title="Xoá" onPress={xoa} />
    </View>
  );
};
export default Capnhatloaihoa;
