goog.provide('main');
goog.require('cljs.core');
main.jquery = $;
main.jquery.call(null,document).ready((function (){
return main.jquery.call(null,"div.meat").html("This is a test.").append("<div>Look here!</div>");
}));
