import authConfig from '../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers;

  if (!authHeader) {
    return res
      .status(401)
      .json({ error: 'You must provide authorization key' });
  }

  const { authorization } = req.headers;

  try {
    if (authorization === authConfig.secret) {
      return next();
    }

    return res.status(401).json({ error: 'Invalid authorization key' });
  } catch (err) {
    return res.status(401).json({ error: 'Invalid authorization key' });
  }
};
