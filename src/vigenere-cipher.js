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
class VigenereCipheringMachine{
    
    constructor(method){
        this.method=method;
        this.alphabet="abcdefghijklmnopqrstuvwxyz";
    }
    getfullkey(str,key){
        let result="";
        let j=0;
        for (let i=0;i<str.length;i++){
            if (this.alphabet.indexOf(str[i])==-1) {result=result+str[i];} else
            {result=result+key[j % key.length]; j++;}
        }
        return result;
    }
    reverse(str){
        let result="";
        for (let i=str.length-1;i>=0;i--){
            result=result+str[i];
        }
        return result;
    }
    encrypt(str,key){
        if (arguments.length<2) throw Error('Incorrect arguments!');
        if ((typeof arguments[0] =='undefined')||(typeof arguments[0] =='undefined')) throw Error('Incorrect arguments!');
        str=str.toLowerCase();
        key=key.toLowerCase();
        let result="";
        let fullkey=this.getfullkey(str,key);
        for (let i=0;i<str.length;i++){
            let index=this.alphabet.indexOf(str[i])+this.alphabet.indexOf(fullkey[i]);
            if ((this.alphabet.indexOf(str[i])==-1)||(this.alphabet.indexOf(fullkey[i])==-1)) {
                result=result+str[i];} else {result=result+this.alphabet[index % this.alphabet.length];}
        }
        if (this.method==false) return this.reverse(result.toUpperCase());
        return result.toUpperCase();
    }
    decrypt(str,key){
        if (arguments.length<2) throw Error('Incorrect arguments!');
        if ((typeof arguments[0] =='undefined')||(typeof arguments[0] =='undefined')) throw Error('Incorrect arguments!');
        str=str.toLowerCase();
        key=key.toLowerCase();
        let result="";
        let fullkey=this.getfullkey(str,key);
        for (let i=0;i<str.length;i++){
            let index=this.alphabet.indexOf(str[i])-this.alphabet.indexOf(fullkey[i]);
            if ((this.alphabet.indexOf(str[i])==-1)||(this.alphabet.indexOf(fullkey[i])==-1)) {
                result=result+str[i];} else {result=result+this.alphabet[(this.alphabet.length+index) % this.alphabet.length];}
        }
        if (this.method==false) return this.reverse(result.toUpperCase());
        return result.toUpperCase();
    }
}

module.exports = {
  VigenereCipheringMachine
};
