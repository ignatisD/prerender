#!/usr/bin/env node
var dotenv = require("dotenv");
var prerender = require('./lib');

dotenv.config();
var server = prerender();

server.use(require('prerender-memory-cache'));
server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
