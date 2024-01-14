import * as fs from 'fs';
import * as os from 'os';
function isComment(line: string) {
    return /(\S+)?\#/gi.test(line);
}

function isWindows() {
    return os.type() == 'Windows_NT';
}
function getHostPath() {
    return isWindows()
        ? 'C:\\Windows\\System32\\drivers\\etc\\hosts'
        : '/etc/hosts';
}
const HOSTPATH = getHostPath();
function getHostContent() {
    return fs.readFileSync(HOSTPATH, 'utf-8');
}
function getHostContentArray() {
    return getHostContent().split('\n');
}

export function add(ip: string, host: string) {
    return fs.appendFileSync(HOSTPATH, `${ip}\t${host}\n`);
}
export function remove(str: string) {
    return fs.writeFileSync(
        HOSTPATH,
        getHostContentArray()
            .filter((line) => line.indexOf(str) === -1)
            .join('\n')
    );
}
/**
 *
 * @param ip 需要更新的 IP
 * @param hostname 需要更新的 hostname
 */
export function update(ip: string, host: string) {
    let has = false;
    return fs.writeFileSync(
        HOSTPATH,
        getHostContentArray()
            .map((line) => {
                if (line.indexOf(ip) !== -1 || line.indexOf(host) !== -1) {
                    if (has) return '';
                    has = true;
                    return `${ip}\t${host}`;
                }
                return line;
            })
            .join('\n')
    );
}
console.log(HOSTPATH, getHostContentArray());
