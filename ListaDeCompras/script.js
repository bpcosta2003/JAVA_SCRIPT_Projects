function Item(nomeItem, quantidade, preco) {
  this.nomeItem = nomeItem;
  this.quantidade = quantidade;
  this.preco = preco;
}

var listaCompras = [];

function adicionar() {
  var nomeItemNovo = $("#nomeItem1").val();
  var quantidadeNovo = $("#qtdItem").val();
  var precoItemNovo = $("#preçoItem").val();

  var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoItemNovo);

  listaCompras.push(novoItem);

  atualizarTabela(novoItem);

  var lista = listaCompras.length;

  var html = "";

  for (var i = 0; i < lista; i++) {
    html +=
      "<option value=" +
      i +
      ">" +
      listaCompras[i].nomeItem +
      " / " +
      listaCompras[i].quantidade +
      " / " +
      listaCompras[i].preco +
      "</option>";
  }

  $("#TableNome").html(nomeItemNovo);
  $("#TableQdt").html(quantidadeNovo);
  $("#TablePreco").html(precoItemNovo);

  $("#nomeItem1").val("");
  $("#qtdItem").val("");
  $("#preçoItem").val("");

  $("#meuSelect").html(html);
}

function atualizarTabela(valores) {
  var htmlTable = "<tr class='valuesitms'>";

  htmlTable += "<td >" + valores.nomeItem + "</td>";
  htmlTable += "<td >" + valores.quantidade + "</td>";
  htmlTable += "<td >" + valores.preco + "</td>";

  htmlTable += "</tr>";

  $("#tabelaItensId").append(htmlTable);
}

function resetar() {
  var htmlFinal = "";
  var tamanhoLista = listaCompras.length;
  for (var i = 0; i < tamanhoLista; i++) {
    htmlFinal +=
      "<option value=" +
      i +
      ">" +
      listaCompras[i].nomeItem +
      " / " +
      listaCompras[i].quantidade +
      " / " +
      listaCompras[i].preco +
      "R$" +
      "</option>";
  }

  $("#meuSelect").html(htmlFinal);
}

function remover() {
  listaCompras.splice($("#meuSelect").val(), 1);
  resetar();
}

function fecharCompra() {
  var htmlFecharCompra = "Você comprou : ";

  var soma = 0;

  for (var i = 0; i < listaCompras.length; i++) {
    htmlFecharCompra +=
      listaCompras[i].quantidade + " " + listaCompras[i].nomeItem + " - ";
    soma += listaCompras[i].quantidade * listaCompras[i].preco;
  }

  htmlFecharCompra += "Total : " + soma + "R$.";

  $("#fechamentoLabelId").text(htmlFecharCompra);
}

function refazerCompra() {
  $("#fechamentoLabelId").html("");
  $("#meuSelect").html("");
  $(".valuesitms").html("");
  listaCompras = [];
}
