import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import database from '@react-native-firebase/database';

export default function App() {
  const [motorOn, setMotorOn] = useState(false); 
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0); 

  useEffect(() => {
    const tempRef = database().ref('/temperature');
    const humiRef = database().ref('/humidity');
    const motorRef = database().ref('/motor');

    tempRef.on('value', snap => setTemperature(snap.val()));
    humiRef.on('value', snap => setHumidity(snap.val()));
    motorRef.on('value', snap => setMotorOn(snap.val() === 1));

    return () => {
      tempRef.off();
      humiRef.off();
      motorRef.off();
    };
  }, []);

  const toggleMotor = () => {
    database().ref('/motor').set(motorOn ? 0 : 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 Smart Garden</Text>

      <Text style={styles.card}>Temperature: {temperature} °C</Text>
      <Text style={styles.card}>Humidity: {humidity} %</Text>

      <TouchableOpacity style={styles.button} onPress={toggleMotor}>
        <Text style={styles.btnText}>{motorOn ? 'Turn Motor OFF' : 'Turn Motor ON'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkBtn}
        onPress={() => Linking.openURL('https://your-website-link.com')}
      >
        <Text style={styles.linkText}>Visit Website</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: 20,
    borderRadius: 14,
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#16a34a',
    padding: 18,
    borderRadius: 14,
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linkBtn: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#38bdf8',
    borderRadius: 12,
  },
  linkText: {
    color: '#020617',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
