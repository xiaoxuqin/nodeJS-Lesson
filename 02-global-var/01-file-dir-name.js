console.log('file name:', __filename);
console.log('dir name:', __dirname);

//01
var fileName = __dirname + '/views/view.html';
console.log('01 fileName:', fileName);

//02
switch(process.platform){
    case 'linux':
        fileName = __dirname + '/views/view.html';
        break;
    case 'win32':
        fileName = __dirname + '\\views\\view.html';
        break;
    default:
        fileName = 'something wrong';
}
console.log('02 fileName:', fileName);

//03
const path = require('path');
fileName = path.join(__dirname, 'views', 'view.html')
console.log('03 fileName:', fileName);