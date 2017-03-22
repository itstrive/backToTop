/**
 * Created by strive on 2017/3/22.
 */
;(function($){
    $.fn.backToTop=function(options){
        var defaultConfig={
            type:'tap',
            target:0,
            duration:1000,
            easing:'ease-out'
        };
        var config=$.extend(defaultConfig,options);

        this.on(config.type,function(){

            var count=Math.floor(config.duration/30);
            var start=document.body.scrollTop;
            var target=config.target;

            var dis=target-start;

            var n=0; //当前走第几次了
            var timer=setInterval(function(){
                n++;

                switch (config.easing){
                    case 'linear':
                        break;
                    case 'ease-in':
                        var a=n/count;
                        var cur=start+dis*a*a*a;
                        break;
                    case 'ease-out':
                        var a=1-n/count;
                        var cur=start+dis*(1-a*a*a);
                        break;
                }
                document.body.scrollTop=cur;
                if(n==count){
                    clearInterval(timer);
                }
            },30);
        });
    };
})(Zepto)





































