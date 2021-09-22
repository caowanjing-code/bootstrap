// 对于左边点击事件的实现
$(function(){
var ulist=$('.list-group button').length;
console.log(ulist);
for(let i=0;i<ulist;i++){
    $('.list-group button').eq(i+2).click(function(){
        // console.log(7777);
        $('.col-12').eq(i).css("display","block");
        $('.col-12').eq(i).siblings().css("display","none");
    })

}
    

})