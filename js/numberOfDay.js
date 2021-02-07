var nod = $('.numberOfDay');

$(document).ready(function () {
    $.ajax({
        method: 'GET',
        url: 'https://api.math.tools/numbers/nod',
        cache: true
    })
    .done(function (data) {
        if (data instanceof Object && data.contents) {
            
            

            var nodContentElement = $('<div></div>').addClass('alert alert-success').attr('id', 'alertContent').attr('tabindex', '-1').attr('role', 'alert')
                .append($('<div></div>').addClass('alert-heading').html(data.contents.nod.numbers["prime-facts"].prime.description))
                .append($('<p></p>').html(data.contents.nod.numbers["prime-facts"].prime.display));
            nod.html(nodContentElement);
        }
    })
});


