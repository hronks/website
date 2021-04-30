class Menu {
  constructor(id, parent, structure) {
    this.id = id;
    this.parent = parent;
    this.structure = structure;
    this.active_option = -1;
    this.class = id + '_class';

  }

  // new class stuff above here

  create() {

    let _this = this;
    let div = document.createElement('div');

    this.parent.appendChild(div);
    div.id = this.id;
    div.className = this.class;

    for(let i = 0; i < this.structure.length; ++i) {

      let button = document.createElement('button');
      let div_drop = document.createElement('div');

      div.appendChild(button);
      button.id = this.id + '_' + i;
      button.innerHTML = this.structure[i][0];

      button.appendChild(div_drop);
      div_drop.id = this.id + '_drop_' + i;
      div_drop.className = 'dropbtn';
      div_drop.style.position = 'absolute';
      div_drop.style.display = 'none';

      for(let j = 0; j < this.structure[i][1].length; ++j) {

        let button = document.createElement('button');

        div_drop.appendChild(button);
        button.id = this.id + '_' + i + '_' + j;
        button.style.display = 'block';
        button.innerHTML = this.structure[i][1][j];

      }
    }

    for(let i = 0; i < this.structure.length; ++i) {

      let x = document.getElementById(this.id + '_' + i);
      let y = document.getElementById(_this.id + '_drop_' + i);

      x.addEventListener('click', function() {
        var test = y.style.display;
        if(test == 'block') {
          test = 'none';
          _this.active_option = -1;
        }
        else {
          test = 'block';
          _this.active_option = i;
        }
        y.style.display = test;
      });

      // what happens if hover over other menu option
      x.addEventListener('mouseover', function() {
        let j = _this.active_option;
        if(j != -1 && j != i) {
          let z = document.getElementById(_this.id + '_drop_' + j);
          z.style.display = 'none';
          y.style.display = 'block';
          _this.active_option = i;
        }
      });

    }

    // what happens if click out of box
    window.addEventListener('click', function(e) {
      for(let i = 0; i < _this.structure.length; ++i) {
        if(e.target.id == _this.id + '_' + i) {
          return;
        }
      }
      for(let i = 0; i < _this.structure.length; ++i) {
        document.getElementById(_this.id + '_drop_' + i).style.display = 'none';
        _this.active_option = -1;
      }
    });


  }

}

export { Menu };






//      <div class="dropdown-content" id="data_dropdown">
//        <button id="ann_nav_button">Neural Networks</button>
//.dropdown-content {
//  display: none;
//  position: absolute;
//  background-color: #f9f9f9;
//  min-width: 160px;
//  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//  z-index: 1;

//.dropdown-content button {
//  min-width: inherit;
//  border: none;
//  font-size: 16px;
//  background: none;
//  float: none;
//  color: black;
//  padding: 12px 16px;
//  cursor: pointer;
//  text-decoration: none;
//  display: block;
//  text-align: left;
