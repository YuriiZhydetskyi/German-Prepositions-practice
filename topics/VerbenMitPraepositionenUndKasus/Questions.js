define(function () {
    const questions = [
        {
            "id": "e061074c-5c69-4bab-af70-20382e9ca4a1",
            "options": ["auf + Akkusativ", "über + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Er ärgert sich _____ (die) schlechte Note.",
            "resultSentence": "Er ärgert sich über die schlechte Note.",
            "translation": "He is angry about the bad grade.",
            "translationUkr": "Він злиться через погану оцінку.",
            "answer": "über + Akkusativ",
            "verb": "sich ärgern"
        },
        {
            "id": "3f178ffc-bd6a-44f1-8a0f-781439b323ca",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "bei + Dativ"],
            "sentence": "Bedanken Sie sich _____ (die) E-Mail.",
            "resultSentence": "Bedanken Sie sich für die E-Mail.",
            "translation": "Thank you for the email.",
            "translationUkr": "Дякуємо за електронний лист.",
            "answer": "für + Akkusativ",
            "verb": "sich bedanken"
        },
        {
            "id": "b761a757-bd7f-4c7e-bcd7-4a53a4b6fc17",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Ich beschränke mich _____ (die) Vor- und Nachteile.",
            "resultSentence": "Ich beschränke mich auf die Vor- und Nachteile.",
            "translation": "I limit myself to the advantages and disadvantages.",
            "translationUkr": "Я обмежуюся перевагами та недоліками.",
            "answer": "auf + Akkusativ",
            "verb": "sich beschränken"
        },
        {
            "id": "b22a81df-e7d8-4341-b0b3-7871a5d2031a",
            "options": ["über + Akkusativ", "an + Akkusativ", "von + Dativ", "bei + Dativ"],
            "sentence": "Ich habe gestern _____ dich gedacht.",
            "resultSentence": "Ich habe gestern an dich gedacht.",
            "translation": "I thought of you yesterday.",
            "translationUkr": "Я думав про тебе вчора.",
            "answer": "an + Akkusativ",
            "verb": "denken"
        },
        {
            "id": "37e353ae-e9b9-4294-8ba4-b788a1475b74",
            "options": ["für + Akkusativ", "gegen + Akkusativ", "bei + Dativ", "zu + Dativ"],
            "sentence": "So setzen Sie sich _____ (Ihre) Kollegen durch.",
            "resultSentence": "So setzen Sie sich gegen Ihre Kollegen durch.",
            "translation": "This is how you assert yourself against your colleagues.",
            "translationUkr": "Так ви утверджуєте себе проти своїх колег.",
            "answer": "gegen + Akkusativ",
            "verb": "sich durchsetzen"
        },
        {
            "id": "1edd5076-247c-4013-b0e6-4d7df05d4990",
            "options": ["in + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Ich möchte mein Wissen _____ (Ihr) Unternehmen einbringen.",
            "resultSentence": "Ich möchte mein Wissen in Ihr Unternehmen einbringen.",
            "translation": "I would like to contribute my knowledge to your company.",
            "translationUkr": "Я хотів би передати свої знання вашій компанії.",
            "answer": "in + Akkusativ",
            "verb": "einbringen"
        },
        {
            "id": "d2b90057-2049-4a87-8998-72f7aea27f6c",
            "options": ["für + Akkusativ", "gegen + Akkusativ", "auf + Akkusativ", "von + Dativ"],
            "sentence": "Der Arzt geht _____ (die) Fragen ein.",
            "resultSentence": "Der Arzt geht auf die Fragen ein.",
            "translation": "The doctor addresses the questions.",
            "translationUkr": "Лікар відповідає на запитання.",
            "answer": "auf + Akkusativ",
            "verb": "eingehen"
        },
        {
            "id": "a82c88da-d483-40ca-8f6f-b01ddeb71cc1",
            "options": ["in + Akkusativ", "auf + Akkusativ", "für + Akkusativ", "bei + Dativ"],
            "sentence": "Ich habe meine Energie _____ (die) Kinder eingesetzt.",
            "resultSentence": "Ich habe meine Energie für die Kinder eingesetzt.",
            "translation": "I have used my energy for the children.",
            "translationUkr": "Я витратив свою енергію на дітей.",
            "answer": "für + Akkusativ",
            "verb": "einsetzen"
        },
        {
            "id": "ec9ed9c0-83be-4383-8bf7-d41b1fb11758",
            "options": ["in + Akkusativ", "auf + Akkusativ", "für + Akkusativ", "von + Dativ"],
            "sentence": "Ich habe mich _____ (dieses) Projekt eingesetzt.",
            "resultSentence": "Ich habe mich für dieses Projekt eingesetzt.",
            "translation": "I have committed myself to this project.",
            "translationUkr": "Я присвятив себе цьому проекту.",
            "answer": "für + Akkusativ",
            "verb": "sich einsetzen"
        },
        {
            "id": "a2cb8d54-1184-466f-b53f-caf6b6c01072",
            "options": ["für + Akkusativ", "gegen + Akkusativ", "in + Akkusativ", "mit + Dativ"],
            "sentence": "Eine junge Familie zieht _____ (die) Wohnung ein.",
            "resultSentence": "Eine junge Familie zieht in die Wohnung ein.",
            "translation": "A young family moves into the apartment.",
            "translationUkr": "Молода сім'я в'їжджає в квартиру.",
            "answer": "in + Akkusativ",
            "verb": "einziehen"
        },
        {
            "id": "a49fcc09-b51f-43da-9003-44cdb9070f03",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "bei + Dativ"],
            "sentence": "Die Schüler engagieren sich _____ (der) Umweltschutz.",
            "resultSentence": "Die Schüler engagieren sich für den Umweltschutz.",
            "translation": "The students are committed to environmental protection.",
            "translationUkr": "Учні віддані захисту навколишнього середовища.",
            "answer": "für + Akkusativ",
            "verb": "sich engagieren"
        },
        {
            "id": "8bb117bc-4631-40b4-b6a2-a13b08798956",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Warum haben Sie sich _____ (dieser) Beruf entschieden?",
            "resultSentence": "Warum haben Sie sich für diesen Beruf entschieden?",
            "translation": "Why did you choose this profession?",
            "translationUkr": "Чому ви обрали цю професію?",
            "answer": "für + Akkusativ",
            "verb": "sich entscheiden"
        },
        {
            "id": "e4267bb8-cc62-463d-ac2e-c2f033716798",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Dana freut sich _____ (die) Reise.",
            "resultSentence": "Dana freut sich auf die Reise.",
            "translation": "Dana is looking forward to the trip.",
            "translationUkr": "Дана з нетерпінням чекає на поїздку.",
            "answer": "auf + Akkusativ",
            "verb": "sich freuen"
        },
        {
            "id": "5d1eb96b-95af-4d0d-8c1f-4214655d7f35",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "bei + Dativ"],
            "sentence": "Das halte ich _____ (eine) gute Idee.",
            "resultSentence": "Das halte ich für eine gute Idee.",
            "translation": "I think that's a good idea.",
            "translationUkr": "Я вважаю, що це хороша ідея.",
            "answer": "für + Akkusativ",
            "verb": "halten"
        },
        {
            "id": "a06007f2-2247-4c32-8f1e-610b718d25ab",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Die Krankenschwester weist _____ (das) Rauchverbot hin.",
            "resultSentence": "Die Krankenschwester weist auf das Rauchverbot hin.",
            "translation": "The nurse points out the smoking ban.",
            "translationUkr": "Медсестра вказує на заборону куріння.",
            "answer": "auf + Akkusativ",
            "verb": "hinweisen"
        },
        {
            "id": "69e773dc-d336-4831-9b08-24d5072385da",
            "options": ["für + Akkusativ", "auf + Akkusativ", "über + Akkusativ", "von + Dativ"],
            "sentence": "Der Arzt informiert _____ (die) Operation.",
            "resultSentence": "Der Arzt informiert über die Operation.",
            "translation": "The doctor informs about the operation.",
            "translationUkr": "Лікар інформує про операцію.",
            "answer": "über + Akkusativ",
            "verb": "informieren"
        },
        {
            "id": "fd82b482-afc7-48b3-ad2c-afa87d4e3737",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Interessierst du dich _____ (dieser) Film?",
            "resultSentence": "Interessierst du dich für diesen Film?",
            "translation": "Are you interested in this movie?",
            "translationUkr": "Ви цікавитеся цим фільмом?",
            "answer": "für + Akkusativ",
            "verb": "sich interessieren"
        },
        {
            "id": "80c0b539-412c-477a-a13b-62b86143db83",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "um + Akkusativ"],
            "sentence": "Die Oma kümmert sich nachmittags _____ (ihr) Enkel.",
            "resultSentence": "Die Oma kümmert sich nachmittags um ihren Enkel.",
            "translation": "The grandma takes care of her grandson in the afternoon.",
            "translationUkr": "Бабуся піклується про свого онука вдень.",
            "answer": "um + Akkusativ",
            "verb": "sich kümmern"
        },
        {
            "id": "e0d72b6b-b303-4e87-93f4-77337ccc16c4",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "bei + Dativ"],
            "sentence": "Das Geld reicht _____ (ein) Ausflug.",
            "resultSentence": "Das Geld reicht für einen Ausflug.",
            "translation": "The money is enough for an excursion.",
            "translationUkr": "Грошей вистачає на екскурсію.",
            "answer": "für + Akkusativ",
            "verb": "reichen"
        },
        {
            "id": "f17b0d2c-e41f-4a88-959f-5526e1c137a9",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Ich habe mich _____ (mein) Freund verlassen.",
            "resultSentence": "Ich habe mich auf meinen Freund verlassen.",
            "translation": "I relied on my friend.",
            "translationUkr": "Я покладався на свого друга.",
            "answer": "auf + Akkusativ",
            "verb": "sich verlassen"
        },
        {
            "id": "6ed2dab2-b79b-4fcc-aeb4-f5a430f09606",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Die Helfer verpflichten sich _____ (eine) konkrete Aufgabe.",
            "resultSentence": "Die Helfer verpflichten sich für eine konkrete Aufgabe.",
            "translation": "The helpers commit themselves to a specific task.",
            "translationUkr": "Помічники беруть на себе зобов'язання щодо конкретного завдання.",
            "answer": "für + Akkusativ",
            "verb": "sich verpflichten"
        },
        {
            "id": "05820692-c8cd-48bb-a348-59500531c11e",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Im Projekt verzichten die Schüler _____ (ihr) Handy.",
            "resultSentence": "Im Projekt verzichten die Schüler auf ihr Handy.",
            "translation": "In the project, the students give up their cell phones.",
            "translationUkr": "У проекті учні відмовляються від своїх мобільних телефонів.",
            "answer": "auf + Akkusativ",
            "verb": "verzichten"
        },
        {
            "id": "8e26fa96-008c-42f5-a4ae-b5bd015f3ee3",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Ich bereite mich _____ (der) Test vor.",
            "resultSentence": "Ich bereite mich auf den Test vor.",
            "translation": "I am preparing for the test.",
            "translationUkr": "Я готуюся до тесту.",
            "answer": "auf + Akkusativ",
            "verb": "sich vorbereiten"
        },
        {
            "id": "44950103-d63c-428d-b7ce-9613f8fb9ba8",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Wie lange warten Sie schon _____ (der) Bus?",
            "resultSentence": "Wie lange warten Sie schon auf den Bus?",
            "translation": "How long have you been waiting for the bus?",
            "translationUkr": "Як довго ви вже чекаєте на автобус?",
            "answer": "auf + Akkusativ",
            "verb": "warten"
        },
        {
            "id": "0c41966f-7920-4703-9710-5a28f4bfd582",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Die Familie nimmt sich viel Zeit _____ (das) Abendessen.",
            "resultSentence": "Die Familie nimmt sich viel Zeit für das Abendessen.",
            "translation": "The family takes a lot of time for dinner.",
            "translationUkr": "Родина приділяє багато часу вечері.",
            "answer": "für + Akkusativ",
            "verb": "sich Zeit nehmen"
        },
        {
            "id": "aea72014-5601-4ec0-8de6-720dffd29651",
            "options": ["für + Akkusativ", "auf + Akkusativ", "von + Dativ", "mit + Dativ"],
            "sentence": "Das trifft _____ ihn nicht zu.",
            "resultSentence": "Das trifft auf ihn nicht zu.",
            "translation": "That doesn't apply to him.",
            "translationUkr": "Це не стосується його.",
            "answer": "auf + Akkusativ",
            "verb": "zutreffen"
        },
        {
            "id": "257d3cca-13bd-46a2-b1be-de1149bacd54",
            "options": ["von + Dativ", "mit + Dativ", "aus + Dativ", "für + Akkusativ"],
            "sentence": "Es hängt _____ (die) Arbeit ab.",
            "resultSentence": "Es hängt von der Arbeit ab.",
            "translation": "It depends on the work.",
            "translationUkr": "Це залежитьвід роботи.",
            "answer": "von + Dativ",
            "verb": "abhängen"
        },
        {
            "id": "9c1b5add-39e5-49c8-952c-a2dd0de303ca",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Ich muss mich _____ (meine) Frau abstimmen.",
            "resultSentence": "Ich muss mich mit meiner Frau abstimmen.",
            "translation": "I have to coordinate with my wife.",
            "translationUkr": "Я повинен узгодити це зі своєю дружиною.",
            "answer": "mit + Dativ",
            "verb": "sich abstimmen"
        },
        {
            "id": "0e070672-b772-43d4-ac2d-89a4f7843f0a",
            "options": ["von + Dativ", "mit + Dativ", "bei + Dativ", "für + Akkusativ"],
            "sentence": "Rafael hat sich _____ (ein) Verein angemeldet.",
            "resultSentence": "Rafael hat sich bei einem Verein angemeldet.",
            "translation": "Rafael has registered with a club.",
            "translationUkr": "Рафаель зареєструвався в клубі.",
            "answer": "bei + Dativ",
            "verb": "sich anmelden"
        },
        {
            "id": "239be2a4-30b0-481b-8a81-f081189e43d4",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Ich kenne mich _____ Computern gut aus.",
            "resultSentence": "Ich kenne mich mit Computern gut aus.",
            "translation": "I am well-versed in computers.",
            "translationUkr": "Я добре розбираюся в комп'ютерах.",
            "answer": "mit + Dativ",
            "verb": "sich auskennen"
        },
        {
            "id": "237ac2e5-7e69-4e04-830b-44bff1cc367c",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Morgen beginne ich _____ (der) Kurs.",
            "resultSentence": "Morgen beginne ich mit dem Kurs.",
            "translation": "Tomorrow I start with the course.",
            "translationUkr": "Завтра я починаю з курсу.",
            "answer": "mit + Dativ",
            "verb": "beginnen"
        },
        {
            "id": "cd74d2bc-a21a-48b1-ba20-4bac4c80f216",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Sport befreit _____ (der) Alltagsstress.",
            "resultSentence": "Sport befreit vom Alltagsstress.",
            "translation": "Exercise relieves everyday stress.",
            "translationUkr": "Фізичні вправи знімають повсякденний стрес.",
            "answer": "von + Dativ",
            "verb": "befreien"
        },
        {
            "id": "96513b15-1eca-41ea-93c1-814207b73a80",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Ich beschäftige mich gerne _____ (meine) Kindern.",
            "resultSentence": "Ich beschäftige mich gerne mit meinen Kindern.",
            "translation": "I enjoy spending time with my children.",
            "translationUkr": "Я люблю проводити час зі своїми дітьми.",
            "answer": "mit + Dativ",
            "verb": "sich beschäftigen"
        },
        {
            "id": "27cbb382-df1a-43be-a88e-ada06dd1666c",
            "options": ["von + Dativ", "mit + Dativ", "aus + Dativ", "für + Akkusativ"],
            "sentence": "Ein Team besteht _____ fünf Läufern.",
            "resultSentence": "Ein Team besteht aus fünf Läufern.",
            "translation": "A team consists of five runners.",
            "translationUkr": "Команда складається з п'яти бігунів.",
            "answer": "aus + Dativ",
            "verb": "bestehen"
        },
        {
            "id": "774f815e-f5ba-4edd-90aa-1867b16c9f66",
            "options": ["von + Dativ", "mit + Dativ", "bei + Dativ", "für + Akkusativ"],
            "sentence": "Entschuldige dich bitte _____ ihr.",
            "resultSentence": "Entschuldige dich bitte bei ihr.",
            "translation": "Please apologize to her.",
            "translationUkr": "Будь ласка, вибачся перед нею.",
            "answer": "bei + Dativ",
            "verb": "sich entschuldigen"
        },
        {
            "id": "9e847ede-51fc-4da9-8c01-b7faa456d269",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "_____ wem hast du das erfahren?",
            "resultSentence": "Von wem hast du das erfahren?",
            "translation": "From whom did you find out about that?",
            "translationUkr": "Від кого ти про це дізнався?",
            "answer": "von + Dativ",
            "verb": "erfahren"
        },
        {
            "id": "558cc4d0-4185-4d88-adc8-ca4a7f44a968",
            "options": ["von + Dativ", "mit + Dativ", "nach + Dativ", "für + Akkusativ"],
            "sentence": "Er hat sich _____ (der) Preis erkundigt.",
            "resultSentence": "Er hat sich nach dem Preis erkundigt.",
            "translation": "He inquired about the price.",
            "translationUkr": "Він поцікавився ціною.",
            "answer": "nach + Dativ",
            "verb": "sich erkundigen"
        },
        {
            "id": "0bbd5a34-ad0d-4219-b10c-ccbae9c5908f",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Sie hat mir viel _____ (ihr) Urlaub erzählt.",
            "resultSentence": "Sie hat mir viel von ihrem Urlaub erzählt.",
            "translation": "She told me a lot about her vacation.",
            "translationUkr": "Вона багато розповіла мені про свою відпустку.",
            "answer": "von + Dativ",
            "verb": "erzählen"
        },
        {
            "id": "2c240cc4-8493-4550-9fca-7452d40eda3f",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Schöne Musik gehört für mich _____ (ein) Fest.",
            "resultSentence": "Schöne Musik gehört für mich zu einem Fest.",
            "translation": "For me, beautiful music is part of a celebration.",
            "translationUkr": "Для мене гарна музика є частиною свята.",
            "answer": "zu + Dativ",
            "verb": "gehören"
        },
        {
            "id": "da96c2bf-ada9-4b41-b917-02ad3dcd2b4d",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Ich muss _____ zwei Kulturen klarkommen.",
            "resultSentence": "Ich muss mit zwei Kulturen klarkommen.",
            "translation": "I have to cope with two cultures.",
            "translationUkr": "Я повинен впоратися з двома культурами.",
            "answer": "mit + Dativ",
            "verb": "klarkommen"
        },
        {
            "id": "b29f1178-5d02-4bf9-87f0-fceaf10f06b2",
            "options": ["von + Dativ", "mit + Dativ", "an + Dativ", "für + Akkusativ"],
            "sentence": "Niemand ist schuld _____ (der) Streit.",
            "resultSentence": "Niemand ist schuld an dem Streit.",
            "translation": "No one is to blame for the argument.",
            "translationUkr": "Ніхто не винен у суперечці.",
            "answer": "an + Dativ",
            "verb": "schuld sein"
        },
        {
            "id": "219cbb62-b1a6-4b39-a9ea-f3c450cd1386",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "vor + Dativ"],
            "sentence": "Gesundes Essen schützt _____ Krankheiten.",
            "resultSentence": "Gesundes Essen schützt vor Krankheiten.",
            "translation": "Healthy eating protects against diseases.",
            "translationUkr": "Здорове харчування захищає від хвороб.",
            "answer": "vor + Dativ",
            "verb": "schützen"
        },
        {
            "id": "a59ccaac-115c-45f7-8978-6b45f28b6fa4",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Eleni hat gestern _____ (ihr) Chef gesprochen.",
            "resultSentence": "Eleni hat gestern mit ihrem Chef gesprochen.",
            "translation": "Eleni spoke with her boss yesterday.",
            "translationUkr": "Елені вчора розмовляла зі своїм босом.",
            "answer": "mit + Dativ",
            "verb": "sprechen"
        },
        {
            "id": "7be0de28-bfc8-4edc-bc9e-ab49ebe3cc7b",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Früher habe ich oft _____ (mein) Bruder gestritten.",
            "resultSentence": "Früher habe ich oft mit meinem Bruder gestritten.",
            "translation": "I used to argue with my brother a lot.",
            "translationUkr": "Раніше я часто сварився зі своїм братом.",
            "answer": "mit + Dativ",
            "verb": "streiten"
        },
        {
            "id": "3c009c5a-880e-42df-b633-56868446e42b",
            "options": ["von + Dativ", "mit + Dativ", "an + Dativ", "für + Akkusativ"],
            "sentence": "Wie viele Leute nehmen _____ (der) Kurs teil?",
            "resultSentence": "Wie viele Leute nehmen an dem Kurs teil?",
            "translation": "How many people are participating in the course?",
            "translationUkr": "Скільки людей беруть участь у курсі?",
            "answer": "an + Dativ",
            "verb": "teilnehmen"
        },
        {
            "id": "bc9ec200-9940-401a-b333-41bded1c3441",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Ich träume _____ (ein) Urlaub in Australien.",
            "resultSentence": "Ich träume von einem Urlaub in Australien.",
            "translation": "I dream of a vacation in Australia.",
            "translationUkr": "Я мрію про відпустку в Австралії.",
            "answer": "von + Dativ",
            "verb": "träumen"
        },
        {
            "id": "78704e17-9a85-4ada-811d-c8ebdd005cc6",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Man soll Glas _____ (der) Restmüll trennen.",
            "resultSentence": "Man soll Glas vom Restmüll trennen.",
            "translation": "You should separate glass from residual waste.",
            "translationUkr": "Скло слід відокремлювати від залишкових відходів.",
            "answer": "von + Dativ",
            "verb": "trennen"
        },
        {
            "id": "142cafed-9aae-4081-be3e-a301f806d385",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Ich habe mich _____ (die) Qualität überzeugt.",
            "resultSentence": "Ich habe mich von der Qualität überzeugt.",
            "translation": "I convinced myself of the quality.",
            "translationUkr": "Я переконався в якості.",
            "answer": "von + Dativ",
            "verb": "sich überzeugen"
        },
        {
            "id": "ae1381ce-446f-469b-8503-dc80bd1ed928",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Die Leute gehen entspannt _____ um.",
            "resultSentence": "Die Leute gehen entspannt miteinander um.",
            "translation": "People are relaxed with each other.",
            "translationUkr": "Люди розслаблені один з одним.",
            "answer": "miteinander",
            "verb": "umgehen"
        },
        {
            "id": "1d50e381-b8c5-4c4a-82ad-53f9674852c2",
            "options": ["von + Dativ", "mit + Dativ", "bei + Dativ", "für + Akkusativ"],
            "sentence": "Wir unterstützen Sie _____ Problemen mit Ihren Nachbarn.",
            "resultSentence": "Wir unterstützen Sie bei Problemen mit Ihren Nachbarn.",
            "translation": "We support you with problems with your neighbors.",
            "translationUkr": "Ми підтримуємо вас у проблемах з вашими сусідами.",
            "answer": "bei + Dativ",
            "verb": "unterstützen"
        },
        {
            "id": "0c47d0dd-896b-4da1-b188-aa23eded22d3",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Eleni unterhält sich gern _____ (ihre) Freundin Dana.",
            "resultSentence": "Eleni unterhält sich gern mit ihrer Freundin Dana.",
            "translation": "Eleni likes to talk with her friend Dana.",
            "translationUkr": "Елені подобається розмовляти зі своєю подругою Даною.",
            "answer": "mit + Dativ",
            "verb": "sich unterhalten"
        },
        {
            "id": "b8927b9f-b373-4a35-a88d-5c3f7cb0e191",
            "options": ["von + Dativ", "mit + Dativ", "für + Akkusativ", "zu + Dativ"],
            "sentence": "Er verabschiedete sich _____ (seine) Freunden.",
            "resultSentence": "Er verabschiedete sich von seinen Freunden.",
            "translation": "He said goodbye to his friends.",
            "translationUkr": "Він попрощався зі своїми друзями.",
            "answer": "von + Dativ",
            "verb": "sich verabschieden"
        }
    ]

    return questions;
});