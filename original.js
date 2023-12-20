

var dataToSave = [];
var firstStageTable = [];
var key = 0;

for (var i = 0; i < 20; i++) {
    firstStageTable[i] = [];
    dataToSave[i] = [];

    for (var j = 0; j < 2; j++) {
    firstStageTable[i][j] = [];
    dataToSave[i][j] = [];
    }
}


var savedData = localStorage.getItem('kluczDanych');
if (savedData) {
    var loadedData = JSON.parse(savedData);
} else if (savedData == []) {
    for (var i = 0; i < 20; i++) {
        loadedData[i] = [];
    
        for (var j = 0; j < 2; j++) {
            loadedData[i][j] = [];
        }
    }
}

start();
function start()
{
    var finish_page = document.getElementById('finish_page');
    var styles = window.getComputedStyle(finish_page);
    var delay =  1000;



    if(styles.display == 'none')
    {
    var checkButton = document.getElementById('check');
    var answer_translations = document.getElementById('answer_translations');
    var last_word = answer_translations.textContent
    var spanish_word = document.getElementById('word');
    var isFound = false;
    var isLoaded = false;

    setTimeout(function() {
        if(styles.display == 'none')
        {
            var percents = Math.floor(Math.random() * 100)
            var translations = document.getElementsByClassName('translations');
            for (var i = 0; i < loadedData.length; i++) {
                if(loadedData[i][0] == translations[0].textContent && percents>30)
                {
                    isLoaded=true;
                }
            }
            if(isLoaded==false)
            {
                checkButton = document.getElementById('check');
                checkButton.click();
            }
        }

    }, delay);

    setTimeout(function() {
        if(styles.display == 'none')
        {
        answer_translations = document.getElementById('answer_translations');
        last_word = answer_translations.textContent
        spanish_word = document.getElementById('word');
        var doo = true;

        for (var i = 0; i < firstStageTable.length; i++) {
            if(firstStageTable[i][0] == answer_translations.textContent)
            doo = false;
        }

        if(doo == true)
        {
            firstStageTable[key][0] = answer_translations.textContent;
            firstStageTable[key][1] = spanish_word.textContent;
            key++;
        }
    }

    }, delay += Math.floor(Math.random() * 2000) + 500);


        setTimeout(function() {
            if(isLoaded==false)
            {
                if(styles.display == 'none')
                {
                var nextWordButton = document.getElementById('nextword');
                nextWordButton.click();
                }
            }else
            {
                delay -= 2000;
            }
        }, delay += Math.floor(Math.random() * 2000) + 500);

    setTimeout(function() {
    if(styles.display == 'none')
    {
        var translations = document.getElementsByClassName('translations');
        var isNext = true;
        for (var i = 0; i < loadedData.length; i++) {
            if(loadedData[i][0] ==  translations[0].textContent){
                document.getElementById('answer').value = loadedData[i][1];
                isNext=false;
                isFound = true;
            }
        }

        if(isNext == true)
        {
            for (var i = 0; i < 20; i++) {
                if(firstStageTable[i][0] ==  translations[0].textContent){
                    document.getElementById('answer').value = firstStageTable[i][1];
                    isFound = true;
                }
        }
    }   
    }
    }, delay += Math.floor(Math.random() * 2000) + 500);



    setTimeout(function() {
    if(styles.display == 'none')
    {
        var translations = document.getElementsByClassName('translations');
        if(last_word !== translations[0].textContent && isFound == false)
        {
            isDiff = true;
            start();
        }
    }else{
    for (var i = 0; i < firstStageTable.length; i++) {
        var isDuplicated = false;
        for (var k = 0; k < loadedData.length; k++) {
            if(firstStageTable[i][0] == loadedData[k][0]) {
                isDuplicated = true;
            }
        }
        if(isDuplicated == false) {
            var isFill=true;
        for (var m = 0; m < loadedData.length; m++) {
            if(loadedData[m][0] == '' || loadedData[m][1] == '')
            {
                loadedData[m][0] = firstStageTable[i][0];
                loadedData[m][1] = firstStageTable[i][1];
                isFill=false;
            }
        }
        if(isFill==true)
        {
            var nowyWiersz = [firstStageTable[i][0], firstStageTable[i][1]];
            loadedData.push(nowyWiersz);
        }
        }
    }
        localStorage.setItem('kluczDanych', JSON.stringify(loadedData));
    }
    }, delay += Math.floor(Math.random() * 2000) + 500);


    setTimeout(function() {
    if(styles.display == 'none')
    {
        if(isFound == true)
        {
            checkButton.click();
        }
    }
    }, delay += Math.floor(Math.random() * 2000) + 500);

    

    setTimeout(function() {
    if(styles.display == 'none')
    {
        if(isFound == true)
        {
            var nextWordButton = document.getElementById('nextword');
            nextWordButton.click();
            start();
        }
    }
    }, delay += Math.floor(Math.random() * 2000) + 500);

}
}


//RESET DANYCH
//var loadedData = [];
//localStorage.setItem('kluczDanych', JSON.stringify(loadedData));
//