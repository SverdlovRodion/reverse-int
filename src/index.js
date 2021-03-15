module.exports = function reverse (n) {
    if(n < 0){
        let str = String(n).split('')
        str.shift();
        str.reverse();
        str.unshift("-");
        str = str.join("");
        return Number(str)
    }
        return (parseInt(n.toString().split('').reverse().join('')) * Math.sign(n))
    }
}

