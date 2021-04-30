export function local_menu(id_suffix, location, menu) {

  // Write the HTML of the menu

  var string_out = "";

  for(var i = 0; i < menu.length; ++i) {
    string_out += '<div class="dropdown">';
    string_out += '<button class="dropbtn" id="';
    string_out += 'select_' + menu[i][0] + id_suffix;
    string_out += '">';
    string_out += menu[i][0];
    string_out += '</button>';
    string_out += '<div class="dropdown-content" id="';
    string_out += menu[i][0] + '_dropdown' + id_suffix;
    string_out += '">';

    for(var j = 0; j < menu[i][1].length; ++j) {
      string_out += '<button id="'
      string_out += 'select_' + menu[i][0] + '_' + menu[i][1][j] + id_suffix;
      string_out += '">';
      string_out += menu[i][1][j];
      string_out += '</button>';
    }

    string_out += '</div>';
    string_out += '</div>';
  }

  document.getElementById(location).innerHTML = string_out;


  // Dropdown list event listeners

  for(var i = 0; i < menu.length; ++i) {

    let x = 'select_' + menu[i][0] + id_suffix;
    let y = menu[i][0] + '_dropdown' + id_suffix;

    document.getElementById(x).addEventListener("click", function(i){
      document.getElementById(y).classList.toggle("show");
    });

  }


  // Close the dropdown if the user clicks outside of it

  window.mouseover = function(e) {
      if (!e.target.matches('.dropbtn')) {


      }
  }


  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("View_dropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }


}

export function test() {


}
