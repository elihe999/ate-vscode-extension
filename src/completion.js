const vscode = require('vscode');
const util = require('./util');

/**
 * @param {*} document 
 * @param {*} position 
 * @param {*} token 
 * @param {*} context 
 */
function provideCompletionItems(document, position, token, context) {
    const line        = document.lineAt(position);

    const lineText = line.text.substring(0, position.character);
    if (/API:/.test(lineText)) {
        vscode.window.showInformationMessage(`API is use to send a CGI-bin to device`);
    }
    if (/String:/.test(lineText)) {
        vscode.window.showInformationMessage(`String is use to translate the string format`);
    }
    if(/API:/.test(lineText)) {
        const test = Object.keys({
            "Key": "1222",
            "Capture": "1122",
            "Init": "",
            "SoftKey": "",
            "Config": "",
            "Reboot": "",
            "Reset": "",
            "Provision": "",
            "Get": ""
        });
        return test.map(dep => {
            return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Field);
        })
    }
    if(/String:/.test(lineText)) {
        const test = Object.keys({
            "Transform": "",
            "DialStr": "",
            "Replace": "",
            "Append": "${1:string} ${2:string}"
        });
        return test.map(dep => {
            return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Field);
        })
    }
}

/**
 * @param {*} item 
 * @param {*} token 
 */
function resolveCompletionItem(item, token) {
    return null;
}

module.exports = function(context) {
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('gsate', {
        provideCompletionItems,
        resolveCompletionItem
    }, ':'));
};
