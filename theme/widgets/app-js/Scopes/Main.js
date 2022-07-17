app.scope('Main',($scope,ViewSvc,HomeSearchModule,CardModule)=>{
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
    if (ViewSvc.isCurrentView('card')) {
        CardModule.fetchCard({
            success:()=>{
                
            },
            error:()=>{
                ViewSvc.setView('notFound');
            }
        });
    }
});
