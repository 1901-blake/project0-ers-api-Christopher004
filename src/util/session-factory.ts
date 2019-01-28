import {Pool} from 'pg';

export class SessionFactory{
    static cred = {
        database: revature_project0 ,
        host: christopher-revature-1901.c3bwynw3py6j.us-east-2.rds.amazonaws.com ,
        user: christopher004 ,
        password:  ,
        max: 10
    }
}

static pool: Pool;

static created = false;
