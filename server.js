const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/main') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        console.error(err); 
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        return;
      }

      const script1Path = path.join(__dirname, 'scripts', 'script1.js');
      const script2Path = path.join(__dirname, 'scripts', 'script2.js');
      const script3Path = path.join(__dirname, 'scripts', 'script3.js');
      const script4Path = path.join(__dirname, 'scripts', 'script4.js');
      const stylePath = path.join(__dirname, 'styles', 'style.css');

      fs.readFile(script1Path, 'utf8', (err, script1) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Internal Server Error');
          return;
        }

        fs.readFile(script2Path, 'utf8', (err, script2) => {
          if (err) {
            console.error(err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Internal Server Error');
            return;
          }

          fs.readFile(script3Path, 'utf8', (err, script3) => {
            if (err) {
              console.error(err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'text/plain');
              res.end('Internal Server Error');
              return;
            }

            fs.readFile(script4Path, 'utf8', (err, script4) => {
              if (err) {
                console.error(err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Internal Server Error');
                return;
              }

              fs.readFile(stylePath, 'utf8', (err, style) => {
                if (err) {
                  console.error(err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'text/plain');
                  res.end('Internal Server Error');
                  return;
                }

                data = data.replace('<script src="scripts/script3.js"></script>', `<script>${script3}</script>`);
                data = data.replace('<script src="scripts/script2.js"></script>', `<script>${script2}</script>`);
                data = data.replace('<script src="scripts/script1.js"></script>', `<script>${script1}</script>`);
                data = data.replace('<script src="scripts/script4.js"></script>', `<script>${script4}</script>`);
                data = data.replace('<link rel=\'stylesheet\' type=\'text/css\' media=\'screen\' href=\'styles/style.css\'>', `<style>${style}</style>`);

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
              });
            });
          });
        });
      });
    });
  } else if(req.url === '/play?id=1') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map1');
  } else if(req.url === '/play?id=2') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map2');
  } else if(req.url === '/play?id=3') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map3');
  } else if(req.url === '/play?id=4') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map4');
  } else if(req.url === '/play?id=5') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map5');
  } else if(req.url === '/play?id=6') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map6');
  } else if(req.url === '/play?id=7') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map7');
  } else if(req.url === '/play?id=8') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map8');
  } else if(req.url === '/play?id=9') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map9');
  } else if(req.url === '/play?id=10') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('play map10');
  } else {
    const staticPath = path.join(__dirname, req.url);

    fs.readFile(staticPath, (err, staticData) => {
      if (err) {
        console.error(err);
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(staticData);
    });
  }
});

server.listen(port, hostname);
