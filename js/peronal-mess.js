$(function(){
    $("#ID-card").focus(function(){


        // 
        const idCardReg=/^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/;
        // console.log($("#ID-card").val());
      console.log(idCardReg.test(idCardReg.test($("#ID-card").val())));
        // console.log(11111);
        if($("#ID-card").val()==''){
            $(".lable-idcard").text('输入不能为空')
        }else{
        
            if(!(idCardReg.test($("#ID-card").val()))){
                $(".lable-idcard").text('身份证号码错误');
           }else{
               $(".lable-idcard").text('身份证号码正确');
               }
        }
    })
 

})