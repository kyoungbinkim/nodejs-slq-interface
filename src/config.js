import _ from 'lodash'
import bluebird from 'bluebird';

const mysqlConfig = {
    host    : 'localhost',
    user    : 'nodejs_sql',
    password: 'node_sql1580`',
    database: 'user_DB',
    Promise : bluebird,
};

export const enterPw = () =>{
    const pw = process.argv[2];

    if(pw === undefined) {
        console.log('write your mysql root pw')
        process.exit(-1);
    }

    _.set(mysqlConfig, 'password', pw);
}

export default mysqlConfig;