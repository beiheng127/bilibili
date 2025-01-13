function tableChange() {
    var lis = document.getElementById("SwitchNav").getElementsByTagName("li");
    var spans = document.getElementById("SwitchBigPic").getElementsByTagName("span");
    var current_index = 0;//保存当前焦点元素的索引
    var timer = setInterval(autoChange, 3000);
    for (var i = 0; i < lis.length; i++) {//遍历lis，为各li元素添加事件
        lis[i].onmouseover = function () {
            if (timer) {//定时器存在时清除定时器
                clearInterval(timer);
            }
            for (var i = 0; i < lis.length; i++) {
                if (lis[i] == this) {
                    spans[i].className = "sp";
                    current_index = i;
                }
                else {
                    spans[i].className = "";
                }
            }
        }
        lis[i].onmouseout = function () {//启动计时器，恢复图片自动切换
            timer = setInterval(autoChange, 3000);
        }
    }
    function autoChange() {
        ++current_index;
        if (current_index == lis.length) {//达到上限，归为0
            current_index = 0;
        }
        for (var i = 0; i < lis.length; i++) {
            spans[i].className = "";
        }
        spans[current_index].className = "sp";
    }
}
tableChange();