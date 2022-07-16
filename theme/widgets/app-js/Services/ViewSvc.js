app.service('ViewSvc',($scope,$patch,UrlSvc)=>{
    if (null!==UrlSvc.getParam('page')) {
        $scope.View = {
            state: 'page'
        }
    } else if (null!==UrlSvc.getParam('region')) {
        $scope.View = {
            state: 'dashboard'
        }
    } else {
        $scope.View = {
            state: 'index'
        }
    }
    return {
        setView:(view)=>{
            $scope.View.state = view;
            $patch('PageView');
        },
        isCurrentView:(view)=>{
            return ($scope.View.state===view);
        }
    }
});
