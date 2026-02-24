## Baileys WhisykeySocket
<p align='center'>
  <img src="https://files.catbox.moe/hwc7wy.jpg" width="500">
</p>

--- 

## Usage
```json
"depencies": {
  "@whiskeysockets/baileys": "github:KingGupong/baileys"
}
```
## Import
```javascript
const {
  default:makeWASocket,
  // Other Options 
} = require('@whiskeysockets/baileys');
```


## Tutorial !
```javascript
const {
  default: makeWASocket,
  fetchLatestWAWebVersion
} = require('@whiskeysockets/baileys');

const client = makeWASocket({
  browser: ['Ubuntu', 'Chrome', '20.00.1'],
  printQRInTerminal: false,
  version: fetchLatestWAWebVersion()
  // Other options
});
