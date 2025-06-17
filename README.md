# 🗺️ RoadmapResponder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-green.svg)](https://expressjs.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o--mini-orange.svg)](https://openai.com/)

> Generate professional responses to customer feature requests with AI assistance

RoadmapResponder is a web application that helps product managers and customer success teams craft thoughtful, professional responses to customer feature requests and feedback using OpenAI's GPT models.

## ✨ Features

- **AI-Powered Responses**: Generate contextual responses using OpenAI GPT-4o-mini
- **Multiple Templates**: Choose from various response templates:
  - Acknowledgment
  - Future Consideration
  - On the Radar
  - Decline Politely
- **Tone Selection**: Customize response tone:
  - Neutral
  - Friendly
  - Apologetic
- **Modern UI**: Beautiful, responsive interface built with React Bootstrap
- **Real-time Generation**: Fast response generation with loading states
- **Copy & Clear**: Easy clipboard integration and response management
- **Error Handling**: Comprehensive error handling and user feedback

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Docker & Docker Compose (optional)
- OpenAI API Key

### Environment Setup

1. Clone the repository:

```bash
git clone https://github.com/rodneygauna/RoadmapResponder.git
cd RoadmapResponder
```

2. Set up environment variables:

```bash
# In the backend directory, create a .env file
cd backend
echo "OPENAI_API_KEY=your_openai_api_key_here" > .env
```

### Running with Docker (Recommended)

```bash
docker-compose up --build
```

The application will be available at:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:3001](http://localhost:3001)

### Running Locally

#### Backend Setup

```bash
cd backend
npm install
npm start
```

#### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 🏗️ Project Structure

```text
RoadmapResponder/
├── backend/                    # Express.js API server
│   ├── Dockerfile              # Dockerfile for backend
│   ├── app.json                # Express app configuration
│   ├── server.js               # Server entry point
│   ├── routes/
│   │   └── ai.js               # OpenAI integration routes
│   ├── utils/
│   │   └── promptBuilder.js    # AI prompt construction
│   └── middleware/
│       └── errorMiddleware.js  # Error handling middleware
├── frontend/                   # React application
│   ├── src/
│   │   ├── App.jsx             # Main application component
│   │   └── main.jsx            # React entry point
│   ├── Dockerfile              # Dockerfile for frontend
│   ├── index.html              # HTML template
│   └── vite.config.js          # Vite configuration
├── docker-compose.yaml         # Docker orchestration
├── .env.example                # Example environment variables
└── README.md
```

## 🛠️ Technology Stack

### Frontend

- **React 19.1.0** - Modern UI library
- **React Bootstrap 2.10.10** - UI components and styling
- **Vite 6.3.5** - Fast build tool and dev server
- **Axios 1.10.0** - HTTP client for API requests

### Backend

- **Express 5.1.0** - Web application framework
- **OpenAI 5.5.0** - AI integration
- **CORS 2.8.5** - Cross-origin resource sharing
- **dotenv 16.5.0** - Environment variable management

### DevOps

- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📝 API Endpoints

### POST `/api/v1/ai/generate`

Generate an AI response to a customer request.

**Request Body:**

```json
{
  "requestText": "Customer's feature request or feedback",
  "template": "acknowledgment|future_consideration|on_the_radar|decline_politely",
  "tone": "neutral|friendly|apologetic"
}
```

**Response:**

```json
{
  "response": "Generated AI response text"
}
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for GPT access | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

### Rodney Gauna

- Website: [rodney.codes](http://rodney.codes)
- GitHub: [@rodneygauna](https://github.com/rodneygauna)

## 🙏 Acknowledgments

- OpenAI for providing the GPT API
- React and Bootstrap communities for excellent documentation
- All contributors and users of this project

---

Built with ❤️ using React, Express, and OpenAI GPT
