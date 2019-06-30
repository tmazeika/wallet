import * as assert from 'assert';
import Web from './Web';

const web = new Web();
const host = process.env.WEB_HOST;
const port = process.env.WEB_PORT;

assert.ok(host);
assert.ok(port);

web.start(String(host), Number(port));
