console.log("YOOOOO");

if(Meteor.isClient){
  console.log("Hello Client");

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find()
    }

    'selectedClass': function(){
      // code goes here
    }
  });

  Template.leaderboard.events({
    'click .player': function(){
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);

    }
  });


}

if(Meteor.isServer){
  console.log("Hello server");
}

PlayersList = new Mongo.Collection('players');