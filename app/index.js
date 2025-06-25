const express = require('express');
const app = express();

app.get('/twitch/callback', (req, res) => {
  const code = req.query.code;
  const error = req.query.error;

  if (code) {
    res.send(`Authorization successful! Code: ${code}`);
    console.log(`Received code: ${code}`);
  } else if (error) {
    res.send(`Authorization failed: ${error}`);
    console.log(`Authorization error: ${error}`);
  } else {
    res.send('No code or error received.');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
