class Field {

  constructor(
    id, type, name
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
  }


  load_to(parent_id) {

    let div = document.createElement('div');
    div.id = this.id;
    div.innerHTML = this.name;

    document.getElementById(this.parent_id).appendChild(div);
  }



}


class FieldSet {

  constructor(
    field_input
  ) {
    this.field_input = field_input;
    this.field = [];
  }


  load() {

    for(let i = 0; i < this.field_input.length; ++i) {
      this.field[i] = new Field(
        this.field_input[i][0],
        this.field_input[i][1],
        this.field_input[i][2]
      );
//      this.field[i].load();
    }

  }



}




export { Field };
export { FieldSet };
