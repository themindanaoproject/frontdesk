app.service('SearchSvc',($scope,MiddledeskSvc)=>{
    return {
        get: {
            paths:(result)=>{
                $.ajax({
                    method:'GET',
                    url: MiddledeskSvc.root+'/paths?region=Mindanao',
                    contentType:'application/json',
                    success:(response)=>result.success(response),
                    error:()=>result.error()
                });
            }
        }
    }
});
