const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Airtable = require('airtable');
const app = express();
const base = new Airtable({ apiKey: 'YpategtnaZHuGXjQ6O.0f2df8d0859754fd11af1840fab0ff90e2164e4d71413582706625115514b4f2' }).base('appPCK4VBMWBLYOKa');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/ajouter-enregistrement', (req, res) => {
  const { name, email, number, date } = req.body;

  base('appPCK4VBMWBLYOKa').create([
    {
      "fields": {
        "Name": name,
        "email": email,
        "Number": number,
        "Date": date
      }
    }
  ], (err, records) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erreur lors de la création de l\'enregistrement.');
    }
    return res.status(200).send('Enregistrement créé avec succès.');
  });
});

app.listen(3000, function() {
  console.log('Server started on port http://localhost:3000');
});
