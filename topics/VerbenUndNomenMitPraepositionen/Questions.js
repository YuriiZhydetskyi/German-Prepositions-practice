define(function () {
  const questions = [
    {
      id: "47e6ef18-eef2-49e3-bc9f-75ebe0c1a9c2",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich gehe _____ die Schule.",
      answer: "in"
    },
    {
      id: "1937e312-0ad8-4339-84cf-6b1ba1bc19b6",
      options: ["in", "auf", "zur", "an"],
      sentence: "Ich gehe _____ Schule.",
      answer: "zur"
    },
    {
      id: "ef79d183-45ac-48af-b152-bbca03ad55e6",
      options: ["in", "auf", "zu", "an"],
      sentence: "Mein Bruder arbeitet _____ einem Büro.",
      answer: "in"
    },
    {
      id: "26746fa0-f224-437a-bcdb-e38bd5250885",
      options: ["in", "auf", "zu", "im"],
      sentence: "Wir fahren _____ dem Urlaub.",
      answer: "in"
    },
    {
      id: "64b5caf2-e2bf-4a45-82b1-1806a7ac6701",
      options: ["für", "auf", "zu", "an"],
      sentence: "Ich warte _____ den Bus.",
      answer: "auf"
    },
    {
      id: "703dcfb9-ebfd-408c-886f-1f59a1cdfa67",
      options: ["in", "auf", "an", "zu"],
      sentence: "Meine Schwester studiert _____ der Universität.",
      answer: "an"
    },
    {
      id: "9e35c71f-3dce-4993-8ac1-74d4c7ec8a9f",
      options: ["für", "an", "auf", "zu"],
      sentence: "Wir denken _____ unsere Freunde.",
      answer: "an"
    },
    {
      id: "f0b21a39-1e6e-41dd-a9c5-463d8d672678",
      options: ["für", "auf", "zu", "an"],
      sentence: "Ich freue mich _____ deine Geburtstagsparty.",
      answer: "auf"
    },
    {
      id: "227aa9ca-5b4a-4191-aa5c-30e519a695ab",
      options: ["auf", "an", "in", "zu"],
      sentence: "Wir sitzen _____ dem Tisch.",
      answer: "an"
    },
    {
      id: "384b0fa2-9890-45b0-bb3d-59d00be8fea5",
      options: ["auf", "in", "an", "zu"],
      sentence: "Die Katze springt _____ den Sessel.",
      answer: "auf"
    },
    {
      id: "dc5395f9-d590-408a-b1ea-642410cd866e",
      options: ["für", "zu", "an", "auf"],
      sentence: "Ich lerne _____ der Prüfung.",
      answer: "für"
    },
    {
      id: "fb84c102-3835-4667-a8f6-70aa580311bb",
      options: ["für", "zu", "an", "auf"],
      sentence: "Meine Mutter kocht _____ dem Abendessen.",
      answer: "für"
    },
    {
      id: "2f4722ac-fd71-4164-ba76-35f0c84c2468",
      options: ["in", "auf", "an", "zu"],
      sentence: "Wir gehen _____ den Park spazieren.",
      answer: "in"
    },
    {
      id: "a1af88d0-5081-4469-8fc8-ace4e2acc1ab",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ meinen Freund.",
      answer: "auf"
    },
    {
      id: "a0895f7c-2941-4f74-8e79-6c29726edff8",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Vater arbeitet _____ einer Firma.",
      answer: "für"
    },
    {
      id: "da3138b3-9da8-44e6-b6e0-d42966ac9317",
      options: ["in", "auf", "an", "zu"],
      sentence: "Wir fahren _____ Ski.",
      answer: "auf"
    },
    {
      id: "963854f5-238a-4871-b7e2-5c4fdcec000e",
      options: ["in", "auf", "an", "zu"],
      sentence: "Ich schreibe _____ meinem Tagebuch.",
      answer: "in"
    },
    {
      id: "83e01b7d-48bb-42e6-bf33-9797c744dc43",
      options: ["auf", "in", "an", "zu"],
      sentence: "Wir sitzen _____ dem Sofa.",
      answer: "auf"
    },
    {
      id: "0ac3b190-809d-4cb7-ab04-e520a4f93ca9",
      options: ["für", "auf", "an", "zu"],
      sentence: "Meine Freundin wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "534c83b9-74a1-45e4-b933-5dc910da7780",
      options: ["in", "auf", "zu", "zum"],
      sentence: "Wir gehen _____ Konzert.",
      answer: "zum"
    },
    {
      id: "5ca1be17-1167-407c-ac5c-c3aad1a7178b",
      options: ["in", "auf", "an", "zu"],
      sentence: "Ich arbeite _____ einem Projekt.",
      answer: "an"
    },
    {
      id: "46db4d6d-adcd-4579-90d7-1199c029e895",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Bruder spielt _____ dem Fußballverein.",
      answer: "für"
    },
    {
      id: "b837b869-1890-4eb5-aac1-a534593f85ae",
      options: ["für", "auf", "an", "zu"],
      sentence: "Wir warten _____ den Zug.",
      answer: "auf"
    },
    {
      id: "6ad3e58a-50b2-4e80-8ff2-5f33510aee98",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meine Zukunft.",
      answer: "an"
    },
    {
      id: "8a200d06-d268-4d4c-b242-35b462d59bd8",
      options: ["in", "auf", "nach", "zu"],
      sentence: "Meine Schwester reist _____ Frankreich.",
      answer: "nach"
    },
    {
      id: "0a9f77f1-edfc-493f-9629-6f46aeaaed3e",
      options: ["ins", "auf", "zu", "an"],
      sentence: "Wir gehen _____ Kino.",
      answer: "ins"
    },
    {
      id: "c7192e30-a1c0-47cc-813f-041a0442df2b",
      options: ["in", "auf", "zur", "an"],
      sentence: "Ich fahre _____ die Arbeit.",
      answer: "zur"
    },
    {
      id: "a18e8772-0516-4d85-86d1-986b4eace9cc",
      options: ["in", "auf", "an", "zu"],
      sentence: "Mein Vater schaut _____ den Fernseher.",
      answer: "auf"
    },
    {
      id: "96b37f4b-ec8d-469f-8d4e-a4257d8c1df9",
      options: ["auf", "in", "an", "zu"],
      sentence: "Wir sitzen _____ dem Boden.",
      answer: "auf"
    },
    {
      id: "bf9961f4-1064-4f59-ae8c-690b7f766220",
      options: ["für", "auf", "zu", "an"],
      sentence: "Ich höre _____ Musik.",
      answer: "auf"
    },
    {
      id: "be327099-f52a-45b0-9389-b39db68f54a7",
      options: ["für", "auf", "an", "zu"],
      sentence: "Meine Mutter wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "f3c9518b-968f-46e4-8a0d-c5446f3ed6a6",
      options: ["in", "auf", "zur", "an"],
      sentence: "Wir gehen _____ die Bushaltestelle.",
      answer: "zur"
    },
    {
      id: "c0ef245d-564e-4827-b010-c47e0065e227",
      options: ["in", "auf", "an", "zu"],
      sentence: "Ich bin _____ dem Weg zur Schule.",
      answer: "auf"
    },
    {
      id: "bd5530f6-e04c-4e19-afec-aa49f8a03f46",
      options: ["für", "auf", "an", "zu"],
      sentence: "Mein Bruder wartet _____ seine Freundin.",
      answer: "auf"
    },
    {
      id: "c7bb850e-6a6c-4b0c-910a-035d023d9837",
      options: ["auf", "in", "an", "zu"],
      sentence: "Wir sitzen _____ dem Balkon.",
      answer: "auf"
    },
    {
      id: "62813d30-a506-4cfa-b289-3b5071805f6d",
      options: ["für", "bei", "an", "auf"],
      sentence: "Ich rufe _____ die Feuerwehr an.",
      answer: "bei"
    },
    {
      id: "a5a2da7f-df2d-4870-99fb-743848e3c3cf",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Schwester arbeitet _____ einem Restaurant.",
      answer: "in"
    },
    {
      id: "ccf902ad-7546-4459-92ac-b59f89bd2d15",
      options: ["in", "auf", "zu", "ans"],
      sentence: "Wir gehen _____ Meer.",
      answer: "ans"
    },
    {
      id: "b48780d2-9bb9-46a1-b696-da4388ffe8f3",
      options: ["für", "auf", "zu", "an"],
      sentence: "Ich freue mich _____ den Urlaub.",
      answer: "auf"
    },
    {
      id: "aabf66eb-04af-4ed6-b593-b9dad40911da",
      options: ["für", "auf", "an", "zu"],
      sentence: "Mein Vater wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "e0ce0a31-69a0-4957-aba2-e2203530c2a0",
      options: ["in", "auf", "an", "zu"],
      sentence: "Wir sitzen _____ dem Garten.",
      answer: "in"
    },
    {
      id: "63711fc5-2097-4c9a-beb8-5bb707968494",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meine Familie.",
      answer: "an"
    },
    {
      id: "ad00090d-6c23-46a8-b965-553832639506",
      options: ["für", "zu", "an", "auf"],
      sentence: "Meine Mutter kocht _____ dem Mittagessen.",
      answer: "für"
    },
    {
      id: "8b4fd17e-d609-445f-9458-a82b7e72f820",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir gehen _____ die Apotheke.",
      answer: "in"
    },
    {
      id: "eaf91edf-412f-483a-aafe-d2129e7c000a",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ meinen Zug.",
      answer: "auf"
    },
    {
      id: "88de8924-d4ec-4e59-86ec-bcf06214e1a7",
      options: ["in", "auf", "an", "zu"],
      sentence: "Mein Bruder studiert _____ der Hochschule.",
      answer: "an"
    },
    {
      id: "2f203bc3-7623-4776-92cd-fa3fc1e15c73",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir fahren _____ die Berge.",
      answer: "in"
    },
    {
      id: "2371bf49-accc-4099-b8c4-40c7ba49f595",
      options: ["für", "zu", "an", "auf"],
      sentence: "Ich arbeite _____ dem Abendessen.",
      answer: "an"
    },
    {
      id: "ae40f56c-7d19-4ffd-8667-f780c553757c",
      options: ["in", "auf", "an", "zu"],
      sentence: "Ich lebe _____ einer Wohnung.",
      answer: "in"
    },
    {
      id: "1ec5b7d3-c376-4a0a-9ab1-5d2c949a9dc8",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir gehen _____ die Eisdiele.",
      answer: "in"
    },
    {
      id: "9d0c673e-fada-4aac-a6f3-b4dbd16d2d3c",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Vater arbeitet _____ einer Bank.",
      answer: "in"
    },
    {
      id: "ee45d2a2-d730-4f59-9c32-55bac8f76bc9",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ den Arzt.",
      answer: "auf"
    },
    {
      id: "b4263eb6-dc39-4b5c-a313-44bd57c09058",
      options: ["in", "auf", "nach", "zu"],
      sentence: "Wir fahren _____ Italien.",
      answer: "nach"
    },
    {
      id: "12ee9957-32cd-4767-9abd-ec7143444695",
      options: ["in", "auf", "an", "zu"],
      sentence: "Meine Schwester reist _____ den Ferien.",
      answer: "in"
    },
    {
      id: "982f7369-6026-46e5-8f3f-5309e15879b7",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meine Freunde.",
      answer: "an"
    },
    {
      id: "44503470-bebf-4e88-aa52-dfa2eb9d4b62",
      options: ["auf", "in", "an", "zu"],
      sentence: "Wir sitzen _____ dem Stuhl.",
      answer: "auf"
    },
    {
      id: "2fcef42f-fc18-47bd-a984-645471048459",
      options: ["in", "auf", "an", "zu"],
      sentence: "Mein Bruder spielt _____ dem Spielplatz.",
      answer: "auf"
    },
    {
      id: "e02284a6-d932-4ee9-ab92-976c31859f62",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich fahre _____ die Schule.",
      answer: "zur"
    },
    {
      id: "f1418f8c-8aae-403b-a6dd-c0b4ffd11fb6",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir gehen _____ die Bibliothek.",
      answer: "in"
    },
    {
      id: "88dd2704-ebb6-4483-8d1b-8d726b74b3d2",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Mutter arbeitet _____ einem Büro.",
      answer: "in"
    },
    {
      id: "6c978f4d-d670-4aac-9f49-edb4c552142a",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ meine Freundin.",
      answer: "auf"
    },
    {
      id: "2b00a59b-5578-4370-9e27-68cccfa27375",
      options: ["in", "auf", "an", "zu"],
      sentence: "Wir fahren _____ Ski.",
      answer: "auf"
    },
    {
      id: "b7519726-174f-4e12-a586-c0de03abc7f7",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Vater arbeitet _____ einer Fabrik.",
      answer: "in"
    },
    {
      id: "376c8d11-1feb-4087-a751-411fa359ed8a",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meinen Urlaub.",
      answer: "an"
    },
    {
      id: "94010c43-d856-4389-961f-0f9bd27c34b8",
      options: ["auf", "in", "an", "zu"],
      sentence: "Wir sitzen _____ dem Feld.",
      answer: "auf"
    },
    {
      id: "0125f551-1978-44d5-82e7-d386de86769b",
      options: ["für", "auf", "an", "zu"],
      sentence: "Meine Schwester wartet _____ ihren Freund.",
      answer: "auf"
    },
    {
      id: "e8720c60-e559-4de2-9ff0-82c0de4e8746",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich fahre _____ die Arbeit.",
      answer: "zur"
    },
    {
      id: "6bbbef3d-2f8b-4cdb-8a7a-aac66e400538",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir gehen _____ den Supermarkt.",
      answer: "in"
    },
    {
      id: "6e5ccffc-112f-45ef-b517-056862c06061",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Bruder spielt _____ einem Sportverein.",
      answer: "in"
    },
    {
      id: "89ede965-0034-4abc-8e70-65d660ffdf7b",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ den Regen.",
      answer: "auf"
    },
    {
      id: "6f3ada4d-45b2-4ffa-b440-d629639a2648",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir fahren _____ die Berge.",
      answer: "in"
    },
    {
      id: "3c3a1477-e447-4bef-8e53-60685251e533",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Mutter arbeitet _____ einem Restaurant.",
      answer: "in"
    },
    {
      id: "6df6aac2-6a14-4319-9a66-387add646fbb",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meine Prüfung.",
      answer: "an"
    },
    {
      id: "2ce45d10-2bb7-4791-8b0c-1e733a3a19bc",
      options: ["in", "auf", "an", "zu"],
      sentence: "Wir sitzen _____ dem Zug.",
      answer: "in"
    },
    {
      id: "33211541-e467-49d7-be7e-7c4a63d57ecd",
      options: ["für", "auf", "an", "zu"],
      sentence: "Mein Vater wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "20e751de-4002-4c0e-8e06-7b1b4c8de9dd",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich fahre _____ die Universität.",
      answer: "zur"
    },
    {
      id: "2757022c-572b-459e-a460-277c6edf2b95",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir gehen _____ das Café.",
      answer: "in"
    },
    {
      id: "5d82044b-6d27-4ea7-872c-d47c6a3fd344",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Schwester arbeitet _____ einem Krankenhaus.",
      answer: "in"
    },
    {
      id: "fab604a7-3801-4bc6-8b15-e6158f5908a8",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ den Brief.",
      answer: "auf"
    },
    {
      id: "dedc5fcd-2215-4f34-abc7-3561587deca1",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir fahren _____ den See.",
      answer: "an"
    },
    {
      id: "e4cf4482-9983-47b9-b5c1-a862d64e4077",
      options: ["in", "auf", "an", "am"],
      sentence: "Mein Bruder spielt _____ dem Computer.",
      answer: "am"
    },
    {
      id: "9c9e6cbc-7a3a-4337-a305-430ff93bfcd9",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meine Noten.",
      answer: "an"
    },
    {
      id: "2f120d74-87df-4787-9386-bc651971323a",
      options: ["in", "auf", "an", "zu"],
      sentence: "Wir sitzen _____ dem Flugzeug.",
      answer: "in"
    },
    {
      id: "03377741-28ce-406d-a23a-f8b93a5d1142",
      options: ["für", "auf", "an", "zu"],
      sentence: "Meine Mutter wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "2777277d-0d34-47bb-8800-dc9f12b65323",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich fahre _____ die Bäckerei.",
      answer: "zur"
    },
    {
      id: "5c3f31f6-5e21-48ce-b898-077a0f5142a4",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Vater arbeitet _____ einem Büro.",
      answer: "in"
    },
    {
      id: "43d78b46-03b4-4bde-83a1-a9e19cb5ff9c",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ den Zug.",
      answer: "auf"
    },
    {
      id: "1385121a-e443-4ad8-ad1a-af974f4eff0b",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Schwester arbeitet _____ einem Geschäft.",
      answer: "in"
    },
    {
      id: "41d5f962-6945-4a3e-b38b-8decd91be248",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meine Zukunft.",
      answer: "an"
    },
    {
      id: "08417945-44cd-48e3-a16c-a21306a29e96",
      options: ["in", "auf", "an", "im"],
      sentence: "Wir sitzen _____ Park.",
      answer: "im"
    },
    {
      id: "0918572a-29fb-4904-9b34-8a76feddaa78",
      options: ["für", "auf", "an", "zu"],
      sentence: "Mein Bruder wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "5b582c4a-e129-4e35-b057-08c66d5e1d8c",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich fahre _____ die Post.",
      answer: "zur"
    },
    {
      id: "63e2e3fa-a373-4981-9c65-e75e726bb17c",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir gehen _____ das Schwimmbad.",
      answer: "in"
    },
    {
      id: "3ab52bdb-5791-463e-a2da-26c8fad6f883",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Mutter arbeitet _____ einem Büro.",
      answer: "in"
    },
    {
      id: "4be61264-8f13-45d7-ae1c-a61a05f0ee51",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ den Anruf.",
      answer: "auf"
    },
    {
      id: "740b9ae7-0699-4971-aaf6-ab41937706df",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir fahren _____ die Küste.",
      answer: "an"
    },
    {
      id: "e32f97d8-02ca-4ee4-9df7-78df05a830f7",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Vater spielt _____ einem Fußballverein.",
      answer: "für"
    },
    {
      id: "6c006ece-3f8e-4078-bdac-1dc17459cce2",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meine Hausaufgaben.",
      answer: "an"
    },
    {
      id: "2f00514f-6dd8-42a8-a200-2eb248fd4af9",
      options: ["auf", "in", "an", "zu"],
      sentence: "Wir sitzen _____ dem Bett.",
      answer: "auf"
    },
    {
      id: "64d3f5b4-a663-4fe8-997f-545f4e27dd66",
      options: ["für", "auf", "an", "zu"],
      sentence: "Meine Schwester wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "09273e85-27c1-402a-9ba2-87834adcdd19",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich fahre _____ die Bank.",
      answer: "zur"
    },
    {
      id: "d2aafacd-17d8-4cdb-aa79-da45555463cf",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir gehen _____ das Museum.",
      answer: "in"
    },
    {
      id: "6f6ea19e-4090-4aa9-847c-e665be2703dd",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Bruder arbeitet _____ einem Geschäft.",
      answer: "in"
    },
    {
      id: "dc8a6d4b-86cd-436f-b12b-dbd74b7a67d2",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ den Arzt.",
      answer: "auf"
    },
    {
      id: "f26dfd18-18e6-476f-81e3-6af9f217b0f8",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir fahren _____ die Insel.",
      answer: "auf"
    },
    {
      id: "ec14f416-755f-402c-ac3b-a9502a8feddf",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Mutter arbeitet _____ einer Schule.",
      answer: "an"
    },
    {
      id: "af286650-6e1d-4dbd-bcdc-229441afadee",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meine Eltern.",
      answer: "an"
    },
    {
      id: "0a1261d5-2971-49b6-b150-460ca189e1db",
      options: ["auf", "in", "an", "zu"],
      sentence: "Wir sitzen _____ dem Balkon.",
      answer: "auf"
    },
    {
      id: "2a022596-a9d3-4ca8-959e-0a7ef9d69aa8",
      options: ["für", "auf", "an", "zu"],
      sentence: "Mein Vater wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "350b09b5-aeb5-4d59-82b3-335901d68551",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich fahre _____ die Tankstelle.",
      answer: "zur"
    },
    {
      id: "6c9ed759-7969-4c62-8e71-56a3dd84fe22",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir gehen _____ das Theater.",
      answer: "in"
    },
    {
      id: "a168533a-5bb4-4c15-835a-84c162b57482",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Schwester arbeitet _____ einem Büro.",
      answer: "in"
    },
    {
      id: "432e795e-6640-44f2-b418-1e42aaccd1f5",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ den Paketboten.",
      answer: "auf"
    },
    {
      id: "923ce7e2-7d73-477c-940d-7ce53b02b329",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir fahren _____ die Oper.",
      answer: "in"
    },
    {
      id: "704bb905-5d46-4792-81a2-131b395b31d5",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Bruder spielt _____ einer Band.",
      answer: "in"
    },
    {
      id: "4a7b73e6-3260-4af2-959f-063bc6a7f448",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meinen Urlaub.",
      answer: "an"
    },
    {
      id: "c58f5aea-acec-4e06-9b68-14acaa298b93",
      options: ["auf", "in", "an", "zu"],
      sentence: "Wir sitzen _____ dem Spielplatz.",
      answer: "auf"
    },
    {
      id: "99f83215-39c7-4407-820e-62cab892048a",
      options: ["für", "auf", "an", "zu"],
      sentence: "Meine Mutter wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "8ee2552e-4576-4c06-ab8d-36f56c5ff644",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich fahre _____ die Universität.",
      answer: "zur"
    },
    {
      id: "b42ffb86-9121-4738-bca0-e79d7e333943",
      options: ["zum", "auf", "zu", "an"],
      sentence: "Wir gehen _____ Konzert.",
      answer: "zum"
    },
    {
      id: "d19e7ef8-9d5a-493d-8001-e8a2c7070d3d",
      options: ["in", "für", "an", "auf"],
      sentence: "Mein Vater arbeitet _____ einer Firma.",
      answer: "für"
    },
    {
      id: "e816b135-19ab-436f-bbe2-66c1f0574327",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ den Bus.",
      answer: "auf"
    },
    {
      id: "7b76f4b9-262a-40a2-82c7-dc27330d95e4",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir fahren _____ den Strand.",
      answer: "an"
    },
    {
      id: "713fc7ef-e132-4597-800b-aeb5dac3aeb2",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Schwester spielt _____ einem Orchester.",
      answer: "in"
    },
    {
      id: "e0b1fb84-62c2-4ecd-a879-f95ffa0ee191",
      options: ["für", "an", "auf", "zu"],
      sentence: "Ich denke _____ meine Hobbys.",
      answer: "an"
    },
    {
      id: "f1adc6d2-cd8b-4487-badb-ad5c840855f3",
      options: ["auf", "in", "an", "zu"],
      sentence: "Wir sitzen _____ dem Sofa.",
      answer: "auf"
    },
    {
      id: "6f638f8b-da77-4254-b6c9-c17e28b082db",
      options: ["für", "auf", "an", "zu"],
      sentence: "Mein Bruder wartet _____ mich.",
      answer: "auf"
    },
    {
      id: "a8d2627c-9f7e-43e4-b47d-76a239a2f4ea",
      options: ["in", "auf", "zu", "an"],
      sentence: "Ich fahre _____ die Schule.",
      answer: "zur"
    },
    {
      id: "6bcc7ee8-f14a-4a01-bde0-09c69ee7701f",
      options: ["in", "auf", "zu", "an"],
      sentence: "Wir gehen _____ das Restaurant.",
      answer: "ins"
    },
    {
      id: "7e85142e-53eb-4cc1-94ba-5e9bf8a21d8d",
      options: ["in", "für", "an", "auf"],
      sentence: "Meine Mutter arbeitet _____ einem Kindergarten.",
      answer: "in"
    },
    {
      id: "fe01a864-31b6-445a-9082-d157cc8e5890",
      options: ["für", "auf", "an", "zu"],
      sentence: "Ich warte _____ den Techniker.",
      answer: "auf"
    }
  ];

  return questions;
});