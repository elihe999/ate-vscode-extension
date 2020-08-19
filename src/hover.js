const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

/**
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 */
function provideHover(document, position, token) {
    const fileName    = document.fileName;
    const workDir     = path.dirname(fileName);
    const word        = document.getText(document.getWordRangeAtPosition(position));

    switch (word) {
        case 'API':
            return new vscode.Hover(`* **${word}**：\n* **Action**`);
        case 'Syslog':
            return new vscode.Hover(`* **${word}**：\n* **Check syslog from target device**`);
        case 'Run':
            return new vscode.Hover(`* **${word}**：\n* **Run a script**`);
        case 'Pause':
            return new vscode.Hover(`* **${word}**：\n* **Pause msec**`);
        case 'Var':
            return new vscode.Hover(`* **${word}**：\n* **Define parameter**`);
        case 'String:DialStr':
            return new vscode.Hover(`* **${word}**: \n* **DialStr use to transform DialKey API value to normal string** \n* ** e.g 1:1:1 -> 111**`);
        case 'Vector':
            return new vscode.Hover(`* **${word}**：\n* **Stack one or more parameters into a vector**`);
    }
}

module.exports = function(context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('gsate', {
        provideHover
    }));
};
