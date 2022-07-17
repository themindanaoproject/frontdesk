app.scope('Main',($scope,ViewSvc,HomeSearchModule,HeaderSearchModule,CardModule,UtilSvc)=>{
    $scope.UtilSvc = UtilSvc;
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
        HeaderSearchModule.fetchPaths({
            success:()=>{

            },
            error:()=>{

            }
        });
    }
});
