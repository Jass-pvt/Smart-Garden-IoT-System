# 🌱 Smart Garden IoT System

An end-to-end **IoT-based Smart Garden monitoring and control system** that uses **ESP32**, **Firebase Realtime Database**, and a **React Native mobile application** to monitor plant conditions and automate irrigation in real time.

This project demonstrates the practical integration of **hardware, cloud, and mobile app development**, making it suitable for academic projects, internships, and portfolio showcasing.

---

## ✨ Key Features

* 📡 **Live Sensor Monitoring**
  Real-time soil moisture and humidity data from ESP32

* ☁️ **Firebase Realtime Database**
  Instant cloud sync with live listeners (no dummy data)

* 🚰 **Smart Motor Control**
  Relay-based water pump control with **Auto & Manual modes**

* 📱 **Mobile Application**
  React Native app displaying live values and control options

* 🔗 **Website Redirection**
  Button in the app to redirect users to an external website/dashboard

---

## 🛠️ Technology Stack 

**Hardware**

* ESP32
* Soil Moisture Sensor
* DHT11 / DHT22 Sensor
* Relay Module
* Water Pump

**Software & Cloud**

* Arduino IDE 
* Firebase Realtime Database
* React Native
* JavaScript

---

## ⚙️ System Architecture

1. ESP32 reads sensor values at regular intervals
2. Data is pushed to Firebase Realtime Database
3. Mobile app listens to Firebase live updates
4. Motor is controlled automatically based on moisture threshold or manually via the app

---

## 📂 Project Structure

```
Smart-Garden-IoT/
│
├── esp32/              # ESP32 Arduino code
├── mobile-app/         # React Native application
├── assets/             # Screenshots and images
├── README.md
└── .gitignore
```

---

## 📸 Screenshots

[*Add app UI screenshots, Firebase data view, and hardware setup images here.*](https://github.com/Jass-pvt/Smart-Garden-IoT-System/blob/main/app.jpeg)

---

## 🚀 Future Enhancements

* pH and soil nutrient sensors
* AI-based irrigation prediction
* Weather API integration
* Solar-powered system
* Push notifications for alerts

---

## 🎓 Use Cases

* Smart Agriculture
* Home Gardening Automation
* Academic Mini / Major Projects
* IoT + App Development Portfolio

---

## 👨‍💻 Author

**Jaswanth Rathore S**
B.E – Computer Science & Engineering
Interests: IoT, Mobile App Development, Cloud Integration

---

## ⭐ Support

If you find this project useful, please consider giving it a ⭐ on GitHub.
