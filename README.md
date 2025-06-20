AI Proctoring Platform

An AI-powered, real-time proctoring dashboard built with React, Bootstrap, WebRTC, and Python/Node backend. It supports multi-camera monitoring (front, side, and mobile), live alerts, dashboard analytics, and admin/proctor/reviewer roles.

---

## 🚀 Features

- ✅ Candidate authentication and login
- 🎥 Three-angle live video monitoring (Webcam + Side + Mobile)
- 🔗 Auto-generated mobile link with QR/copy to connect phone camera
- ⚠️ Tab-switch detection and alert logging
- 🧠 Real-time heartbeat and offline alert system
- 📊 Dynamic admin dashboard with charts:
  - Line Chart (Proctoring Activity)
  - Bar Chart (Customer Map)
  - Doughnut Chart (Order Completion)
- 🧑‍💼 Role-based navigation: Admin, Proctor, Reviewer
- 🧾 Save/Export reports
- 🔐 Login & route protection

---

## 🧱 Tech Stack

| Frontend      | Backend          | Features         |
|---------------|------------------|------------------|
| React.js      | FastAPI / Express| WebRTC Streaming |
| Bootstrap 5   | REST API         | Chart.js Visuals |
| React Router  | Socket.IO        | Tab Monitoring   |

---

## 📦 Installation

### 🔧 Prerequisites:
- Node.js and npm
- Python 3.8+ (if using FastAPI) or Node.js (if using Express)
- Git

---

### 🖥️ Frontend Setup (React)

```bash
cd proctoring-dashboard
npm install
npm run dev