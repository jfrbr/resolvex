// TODO: Checar essa informação, arrumar layout html
Template.addquestion.rendered = function(){
  $('#summernote').summernote({
    height: 200,
    width: 200
  });
};

Template.addquestion.events({
  'submit form': function(event){

    //TODO: inserir verificações de segurança, como, checar se o usuário está logado
      event.preventDefault();
      console.log("Inserindo questão");

      var difVar = event.target.addquestionselectdificuldade.value;
      var anoVar = event.target.addquestionselectano.value;
      var bancaVar = event.target.addquestionselectbanca.value;
      var textVar = $('#summernote').summernote('code');
      console.log(textVar);

      Questions.insert({
        dificuldade: difVar,
        texto: textVar,
        ano: anoVar,
        banca: bancaVar
      });

      alert("Questão inserida"); // TODO:  Modal
    //  Modal.show('addQuestionModal');


  //    return false;
  },
  'change #addquestionselecttopico': function(event){
    event.preventDefault();
    var novoTopico = event.target.value;
    console.log(novoTopico);

    var select = document.getElementById("addquestionselectsubtopico");

    if (novoTopico === "Matemática"){
      var topicosMatematica = ["Lógica","Conjuntos", "Relações", "Funções", "Potências e raízes", "Logaritmos", "Trigonometria","Sequências", "Matrizes", "Sistemas Lineares", "Combinatória", "Probabilidade", "Números Complexos", "Polinômios", "Equações", "Geometria Analítica"];
      for (var i = 0; i < topicosMatematica.length; i++){
        var option = document.createElement("option");
        option.text = topicosMatematica[i];
        option.value = topicosMatematica[i];
        select.appendChild(option);
      }
    } else if (novoTopico === "Todas"){
      while (select.hasChildNodes()) {
        select.removeChild(select.childNodes[0]);
      }
    } else {
      console.log("Nada a fazer, topico nao cadastrado" + novoTopico);
      while (select.hasChildNodes()) {
        select.removeChild(select.childNodes[0]);
      }
    }
  },
  'click #maistexto':function(event){
    event.preventDefault();
    document.getElementById("entradatexto").style.display='inline';
  },
  'click #adicionartexto': function(event){
    event.preventDefault();

    document.getElementById("entradatexto").style.display='none';

    var texto = document.getElementById("addquestiontextarea").value;
    document.getElementById("entradatexto").value="";
    console.log(texto);
    document.getElementById("textpreview").value = texto;

  }

});
