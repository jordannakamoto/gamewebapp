    /* SCRIPT FOR GROWING SEARCH AREA WITH CONTENT*/
    /* credit: Momcilo Popv */

        $.fn.textWidth = function(text, font) {
            
            if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
            
            $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
            
            return $.fn.textWidth.fakeEl.width();
        };

        $('.width-dynamic').on('input', function() {
            var inputWidth = 200+$(this).textWidth();
            $(this).css({
                width: inputWidth
            })
        }).trigger('input');


        function inputWidth(elem, minW, maxW) {
            elem = $(this);
            console.log(elem)
        }

        var targetElem = $('.width-dynamic');

        inputWidth(targetElem);


/* ON SPACEBAR PRESS FOCUS SEARCH*/

$(document).keyup(function(e) {
  if(e.keyCode == 13){
    $(".search__area").focus();
  }
  else if(e.keyCode == 32){
    $(".search__area").focus();
        }
        else if(e.keyCode == 27){
    $(".search__area").blur();
        }

});