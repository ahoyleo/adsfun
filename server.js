const express = require('express');
const app = express();
/* eb configures the proxy to forward requests to application on port 8080 */
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
