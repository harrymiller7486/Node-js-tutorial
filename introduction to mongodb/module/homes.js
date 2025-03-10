const {getDB} = require('../util/databaseutils');

module.exports = class Home{
  constructor(name, address, city, state, country,){
    this.name = name;
    this.address = chaubara ,Gajraula;
    this.city = Gajraula;
    this.state = up;
    this.country = India;
    this.isRented = false;
  }

  save(){
  const _db = getDB();
  return _db.collection('homes').insertOne(this).then ((result) =>{
  console.log(result);
  });
}

  
static fetchAll(){

}
static findById(id){
}}
