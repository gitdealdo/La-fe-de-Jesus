$(document).ready(function(){
	$(".lec1-vers").hide();
	$(".lec1-inputs").hide();
	$(".lec1-rpts").hide();
	$("#lec1-comp").hide();
    $("#lec1-comp-m").hide();
    $(".lec1-vers-m").click(function(){
    	$(this).hide();
        $(".lec1-vers").show();
        $(".lec1-inputs").show();
        $("#lec1-comp-m").show();
        // $(".lec1-vers").toggle();
        // $(".lec1-inputs").toggle();
        // $("#lec1-comp-m").toggle();
    });
    $("#lec1-rpts-m").click(function(){
    	$(this).hide();
        $(".lec1-vers").show();
        $(".lec1-vers-m").hide()
    	$(".lec1-inputs").hide();
        $(".lec1-rpts").show();
    });
    $("#lec1-comp-m").click(function(){
    	$(this).hide();
        $("#lec1-comp").show();
    });

	$(".lec2-vers").hide();
	$(".lec2-inputs").hide();
	$(".lec2-rpts").hide();
	$("#lec2-comp").hide();
    $("#lec2-comp-m").hide();
    $(".lec2-vers-m").click(function(){
    	$(this).hide();
        $(".lec2-vers").show();
        $(".lec2-inputs").show();
        $("#lec2-comp-m").show();
    });
    $("#lec2-rpts-m").click(function(){
    	$(this).hide();
        $(".lec2-vers").show();
        $(".lec2-vers-m").hide()
    	$(".lec2-inputs").hide();
        $(".lec2-rpts").show();
    });
    $("#lec2-comp-m").click(function(){
    	$(this).hide();
        $("#lec2-comp").show();
    });


	$(".lec3-vers").hide();
	$(".lec3-inputs").hide();
	$(".lec3-rpts").hide();
	$("#lec3-comp").hide();
    $("#lec3-comp-m").hide();
    $(".lec3-vers-m").click(function(){
    	$(this).hide();
        $(".lec3-vers").show();
        $(".lec3-inputs").show();
        $("#lec3-comp-m").show();
    });
    $("#lec3-rpts-m").click(function(){
    	$(this).hide();
        $(".lec3-vers").show();
        $(".lec3-vers-m").hide()
    	$(".lec3-inputs").hide();
        $(".lec3-rpts").show();
    });
    $("#lec3-comp-m").click(function(){
    	$(this).hide();
        $("#lec3-comp").show();
    });

	$(".lec4-vers").hide();
	$(".lec4-inputs").hide();
	$(".lec4-rpts").hide();
	$("#lec4-comp").hide();
    $("#lec4-comp-m").hide();
    $(".lec4-vers-m").click(function(){
    	$(this).hide();
        $(".lec4-vers").show();
        $(".lec4-inputs").show();
        $("#lec4-comp-m").show();
    });
    $("#lec4-rpts-m").click(function(){
    	$(this).hide();
        $(".lec4-vers").show();
        $(".lec4-vers-m").hide()
    	$(".lec4-inputs").hide();
        $(".lec4-rpts").show();
    });
    $("#lec4-comp-m").click(function(){
    	$(this).hide();
        $("#lec4-comp").show();
    });

	$(".lec5-vers").hide();
	$(".lec5-inputs").hide();
	$(".lec5-rpts").hide();
	$("#lec5-comp").hide();
    $("#lec5-comp-m").hide();
    $(".lec5-vers-m").click(function(){
    	$(this).hide();
        $(".lec5-vers").show();
        $(".lec5-inputs").show();
        $("#lec5-comp-m").show();
    });
    $("#lec5-rpts-m").click(function(){
    	$(this).hide();
        $(".lec5-vers").show();
        $(".lec5-vers-m").hide()
    	$(".lec5-inputs").hide();
        $(".lec5-rpts").show();
    });
    $("#lec5-comp-m").click(function(){
    	$(this).hide();
        $("#lec5-comp").show();
    });

    $(".lec6-vers").hide();
    $(".lec6-inputs").hide();
    $(".lec6-rpts").hide();
    $("#lec6-comp").hide();
    $("#lec6-comp-m").hide();
    $(".lec6-vers-m").click(function(){
        $(this).hide();
        $(".lec6-vers").show();
        $(".lec6-inputs").show();
        $("#lec6-comp-m").show();
    });
    $("#lec6-rpts-m").click(function(){
        $(this).hide();
        $(".lec6-vers").show();
        $(".lec6-vers-m").hide()
        $(".lec6-inputs").hide();
        $(".lec6-rpts").show();
    });
    $("#lec6-comp-m").click(function(){
        $(this).hide();
        $("#lec6-comp").show();
    });

    $("#leccion1-title").text(lafe[0].leccion);


    function save(){
        alert("Desea guardar");
    }

});
