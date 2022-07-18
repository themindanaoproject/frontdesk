app.service('SidebarModule',($scope)=>{

    let sidebarWidth = '';
    let isSidebarActive = false;
    let isMobile = false;
    let sidebarMargin = '';

    let styleTagElement=document.createElement('style');

    if ($(window).width()<420) {
        sidebarWidth = $(window).width();
        isMobile = true;
        sidebarMargin = (($(window).width())-3);
        styleTagElement.innerText = '.sidebar-module-main{width:'+$(window).width()+'px;} .card-page-main.w-12{width:'+$(window).width()+'px;} .card-page-main-mobile-ctrl{width:'+(($(window).width())*2)+'px;margin-left:-'+sidebarMargin+'px;}';
    } else {
        sidebarWidth = '420px';
        isMobile = false;
        styleTagElement.innerText = '.sidebar-module-main{width:0px;}';
    }

    let headElements=document.getElementsByTagName('script')[0];
    headElements.parentNode.insertBefore(styleTagElement,headElements);


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
