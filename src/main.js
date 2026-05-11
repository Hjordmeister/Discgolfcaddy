const holes = [
  {
    number: 1,
    par: 3,
    length: "70 m",
    elevation: "-2.5 m",
    title: "Rak korridor",
    description: "Rak par 3 med cirka 70 m korridor och ett par guardianträd.",
    safe: "XZone flat forehand, kontrollerat rakt.",
    attack: "Commit:a flat FH genom korridoren.",
    discs: "XZone",
    miss: "Missa inte guardianträden tidigt.",
    note: "Bra öppningshål. Spela rent."
  },
  {
    number: 2,
    par: 3,
    length: "79 m",
    elevation: "",
    title: "Dogleg höger",
    description: "Något dogleg till höger med träd mitt i banan. Lågt tak och guardianträd.",
    safe: "Lågt pushande FH med stabil disc.",
    attack: "Apollo/Undertaker BH långsam turnover eller tunneln rakt igenom.",
    discs: "Apollo, Undertaker, stabil FH-disc",
    miss: "OB lång och djupt höger om korg.",
    note: "Välj linje efter dagsform. Tunneln är bonus, inte krav."
  },
  {
    number: 3,
    par: 3,
    length: "64 m",
    elevation: "",
    title: "Över dalen",
    description: "Rakt fram över dalen genom semikorridor.",
    safe: "Rak laser utan flex.",
    attack: "Gå rätt på korg om släppet känns rent.",
    discs: "Apollo, Method, XZone om du känner dig tuff",
    miss: "Undvik långa bågar och onödigt flex.",
    note: "Rakt, rent, inga konstigheter."
  },
  {
    number: 4,
    par: 4,
    length: "129 m",
    elevation: "+5 m mot korg",
    title: "Skarp dogleg höger",
    description: "Skarp dogleg höger vid drygt 60 m, sedan raksträcka uppför med guardianträd och lågt tak in mot C1.",
    safe: "Method eller Splice från tee till brytpunkten.",
    attack: "Från brytpunkten: stabilt/överstabilt kast som hugger in från sidan.",
    discs: "Method, Splice, stabil/överstabil approach",
    miss: "Mando precis vid doglegen. Uppmärksamma den.",
    note: "Placering först. Andrakastet avgör hålet."
  },
  {
    number: 5,
    par: 4,
    length: "139 m",
    elevation: "",
    title: "Rakt och kuperat",
    description: "Väldigt rakt men hyfsat kuperat hål. Två korridorer finns för andrakastet.",
    safe: "Hades eller Ballista Pro åt höger i fairway och låt fadea in mot mitten.",
    attack: "Lågt utkast med lite hyzer till flat och håll släpphöjd.",
    discs: "Hades, Ballista Pro, Apollo, Method, XZone",
    miss: "Missa inte så du tappar vinkeln inför korridorvalet.",
    note: "Första kastet ska bara ge bra vinkel till nästa."
  },
  {
    number: 6,
    par: 3,
    length: "74 m",
    elevation: "-5 till -6 m",
    title: "Upphöjd tee",
    description: "Spikrakt hål från upphöjd tee. Korgen står på sandkulle. OB lång.",
    safe: "Method/Apollo kontrollerat.",
    attack: "Splice flat långt åt vänster och låt den fada tillbaka.",
    discs: "Method, Apollo, Splice",
    miss: "OB lång. Höger fairway är väldigt kuperad.",
    note: "Vänster är öppnare. Låt discen jobba tillbaka."
  },
  {
    number: 7,
    par: 3,
    length: "78 m",
    elevation: "+6 m",
    title: "Nyckelhålet",
    description: "Rak korridor till C2 där det öppnar upp sig. Guardianträd mitt i fairway. Allt utanför är hazard.",
    safe: "Ballista Pro/Hades nästan rakt på med koll på nosvinkel.",
    attack: "Commit:a uppför. Discen hinner knappt börja fada.",
    discs: "Ballista Pro, Hades",
    miss: "Hazard utanför cirkeln/fairway.",
    note: "Mer kraft än man tror. Birdie-cheatcode om släppet sitter."
  },
  {
    number: 8,
    par: 3,
    length: "137 m",
    elevation: "-12 m",
    title: "Ö-hålet",
    description: "Upphöjd tee cirka 12 m. Cirka 100 m till ön.",
    safe: "Platt med ordentligt negativ nosvinkel.",
    attack: "Kasta vänster om korg och låt Hades/Ballista fada in.",
    discs: "Hades, Ballista Pro",
    miss: "För högt eller nose up = katastrofrisk.",
    note: "Kasta genom en låg tunnel nedåt, inte upp i luften."
  },
  {
    number: 9,
    par: 3,
    length: "97 m",
    elevation: "",
    title: "Svag dogleg höger",
    description: "Svag dogleg höger med OB vänster.",
    safe: "Slow push turnover som håller vinkeln.",
    attack: "Zombee eller Bolt/Ballista Pro på kontrollerad turnover.",
    discs: "Zombee, Bolt, Ballista Pro",
    miss: "OB vänster. Discen måste hålla vinkel.",
    note: "Ingen tidig fade här."
  },
  {
    number: 10,
    par: 3,
    length: "70 m",
    elevation: "",
    title: "Korridor till vänsterfade",
    description: "60 m smal korridor och sedan dogleg vänster.",
    safe: "Hyzerflip till platt och låt den fada.",
    attack: "Träffa tunneln rent med mid.",
    discs: "Apollo, Method, Buzzz",
    miss: "Tidigt träd i korridoren.",
    note: "Form före fart."
  },
  {
    number: 11,
    par: 4,
    length: "149 m",
    elevation: "+10 m",
    title: "Uppför dogleg höger",
    description: "Dogleg höger ganska tidigt. Cirka 10 m uppför till korg.",
    safe: "Håll till höger. Vänster är stup och jobbigt.",
    attack: "Splice FH eller Zombee/Ballista Pro/Bolt BH turnover.",
    discs: "Splice, Zombee, Ballista Pro, Bolt",
    miss: "Vänster. Där blir det snabbt straffigt.",
    note: "Höger sida är vännen."
  },
  {
    number: 12,
    par: 3,
    length: "106 m",
    elevation: "",
    title: "Svag dogleg vänster",
    description: "Hyfsat öppet men stänger sig precis runt korgen.",
    safe: "Håll ned discen och nosen. Kasta rakt fram.",
    attack: "Låt Undertaker/Hades fada in i öppningen.",
    discs: "Undertaker, Hades",
    miss: "För högt eller för långt utanför öppningen.",
    note: "Låg push och lita på fade."
  },
  {
    number: 13,
    par: 4,
    length: "143 m",
    elevation: "",
    title: "Öppning in mot korg",
    description: "OB djupt höger. Vänster om fairway är väldigt kuperat.",
    safe: "Båga ut över fairway och låt fadea in till öppningen.",
    attack: "Hades/Ballista Pro för att skapa bra vinkel vidare.",
    discs: "Hades, Ballista Pro",
    miss: "OB djupt höger och kuperat vänster.",
    note: "Placera för öppningen, inte maxlängd."
  },
  {
    number: 14,
    par: 3,
    length: "68 m",
    elevation: "",
    title: "Trång korridor",
    description: "Spikrak trång korridor hela vägen. Öppnar sig något vid korg.",
    safe: "Platt kast med Method eller Apollo.",
    attack: "Rak laser om släppet känns tryggt.",
    discs: "Method, Apollo",
    miss: "Träd tidigt i korridoren.",
    note: "Det här är precision, inte power."
  },
  {
    number: 15,
    par: 3,
    length: "106 m",
    elevation: "Nedför från upphöjd tee",
    title: "Över skogen",
    description: "Mycket skog men den kastas över från upphöjd tee.",
    safe: "Platt med negativ nosvinkel och kasta lite nedåt.",
    attack: "Hades/Ballista vänster om korg och lita på fade.",
    discs: "Hades, Ballista Pro",
    miss: "För långt. Kasta inte uppåt.",
    note: "Nedåtlinje med nose down."
  },
  {
    number: 16,
    par: 3,
    length: "82 m",
    elevation: "",
    title: "Avslut höger",
    description: "Rakt hål med avslut till höger. Mando till höger hindrar kast över skogen.",
    safe: "FH slow push med Apollo eller XZone.",
    attack: "BH med Zombee eller Ballista om linjen känns rätt.",
    discs: "Apollo, XZone, Zombee, Ballista Pro",
    miss: "Mando. Försök inte fuska över skogen.",
    note: "Kontrollera vinkeln hela vägen."
  },
  {
    number: 17,
    par: 3,
    length: "76 m",
    elevation: "",
    title: "Trång tee, öppnar vänster",
    description: "Hyfsat trångt vid tee men öppnar upp åt vänster med OB direkt efter.",
    safe: "Method platt och rakt med negativ nosvinkel.",
    attack: "Apollo om du vill ha lite mer push.",
    discs: "Method, Apollo",
    miss: "OB vänster efter öppningen.",
    note: "Rak kontroll är prio."
  },
  {
    number: 18,
    par: 3,
    length: "71 m",
    elevation: "",
    title: "Kuperat med flera linjer",
    description: "Väldigt kuperat hål med flera möjliga linjer.",
    safe: "Vänster spår med Zombee.",
    attack: "Slow push anhyzer genom vänster spår.",
    discs: "Zombee",
    miss: "Tvinga inte en onödig hjälte-line.",
    note: "Avsluta smart."
  }
]

let currentHole = 0

function renderHole() {
  const hole = holes[currentHole]

  document.querySelector("#app").innerHTML = `
    <div class="app">
      <header>
        <p class="course">Tjärna Discgolf</p>
        <h1>Digital Caddy</h1>
        <p class="counter">Hål ${hole.number} av ${holes.length}</p>
      </header>

      <main class="card">
        <div class="top-row">
          <div>
            <p class="label">Hål</p>
            <h2>${hole.number}</h2>
          </div>

          <div>
            <p class="label">Par</p>
            <h2>${hole.par}</h2>
          </div>

          <div>
            <p class="label">Längd</p>
            <h2>${hole.length}</h2>
          </div>
        </div>

        <h3>${hole.title}</h3>

        ${hole.elevation ? `<p class="pill">Elevation: ${hole.elevation}</p>` : ""}

        <section>
          <h4>Beskrivning</h4>
          <p>${hole.description}</p>
        </section>

        <section>
          <h4>Safe</h4>
          <p>${hole.safe}</p>
        </section>

        <section>
          <h4>Attack</h4>
          <p>${hole.attack}</p>
        </section>

        <section>
          <h4>Disc</h4>
          <p>${hole.discs}</p>
        </section>

        <section class="danger">
          <h4>Missa inte</h4>
          <p>${hole.miss}</p>
        </section>

        <section>
          <h4>Kommentar</h4>
          <p>${hole.note}</p>
        </section>

        <div class="buttons">
          <button id="prevHole">Föregående</button>
          <button id="nextHole">Nästa hål</button>
        </div>
      </main>
    </div>
  `

  document.querySelector("#prevHole").addEventListener("click", () => {
    currentHole--
    if (currentHole < 0) currentHole = holes.length - 1
    renderHole()
  })

  document.querySelector("#nextHole").addEventListener("click", () => {
    currentHole++
    if (currentHole >= holes.length) currentHole = 0
    renderHole()
  })
}

const style = document.createElement("style")
style.innerHTML = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #0d0d0f;
    color: white;
    font-family: Arial, sans-serif;
  }

  .app {
    min-height: 100dvh;
    padding: 20px;
    background:
      radial-gradient(circle at top right, rgba(0, 188, 212, 0.25), transparent 35%),
      radial-gradient(circle at bottom left, rgba(255, 105, 180, 0.18), transparent 35%),
      #0d0d0f;
  }

  header {
    margin-bottom: 20px;
  }

  .course {
    color: #00e5ff;
    margin: 0;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  h1 {
    margin: 6px 0;
    font-size: 34px;
  }

  .counter {
    color: #cfcfcf;
    margin: 0;
  }

  .card {
    background: rgba(30, 30, 34, 0.95);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 22px;
    padding: 20px;
    max-width: 720px;
    width: 100%;

    box-shadow: 0 20px 50px rgba(0,0,0,0.35);
  }

  .top-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 20px;
  }

  .top-row > div {
    background: #111;
    border-radius: 16px;
    padding: 14px;
    text-align: center;
  }

  .label {
    color: #aaa;
    margin: 0 0 6px;
    font-size: 12px;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
    margin: 10px 0;
  }

  h4 {
    color: #00e5ff;
    margin: 0 0 6px;
  }

  section {
    background: #151519;
    border-radius: 14px;
    padding: 14px;
    margin-top: 12px;
  }

  section p {
    margin: 0;
    line-height: 1.45;
  }

  .danger h4 {
    color: #ff7abf;
  }

  .pill {
    display: inline-block;
    background: rgba(0, 188, 212, 0.15);
    color: #8ff6ff;
    padding: 8px 12px;
    border-radius: 999px;
    margin: 0 0 10px;
  }

  .buttons {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }

  button {
    flex: 1;
    border: none;
    border-radius: 14px;
    padding: 14px 16px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: #00bcd4;
    cursor: pointer;
  }

  button:first-child {
    background: #333;
  }

  @media (max-width: 500px) {
    .top-row {
      grid-template-columns: 1fr;
    }

    h1 {
      font-size: 28px;
    }

    .buttons {
      flex-direction: column;
    }
  }
`
document.head.appendChild(style)

renderHole()