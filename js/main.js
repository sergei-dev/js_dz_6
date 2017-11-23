window.onload = function () {
    // task 1
    let coord_block = document.querySelector('.task1');
    let coord_wrap_x = document.querySelector('#task1 p');
    let coord_wrap_y = document.querySelector('#task1 p:last-child');
    coord_block.onmousemove = function (event) {
        let x = event.clientX;
        let y = event.clientY;
        coord_wrap_x.innerHTML = `Координаты мыши по X - ${x}`;
        coord_wrap_y.innerHTML = `Координаты мыши по Y - ${y}`;
    };
    // task 2
    let bg = document.querySelector('.bg');
    bg.ondblclick = function () {
        this.classList.toggle('bg2');
    };
    // task 3
    let wrap = document.querySelector('#task3 .wrapper');
    function get_create_box() {
        for(let i = 0; i <= 400; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            wrap.appendChild(box);
        }
    }
    get_create_box();
    let boxs = document.querySelectorAll('.box');
   function get_border_radius() {
       for(let i = 0; i < boxs.length; i++) {
           boxs[i].onmousemove = function () {
               this.style.borderRadius = '50%';
           }
       }
   }
   get_border_radius();
   // task 4
   function get_delegate(event) {
     let target = event.target;
     if(target.tagName != 'IMG') {
       return;
     }
     else {
       bg_change(target);
     }
   }
   let img_wrap = document.querySelector('.images_wrap');
   let cont = document.querySelector('.wrap');
   function bg_change(target) {
     let src = target.getAttribute('src');
     cont.style.backgroundImage = 'url(' + src + ')';
     cont.classList.add('bg_style');
   }
   img_wrap.addEventListener('click', get_delegate);
   // task 5
   let pos_box = document.querySelector('#task5 div');
   pos_box.style.top = '0';
   function box_change_pos() {
     let pos = parseInt(pos_box.style.top);
     if(pos < 300) {
       pos_box.style.top = (pos + 100) + 'px';
     }
     else {
       pos_box.style.top = '0px';
     }

   }
   pos_box.addEventListener('click', box_change_pos);

   // task 6
   let wrap_trig = document.querySelector('.trig_wrap');
   let trig = document.querySelector('.trigger');
   trig.style.left = 2 + '%';
   function trigger_change() {
     let pos = parseInt(trig.style.left);
     if(pos == 2) {
       trig.style.left = 40 + '%';
       console.log(1);
     }
     else if (pos === 40) {
       trig.style.left = '79%';
       console.log(2);
     }
     else {
       trig.style.left = '2%';
       console.log(0);
     }
   }
   trig.addEventListener('click', trigger_change);
};
