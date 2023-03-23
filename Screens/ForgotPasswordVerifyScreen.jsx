import { Button, Icon, Text } from "@rneui/base";
import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ForgotPasswordVerifyScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 24,
          alignContent: "center",
          justifyContent: "center",
          flex: 1,
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
          Verification
        </Text>
      </View>
      <Text style={{ textAlign: "center", paddingTop: 24, fontSize: 16 }}>
        Enter Verification Code
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 12,
        }}
      >
        <TextInput
          style={{
            height: 60,
            width: 60,
            margin: 16,
            borderWidth: 2,
            padding: 9,
            marginTop: 30,
            borderRadius: 100,
            borderColor: "#5c6dc9",
            textAlign: "center",
          }}
          selectionColor="#5c6dc9"
        ></TextInput>
        <TextInput
          style={{
            height: 60,
            width: 60,
            margin: 16,
            borderWidth: 2,
            padding: 9,
            marginTop: 30,
            borderRadius: 100,
            borderColor: "#5c6dc9",
            textAlign: "center",
          }}
          selectionColor="#5c6dc9"
        ></TextInput>
        <TextInput
          style={{
            height: 60,
            width: 60,
            margin: 16,
            borderWidth: 2,
            padding: 9,
            marginTop: 30,
            borderRadius: 100,
            borderColor: "#5c6dc9",
            textAlign: "center",
          }}
          selectionColor="#5c6dc9"
        ></TextInput>
        <TextInput
          style={{
            height: 60,
            width: 60,
            margin: 16,
            borderWidth: 2,
            padding: 9,
            marginTop: 30,
            borderRadius: 100,
            borderColor: "#5c6dc9",
            textAlign: "center",
          }}
          selectionColor="#5c6dc9"
        ></TextInput>
      </View>
      <Text style={{ textAlign: "center", paddingTop: 18, fontSize: 14 }}>
        I haven't received the code {"\n"}
        <TouchableOpacity>
          <Text style={{ textAlign: "center", fontSize: 14, color: "#5c6dc9" }}>
            {" "}
            Resend
          </Text>
        </TouchableOpacity>
      </Text>
      <Button
        title={"Verify"}
        onPress={() => navigation.navigate("ForgotPasswordNewPassScreen")}
        buttonStyle={{
          backgroundColor: "#192586",
        }}
        containerStyle={{
          width: 300,
          marginTop: 28,
          margin: 22,
          borderRadius: 50,
          justifyContent: "center",
          alignSelf: "center",
        }}
        // onPress={SignIn(auth, email, password)}
      />
    </SafeAreaView>
  );
};
export default ForgotPasswordVerifyScreen;
