$(document).ready(function(){
   $(".vg-b1").click(function(){
    $("i").hide()
    var ten = $(".vg-i1").val();
    var mail = $(".vg-i2").val();
    var subject = $(".vg-i3").val();
    if(ten.length < 2){
        $(".bloi1").show();
    }
    else if(mail == ""){
        $(".bloi2").show();
    }
    else if(subject == ""){
        $(".bloi3").show();
    }
   })
}
)
