import React from "react";
import dataloaihoa from "../assets/data/loaihoa.json";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native";

const Loaihoa = ({ navigation }) => {
  chonloai = (item) => {
    alert(item.tenloai);
  };
  return (
    <View>
      <FlatList
        data={dataloaihoa}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.maloai}
            style={styles.container}
            onPress={() =>
              navigation.navigate("Capnhatloaihoa", {
                maloai: item.maloai,
                tenloai: item.tenloai,
              })
            }
          >
            <Text style={styles.text}>{item.tenloai}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate("Capnhatloaihoa", { maloai: 0, tenloai: "" })
        }
      >
        <Text style={styles.text}>Thêm loại hoa</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: "#d9f9b1",
    alignItems: "center",
  },
  text: {
    color: "#4f603c",
  },
});
export default Loaihoa;
