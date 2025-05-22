const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require("node:path");

// const hello = 'Hello world!';
// console.log(hello);

///////////////////////
// files

// Blocking , synchronous way
// const textIn= fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
//
// const textOut = `This is what we know about avocado: ${textIn}. \n Create on ${Date.now()}\n`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File is written successfully.');

// non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8',(err, data1) => {
//     if (err) throw err;
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8',(err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8',(err, data3) => {
//             console.log(data3);
//             fs.writeFile(`./txt/final.txt`,`${data2}\n${data3}`, `utf-8`,(err) => {
//                 console.log("File has been written.")
//             })
//         })
//     })
//     // console.log(data1);
//     // if (err) throw err;
// })

// console.log('It will read the file.');

// Server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);

    const pathName = req.url;
    if(pathName === '/overview' || pathName === '/') {
        res.end('This is the overview page!');
    } else if (pathName === '/product') {
        res.end('This is the product page!');
    } else if (pathName === '/api') {

        // fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8', (err, data) => {
        //         const productData = JSON.parse(data);
        //         res.writeHead(200, {'Content-Type': 'application/json'});
        //         res.end(data);
        // });

        // res.end('API');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
    }
    else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-head' : 'hello world'
        });
        res.end('<h1>Page not found!</h1>');
    }

});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server started and listening on port 8080');
});


