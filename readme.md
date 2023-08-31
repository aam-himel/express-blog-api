# Blog api

## packages

- **express:** Express is still the web framework for your API.
- **jsonwebtoken:** For JWT token creation and verification.
- **bcrypt:** To securely hash passwords.
- **body-parser** Middleware for parsing incoming request bodies.
- **prisma:** Prisma is the ORM that allows you to work with your PostgreSQL database.
- **dotenv:** To manage environment variables.

## project folder structure

```
- src
  - configs
  - controller
  - middlewares
  - models
  - routes
  - servcies
  - utils
  - test
```

### 1. MVC (Model-View-Controller):

```bash
blog-api/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── AuthModel.js
│   │   ├── PostModel.js
│   │   └── UserModel.js
│   ├── views/
│   │   ├── authView.js
│   │   ├── postView.js
│   │   └── userView.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   ├── jwtUtils.js
│   │   └── validation.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
├── prisma/
│   ├── schema.prisma
│   └── seed.js
└── README.md

```

### 2. Feature-Based Structure:

```bash
blog-api/
├── src/
│   ├── auth/
│   │   ├── authController.js
│   │   ├── authRoutes.js
│   │   └── authMiddleware.js
│   ├── posts/
│   │   ├── postController.js
│   │   ├── postRoutes.js
│   │   └── postMiddleware.js
│   ├── users/
│   │   ├── userController.js
│   │   ├── userRoutes.js
│   │   └── userMiddleware.js
│   ├── utils/
│   │   ├── jwtUtils.js
│   │   └── validation.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
├── prisma/
│   ├── schema.prisma
│   └── seed.js
└── README.md

```

### 3. Layered Architecture:

```bash
blog-api/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── userController.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── postService.js
│   │   └── userService.js
│   ├── repositories/
│   │   ├── authRepository.js
│   │   ├── postRepository.js
│   │   └── userRepository.js
│   ├── middlewares/
│   │   ├── authenticate.js
│   │   └── errorHandling.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   ├── jwtUtils.js
│   │   └── validation.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
├── prisma/
│   ├── schema.prisma
│   └── seed.js
└── README.md

```
