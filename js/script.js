$(document).ready(function() {

    /* Hamburger:
    =======================*/
    const menuToggle = document.querySelector('.menu-toggle');
    const promoMenuMobile = document.querySelector('.promo__menu-mobile');
    const menuLinks = document.querySelectorAll('.promo__menu-link');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('open');
        promoMenuMobile.classList.toggle('open');
    });
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
          menuToggle.classList.remove('open');
          promoMenuMobile.classList.remove('open');
        });
    });

    // Validation and form
    $('.contacts__form').validate({
        rules: {
            name: "required",
            surname: "required",
            email: {
                required: true,
                email: true
            },
            text: "required",
        }
    });

    $('.contacts__form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        var form = $(this);

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: form.serialize()
        }).done(function() {
            form.trigger('reset'); 
            alert('Письмо отправлено!');
        }).fail(function() {
            alert('Ошибка при отправке письма.');
        });

        return false;
    });

    // Объект с переводами
    const translations = {
        en: {
            title: "My name is a miracle",
            home: "Home",
            synopsis: "Synopsis",
            characters: "Characters",
            contacts: "Your Feedback",
            synopsisTitle: "Synopsis",
            synopsisText: "Reha is a crazy professor. He has an advanced laboratory filled with different devices and machines that he developed himself. Reha is a scientist proficient in both religious and scientific knowledge. Underneath his laboratory, he has developed a massive human body simulation, where human organs are modeled.",
            synopsisMini: "The story follows Professor Reha, an expert in religious and scientific fields, who develops a massive human body simulation in his advanced lab. Civan, a curious and intelligent child, and his clumsy friend Yaman join the team. In each episode, they enter the simulation to explore the human body's miraculous designs and understand Allah's attributes through anatomy.",
            charactersTitle: "Characters",
            character1: "Professor Reha (60): Reha is a crazy professor with an advanced laboratory filled with various tools and machines. He is an expert in both religious and scientific studies. However, he has one flaw: he's a bit forgetful. This forgetfulness leads to some humorous situations.",
            character2: "Civan (8): Civan is a curious, intelligent, and attentive child. His sharp mind catches the attention of the professor, who invites him to assist in the laboratory. Civan’s clumsy, food-loving friend Yaman, who doesn't care much about his health, is reluctantly brought into the team as well. Together, they explore human anatomy.",
            character3: "Yaman (8): Civan's classmate, Yaman, is constantly in competition with him, often leading to funny situations. Yaman loves food and doesn't pay much attention to his health, which frequently leads to him being sick. His clumsiness adds more action and humor to the group’s adventures.",
            contactsTitle: "Your Feedback",
            nameLabel: "NAME *",
            surnameLabel: "SURNAME *",
            emailLabel: "EMAIL ADDRESS *",
            textLabel: "DETAILS *",
            submitBtn: "SUBMIT",
            footer: "Mevv Film ©. All Rights Reserved. 2024",
            emailMe: "EMAIL ME",
            watchTrailer: "Watch Trailer",
            detailText: "Send us your thoughts."
        },
        tr: {
            title: "Benim adım mucize",
            home: "Anasayfa",
            synopsis: "Özet",
            characters: "Karakterler",
            contacts: "Görüşleriniz",
            synopsisTitle: "Özet",
            synopsisText: "Reha çılgın bir profesördür. İçinde kendisinin geliştirdiği birbirinden farklı aletlerin, makinelerin olduğu gelişmiş bir laboratuvarı vardır. Reha hem dini ilimlerde hem de fen bilimlerinde yetkin bir bilim adamıdır. Laboratuvarının altında insan organlarının modellendiği devasa bir insan vücudu simülasyonu geliştirmiştir.",
            synopsisMini: "Hikayede, hem dini hem de fen ilimlerinde uzman bir profesör olan Reha, gelişmiş laboratuvarında büyük bir insan vücudu simülasyonu geliştirir. Meraklı ve zeki bir çocuk olan Civan ve sakar arkadaşı Yaman, Reha'nın davetiyle ekibe katılır. Her bölümde “Kaşif” adlı uçan araçla simülasyona girip insan vücudundaki mucizeleri keşfeder, Allah’ın isim ve sıfatlarını anatomik yapılar üzerinden tanırlar.",
            charactersTitle: "Karakterler",
            character1: "Profesör Reha (60): Reha çılgın bir profesördür. Gelişmiş bir laboratuvarı vardır ve burada kendisinin geliştirdiği çeşitli araç ve gereçler bulunmaktadır. Hem dini ilimlerde hem de fen bilimlerinde uzmandır. Ancak, unutkanlık onun en büyük zayıflığıdır ve bu da zaman zaman komik durumlara neden olmaktadır.",
            character2: "Civan (8): Civan zeki, dikkatli ve meraklı bir çocuktur. Bu özellikleri sayesinde profesörün dikkatini çeker ve laboratuvarında asistan olarak çalışmaya başlar. Yemek meraklısı ve sağlığına pek dikkat etmeyen sakar arkadaşı Yaman da ekibe zoraki katılır. Bu ekip, insan anatomisini keşfetmeye başlar.",
            character3: "Yaman (8): Civan’ın sınıf arkadaşıdır. Yaman, Civan ile sürekli rekabet içindedir ve bu durum sık sık komik anlara yol açar. Yemek yemeyi seven ve sağlığına dikkat etmeyen Yaman, bu yüzden sık sık hasta olur. Sakarlığı ise ekibe komik ve aksiyon dolu anlar yaşatır.",
            contactsTitle: "Görüşleriniz",
            nameLabel: "İSİM *",
            surnameLabel: "SOYİSİM *",
            emailLabel: "EMAIL ADRESİ *",
            textLabel: "DETAYLAR *",
            submitBtn: "GÖNDER",
            footer: "Mevv Film ©. Tüm Hakları Saklıdır. 2024",
            emailMe: "EMAIL ME",
            watchTrailer: "Fragmanı İzle",
            detailText: "Fikirlerinizi bizimle paylaşın."
        }
    };

    // Функция для изменения языка
    function switchLanguage(lang) {
        // Изменение заголовков, кнопок и других элементов
        $('title').text(translations[lang].title);
        
        // Обновление пунктов меню
        $('title').text(translations[lang].title);
        $('.promo__menu li:nth-child(1) a, .promo__menu-mobile li:nth-child(1) a').text(translations[lang].home);
        $('.promo__menu li:nth-child(2) a, .promo__menu-mobile li:nth-child(2) a').text(translations[lang].synopsis);
        $('.promo__menu li:nth-child(3) a, .promo__menu-mobile li:nth-child(3) a').text(translations[lang].characters);
        $('.promo__menu li:nth-child(4) a, .promo__menu-mobile li:nth-child(4) a').text(translations[lang].contacts);
        $('.synopsis__title').text(translations[lang].synopsisTitle);
        $('.synopsis__text p').eq(0).text(translations[lang].synopsisText);
        $('.mini').text(translations[lang].synopsisMini);
        $('.characters__title').text(translations[lang].charactersTitle);
        $('.characters__text').eq(0).html('<strong>' + translations[lang].character1 + '</strong>');
        $('.characters__text').eq(1).html('<strong>' + translations[lang].character2 + '</strong>');
        $('.characters__text').eq(2).html('<strong>' + translations[lang].character3 + '</strong>');
        $('.contacts__subheader').text(translations[lang].contactsTitle);
        $('label[for="name"]').text(translations[lang].nameLabel);
        $('label[for="surname"]').text(translations[lang].surnameLabel);
        $('label[for="email"]').text(translations[lang].emailLabel);
        $('label[for="text"]').text(translations[lang].textLabel);
        $('.contacts__btn').text(translations[lang].submitBtn);
        $('footer').text(translations[lang].footer);
        $('.contacts__data-email_title').text(translations[lang].emailMe);
        $('.closing-button span').text(translations[lang].watchTrailer);
        $('.contacts__textarea label').text(translations[lang].detailText);
    }

    // Начальная установка языка
    let currentLang = 'tr';
    switchLanguage(currentLang);

    // Переключатель языка
    $('#language-toggle').click(function () {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        $(this).text(currentLang === 'tr' ? 'EN' : 'TR');
        switchLanguage(currentLang);
    });

});

