import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import { Text, View } from "react-native";
export const Dangky = () => {
    const [tennguoidung, gantennguoidung] = useState("")
    const [tendangnhap, gantendangnhap] = useState("")
    const [matkhau, ganmatkhau] = useState("")
    const [matkhaunl, ganmatkhaunl] = useState("")
    const [sodienthoai, gansodienthoai] = useState("")
    const [email, ganemail] = useState("")
    const dangkynguoidung = async () => {
        try {
            if (matkhau !== matkhaunl) {
                alert("Mật khẩu nhập lại không khớp");
                return;
            }

            var nd = {
                tennguoidung,
                tendangnhap,
                matkhau,
                sodienthoai,
                email,
            };

            const response = await fetch("http://10.45.230.217:3000/nguoidungs", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nd),
            });

            if (response.status === 200) {
                alert("Thêm thành công");
            } else {
                alert("Có lỗi xảy ra");
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View>
            <Text>Tên Đăng Nhập</Text>
            <TextInput value={tendangnhap} onChangeText={gantendangnhap}></TextInput>
            <Text>Mật Khẩu</Text>
            <TextInput secureTextEntry={true} value={matkhau} onChangeText={ganmatkhau}></TextInput>
            <Text>Mật Khẩu Nhập Lại</Text>
            <TextInput secureTextEntry={true} value={matkhaunl} onChangeText={ganmatkhaunl}></TextInput>
            <Text>Điện Thoại</Text>
            <TextInput value={sodienthoai} onChangeText={gansodienthoai}></TextInput>
            <Text>Email</Text>
            <TextInput value={email} onChangeText={ganemail}></TextInput>
            <Button title="Thêm Mới" onPress={dangkynguoidung} />
        </View>
    )
}