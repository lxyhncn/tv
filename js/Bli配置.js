/**
 * 影视TV 弹幕支持 
    * https://t.me/fongmi_offical/
    * https://github.com/FongMi/Release/tree/main/apk
 * 皮皮虾DMBox 弹幕支持
    * 设置 > 窗口预览 > 开启
    * https://t.me/pipixiawerun
    * vod_area:'bilidanmu'
 * Cookie设置
    * Cookie获取方法 https://ghproxy.net/https://raw.githubusercontent.com/UndCover/PyramidStore/main/list.md
 * Cookie设置方法1: DR-PY 后台管理界面
    * CMS后台管理 > 设置中心 > 环境变量 > {"bili_cookie":"XXXXXXX","vmid":"XXXXXX"} > 保存
 * Cookie设置方法2: 手动替换Cookie
    * 底下代码 headers的
    * "Cookie":"$bili_cookie"
    * 手动替换为
    * "Cookie":"将获取的Cookie黏贴在这"
 */

var rule = {
    title:'Bli',
    host:'https://api.bilibili.com',
    homeUrl:'/x/web-interface/search/type?search_type=video&keyword=流行音乐&page=2',
    url:'/x/web-interface/search/type?search_type=videofyfilter',
    class_name:'演唱会&歌曲&音乐&舞蹈&体育&戏曲&旅游&风景&美食&搞笑&沙雕动画&儿童&女性&纪录&综艺&太极拳&白噪音&软件教程&动物自然&相声小品&旅行探险',
    class_url:'演唱会4K&热歌&纯音乐&舞蹈&体育&戏曲&旅游&风景4K&美食超清&搞笑&沙雕动画&儿童&小姐姐4K&纪录片超清&综艺大全&太极拳&白噪音4K&软件教程&动物世界超清&相声小品&旅行探险',
    filterable: 1,
    filter_url: '&keyword={{fl.tid}}&page=fypage&duration={{fl.duration}}&order={{fl.order}}',
    filter_def:{
        演唱会4K:{tid:'演唱会4K'},
    	热歌:{tid:'热歌'},
        纯音乐:{tid:'纯音乐'},
        舞蹈:{tid:'舞蹈'},
        体育:{tid:'体育'},
        戏曲:{tid:'戏曲'},
        旅游:{tid:'旅游'},
        风景4K:{tid:'风景4K'},
        美食超清:{tid:'美食超清'},
        搞笑:{tid:'搞笑'},
        沙雕动画:{tid:'沙雕动画'},
        儿童:{tid:'儿童'},
        小姐姐4K:{tid:'小姐姐4K'},
        纪录片超清:{tid:'纪录片超清'},
        综艺大全:{tid:'综艺大全'},
        太极拳:{tid:'太极拳'},
        白噪音4K:{tid:'白噪音4K'},
        软件教程:{tid:'软件教程'},
        动物世界超清:{tid:'动物世界超清'},
        相声小品:{tid:'相声小品'},
        旅行探险:{tid:'旅行探险'}
    },
    filter: {
        "演唱会4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"演唱会4K"},{"n":"演唱会合集","v":"演唱会合集"},{"n":"红馆演唱会","v":"红馆演唱会"},{"n":"Beyond","v":"Beyond演唱会"},{"n":"张学友","v":"张学友演唱会"},{"n":"刘德华","v":"刘德华演唱会"},{"n":"谭咏麟","v":"谭咏麟演唱会"},{"n":"李克勤","v":"李克勤演唱会"},{"n":"陈奕迅","v":"陈奕迅演唱会"},{"n":"伍佰","v":"伍佰演唱会"},{"n":"SHE","v":"SHE演唱会"},{"n":"陈小春","v":"陈小春演唱会"},{"n":"草蜢","v":"草蜢演唱会"},{"n":"陈慧娴","v":"陈慧娴演唱会"},{"n":"刀郎","v":"刀郎演唱会"},{"n":"邓紫棋","v":"邓紫棋演唱会"},{"n":"凤凰传奇","v":"凤凰传奇演唱会"},{"n":"林子祥","v":"林子祥演唱会"},{"n":"李宗盛","v":"李宗盛演唱会"},{"n":"罗大佑","v":"罗大佑演唱会"},{"n":"梅艳芳","v":"梅艳芳演唱会"},{"n":"迈克尔杰克逊","v":"迈克尔杰克逊演唱会"},{"n":"容祖儿","v":"容祖儿演唱会"},{"n":"任贤齐","v":"任贤齐演唱会"},{"n":"王心凌","v":"王心凌演唱会"},{"n":"张韶涵","v":"张韶涵演唱会"},{"n":"张国荣","v":"张国荣演唱会"},{"n":"周慧敏","v":"周慧敏演唱会"},{"n":"卓依婷","v":"卓依婷演唱会4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "热歌":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐"},{"n":"粤语","v":"粤语歌曲"},{"n":"国语","v":"国语歌曲"},{"n":"老歌","v":"怀旧老歌"},{"n":"热榜","v":"2023年热们歌曲"},{"n":"经典","v":"经典老歌"},{"n":"香港","v":"香港歌曲"},{"n":"台湾","v":"台湾歌曲"},{"n":"内地","v":"内地歌曲"},{"n":"古风","v":"古风歌曲"},{"n":"闽南","v":"闽南语歌曲"},{"n":"舞曲","v":"DJ歌曲"},{"n":"网络","v":"网红歌曲"},{"n":"抖音","v":"抖音热歌"},{"n":"快手","v":"快手热歌"},{"n":"对唱","v":"情歌对唱"},{"n":"迪斯科","v":"迪斯科"},{"n":"70年代","v":"70年代歌曲"},{"n":"80年代","v":"80年代歌曲"},{"n":"90年代","v":"90年代歌曲"},{"n":"超清MV","v":"超清MV"},{"n":"酒廊情歌","v":"酒廊情歌"},{"n":"山地情歌","v":"山地情歌"},{"n":"卓依婷","v":"卓依婷"},{"n":"新春","v":"新年歌曲"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "纯音乐":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"纯音乐"},{"n":"钢琴","v":"钢琴曲"},{"n":"小提琴","v":"小提音乐"},{"n":"手风琴","v":"手风音乐"},{"n":"二胡","v":"二胡音乐"},{"n":"古筝","v":"古筝音乐"},{"n":"笛子","v":"笛子音乐"},{"n":"琵琶","v":"琵琶音乐"},{"n":"古琴","v":"古琴音乐"},{"n":"编钟","v":"编钟音乐"},{"n":"协奏曲","v":"协奏曲"},{"n":"古风音乐","v":"古风纯音乐"},{"n":"背景音乐","v":"背景音乐"},{"n":"助眠音乐","v":"助眠音乐"},{"n":"胎教音乐","v":"胎教音乐"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "舞蹈":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"舞蹈"},{"n":"古典舞","v":"古典舞"},{"n":"芭蕾舞","v":"芭蕾舞"},{"n":"民族舞","v":"民族舞"},{"n":"现代舞","v":"现代舞"},{"n":"踢踏舞","v":"踢踏舞"},{"n":"爵士舞","v":"爵士舞"},{"n":"拉丁舞","v":"拉丁舞"},{"n":"摩登舞","v":"摩登舞"},{"n":"街舞","v":"街舞"},{"n":"广场舞","v":"广场舞"},{"n":"宅舞","v":"宅舞"},{"n":"肚皮舞","v":"肚皮舞"},{"n":"钢管舞","v":"钢管舞"},{"n":"英歌舞","v":"英歌舞"},{"n":"劲舞","v":"热舞劲舞"},{"n":"独舞","v":"独舞"},{"n":"群舞","v":"群舞"},{"n":"组舞","v":"组舞"},{"n":"舞剧","v":"舞剧"},{"n":"国风舞蹈","v":"国风舞蹈"},{"n":"女团热舞","v":"女团热舞"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "体育":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"体育赛事"},{"n":"NBA","v":"NBA"},{"n":"世界杯","v":"世界杯"},{"n":"足球","v":"足球赛"},{"n":"赛艇","v":"赛艇"},{"n":"马拉松","v":"马拉松"},{"n":"拳击","v":"拳击"},{"n":"柔道","v":"柔道"},{"n":"跆拳道","v":"跆拳道"},{"n":"摔跤","v":"摔跤"},{"n":"高尔夫","v":"高尔夫"},{"n":"WWE","v":"WWE"},{"n":"奥运会","v":"奥运会"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "戏曲":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"戏曲4K"},{"n":"B梆子腔","v":"梆子腔戏曲4K"},{"n":"C采茶戏","v":"采茶戏戏曲4K"},{"n":"C潮剧","v":"潮剧戏曲4K"},{"n":"C彩调","v":"彩调戏曲4K"},{"n":"C川剧","v":"川剧戏曲4K"},{"n":"D滇剧","v":"滇剧戏曲4K"},{"n":"D傣剧","v":"傣剧戏曲4K"},{"n":"E二人台","v":"二人台戏曲4K"},{"n":"G高腔","v":"高腔戏曲4K"},{"n":"G高甲戏","v":"高甲戏戏曲4K"},{"n":"G赣剧","v":"赣剧戏曲4K"},{"n":"G桂剧","v":"桂剧戏曲4K"},{"n":"H黄梅戏","v":"黄梅戏戏曲4K"},{"n":"H河北梆子","v":"河北梆子戏曲4K"},{"n":"H河南曲剧","v":"河南曲剧戏曲4K"},{"n":"H淮剧","v":"淮剧戏曲4K"},{"n":"H沪剧","v":"沪剧戏曲4K"},{"n":"H滑稽戏","v":"滑稽戏戏曲4K"},{"n":"H徽剧","v":"徽剧4K"},{"n":"H汉剧","v":"汉剧戏曲4K"},{"n":"H湖南花鼓戏","v":"湖南花鼓戏戏曲4K"},{"n":"J京剧","v":"京剧戏曲4K"},{"n":"J晋剧","v":"晋剧戏曲4K"},{"n":"J吉剧","v":"吉剧戏曲4K"},{"n":"K昆曲","v":"昆曲戏曲4K"},{"n":"L梨园戏","v":"梨园戏戏曲4K"},{"n":"L龙江剧","v":"龙江剧戏曲4K"},{"n":"M闽剧","v":"闽剧戏曲4K"},{"n":"P评剧","v":"评剧戏曲4K"},{"n":"P蒲剧","v":"蒲剧戏曲4K"},{"n":"P皮影戏","v":"皮影戏戏曲4K"},{"n":"P莆仙戏","v":"莆仙戏戏曲4K"},{"n":"Q黔剧","v":"黔剧戏曲4K"},{"n":"Q祁剧","v":"祁剧戏曲4K"},{"n":"Q秦腔","v":"秦腔戏曲4K"},{"n":"S上党梆子","v":"上党梆子戏曲4K"},{"n":"S山东梆子","v":"山东梆子戏曲4K"},{"n":"S绍剧","v":"绍剧戏曲4K"},{"n":"W武安平调","v":"武安平调戏曲4K"},{"n":"W婺剧","v":"婺剧戏曲4K"},{"n":"X湘剧","v":"湘剧戏曲4K"},{"n":"Y越剧","v":"越剧戏曲4K"},{"n":"Y豫剧","v":"豫剧戏曲4K"},{"n":"Y雁剧","v":"雁剧戏曲4K"},{"n":"Y越调","v":"越调戏曲4K"},{"n":"Y粤剧","v":"粤剧戏曲4K"},{"n":"Z壮剧","v":"壮剧戏曲4K"},{"n":"Z藏剧","v":"藏剧戏曲4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "旅游":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"旅游"},{"n":"A澳门","v":"澳门旅游"},{"n":"A安徽","v":"安徽旅游"},{"n":"B布达拉宫","v":"布达拉宫旅游"},{"n":"B北京","v":"北京旅游"},{"n":"C重庆","v":"重庆旅游"},{"n":"C草原","v":"草原旅游"},{"n":"D大海","v":"大海旅游"},{"n":"F福建","v":"福建旅游"},{"n":"G广东","v":"广东旅游"},{"n":"G广西","v":"广西旅游"},{"n":"G贵州","v":"贵州旅游"},{"n":"G甘肃","v":"甘肃旅游"},{"n":"H海南","v":"海南旅游"},{"n":"H河北","v":"河北旅游"},{"n":"H河南","v":"河南旅游"},{"n":"H湖北","v":"湖北旅游"},{"n":"H湖南","v":"湖南旅游"},{"n":"H黑龙江","v":"黑龙江旅游"},{"n":"J吉林","v":"吉林旅游"},{"n":"J江苏","v":"江苏旅游"},{"n":"J江西","v":"江西旅游"},{"n":"L辽宁","v":"辽宁旅游"},{"n":"M民宿","v":"民宿旅游"},{"n":"N内蒙古","v":"内蒙古旅游"},{"n":"N宁夏","v":"宁夏旅游"},{"n":"Q青海","v":"青海旅游"},{"n":"S上海","v":"上海旅游"},{"n":"S陕西","v":"陕西旅游"},{"n":"S四川","v":"四川旅游"},{"n":"S山西","v":"山西旅游"},{"n":"S山东","v":"山东旅游"},{"n":"T天津","v":"天津旅游"},{"n":"T台湾","v":"台湾旅游"},{"n":"T天空","v":"天空旅游"},{"n":"X西湖","v":"西湖旅游"},{"n":"X西藏","v":"西藏旅游"},{"n":"X新疆","v":"新疆旅游"},{"n":"X香港","v":"香港旅游"},{"n":"Y云南","v":"云南旅游"},{"n":"Z浙江","v":"浙江旅游"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "风景4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"风景4K"},{"n":"A澳门","v":"澳门风景4K"},{"n":"A安徽","v":"安徽风景4K"},{"n":"B布达拉宫","v":"布达拉宫风景4K"},{"n":"B北京","v":"北京风景4K"},{"n":"C重庆","v":"重庆风景4K"},{"n":"C草原","v":"草原风景4K"},{"n":"D大海","v":"大海风景4K"},{"n":"F福建","v":"福建风景4K"},{"n":"G广东","v":"广东风景4K"},{"n":"G广西","v":"广西风景4K"},{"n":"G贵州","v":"贵州风景4K"},{"n":"G甘肃","v":"甘肃风景4K"},{"n":"H海南","v":"海南风景4K"},{"n":"H河北","v":"河北风景4K"},{"n":"H河南","v":"河南风景4K"},{"n":"H湖北","v":"湖北风景4K"},{"n":"H湖南","v":"湖南风景4K"},{"n":"H黑龙江","v":"黑龙江风景4K"},{"n":"J吉林","v":"吉林风景4K"},{"n":"J江苏","v":"江苏风景4K"},{"n":"J江西","v":"江西风景4K"},{"n":"L辽宁","v":"辽宁风景4K"},{"n":"L洛阳","v":"洛阳风景4K"},{"n":"M民宿","v":"民宿风景4K"},{"n":"N南京","v":"南京风景4K"},{"n":"N内蒙古","v":"内蒙古风景4K"},{"n":"N宁夏","v":"宁夏风景4K"},{"n":"Q青海","v":"青海风景4K"},{"n":"S上海","v":"上海风景4K"},{"n":"S陕西","v":"陕西风景4K"},{"n":"S四川","v":"四川风景4K"},{"n":"S山西","v":"山西风景4K"},{"n":"S山东","v":"山东风景4K"},{"n":"S苏州","v":"苏州风景4K"},{"n":"T天津","v":"天津风景4K"},{"n":"T台湾","v":"台湾风景4K"},{"n":"T天空","v":"天空风景4K"},{"n":"X西安","v":"西安风景4K"},{"n":"X西湖","v":"西湖风景4K"},{"n":"X西藏","v":"西藏风景4K"},{"n":"X新疆","v":"新疆风景4K"},{"n":"X香港","v":"香港风景4K"},{"n":"Y云南","v":"云南风景4K"},{"n":"Z浙江","v":"浙江风景4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "美食超清":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"美食超清"},{"n":"舌尖上的中国","v":"舌尖上的中国超清"},{"n":"老字号","v":"老字号美食超清"},{"n":"家常菜","v":"家常菜美食超清"},{"n":"香港美食探店","v":"香港美食探店超清"},{"n":"澳门美食探店","v":"澳门美食探店超清"},{"n":"上海美食探店","v":"上海美食探店超清"},{"n":"北京美食探店","v":"北京美食探店超清"},{"n":"重庆美食探店","v":"重庆美食探店超清"},{"n":"南京美食探店","v":"南京美食探店超清"},{"n":"广州美食探店","v":"广州美食探店超清"},{"n":"杭州美食探店","v":"杭州美食探店超清"},{"n":"成都美食探店","v":"成都美食探店超清"},{"n":"苏州美食探店","v":"苏州美食探店超清"},{"n":"武汉美食探店","v":"武汉美食探店超清"},{"n":"台湾美食探店","v":"台湾美食探店超清"},{"n":"川菜","v":"川菜美食超清"},{"n":"豫菜","v":"豫菜美食超清"},{"n":"淮扬菜","v":"淮扬菜美食超清"},{"n":"湘菜","v":"湘菜美食超清"},{"n":"鲁菜","v":"鲁菜美食超清"},{"n":"粤菜","v":"粤菜美食超清"},{"n":"潮菜","v":"潮菜美食超清"},{"n":"浙菜","v":"浙菜美食超清"},{"n":"徽菜","v":"徽菜美食超清"},{"n":"闽菜","v":"闽菜美食超清"},{"n":"东北菜","v":"东北菜美食超清"},{"n":"客家菜","v":"客家菜美食超清"},{"n":"苏菜","v":"苏菜美食超清"},{"n":"火锅","v":"火锅"},{"n":"面食","v":"面食"},{"n":"炒菜","v":"炒菜"},{"n":"点心","v":"点心"},{"n":"日料","v":"日料"},{"n":"小吃","v":"小吃"},{"n":"素食","v":"素食"},{"n":"蒸菜","v":"蒸菜"},{"n":"凉菜","v":"凉菜"},{"n":"早餐","v":"早餐"},{"n":"披萨","v":"披萨"},{"n":"烤鱼","v":"烤鱼"},{"n":"海鲜","v":"海鲜美食超清"},{"n":"汉堡","v":"汉堡"},{"n":"韩国菜","v":"韩国菜"},{"n":"泰国菜","v":"泰国菜"},{"n":"穆斯林菜","v":"穆斯林菜"},{"n":"法国菜","v":"法国菜"},{"n":"意大利菜","v":"意大利菜"},{"n":"西班牙菜","v":"西班牙菜"},{"n":"土耳其菜","v":"土耳其菜系"},{"n":"阿拉伯菜","v":"阿拉伯菜"},{"n":"德国菜","v":"德国菜"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "搞笑":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"搞笑"},{"n":"搞笑配音","v":"搞笑配音"},{"n":"搞笑电影","v":"搞笑电影"},{"n":"搞笑综艺","v":"搞笑综艺"},{"n":"鬼畜电影","v":"鬼畜电影"},{"n":"搞笑动画","v":"搞笑动画"},{"n":"搞笑番","v":"搞笑番"},{"n":"十万个冷笑话","v":"十万个冷笑话"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "沙雕动画":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"沙雕动画"},{"n":"沙雕","v":"沙雕"},{"n":"沙雕动画","v":"沙雕动画"},{"n":"动画推荐","v":"动画推荐"},{"n":"沙雕动画","v":"沙雕动画"},{"n":"一口气看完","v":"一口气看完"},{"n":"动画","v":"动画"},{"n":"沙雕动画推荐","v":"沙雕动画推荐"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "儿童":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"儿童"},{"n":"教育","v":"儿童早教"},{"n":"歌曲","v":"贝瓦儿歌"},{"n":"舞蹈","v":"儿童舞蹈"},{"n":"成语故事","v":"儿童成语故事"},{"n":"安全教育","v":"儿童安全教育"},{"n":"睡前故事","v":"儿童睡前故事"},{"n":"贝乐虎","v":"贝乐虎"},{"n":"宝宝巴士","v":"宝宝巴士"},{"n":"儿童好声音","v":"儿童好声音"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "小姐姐4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"小姐姐4K"},{"n":"比基尼","v":"比基尼美女4K"},{"n":"内衣","v":"内衣模特4K"},{"n":"车模","v":"美女车模4K"},{"n":"健身","v":"美女健身4K"},{"n":"翻唱","v":"美女翻唱4K"},{"n":"舞蹈","v":"美女舞蹈4K"},{"n":"美妆","v":"美女美妆4K"},{"n":"Cos","v":"美女Cos4K"},{"n":"户外","v":"美女户外4K"},{"n":"居家","v":"美女居家4K"},{"n":"自习","v":"自习小姐姐4K"},{"n":"职场","v":"职场美女4K"},{"n":"工地","v":"工地美女4K"},{"n":"安静","v":"安静小姐姐4K"},{"n":"活泼","v":"活泼小姐姐4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "纪录片超清":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "太极拳":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"太极拳"},{"n":"邱慧芳","v":"太极拳邱慧芳"},{"n":"陈氏","v":"太极拳陈氏"},{"n":"武当","v":"太极拳武当"},{"n":"二十四式","v":"太极拳二十四式"},{"n":"三十六式","v":"太极拳三十六式"},{"n":"五禽戏","v":"五禽戏"},{"n":"八段锦","v":"八段锦"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "综艺大全":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"综艺汇聚"},{"n":"诗词大会","v":"诗词大会"},{"n":"典籍里的中国","v":"典籍里的中国"},{"n":"我是歌手","v":"我是歌手"},{"n":"中国梦想秀","v":"中国梦想秀"},{"n":"非诚勿扰","v":"非诚勿扰"},{"n":"王牌对王牌","v":"王牌对王牌"},{"n":"极限挑战","v":"极限挑战"},{"n":"中国好声音","v":"中国好声音"},{"n":"中国新声代","v":"中国新声代"},{"n":"军情直播间","v":"军情直播间"},{"n":"军情观察室","v":"军情观察室"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "白噪音4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"白噪音4K"},{"n":"窗白噪音","v":"窗白噪音4K"},{"n":"环境白噪音","v":"环境白噪音4K"},{"n":"自然白噪音","v":"自然白噪音4K"},{"n":"助眠白噪音","v":"助眠白噪音4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "软件教程":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"软件教程"},{"n":"Windows","v":"Windows"},{"n":"MT管理器","v":"MT管理器"},{"n":"NP管理器","v":"NP管理器"},{"n":"mixplorer","v":"mixplorer"},{"n":"脱壳","v":"脱壳"},{"n":"爬虫","v":"爬虫"},{"n":"json&jar","v":"json&jar"},{"n":"网盘挂载","v":"网盘挂载"},{"n":"alist+WebDav","v":"alist+WebDav"},{"n":"TVBox","v":"TVBox"},{"n":"EXCEL","v":"EXCEL教程"},{"n":"Git入门到精通","v":"Git入门到精通"},{"n":"java","v":"java教程"},{"n":"phyton","v":"phyton教程"},{"n":"xml","v":"xml教程"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "动物世界超清":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"地球自然"},{"n":"熊猫","v":"国宝熊猫"},{"n":"大自然","v":"大自然"},{"n":"地球自然","v":"地球自然"},{"n":"宇宙探索","v":"宇宙探索"},{"n":"探索发现","v":"探索发现"},{"n":"动物世界","v":"动物世界超清"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "相声小品":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"相声小品"},{"n":"C陈佩斯","v":"陈佩斯小品4K"},{"n":"C春晚小品","v":"春晚小品4K"},{"n":"C曹云金","v":"曹云金相声4K"},{"n":"D单口相声","v":"单口相声4K"},{"n":"D德云社","v":"德云社小品4K"},{"n":"E二人转","v":"二人转4K"},{"n":"F冯巩","v":"冯巩小品4K"},{"n":"G郭德纲","v":"郭德纲相声4K"},{"n":"G郭冬临","v":"郭冬临小品4K"},{"n":"G郭达","v":"郭达小品4K"},{"n":"K开心麻花","v":"开心麻花小品4K"},{"n":"P评书","v":"评书4K"},{"n":"P潘长江","v":"潘长江小品4K"},{"n":"Q青曲社","v":"青曲社相声4K"},{"n":"Q群口相声","v":"群口相声4K"},{"n":"S宋小宝","v":"宋小宝小品4K"},{"n":"W文松","v":"文松小品4K"},{"n":"X小曲","v":"小曲相声4K"},{"n":"X喜剧综艺","v":"喜剧综艺4K"},{"n":"Y严顺开","v":"严顺开小品4K"},{"n":"Y岳云鹏","v":"岳云鹏相声小品4K"},{"n":"Z赵本山","v":"赵本山小品4K"},{"n":"Z赵丽蓉","v":"赵丽蓉小品4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "旅行探险":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"旅行探险"},{"n":"摩旅","v":"摩托车旅游"},{"n":"骑行","v":"骑行旅游"},{"n":"徒步旅游","v":"徒步旅游"},{"n":"自驾旅游","v":"自驾旅游"},{"n":"洞穴探险","v":"洞穴探险"},{"n":"荒野求生","v":"荒野求生"},{"n":"凶宅探险","v":"凶宅探险"},{"n":"灵异探险","v":"灵异探险"},{"n":"户外攀岩","v":"户外攀岩"},{"n":"高空攀爬","v":"高空攀爬"},{"n":"潜水探险","v":"潜水探险"},{"n":"翼装飞行","v":"翼装飞行"},{"n":"极限运动","v":"极限运动"},{"n":"速降","v":"速降"},{"n":"高空跑酷","v":"高空跑酷"},{"n":"冲浪","v":"冲浪"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}]
    },
    detailUrl:'/x/web-interface/view?aid=fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/x/web-interface/search/type?search_type=video&keyword=**&page=fypage',
    searchable:2,
    quickSearch:0,
    headers:{
        "User-Agent":"PC_UA",
        "Referer": "https://www.bilibili.com",
        "Cookie":"https://d.kstore.space/download/6296/cookie.txt"
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:`js:
        let ids = input.split('_');
        let dan = 'https://api.bilibili.com/x/v1/dm/list.so?oid=' + ids[1];
        let result = {};
        let iurl = 'https://api.bilibili.com:443/x/player/playurl?avid=' + ids[0] + '&cid=' + ids[1] + '&qn=116';
        let html = request(iurl);
        let jRoot = JSON.parse(html);
        let jo = jRoot.data;
        let ja = jo.durl;
        let maxSize = -1;
        let position = -1;
        ja.forEach(function(tmpJo, i) {
            if (maxSize < Number(tmpJo.size)) {
                maxSize = Number(tmpJo.size);
                position = i
            }
        });
        let purl = '';
        if (ja.length > 0) {
            if (position === -1) {
                position = 0
            }
            purl = ja[position].url
        }
        result.parse = 0;
        result.playUrl = '';
        result.url = unescape(purl);
        result.header = {
            'Referer': 'https://live.bilibili.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
        };
        result.contentType = 'video/x-flv';
        result.danmaku = dan;
        input = result
    `,
    double:false,
    推荐:'*',
    // 一级:'js:let html=request(input);let msg=JSON.parse(html).message;function title_rep(title){if(/keyword/.test(title)){title=title.replace(\'<em class="keyword">\',"").replace("</em>","").replace("&quot;","\'");log("名称替换👉"+title)};return title}if(msg!=="0"){VODS=[{vod_name:KEY+"➢"+msg,vod_id:"no_data",vod_remarks:"别点,缺少bili_cookie",vod_pic:"https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg"}]}else{let videos=[];let vodList=JSON.parse(html).data.result;vodList.forEach(function(vod){let aid=vod["aid"];let title=vod["title"].trim();title=title_rep(title);title=title_rep(title);title=title_rep(title);title=title_rep(title);let img="https:"+vod["pic"];let remark=vod["duration"];videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})});VODS=videos}',
    一级:`js:
        let html = request(input);
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = duration.split(':')[0];
            let sec = duration.split(':')[1];
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        let videos = [];
        let vodList = JSON.parse(html).data.result;
        vodList.forEach(function(vod) {
            let aid = vod.aid;
            let title = stripHtmlTag(vod.title);
            let img = 'https:' + vod.pic;
            let remark = turnDHM(vod.duration);
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
    二级:`js:
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        let html = request(input);
        let jo = JSON.parse(html).data;
        let aid = jo.aid;
        let title = stripHtmlTag(jo.title);
        let pic = jo.pic;
        let desc = jo.desc;
        let year = jo.pubdate;
        let dire = jo.owner.name;
        let typeName = jo.tname;
        let remark = jo.duration;
        let vod = {
            vod_id: aid,
            vod_name: title,
            vod_pic: pic,
            type_name: typeName,
            vod_year: year,
            vod_area: 'bilidanmu',
            vod_remarks: remark,
            vod_tags: 'mv',
            vod_director: dire,
            vod_content: desc
        };
        let ja = jo.pages;
        let playurls = [];
        ja.forEach(function(tmpJo) {
            let cid = tmpJo.cid;
            let part = tmpJo.part.replace('#', '﹟').replace('$', '﹩');
            playurls.push(
                part + '$' + aid + '_' + cid
            )
        });
        let playUrl = playurls.join('#');
        vod.vod_play_from = '叼毛在线';
        vod.vod_play_url = playUrl;
        VOD = vod;
    `,
    搜索:'*',
    // 预处理:'if(rule_fetch_params.headers.Cookie.startsWith("http")){rule_fetch_params.headers.Cookie=fetch(rule_fetch_params.headers.Cookie);setItem(RULE_CK,cookie)};log(rule_fetch_params.headers.Cookie)',
}
