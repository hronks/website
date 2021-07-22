
import { Menu } from './modules/menu.mjs';
import { SubWindow } from './modules/sub_window.mjs';
import { MainViewState } from './modules/website.mjs';

import { data_window } from './window_content/data.mjs';

let top_menu = new Menu(

  'top_menu', 'top_menu_wrapper',
  '20px', '10px 20px',
  'black', '#f5f5f5', '#dcdcdc',
  'black', '#f5f5f5', '#c0c0c0',
  [
    ["File", ["Save", "Load"]],
    ["View", ["Save view", "Load view", "Text"]],
    ["Data", ["Save", "Load"]],
    ["Model", ["Save", "Load"]]
  ]);
top_menu.load();


// set up the windows

localStorage.clear();

let main_view_state = new MainViewState(

  'main_view_state', 'main_view',
  [
    ['Model', '60px', '40px', '500px', '400px', "hello", true],
    ['Data', '90px', '700px', '400px', '350px', data_window(), true]
  ],
  'saved_window_state', false
);
main_view_state.load();


// menu click functions

top_menu.if_clicked('View', 'Save view', function() {

  main_view_state.update();
  localStorage.setItem('saved_window_state', JSON.stringify(
    main_view_state.sub_windows_form
  ));

  console.log("window view saved:");
  console.log(JSON.stringify(main_view_state.sub_windows_form));
});
