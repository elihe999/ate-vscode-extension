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
    vscode.window.showInformationMessage(`111 ${/API:/.test(lineText)}`);
    
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
