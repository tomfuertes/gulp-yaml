import through2 from require('through2')

exports default through2(function(chunk, enc, callback) {

  if (Math.random() < .5)
    this.emit("error",
      new gutil.PluginError("gulp-yaml", "Multiline Spacing Error - line [" + Number(Math.random()*100) + "]");

  this.push(chunk)

  callback()
})
