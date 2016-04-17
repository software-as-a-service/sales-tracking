$vm.module_list={
    layout:                     ['--------','.../modules/frame/layout.html','2'],
    home:                       ['--------','.../modules/frame/home.html','2'],
    navigation:                 ['--------','.../modules/frame/navigation.html','2'],

    sales:                      ['20007255','.../modules/sales/sales.html','2'],
    region:                     ['20008362','.../modules/setup/region.html','2'],
    item:                       ['20008363','.../modules/setup/item.html','2'],
    rep:                        ['20008364','.../modules/setup/rep.html','2'],

    query_sales_total_monthl:   ['20008365','.../modules/query/sales_total_monthl.html','2'],
    chart_sales_total_monthl:   ['20008365','.../modules/chart/sales_total_monthl.html','2'],
}
//--------------------------------------------------------
for(key in $vm.module_list){
    $vm.module_list[key][2]=$vm.module_list[key][1];
    $vm.module_list[key][1]=$vm.url($vm.module_list[key][1].replace('...','__BASE__/'+$vm.repository));
    $vm.module_list[key][2]=$vm.module_list[key][2].replace('...','https://github.com/'+$vm.repository+'/blob/master');
}
//--------------------------------------------------------
var jsN=0;
var last=function(){
    $('head').append("<style> *{ margin:0; } html,body { height:100%;} </style>");
    setTimeout(function () {
        $.ajaxSetup({ cache: true });
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/jquery-ui.min.js',function(){last_last();});
        $.getScript('https://ajax.aspnetcdn.com/ajax/jquery.validate/1.14.0/jquery.validate.min.js',function(){last_last();});
        $.getScript('https://sdk.amazonaws.com/js/aws-sdk-2.1.34.min.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/system/third/handsontable.full.min.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/system/third/ace/ace.js',function(){last_last();});
        $.getScript('https://cbs.wappsystem.com/dev/vm.js?v=20160108',function(){last_last();});
        $.getScript('https://www.google.com/jsapi',function(){
            google.load('visualization', '1', {'packages':['corechart'],callback:function(){last_last();} } );
        });
        $('head').append("<link rel='stylesheet' media='screen' href='https://cbs.wappsystem.com/system/third/handsontable.full.min.css'>");
        $('head').append("<link rel='stylesheet' href='https://ajax.aspnetcdn.com/ajax/jquery.ui/1.11.4/themes/redmond/jquery-ui.css'>");
    }, 300);

}
//--------------------------------------------------------
var last_last=function(){
    jsN++; if(jsN===7) $vm.load_demo();
}
//--------------------------------------------------------
