"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

let NEXT_TERM_ID = 1;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "angular-cli-menu-integration" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.ngGenerateComponent",
    () => {
      // The code you place here will be executed every time your command is executed

      vscode.window
        .showInputBox({
          value: "",
          placeHolder: "Enter a valid component name",
          validateInput: text => {
            return text === "" ? "Please enter a valid name" : null;
          }
        })
        .then(result => {
          const terminal = vscode.window.createTerminal(
            `Ext Terminal #${NEXT_TERM_ID++}`
          );
          terminal.sendText(`ng generate component ${result}`);
          //terminal.
          // Display a message box to the user
          vscode.window.showInformationMessage(
            `Component ${result} Generated Successfully!`
          );
        });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
