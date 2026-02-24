"use strict";

const chalk = require("chalk");

console.log(chalk.hex("#6f00f")(`
╔═══『 🔥 𝗕𝗔𝗜𝗟𝗘𝗬𝗦 𝗠𝗜𝗗𝗢 𝟮𝟬𝟮𝟲 🔥 』═══╗

⚡ FIXED PAIRING ERROR CONNECTION
⚡ FIXED BUG CLOSED
⚡ CUSTOM PAIRING WORKING
⚡ ULTRA STABLE VERSION

╚══════════════════════════════╝

👑 𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬 : MIDO DEV

━━━━━━━━━━━━━━━━━━

💬 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠
➤ https://t.me/Midoxkill

📡 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 𝗖𝗛𝗔𝗡𝗡𝗘𝗟
➤ https://t.me/SingabxMido

▶️ 𝗬𝗢𝗨𝗧𝗨𝗕𝗘
➤ https://youtube.com/@midobot

📞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣
➤ https://wa.me/201554091848

💻 𝗚𝗜𝗧𝗛𝗨𝗕
➤ https://github.com/midok9286-cloud/msbaileys

━━━━━━━━━━━━━━━━━━

🚀 𝗠𝗜𝗗𝗢 𝗕𝗔𝗜𝗟𝗘𝗬𝗦 — 𝗘𝗗𝗜𝗧𝗜𝗢𝗡 𝟮𝟬𝟮𝟲
💀 POWER • SPEED • STABILITY 💀
`));
console.log(chalk.hex("#6f00f")("ThankYou Using Mido Baileys"));
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
