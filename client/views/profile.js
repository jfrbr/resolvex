Template.profile.helpers({
  emailusuario: function(){
    var user = Meteor.user();
    if (user){
      return user.emails[0].address;
    } else {
      return "Não está logado";
    }
  },
  nomeusuario: function(){
    var user = Meteor.user();
    if (user){
      return user.profile.nome;
    } else {
    //  return "Não está logado";
    }
  },
  enderecoavatar:function(){
    var user = Meteor.user();
    if (user){
      console.log(user.profile.avatar);
      return "http://localhost:3000/cfs/files/images/"+user.profile.avatar;
    } else {
      //return null;
    }
  }
});
Template.profile.events({
  'submit form': function(event){
    event.preventDefault();
    console.log(event.target.nome.value);
    var nomeUsuario = event.target.nome.value;
    console.log("Novo nome: "+ nomeUsuario);
    Meteor.users.update({ _id: Meteor.userId() }, { $set: { "profile.nome": nomeUsuario }});
  }/*,
  'change .uploadimage': function(event, template){
    event.preventDefault();
    console.log('change');
    var files = event.target.files;

    for (var i = 0, ln = files.length; i < ln; i++) {
      console.log("Inserindo");
      Images.insert(files[i], function (err, fileObj) {
        Meteor.users.update({ _id: Meteor.userId() }, { $set: { "profile.avatar": fileObj._id}});
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    }
  }*/

});
