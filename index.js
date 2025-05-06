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
const carouselContainer = carousel.querySelector('.carousel-container');
const prevBtn = carousel.querySelector('#prev');
const nextBtn = carousel.querySelector('#next');

const photos = [
    {"src": './img/door/函谷關1.png', "title": '函谷關'},
    {"src": './img/door/函谷關2.png', "title": '函谷關'},
    {"src": './img/door/函谷關3.png', "title": '函谷關'},
    {"src": './img/door/玉門關1.png', "title": '玉門關'},
    {"src": './img/door/玉門關2.png', "title": '玉門關'},
    {"src": './img/door/雁門關1.png', "title": '雁門關'},
    {"src": './img/door/雁門關2.png', "title": '雁門關'},
    {"src": './img/door/居庸關1.jpg', "title": '居庸關'},
    {"src": './img/door/居庸關2.jpg', "title": '居庸關'},
    {"src": './img/door/居庸關3.jpg', "title": '居庸關'},
    {"src": './img/door/山海關1.jpg', "title": '山海關'},
    {"src": './img/door/山海關2.jpg', "title": '山海關'},
    {"src": './img/door/山海關3.jpg', "title": '山海關'},
    {"src": './img/door/大散關1.png', "title": '大散關'},
    {"src": './img/door/大散關2.png', "title": '大散關'},
    {"src": './img/door/陽關1.png', "title": '陽關'},
    {"src": './img/door/陽關2.png', "title": '陽關'},
    {"src": './img/door/陽關3.png', "title": '陽關'},
    {"src": './img/door/仙霞關1.png', "title": '仙霞關'},
    {"src": './img/door/娘子關1.png', "title": '娘子關'},
    {"src": './img/door/娘子關2.png', "title": '娘子關'},
    {"src": './img/door/劍門關1.png', "title": '劍門關'},
    {"src": './img/door/凱旋門1.jpg', "title": '凱旋門'},
    {"src": './img/door/凱旋門2.jpg', "title": '凱旋門'},
    {"src": './img/door/布蘭登堡門1.jpg', "title": '布蘭登堡門'},
    {"src": './img/door/君士坦丁凱旋門1.jpg', "title": '君士坦丁凱旋門'},
    {"src": './img/door/梅嫩門1.png', "title": '梅嫩門'},
    {"src": './img/door/梅嫩門2.png', "title": '梅嫩門'},
    {"src": './img/door/維魯門1.png', "title": '維魯門'},
    {"src": './img/door/維魯門2.png', "title": '維魯門'},
    {"src": './img/door/瑞士門1.png', "title": '瑞士門'},
    {"src": './img/door/瑞士門2.png', "title": '瑞士門'},
    {"src": './img/door/瑞士門3.png', "title": '瑞士門'},
    {"src": './img/door/聖弗洛里安門1.png', "title": '聖弗洛里安門'},
    {"src": './img/door/尼格拉城門1.png', "title": '尼格拉城門'},
    {"src": './img/door/尼格拉城門2.png', "title": '尼格拉城門'},
    {"src": './img/door/霍爾斯滕門1.png', "title": '霍爾斯滕門'},
    {"src": './img/door/霍爾斯滕門2.png', "title": '霍爾斯滕門'},
    {"src": './img/door/布達札維城門1.png', "title": '布達札維城門'}
];
// 展品資料（東方門）
const eastDoors = [
    {
        title: "函谷關",
        subtitle: "西周時期 河南靈寶",
        description: `在古代，洛陽通往長安的道路中，從崤山到潼關的路段多有如同函匣一般的山谷，故而該地被稱作「函谷」，而在此處西周時期便建立了一個重要的關隘，其便被稱作「函谷關」。而洛陽與長安作為中國古代兩大重要的政治重地，其之間的函谷關也因此重要性相當之高；且因其地形十分險峻與狹窄，故而在《後漢書》便記載著其如同「丸泥可塞」的說明。在這兩個特色之下，函谷關也被人當作是極重要的戰略重地，甚至也被人以「一夫當關，萬夫莫開」來形容。至於在歷史的重要性上，傳說老子離開中土時便是倒騎著青牛、攜帶著紫氣而來函谷關，並在守關人尹喜的招待下，於此處留下名垂千古的《道德經》。`,
        image: "./img/door/函谷關1.png",
        alt: "函谷關"
    },
    {
        title: "雁門關",
        subtitle: "戰國末年 山西忻州",
        description: `戰國末年的趙國為了防範匈奴入侵，設立了雲中郡、雁門郡、代郡三郡並派兵鎮守，至秦始皇修築萬里長城，此處便有了軍事建築。當時尚未有「雁門關」這個名稱，直至唐朝才出現「雁門關」一詞，但漢代的衛青、霍去病等人都曾在此地驅逐匈奴，立下赫赫戰功，使此地成為重要的北方關口，以及詩人口中重要的邊塞意象，如：李賀〈雁門太守行〉：「黑雲壓城城欲摧，甲光向日金鱗開。角聲滿天秋色裏，塞上燕脂凝夜紫。」、李白〈古風〉其六：「苦戰功不賞。忠誠難可宣。誰憐李飛將。白首沒三邊。」寫出了雁門關邊戰爭的殘酷與軍旅的淒涼。如今，雁門關雖僅殘存部分，但他作為邊塞、國門的文化意識依然生生不息。`,
        image: "./img/door/雁門關1.png",
        alt: "雁門關"
    },
    {
        title: "娘子關",
        subtitle: "戰國時期 山西平定",
        description: `娘子關的歷史悠久，原稱「葦澤關」，但在唐代時因太宗李世民的姐姐平陽公主曾率軍駐紥此處，而其部隊人稱「娘子軍」，故此關便有了娘子關的稱呼。此處為山西、河北的交界處，也是萬里長城的關隘之一，故有「三晉門戶」的名號。`,
        image: "./img/door/娘子關1.png",
        alt: "娘子關"
    },
    {
        title: "大散關",
        subtitle: "西漢時期 陝西寶雞",
        description: `大散關位於陝西，並緊接著陳倉道，即四川與陝西之間最重要的通道，也是秦朝末年開啟楚漢之爭的戰爭地點，成語「暗渡陳倉」便是由此而來；除此之外大散關還經歷了多場戰役，有記錄可查的約70多場，如：三國時諸葛亮便是依循此關與道以北伐魏國。而過去的大散關伴著險峻的山勢而立，故而「進可攻、退可守」成為一個重要的軍事重地，文學上陸游的〈書憤〉詩中「樓船夜雪瓜洲渡，鐵秋風大散關」更是此地戰爭場景的千古名句，但在明末廢棄後，大散關逐漸沒落，如今也僅存部分殘跡，可即便如此，他所帶來的民族意識仍然生生不息。`,
        image: "./img/door/大散關1.png",
        alt: "大散關"
    },
    {
        title: "玉門關",
        subtitle: "漢武帝時期 甘肅敦煌",
        description: `玉門關在漢武帝時期因建造西域附近的長城而設立，在當時為通往西域的門戶，乃重要的軍事關口，對漢人而言便是重要的國門。古詩詞中也出現非常描寫玉門關及其邊塞之事的內容，如：王昌齡〈從軍行〉：「青海長雲暗雪山，孤城遙望玉門關」及王之渙〈涼州詞〉：「羌笛何須怨楊柳，春風不度玉門關」都是千古名句，描寫出作為國門的玉門關承載了許多對於戰爭與別離的哀愁。現今漢代長城多已消失，玉門關也僅存部分的遺址，但其所留下來的文化意義，即家國邊塞與別離之地，依舊伴隨著人們的傳唱而存在著。`,
        image: "./img/door/玉門關1.png",
        alt: "玉門關"
    },
    {
        title: "陽關",
        subtitle: "漢武帝時期 甘肅敦煌",
        description: `陽關在過去與玉門關同作為中原通往西域的關隘，但二者的司職實際有所不同，軍事由玉門關進出、使節與商貿則由陽關進出，特別的一點是《漢書．西域傳》中在記載西域各國與中原的距離時，不僅會寫其都城與皇城長安的距離，也會寫其與陽關的距離，如著名的樓蘭國便記錄著其「去（距離）陽關千六百里，去長安六千一百里。」可見陽關作為古代「海關」的重要性。至於西漢時期重要的絲綢之路也是從此處出國，而作為中原的西門邊塞、外國的貨運轉運站，陽關自然相當繁榮，但至唐代以降，海運的繁榮使陽關逐漸沒落，正如王維《送元二使安西》所寫之「西出陽關無故人」一般。如今陽關的繁榮已然不在，遺址也僅存位置與烽火塔的殘跡，但隨著王維的這首詩作，即著名的「陽關三疊」，以及人們的傳唱，陽關就永遠不會被人遺忘。`,
        image: "./img/door/陽關1.png",
        alt: "陽關"
    },
    {
        title: "劍門關",
        subtitle: "三國時期 四川劍閣",
        description: `劍門關是由諸葛亮依四川陡峭的山勢所建，而因其形勢如劍故得名「劍門關」。此處為古代入蜀的咽喉，而其易守難攻的地形優勢也使之成為兵家必爭之地。李白的〈蜀道難〉一詩中便形容其「劍閣崢嶸而崔嵬，一夫當關，萬夫莫開」。`,
        image: "./img/door/劍門關1.png",
        alt: "劍門關"
    },
    {
        title: "仙霞關",
        subtitle: "唐朝末年 浙江保安",
        description: `仙霞關位於浙江、福建、江西三省的要衝，地理位置極重要，其古道為唐朝末年黃巢之亂時，黃巢的起義軍所修築，而後各朝代將此作為官道進行修葺，直至明清之間因戰事頻繁而在此建立起關隘。此地山勢險峻、易守難攻，為軍事要地，但如今遺址因年久失修，僅存部分殘壁。`,
        image: "./img/door/仙霞關1.png",
        alt: "仙霞關"
    },
    {
        title: "居庸關",
        subtitle: "明代 北京市昌平區南口鎮",
        description: `早於春秋戰國時代便有相關記載「天下九塞，居庸之一」，而其建設始於漢代，當時亦只是作為郡縣間的關口，並未納於長城的建築體制內。到了北魏時代，居庸關才修築成長城的一部分，並建設成長城上其中一座重要的關口。而自明朝起，居庸關便是防禦蒙古入侵的關鍵防線。明代建設大規模的長城工程，居庸關作為重要的軍事重地，承擔著保衛京師的重任，是北京西北方的軍事重鎮。`,
        image: "./img/door/居庸關1.jpg",
        alt: "居庸關"
    },
    {
        title: "山海關",
        subtitle: "明代 河北省秦皇島市",
        description: `山海關因為明長城最東側的關隘，被譽為"天下第一關"，自明朝以來，作為防禦外敵入侵的重地。1644年，明朝滅亡的重大事件——李自成攻入山海關，清軍入關，之後此門逐漸失去軍事用處，反而作為農民開墾或觀海勝地，然而當第一次鴉片戰爭爆發後，清軍才又在石河口等地設置炮台，同時由於沙皇俄國對東北地區的威脅日益嚴重，清朝政府於咸豐十年（1860年）重新打開山海關，允許農民出關前往部分地區開墾。`,
        image: "./img/door/山海關1.jpg",
        alt: "山海關"
    }
];

const westDoors = [
    {
        title: "尼格拉城門<br/>Porta Nigra",
        subtitle: "約180年 德國特里爾",
        description: `尼格拉城門又被翻譯為大黑門，此即由於其所使用的材料為灰色的砂岩，而後又經過長時間的風化，外觀又更加黑暗。而尼格拉城門是古羅馬時期的北城門，是當地的城市象徵，而此門更在1986年時被聯合國教科文組織列為世界文化遺產。此外，大黑門在12世紀的作品〈Gesta Treverorum中〉還有另一個名稱：Porta Martis，意即戰神之門，當地的特雷維爾人以其戰神瑪爾斯為其命名，他們會從這個門出征，若戰敗也回從此處回來，即用以表其悲傷。`,
        image: "./img/door/尼格拉城門1.png",
        alt: "尼格拉城門"
    },
    {
        title: `君士坦丁凱旋門<br/>Arco di Costantino`,
        subtitle: "315年落成 義大利羅馬",
        description: `紀念羅馬帝國皇帝君士坦丁一世在312年的米爾維安橋戰役中取得的勝利而建，對於君士坦丁的統治至關重要，因為它幫助他打敗了競爭對手馬克森提烏斯，最終成為羅馬唯一的皇帝。拱門是他戰爭勝利的象徵。君士坦丁的勝利後，他成為羅馬帝國的基督教保護者，並在313年發布了米蘭敕令，使基督教成為合法宗教，這個轉折點對西方歷史和基督教的擴展至關重要。`,
        image: "./img/door/君士坦丁凱旋門1.jpg",
        alt: "君士坦丁凱旋門"
    },
    {
        title: "聖弗洛里安門<br/>Brama Floriańska",
        subtitle: "約1285年 波蘭克拉科夫",
        description: `在克拉科夫的老城中有座古老的城門，此即聖弗洛里安門，此乃於1285左右依萊謝克二世公爵的命令所建造，並以附近的聖弗洛里安教堂命名，用以防禦韃靼人的攻擊。因其歷史悠久，故可見其經歷多次的建築風格，如最上方的巴洛克風格建築便是在16世紀時所增設。而其歷史意義不僅在於保有多種風格，還因為其是皇家大道的起點，也是拿破侖軍隊路線所經之地，故在建築、皇家、軍事上皆有其意義。`,
        image: "./img/door/聖弗洛里安門1.png",
        alt: "聖弗洛里安門"
    },
    {
        title: "維魯門<br/>Viru Gate",
        subtitle: "14世紀 愛沙尼亞塔林",
        description: `塔林舊城區乃世界文化遺產，其特色即完整保留了中世紀的風貌，而其大門：維魯門便是其重要的代表建築之一，且是現今當地僅存的兩座城門之一。`,
        image: "./img/door/維魯門1.png",
        alt: "維魯門"
    },
    {
        title: "霍爾斯滕門<br/>Holstentor",
        subtitle: "1464年 德國呂貝克",
        description: `霍爾斯滕門是過去漢薩同盟首都城的城門，現今則為呂貝克唯一的城堡大門遺跡，並在1987年被列為世界文化遺產。過去此地是個貿易之城，故此城門是非常重要的防衛工事，現今仍有當時使用的大炮可見，而在門楣上也寫有「CONCORDIA DOMI FORIS PAX」的銘文，意為家鄉團結、海外和平，表現出其建造者對於此地安全的期待。`,
        image: "./img/door/霍爾斯滕門1.png",
        alt: "霍爾斯滕門"
    },
    {
        title: "瑞士門<br/>Schweizertor",
        subtitle: "1522年 奧地利維也納",
        description: `此門為哈布斯堡王朝舊王宮裡最古老的城門，同時也是王宮的正門。而對於歐洲人而言「瑞士人」幾乎可以算作「忠誠」的代名詞，故而過去的皇室包括此地便以瑞士人作為其守衛，且依據記載，此處的命名是由瑪利亞．特蕾莎的命令，使擔任守衛的瑞士禁衛軍在此宿營，故而將此門稱為「瑞士人」。`,
        image: "./img/door/瑞士門1.png",
        alt: "瑞士門"
    },
    {
        title: "布達札維城門<br/>Budějovická brána",
        subtitle: "1602年 捷克契斯凱布達札維",
        description: `契斯凱布達札維原來有9座城門用以防禦，但因為後來的工業化發展，其中8座城門被拆除，如今唯一保留下來的便是布達札維城門。`,
        image: "./img/door/布達札維城門1.png",
        alt: "布達札維城門"
    },
    {
        title: `布蘭登堡門<br/>Brandenburger`,
        subtitle: "1791年落成 德國柏林米特區",
        description: `是由普魯士國王腓特烈·威廉二世下令於1788年至1791年間建造，以紀念普魯士在七年戰爭取得的勝利。納粹時期作為政治宣傳活動的場所，見證歐洲歷史上的黑暗面。冷戰時期位於柏林圍牆旁，成為東西德分裂的象徵。柏林圍牆倒塌，布蘭登堡門象徵著德國統一，人民爭取自由與人權的勝利。它不僅被視為德國和歐洲動盪歷史的象徵，而且還是歐洲統一與和平的象徵。`,
        image: "./img/door/布蘭登堡門1.jpg",
        alt: "布蘭登堡門"
    },
    {
        title: `凱旋門<br/>Arc de triomphe de l'Étoile`,
        subtitle: "1836年 Place Charles de Gaulle",
        description: `凱旋門建設始於1806年，拿破崙（Napoléon Bonaparte）為了慶祝法國軍隊在奧斯特里茨戰役（Bataille d'Austerlitz）中獲得勝利，乃興建「一道偉大的雕塑」，意欲迎接日後凱旋的法軍將士。然而，隨著拿破崙帝國的滅亡，工程於其後中止。直到1830年波旁王朝（Maison de Bourbon）被推翻後，路易・菲利普一世（Louis-Philippe Ier）接管政權，凱旋門的建設才於1836年完成，並在7月29日舉行落成典禮。`,
        image: "./img/door/凱旋門1.jpg",
        alt: "凱旋門"
    },
    {
        title: "梅嫩門<br/>Menin Gate",
        subtitle: "1927年 比利時伊珀爾",
        description: `梅嫩門全稱為梅嫩門失蹤者紀念碑，是用以紀念在第一次世界大戰中在於伊珀爾陣亡的大英國協士兵。選址在此便是由於此地在戰略要地上，為士兵們往前線作戰的必經之路，且在一戰期間在此爆發了五次大型戰役。而其中第三次伊珀爾戰役最為慘烈，協約國在此於同盟國激戰，最終雖然取得了勝利，但此處幾乎被夷為平地且雙方各有將近五十萬人的傷亡數。在1927年時由雷金納德·布洛姆菲爾德爵士設計的紀念碑於伊珀爾落成，並在之後於當地時間20:00時固定演奏樂曲〈最後崗位〉（Last Post）以示紀念。`,
        image: "./img/door/梅嫩門1.png",
        alt: "梅嫩門"
    }
];
// 共用函數：傳入展品資料、swiper-wrapper選擇器，幫你產生slide
function renderSlides(data, wrapperSelector) {
    const wrapper = document.querySelector(wrapperSelector);
    wrapper.innerHTML = ''; // 清空現有內容
    
    data.forEach(door => {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
            <div class="card">
            <div class="text">
                <h4>${door.title}</h4>
                <span>${door.subtitle}</span>
            </div>
            <div class="image">
                <img src="${door.image}" alt="${door.alt}" data-door='${JSON.stringify({
                title: door.title,
                subtitle: door.subtitle,
                description: door.description
            })}'>
            </div>
            </div>
        `;
        wrapper.appendChild(item);
    });
}

// 呼叫來渲染
renderSlides(eastDoors, '.east');
renderSlides(westDoors, '.west');

// 隨機輪播功能
const mainCarousel = document.querySelector('#carousel');
const mainCarouselContainer = mainCarousel.querySelector('.carousel-container');
const mainPrevBtn = mainCarousel.querySelector('#prev');
const mainNextBtn = mainCarousel.querySelector('#next');

// 從 photos 陣列中隨機選擇 6 張圖片
function getRandomPhotos(count = 6) {
    const shuffled = [...photos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 初始化輪播圖片
function initializeCarousel() {
    const randomPhotos = getRandomPhotos();
    mainCarouselContainer.innerHTML = ''; // 清空現有內容
    
    randomPhotos.forEach((photo, index) => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.title;
        img.id = 'i';
        if (index === 0) img.classList.add('active');
        mainCarouselContainer.appendChild(img);
    });
}

let currentIndex = 0;
const intervalTime = 3000; // 3秒切換一次

// 顯示指定索引的圖片
function showImage(index) {
    const images = mainCarouselContainer.querySelectorAll('#i');
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

function nextImage() {
    const images = mainCarouselContainer.querySelectorAll('#i');
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
}

function prevImage() {
    const images = mainCarouselContainer.querySelectorAll('#i');
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
}

// 初始化輪播
initializeCarousel();

// 自動播放
let autoPlay = setInterval(nextImage, intervalTime);

// 點擊按鈕
mainNextBtn.addEventListener('click', () => {
    clearInterval(autoPlay);
    nextImage();
    autoPlay = setInterval(nextImage, intervalTime);
});

mainPrevBtn.addEventListener('click', () => {
    clearInterval(autoPlay);
    prevImage();
    autoPlay = setInterval(nextImage, intervalTime);
});

// 滑鼠懸停暫停自動播放
mainCarousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
mainCarousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextImage, intervalTime);
});

// 初始化輪播
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>'
        ],
        responsive: {
            0: { 
                items: 1,
                nav: false
            },
            600: { 
                items: 2,
                nav: true
            },
            1000: { 
                items: 3,
                nav: true
            }
        }
    });

    // 處理彈出視窗
    const doorModal = document.querySelector('.door-modal');
    const closeBtn = doorModal.querySelector('.close-btn');
    const doorInfo = doorModal.querySelector('.door-info');
    const photoGallery = doorModal.querySelector('.photo-gallery');

    // 點擊圖片時顯示彈出視窗
    document.querySelectorAll('.owl-item img').forEach(img => {
        img.addEventListener('click', () => {
            const doorData = JSON.parse(img.dataset.door);
            doorInfo.querySelector('h4').innerHTML = doorData.title;
            doorInfo.querySelector('.subtitle').textContent = doorData.subtitle;
            doorInfo.querySelector('p').textContent = doorData.description;

            // 清空現有的照片
            photoGallery.innerHTML = '';

            // 過濾相關照片
            const relatedPhotos = photos.filter(photo => {
                // 移除標題中的 HTML 標籤和空格進行比較
                const photoTitle = photo.title.replace(/<br\/>/g, '').trim();
                const doorTitle = doorData.title.replace(/<br\/>/g, '').trim();
                return photoTitle === doorTitle;
            });

            // 創建照片元素
            relatedPhotos.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.src;
                img.alt = photo.title;
                photoGallery.appendChild(img);
            });

            doorModal.classList.add('active');
        });
    });

    // 關閉彈出視窗
    closeBtn.addEventListener('click', () => {
        doorModal.classList.remove('active');
    });

    // 點擊背景關閉彈出視窗
    doorModal.addEventListener('click', (e) => {
        if (e.target === doorModal) {
            doorModal.classList.remove('active');
        }
    });

    // ESC 鍵關閉彈出視窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && doorModal.classList.contains('active')) {
            doorModal.classList.remove('active');
        }
    });
});
