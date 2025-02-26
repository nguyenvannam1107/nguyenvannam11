import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (phone) => {
    // Biểu thức Regex kiểm tra số điện thoại Việt Nam
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;

    if (phoneRegex.test(phone)) {
      setErrorMessage("Số điện thoại hợp lệ!");
    } else {
      setErrorMessage("Số điện thoại không hợp lệ!");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}> Đăng Nhập</Text>
      <StatusBar style="auto" />
      <View style={styles.hr} />
      <Text style={styles.h2}>Nhập số điện thoại</Text>
      <Text style={styles.h3}>
        Dùng số điẹn thoại để đăng nhập hoặc đăng ký tài khoản tại OneHouseing
        Pro
      </Text>
      <TextInput
        placeholder="Nhập số điện thoại của bạn"
        style={styles.textinput}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      ></TextInput>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Button
        title="Kiểm tra"
        onPress={() => validatePhoneNumber(phoneNumber)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
    padding: 10,
    marginBottom: 50,
    // justifyContent: 'center',
  },
  h1: {
    fontSize: 31,
    fontWeight: "bold",
  },
  hr: {
    height: 1,
    width: "100%",
    backgroundColor: "#000",
  },
  h2: {
    marginTop: 80,
    fontSize: 25,
  },
  h3: {
    marginTop: 30,
    fontSize: 17,
  },
  textinput: {
    marginTop: 30,
    marginBottom: 100,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  button: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "gray",
    textAlign: "center",
  },
});
