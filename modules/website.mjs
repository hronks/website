import { SubWindow } from './sub_window.mjs';

class MainViewState {

  constructor(
    id, parent, sub_windows_form
  ) {
    this.id = id;
    this.parent = parent;
    this.sub_windows_form = sub_windows_form;
    this.sub_windows = [];

  }

  load_state() {

    for(let i = 0; i < this.sub_windows_form.length; ++i) {
      this.sub_windows[i] = new SubWindow(
        'sub_window_' + i, this.parent,
        this.sub_windows_form[i][0],
        this.sub_windows_form[i][1],
        this.sub_windows_form[i][2],
        this.sub_windows_form[i][3],
        this.sub_windows_form[i][4]
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

}






export { MainViewState };
