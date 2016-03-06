Template.welcomepage.events({
  'click #enter': function(event){

    event.preventDefault();
    Modal.show('loginModal');
  },
  'click #register': function(event){
    event.preventDefault();
    Modal.show('registerModal');
  }
});
Template.loginModal.events({
  'submit form': function(event){
    event.preventDefault();
    var emailVar = event.target.email.value;
    var passwordVar = event.target.password.value;
    Meteor.loginWithPassword(emailVar, passwordVar, function(error){
      if (error){
        if (error.reason === "Incorrect password"){
          Modal.hide('loginModal');
          alert("Senha incorreta."); //TODO: melhorar isso!
        } else if (error.reason === "Match failed"){
          Modal.hide('loginModal');
          alert("Match failed");
        } else if (error.reason === "User not found"){
          Modal.hide('loginModal');
          alert("User not found");
        } else {
          Modal.hide('loginModal');;
          //Modal.show('errorNotRecognizedModal');
        }
      } else {
        Modal.hide('loginModal');
        alert("Logado com sucesso");
        Router.go("/home");
      }
    });
  }
});
Template.registerModal.events({
  'submit form': function(event){
    event.preventDefault();
    var emailVar = event.target.email.value;
    var passwordVar = event.target.password.value;
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
    alert("Usuário registrado");
  }
});
