const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const indexPath = path.join(__dirname, 'index.html');

  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err); 
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        return;
      }

      const script1Path = path.join(__dirname, 'scripts', 'script1.js');
      const script2Path = path.join(__dirname, 'scripts', 'script2.js');
      const stylePath = path.join(__dirname, 'styles', 'index.css');

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

          fs.readFile(stylePath, 'utf8', (err, style) => {
            if (err) {
              console.error(err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'text/plain');
              res.end('Internal Server Error');
              return;
            }

            data = data.replace('<script src="scripts/script1.js"></script>', `<script>${script1}</script>`);
            data = data.replace('<script src="scripts/script2.js"></script>', `<script>${script2}</script>`);
            data = data.replace('<link rel=\'stylesheet\' type=\'text/css\' media=\'screen\' href=\'styles/index.css\'>', `<style>${style}</style>`);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
          });
        });
      });
    });
  } else if (req.url === '/styles/fonts/Minecraftory.ttf') {
    const fontPath = path.join(__dirname, 'styles', 'fonts', 'Minecraftory.ttf');
    
    fs.readFile(fontPath, (err, fontData) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'font/ttf');
      res.end(fontData);
    });
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

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
