Math.random()
// 0.5778710704352863
Math.random() * 1000000
// 890908.3694582037
Math.floor(Math.random() * 1000000)
// 430239
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// "539108"
const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined
token
// "359180"
token
// "359180"
token
// "359180"
token
// "359180"
token
// "359180"
function getToken(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(token)
}
// undefined
getToken()
// VM1022:3 373959
// undefined
getToken()
// VM1022:3 717266
// undefined
getToken()
// VM1022:3 678529
// undefined
getToken()
// VM1022:3 711033
// undefined
getToken()
// VM1022:3 976613
// undefined
const getToken = function(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(token)
}
// VM1409:1 Uncaught SyntaxError: Identifier 'getToken' has already been declared
const getToken2 = function(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(token)
}
// undefined
getToken2()
VM1426:3 025121
// undefined
getToken2()
// VM1426:3 729320
// undefined
getToken2()
// VM1426:3 434047
// undefined
const getToken3 = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(token)
}
// undefined
getToken3()
// VM1572:3 344516
// undefined
getToken3()
// VM1572:3 360965
// undefined
getToken3()
// VM1572:3 414298
// undefined