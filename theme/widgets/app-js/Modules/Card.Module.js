app.service('CardModule',($scope,SearchSvc,UrlSvc,PathSvc,$patch,SidebarModule)=>{

    let setCardDeviceView=()=>{
        if ($(window).width()<769) {
            $('.card-cover-photo').css('height','200px');
        } else {
            $('.card-cover-photo').css('height','300px');
        }
    }

    let regions = ['Zamboanga_Peninsula','Northern_Mindanao','Davao_Region','SOCCSKSARGEN','Caraga','BARMM'];

    return {
        fetchCard:(result)=>{
            let region = UrlSvc.getParam('region');
            if (region==='') {
                result.error();
                return;
            }
            if (!regions.includes(region)) {
                result.error();
                return;
            }

            let province = UrlSvc.getParam('province') ?? null;
            if (province==='') province = null;

            let towncity = UrlSvc.getParam('tc') ?? null;
            if (towncity==='') towncity = null;

            let urlParams = PathSvc.joinPathObject({
                region: region,
                province: province,
                towncity: towncity
            },'towncity');

            SearchSvc.get.cards(urlParams,{
                success:(response)=>{
                    $scope.Card = response.data;
                    console.log(response.data);
                    $patch('CardSinglePage');
                    setCardDeviceView();
                },
                error:()=>{

                }
            });

        }
    }
});
