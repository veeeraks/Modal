import {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
const [modalVisible, setModalVisible] = useState(false);

/*
<SafeAreaProvider> Provides info about the safe screen area insets to the app, ensuring that content is displayed correctly.
<SafeAreaView style={styles.centeredView}> Ensures that the content is displayed within the safe area boundaries of a device.
onRequestClose={() => {setModalVisible(!modalVisible);}} Closes the modal from the back button on Android.
Pressable: onPress={() => setModalVisible(false)}> Closes the modal from the "Close" button.
*/

  return (
    <SafeAreaProvider> 
      <SafeAreaView style={styles.centeredView}>
        
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            
              <Text style={styles.modalText}>This is modal...</Text>
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
           
            </View>
          </View>

        </Modal>
        
        <Pressable
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show modal message</Text>
        </Pressable>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#6b0792',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'white',
    borderColor: '#079292',
    borderWidth: 1,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 16,
    color: '#079292',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 18,
    color: '#6b0792',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
});