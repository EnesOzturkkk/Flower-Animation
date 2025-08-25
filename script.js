const waterButton = document.querySelector('#waterize');
const waterButtonImage = document.querySelector('#waterizeImage');
const allBackPlanets = document.querySelectorAll('.backPlanets');
const otherPlanetsContainer = document.querySelector('#otherPlanets');
const mainPlanet = document.querySelector('#mainPlanet');
const fox = document.querySelector('#fox'); // Tilki elementini seçiyoruz
const mainCharacter = document.querySelector('#mainCharacter');
const otherCharacter = document.querySelector('#otherCharacter');
const flower = document.querySelector('#flower');

// `let` kullanarak planetCounter'ın değerini değiştirebilmemizi sağlıyoruz.
let planetCounter = 0;

const planetName = document.querySelector('#planetName');
const planetNames = ['King', 'Vain Man', 'Drunkard', 'Businessman', 'Lamplighter', 'Geographer'];

// Bu fonksiyonu case bloklarınızın içinde çağırın
function updatePlanetName(index) {
    const text = planetNames[index];
    planetName.innerHTML = ''; // İçeriği temizle

    // Her harf için bir <span> oluştur ve animation-delay ekle
    text.split('').forEach((char, i) => {
        const span = document.createElement('span');
        if (char === ' ') {
            span.innerHTML = '&nbsp;';
        } else {
            span.textContent = char;
        }
        // CSS'de zaten tanımlı olan animation-delay'i kullanın,
        // veya doğrudan buraya stil olarak ekleyebilirsiniz.
        // Bu, daha esnek bir yaklaşımdır.
        span.style.animationDelay = `${i * 0.1}s`; 
        planetName.appendChild(span);
    });
}

waterButton.addEventListener('click', () => {

    waterButton.classList.add("waterizeOn");
    waterButtonImage.classList.add("waterizeOn"); 

    setTimeout(() => {
        waterButton.classList.remove("waterizeOn");
        waterButtonImage.classList.remove("waterizeOn"); 
    }, 1000);

    switch (planetCounter) {
        case 0:
            waterButtonImage.src = "public/videos/bird.gif";
            updatePlanetName(planetCounter);
            mainCharacter.src = "public/assets/characters/princeWaterizing.png";
            mainCharacter.style.width = "100px";
            mainCharacter.style.transform = "translateX(-30px) translateY(-20px) rotate(15deg)";

            setTimeout(() => {
                mainCharacter.style.width = "35px";
                mainCharacter.src = "public/assets/characters/standL.png";
                mainCharacter.style.transform = "translateX(-620px) translateY(50px)";
                otherCharacter.classList.remove("hidden");
            }, 2000);
            
            setTimeout(() => {
                mainCharacter.src = "public/assets/characters/standR.png";
                otherCharacter.style.transform = "";
            }, 2600);
            break;
        case 1:
            updatePlanetName(planetCounter);
            mainCharacter.style.transform = "translateX(-380px) translateY(-245px)";
            mainCharacter.style.width = "32px";
            otherCharacter.src = "public/assets/characters/arrogant.png";
            otherCharacter.style.transform = "translateX(200px) translateY(-245px)";
            otherCharacter.style.width = "67px";
            planetName.style.transform = "translateX(220px) translateY(-245px)";
            planetName.style.fontSize = "1.8rem";
            break;
        case 2:
            updatePlanetName(planetCounter);
            mainCharacter.style.transform = "translateX(-110px) translateY(-350px)";
            mainCharacter.style.width = "29px";
            otherCharacter.src = "public/assets/characters/drank.png";
            otherCharacter.style.transform = "translateX(470px) translateY(-325px)";
            otherCharacter.style.width = "64px";
            planetName.style.transform = "translateX(495px) translateY(-340px)";
            planetName.style.fontSize = "1.6rem";
            break;
        case 3:
            updatePlanetName(planetCounter);
            mainCharacter.style.transform = "translateX(160px) translateY(-215px)";
            mainCharacter.style.width = "26px";
            otherCharacter.src = "public/assets/characters/accountant.png"; 
            otherCharacter.style.transform = "translateX(755px) translateY(-180px) rotate(15deg)";
            otherCharacter.style.width = "72px";
            planetName.style.transform = "translateX(765px) translateY(-200px)";
            planetName.style.fontSize = "1.4rem";
            break;
        case 4:
            updatePlanetName(planetCounter);
            mainCharacter.style.transform = "translateX(370px) translateY(-65px)";
            mainCharacter.style.width = "23px";
            otherCharacter.src = "public/assets/characters/lanternMan.png";
            otherCharacter.style.transform = "translateX(950px) translateY(-42px)";
            otherCharacter.style.width = "77px";
            planetName.style.transform = "translateX(960px) translateY(-72px)";
            planetName.style.fontSize = "1.2rem";
            break;
        case 5:
            updatePlanetName(planetCounter);
            mainCharacter.style.transform = "translateX(520px) translateY(135px)";
            mainCharacter.style.width = "20px";
            otherCharacter.src = "public/assets/characters/geographer.png";
            otherCharacter.style.transform = "translateX(1090px) translateY(170px)";
            otherCharacter.style.width = "67px";

            planetName.style.transform = "translateX(1110px) translateY(130px)";
            planetName.style.fontSize = "1rem";

            waterButton.classList.add('hidden');
            waterButtonImage.classList.add('hidden');
            
            setTimeout(() => {
                otherPlanetsContainer.classList.add("hidden-smooth");
                otherPlanetsContainer.classList.add("hidden");
                otherCharacter.classList.add("hidden");
                mainCharacter.classList.add("hidden");
                mainPlanet.style.width = "450px";
                mainPlanet.style.height = "450px";
                mainPlanet.style.top = "-3rem";
                waterButton.classList.add("hidden");
                waterButtonImage.classList.add("hidden");
                // This will redirect the browser to "new_page.html"
                window.location.href = 'flowerIndex.html';
            }, 3000); // CSS geçiş süresi kadar bekliyoruz
            
            break;
    }

    if (planetCounter < allBackPlanets.length) {
        allBackPlanets.forEach(planet => {
            planet.classList.remove('opacityOff');
        });

        allBackPlanets[planetCounter].classList.add('opacityOff');
    }

    planetCounter++;
});
