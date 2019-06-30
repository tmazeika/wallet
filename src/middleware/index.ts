import {Application} from 'express';
import {internalServerError, notFound} from './Errors';

export function addFirst(app: Application): void {
    //
}

export function addLast(app: Application): void {
    app.use(notFound);
    app.use(internalServerError);
}
