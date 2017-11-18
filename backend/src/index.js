import express from 'express';

const app = express();

app.listen(8080, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: 8080`);
  }
});
