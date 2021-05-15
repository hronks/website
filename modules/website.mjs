import { SubWindow } from './sub_window.mjs';

class MainViewState {

  constructor(
    id, parent_id, sub_windows_form,
    local_storage_name, overwrite_storage
  ) {
    this.id = id;
    this.parent_id = parent_id;
    this.sub_windows_form = sub_windows_form;
    this.sub_windows = [];
    this.local_storage_name = local_storage_name;
    this.overwrite_storage_form = overwrite_storage;


    // load a default window state if there isn't one saved

    //localStorage.clear();
    if (localStorage.getItem(local_storage_name) == null || overwrite_storage) {
      localStorage.setItem(local_storage_name, JSON.stringify(sub_windows_form));
    }

    // Pull the saved window state from memory and load
    this.sub_windows_form = JSON.parse(localStorage.getItem(local_storage_name));


  }

  load() {

    for(let i = 0; i < this.sub_windows_form.length; ++i) {
      this.sub_windows[i] = new SubWindow(
        this.id + '_sub_window_' + i, this.parent_id,
        this.sub_windows_form[i][0],
        this.sub_windows_form[i][1],
        this.sub_windows_form[i][2],
        this.sub_windows_form[i][3],
        this.sub_windows_form[i][4],
        this.sub_windows_form[i][5]
      );
      this.sub_windows[i].create();
    }

  };

  update() {

      for(let i = 0; i < this.sub_windows.length; ++i) {

        this.sub_windows_form[i][1] = this.sub_windows[i].top;
        this.sub_windows_form[i][2] = this.sub_windows[i].left;
        this.sub_windows_form[i][3] = this.sub_windows[i].width;
        this.sub_windows_form[i][4] = this.sub_windows[i].height;

      }

  };

/*
  on_display(sub_window, action) {

    if (document.getElementById(sub_window) == null)
      console.log(sub_window + ' does not exist!');

    else {
      action;
    }

  };
  */

}






export { MainViewState };
