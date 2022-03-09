const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
class  IPService{
    
    static async getServerIP(){
        var resposta =  await fetch('https://viacep.com.br/ws//json/');
        return await resposta.text();
    }
}

module.exports = IPService;
