app.scope('Main',($scope,ViewSvc,HomeSearchModule)=>{
    if (ViewSvc.isCurrentView('index')) {
        HomeSearchModule.fetchPaths({
            success:()=>{
                ViewSvc.setView('error')
            },
            error:()=>{
                ViewSvc.setView('error');
            }
        });
    }
});
