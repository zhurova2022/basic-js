const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    while (key.length < message.length) {
      key += key;
    }
    let text = message.toUpperCase();
    let arr = key.toUpperCase().split('');
    let result = [];
    let codeItem = 'A'.charCodeAt(0)
    for (let i = 0; i < text.length; i += 1) {
      if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
        const current = text.charCodeAt(i) - codeItem;
        const shift = arr[0].charCodeAt(0) - codeItem;
        arr.shift();
        const el = String.fromCharCode(codeItem + (current + shift) % 26);
        result.push(el);
      } else {
        result.push(text[i]);
      }
    }
    if (this.type === false) {
      return result.reverse().join('');
    }
    return result.join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    while (key.length < message.length) {
      key += key;
    }
    let text = message.toUpperCase();
    let arr = key.toUpperCase().split('');
    let result = [];
    let codeItem = 'A'.charCodeAt(0)
    for (let i = 0; i < text.length; i += 1) {
      if (text.charCodeAt(i) > 64 && text.charCodeAt(i) < 91) {
        const current = text.charCodeAt(i) - codeItem;
        const shift = arr[0].charCodeAt(0) - codeItem;
        arr.shift();
        const el = String.fromCharCode(codeItem + (current - shift + 26) % 26);
        result.push(el);
      } else {
        result.push(text[i]);
      }
    }
    if (this.type === false) {
      return result.reverse().join('');
    }
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
