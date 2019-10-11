$(function () {
    $.ajax({
          url: 'https://www.tianqiapi.com/api/?version=v1&appid=test&appsecret=test',
                    type: 'get',
                    dataType: 'json',
                    error: function(resp, status) {
                        console.log('请求失败：', status, resp);
                    },
                    success: function(resp, status) {
                        console.log('yes');
                        var wCity = resp.data[1].date;
                        alert(wCity);
                        console.log(wCity);
                        
                            $(".info").append(wCity);
                        
                    }
    
    
    });
});