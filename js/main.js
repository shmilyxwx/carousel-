var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function(x) {
    var index = $(x.currentTarget).index()
    var p = index * -300
    $('#images').css({
      transform: 'translate(' + p + 'px)'
    })
    n = index
    
      activeButton(allButtons.eq(n))
  })
}



var n = 0;
var size = allButtons.length
var timerId = setTimet()


function  palySlide(index){
	 allButtons.eq(index).trigger('click')
}
 
function setTimet(){
	return setInterval(()=>{
		n += 1
    palySlide(n%size)
	},2000)
}

function activeButton($button){
	$button.addClass('red')
    .siblings('.red').removeClass('red')
}

$('.window').on('mouseenter', function() {
  window.clearInterval(timerId)
})

$('.window').on('mouseleave', function() {
  timerId = setTimet()
})