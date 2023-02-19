let night_day = document.getElementById('night_day');

let Body = {
    setBackgroundColor: function (color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    },
    setColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
    }
}

let Links = {
     setColor : function(color){
    //     let alist = document.querySelectorAll('a');
    //     let i = 0;
    //     while (i < alist.length) {
    //         alist[i].style.color = color;
    //         i = i + 1;
    //     }
    $('a').css('color',color); // jquery 
    },
}


function night_day_click() {
    if (night_day.value == 'night') {
        
         Body.setBackgroundColor('black');
         Body.setColor('white');
        night_day.innerHTML = 'day';

        Links.setColor('powderblue');

        night_day.value = 'day';
    }
    else {
         Body.setBackgroundColor('white');
         Body.setColor('black');
        night_day.innerHTML = 'night';

        Links.setColor('blue');

        night_day.value = 'night';

    }


}

