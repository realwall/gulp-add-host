var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;


// 插件级别的函数（处理文件）
function cachebustMap(config) {
  // 创建一个 stream 通道，以让每个文件通过
  var stream = through.obj(function(file, enc, cb) {
    debugger;
    if (file.isStream()) {
      return cb();
    }

    if (file.isBuffer()) {
      var contents = file.contents.toString(enc);
      if(config.script){
        contents = contents.replace(/<script\s*(type\s*=\s*"text\/javascript")?\s*src\s*=\s*"([^"]+)"/gi, '<script $1 src="' + config.script + '$2"');
      }
      if(config.link){
        contents = contents.replace(/<link\s*(rel="[^"]+")?\s*(media="[^"]+")?\s*href\s*=\s*\"([^"]+)"/gi, '<link $1 $2 href="' + config.link + '$3"');
      }
      
      //do something
      file.contents = new Buffer(contents, enc);
      this.push(file);
    }

    // 确保文件进入下一个 gulp 插件
    this.push(file);

    // 告诉 stream 引擎，我们已经处理完了这个文件
    cb();
  });

  // 返回文件 stream
  return stream;
};

// 导出插件主函数
module.exports = cachebustMap;















