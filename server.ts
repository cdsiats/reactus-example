import express from 'express';
import { dev } from 'reactus';

const app = express();
const PORT = 3000;

const engine = dev({ 
  cwd: process.cwd(), 
  basePath: '/',
  clientRoute: '/client',
});

//middleware to handle public, assets, hmr
app.use(async (req, res, next) => {
  await engine.http(req, res);

  if (res.headersSent) return;
  next();
});

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(await engine.render('@/home', {title: 'Homepage'}));
});

//catch all route
app.use((req,res) => {
  res.status(404).send('404 not found.')
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});