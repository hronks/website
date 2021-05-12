class Menu {
  constructor(
    id, parent,
    font_size, padding,
    text_colour, background_colour, select_colour,
    dropdown_text_colour, dropdown_background_colour, dropdown_select_colour,
    structure
  ) {

    this.id = id;
    this.parent = parent;
    this.structure = structure;
    this.active_option = -1;
    this.class = id + '_class';

    this.font_size = font_size;
    this.padding = padding;

    this.text_colour = text_colour;
    this.background = background_colour;
    this.menu_root_select = select_colour;

    this.menu_text_colour = dropdown_text_colour;
    this.dropdown_background = dropdown_background_colour;
    this.dropdown_button = dropdown_select_colour;

  }

  // new class stuff above here

  create() {

    let _this = this;
    let div = document.createElement('div');

    this.parent.appendChild(div);
    div.id = this.id;
    div.className = this.class;

    div.style.backgroundColor = this.background;

    for(let i = 0; i < this.structure.length; ++i) {

      let button = document.createElement('button');
      let div2 = document.createElement('div');
      let div_drop = document.createElement('div');

      div.appendChild(div2);
      div2.style.position = 'relative';
      div2.style.display = 'inline-block';

      div2.appendChild(button);
      button.id = this.id + '_' + i;
      button.innerHTML = this.structure[i][0];

      button.style.padding = '0';
      button.style.background = 'none';
      button.style.padding = this.padding;
      button.style.outline = 'none';
      button.style.userSelect = "none";
      button.style.color = this.text_colour;
      button.style.fontSize = this.font_size;
      button.style.border = 'none';

      div2.appendChild(div_drop);
      div_drop.id = this.id + '_drop_' + i;
      div_drop.className = 'dropbtn';
      div_drop.style.position = 'fixed';
      div_drop.style.xIndex = '1';

      div_drop.style.display = 'none';
      div_drop.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
      div_drop.style.zIndex = '1';
      div_drop.style.backgroundColor = this.dropdown_background;
      div_drop.style.margin = '0';
      div_drop.style.overflow = 'hidden';

//      div_drop.style.minWidth = '160px';

//      div.appendChild(div_drop);
//      div_drop.id = this.id + '_drop_' + i;

      for(let j = 0; j < this.structure[i][1].length; ++j) {

        let button = document.createElement('button');

        div_drop.appendChild(button);
        button.id = this.id + '_' + i + '_' + j;
        button.style.display = 'block';
        button.innerHTML = this.structure[i][1][j];

        button.style.color = this.menu_text_colour;
        button.style.fontSize = this.font_size;
        button.style.padding = this.padding;

        button.style.textIndent = '8px';
        button.style.textAlign = 'left';
        button.style.float = 'none';
        button.style.background = 'none';
        button.style.border = 'none';
        button.style.outline = 'none';
        button.style.userSelect = "none";

        button.style.width = '100%';

      }
    }

    // Add event listeners
    for(let i = 0; i < this.structure.length; ++i) {

      let x = document.getElementById(this.id + '_' + i);
      let y = document.getElementById(_this.id + '_drop_' + i);

      // click a menue option
      x.addEventListener('click', function() {
        x.style.backgroundColor = _this.menu_root_select;
        var test = y.style.display;
        if(test == 'block') {
          test = 'none';
          x.style.backgroundColor = _this.background;
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
          let a = document.getElementById(_this.id + '_' + j);
          z.style.display = 'none';
          a.style.backgroundColor = _this.background;
          x.style.backgroundColor = _this.menu_root_select;
          y.style.display = 'block';
          _this.active_option = i;
        }

      });

      // listeners to the menu items
      for(let j = 0; j < this.structure[i][1].length; ++j) {

        let x = document.getElementById(this.id + '_' + i + '_' + j);

        x.addEventListener('mouseover', function() {
          x.style.backgroundColor = _this.dropdown_button;
        });

        x.addEventListener('mouseleave', function() {
          x.style.backgroundColor = _this.dropdown_background;
        });
      }

    }

    // what happens if click out of box
    window.addEventListener('click', function(e) {
      for(let i = 0; i < _this.structure.length; ++i) {
        if(e.target.id == _this.id + '_' + i) {
//          document.getElementById(_this.id + '_' + i).style.backgroundColor = '#f5f5f5';
          return;
        }
      }
      for(let i = 0; i < _this.structure.length; ++i) {
        document.getElementById(_this.id + '_' + i).style.backgroundColor = _this.background;
        document.getElementById(_this.id + '_drop_' + i).style.display = 'none';
        _this.active_option = -1;
      }
    });



  }

  if_clicked(menu_option, button_option, output) {

    let i = 0;
    let j = 0;

    for(i = 0; i < this.structure.length; ++i) {
      if(this.structure[i][0] == menu_option) break;
    }

    for(j = 0; j < this.structure[i].length; ++j) {
      if(this.structure[i][1][j] == button_option) break;
    }

    let source_id = this.id + '_' + i + '_' + j;

    document.getElementById(source_id).addEventListener('click', output);

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
