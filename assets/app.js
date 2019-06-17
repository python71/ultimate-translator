const queryUrl = "https://api.funtranslations.com/translate/";
const queryString = ".json?text=";
const languageSelected = $("#sel1");
const buttonClick = $("#userClick");
const translated = $(".well");
const userComment = $("#comment");
const emptyImage = $('.image');
const listenBtn = $('#userListen')



$(document).ready(function(event) {
    let text = '';
    var x = languageSelected.val();
    listenBtn.hide();
    var voicelist = responsiveVoice.getVoices();
    console.log(voicelist)
    responsiveVoice.setDefaultVoice("US English Male");
    
    console.log(x)
    buttonClick.on("click", function(e) {
        // responsiveVoice.speak(languageSelected.val())
        // translated.text($("#comment").val().trim())
        let query = queryUrl + languageSelected.val() + queryString + userComment.val();
        console.log(query)
        // Performing an AJAX request with the query
        $.ajax({
            url: query,
            method: "GET"
        })
            .then(function(response) {
                text = translated.text(response.contents.translated);
                listenBtn.show();
            })
    })
    listenBtn.on("click", function(e) {
        // pulls translated text out of bottom card and send to text to speech
        responsiveVoice.speak(text[0].innerText)
    })

    $("#sel1").change(function(e) {
        // takes user's dropdown selection and pick the correct photo url
        if (languageSelected.val() === "Minion") {
            emptyImage.empty()
            $('.image').prepend($('<img>',{id:'Minion',src:'https://images-na.ssl-images-amazon.com/images/I/81JOPUoLBPL._SX466_.jpg', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Yoda") {
            emptyImage.empty()
            $('.image').prepend($('<img>', {id:'Yoda', src:'https://vignette.wikia.nocookie.net/starwars/images/d/d5/MP-YodaSpecies.png/revision/latest?cb=20140412000157', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Dothraki") {
            emptyImage.empty()
            $('.image').prepend($('<img>', {id:'Dothraki', src:'https://funtranslations.com/img/dothraki.png', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Valyrian") {
            emptyImage.empty()
            $('.image').prepend($('<img>', {id:'Valyrian', src:'https://funtranslations.com/img/valyrian.png', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Pirate") {
            emptyImage.empty()
            $('.image').prepend($('<img>', {id:'Pirate', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKInmg7VfpYpoypbOvgnjjgStrzjiSpe90P4SlbHmA9Hkllq0bw', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Chef") {
            emptyImage.empty()
            $('.image').prepend($('<img>', {id:'Chef', src:'https://vignette.wikia.nocookie.net/muppet/images/c/c9/SC_169.jpg/revision/latest/scale-to-width-down/300?cb=20180407180306', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "OldEnglish") {
            emptyImage.empty()
            $('.image').prepend($('<img>', {id:'OldEnglish', src:'https://funtranslations.com/img/oldenglish.png', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Vulcan") {
            emptyImage.empty()
            $('.image').prepend($('<img>', {id:'Vulcan', src:'https://vignette.wikia.nocookie.net/aliens/images/a/a7/Spock.jpg/revision/latest?cb=20091017211956', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Klingon") {
            emptyImage.empty()
            $('.image').prepend($('<img>', {id:'Klingon', src:'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2013/08/worf.jpg', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Shakespeare") {
            emptyImage.empty()
            $('.image').prepend($('<img>', {id:'Shakespeare', src:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg', width: '200', height: '200'}))
        }
        else {
            $('.image').empty();
        }
    })
    
})