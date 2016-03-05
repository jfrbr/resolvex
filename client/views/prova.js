Template.prova.helpers({

  nomeprova: function(){
    if (Session.get('ProvaSelecionada')) return Session.get('ProvaSelecionada');
    else "Não existe prova selecionada";
  },
  provaselecionada: function(){
    if (Session.get('idProvaSelecionada')){
      return Provas.find({_id:Session.get('idProvaSelecionada')});
    } else {
      return "Não há provas selecionadas";
    }
  }
});
Template.prova.events({
  'click .removerquestao': function(event){
    event.preventDefault();
    console.log(this); //TODO: Pensar nisso! Como remover??
  }
});
