app.service('SidebarModule',($scope)=>{

    let sidebarWidth = '';
    let isSidebarActive = false;
    let isMobile = false;
    let sidebarMargin = '';

    if ($(window).width()<420) {
        sidebarWidth = $(window).width();
        isMobile = true;
        setTimeout(()=>{
            $('.sidebar-module-main').css('width',$(window).width()+'px');
            $('.card-page-main').css('width',$(window).width()+'px');
            sidebarMargin = (($(window).width())-3);
            $('.card-page-main-mobile-ctrl').css({
                'width': (($(window).width())*2)+'px',
                'margin-left': '-'+sidebarMargin+'px'
            });
        },1500);
    } else {
        sidebarWidth = '420px';
        isMobile = false;
        setTimeout(()=>{
            $('.sidebar-module-main').css('width','0px');
        },1000);
    }

    let clickCount = 1;

    $scope.SidebarModule = {
        ctrl:(element)=>{
            if (clickCount===1) {
                if (!isSidebarActive) {
                    if (isMobile) {
                        $('.card-page-main-mobile-ctrl').css({
                            'margin-left': '0px'
                        });
                    } else {
                        $('.sidebar-module-main').css('width',sidebarWidth);
                    }
                }
                if (isSidebarActive) {
                    if (isMobile) {
                        $('.card-page-main-mobile-ctrl').css({
                            'margin-left': '-'+sidebarMargin+'px'
                        });
                    } else {
                        $('.sidebar-module-main').css('width','0px');
                    }
                }
                isSidebarActive = !isSidebarActive;
            } else {
                clickCount=0;
            }
            clickCount++;
        }
    }

    return {

    }
});
