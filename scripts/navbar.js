$(document).ready(function(){
  
    $("button").click(function(){

      if($("button").text() == "☰")
      {
        $("button").text("✕");
        $("li").toggle("slow");
        $("nav ul").css("flex-direction", "column");
        $("nav li").css("display", "block");
        $("nav li").css("text-align", "center");
      }
      else
      {
        $("li").toggle("slow");
        $("button").text("☰");
      }

    });  
});