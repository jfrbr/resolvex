Template.questions.helpers({
  questionslist: function(){
    return Questions.find();
  },
  nomeProva: function(){
    console.log(Session.get('ProvaSelecionada'));
    if (Session.get('ProvaSelecionada') != null){
      return Session.get('ProvaSelecionada');
    } else {
      return "Nenhuma prova selecionada.";
    }
  }
});
Template.questions.events({
  'dragstart':function(event){
    event.preventDefault();
    console.log("Começando a arrastar");
    //this.style.opacity = '0.4';
  }
});

/*
var cols = document.querySelectorAll('.questions');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
});
*/
