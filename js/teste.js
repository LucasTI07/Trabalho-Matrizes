// 1 ) SOMA DAS MATRIZES

// Criando e inicializando a matriz m1
var m1 = new Array();

// Adicionando linhas à matriz m1
m1.push([10, 11]); // Exemplo de linha adicionada manualmente
m1.push([15, 16]); // Exemplo de linha adicionada manualmente

// Atribuindo valores aleatórios entre 1 e 60 para cada elemento da matriz m1
for (var i = 0; i < m1.length; i++) {
    for (var j = 0; j < m1[i].length; j++) {
        m1[i][j] = Math.ceil(Math.random() * 60); // Atribuição de valor aleatório
    }
}

// Escrevendo a tabela HTML para exibir a matriz m1
document.write("<div class='tabelas'> ");
document.write("<div> ");
document.write("<h4>Matriz 1:</h4>");
document.write("<table border='1'>");
for (var l = 0; l < m1.length; l++) {
    document.write('<tr>');
    for (var c = 0; c < m1[l].length; c++) {
        document.write('<td>' + m1[l][c] + '</td>'); // Escrevendo cada elemento da matriz m1
    }
    document.write('</tr>');
}
document.write('</table>');
document.write("</div> ");
document.write("<div> ");

document.write("<h1 style='margin-top: 20px;'>+</h1>");

document.write("</div> ");
document.write("<div> ");

// Criando e inicializando a matriz m2
var m2 = new Array();

// Adicionando linhas à matriz m2
m2.push([10, 11]); // Exemplo de linha adicionada manualmente
m2.push([15, 16]); // Exemplo de linha adicionada manualmente

// Atribuindo valores aleatórios entre 1 e 60 para cada elemento da matriz m2
for (var i = 0; i < m2.length; i++) {
    for (var j = 0; j < m2[i].length; j++) {
        m2[i][j] = Math.ceil(Math.random() * 60); // Atribuição de valor aleatório
    }
}

// Escrevendo a tabela HTML para exibir a matriz m2
document.write("<h4>Matriz 2:</h4>");
document.write("<table border='1'>");
for (var l = 0; l < m2.length; l++) {
    document.write('<tr>');
    for (var c = 0; c < m2[l].length; c++) {
        document.write('<td>' + m2[l][c] + '</td>'); // Escrevendo cada elemento da matriz m2
    }
    document.write('</tr>');
}
document.write('</table>');

// Criando e calculando a soma das matrizes m1 e m2
var resultadoSoma = [];
for (var i = 0; i < m1.length; i++) {
    var linha = [];
    for (var j = 0; j < m1[i].length; j++) {
        linha.push(m1[i][j] + m2[i][j]); // Soma dos elementos correspondentes de m1 e m2
    }
    resultadoSoma.push(linha); // Adicionando a linha resultante à matriz resultadoSoma
}
document.write("</div> ");
document.write("<div> ");

document.write("<h1 style='margin-top: 20px;'>=</h1>");
document.write("</div> ");
document.write("<div> ");

// Escrevendo a tabela HTML para exibir a matriz resultado da soma
document.write("<h4>Soma das 2 Matrizes:</h4>");
document.write("<table border='1'>");
for (var l = 0; l < resultadoSoma.length; l++) {
    document.write('<tr>');
    for (var c = 0; c < resultadoSoma[l].length; c++) {
        document.write('<td>' + resultadoSoma[l][c] + '</td>'); // Escrevendo cada elemento da matriz resultadoSoma
    }
    document.write('</tr>');
}

document.write('</table>');
document.write("</div> ");
document.write("</div> ");

document.write('<b>Ex: Na soma de matrizes o código pega o a11 da matriz 1 + o a11 da matriz 2 resultando na nova matriz 2X2 </b>')

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2 ) SUBTRAÇÃO DAS MATRIZES

// Reinicializando a matriz m1 para uso na subtração
m1 = new Array();

// Adicionando linhas à matriz m1
m1.push([10, 11]); // Exemplo de linha adicionada manualmente
m1.push([15, 16]); // Exemplo de linha adicionada manualmente

// Atribuindo valores aleatórios entre 1 e 60 para cada elemento da matriz m1
for (var i = 0; i < m1.length; i++) {
    for (var j = 0; j < m1[i].length; j++) {
        m1[i][j] = Math.ceil(Math.random() * 60); // Atribuição de valor aleatório
    }
}

// Escrevendo a tabela HTML para exibir a matriz m1
document.write("<div class='tabelas'> ");
document.write("<div> ");
document.write("<h4>Matriz 1:</h4>");
document.write("<table border='1'>");
for (var l = 0; l < m1.length; l++) {
    document.write('<tr>');
    for (var c = 0; c < m1[l].length; c++) {
        document.write('<td>' + m1[l][c] + '</td>'); // Escrevendo cada elemento da matriz m1
    }
    document.write('</tr>');
}
document.write('</table>');
document.write("</div> ");
document.write("<div> ");

document.write("<h1 style='margin-top: 20px;'>-</h1>");

document.write("</div> ");
document.write("<div> ");

// Reinicializando a matriz m2 para uso na subtração
m2 = new Array();

// Adicionando linhas à matriz m2
m2.push([10, 11]); // Exemplo de linha adicionada manualmente
m2.push([15, 16]); // Exemplo de linha adicionada manualmente

// Atribuindo valores aleatórios entre 1 e 60 para cada elemento da matriz m2
for (var i = 0; i < m2.length; i++) {
    for (var j = 0; j < m2[i].length; j++) {
        m2[i][j] = Math.ceil(Math.random() * 60); // Atribuição de valor aleatório
    }
}

// Escrevendo a tabela HTML para exibir a matriz m2
document.write("<h4>Matriz 2:</h4>");
document.write("<table border='1'>");
for (var l = 0; l < m2.length; l++) {
    document.write('<tr>');
    for (var c = 0; c < m2[l].length; c++) {
        document.write('<td>' + m2[l][c] + '</td>'); // Escrevendo cada elemento da matriz m2
    }
    document.write('</tr>');
}
document.write('</table>');

// Criando e calculando a subtração das matrizes m1 e m2
var resultadoSubtracao = [];
for (var i = 0; i < m1.length; i++) {
    var linha = [];
    for (var j = 0; j < m1[i].length; j++) {
        linha.push(m1[i][j] - m2[i][j]); // Subtração dos elementos correspondentes de m1 e m2
    }
    resultadoSubtracao.push(linha); // Adicionando a linha resultante à matriz resultadoSubtracao
}
document.write("</div> ");
document.write("<div> ");

document.write("<h1 style='margin-top: 20px;'>=</h1>");
document.write("</div> ");
document.write("<div> ");

// Escrevendo a tabela HTML para exibir a matriz resultado da subtração
document.write("<h4>Subtração das 2 Matrizes:</h4>");
document.write("<table border='1'>");
for (var l = 0; l < resultadoSubtracao.length; l++) {
    document.write('<tr>');
    for (var c = 0; c < resultadoSubtracao[l].length; c++) {
        document.write('<td>' + resultadoSubtracao[l][c] + '</td>'); // Escrevendo cada elemento da matriz resultadoSubtracao
    }
    document.write('</tr>');
}
document.write('</table>');
document.write("</div> ");
document.write("</div> ");

document.write('<b>Ex: Na subtração de matrizes o código pega o a11 da matriz 1 - o a11 da matriz 2 resultando na nova matriz 2X2</b>')

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3 ) MULTIPLICAÇÃO DAS MATRIZES

// Escrevendo a tabela HTML para exibir a matriz m1
document.write("<div class='tabelas'> ");
document.write("<div> ");
document.write("<h4>Matriz 1:</h4>");
document.write("<table border='1'>");
for (var l = 0; l < m1.length; l++) {
    document.write('<tr>');
    for (var c = 0; c < m1[l].length; c++) {
        document.write('<td>' + m1[l][c] + '</td>'); // Escrevendo cada elemento da matriz m1
    }
    document.write('</tr>');
}
document.write('</table>');

document.write("</div> ");
document.write("<div> ");
document.write("<h1>x</h1>");
document.write("</div> ");

document.write("<div> ");
document.write("<h4>Matriz 2:</h4>");
document.write("<table border='1'>");
for (var l = 0; l < m2.length; l++) {
    document.write('<tr>');
    for (var c = 0; c < m2[l].length; c++) {
        document.write('<td>' + m2[l][c] + '</td>'); // Escrevendo cada elemento da matriz m2
    }
    document.write('</tr>');
}
document.write('</table>');

document.write("</div> ");
document.write("<div> ");

document.write("<h1 style='margin-top: 20px;'>=</h1>");
document.write("</div> ");
document.write("<div> ");

// Função para multiplicar as matrizes m1 e m2
function multiplicarMatrizes(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var mult = 0;
            for (var k = 0; k < m1[0].length; k++) {
                mult += m1[i][k] * m2[k][j];
            }
            result[i][j] = mult;
        }
    }
    return result;
}

// Obtendo o resultado da multiplicação das matrizes m1 e m2
var resultadoMultiplicacao = multiplicarMatrizes(m1, m2);

// Escrevendo a tabela HTML para exibir o resultado da multiplicação
document.write("<h4>Multiplicação das 2 Matrizes:</h4>");
document.write("<table border='1'>");
for (var l = 0; l < resultadoMultiplicacao.length; l++) {
    document.write('<tr>');
    for (var c = 0; c < resultadoMultiplicacao[l].length; c++) {
        document.write('<td>' + resultadoMultiplicacao[l][c] + '</td>'); // Escrevendo cada elemento da matriz resultadoMultiplicacao
    }
    document.write('</tr>');
}
document.write('</table>');

document.write("</div> ");
document.write("</div> ");

document.write('<b>Ex: Na multiplicação de matrizes o código usa a fórmula LINHA X COLUNA para gerar a nova matriz 2X2</b>')