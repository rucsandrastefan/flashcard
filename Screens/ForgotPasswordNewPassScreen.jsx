import { Button, Icon, Text } from "@rneui/base";
import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ForgotPasswordNewPassScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 24,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",

            marginBottom: 0,
            fontWeight: "regular",
            color: "#192586",
            lineHeight: 54,
            alignSelf: "center",
          }}
        >
          New Password
        </Text>
      </View>
      <Text
        style={{
          textAlign: "left",
          paddingTop: 24,
          paddingLeft: 40,
          fontSize: 12,
          color: "#5c6dc9",
        }}
      >
        Enter New Password
      </Text>
      <TextInput
        style={{
          height: 40,
          margin: 16,
          borderWidth: 2,
          padding: 9,
          marginTop: 8,
          borderRadius: 100,
          borderColor: "#5c6dc9",
          justifyContent: "center",
          paddingLeft: 16,
          fontSize: 12,
        }}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Should contain least one special character"
        selectionColor="#5c6dc9"
      ></TextInput>
      <Text
        style={{
          textAlign: "left",
          paddingTop: 3,
          paddingLeft: 40,
          fontSize: 12,
          color: "#5c6dc9",
        }}
      >
        Confirm New Password
      </Text>
      <TextInput
        style={{
          height: 40,
          margin: 16,
          borderWidth: 2,
          padding: 9,
          marginTop: 8,
          borderRadius: 100,
          borderColor: "#5c6dc9",
          justifyContent: "center",
          paddingLeft: 16,
          fontSize: 12,
        }}
        onChangeText={(newPassword) => setNewPassword(newPassword)}
        value={newPassword}
        placeholder="Repeat password"
        selectionColor="#5c6dc9"
      ></TextInput>
      <Button
        title={"Submit"}
        onPress={() => navigation.navigate("LogInScreen")}
        buttonStyle={{
          backgroundColor: "#192586",
        }}
        containerStyle={{
          width: 300,
          marginTop: 26,
          borderRadius: 50,
          justifyContent: "center",
          alignSelf: "center",
        }}
        // onPress={SignIn(auth, email, password)}
      />
    </SafeAreaView>
  );
};

export default ForgotPasswordNewPassScreen;
