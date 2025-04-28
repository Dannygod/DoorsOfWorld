document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.modal-container').classList.add('active');
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal-container').classList.remove('active');
});

document.querySelector('.modal-container').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.querySelector('.modal-container').classList.remove('active');
    }
});

const carousel = document.querySelector('#carousel');
const images = carousel.querySelectorAll('img');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');
let currentIndex = 0;
const intervalTime = 5000; // 5秒切換一次

// 顯示指定索引的圖片
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

// 下一張
function nextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
}

// 上一張
function prevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
}

// 自動播放
let autoPlay = setInterval(nextImage, intervalTime);

// 點擊按鈕
nextBtn.addEventListener('click', () => {
    clearInterval(autoPlay); // 停止自動播放
    nextImage();
    autoPlay = setInterval(nextImage, intervalTime); // 重啟自動播放
});

prevBtn.addEventListener('click', () => {
    clearInterval(autoPlay);
    prevImage();
    autoPlay = setInterval(nextImage, intervalTime);
});

// 滑鼠懸停暫停自動播放
carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
carousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextImage, intervalTime);
});
// 展品資料（東方門）
const eastDoors = [
    {
        title: "玉門關",
        description: `漢武帝時期 甘肅敦煌<br>
玉門關在漢武帝時期因建造西域附近的長城而設立，在當時為通往西域的門戶，乃重要的軍事關口，對漢人而言便是重要的國門。古詩詞中也出現非常描寫玉門關及其邊塞之事的內容，如：王昌齡〈從軍行〉：「青海長雲暗雪山，孤城遙望玉門關」及王之渙〈涼州詞〉：「羌笛何須怨楊柳，春風不度玉門關」都是千古名句，描寫出作為國門的玉門關承載了許多對於戰爭與別離的哀愁。現今漢代長城多已消失，玉門關也僅存部分的遺址，但其所留下來的文化意義，即家國邊塞與別離之地，依舊伴隨著人們的傳唱而存在著。`,
        image: "./img/玉門關.jpg",
        alt: "玉門關"
    },
    {
        title: "雁門關",
        description: `戰國末年 山西忻州<br>
戰國末年的趙國為了防範匈奴入侵，設立了雲中郡、雁門郡、代郡三郡並派兵鎮守，至秦始皇修築萬里長城，此處便有了軍事建築。當時尚未有「雁門關」這個名稱，直至唐朝才出現「雁門關」一詞，但漢代的衛青、霍去病等人都曾在此地驅逐匈奴，立下赫赫戰功，使此地成為重要的北方關口，以及詩人口中重要的邊塞意象，如：李賀〈雁門太守行〉：「黑雲壓城城欲摧，甲光向日金鱗開。角聲滿天秋色裏，塞上燕脂凝夜紫。」、李白〈古風〉其六：「苦戰功不賞。忠誠難可宣。誰憐李飛將。白首沒三邊。」寫出了雁門關邊戰爭的殘酷與軍旅的淒涼。如今，雁門關雖僅殘存部分，但他作為邊塞、國門的文化意識依然生生不息。`,
        image: "./img/雁門關.jpg",
        alt: "雁門關"
    },
    {
        title: "居庸關",
        description: `明代 北京市昌平區南口鎮<br>
早於春秋戰國時代便有相關記載「天下九塞，居庸之一」，而其建設始於漢代，當時亦只是作為郡縣間的關口，並未納於長城的建築體制內。到了北魏時代，居庸關才修築成長城的一部分，並建設成長城上其中一座重要的關口。而自明朝起，居庸關便是防禦蒙古入侵的關鍵防線。明代建設大規模的長城工程，居庸關作為重要的軍事重地，承擔著保衛京師的重任，是北京西北方的軍事重鎮。`,
        image: "./img/居庸關.jpg",
        alt: "居庸關"
    },
    {
        title: "山海關",
        description: `明代 河北省秦皇島市<br>
山海關因為明長城最東側的關隘，被譽為“天下第一關”，自明朝以來，作為防禦外敵入侵的重地。1644年，明朝滅亡的重大事件——李自成攻入山海關，清軍入關，之後此門逐漸失去軍事用處，反而作為農民開墾或觀海勝地，然而當第一次鴉片戰爭爆發後，清軍才又在石河口等地設置炮台，同時由於沙皇俄國對東北地區的威脅日益嚴重，清朝政府於咸豐十年（1860年）重新打開山海關，允許農民出關前往部分地區開墾。`,
        image: "./img/山海關.jpg",
        alt: "山海關"
    },
    {
        title: "大散關",
        description: `西漢時期 陝西寶雞<br>
        大散關位於陝西，並緊接著陳倉道，即四川與陝西之間最重要的通道，也是秦朝末年開啟楚漢之爭的戰爭地點，成語「暗渡陳倉」便是由此而來；除此之外大散關還經歷了多場戰役，有記錄可查的約70多場，如：三國時諸葛亮便是依循此關與道以北伐魏國。而過去的大散關伴著險峻的山勢而立，故而「進可攻、退可守」成為一個重要的軍事重地，文學上陸游的〈書憤〉詩中「樓船夜雪瓜洲渡，鐵秋風大散關」更是此地戰爭場景的千古名句，但在明末廢棄後，大散關逐漸沒落，如今也僅存部分殘跡，可即便如此，他所帶來的民族意識仍然生生不息。`,
        image: "./img/大散關.png",
        alt: "大散關"
    },
    {
        title: "陽關",
        description: `漢武帝時期 甘肅敦煌<br>
        陽關在過去與玉門關同作為中原通往西域的關隘，但二者的司職實際有所不同，軍事由玉門關進出、使節與商貿則由陽關進出，特別的一點是《漢書．西域傳》中在記載西域各國與中原的距離時，不僅會寫其都城與皇城長安的距離，也會寫其與陽關的距離，如著名的樓蘭國便記錄著其「去（距離）陽關千六百里，去長安六千一百里。」可見陽關作為古代「海關」的重要性。至於西漢時期重要的絲綢之路也是從此處出國，而作為中原的西門邊塞、外國的貨運轉運站，陽關自然相當繁榮，但至唐代以降，海運的繁榮使陽關逐漸沒落，正如王維《送元二使安西》所寫之「西出陽關無故人」一般。如今陽關的繁榮已然不在，遺址也僅存位置與烽火塔的殘跡，但隨著王維的這首詩作，即著名的「陽關三疊」，以及人們的傳唱，陽關就永遠不會被人遺忘。`,
        image: "./img/陽關.png",
        alt: "陽關"
    },
    {
        title: "仙霞關",
        description: `唐朝末年 浙江保安<br>
        仙霞關位於浙江、福建、江西三省的要衝，地理位置極重要，其古道為唐朝末年黃巢之亂時，黃巢的起義軍所修築，而後各朝代將此作為官道進行修葺，直至明清之間因戰事頻繁而在此建立起關隘。此地山勢險峻、易守難攻，為軍事要地，但如今遺址因年久失修，僅存部分殘壁。`,
        image: "./img/仙霞關.png",
        alt: "仙霞關"
    },
    {
        title: "娘子關",
        description: `戰國時期 山西平定<br>
        娘子關的歷史悠久，原稱「葦澤關」，但在唐代時因太宗李世民的姐姐平陽公主曾率軍駐紥此處，而其部隊人稱「娘子軍」，故此關便有了娘子關的稱呼。此處為山西、河北的交界處，也是萬里長城的關隘之一，故有「三晉門戶」的名號。`,
        image: "./img/娘子關.png",
        alt: "娘子關"
    },
    {
        title: "劍門關",
        description: `三國時期 四川劍閣<br>
        劍門關是由諸葛亮依四川陡峭的山勢所建，而因其形勢如劍故得名「劍門關」。此處為古代入蜀的咽喉，而其易守難攻的地形優勢也使之成為兵家必爭之地。李白的〈蜀道難〉一詩中便形容其「劍閣崢嶸而崔嵬，一夫當關，萬夫莫開」。`,
        image: "./img/劍門關.png",
        alt: "劍門關"
    },
];

// 展品資料（西方門）
const westDoors = [
    {
        title: "凱旋門 Arc de triomphe de l'Étoile",
        description: `1836年 Place Charles de Gaulle<br>
凱旋門建設始於1806年，拿破崙（Napoléon Bonaparte）為了慶祝法國軍隊在奧斯特里茨戰役（Bataille d’Austerlitz）中獲得勝利，乃興建「一道偉大的雕塑」，意欲迎接日後凱旋的法軍將士。然而，隨著拿破崙帝國的滅亡，工程於其後中止。直到1830年波旁王朝（Maison de Bourbon）被推翻後，路易・菲利普一世（Louis-Philippe Ier）接管政權，凱旋門的建設才於1836年完成，並在7月29日舉行落成典禮。`,
        image: "./img/凱旋門.jpg",
        alt: "凱旋門"
    },
    {
        title: "布蘭登堡門 Brandenburger",
        description: `1791年落成 德國柏林米特區<br>
是由普魯士國王腓特烈·威廉二世下令於1788年至1791年間建造，以紀念普魯士在七年戰爭取得的勝利。納粹時期作為政治宣傳活動的場所，見證歐洲歷史上的黑暗面。冷戰時期位於柏林圍牆旁，成為東西德分裂的象徵。柏林圍牆倒塌，布蘭登堡門象徵著德國統一，人民爭取自由與人權的勝利。它不僅被視為德國和歐洲動盪歷史的象徵，而且還是歐洲統一與和平的象徵。`,
        image: "./img/布蘭登堡門.jpg",
        alt: "布蘭登堡門"
    },
    {
        title: "君士坦丁凱旋門 Arco di Costantino",
        description: `315年落成 義大利羅馬<br>
丁一世在312年的米爾維安橋戰役中取得的勝利而建，對於君士坦丁的統治至關重要，因為它幫助他打敗了競爭對手馬克森提烏斯，最終成為羅馬唯一的皇帝。拱門是他戰爭勝利的象徵。君士坦丁的勝利後，他成為羅馬帝國的基督教保護者，並在313年發布了米蘭敕令，使基督教成為合法宗教，這個轉折點對西方歷史和基督教的擴展至關重要。`,
        image: "./img/君士坦丁凱旋門.jpg",
        alt: "君士坦丁凱旋門"
    },
    {
        title: "梅嫩門Menin Gate",
        description: `1927年 比利時伊珀爾<br>
        梅嫩門全稱為梅嫩門失蹤者紀念碑，是用以紀念在第一次世界大戰中在於伊珀爾陣亡的大英國協士兵。選址在此便是由於此地在戰略要地上，為士兵們往前線作戰的必經之路，且在一戰期間在此爆發了五次大型戰役。而其中第三次伊珀爾戰役最為慘烈，協約國在此於同盟國激戰，最終雖然取得了勝利，但此處幾乎被夷為平地且雙方各有將近五十萬人的傷亡數。在1927年時由雷金納德·布洛姆菲爾德爵士設計的紀念碑於伊珀爾落成，並在之後於當地時間20:00時固定演奏樂曲〈最後崗位〉（Last Post）以示紀念。`,
        image: "./img/梅嫩門.png",
        alt: "梅嫩門"
    },
    {
        title: "維魯門Viru Gate",
        description: `14世紀 愛沙尼亞塔林<br>
        塔林舊城區乃世界文化遺產，其特色即完整保留了中世紀的風貌，而其大門：維魯門便是其重要的代表建築之一，且是現今當地僅存的兩座城門之一。`,
        image: "./img/維魯門.png",
        alt: "維魯門"
    },
    {
        title: "瑞士門 Schweizertor",
        description: `1522年 奧地利維也納<br>
        此門為哈布斯堡王朝舊王宮裡最古老的城門，同時也是王宮的正門。而對於歐洲人而言「瑞士人」幾乎可以算作「忠誠」的代名詞，故而過去的皇室包括此地便以瑞士人作為其守衛，且依據記載，此處的命名是由瑪利亞．特蕾莎的命令，使擔任守衛的瑞士禁衛軍在此宿營，故而將此門稱為「瑞士人」。`,
        image: "./img/瑞士門.png",
        alt: "瑞士門"
    },
    {
        title: "聖弗洛里安門 Brama Floriańska",
        description: `約1285年 波蘭克拉科夫<br>
        在克拉科夫的老城中有座古老的城門，此即聖弗洛里安門，此乃於1285左右依萊謝克二世公爵的命令所建造，並以附近的聖弗洛里安教堂命名，用以防禦韃靼人的攻擊。因其歷史悠久，故可見其經歷多次的建築風格，如最上方的巴洛克風格建築便是在16世紀時所增設。而其歷史意義不僅在於保有多種風格，還因為其是皇家大道的起點，也是拿破侖軍隊路線所經之地，故在建築、皇家、軍事上皆有其意義。`,
        image: "./img/聖弗洛里安門.png",
        alt: "聖弗洛里安門"
    },
    {
        title: "尼格拉城門 Porta Nigra",
        description: `約180年 德國特里爾<br>
        尼格拉城門又被翻譯為大黑門，此即由於其所使用的材料為灰色的砂岩，而後又經過長時間的風化，外觀又更加黑暗。而尼格拉城門是古羅馬時期的北城門，是當地的城市象徵，而此門更在1986年時被聯合國教科文組織列為世界文化遺產。此外，大黑門在12世紀的作品〈Gesta Treverorum中〉還有另一個名稱：Porta Martis，意即戰神之門，當地的特雷維爾人以其戰神瑪爾斯為其命名，他們會從這個門出征，若戰敗也回從此處回來，即用以表其悲傷。`,
        image: "./img/尼格拉城門.png",
        alt: "尼格拉城門"
    },
    {
        title: "霍爾斯滕門 Holstentor",
        description: `1464年 德國呂貝克<br>
        霍爾斯滕門是過去漢薩同盟首都城的城門，現今則為呂貝克唯一的城堡大門遺跡，並在1987年被列為世界文化遺產。過去此地是個貿易之城，故此城門是非常重要的防衛工事，現今仍有當時使用的大炮可見，而在門楣上也寫有「CONCORDIA DOMI FORIS PAX」的銘文，意為家鄉團結、海外和平，表現出其建造者對於此地安全的期待。`,
        image: "./img/霍爾斯滕門.png",
        alt: "霍爾斯滕門"
    },
    {
        title: "布達札維城門 Budějovická brána",
        description: `1602年 捷克契斯凱布達札維<br>
        契斯凱布達札維原來有9座城門用以防禦，但因為後來的工業化發展，其中8座城門被拆除，如今唯一保留下來的便是布達札維城門。`,
        image: "./img/布達札維城門.png",
        alt: "布達札維城門"
    },
];
// 共用函數：傳入展品資料、swiper-wrapper選擇器，幫你產生slide
function renderSlides(data, wrapperSelector) {
    const wrapper = document.querySelector(wrapperSelector);
    data.forEach(door => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <div class="slide-content">
                <div class="text">
                    <h4>${door.title}</h4>
                    <p>${door.description}</p>
                </div>
                <div class="image">
                    <img src="${door.image}" alt="${door.alt}">
                </div>
            </div>
        `;
        wrapper.appendChild(slide);
    });
}

// 呼叫來渲染
renderSlides(eastDoors, '.swiper .swiper-wrapper');   // 東方門展區
renderSlides(westDoors, '.west-swiper .swiper-wrapper'); // 西方門展區