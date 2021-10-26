import morgan from 'morgan';
import fileSystem from "fs";
import path from "path";

const logger=()=> {
     morgan('combined', {
        stream: fileSystem.createWriteStream(
            path.join(__dirname, './access.log'), {flags: 'a'})
    });
     return 'logging'
}
export {logger}