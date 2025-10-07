<div align="center">

# 🔐 NExT-AUTH

### Modern Full-Stack Authentication System

<p>
  <strong>Secure user authentication built with Next.js 15, TypeScript, MongoDB, and Tailwind CSS</strong>
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.19-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Installation](#-quick-start) • [Documentation](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 📖 Overview

NExT-AUTH is a production-ready authentication system that provides secure user registration, email verification, JWT-based authentication, and password recovery. Built with modern web technologies and following industry best practices for security and user experience.

## ✨ Features

### Core Functionality
- 🔒 **JWT Authentication** - Secure token-based auth with HTTP-only cookies
- 📧 **Email Verification** - Automated email verification with Nodemailer
- 🔑 **Password Security** - Bcrypt hashing with 10 salt rounds
- 🛡️ **Route Protection** - Middleware-based authentication guards
- 🔄 **Password Recovery** - Secure password reset flow

### Developer Experience
- 🎯 **Type-Safe** - Full TypeScript support across the stack
- 🚀 **Next.js 15 App Router** - Server components and modern React patterns
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS v4
- 📱 **Mobile-First** - Fully responsive across all devices
- 🔔 **Real-time Feedback** - Toast notifications with react-hot-toast

---

## 🛠️ Tech Stack

<table>
<tr>
<td valign="top" width="50%">

### Frontend
- **Framework:** Next.js 15.5.4 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Library:** React 19
- **Notifications:** React Hot Toast
- **HTTP Client:** Axios

</td>
<td valign="top" width="50%">

### Backend
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing:** Bcryptjs
- **Email Service:** Nodemailer
- **API Routes:** Next.js API Routes

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 20+ ([Download](https://nodejs.org/))
- **MongoDB** database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **SMTP credentials** for email verification

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Subhadipjana95/NExT-START.git
cd nexty-first
```

**2. Install dependencies**

```bash
npm install
```

**3. Environment Configuration**

Create a `.env.local` file in the root directory and add the following variables:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# JWT Secret (use a strong random string)
TOKEN_SECRET=your_jwt_secret_key

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Domain for email verification links
DOMAIN=http://localhost:3000
```

> **📧 Gmail Setup:** Enable 2FA and generate an app password at [Google Account Settings](https://myaccount.google.com/apppasswords)  
> **🧪 Testing:** Use [Mailtrap](https://mailtrap.io) for development email testing

**4. Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
nexty-first/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── users/
│   │   │       ├── login/route.ts          # Login endpoint
│   │   │       ├── logout/route.ts         # Logout endpoint
│   │   │       ├── signup/route.ts         # Registration endpoint
│   │   │       └── verifyEmail/route.ts    # Email verification
│   │   ├── login/page.tsx                  # Login UI
│   │   ├── signup/page.tsx                 # Registration UI
│   │   ├── profile/
│   │   │   ├── page.tsx                    # User dashboard
│   │   │   └── [id]/page.tsx              # Dynamic user profile
│   │   ├── verifyEmail/page.tsx           # Email verification UI
│   │   ├── layout.tsx                      # Root layout + Toaster
│   │   ├── page.tsx                        # Landing page
│   │   └── globals.css                     # Global styles
│   ├── dbConfig/
│   │   └── dbConfig.ts                     # MongoDB connection config
│   ├── helpers/
│   │   └── mailer.ts                       # Email utility functions
│   ├── models/
│   │   └── userModel.ts                    # User Mongoose schema
│   └── middleware.ts                       # Auth middleware
├── .env.local                               # Environment variables
├── next.config.js                           # Next.js configuration
├── tailwind.config.js                       # Tailwind CSS config
├── tsconfig.json                            # TypeScript config
├── package.json
└── README.md
```

---

## 🔐 Authentication Flow

```
1. User Registration (Signup)
   ↓
2. Email Verification Sent
   ↓
3. User Clicks Verification Link
   ↓
4. Email Confirmed
   ↓
5. User Login
   ↓
6. JWT Token Issued (HTTP-only cookie)
   ↓
7. Access Protected Routes
```

### Security Features

- ✅ Bcrypt password hashing (10 salt rounds)
- ✅ JWT tokens in HTTP-only cookies
- ✅ Token expiration (1 day default)
- ✅ Email verification with 1-hour token expiry
- ✅ MongoDB connection pooling
- ✅ TypeScript type safety
- ✅ Environment variable protection

---

## 📄 API Documentation

### Endpoints

| Endpoint | Method | Description | Authentication |
|----------|--------|-------------|----------------|
| `/api/users/signup` | `POST` | Register new user | Public |
| `/api/users/login` | `POST` | Authenticate user | Public |
| `/api/users/logout` | `GET` | Clear auth token | Required |
| `/api/users/verifyEmail` | `POST` | Verify email token | Public |

### Pages

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page |
| `/signup` | Public | User registration form |
| `/login` | Public | User login form |
| `/profile` | Protected | User dashboard |
| `/profile/[id]` | Protected | Dynamic user profile |
| `/verifyEmail` | Public | Email verification handler |

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server on localhost:3000

# Production
npm run build        # Build production bundle
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint for code quality checks
```

---

## 🚀 Deployment

### Deploy on Vercel

The easiest deployment platform for Next.js applications:

1. **Push to GitHub** - Commit your code to a GitHub repository
2. **Import on Vercel** - Go to [vercel.com](https://vercel.com) and import your project
3. **Add Environment Variables** - Copy all variables from `.env.local` to Vercel project settings
4. **Deploy** - Vercel will automatically build and deploy your app

> **⚠️ Important:** Remember to add all environment variables (`MONGODB_URI`, `TOKEN_SECRET`, `SMTP_*`, `DOMAIN`) in your Vercel project settings

### Other Platforms

- **Railway** - [Deploy on Railway](https://railway.app)
- **Netlify** - [Deploy on Netlify](https://www.netlify.com)
- **Docker** - Create a `Dockerfile` for containerized deployment

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Subhadip Jana**

- GitHub: [@Subhadipjana95](https://github.com/Subhadipjana95)
- Project Link: [NExT-AUTH](https://github.com/Subhadipjana95/NExT-START)
- Live Link: [NExT-AUTHentication](https://nexty-auth.vercel.app/)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive Next.js guides
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [MongoDB](https://www.mongodb.com) - NoSQL database platform
- [Vercel](https://vercel.com) - Deployment and hosting platform

---

<div align="center">

### Made with ❤️ using Next.js

**If you find this project helpful, please consider giving it a ⭐**

[Report Bug](https://github.com/Subhadipjana95/NExT-START/issues) • [Request Feature](https://github.com/Subhadipjana95/NExT-START/issues)

</div>
