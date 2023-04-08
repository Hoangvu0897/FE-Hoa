import { View, Text, Button } from "react-native";
import React from "react";
const Profile = ({ route }) => {
  const { manv, hoten } = route.params;
  return (
    <View>
      <Text>Mã nhân viên: {manv}</Text>
      <Text>Tên nhân viên: {hoten}</Text>
    </View>
  );
};
export default Profile;
