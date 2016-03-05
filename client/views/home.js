Template.home.helpers({
  temprovaatual: function(){
    if (Session.get('idProvaSelecionada') || Session.get('ProvaSelecionada')) return true;
    else return false;
  },
  nomeprovaatual: function(){
    return Session.get('ProvaSelecionada');
  }
});

Template.home.events({
  'click #btn-montar-prova':function(event){
      event.preventDefault();
      console.log("Estou querendo montar prova!");

      var montar_prova_div = document.getElementById("montar-prova");
      while (montar_prova_div.hasChildNodes()) {
        montar_prova_div.removeChild(montar_prova_div.childNodes[0]);
      }

      var s = '<form class="form-inline col-md-6" role="form"><div class="form-group"><input type="text" name="testname" class="form-control" placeholder="Digite o nome da prova" required></div><button type="submit" class="btn btn-default"> Criar nova prova</button></form>';

      var div = document.createElement('div');
      div.innerHTML = s;
      montar_prova_div.appendChild(div);


  },
  'submit form': function(event){
    event.preventDefault();
    console.log("Criando a prova");

    var nomeProvaVar = event.target.testname.value;
    var idProva = Provas.insert({
      nome: nomeProvaVar,
      criadaPor: Meteor.userId(),
      dataCriacao: new Date(),
      questoes: []
    });
    console.log(idProva);

    alert("Prova criada com sucesso. Favor inserir as questões.");
    Session.set('ProvaSelecionada', nomeProvaVar);
    Session.set('idProvaSelecionada',idProva);

    Router.go("/questoes");
  },
  'click #btn-continuar-prova':function(event){
    event.preventDefault();

    Router.go('/questoes');
  }

});

// Nao esta sendo utilizado
Template.selectNameTestModal.events({

  'submit form': function(event){
    event.preventDefault();

    var nomeProvaVar = event.target.testname.value;
    Provas.insert({
      nome: nomeProvaVar,
      questoes: []
    });
    Modal.hide('selectNameTestModal');
    Session.set('ProvaSelecionada', nomeProvaVar);
    alert("Prova criada com sucesso.");
  }

});
