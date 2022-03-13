import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (user) => {
  const access_token = jwt.sign(
    {
      user_id: user.id,
      full_name: user.full_name,
      role: user.role,
    },
    process.env.ACCESS_TOKEN,
  );

  return access_token;
};

export const verifyToken = (type) => async (req, res, next) => {
    try {
      const token = req.headers['x-access-token'];
      if (!token) {
        return res.status(403).json({
          status: 'Forbidden',
          message: 'Access Denied',
        });
      }
  
      const tokenValidated = jwt.verify(token, process.env.ACCESS_TOKEN);
      if (type === 'admin') {
        req.admin = tokenValidated;
      }
      req.user = tokenValidated;
      return next();
    } catch (err) {
      return res.status(403).json({
        status: 'Failed',
        message: 'Unable to authenticate token.',
      });
    }
  };
  
  export const checkIfUserIsAdmin = async (req, res, next) => {
    try {
      if (!req.admin) {
        return res.status(403).json({
          status: 'Forbidden',
          message: 'Access Denied For User',
        });
      }
      return next();
    } catch (error) {
      return next(error);
    }
  };