import * as vscode from 'vscode';
import { ExcelEditor } from './excelEditor';

export function activate(context: vscode.ExtensionContext) {

	vscode.window.registerCustomEditorProvider("cweijan.viewExcel", new ExcelEditor(context));

}

export function deactivate() { }
