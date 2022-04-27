var express = require('express');
var CEPService = require('./cep_service');
var IPService = require('./ip_service');

var app = express();

app.get('/cep/:cep', (req, res)=>{
    CEPService.queryCEP(req.params.cep)
        .then(
            (resposta)=> res.send(
                `<p>CEP: ${resposta.cep}</p>
                 <p>Logradouro: ${resposta.logradouro}</p>
                 <p>Bairro: ${resposta.bairro}</p>
                 <p>Localidade: ${resposta.localidade}</p>
                 <p>UF: ${resposta.uf}</p>
                 <p>IBGE: ${resposta.ibge}</p>
                 <p>DDD: ${resposta.ddd}</p>
                 <p>Siafi: ${resposta.siafi}</p>
                 <p>Complemento: ${resposta.complemento}</p>
                 <p>Gia: ${resposta.gia}</p>`)
        );
    
});

app.get('/ip', async (req, res)=>{
    promise = IPService.getServerIP();
    //promise.then((value)=> res.send(value));
    res.send(await promise);
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});
