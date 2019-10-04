import express from "express";
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
import Index from '../src/index';

const PORT = process.env.PORT || 3020;

const html = fs.readFileSync('build/index.html').toString();

const parts = html.split('not rendered');

const app = express();

app.use('/build', express.static("build"));
app.use((req, res) => {
    const reactMarkup = (
        <ServerLocation url={req.url}>
            <Index />
        </ServerLocation>
    )
    res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
    res.end()
})

console.log('listening on: ' + PORT);
app.listen(PORT);