app.service('HomeSearchModule',(SearchSvc)=>{
    return {
        fetchPaths:(result)=>{
            SearchSvc.get.paths({
                success:()=>{

                },
                error:()=>result.error()
            });
        }
    }

});
