// ------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
// ------------------------------------------------------------

const express = require('express');
const bodyParser = require('body-parser');
require('isomorphic-fetch');

const app = express();
app.use(bodyParser.json());

const port = 3000;

function wait(second) {
    let ChildProcess_ExecSync = require('child_process').execSync;
    ChildProcess_ExecSync('sleep ' + second);
};

app.post('/sample-topic', (req, res) => {
//    console.log("Hello from Kafka!");
    console.log(req.body);
    res.status(200).send();
    wait(1);
});

app.listen(port, () => console.log(`Node App listening on port ${port}!`));
