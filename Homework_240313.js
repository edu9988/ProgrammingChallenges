/*
Para casa: Implemente uma função que
receba uma lista de alunos de ISW-008
(nome,ra,notaP1,notaP2).
    Exemplo: {nome:"Diego",ra:"0050832311004",
	notaP1:10,notaP2:8}
Essa função deverá
a) mostrar na tela os alunos em tabela
b) notas menores que 6 em vermelho,
    caso contrário azul
c) média da P1 da turma
d) média da P2 da turma
e) média de cada aluno
f) quantidade de aprovados
g) quantidade de reprovados

testar com 5-10 alunos
*/

/*
Solution without document.write()
*/
const gerarAvancado = listaAlunos => {
    const titulos = ["Nome","RA","Nota P1","Nota P2",
	"Média","Aprovado"];

    const newTab = document.createElement("table");
    const newThead = document.createElement("thead");
    titulos.forEach( n => {
	const t = document.createElement("td");
	t.textContent = n;
	newThead.append(t);
    });
    newTab.append(newThead);

    const newTbody = document.createElement("tbody");
    let totalP1 = 0.0;
    let totalP2 = 0.0;
    let totalM = 0.0;
    let totalApproved = 0;
    listaAlunos.forEach( a => {
	const newTr = document.createElement("tr");

	let newTd = document.createElement("td");
	newTd.textContent = a.nome;
	newTr.append(newTd);

	newTd = document.createElement("td");
	newTd.textContent = a.ra;
	newTr.append(newTd);

	newTd = document.createElement("td");
	const p1 = Number.parseFloat(a.notaP1);
	newTd.textContent = p1.toFixed(1);
	newTd.style.color = "white";
	newTd.style.setProperty( "color" , "white" );
	newTd.style.setProperty(
	    "background-color",
	    p1 < 6.0
	    ? "red"
	    : "green"
	);
	newTr.append(newTd);

	newTd = document.createElement("td");
	const p2 = Number.parseFloat(a.notaP2);
	newTd.textContent = p2.toFixed(1);
	newTd.style.setProperty( "color" , "white" );
	newTd.style.setProperty(
	    "background-color",
	    p2 < 6.0
	    ? "red"
	    : "green"
	);
	newTr.append(newTd);

	newTd = document.createElement("td");
	const m = (p1+p2)/2;
	if( m >= 6.0 )
	    totalApproved++;
	newTd.textContent = m.toFixed(1);
	newTd.style.setProperty( "color" , "white" );
	newTd.style.setProperty(
	    "background-color",
	    m < 6.0
	    ? "red"
	    : "green"
	);
	newTr.append(newTd);

	newTd = document.createElement("td");
	newTd.textContent = (m >= 6.0
	    ? "Sim"
	    : "Não"
	);
	newTr.append(newTd);

	newTbody.append(newTr);
	totalP1 += p1;
	totalP2 += p2;
	totalM += m;
    });
    const total = document.createElement("tr");

    let newTd = document.createElement("td");
    newTd.textContent = "Total";
    total.append(newTd);

    newTd = document.createElement("td");
    newTd.textContent = listaAlunos.length;
    total.append(newTd);

    newTd = document.createElement("td");
    newTd.textContent = (totalP1/listaAlunos.length).toFixed(1);
    total.append(newTd);

    newTd = document.createElement("td");
    newTd.textContent = (totalP2/listaAlunos.length).toFixed(1);
    total.append(newTd);

    newTd = document.createElement("td");
    newTd.textContent = (totalM/listaAlunos.length).toFixed(1);
    total.append(newTd);

    newTd = document.createElement("td");
    newTd.textContent = totalApproved;
    total.append(newTd);

    newTbody.append(total);
    newTab.append(newTbody);

    document.body.appendChild(newTab);
}

/*
Solution using document.write()
*/
const gerarAvancadoOld = listaAlunos => {
    var acumulado = "<table><thead>"
	+"<th>Nome</th>"
	+"<th>RA</th>"
	+"<th>Nota P1</th>"
	+"<th>Nota P2</th>"
	+"<th>Média</th>"
	+"<th>Aprovado</th>"
	+"</thead>"
	+"<tbody>";

    listaAlunos.forEach(al => {
	const p1 = Number.parseFloat(al.notaP1);
	const p2 = Number.parseFloat(al.notaP2);
	const m= (al.notaP1+al.notaP2)/2;
	acumulado += "<tr>"
	    +"<td>"+al.nome+"</td>"
	    +"<td>"+al.ra+"</td>"
	    +(p1 >= 6.0
		?"<td style='background-color:green; color:white'>"
		:"<td style='background-color:red; color:white'>"
	    )
	    +p1.toFixed(1)+"</td>"
	    +(p2 >= 6.0
		?"<td style='background-color:green; color:white'>"
		:"<td style='background-color:red; color:white'>"
	    )
	    +p2.toFixed(1)+"</td>"
	    +(m >= 6.0
		?"<td style='background-color:green; color:white'>"
		:"<td style='background-color:red; color:white'>"
	    )
	    +m.toFixed(1)+"</td>"
	    +"<td>"+(m >= 6.0?"Sim":"Não")+"</td>"
	    +"</tr>";
    })
    acumulado += "</tbody>"
	+"</table>";

    document.write(acumulado);
}
