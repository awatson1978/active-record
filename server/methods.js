Meteor.methods({
  initializeDatabase: function (){
    for (var i = 0; i < 50; i++) {
      Foo.insert({
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        url: faker.internet.domainName(),
        imageUrl: faker.image.imageUrl()
      });
    }
  }
});

Meteor.startup(function (){
  if (Foo.find().count() === 0){
    Meteor.call('initializeDatabase');
  }
});
