// import express from 'express';
// import { register, login, logout, deleteUser } from '../controllers/user.controller.js';
// import { authorization, requireAdmin } from '../middlewares/user.middleware.js'; // Correct import

// const userRouter = express.Router();

// userRouter.post('/register', register);
// userRouter.post('/login', login);
// userRouter.post('/logout', logout);
// userRouter.delete('/:id', authorization, requireAdmin, deleteUser); // Apply both middlewares

// export default userRouter;
import express from 'express';
import { register, login, logout, deleteUser } from '../controllers/user.controller.js';
import { authorization, requireAdmin } from '../middlewares/user.middleware.js';

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.delete('/:id', authorization, requireAdmin, deleteUser);

export default userRouter;

