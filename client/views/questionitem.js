Template.questionitem.events({
  'click #add_question_button': function(event){
    event.preventDefault();

    var provaAtual = Session.get('ProvaSelecionada');
    console.log(provaAtual);
    console.log(this);

    var prova = Provas.findOne({nome: provaAtual});
    if (provaAtual){
      Provas.update({_id: prova._id}, {$push: {questoes: this}});
    }
    alert("Questão inserida com sucesso.");
  }
});
