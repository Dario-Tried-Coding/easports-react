const mockData = [
  {
    btn: "Giochi",
    singleColumn: false,
    columns: [
      {
        heading: "Esplora i giochi",
        links: [["Ultimi giochi", "/games"], ["Prossimamente", "/games/coming-soon"], ["Giochi gratuiti", "/games/library/freetoplay"], ["EA SPORTS", "/sports"], ["EA Originals", "/ea-originals"], ["Libreria dei giochi", "/games/library"]],
      },
      {
        heading: "Piattaforme",
        links: [["PC", "/library/pc-download"], ["PlayStation®5", "/games/library/ps5"], ["Xbox Series X", "/games/library/xbox-series-x"], ["Nintendo Switch™", "/games/library/nintendo-switch"], ["Cellulari", "/games/library/mobile"]],
      },
    ],
  },
  {
    btn: "Altre Esperienze",
    singleColumn: true,
    links: [["EA Play", "/ea-play"], ["L'EA app", "/ea-app"], ["Competizioni videoludiche", "/"], ["Diretta di EA Play", "/ea-play-live"], ["Test di gioco", "/"]]
  },
  {
    btn: "Informazioni",
    singleColumn: true,
    links: [["Società", "/about"], ["EA Studi", "/ea-studios"], ["Lavora con noi", "/careers"], ["La nostra tecnologia", "/technology"], ["EA Partners", "/ea-partners"], ["Notizie", "/news"], ["Inside EA", "/inside-ea"]]
  },
  {
    btn: "Impegni",
    singleColumn: true,
    links: [["I nostri impegni", "/commitments"], ["Gioco positivo", "/commitments/positive-play"], ["Diversità e inclusione", "/commitments/inclusion-and-diversity"], ["Impatto sociale", "/commitments/social-impact"], ["Persone e cultura", "/commitments/people-and-culture"], ["Ambiente", "/commitments/environment"]]
  },
  {
    btn: "Risorse",
    singleColumn: true,
    links: [["Aiuto", "/"], ["Forum", "/forums"], ["Filtro famiglia", "/commitments/positive-play/parental-controls"], ["Accessibilità", "/"], ["Stampa", "/"], ["Investitori", "/"]]
  },
];

export default JSON.stringify(mockData)