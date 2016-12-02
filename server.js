/**
 * @file fontstore 字体同步服务
 * @author Varsha
 */

var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

function getFontPath(req) {
    var urlData = url.parse(req.url, true);
    var pathname = urlData.pathname;
    var dirPath = path.dirname(pathname).slice(1);

    return path.resolve(process.cwd(), dirPath);
}

function getFontData(data) {
    data= Buffer.concat(data).toString();
    return querystring.parse(data);
}

function writeFiles(fontData, fontPath) {
    var fontName = fontData.fontName;
    var encode = fontData.encode;
    var fontTypes = fontData.fontType.split(',');

    for (var i = 0, len = fontTypes.length; i < len; i++) {
        var type = fontTypes[i];
        var filePath = path.resolve(fontPath, fontName + '.' + type);
        writeFontFile(fontData[type], filePath, encode);
    }
}

function writeFontFile(data, filePath, encode) {
    try {
        fs.writeFileSync(filePath, new Buffer(data, 'base64'), encode);
        console.log('>> File: ' + filePath + ' sync success!');
    }
    catch (exp) {
        console.log('>> Error syncing font data to: ' + filePath
            + '\n' + exp.message);
    }

}

exports.start = function (options) {
    var port = options.port;

    var server = http.createServer(function (req, res) {

        var fontPath = getFontPath(req);

        var data = [];
        req.on('data',function(reqData){
            data.push(reqData);
        });

        req.on('end', function () {
            var fontData = getFontData(data);
            writeFiles(fontData, fontPath);
        });

    }).listen(port);

    console.log('\nFontStore WebServer Listened at port:', port);

}

