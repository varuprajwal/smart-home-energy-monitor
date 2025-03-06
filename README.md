# Smart Home Energy Monitor 🏠⚡

A real-time energy monitoring dashboard that helps users track and visualize their home energy consumption. Built with JavaScript, Chart.js, and Firebase.

## 🌟 Features

- **Real-time Energy Monitoring**: Track energy usage in real-time with dynamic updates
- **Interactive Dashboard**: Visualize energy consumption patterns through interactive charts
- **Alert System**: Get notifications when energy usage exceeds set thresholds
- **Data Export**: Export energy consumption data in CSV format for further analysis
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## 🚀 Live Demo

Check out the live demo: [Smart Home Energy Monitor](https://harmonious-sfogliatella-1b8e1e.netlify.app/)

## 🛠️ Technologies Used

- HTML5/CSS3
- JavaScript (ES6+)
- [Chart.js](https://www.chartjs.org/) - For data visualization
- [Firebase](https://firebase.google.com/) - For real-time data management
- [Netlify](https://www.netlify.com/) - For deployment


## 📁 Project Structure

```
smart-home-energy-monitor/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── charts.js
│   ├── alerts.js
│   ├── export.js
│   └── firebase-config.js
├── README.md
└── netlify.toml
```

## 💡 Usage

1. Open the dashboard in your web browser
2. Set your desired energy usage threshold
3. Monitor real-time energy consumption
4. Export data as needed using the "Export Data" button
5. Receive alerts when usage exceeds the set threshold


### Real-time Monitoring
- Continuous updates of energy consumption data
- Visual representation through line charts
- Current usage and daily average calculations

### Alert System
- Customizable threshold settings
- Visual notifications for high energy usage
- Helps in identifying unusual consumption patterns

### Data Export
- Export data in CSV format
- Includes timestamp and usage information
- Useful for detailed analysis and record-keeping


## 👤 Author

Your Name
- GitHub: [varuprajwal](https://github.com/varuprajwal)


## 🏗️ Technical Choices & Architecture Decisions

### 1. Frontend Architecture
- **Vanilla JavaScript**: Chosen over frameworks like React/Vue for:
  - Lightweight implementation
  - No build process required
  - Excellent browser compatibility
  - Direct DOM manipulation for real-time updates

- **Modular Design**: Code split into focused files:
  - `app.js`: Core application logic
  - `charts.js`: Data visualization logic
  - `alerts.js`: Alert system management
  - `export.js`: Data export functionality
  - `firebase-config.js`: Firebase configuration

### 2. Data Visualization (Chart.js)
Selected Chart.js because it offers:
- Responsive charts out of the box
- Extensive customization options
- Smooth animations
- Good performance with real-time data
- Simple integration without dependencies

### 3. Backend & Database (Firebase)
Firebase was chosen as the backend solution for:
- **Real-time Database**: 
  - Instant data synchronization
  - WebSocket-based connections
  - Built-in offline capabilities
- **Authentication**: 
  - Secure user management
  - Multiple auth providers support
- **Hosting**: 
  - Fast CDN deployment
  - SSL certificates included
- **Scalability**: 
  - Automatic scaling
  - No server management required

### 4. Deployment (Netlify)
Netlify was selected for deployment because it provides:
- Continuous deployment from Git
- HTTPS by default
- Global CDN
- Simple configuration
- Generous free tier
- Excellent developer experience

### 5. Security Measures
- Firebase Security Rules implementation
- Input validation for threshold values
- Sanitization of exported data
- Secure authentication flow

### 6. Future Scalability
The architecture supports future enhancements:
- Multiple device support
- Additional chart types
- Historical data analysis
- User preferences storage
- Device grouping
- Custom alerts configuration

