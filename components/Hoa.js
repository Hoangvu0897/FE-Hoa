import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";

const Hoa = ({ route }) => {
  const { maloai, tenloai } = route.params;
  const [dshoachon, gandshoachon] = useState([]);
  const [loading, setLoading] = useState(true);

  const gethoas = async () => {
    try {
      const response = await fetch(
        "http://10.45.230.217:3000/hoas/loaihoa/" + maloai
      );
      const json = await response.json();
      json.map(
        (element) =>
          (element.hinhanh = "http://10.45.230.217:3000/images/" + element.hinh)
      );
      console.log(json);
      gandshoachon(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    gethoas();
    console.log(dshoachon);
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text style={styles.header}>{tenloai}</Text>
      <FlatList
        data={dshoachon}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.tenhoa}
            onPress={() => alert(item.tenhoa)}
            style={styles.listItem}
          >
            <Image source={{ uri: item.hinhanh }} style={styles.image} />
            <View>
              <Text style={styles.itemText}>{item.tenhoa}</Text>
              <Text style={styles.itemText}>Đơn giá: {item.dongia} đ</Text>
              <Text style={styles.itemText}>Mô tả: {item.mota}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.tenhoa}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#19A7CE",
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },
});

export default Hoa;
