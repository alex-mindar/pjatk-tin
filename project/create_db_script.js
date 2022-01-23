const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9';

// sample data
const managers = [
    { name: 'Oleksii', surname: 'Myndar', birthDate: '30-12-1999', salary: '100000' },
    { name: 'Tomasz', surname: 'Pieciukiewicz', birthDate: '29-12-1989', salary: '90000' },
    { name: 'Tomasz', surname: 'Werner', birthDate: '28-12-1979', salary: '90000' },
    { name: 'Susan', surname: 'Wojcicki', birthDate: '27-12-1979', salary: '500000' }
]

const youtubers = [
    { name: 'Felix', surname: 'Arvid', youtubeUsername: 'PewDiePie', youtubeRegistrationDate: '29-04-2010' },
    { name: 'Alix', surname: 'Fervid', youtubeUsername: 'NovaPipeBomb', youtubeRegistrationDate: '29-04-2009' },
    { name: 'Diverd', surname: 'Harvex', youtubeUsername: 'PipeNovaBomb', youtubeRegistrationDate: '29-11-2008' },
    { name: 'Parpex', surname: 'Cowex', youtubeUsername: 'BombPipeNova', youtubeRegistrationDate: '28-10-2007' },
    { name: 'Pompers', surname: 'Suckwex', youtubeUsername: 'PipeBombNova', youtubeRegistrationDate: '27-09-2006' },
    { name: 'Carl', surname: 'Poops', youtubeUsername: 'NovaNovaPipe', youtubeRegistrationDate: '25-08-2005' },
    { name: 'Railey', surname: 'Schmon', youtubeUsername: 'PipePipeNova', youtubeRegistrationDate: '13-07-2004' },
    { name: 'Ricardo', surname: 'Abardi', youtubeUsername: 'BombNovaBomb', youtubeRegistrationDate: '15-06-2003' },
    { name: 'Vladimir', surname: 'Putin', youtubeUsername: 'NovaBombNova', youtubeRegistrationDate: '05-05-2002' },
    { name: 'Caisey', surname: 'Neistat', youtubeUsername: 'CaiseyNeistat', youtubeRegistrationDate: '06-04-2001' }
]

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db('tin-project');
  dbo.createCollection('managers', function(err) {
    if (err) throw err;
    console.log('Collection [managers] created!');
    db.close();
  });
  dbo.createCollection('youtubers', function(err) {
    if (err) throw err;
    console.log('Collection [youtubers] created!');
    db.close();
  });
  dbo.collection('managers').insertMany(managers, function(err, res) {
    if (err) throw err;
    console.log("Number of managers inserted: " + res.insertedCount);
    db.close();
  });
  dbo.collection('youtubers').insertMany(youtubers, function(err, res) {
    if (err) throw err;
    console.log("Number of youtubers inserted: " + res.insertedCount);
    db.close();
  });
});