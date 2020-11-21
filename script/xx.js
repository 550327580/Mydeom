var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");


//各元素内的内容遍历，添加上监听事件
for(var i = 0; i < items.length; i++){
  items[i].addEventListener("click",uulo);
  inputs[i].addEventListener("blur",inp);
  inputs[i].addEventListener("keypress",key);


}

function uulo (){
   this.className = "ea";       //点击给元素添加类名
   var input = this.querySelector("input");     //获取这个input内全部内容
   input.focus();       //失去焦点
   input.setSelectionRange(0,input.value.length);       //选中input内全部内容
}

function inp(){
    this.previousElementSibling.innerHTML = this.value;     //转换节点重新输出
    this.parentNode.className = "";     //类名指定为空
}
function key(event){
    if(event.which===13){    //键盘值为13
        inp.call(this);     //重新定向this 
    }

}