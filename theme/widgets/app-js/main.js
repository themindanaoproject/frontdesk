strawberry.create('app',()=>{
    setTimeout(()=>{
        $(".site-loader").fadeOut();
        $(".site-loader").html("");
        $("#main").fadeIn();
    },1500);
});
