import { DBinterface } from "./db.interface.js";

export default class userDB extends DBinterface{
    constructor(){
        super();
        this.tableName = 'users';
    }

    async INSERT_USER(
        id,
        pw,
        email
    ){
        try {
            return await this.INSERT(
                this.tableName,
                ['ID', 'PW', 'EMAIL'],
                [id, pw, email]
            )
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}