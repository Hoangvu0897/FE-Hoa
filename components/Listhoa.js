import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";

const listHinh = {
  1: require("../assets/images/cuc_1.jpg"),
  2: require("../assets/images/cuoi_1.jpg"),
  3: require("../assets/images/hong_1.jpg"),
  4: require("../assets/images/xuan_2.jpg"),
};

const ListLoaiHoa = ({ navigation }) => {
  const [dsloaihoa, gands] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLoaihoas = async () => {
    try {
      const response = await fetch("http://192.168.1.8:3000/loaihoas");
      const json = await response.json();
      gands(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLoaihoas();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FlatList
        data={dsloaihoa}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.maloai}
            style={styles.container}
            onPress={() =>
              navigation.navigate("Hoa", {
                maloai: item.maloai,
                tenloai: item.tenloai,
              })
            }
          >
            <View style={styles.row}>
              <Image source={listHinh[item.maloai]} style={styles.hinh} />
              <Text style={styles.text}>{item.tenloai}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.maloai.toString()}
      />
      <TouchableOpacity
        style={styles.rowUpdate}
        onPress={() => navigation.navigate("Capnhatloaihoa")}
      >
        <Text style={styles.textUpdate}>Thêm loại hoa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#19A7CE",
    borderRadius: 10,
  },
  hinh: {
    marginRight: 8,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    color: "#4f603c",
  },
  rowUpdate: {
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#19A7CE",
    borderRadius: 10,
  },
  textUpdate: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ListLoaiHoa;
