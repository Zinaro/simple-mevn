import express from 'express';

// Create the Express server
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello');
});

// Start the server
app.listen(8000, () => {
  console.log(`Server listening on port 8000`);
});
