# gulp-add-host
add host and protocal for link and script tags in html file 

### 功能
给html模版中所有script link img标签的资源链接地址添加域名。

### 使用方式

    //引入
    var addHost = require('gulp-add-host');
    
    //task中使用
    gulp.task('build:view', function() {
        gulp
            .src(VIEW)
            .pipe(addHost({
                script: 'http://cresauth.fenqile.cn',
                link: 'http://cresauth1.fenqile.cn',
                img: 'http://cresauth2.fenqile.cn'
            }))
            .pipe(gulp.dest(VIEW_DEST));
    });


