function consultaCEP(){

    $(".barra_progresso").show(); // mostra barra de progresso após clicar no botão

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";

//    console.log(url);

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);

/*            
            $("#logradouro").html("logradouro: " + response.logradouro); // equivalente a linha debaixo, porém mais enxuta
            //document.getElementById("logradouro").innerHTML = "logradouro: " + response.logradouro;
            document.getElementById("bairro").innerHTML = "bairro: " + response.bairro;
            document.getElementById("localidade").innerHTML = "localidade: " + response.localidade;
            document.getElementById("uf").innerHTML = "uf: " + response.uf;
            document.getElementById("unidade").innerHTML = "unidade: " + response.unidade;
            document.getElementById("ibge").innerHTML = "ibge: " + response.ibge;
            document.getElementById("gia").innerHTML = "gia: " + response.gia;
            //    alert(response.logradouro);
*/

            $("#numero_CEP").html("CEP " + cep);
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#unidade").html(response.unidade);
            $("#ibge").html(response.ibge);
            $("#gia").html(response.gia);
            $(".cep").show(); // mostra tabela após preencher
            $(".barra_progresso").hide(); // esconde barra de progresso após preencher
        }
    })
}

$(function(){
    $(".cep").hide(); // esconde tabela inicialmente
    $(".barra_progresso").hide(); // esconde barra de progresso inicialmente
})