import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  Modal,
} from "react-native";
import db from '../config'
import firebase from "firebase";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { RFValue } from "react-native-responsive-fontsize";
export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      Cpassword: "",
      age: "",
      dob: "",
      isModalVisible: false,
    };
  }


  userLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return Alert.alert("Successfully Logged In");
      })
      .catch((error) => {
        return Alert.alert(error.message);
      });
  };

  handleSignUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        Alert.alert("User Added Successfully");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  userSignUp = (email, password, Cpassword,) => {
    if (passowrd != Cpassword){
      return Alert.alert("Passwords do not match")
    }
    else{firebase
      .auth.
      createUserWithEmailAndPassword(email, password)
      .then(()=>{
      db.collection('users').add({
        email_id: this.state.email,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        age: this.state.age,
        dob: this.state.dob,
      })
      return Alert.alert("User has been succesfully added!" ,"",[
        {
          text : 'OK' ,onPress = ()=> this.setState({
            isModalVisible: false
          }) 
        }
      ])
    })
    .catch((error)=>{
      return Alert.alert(error.message)
    })
      
    
    }
  }

  showModal=()=>{return(
    <Modal
    animationType = "fade"
    transparent = {true}
    visible = {this.state.isModalVisible}
    >
      <CustomInput
              placeholder={"abc@example.com"}
              keyboardType={"email-address"}
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
            />
      
      <CustomInput
              placeholder={"First Name"}
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
            />
            <CustomInput
              placeholder={"Last Name"}
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
            />
            <CustomInput
              placeholder={"Enter Password"}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
            <CustomInput
              placeholder={"Re-enter Password"}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
            <CustomInput
              placeholder={"Age"}
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
            />
            <CustomInput
              placeholder={"Date of Birth"}
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
            />


            <CustomButton title = {"Register"} onPress = {()=> this. userSignUp(this.state.email, this.state.password, this.state.Cpassword)}/>

            <CustomButton title = {"Cancel"} onPress = {()=> this.setState({isModalVisible : false})}/>
    </Modal>
  
  )}
  
  render() {
    var { email, password } = this.state;
    return (
      <View style={styles.containe}>
        
        <KeyboardAvoidingView>

          <View style={styles.upperConatainer}>
            <Image
              source={require("../assets/cashew.jpeg")}
              style={{ width: 400, height: 400 }}
            />
          </View>
          {this.showModal()}
          <View style={styles.middleContainer}>
            <CustomInput
              placeholder={"abc@example.com"}
              keyboardType={"email-address"}
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
            />
            <CustomInput
              placeholder={"Enter Password"}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
            
            <CustomButton title = {"Login"} onPress = {this.userSignIn(email,password)}/>
            <CustomButton title = {"SignUp"} onPress = {this.handleSignUp(email,password)}/>
          
          </View>
        </KeyboardAvoidingView>
      </View>
      //Image
      //customInput
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  displayText: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  scanButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    height: 50,
    width: 75,
  },
  buttonText: {
    fontSize: 21,
  },
  InputView: {
    flexDirection: "row",
  },
  InputBox: {
    borderWidth: 1.5,
    width: 250,
    height: 50,
    fontSize: 20,
    marginTop: 10,
    alignSelf: 'center'
  },

  submitButton: {
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
});
