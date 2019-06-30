import {Server} from '@overnightjs/core';
import * as bodyParser from 'body-parser';
import debug from 'debug';
import express from 'express';
import * as path from 'path';
import * as controllers from './controllers';
import * as middleware from './middleware/index';

const log = debug('wallet:web');

export default class Web extends Server {

    private readonly root: string = path.resolve(__dirname, '..');

    constructor() {
        super(false);

        // configuration
        this.app.set('view engine', 'pug');
        this.app.set('views', path.join(this.root, 'src', 'views'));

        // bootstrapping
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));

        middleware.addFirst(this.app);

        this.app.use(express.static(path.join(this.root, 'static')));
        this.createControllers();

        middleware.addLast(this.app);
    }

    public start(host: string, port: number): void {
        this.app.listen(port, host, () => {
            log(`Server started at http://${host}:${port}`);
        });
    }

    private createControllers(): void {
        const instances = [];

        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const Controller = (controllers as any)[name];

                instances.push(new Controller());
            }
        }

        super.addControllers(instances);
    }
}
