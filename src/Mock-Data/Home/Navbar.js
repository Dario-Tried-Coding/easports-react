const mockData = [
  {
    btn: "Giochi",
    singleColumn: false,
    columns: [
      {
        heading: "Esplora i giochi",
        links: ["Ultimi giochi", "Prossimamente", "Giochi gratuiti", "EA SPORTS", "EA Originals", "Libreria dei giochi"],
      },
      {
        heading: "Piattaforme",
        links: ["PC", "PlayStation®5", "Xbox Series X", "Nintendo Switch™", "Cellulari"],
      },
    ],
  },
  {
    btn: "Altre Esperienze",
    singleColumn: true,
    links: ["EA Play", "L'EA app", "Competizioni videoludiche", "Diretta di EA Play", "Test di gioco"]
  },
  {
    btn: "Informazioni",
    singleColumn: true,
    links: ["Società", "EA Studi", "Lavora con noi", "La nostra tecnologia", "EA Partners", "Notizie", "Inside EA"]
  },
  {
    btn: "Impegni",
    singleColumn: true,
    links: ["I nostri impegni", "Gioco positivo", "Diversità e inclusione", "Impatto sociale", "Persone e cultura", "Ambiente"]
  },
  {
    btn: "Risorse",
    singleColumn: true,
    links: ["Aiuto", "Forum", "Filtro famiglia", "Accessibilità", "Stampa", "Investitori"]
  },
];

export default JSON.stringify(mockData)