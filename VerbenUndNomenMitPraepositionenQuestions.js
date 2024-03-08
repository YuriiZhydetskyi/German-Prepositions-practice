define(function () {
  const questions = [
    {
      sentence: "Ich gehe _____ die Schule.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Ich gehe _____ Schule.",
      options: ["in", "auf", "zur", "an"],
      answer: "zur"
    },
    {
      sentence: "Mein Bruder arbeitet _____ einem Büro.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Wir fahren _____ dem Urlaub.",
      options: ["in", "auf", "zu", "im"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ den Bus.",
      options: ["für", "auf", "zu", "an"],
      answer: "auf"
    },
    {
      sentence: "Meine Schwester studiert _____ der Universität.",
      options: ["in", "auf", "an", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir denken _____ unsere Freunde.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Ich freue mich _____ deine Geburtstagsparty.",
      options: ["für", "auf", "zu", "an"],
      answer: "auf"
    },
    {
      sentence: "Wir sitzen _____ dem Tisch.",
      options: ["auf", "an", "in", "zu"],
      answer: "an"
    },
    {
      sentence: "Die Katze springt _____ den Sessel.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich lerne _____ der Prüfung.",
      options: ["für", "zu", "an", "auf"],
      answer: "für"
    },
    {
      sentence: "Meine Mutter kocht _____ dem Abendessen.",
      options: ["für", "zu", "an", "auf"],
      answer: "für"
    },
    {
      sentence: "Wir gehen _____ den Park spazieren.",
      options: ["in", "auf", "an", "zu"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ meinen Freund.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Mein Vater arbeitet _____ einer Firma.",
      options: ["in", "für", "an", "auf"],
      answer: "für"
    },
    {
      sentence: "Wir fahren _____ Ski.",
      options: ["in", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich schreibe _____ meinem Tagebuch.",
      options: ["in", "auf", "an", "zu"],
      answer: "in"
    },
    {
      sentence: "Wir sitzen _____ dem Sofa.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Meine Freundin wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir gehen _____ Konzert.",
      options: ["in", "auf", "zu", "zum"],
      answer: "zum"
    },
    {
      sentence: "Ich arbeite _____ einem Projekt.",
      options: ["in", "auf", "an", "zu"],
      answer: "an"
    },
    {
      sentence: "Mein Bruder spielt _____ dem Fußballverein.",
      options: ["in", "für", "an", "auf"],
      answer: "für"
    },
    {
      sentence: "Wir warten _____ den Zug.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich denke _____ meine Zukunft.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Meine Schwester reist _____ Frankreich.",
      options: ["in", "auf", "nach", "zu"],
      answer: "nach"
    },
    {
      sentence: "Wir gehen _____ Kino.",
      options: ["ins", "auf", "zu", "an"],
      answer: "ins"
    },
    {
      sentence: "Ich fahre _____ die Arbeit.",
      options: ["in", "auf", "zur", "an"],
      answer: "zur"
    },
    {
      sentence: "Mein Vater schaut _____ den Fernseher.",
      options: ["in", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir sitzen _____ dem Boden.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich höre _____ Musik.",
      options: ["für", "auf", "zu", "an"],
      answer: "auf"
    },
    {
      sentence: "Meine Mutter wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir gehen _____ die Bushaltestelle.",
      options: ["in", "auf", "zur", "an"],
      answer: "zur"
    },
    {
      sentence: "Ich bin _____ dem Weg zur Schule.",
      options: ["in", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Mein Bruder wartet _____ seine Freundin.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir sitzen _____ dem Balkon.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich rufe _____ die Feuerwehr an.",
      options: ["für", "bei", "an", "auf"],
      answer: "bei"
    },
    {
      sentence: "Meine Schwester arbeitet _____ einem Restaurant.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Wir gehen _____ Meer.",
      options: ["in", "auf", "zu", "ans"],
      answer: "ans"
    },
    {
      sentence: "Ich freue mich _____ den Urlaub.",
      options: ["für", "auf", "zu", "an"],
      answer: "auf"
    },
    {
      sentence: "Mein Vater wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir sitzen _____ dem Garten.",
      options: ["in", "auf", "an", "zu"],
      answer: "in"
    },
    {
      sentence: "Ich denke _____ meine Familie.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Meine Mutter kocht _____ dem Mittagessen.",
      options: ["für", "zu", "an", "auf"],
      answer: "für"
    },
    {
      sentence: "Wir gehen _____ die Apotheke.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ meinen Zug.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Mein Bruder studiert _____ der Hochschule.",
      options: ["in", "auf", "an", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir fahren _____ die Berge.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Ich arbeite _____ dem Abendessen.",
      options: ["für", "zu", "an", "auf"],
      answer: "an"
    },
    {
      sentence: "Ich lebe _____ einer Wohnung.",
      options: ["in", "auf", "an", "zu"],
      answer: "in"
    },
    {
      sentence: "Wir gehen _____ die Eisdiele.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Mein Vater arbeitet _____ einer Bank.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ den Arzt.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir fahren _____ Italien.",
      options: ["in", "auf", "nach", "zu"],
      answer: "nach"
    },
    {
      sentence: "Meine Schwester reist _____ den Ferien.",
      options: ["in", "auf", "an", "zu"],
      answer: "in"
    },
    {
      sentence: "Ich denke _____ meine Freunde.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir sitzen _____ dem Stuhl.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Mein Bruder spielt _____ dem Spielplatz.",
      options: ["in", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich fahre _____ die Schule.",
      options: ["in", "auf", "zu", "an"],
      answer: "zur"
    },
    {
      sentence: "Wir gehen _____ die Bibliothek.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Meine Mutter arbeitet _____ einem Büro.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ meine Freundin.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir fahren _____ Ski.",
      options: ["in", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Mein Vater arbeitet _____ einer Fabrik.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich denke _____ meinen Urlaub.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir sitzen _____ dem Feld.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Meine Schwester wartet _____ ihren Freund.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich fahre _____ die Arbeit.",
      options: ["in", "auf", "zu", "an"],
      answer: "zur"
    },
    {
      sentence: "Wir gehen _____ den Supermarkt.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Mein Bruder spielt _____ einem Sportverein.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ den Regen.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir fahren _____ die Berge.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Meine Mutter arbeitet _____ einem Restaurant.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich denke _____ meine Prüfung.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir sitzen _____ dem Zug.",
      options: ["in", "auf", "an", "zu"],
      answer: "in"
    },
    {
      sentence: "Mein Vater wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich fahre _____ die Universität.",
      options: ["in", "auf", "zu", "an"],
      answer: "zur"
    },
    {
      sentence: "Wir gehen _____ das Café.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Meine Schwester arbeitet _____ einem Krankenhaus.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ den Brief.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir fahren _____ den See.",
      options: ["in", "auf", "zu", "an"],
      answer: "an"
    },
    {
      sentence: "Mein Bruder spielt _____ dem Computer.",
      options: ["in", "auf", "an", "am"],
      answer: "am"
    },
    {
      sentence: "Ich denke _____ meine Noten.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir sitzen _____ dem Flugzeug.",
      options: ["in", "auf", "an", "zu"],
      answer: "in"
    },
    {
      sentence: "Meine Mutter wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich fahre _____ die Bäckerei.",
      options: ["in", "auf", "zu", "an"],
      answer: "zur"
    },
    {
      sentence: "Mein Vater arbeitet _____ einem Büro.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ den Zug.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Meine Schwester arbeitet _____ einem Geschäft.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich denke _____ meine Zukunft.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir sitzen _____ Park.",
      options: ["in", "auf", "an", "im"],
      answer: "im"
    },
    {
      sentence: "Mein Bruder wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich fahre _____ die Post.",
      options: ["in", "auf", "zu", "an"],
      answer: "zur"
    },
    {
      sentence: "Wir gehen _____ das Schwimmbad.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Meine Mutter arbeitet _____ einem Büro.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ den Anruf.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir fahren _____ die Küste.",
      options: ["in", "auf", "zu", "an"],
      answer: "an"
    },
    {
      sentence: "Mein Vater spielt _____ einem Fußballverein.",
      options: ["in", "für", "an", "auf"],
      answer: "für"
    },
    {
      sentence: "Ich denke _____ meine Hausaufgaben.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir sitzen _____ dem Bett.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Meine Schwester wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich fahre _____ die Bank.",
      options: ["in", "auf", "zu", "an"],
      answer: "zur"
    },
    {
      sentence: "Wir gehen _____ das Museum.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Mein Bruder arbeitet _____ einem Geschäft.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ den Arzt.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir fahren _____ die Insel.",
      options: ["in", "auf", "zu", "an"],
      answer: "auf"
    },
    {
      sentence: "Meine Mutter arbeitet _____ einer Schule.",
      options: ["in", "für", "an", "auf"],
      answer: "an"
    },
    {
      sentence: "Ich denke _____ meine Eltern.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir sitzen _____ dem Balkon.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Mein Vater wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich fahre _____ die Tankstelle.",
      options: ["in", "auf", "zu", "an"],
      answer: "zur"
    },
    {
      sentence: "Wir gehen _____ das Theater.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Meine Schwester arbeitet _____ einem Büro.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ den Paketboten.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir fahren _____ die Oper.",
      options: ["in", "auf", "zu", "an"],
      answer: "in"
    },
    {
      sentence: "Mein Bruder spielt _____ einer Band.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich denke _____ meinen Urlaub.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir sitzen _____ dem Spielplatz.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Meine Mutter wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich fahre _____ die Universität.",
      options: ["in", "auf", "zu", "an"],
      answer: "zur"
    },
    {
      sentence: "Wir gehen _____ Konzert.",
      options: ["zum", "auf", "zu", "an"],
      answer: "zum"
    },
    {
      sentence: "Mein Vater arbeitet _____ einer Firma.",
      options: ["in", "für", "an", "auf"],
      answer: "für"
    },
    {
      sentence: "Ich warte _____ den Bus.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Wir fahren _____ den Strand.",
      options: ["in", "auf", "zu", "an"],
      answer: "an"
    },
    {
      sentence: "Meine Schwester spielt _____ einem Orchester.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich denke _____ meine Hobbys.",
      options: ["für", "an", "auf", "zu"],
      answer: "an"
    },
    {
      sentence: "Wir sitzen _____ dem Sofa.",
      options: ["auf", "in", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Mein Bruder wartet _____ mich.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    },
    {
      sentence: "Ich fahre _____ die Schule.",
      options: ["in", "auf", "zu", "an"],
      answer: "zur"
    },
    {
      sentence: "Wir gehen _____ das Restaurant.",
      options: ["in", "auf", "zu", "an"],
      answer: "ins"
    },
    {
      sentence: "Meine Mutter arbeitet _____ einem Kindergarten.",
      options: ["in", "für", "an", "auf"],
      answer: "in"
    },
    {
      sentence: "Ich warte _____ den Techniker.",
      options: ["für", "auf", "an", "zu"],
      answer: "auf"
    }
  ];

  return questions;
});