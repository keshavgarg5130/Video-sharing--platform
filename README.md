# 🎥 Distributed Video Streaming Platform

A scalable, microservices-based video uploading and streaming platform built with modern backend architecture principles.

This project demonstrates how real-world systems like YouTube or Netflix handle video uploads, processing, and streaming at scale.

---

## 🚀 Features

- ⚡ Microservices Architecture
- 📦 Efficient Large File Uploads (Multi-part & Chunking)
- 🔄 Event-driven Communication using Kafka
- 🎬 Video Transcoding with FFmpeg
- 📶 Adaptive Bitrate Streaming (HLS)
- 🌍 Scalable Video Delivery Pipeline

---

## 🏗️ Architecture Overview

The system is divided into 4 independent microservices:

Client → Upload Service → Kafka → Transcode Service → Kafka → Watch Service

---

## 🧩 Services

### 1. Client
- Frontend interface for users
- Handles video upload UI and playback
- Communicates with backend services

### 2. Upload Service
- Handles large video uploads
- Implements:
  - Multi-part uploads
  - Chunk-based uploading
- Stores raw video files
- Publishes upload events to Kafka

### 3. Transcode Service
- Consumes upload events from Kafka
- Uses FFmpeg to:
  - Convert videos into multiple resolutions (240p, 480p, 720p, etc.)
  - Generate HLS segments (.ts) and playlist (.m3u8)
- Publishes processed video events

### 4. Watch Service
- Serves processed video content
- Provides streaming endpoints
- Delivers HLS streams to client

---

## 🔄 Event Flow (Kafka)

- Upload Service → produces `video_uploaded` event
- Transcode Service → consumes → processes → produces `video_processed`
- Watch Service → consumes → makes video available for streaming

---

## 🎬 Video Processing Pipeline

1. User uploads video (chunked upload)
2. Upload Service reconstructs and stores file
3. Kafka event triggers Transcode Service
4. FFmpeg processes video into:
   - Multiple resolutions
   - HLS format
5. Watch Service serves the final stream

---

## 📡 Streaming (HLS + Adaptive Bitrate)

- Uses HTTP Live Streaming (HLS)
- Videos are split into small chunks (.ts files)
- Playlist file (.m3u8) manages stream
- Enables adaptive bitrate streaming for smooth playback

---

## ⚙️ Tech Stack

### Backend
- Node.js
- Express.js
- Kafka

### Video Processing
- FFmpeg

### Streaming
- HLS

---

## 📦 Upload Optimization

- Multi-part uploads
- Chunk-based upload strategy
- Parallel uploading

---

## 🧠 Key Concepts

- Distributed Systems
- Event-driven Architecture
- Media Processing
- Scalable Upload Systems

---

## 🛠️ Setup

```bash
git clone https://github.com/yourusername/video-platform
```

---

## 👨‍💻 Author

Keshav Garg

- GitHub: https://github.com/keshavgarg5130 
- LinkedIn: https://linkedin.com/in/keshav-garg-9607a1208  
- X: https://x.com/@keshav5130
