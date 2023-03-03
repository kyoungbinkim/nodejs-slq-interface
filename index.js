import userDB from "./src/db.js";

const DB = new userDB();

const CMD = process.argv[2];

if (CMD === 'INSERT' || CMD ==='i' || CMD === 'insert') {
    const id = process.argv[3];
    const pw = process.argv[4];
    const email = process.argv[5];

    await DB.INSERT_USER(
        id, pw, email
    );
}
else if (CMD === 'SELECT' || CMD === 's' || CMD === 'select') {
    const select = process.argv[3] ?? '*';
    const key = process.argv[4] ?? undefined;
    const value =process.argv[5] ?? undefined;

    await DB.SELECT(
        [select],
        'users',
        value ? {'key':key, 'value':value} : undefined
    )
}

process.exit(-1)