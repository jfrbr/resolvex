Template.provasfeitas.helpers({
  todasprovas: function(){
    var userId = Meteor.userId();
    return Provas.find({criadaPor: userId});
  },
  provaatual: function(){
    if (Session.get('ProvaSelecionada')){
      return Session.get('ProvaSelecionada');
    }
  },
  temprovaatual: function(){
    console.log(Session.get('ProvaSelecionada'));
    if (Session.get('ProvaSelecionada')) return true;
    else return false;
  }
});

Template.provasfeitas.events({
  'submit form': function(event){

    event.preventDefault();
    var idProva = $(event.currentTarget).find(':selected').data("id");
    var prova = Provas.findOne({_id: idProva});

    console.log("Provas feitas::" + prova.nome);
    console.log("Provas feitas::" + idProva);
    Session.set('ProvaSelecionada',prova.nome);
    Session.set('idProvaSelecionada',idProva);

    return false;
  },
  'click .continuaprovaatual':function(event){

    var idProva = Session.get('idProvaSelecionada');
    Router.go('/provas/'+idProva);
  },
  'click .removeprova': function(event){
    console.log("Inserir código para remover prova");
  }
});
