//1.Implement an object model that allows you to store strings that represent a Photo.

function Album() {
  this.photos=[];
}

Album.prototype.addPhoto = function(photo) {
  this.photos.push(photo)
}

function Photo(filename, location) {
  this.filename=filename;
  this.location=location;
}

var tripLondon = new Photo("London_Clock.jpg", "londonEye.jpg");
var tripTurks = new Photo("beach.jpg", "roomView.jpg");
var tripBahamas = new Photo("hotel.jpg", "fishtank.jpg");
var album = new Album()

album.addPhoto(tripLondon);
album.addPhoto(tripTurks);
album.addPhoto(tripBahamas);

//list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's

Album.prototype.listPhoto = function() {
  var list="";
  for (var i = 0; i < this.photos.length; i++){
  }
  return list;
}

console.log(album.photos.length);

// 2.Create a prototypical Person object. From this object, extend a Teacher object and a Student object.

function Person(gender, name, subject) {
  this.gender = gender;
  this.name = name;
  this.subject = subject;
}
//invokes (calls)the person function constructor
function Teacher(gender, name, subject) {
  Person.call(this, gender, name, subject)
}

function Student(gender, name, subject) {
  Person.call(this, gender, name, subject)
}

//School object that should be able to store instances
function School() {
  this.person = []
}

Person.prototype.displayAllinfo = function() {
  return this.gender + "," + this.name + "," + this.subject;
}

//create the objest//(define the objects)
Student.prototype = Object.create(Person.prototype);
Teacher.prototype = Object.create(Person.prototype);

School.prototype.addPerson = function(person) {
  this.person.push(person)
}

var Khayyam = new Student("Male", " Khayyam", " English")
var Mailaya = new Student("Female", "Mailaya", " Music")
var Neffy = new Student("Female", " Neffy", " Dance")
var McKenna = new Teacher("Female", " McKenna", " Conselor")
var school = new School()

school.addPerson(Khayyam)
school.addPerson(Neffy)

console.log(Khayyam.displayAllinfo());
console.log(Neffy.displayAllinfo());
console.log(McKenna.displayAllinfo());
