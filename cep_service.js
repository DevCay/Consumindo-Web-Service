//const fetch = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
class CEPService{
    
    static async queryCEP(cep){
        var resposta =  await fetch(CEPService.buildUrl(cep));
        return await resposta.json();
    }

    static buildUrl(cep){
        var url = 'https://viacep.com.br/ws/' + cep + '/json/';
        return url;
    }
}

module.exports = CEPService;
