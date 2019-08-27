 let btns = document.querySelectorAll('.footer_img>div');
    for (let i = 0; i < btns.length; i++) {
        btns[i].index = i;
        btns[i].onclick = function () {
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove('active');
            }
            img_body.style.transform = 'translate(' + this.index * -920 + 'px)';
            btns[this.index].classList.add('active');
        }
    }
    //alert(btn.length)
    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            //alert(obj.currentStyle[attr]);
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }//style内或者外链CSS文件的样式不能直接获取到
    btn.addEventListener('click', function (e) {
        e.stopPropagation();////阻止btn事件冒泡
        if (getStyle(div, 'display') === 'none') {//先判断浮层display状态，关闭则显示，显示则关闭
            btn.innerText = '点我关闭浮层';
            div.style.display = 'block';
        } else {
            btn.innerText = '点我打开浮层';
            div.style.display = 'none';
        }
        setTimeout(function () {//节省资源方法，假如页面有很多类似功能，每次都设置会浪费系统资源
            document.addEventListener('click', function () {
                div.style.display = 'none';
            });
        }, 0)
    });
    div.addEventListener('click', function (e) {
        e.stopPropagation();//阻止div事件冒泡
    })
