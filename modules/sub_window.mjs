import { Object } from './object.mjs';
import { Field } from './object.mjs';
import { ObjectSet } from './object.mjs';

class SubWindow {

  constructor(
    id, parent_id, header, top, left, width, height, object_set, content, visible
  ) {
    this.id = id;
    this.parent_id = parent_id;
    this.header = header;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
    this.object_set = object_set;
    this.content = content;
    this.visible = visible;
  }


  create() {

    let _this = this;
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');

    document.getElementById(this.parent_id).appendChild(div1);
    div1.id = this.id;
    div1.style.position = 'absolute';
//    div1.style.zIndex = '9';
    div1.style.backgroundColor = '#f5f5f5';
    div1.style.textAlign = 'left';
    div1.style.border = '1px solid #d3d3d3';
    div1.style.resize = 'both';
    div1.style.overflow = 'auto';
    if(!(this.visible)) div1.style.visibility = 'hidden';

    div1.style.fontFamily = 'sans-serif';

    div1.style.top = this.top;
    div1.style.left = this.left;
    div1.style.width = this.width;
    div1.style.height = this.height;


    document.getElementById(this.id).appendChild(div2);
    div2.id = this.id + '_header';
    div2.style.padding = '10px';
    div2.style.cursor = 'move';
//    div2.style.zIndex = '10';
    div2.style.backgroundColor = '#2196F3';
    div2.style.color = '#fff';

    div2.innerHTML = this.header;

    document.getElementById(this.id).appendChild(div3);
    div3.id = this.id + '_content';

    console.log('!!!');
    console.log(this.object_set);

    for(let i = 0; i < this.content.length; ++i) {
      //create(this.content[i], 'div4');
      let div4 = document.createElement('div');
      div4.innerHTML = this.object_set[this.content[i]];
      div3.appendChild(div4);

    }

    // Make the DIV element draggable:
    dragElement(div1);

    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      document.getElementById(elmnt.id + '_header').onmousedown = dragMouseDown;

//      if (document.getElementById(elmnt.id + '_header')) {
        // if present, the header is where you move the DIV from:
//      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
//        elmnt.onmousedown = dragMouseDown;
//      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        _this.top = elmnt.style.top;
        _this.left = elmnt.style.left;



      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }


  }




}




export { SubWindow };
