import chalk from 'chalk';
import app from './app';
import auth from './config/auth';

const port = process.env.PORT || auth.serverPort;

app.listen(port);

console.log(chalk.green.blue(`Application is running on the port ${port}`));
