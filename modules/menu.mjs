class Menu {
  constructor(
    id, parent_id,
    font_size, padding,
    text_colour, background_colour, select_colour,
    dropdown_text_colour, dropdown_background_colour, dropdown_select_colour,
    structure
  ) {

    this.id = id;
    this.parent_id = parent_id;
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

    this.dropdown_width = [];

  }

  // new class stuff above here

  load() {

    let _this = this;
    let div = document.createElement('div');

    document.getElementById(this.parent_id).appendChild(div);
    div.id = this.id;
    div.className = this.class;

    div.style.backgroundColor = this.background;

    let div2 = document.createElement('div');
    let button = document.createElement('button');
    let div_drop = document.createElement('div');

    // add the settings area

    div.appendChild(div2);

    div2.style.position = 'relative';
    div2.style.float = 'right';
    div2.style.display = 'inline-block';

    div2.appendChild(button);
    button.id = this.id + '_settings';
    button.innerHTML = 'settings';
    button.style.padding = '0';
    button.style.background = 'none';
    button.style.padding = this.padding;
    button.style.outline = 'none';
    button.style.userSelect = "none";
    button.style.color = this.text_colour;
    button.style.fontSize = this.font_size;
    button.style.border = 'none';

    div2.appendChild(div_drop);
    div_drop.id = this.id + '_settings_drop';
    div_drop.className = 'dropbtn';
    div_drop.style.position = 'fixed';
    div_drop.style.xIndex = '1';

    div_drop.style.display = 'none';
    div_drop.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.2)';
    div_drop.style.zIndex = '1';
    div_drop.style.backgroundColor = this.dropdown_background;
    div_drop.style.margin = '0';
//    div_drop.style.overflow = 'hidden';

    // add the buttons

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
//      div_drop.style.overflow = 'hidden';

//      div_drop.style.minWidth = '160px';

//      div.appendChild(div_drop);
//      div_drop.id = this.id + '_drop_' + i;

      // click a menu option event listener

      button.addEventListener('click', function() {
        button.style.backgroundColor = _this.menu_root_select;
        var test = div_drop.style.display;
        if(test == 'block') {
          test = 'none';
          button.style.backgroundColor = _this.background;
          _this.active_option = -1;
        }
        else {
          test = 'block';
          _this.active_option = i;
        }
        div_drop.style.display = test;
      });

      // mvoe to another menu option event listener

      button.addEventListener('mouseover', function() {

        let j = _this.active_option;
        if(j != -1 && j != i) {
          let z = document.getElementById(_this.id + '_drop_' + j);
          let a = document.getElementById(_this.id + '_' + j);
          z.style.display = 'none';
          a.style.backgroundColor = _this.background;
          button.style.backgroundColor = _this.menu_root_select;
          div_drop.style.display = 'block';
          _this.active_option = i;
        }

      });


      for(let j = 0; j < this.structure[i][1].length; ++j) {

        let button = document.createElement('button');

        div_drop.appendChild(button);
        button.id = this.id + '_' + i + '_' + j;
        button.style.display = 'block';
        if(Array.isArray(this.structure[i][1][j])) button.innerHTML = this.structure[i][1][j][0] + " ->";
        else button.innerHTML = this.structure[i][1][j];

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

        button.style.position = 'relative';

        if(Array.isArray(this.structure[i][1][j])) {

          let pop_out = document.createElement('div');
          button.appendChild(pop_out);
//          pop_out.style.display = 'block';
//          pop_out.style.position = 'absolute';
          pop_out.style.position = 'absolute';
          pop_out.style.top = '0';
          pop_out.style.left = '150px';
          pop_out.style.width = '150px';
          pop_out.style.listStyle = 'none';
          pop_out.style.padding = '0';
          pop_out.style.margin = '0';
          pop_out.style.overflow = 'visible';
          pop_out.style.display  = 'block';
          pop_out.style.backgroundColor = this.dropdown_background;


          for(let k = 0; k < this.structure[i][1][j][1].length; ++k) {

            let button_pop = document.createElement('button');

            pop_out.appendChild(button_pop);
            button_pop.id = this.id + '_' + i + '_' + j + '_' + k;
            button_pop.style.display = 'block';

            button_pop.innerHTML = this.structure[i][1][j][1][k];

            button_pop.style.textIndent = '8px';
            button_pop.style.textAlign = 'left';
            button_pop.style.float = 'none';
            button_pop.style.background = 'none';
            button_pop.style.border = 'none';
            button_pop.style.outline = 'none';
            button_pop.style.userSelect = "none";

            button_pop.style.width = '100%';



          }

        }

        button.addEventListener('mouseover', function() {
          button.style.backgroundColor = _this.dropdown_button;
        });

        button.addEventListener('mouseleave', function() {
          button.style.backgroundColor = _this.dropdown_background;
        });

        div_drop.style.display = 'block';
//        console.log(button.offsetWidth);
        this.dropdown_width[i] = button.offsetWidth;
        div_drop.style.display = 'none';

      }

    }

    for(let i = 0; i < this.structure.length; ++i) {
      console.log(this.dropdown_width[i]);
    }

    // add the pop out menues






    // Setting event listener

    let x = document.getElementById(this.id + '_settings');
    let y = document.getElementById(this.id + '_settings_drop');

    // click a menu option
    x.addEventListener('click', function() {

      var test = y.style.display;

      if(test == 'block') {
        test = 'none';
        x.style.backgroundColor = _this.background;
      }
      else {
        test = 'block';
        x.style.backgroundColor = _this.background;
      }
    });

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
