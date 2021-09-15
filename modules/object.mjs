class Object {

  constructor(
    id, name, object_type
  ) {
    this.id = id;
    this.name = name;
    this.object_type = object_type;
  }

}

class Field extends Object {

  constructor(
    id, name, field_type
  ) {
    super();
    this.id = id;
    this.name = name;
    this.field_type = field_type;
  }


}


class ObjectSet {
  constructor(objects) {

    this.objects = new Array();

    for(let i = 0; i < objects.length; ++i) {

      if(objects[i][0] == 'field') {
        this.objects.push(new Field(
          objects[i][1][0],
          objects[i][1][1],
          objects[i][1][2]))
        }
//        console.log(this.objects[i]);
      }

  }

}


export { Object };
export { Field };
export { ObjectSet };
