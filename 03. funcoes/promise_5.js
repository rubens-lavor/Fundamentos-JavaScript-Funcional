const { rejects } = require("assert");
const { resolve } = require("path");

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve,reject)=>{
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        }else{
            resolve(valor)
        }
    })
}