/*var amqp = require('amqplib/callback_api');

amqp.connect('amqp://root:password@192.168.10.126:5672', function (err, conn) {
    if(err){
        console.log(err);
        return;
    }
    conn.createChannel(function (err, ch) {
        var q = 'hello';
        var msg = 'Hello World 123!';
        ch.assertQueue(q, { durable: false });     
        ch.sendToQueue(q, new Buffer(msg));
        console.log(" [x] Sent %s", msg);
    });

    // testing purposes
    setTimeout(function () { conn.close(); process.exit(0) }, 500);
});*/
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