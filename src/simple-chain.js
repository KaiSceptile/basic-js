const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker= {
    chainArray: [],
    getLength: function(){
        return this.chainArray.length;
    },

    removeLink(position){
        if (!(typeof position =='number')||(this.chainArray.length<position)) {this.chainArray=[]; throw Error("You can't remove incorrect link!")}
        this.chainArray=this.chainArray.slice(position);
        return this;
    },

    addLink: function(value){
        if (arguments.length==0) {this.chainArray.push('')} else {this.chainArray.push(value)}
        return this;
    },
    
    
    reverseChain(){
        for (let i=0; i<this.chainArray.length/2; i++){
            let swap=this.chainArray[i];
            this.chainArray[i]=this.chainArray[this.chainArray.length-1-i];
            this.chainArray[this.chainArray.length-1-i]=swap;
        }
        return this;
    },

    finishChain(){
        let res='';
        for (let i of this.chainArray){
            res+='( '+i+' )~~'
        }
        if (res.length>0) {res=res.slice(0,-2)}
        this.chainArray=[];
        return res;
    }
    }


module.exports = {
  chainMaker
};
