// 图片轮换

window.onload = function() {
    //获取图片
    var img = document.getElementById("pic");

    // //鼠标经过图片
    // img.onmouseover = function() {
    //     this.src = "images/pic2.jpg";
    // }

    // //鼠标离开图片
    // img.onmouseout = function() {
    //     this.src = "images/pic.jpg";
    // }

    // 鼠标经过第 1 个图片
    document.getElementById("a1").onmouseover = function() {
        img.src = "images/pic.jpg";
    }

    // 鼠标经过第 2 个图片
    document.getElementById("a2").onmouseover = function() {
        img.src = "images/pic2.jpg";
    }

    // 鼠标经过第 3 个图片
    document.getElementById("a3").onmouseover = function() {
        img.src = "images/pic3.jpg";
    }

    // 鼠标经过第 4 个图片
    document.getElementById("a4").onmouseover = function() {
        img.src = "images/pic4.jpg";
    }

    var index = 0;

    function lunbo() {
        index++;
        // 判断index是否大于4
        if (index > 4) {
            document.getElementById("a4").style.backgroundColor = "#fff";
            index = 1;
        }
        // 获取img对象
        var img = document.getElementById("pic");
        img.src = "images/pic" + index + ".jpg";
        // 设置num图标背景颜色
        document.getElementById("a" + index).style.backgroundColor = "#ffae00";
        document.getElementById("a" + (index - 1)).style.backgroundColor = "#fff";
    }
    // 定义定时器
    setInterval(lunbo, 2000);
}