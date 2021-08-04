
import { Menu } from './modules/menu.mjs';
import { Object } from './modules/object.mjs';
import { Field } from './modules/object.mjs';
import { ObjectSet } from './modules/object.mjs';
import { SubWindow } from './modules/sub_window.mjs';
import { MainViewState } from './modules/website.mjs';

import { data_window } from './window_content/data.mjs';


//module.createRequire('window_content/model.html')


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


let site_object_set = new ObjectSet( [
    ['field', ['input_A', 'Input A', 'string']],
    ['field', ['input_B', 'Input B', 'string']],
    ['field', ['input_B', 'Input C', 'string']]
  ]
)

let main_view_state = new MainViewState(

  'main_view_state', 'main_view', site_object_set,
  [
    ['Model', '60px', '40px', '500px', '400px', [0, 1, 2], true],
    ['Data', '90px', '700px', '400px', '350px', [0, 2], true]
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
