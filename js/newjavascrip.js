$("#sub").click(function(){
    var name=$("#v-name").text();
    var phone=$("#v-phone").text();
    var mess=$("#v-mess").text();
        if(name == ""){
            alert("Bạn chưa nhập tên :(");
        }
        if(phone == ""){
            alert("Bạn chưa nhập phone kìa -_-");
        }
        if(mess == ""){
            alert("Bạn có gì muốn hỏi k :)");
        }
        if(name != "" && phone != "" && mess != ""){
            alert("Chúng tôi sẽ phản hồi bạn sớm thôi <.>")
        }
});

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
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
    //event to top for class "btn-top" using class "trung-header" for target
    $(".btn-top").click(function() {
        $('html,body').animate({
            scrollTop: $(".trung-header").offset().top},
            'slow');
    });
});