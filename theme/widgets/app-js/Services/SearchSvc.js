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
            },
            cards:(urlParams,result)=>{
                $.ajax({
                    method:'GET',
                    url: MiddledeskSvc.root+'/cards'+urlParams,
                    contentType:'application/json',
                    success:(response)=>result.success(response),
                    error:()=>result.error()
                });
            }
        },
        search:{
            path:(needle,haystack)=>{
                let results = [];
                for (var key in haystack) {
                    let skey = key.toLowerCase();
                    let skeyword = needle.toLowerCase();
                    if (skey.includes(skeyword)) {
                        results.push({
                            name: key,
                            path: haystack[key]
                        });
                    }
                }
                return results;
            }
        }
    }
});
