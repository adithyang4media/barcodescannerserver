const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/barcode', (req, res) => {
  const barcodeContent = req.body.barcodeContent;

  // Simulating server response with name and semester
  const name = 'John Doe';
  const semester = 'Fall 2023';

  res.json({ name, semester });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
