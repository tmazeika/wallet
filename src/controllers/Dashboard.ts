import {Controller, Get} from '@overnightjs/core';
import {Request, Response} from 'express';

@Controller('/')
export class Dashboard {

    @Get('/')
    private show(req: Request, res: Response) {
        res.render('dashboard', {
            title: 'Dashboard',
        });
    }
}
