
var naverApi = {
    //ログインポップアップ
    naverLogin : function(){        
        location.href = "https://nid.naver.com/oauth2.0/authorize?client_id="+naverAppId+"&response_type=code&redirect_uri=http%3A%2F%2F54.65.156.106%2Fpicker%2Fweb%2Fapp.php%2Flogin%2Fnaver&state="+naverState;
    },



};






