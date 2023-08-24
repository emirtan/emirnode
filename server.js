const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const dbURI = 'mongodb://localhost:27017/veritabani_adi'; // Veritabanı bağlantı adresini belirt
const items = [
    { id: 1, question: 'Computer Vision' },
    { id: 2, question: 'Data Science' },
    { id: 3, question: 'Feature Engineering' },
    { id: 4, question: 'Generative AI' },
    { id: 5, question: 'LLM' },
    { id: 6, question: 'NLP' },
    { id: 7, question: 'Pytorch' },
    { id: 8, question: 'Reinforcement Learning' },
    { id: 9, question: 'Speech Recognition' },
    { id: 10, question: 'Tensorflow' },
    { id: 11, question: 'Text Analytics' },
    { id: 12, question: 'Video Analytics' },
    { id: 13, question: 'Android' },
    { id: 14, question: 'Cordova' },
    { id: 15, question: 'Flutter' },
    { id: 16, question: 'iOS' },
    { id: 17, question: 'Linux' },
    { id: 18, question: 'MAUI' },
    { id: 19, question: 'React Native' },
    { id: 20, question: 'Unix' },
    { id: 21, question: 'DB Design Principles' },
    { id: 22, question: 'MongoDB' },
    { id: 23, question: 'MS SQL' },
    { id: 24, question: 'MySQL' },
    { id: 25, question: 'Oracle' },
    { id: 26, question: 'PostgreSQL' },
    { id: 27, question: 'Redis' },
    { id: 28, question: 'Bash' },
    { id: 29, question: 'C' },
    { id: 30, question: 'C#' },
    { id: 31, question: 'C++' },
    { id: 32, question: 'CSS' },
    { id: 33, question: 'Dart' },
    { id: 34, question: 'Go' },
    { id: 35, question: 'HTML' },
    { id: 36, question: 'Java' },
    { id: 37, question: 'Javascript' },
    { id: 38, question: 'Kotlin' },
    { id: 39, question: 'Objective-C' },
    { id: 40, question: 'Python' },
    { id: 41, question: 'Ruby' },
    { id: 42, question: 'Shell Script' },
    { id: 43, question: 'Swift' },
    { id: 44, question: 'TypeScript' },
    { id: 45, question: 'Appium' },
    { id: 46, question: 'Blazemeter' },
    { id: 47, question: 'Burpsuite' },
    { id: 48, question: 'Cucumber' },
    { id: 49, question: 'Cypress' },
    { id: 50, question: 'Jmeter' },
    { id: 51, question: 'K6' },
    { id: 52, question: 'Karate' },
    { id: 53, question: 'Postman' },
    { id: 54, question: 'Secguard' },
    { id: 55, question: 'Selenium' },
    { id: 56, question: 'Wireshark' },
    { id: 57, question: '.Net' },
    { id: 58, question: 'Angular' },
    { id: 59, question: 'ASP.NET' },
    { id: 60, question: 'CloudDragon' },
    { id: 61, question: 'Docker' },
    { id: 62, question: 'Express JS' },
    { id: 63, question: 'Firebase' },
    { id: 64, question: 'Flask' },
    { id: 65, question: 'Huawei Cloud' },
    { id: 66, question: 'Jenkins' },
    { id: 67, question: 'Node Js' },
    { id: 68, question: 'React' },
    { id: 69, question: 'Spring' },
    { id: 70, question: 'Vue JS' },
  ];
  

// CREATE
app.post('/createEmployee', (req, res) => {
    // Yeni bir öğe eklemek için veritabanına kayıt ekleyin
    const newItem = new Item({
        experience: req.body.experience,
        id: req.body.id,
        current: req.body.current,
        answers: req.body.answers,
        question: req.body.target,
        target: req.body.target
      });
    
      newItem.save((err, item) => {
        if (err) {
          res.status(500).json({ error: 'Veri kaydedilemedi' });
        } else {
          res.status(201).json(item);
        }
      });
  });
    
  // Get all questions
  app.get('/questions', (req, res) => {
    res.send(items)
    // Tüm öğeleri listelemek için veritabanından(array) verileri çekin
  });
  
  app.get('/employees', (req, res) => {
    Item.find({}, (err, items) => {
      if (err) {
        res.status(500).json({ error: 'Data couldnt read' });
      } else {
        res.status(200).json(items);
      }
    });
  });

  app.get('/employees/:id', (req, res) => {
    const itemId = req.params.id;

    Item.findById(itemId, (err, item) => {
      if (err) {
        res.status(500).json({ error: 'Data couldnt read' });
      } else {
        if (!item) {
          res.status(404).json({ error: 'Data couldnt found' });
        } else {
          res.status(200).json(item);
        }
      }
    });

    // Belirli bir öğeyi almak için veritabanından veriyi çekin
    });
  
  // UPDATE
  app.put('/employees/:id', (req, res) => {
    // Bir öğeyi güncellemek için veritabanında güncelleme yapın
  });
  
  // DELETE
  app.delete('/employees/:id', (req, res) => {
    // Bir öğeyi silmek için veritabanından veriyi kaldırın
  });
  

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});



