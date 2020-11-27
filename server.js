const express = require("express");
const server = express();
const arg = process.argv



server.listen(4242,function() {
console.log('Server is listening on http://localhost:' + arg[2] );
});
