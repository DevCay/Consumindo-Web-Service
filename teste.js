function queryCEP(cep){
    url = 'viacep.com.br/ws/' + cep + '/json/';
    //url = `viacep.com.br/ws/${cep}/json/`;
    return url;
}
result = queryCEP('88138660');
console.log(result);
console.log(result === 'viacep.com.br/ws/88138660/json/');