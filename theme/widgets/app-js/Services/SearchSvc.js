app.service('SearchSvc',($scope,ProjectLibrarySvc)=>{
    return {
        get: {
            paths:(success,error)=>{
                $.ajax({
                    method:'GET',
                    url: ProjectLibrarySvc.root+'/paths.json',
                    //url:'https://mellow-sable-853914.netlify.app',
                    contentType:'application/json',
                    success:(response)=>{
                        console.log(response);
                    }
                });
            }
        }
    }
});
