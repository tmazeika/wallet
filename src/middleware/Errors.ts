import debug from 'debug';
import {NextFunction, Request, Response} from 'express';

const Youch = require('youch');

const log = debug('wallet:web');

export function notFound(req: Request, res: Response): void {
    res.status(404)
        .contentType('text/plain')
        .send('404 Not Found');
}

export function internalServerError(err: Error, req: Request, res: Response, next: NextFunction): void {
    log(err);

    new Youch(err, req)
        .toHTML()
        .then((html: any) =>
            res.status(500).send(html));
}
