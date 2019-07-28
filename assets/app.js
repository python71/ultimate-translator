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
    listenBtn.hide();
    var voicelist = responsiveVoice.getVoices();
    // console.log(voicelist)
    responsiveVoice.setDefaultVoice("US English Male");
    
    buttonClick.on("click", function(e) {
        let query = queryUrl + languageSelected.val() + queryString + userComment.val();
        // Performing an AJAX request with the query
        $.ajax({
            url: query,
            method: "GET"
        })
            .then(function(response) {
                // prints the api call text to screen
                text = translated.text(response.contents.translated);
                console.log(response)

                // now displays the listen button
                listenBtn.show();
            })
            .catch((error) => {
                if (error.status === 429) {
                    text = translated.text("Only 5 requests per hour, Please try again later").css("color", "red");
                }
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
            $('.container').css('background-image', 'url("https://media2.giphy.com/media/YAlhwn67KT76E/giphy.gif")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>',{id:'Minion',src:'https://images-na.ssl-images-amazon.com/images/I/81JOPUoLBPL._SX466_.jpg', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Yoda") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://vignette.wikia.nocookie.net/starwars/images/d/d5/MP-YodaSpecies.png/revision/latest?cb=20140412000157")').css('background-repeat', 'no-repeat');
            // $('.container').prepend($('<img>', {id:'Yoda', src:'https://vignette.wikia.nocookie.net/starwars/images/d/d5/MP-YodaSpecies.png/revision/latest?cb=20140412000157', width: '250', height: '250'}))
        }
        else if(languageSelected.val() === "Dothraki") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/c15.15.191.191a/206293_209363532422908_6182755_n.jpg?_nc_cat=109&_nc_ht=scontent-lga3-1.xx&oh=06a3e188aef0660ed3329ef947718e19&oe=5D81F25A")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'Dothraki', src:'https://funtranslations.com/img/dothraki.png', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Valyrian") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://media.dizinga.com/artwork/Shahid%20Kudchi/game-of-thrones-valyrian-steel/thumbs/thumbnail-b0005c95b2694b1a91704b359d2ba0f9_thumb-300-300.png")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'Valyrian', src:'https://funtranslations.com/img/valyrian.png', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Pirate") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKInmg7VfpYpoypbOvgnjjgStrzjiSpe90P4SlbHmA9Hkllq0bw")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'Pirate', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJKInmg7VfpYpoypbOvgnjjgStrzjiSpe90P4SlbHmA9Hkllq0bw', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Chef") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://media3.giphy.com/media/YmMwqVCtyxFRe/200.webp?cid=790b76115d07e1344b634c3749646aa7&rid=200.webp")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'Chef', src:'https://vignette.wikia.nocookie.net/muppet/images/c/c9/SC_169.jpg/revision/latest/scale-to-width-down/300?cb=20180407180306', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "OldEnglish") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsqDLhzsoO58k5BIxQGzQgtjchBlIOxay8LEgU_XEQCtHA72Rz")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'OldEnglish', src:'https://funtranslations.com/img/oldenglish.png', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Vulcan") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://vignette.wikia.nocookie.net/aliens/images/a/a7/Spock.jpg/revision/latest?cb=20091017211956")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'Vulcan', src:'https://vignette.wikia.nocookie.net/aliens/images/a/a7/Spock.jpg/revision/latest?cb=20091017211956', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Klingon") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2013/08/worf.jpg")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'Klingon', src:'https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2013/08/worf.jpg', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Shakespeare") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'Shakespeare', src:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Fudd") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://i.pinimg.com/originals/85/ff/6e/85ff6e48aaeec51120897aa23572a7aa.jpg")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'Shakespeare', src:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg', width: '200', height: '200'}))
        }
        else if(languageSelected.val() === "Navi") {
            emptyImage.empty()
            $('.container').css('background-image', 'url("https://media1.giphy.com/media/Qu9RDNpIS8Vfq/giphy.gif")').css('background-repeat', 'no-repeat');
            // $('.image').prepend($('<img>', {id:'Shakespeare', src:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg', width: '200', height: '200'}))
        }
        else {
            $('.image').empty();
        }
    })
    
})