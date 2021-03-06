const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

// WILD CARD - anything else direct to landing page
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
});


// WILD CARD - anything else direct to landing page
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
});


app.listen(PORT, () => {
  console.log("Server is up and running on port", PORT);
});
