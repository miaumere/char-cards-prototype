let spoilerShow = false;


$(() => {
    $('[data-toggle="tooltip"]').tooltip()
  })





function validator(charString) {
    
    let nullInputs = [];


// checking if the key has null value or "":
   for(let key in charString) {
    if(typeof(charString[key]) === "object"){

        if(Array.isArray(charString[key]) === true) {

            if (charString.ciekawostki.length === 0) {
                continue
            }
            
            
            if(charString[key].length === 0) {
                nullInputs.push(`W kluczu ${key} tablica jest pusta`)
            }

        } 

        else {

            for(let key2 in charString[key]){
                if(charString.wzrost[key2] === null || charString.waga[key2] === null){
                    continue
                }
                if(charString[key][key2] === null){
                    nullInputs.push(`W kluczu ${key} - wartość ${key2} wynosi null`)
                }
            }
        }

    
    }   

   }        
// the nullInputs array is made
if (nullInputs.length > 0){

let modal = document.querySelector("#modal")
let modalBlock = document.querySelector(".modal-body")
let modalList = document.createElement("ul")
modalBlock.appendChild(modalList)
    
        for(let i = 0; i < nullInputs.length; i++){
            
            let modalItem = document.createElement("li")
            modalItem.classList.add("modal__item")

            let modalItemText = document.createTextNode(nullInputs[i])
            modalItem.appendChild(modalItemText)
            modalList.appendChild(modalItem)
            html.style.overflow = "hidden"

                }


    $(modal).modal()  
    let reloadButton = document.querySelector("#reload-button")
    reloadButton.addEventListener("click", () => {
        returnTo()
        window.location.reload() 
    })
    
        }
}





let hostName = "http://sataris.tk/karty/";



let xhrCharList = new XMLHttpRequest(); 

xhrCharList.open("GET", hostName, true)

xhrCharList.timeout = 8000;

let aside = document.querySelector(".aside")
let close = document.querySelector(".menu__close")
let openingIcon = document.querySelector(".opening-icon")
let html = document.querySelector("html")
let main = document.querySelector(".main")
let menu = document.querySelector("#menu")


function closeClick() {
    aside.style.transform = "translateX(-110%)"
    close.style.display = "none";
    html.style.WebkitFilter = "none"
    }

function returnTo() {

    loadingScreen(loader)    

}

let loader = document.querySelector(".loader");

function loadingScreen(e, b = true) {
    // the function describes if the loading screen should be displayed or not
    e.style.transition = transition_time + "s";
    e.style.opacity = "1";
    html.style.overflow = "hidden"
    
    if (b !== true){
        setTimeout(() => {
            e.style.display = "none";
        }, animationTime);

        e.style.transition = "all " + transition_time + "s";
        e.style.opacity = "0";
        html.style.overflow = "auto";
        }   
    }

xhrCharList.addEventListener('timeout', (e) => {
    html.innerText = "Przekroczono czas oczekiwania na odpowiedź serwera :c"
})

xhrCharList.addEventListener('error', (e) => {

})

// animation time defined (for changing opacity, colors, etc)
let animationTime = 1000;
let transition_time = animationTime/1000;


loadingScreen(loader)




xhrCharList.addEventListener('load', () => {

    // creates menu of characters

if (xhrCharList.status === 200 || xhrCharList.status === 204) {

    let listString = JSON.parse(xhrCharList.responseText);

    for(let i=0; i<listString.length; i++){

    html.style.overflow = "hidden"
    let menuList = document.querySelector("#menu_list")

    let listItem = document.createElement("li")
    listItem.classList.add("menu__item")
    
    let listImg = document.createElement("img")
    let imgLink = document.createElement("a")

    if (listString[i].profilePic.length === 0){
        listImg.setAttribute("src", `./unlocked.jpg`)
    } else {
        listImg.setAttribute("src", `data:image/jpeg;base64,${listString[i].profilePic}`)
        listImg.setAttribute("alt", " ")


    }   
        listImg.classList.add("menu__image")
        imgLink.appendChild(listImg)
        imgLink.appendChild(listItem)

    

    let listItemText = document.createTextNode(listString[i].name)
    let listCol = document.createElement("div")
    listCol.classList.add("dupa")
    


    menuList.appendChild(listCol)

    listItem.appendChild(listItemText)
    listCol.appendChild(imgLink)


    // defining the id - it displays each character card
        let id = listString[i].id 
        


    listCol.addEventListener("click", () => {
        // how the menu reacts to events + displaying the character list
        loadingScreen(loader)

        charDetail(id)
        
        aside.style.backgroundColor = "rgba(71, 30, 30, 0.438)"

 
        html.style.overflow = "auto";


        closeClick()

            openingIcon.addEventListener("click", () => {
                aside.style.transform = "translateX(0%)"
                aside.style.display = "block";
                close.style.display = "block";
                aside.style.transition = transition_time + "s";

            })

        });

        close.addEventListener("click", () => {
            closeClick()})
        
    }








    } else if(true){
        loadingScreen(loader, false)
        console.log("jaiśbłąd")
        console.log(this)
    }

})

xhrCharList.send()
loadingScreen(loader, false)





    




function charDetail(id) {

    let name = document.querySelector("#person_name");
    let dates = document.querySelector("#dates");
    let mbti = document.querySelector("#mbti");

    // temperament variables: 
    let sanguine = document.querySelector("#sanguine");
    let choleric = document.querySelector("#choleric");
    let flegmatic = document.querySelector("#flegmatic");
    let melancholic = document.querySelector("#melancholic");

    // variables defining information in cells: 
    let babyW = document.querySelector("#baby_weight");
    let childW = document.querySelector("#child_weight");
    let teenW = document.querySelector("#teen_weight")
    let youngadultW = document.querySelector("#youngadult_weight")
    let adultW = document.querySelector("#adult_weight")

    let babyH = document.querySelector("#baby_height")
    let childH = document.querySelector("#child_height")
    let teenH = document.querySelector("#teen_height")
    let youngadultH = document.querySelector("#youngadult_height")
    let adultH = document.querySelector("#adult_height")

    // skin, hair, eyes variables: 
    let skin = document.querySelector("#skin_color")
    let skinText = document.querySelector("#skin_text")
    let hair = document.querySelector("#hair_color")
    let hairText = document.querySelector("#hair_text")
    let eye1 = document.querySelector("#eye1_color")
    let eye1Text = document.querySelector("#eye1_text")
    let eye2 = document.querySelector("#eye2_color")
    let eye2Text = document.querySelector("#eye2_text")
    let eyeGradient = document.querySelector("#eye_gradient")

    // clothing colors variables: 
    let cloth1 = document.querySelector("#cloth1")
    let cloth1Text = document.querySelector("#cloth1_text")
    let cloth2 = document.querySelector("#cloth2")
    let cloth2Text = document.querySelector("#cloth2_text")
    let cloth3 = document.querySelector("#cloth3")
    let cloth3Text = document.querySelector("#cloth3_text")




    let xhr = new XMLHttpRequest();

    xhr.open("GET", hostName + "?id=" + id, true);



    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            let charString = JSON.parse(xhr.responseText);

            // name, surname, birthday date, death date variables:
            let charName = charString.mainInfo.imie;
            let charSurname = charString.mainInfo.nazwisko;

            name.textContent = charName + " " + charSurname;

            let charBirthday = charString.mainInfo.birthday;
            let charDeath = charString.mainInfo.death;

            if (charDeath === false){
                charDeath = "..."
            }
            dates.textContent = charBirthday + " - " + charDeath;

            // MBTI personality:
            let charMbti = charString.mainInfo.osobowosc_mbti;

            mbti.innerHTML = charMbti;

            switch(charMbti) {
                case "ISTJ":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text"> Osoby o tym typie łączą introwersyjną percepcję z ekstrawersyjnym myśleniem. 
                Przede wszystkim są skoncentrowane na wnętrzu, gdzie rozpatrują sprawy używając pięciu zmysłów; w dosłowny, konkretny sposób. 
                Ich drugorzędny styl życia jest skierowany na zewnątrz, gdzie zajmują się sprawami racjonalnie i logicznie.</span>`
                    break;
                case "ESTJ":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Osoby o tym typie łączą ekstrawersyjne myślenie z introwersyjną percepcją. 
                Przede wszystkim są skoncentrowane na świecie zewnętrznym, gdzie zajmują się sprawami racjonalnie i logicznie. 
                Ich drugorzędny styl życia jest skierowany do wewnątrz, 
                gdzie rozpatrują sprawy używając pięciu zmysłów; w dosłowny, konkretny sposób.</span>`
                    break;
                case "ISFJ":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Osoby o tym typie łączą introwersyjną percepcję z ekstrawersyjnym czuciem. 
                Przede wszystkim są one skoncentrowane na wnętrzu, gdzie rozpatrują sprawy, 
                używając pięciu zmysłów; w dosłowny, konkretny sposób. Ich drugorzędny styl życia jest skierowany na zewnątrz, 
                gdzie zajmują się sprawami zgodnie ze swoimi uczuciami wobec nich i według własnego systemu wartości.</span>`
                    break;
                case "ESFJ":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Osoby o tym typie łączą ekstrawersyjne czucie z introwersyjną percepcją. 
                Przede wszystkim są skoncentrowane na świecie zewnętrznym, 
                gdzie zajmują się sprawami zgodnie ze swoimi uczuciami wobec nich i własnym systemem wartości. 
                Ich drugorzędny styl życia jest skoncentrowany na wnętrzu, 
                gdzie rozpatrują sprawy używając pięciu zmysłów; w dosłowny, konkretny sposób.</span>`;
                    break;
                case "ISTP":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Osoby o tym typie łączą introwersyjne myślenie z ekstrawersyjną percepcją. 
                Przede wszystkim są skoncentrowane na wnętrzu, gdzie zajmują się sprawami racjonalnie i logicznie. 
                Ich drugorzędny styl życia jest skierowany na zewnątrz, 
                gdzie rozpatrują sprawy używając pięciu zmysłów; w dosłowny, konkretny sposób.</span>`;
                break;
                case "ESTP":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Osoby o tym typie łączą ekstrawersyjną percepcję z introwersyjnym myśleniem. 
                Przede wszystkim są skoncentrowane na świecie zewnętrznym, gdzie rozpatrują sprawy używając pięciu zmysłów; w dosłowny, konkretny sposób. 
                Ich drugorzędny styl życia jest skierowany do wewnątrz, gdzie zajmują się sprawami racjonalnie i logicznie.</span>`;
                    break;
                case "ISFP":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Osoby o tym typie łączą introwersyjne myślenie z ekstrawersyjną percepcją. 
                Przede wszystkim są skoncentrowane na wnętrzu, gdzie zajmują się sprawami racjonalnie i logicznie. 
                Ich drugorzędny styl życia jest skierowany na zewnątrz, 
                gdzie rozpatrują sprawy używając pięciu zmysłów; w dosłowny, konkretny sposób.</span>`;
                    break;
                case "ESFP":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">ESFP posiadają bardzo dobrze rozwinięte umiejętności interpersonalne i 
                w sytuacjach konfliktowych często pełnią rolę rozjemców. Łatwo się solidaryzują i okazują troskę o innych ludzi. 
                Są bardzo spostrzegawczy w relacjach międzyludzkich i nierzadko szybciej niż inni wyczuwają, gdy coś jest nie tak. 
                Reagują, wychodząc naprzeciw potrzebie, i w serdeczny sposób wyrażając swoją troskę. Mogą nie być najlepszymi życiowymi doradcami, 
                ponieważ nie lubią teoretyzować i planować, ale nie zawodzą, jeżeli chodzi o okazywanie troski w praktyczny sposób.</span>`;
                    break;    
                case "INTJ":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">INTJ mają analityczny umysł. Preferują pracować sami i z reguły są mniej towarzyscy niż inne osoby. 
                    Mimo to, pracując w grupie, są gotowi przejąć inicjatywę, gdy nikt inny się tego nie podejmuje 
                    albo gdy dostrzegają znaczącą słabość w przywództwie innej osoby. 
                    Z reguły są osobami praktycznymi, bardzo logicznymi i kreatywnymi.</span>`;    
                    break;
                case "ENTJ":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Ludzie o tym typie osobowości są nazywani "urodzonymi przywódcami", 
                ze względu na ich motywację i ostrość działania. Są asertywni, odważni i lubią wyzwania. 
                Skupiają się na znalezieniu najlepszego sposobu na osiągnięcie celu. Uważają, że poświęcenie odpowiedniej ilości czasu, 
                przy odpowiednich środkach wystarcza, aby osiągnąć każdy cel.</span>`;
                    break;
                case "INTP":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Jest to typ cichy, powściągliwy, elastyczny oraz potrafiący się przystosować do sytuacji. 
                Najczęściej jest nastawiony teoretycznie i abstrakcyjnie. INTP są pomysłowi, co ułatwia im tworzenie nowych koncepcji. Są samodzielni w działaniu, zwykle mają wąskie grono znajomych,
                wobec którego są bardzo lojalni, ale cechują ich także niskie umiejętności społeczne, 
                brak interakcji i czasami także brak zainteresowania drugim człowiekiem. </span>`;
                    break;
                case "ENTP":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Ten typ osobowości to prawdziwy adwokat diabła, dla którego sens życia stanowi rozrywanie na strzępy argumentów i przekonań w jak najbardziej spektakularny sposób. W przeciwieństwie do osób o bardziej ukierunkowanych osobowościach ENTP nie robią tego, aby osiągnąć jakiś głębszy 
                lub strategiczny cel, lecz dlatego, że sprawia im to przyjemność. </span>`;
                    break; 
                case "INFJ":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">INFJ są introwertykami, z początku zamkniętymi na nowe osoby. 
                Dopiero po dłuższym czasie są w stanie otworzyć się na drugiego człowieka. Mają także poczucie moralności i sprawiedliwości, rzadko działają też na własną korzyść. 
                Wierzą w siłę uczuć i w to, że świat może stać się lepszy. Ponadto, INFJ są niezwykle wrażliwi na uczucia innych. Potrafią przez długi czas żałować niemiłego czynu, ale mogą być również zawziętymi wrogami, jeżeli się ich skrzywdzi. Jest to łatwe, gdyż INFJ są niezbyt odporni na krytykę. 
                Jako wrogowie, umieją odkryć nawet najsłabszy punkt, lecz jako przyjaciele są niezwykle lojalni, pomocni i wyrozumiali.
                </span>`;
                    break;
                case "ENFJ":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">ENFJ wykazują dużą zdolność do komunikacji interpersonalnej, często przyjmują postawę lidera, gdy, 
                według nich, przychodzi czas działania. Osoby te żywo interesują się swoimi towarzyszami, często angażując się emocjonalnie, 
                przez co obdarzają ludzi zbyt dużym zaufaniem lub przedkładają cudze uczucia ponad własne. 
                ENFJ cechują się także autentycznością, szczerością i altruizmem.
                </span>`;
                    break;   
                case "INFP":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">INFP są niezwykle lojalne i oddane wobec najbliższych im ludzi. Będące "wrażliwcami" szukającymi za wszelką cenę jedności z drugim człowiekiem
                i reagującymi na emocje innych, wykazują jednak silne pragnienie posiadania mocnego systemu wartości oraz sensu we własnym życiu. 
                Osobowości INFP nie mogą obyć się bez życiowych priorytetów, którym mogłyby się oddać i za które mogłyby walczyć. 
                Skrajni idealiści, przez co nie mogą szybko podjąć decyzji i często doznają rozczarowań z powodu swych zbyt dużych oczekiwań.
                </span>`;
                    break;
                case "ENFP":
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">ENFP to typ ekstrawertywny z przewagą uczuć, intuicyjny,
                obserwujący. Osoby o tym typie osobowości cechuje ekstrawersja, kierowanie percepcji i działań na otaczający świat i ludzi.
                Osoby z tym typem osobowości charakteryzowane są jako ludzie kreatywni, charyzmatyczni, spontaniczni, asertywni.
                </span>`;
                    break;
                
                default:
                mbti.innerHTML += `<span id="mbti_text" class="mbti-text">Brak info</span>`; 
            }


            // displaying profile pics + slider with buttons
            let profilePicsArray = charString.profilePics
            let slideImage = document.querySelector(".slide__content")
            let slideButtons = document.querySelector(".slide__buttons")

            slideButtons.textContent = ""
            
            if(profilePicsArray.length === 0) {
                console.log("nie ma")
                slideImage.style.backgroundImage = `url("./unlocked.jpg")`

            } else {

                slideImage.style.backgroundImage = "url(" + hostName + "profilepic/" + id + "/" + profilePicsArray[0] + ")"

                for (let i=0; i<profilePicsArray.length; i++){

                    let buttonSlide = document.createElement("button")
                    let description = /(\.jpg|\.png|\.gif|\.jpeg|\.tiff|\.bmp)/i
                    let descriptionBr = /\_/mg
                    let buttonSlideText = document.createTextNode(profilePicsArray[i].replace(description,"").replace(descriptionBr, " "));
    

                    buttonSlide.appendChild(buttonSlideText)    
                    buttonSlide.dataset.image = profilePicsArray[i];
                    
                    slideButtons.appendChild(buttonSlide)
                    buttonSlide.classList.add("slide__button")
                
                    
                    //For the first iterate set first button to selected
                    if(i === 0) {
                        buttonSlide.classList.add("slide__button--active");
                    }

                    buttonSlide.addEventListener("click", (e) => {

                        slideImage.style.backgroundImage = `url(${hostName}profilepic/${id}/${e.target.dataset.image})`

                            slideButtons.childNodes.forEach(element => {
                               
                                //When current clicked element is else element in current childNodes iterate item
                                //  also not contains specified class
                                if(element === e.target && !element.classList.contains("slide__button--active")) {
                                    element.classList.add("slide__button--active");
                                } 

                                //If currect clicked element is not current iterate element
                                if(element !== e.target) {
                                    element.classList.remove("slide__button--active");
                                } 

                            });

                        })
                    }
            }

            // temperament - progress bars 

            let sanguineBar = charString.temperament.sangwinik
            sanguine.textContent = sanguineBar + "%"

            let cholericBar = charString.temperament.choleryk
            choleric.textContent = cholericBar + "%"

            let flegmaticBar = charString.temperament.flegmatyk
            flegmatic.textContent = flegmaticBar + "%"

            let melancholicBar = charString.temperament.melancholik
            melancholic.textContent = melancholicBar + "%"


            setTimeout( () => {

                sanguine.style.width = sanguineBar + "%"
                choleric.style.width = cholericBar + "%";
                flegmatic.style.width = flegmaticBar + "%"
                melancholic.style.width = melancholicBar + "%"

            }, animationTime );

            



            // weight and width table
            let babyWeight = charString.waga.niemowle
            babyW.textContent = babyWeight + " kg";

            let childWeight = charString.waga.dziecko
            childW.textContent = childWeight + " kg";

            let teenWeight = charString.waga.nastolatek
            teenW.textContent = teenWeight + " kg";

            let youngadultWeight = charString.waga.mlodydorosly
            youngadultW.textContent = youngadultWeight + " kg";

            let adultWeight = charString.waga.dorosly
            adultW.textContent = adultWeight + " kg";

            // height
            let babyHeight = charString.wzrost.niemowle
            babyH.textContent = babyHeight + " cm";

            let childHeight = charString.wzrost.dziecko
            childH.textContent = childHeight + " cm";

            let teenHeight = charString.wzrost.nastolatek
            teenH.textContent = teenHeight + " cm";

            let youngadultHeight = charString.wzrost.mlodydorosly
            youngadultH.textContent = youngadultHeight + " cm";

            let adultHeight = charString.wzrost.dorosly
            adultH.textContent = adultHeight + " cm";
        
                for(let key in charString) {
                    for(let key2 in charString[key]){
                        if(charString.waga[key2] === null){
                            console.log("dziala")
                            
                            continue
                            }
                    }
                }

            // skin, hair, eye colors table
                let skinColor = charString.kolory.skora

                skinText.textContent = skinColor;
                skin.style.backgroundColor = skinColor;
                skinText.setAttribute("value", skinColor)

                let hairColor = charString.kolory.wlosy

                hairText.textContent = hairColor;
                hair.style.backgroundColor = hairColor;
                hairText.setAttribute("value", hairColor)

                let eye1Color = charString.kolory.oczy_obwodka

                eye1Text.textContent = eye1Color;
                eye1.style.backgroundColor = eye1Color;
                eye1Text.setAttribute("value", eye1Color)

                let eye2Color = charString.kolory.oczy_teczowka

                eye2Text.textContent = eye2Color;
                eye2.style.backgroundColor = eye2Color;
                eye2Text.setAttribute("value", eye2Color)


                // changing eye color 
                eyeGradient.style.background = `radial-gradient(ellipse at center, black 0%,black 33%,${eye1Color} 33%, ${eye1Color} 33%,${eye2Color} 100%, ${eye2Color} 100%)`;

            // table with colors (clothes)


            let cloth1Color = charString.kolory.ubior_1_dominujacy

            cloth1.style.backgroundColor = cloth1Color;
            cloth1Text.setAttribute("value", cloth1Color)
            
             function copyHex(e) {
                 console.log("a")
                 
                let backUp = e.getAttribute("data")
                e.focus()
                e.select();
                document.execCommand("copy")
            }


            cloth1Text.addEventListener("click", (e)=> {
                console.log("aaa")
                let backUp = e.target.getAttribute("data-original-title")

                console.log(backUp)
                
                e.target.focus()
                e.target.select();
                document.execCommand("copy")
                e.target.setAttribute("data-original-title", "Udało się skopiować tekst!")

                setTimeout(()=>{
                    e.target.setAttribute("data-original-title", backUp)
                }, 2000)

            })
            // cloth1Text.addEventListener("click", copyHex(cloth1Text))

            


            let cloth2Color = charString.kolory.ubior_2

            cloth2Text.textContent = cloth2Color;
            cloth2.style.backgroundColor = cloth2Color;
            cloth2Text.setAttribute("value", cloth2Color)

            let cloth3Color = charString.kolory.ubior_3

            cloth3Text.textContent = cloth3Color;
            cloth3.style.backgroundColor = cloth3Color;
            cloth3Text.setAttribute("value", cloth3Color)


            let header = document.querySelector(".main__header")
            header.style.background =`url('gradient.png'), linear-gradient(to right, ${cloth1Color} 0%, ${cloth2Color} 44%, ${cloth3Color} 100%)`
            header.style.backgroundBlendMode = "multiply"


            let quotation = charString.cytaty;
            let quotationBlock = document.querySelector(".information__quotation")

            quotationBlock.style.border = `solid 1px ${cloth2Color}`
            quotationBlock.style.borderLeft = `solid 10px ${cloth2Color}`

                function randomGen(min, max) {
                    let wynik = (Math.random()*(max-min))+min
                    return Math.round(wynik)
                }
            
            // displaying random quotes:

            
       
                let randomItem = quotation[randomGen(0, quotation.length-1)]
                quotationBlock.textContent = randomItem

                // let author = /~((\s*)(\w*)(\W*)){1,}/mig
                // let replace = "<br> <span>" + randomItem.match(author) + "</span>"

                // if (replace !== null){
                //     console.log("%c" + randomItem.replace(author, replace), "color: purple")
                //     console.log("%c" + replace, "color:red")
                // }

            



            // displaying personality and design articles: 
            let personalityBlock = document.querySelector("#personality-text")
            let personalityText = charString.mainInfo.historia


            let designBlock = document.querySelector("#appearance-text")
            let designText = charString.mainInfo.opis_wygladu

            let triviaArray = charString.ciekawostki


            // displaying facts:


            let triviaElement = document.querySelector("#trivia")
            let triviaLink = document.querySelector("#trivia-link")

                if(triviaElement) {
                     main.removeChild(triviaElement)
                }
                if(triviaLink){                
                    menu.removeChild(triviaLink)
                }




            if (triviaArray.length !== 0){


                    let article = document.createElement("article")
                    main.appendChild(article)
                    article.setAttribute("id", "trivia")
                    article.classList.add("container-fluid")

                    article.innerHTML = `<h2 class="break"><span class="break__title">Ciekawostki</span></h2>`


                    let triviaList = document.createElement("ul")
                    triviaList.innerHTML = ""    
                    triviaList.classList.add("trivia__list")

                    article.appendChild(triviaList)

                    let triviaLink = document.createElement("li")
                    let triviaLinkItem = document.createElement("a")

                    triviaLink.setAttribute("id", "trivia-link")
                    triviaLinkItem.classList.add("nav-link")
                    triviaLinkItem.setAttribute("href", "#trivia")
                    triviaLinkItem.textContent = "Ciekawostki"

                    triviaLink.appendChild(triviaLinkItem)

                menu.appendChild(triviaLink)



                for (let i=0; i<triviaArray.length; i++){

                    triviaItem = document.createElement("li")
                    triviaItem.setAttribute("id", "trivia-item")

                    triviaItem.classList.add("list-group-item")
                    triviaItem.classList.add("list-group-item-dark")
                    triviaItem.classList.add("trivia__item")

                    triviaList.appendChild(triviaItem)

                triviaItem.textContent = triviaArray[i];
                
                }

            }

            //displaying <br> in texts 

            const reg = /\\n/mg

            let personalityBreaks = personalityText.replace(reg, "<br>")
            let designBreaks = designText.replace(reg, "<br>")

            personalityBlock.innerHTML = personalityBreaks
            designBlock.innerHTML = designBreaks



            // spoiler warning:
            let spoilerButton = document.querySelector("#spoiler")

            personalityBlock.classList.remove("personality__text--pure")
            spoilerButton.classList.remove("personality__spoiler--disabled")

            spoilerButton.addEventListener("click", () => {
                personalityBlock.classList.add("personality__text--pure")
                spoilerButton.classList.add("personality__spoiler--disabled")
            })



            // if value === null or "", error is displayed:

        validator(charString)

//smooth scrolling
        $('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {

        var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

            
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

        
        } else if(true){
            console.log("jaiśbłąd22222")
            console.log(this)
        }

// HTTP request - end:
    }  


);
loadingScreen(loader, false)

    xhr.send();


}
