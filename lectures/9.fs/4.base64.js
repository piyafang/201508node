/**
 * base64编码是把3个8位字节(3*8=24) 转化为4个6位字节(4*6=24)
 *
 */
var buf = new Buffer('珠');
console.log(buf);//<Buffer e7 8f a0>
console.log(parseInt("e7",16),' ',parseInt("8f",16),' ',parseInt("a0",16));
//231 143 160
console.log((231).toString(2),(143).toString(2),(160).toString(2));
// 11100111 10001111 10100000
// 00111001 00111000  00111110 00100000
console.log(parseInt("00111001",2),parseInt("00111000",2),parseInt("00111110",2),parseInt("00100000",2));
/*var sum =0;
for(var i=0;i<6;i++)
sum+=Math.pow(2,i)
console.log(sum);
console.log(Math.pow(2,6)-1);*/
// 0 - 63
// 57 56 62 32
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
console.log(str[57]+str[56]+str[62]+str[32]);
//54+g