$("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
  });

var cateBoxChange = function(value){
  console.log("값변경 테스트 : " + value);
  $("#cate").val(value);
}