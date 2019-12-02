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
})