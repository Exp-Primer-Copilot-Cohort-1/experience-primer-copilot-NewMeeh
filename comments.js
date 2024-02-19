// Create web server
// Create a web server that listens on port 3000, and returns the following response:

// {
//   "comments": [
//     {
//       "username": "dicoding",
//       "comment": "Keren banget!"
//     },
//     {
//       "username": "budi",
//       "comment": "Sangat bermanfaat."
//     }
//   ]
// }
// Note: The response is a JSON string.

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.end(JSON.stringify({
        comments: [
            {
                username: 'dicoding',
                comment: 'Keren banget!'
            },
            {
                username: 'budi',
                comment: 'Sangat bermanfaat.'
            }
        ]
    }));
});

server.listen(3000);
console.log('Server is listening on port 3000');