const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 // res.end('Hello World this is chetan badgujar ');
  res.end(`<style>
          @keyframes spin {from {} to {transform:rotate(360deg);}}
          .spin:hover {animation-name:spin;animation-duration:3s;position:absolute;}
      </style>
      <br><br><span class="spin">Hover To Spin!</span><a target="_blank" href="http://free-web-tools.com" style="text-decoration:none;bottom:0;left:10px;font-size:5pt;color:gray;position:absolute">free web tools</a><a target="_blank" href="http://www.htmlfreecodes.com" style="font-size: 8pt; text-decoration: none">Html Codes</a> `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});