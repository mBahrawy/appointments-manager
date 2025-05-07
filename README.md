# 42 Group Task - Appointment Management System

A modern, feature-rich appointment management system built with Angular and PrimeNG, featuring a beautiful UI and robust functionality.

## 🚀 Features

- Appointment scheduling and management
- Multiple appointment types (CheckUp, Consultation, FollowUp, Emergency)
- Real-time status tracking
- Client information management
- Responsive design with RTL support
- Rich text editing capabilities
- Secure content sanitization

## 🛠️ Technology Stack

### Core Technologies
- Angular 19.2.0
- TypeScript 5.7.2
- RxJS 7.8.0
- NgRx 19.1.0 (State Management)

### UI Components & Styling
- PrimeNG 19.1.2
- TailwindCSS 4.1.5
- TailwindCSS RTL 0.9.0
- Icomoon (font icon generator) Icons
- Quill Rich Text Editor

### Security
- DOMPurify for XSS protection

## 📁 Project Structure

```
src/
├── app/
│   ├── features/
│   │   └── appointment/
│   │       ├── components/
│   │       ├── constants/
│   │       ├── models/
│   │       └── services/
│   ├── shared/
│   └── core/
├── assets/
├── environments/
└── styles.scss
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone `https://github.com/mBahrawy/appointments-manager`
cd 42-group-task
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200/`

### Build

To build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

Run the unit tests:
```bash
npm test
```

## 🔧 Configuration

The project uses several configuration files:
- `angular.json` - Angular workspace configuration
- `tailwind.config.js` - TailwindCSS configuration
- `tsconfig.json` - TypeScript configuration
- `.editorconfig` - Editor configuration

## 📝 Code Style

The project follows Angular's style guide and uses:
- TypeScript strict mode
- ESLint for code linting
- Prettier for code formatting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Mohamed A. Bahrawy - Initial work

## 🙏 Acknowledgments

- Angular Team
- PrimeNG Team
- TailwindCSS Team
