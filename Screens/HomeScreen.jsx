import { Button, Icon, Text, SearchBar } from "@rneui/base";
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


const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ebebeb" }}>
      
        <View style={{ marginTop: 40 }}>
          <SearchBar
            style={{ backgroundColor: "#192586", borderColor: "#192586" }}
            placeholder="Search"
            placeholderTextColor={"#ebebeb"}
            onChangeText={onChangeSearch}
            value={searchQuery}
            containerStyle={{
              borderRadius: 100,
              backgroundColor: "#192586",
              height: 50,
              marginTop: 18,
              margin: 16,
              borderColor: "#192586",
              shadowColor: "white", //no effect
              borderBottomColor: "transparent",
              borderTopColor: "transparent",
            }}
            inputContainerStyle={{
              borderRadius: 100,
              backgroundColor: "#192586",
              height: 50,
              flex: 1,
              borderColor: "#192586",
            }}
            searchIcon={{ color: "#ebebeb", size: 24 }}
            inputStyle={{
              color: "#ebebeb",
              textDecorationLine: "none",
              fontSize: 14,
            }}
            rightIconContainerStyle={{ color: "#ebebeb" }}
            clearIcon={{ color: "white" }}
            selectionColor="#5c6dc9"
          />
          {/* <TextInput
          style={{
            height: 50,
            margin: 16,
            borderWidth: 2,
            padding: 9,
            marginTop: 70,
            borderRadius: 100,
            borderColor: "#192586",
            justifyContent: "center",
            alignContent: "center",
            paddingLeft: 16,
            backgroundColor: "#192586",
          }}
          placeholder="Search"
          placeholderTextColor={"#ebebeb"}
          selectionColor="#5c6dc9"
        ></TextInput> */}
        </View>
  
    </SafeAreaView>
  );
};

export default HomeScreen;
