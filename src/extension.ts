'use strict';

import * as vscode from 'vscode';
import { HashTagsCompletionItemProvider } from './hashtags_completion_item_provider';
import { HashtagsDocumentLinkProvider } from './hashtags_document_link_provider';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "hashtags" is now active!');

	const selector = '*';
	const completionItemProvider = new HashTagsCompletionItemProvider();
	const completionItemProviderDisposable = vscode.languages.registerCompletionItemProvider(selector, completionItemProvider, '#');

	const documentLinkProvider = new HashtagsDocumentLinkProvider();
	const documentLinkProviderDisposable = vscode.languages.registerDocumentLinkProvider(selector, documentLinkProvider);

	const findCommand = vscode.commands.registerCommand('hashtags.find', () => {
		vscode.window.showInformationMessage('Find!');
	});

	context.subscriptions.push(completionItemProviderDisposable);
	context.subscriptions.push(documentLinkProviderDisposable);
	context.subscriptions.push(findCommand);
}

export function deactivate() {
}
