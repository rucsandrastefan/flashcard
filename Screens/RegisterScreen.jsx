import { Button, Icon, Text } from "@rneui/base";
import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: "#ebebeb", flex: 1 }}>
      <Text
        style={{
          fontSize: 34,
          textAlign: "center",
          marginTop: 65,
          marginBottom: 0,
          fontWeight: "regular",
          color: "#192586",
          lineHeight: 54,
          alignSelf: "center",
        }}
      >
        Create Account
      </Text>
      <TextInput
        style={{
          height: 40,
          margin: 16,
          borderWidth: 2,
          padding: 9,
          marginTop: 70,
          borderRadius: 100,
          borderColor: "#5c6dc9",
          justifyContent: "center",
          alignContent: "center",
          paddingLeft: 16,
        }}
        onChangeText={(email) => setEmail(email)}
        value={email}
        placeholder="E-mail"
        selectionColor="#5c6dc9"
      ></TextInput>
      <TextInput
        style={{
          height: 40,
          margin: 16,
          marginTop: 2,
          borderWidth: 2,
          padding: 9,
          borderRadius: 100,
          borderColor: "#5c6dc9",
          justifyContent: "center",
          alignContent: "center",
          paddingLeft: 16,
        }}
        onChangeText={(username) => setUsername(username)}
        value={username}
        placeholder="Username"
        selectionColor="#5c6dc9"
      ></TextInput>
      <TextInput
        style={{
          height: 40,
          margin: 16,
          marginTop: 2,
          borderWidth: 2,
          padding: 9,
          borderRadius: 100,
          borderColor: "#5c6dc9",
          justifyContent: "center",
          alignContent: "center",
          paddingLeft: 16,
        }}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Password"
        selectionColor="#5c6dc9"
      ></TextInput>
      <TextInput
        style={{
          height: 40,
          margin: 16,
          marginTop: 2,
          borderWidth: 2,
          padding: 9,
          borderRadius: 100,
          borderColor: "#5c6dc9",
          justifyContent: "center",
          alignContent: "center",
          paddingLeft: 16,
        }}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        value={confirmPassword}
        placeholder="Confirm Password"
        selectionColor="#5c6dc9"
      ></TextInput>
      <BouncyCheckbox
        style={{ marginTop: 12, justifyContent: "center" }}
        size={15}
        fillColor="gray"
        isChecked={checkboxState}
        text="Agree with Terms & Conditions"
        disableBuiltInState={false}
        onPress={() => setCheckboxState(!checkboxState)}
        innerIconStyle={{ borderWidth: 1.5, borderRadius: 5 }}
        textStyle={{
          textDecorationLine: "none",
          fontWeight: 300,
          fontSize: 14,
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Account created ! {"\n"}
              Please check your e-mail.
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => navigation.navigate('LogInScreen')}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Button
        title={"Create Account"}
        onPress={() => setModalVisible(true)}
        buttonStyle={{
          backgroundColor: "#192586",
        }}
        containerStyle={{
          width: 330,
          marginTop: 60,
          margin: 16,
          borderRadius: 50,
          justifyContent: "center",
          alignSelf: "center",
        }}
        // onPress={SignIn(auth, email, password)}
      />

      <TouchableOpacity onPress={() => navigation.navigate("LogInScreen")}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#5c6dc9",
            marginTop: 70,
            justifyContent: "flex-end",
          }}
        >
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#192586",
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  },
});
