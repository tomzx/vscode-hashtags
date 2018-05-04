'use strict';

import * as vscode from 'vscode';
import { HashTagsCompletionItemProvider } from './hashtags_completion_item_provider';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "hashtags" is now active!');

	const selector = '*';
	const provider = new HashTagsCompletionItemProvider();
	const hashtagsTrigger = vscode.languages.registerCompletionItemProvider(selector, provider, '#');

	const findCommand = vscode.commands.registerCommand('hashtags.find', () => {
		vscode.window.showInformationMessage('Find!');
	});

	context.subscriptions.push(hashtagsTrigger);
	context.subscriptions.push(findCommand);
}

export function deactivate() {
}
