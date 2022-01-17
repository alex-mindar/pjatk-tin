const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Available endpoints: /add /subtract /multiply /divide. Include x and y parameters in the query');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function checkParameters(x, y, res) {
    if (typeof x !== 'undefined' && typeof y !== 'undefined' && !isNaN(+x) && !isNaN(+y)) {
        return true
    } else {
        res.statusCode = 400;
        res.end(JSON.stringify({
            error_message: 'Send valid x and y parameters'
        }));
    }
}

server.on('request', function(req, res) {
    const endpoint = url.parse(req.url).pathname;
    const queryObject = url.parse(req.url, true).query;

    if (checkParameters(queryObject.x, queryObject.y, res)) {
        if (endpoint === '/add') {
            const result = +queryObject.x + +queryObject.y
            res.statusCode = 200
            res.end(JSON.stringify({
                x: queryObject.x,
                y: queryObject.y,
                result
            }))
        }

        if (endpoint === '/subtract') {
            const result = +queryObject.x - +queryObject.y
            res.statusCode = 200
            res.end(JSON.stringify({
                x: queryObject.x,
                y: queryObject.y,
                result
            }))
        }

        if (endpoint === '/multiply') {
            const result = +queryObject.x * +queryObject.y
            res.statusCode = 200
            res.end(JSON.stringify({
                x: queryObject.x,
                y: queryObject.y,
                result
            }))
        }

        if (endpoint === '/divide') {
            const result = +queryObject.x / +queryObject.y
            res.statusCode = 200
            res.end(JSON.stringify({
                x: queryObject.x,
                y: queryObject.y,
                result
            }))
        }
    }
});