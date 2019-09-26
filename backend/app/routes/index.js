import { Router } from 'express';
import validations from './checkers/validations';

import User from '../models/User';

const routes = new Router();
let server_url = '';

//

routes.get('/', async (req, res) => {
  await User.findOrCreate({
    where: { email: 'administrator' },
    defaults: {
      name: 'Administrator',
      email: 'administrator',
      password_hash: 'changeit',
    },
  }).then(error => {
    return error;
  });

  server_url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  res.status(200).send({
    address: server_url,
    status: 200,
    message: 'Server are up and running',
    documentation: `${server_url}docs`,
  });
});

// routes.use('/auth', require('./rouauth'));
routes.use('/validations', validations);

routes.all('*', (req, res) => {
  server_url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  res.status(404).send({
    address: server_url,
    status: 404,
    message: 'This page has not been found',
  });
});

export default routes;
