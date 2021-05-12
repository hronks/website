
import { Menu } from './modules/menu.mjs';
import { SubWindow } from './modules/sub_window.mjs';
import { MainViewState } from './modules/website.mjs';

let top_menu = new Menu(

  'top_menu', document.getElementById('top_menu_wrapper'),
  '20px', '10px 20px',
  'black', '#f5f5f5', '#dcdcdc',
  'black', '#f5f5f5', '#c0c0c0',
  [
    ["File", ["Save", "Load"]],
    ["View", ["Save view", "Load view", "Text"]],
    ["Data", ["Save", "Load"]],
    ["Model", ["Save", "Load"]]
  ]);

top_menu.create();


// load a default window state if there isn't one saved

//localStorage.clear();
if (localStorage.getItem('window_state') == null) {
  var window_state =
  [
    ['Model', '60px', '40px', '500px', '400px'],
    ['Data', '90px', '700px', '400px', '350px']
  ];
  localStorage.setItem("window_state", JSON.stringify(window_state));
}

// Pull the saved window state from memory and load
var saved_window_state = JSON.parse(localStorage.getItem("window_state"));
let state = new MainViewState(
  'main_view_state', document.getElementById('main_view'),
  saved_window_state,
);
state.load_state();


// menu click functions

top_menu.if_clicked('View', 'Save view', function() {

  state.update();
  var window_state = state.sub_windows_form;
  localStorage.setItem("window_state", JSON.stringify(window_state));

  console.log("window view saved:");
  console.log(JSON.stringify(window_state));
});
