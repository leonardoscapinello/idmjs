import { Router } from 'express';

const routes = new Router();

routes.get('/cpf', (req, res) => {
  res.status(200).json({ ok: true });
});

export default routes;
