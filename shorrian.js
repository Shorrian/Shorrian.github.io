$('#clickme').click(function(){
    $('#test').hide("slow", function(){
        alert("Animation complete");
    });
});
