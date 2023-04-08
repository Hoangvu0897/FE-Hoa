import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View } from "react-native";
export const Dangnhap = () => {
    const [tendangnhap, gantendangnhap] = useState("")
    const [matkhau, ganmatkhau] = useState("")
    const [nguoidung, setnguoidung] = useState("")
    const dangnhapnguoidung = async () => {
        try {
            var nd = { tendangnhap, matkhau }
            console.log(JSON.stringify(nd));
            const response = await fetch('http://10.45.230.217:3000/nguoidungs/Login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nd),
            });
            const json = await response.json()
            console.log(json);
        } catch (err) {
            console.error(error);
        } finally {
        }

    }
    useEffect(() => {
        dangnhapnguoidung()
        console.log(nguoidung);
    }, [])

    return (
        <View>
            <Text>Tên Đăng Nhập</Text>
            <TextInput value={tendangnhap} onChangeText={gantendangnhap}></TextInput>
            <Text>Mật Khẩu</Text>
            <TextInput secureTextEntry={true} value={matkhau} onChangeText={ganmatkhau}></TextInput>
            <Button title="Đăng Nhập" onPress={dangnhapnguoidung} />
            <TextInput value={(nguoidung ? nguoidung.tennguoidung : "")}></TextInput>
        </View>
    )
}
export default Dangnhap