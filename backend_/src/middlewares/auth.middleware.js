// import jwt from 'jsonwebtoken';
// import User from '../models/user.model.js';

// // Middleware to check authentication and set req.user
// const authenticate = async (req, res, next) => {
//   const token = req.cookies.authToken || req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id); // Find user by ID from the token
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }
//     req.user = user; // Attach user to request object
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid or expired token', error: error.message });
//   }
// };

// export { authenticate };
