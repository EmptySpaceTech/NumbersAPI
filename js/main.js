$(document).ready(function() {
  $("#btnClick").click(function() {
    var temp = $("#ipText").val();
    var val = $('input[name=select]:checked').val();
    var reqUrl;
    if (val == 1) {
      reqUrl = 'http://numbersapi.com/'+temp+'/math';
    }else if (val == 2) {
      reqUrl = 'http://numbersapi.com/'+temp;
    }else {
      reqUrl = 'http://numbersapi.com/'+temp+'/year';
    }
    $.get(reqUrl, function(data) {
      $('#text').text(data);
    });
  });
});
