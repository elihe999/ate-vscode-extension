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
            return new vscode.Hover(`* **${word}**：\n* **Check**`);
        case 'Run':
            return new vscode.Hover(`* **${word}**：\n* **Action**`);
        case 'Puase':
            return new vscode.Hover(`* **${word}**：\n* **Action**`);
        case 'Var':
            return new vscode.Hover(`* **${word}**：\n* **Define**`);
    }
}

module.exports = function(context) {
    // 注册鼠标悬停提示
    context.subscriptions.push(vscode.languages.registerHoverProvider('gsate', {
        provideHover
    }));
};
