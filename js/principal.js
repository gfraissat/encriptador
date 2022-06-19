    //Função para criptografar
    var botaoCriptografar = document.getElementById('criptografa');
    botaoCriptografar.addEventListener('click', function(){
        texto = document.getElementById("texto").value;
        texto = texto.toLowerCase();

        if(!texto){ alert('Campo vazio \n\n Digite algo para Cripitografar'); return }
        
        texto = texto.replace(/e/g,'enter');
        texto = texto.replace(/i/g,'imes');
        texto = texto.replace(/a/g,'ai');
        texto = texto.replace(/o/g,'ober');
        texto = texto.replace(/u/g,'ufat');

        document.getElementById('result').value = texto;
        document.getElementById('texto').value = '';
  
        document.getElementById('result').style['background-image'] = 'none';
        }
)

    //Função para descriptografar
    var botaoDescriptografar = document.getElementById('descriptografa');
    botaoDescriptografar.addEventListener('click', function() {
        texto = document.getElementById('texto').value;
        texto = texto.toLowerCase();

        if(!texto){ alert('Campo vazio \n\n Digite algo para Descripitografar'); return }

        texto = texto.replace(/enter/g,'e');
        texto = texto.replace(/imes/g,'i');
        texto = texto.replace(/ai/g,'a');
        texto = texto.replace(/ober/g,'o');
        texto = texto.replace(/ufat/g,'u');

        document.getElementById('result').value = texto;
        document.getElementById('texto').value = '';
        document.getElementById('result').style['background-image'] = 'none';
    }
)

    //Função para copiar para área de transferência
    function copiarTexto() {
        var textoCopiado = document.getElementById('result');
        textoCopiado.select();
        //textoCopiado.setSelectionRange(0, 99999)
        document.execCommand('copy');
        document.getElementById('result').value = '';

        document.getElementById('result').style.backgroundImage = "url('result-vazio.jpg')";
        document.getElementById('texto').focus();
    }
