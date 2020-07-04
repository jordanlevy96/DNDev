# DNDev
An ElectronJS-based project with the goal of organizing D&amp;D notes and generating usable content for the game.

## Components

### Electron/React
The app's front-end is an electron browser running React. React's single-page paradigm works well in Electron's environment, and the virtual DOM is great for dynamic content such as moving maps and updating notes.

### Node/Express
There is currently a separate layer of an Express webservice to handle outgoing requests. It may be best to roll this into the Electron layer, but this is still currently operating independently.

### Python
I am planning to use Python to handle application logic in a tidy, object-oriented manner. I can also use sqlite3 built into Python to save user data instead of leveraging additional technologies or *shudders* putting everything into JSON.

## Startup
Instructions to start the program.

TODO: production build

### Electron/React
I have created a pm2 ecosystem file to run the electron/react layer and a shell script to tidy up execution, so running that is as simple as running
```bash
bash electron/run.sh
```
OR

Run in debug mode through VSCode using a browser.

### Node/Express
Install dependencies
```bash
npm install
```

Run webservice
```bash
npm start
```

OR

Run in debug mode through VSCode.

### Python
Code is pure POC, run from commandline to test:
```bash
python main.py
```
TODO: call from JS code
