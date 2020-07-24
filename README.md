
# VSCode automatically saves file while debugging using nodemon

This is just an example that represents the issue.
https://github.com/microsoft/vscode-node-debug2/issues/257

## To test it

1. run this in terminal `npm run watch:static`
2. run a `nodemon` debugger inside VSCode
3. open `src/server.js`, save file and start typing for few seconds

## Whats happening

Every time when nodemon gets triggered inside the debugger, it saves all unsaved files. Which after that triggers rebuilding of the dist folder and creating a loop.

It makes bad experience, if for example I have other in-progress files or continuing working with file that I just saved.

You can also try default nodemon version `npm run dev`
