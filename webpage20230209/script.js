let night_day = document.getElementById('night_day');

function night_day_click() {
    if (night_day.value == 'night') {
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        night_day.innerHTML = 'day';

        let alist = document.querySelectorAll('a');
        let i = 0;
        while (i < alist.length) {
            alist[i].style.color = 'powderblue';
            i = i + 1;
        }

        night_day.value = 'day';
    }
    else {
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('body').style.color = 'black';
        night_day.innerHTML = 'night';

        let alist = document.querySelectorAll('a');
        let i = 0;
        while (i < alist.length) {
            alist[i].style.color = 'blue';
            i = i + 1;
        }

        night_day.value = 'night';

    }


}

