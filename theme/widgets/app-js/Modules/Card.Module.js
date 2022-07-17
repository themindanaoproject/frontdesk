app.service('CardModule',($scope,SearchSvc,UrlSvc,PathSvc)=>{

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
                    console.log(response);
                },
                error:()=>{
                    
                }
            });

        }
    }
});
