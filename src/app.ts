import express from 'express';

import bodyParser from 'body-parser';
// Create Express server
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// tslint:disable-next-line: only-arrow-functions
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // tslint:disable-next-line: max-line-length
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Pass to next layer of middleware
    next();
});

// Controllers (route handlers)
import * as Routes from './Routes/Routes';

/**
 * Primary app routes.
 */
// app.get('/', Routes.welcomeRoute);
app.get('/build/projectName/projectArea/commitId', Routes.startJenkinsJob);

app.listen(app.get('port'), () => {
    console.log(
        '  App is running at http://localhost:%d in %s mode'
    );
    console.log('Press CTRL-C to stop\n');
});
export default app;
