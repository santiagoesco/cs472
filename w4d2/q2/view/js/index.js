$(function(){
    $('#butQ').click(clickButton);
})

function clickButton(){
    console.log('He sido clickeado');
    $.ajax('/ball',{
        type:"get",
        success:succesfn,
        error:errorfn
    });
}

function succesfn(data){
    console.log(data);
    $('#question').val(data);
}

function errorfn(){
    console.log('error');
}