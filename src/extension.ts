'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "hashtags" is now active!');

    let findCommand = vscode.commands.registerCommand('hashtags.find', () => {
        vscode.window.showInformationMessage('Find!');
    });

    context.subscriptions.push(findCommand);
}

export function deactivate() {
}
