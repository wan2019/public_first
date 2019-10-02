$(function () {
    $.ajax({
          url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-ABDE2F5E-A02F-419D-B29B-EC212EFAEDC6&format=JSON&startTime=',
                    type: 'get',
                    dataType: 'json',
                    error: function(resp, status) {
                        console.log('请求失败：', status, resp);
                    },
                    success: function(resp, status) {
                        var wCity = resp.result;
                        alert(wCity);
                        console.log(wCity);
                        
                            $(".info").append(wCity);
                        
                    }
    
    
    });
});