let $allButtons=$('.slidesBar>a')
let current=0
let index
let checkSlides=true
init()
for(let i=0;i<$allButtons.length;i++){
    $allButtons.eq(i).on('click',function(slidesEvent){
        let $TargetButtons=$(slidesEvent.currentTarget)
        index=$TargetButtons.index()
        playSlides(index,$TargetButtons)
    })
}



function playSlides(index,$TargetButtons){
    $TargetButtons.addClass('active').siblings().removeClass('active')
    if (current===0 && index+1===$('.images>img').length-2) {
        $('.images').css({transform:`translateX(0)`}).one('transitionend',function(){
            $('.images').hide().offset()
            $('.images').css({transform:`translateX(-${($('.images>img').length-2)*920}px)`}).show()   
        })
    } else if (current+1===$('.images>img').length-2 && index===0){
        $('.images').css({transform:`translateX(-${($('.images>img').length-1)*920}px)`}).one('transitionend',function(){
            $('.images').hide().offset()
            $('.images').css({transform:`translateX(-920px)`}).show()   
        })
    } else {
        $('.images').css({transform:`translateX(-${(index+1)*920}px)`})
    }
    current=index
}
function init(){
    let firstClone=$('.images>img').eq(0).clone(true)
    let lastPosition=$('.images>img').length-1
    let lastClone=$('.images>img').eq(lastPosition).clone(true)
    $('.images').append(firstClone)
    $('.images').prepend(lastClone)
    $('.images').hide().offset()
    $('.images').css({transform:'translateX(-920px)'}).show()
}