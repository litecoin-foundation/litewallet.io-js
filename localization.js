// localization.js
// This code loads of the text for every text element given a certain language

// Define the language reload anchors
    var language = {
            en: {
                textAboutMenu: "About",
                textTeamMenu: "Team",
                textDonationMenu: "Donation",
                textSupportMenu: "Support",
                textHalvingPrefix: "Halving in ",
                textHalvingSuffix: " days.", 
                textViewCountdown: "View Countdown",
                textHeadline: "The official Litecoin mobile Wallet",
                textHalving: "Halving in 000 days.",
                textSubheadline: "Litecoin has been operational since 2011 with no downtime! Litewallet is the official wallet backed by Litecoin Foundation that offers simple and safe ways to use Litecoin.",
                textYearCreated: "YEAR CREATED",
                textMarketPrice: "CURRENT MARKET PRICE",
                textMarketCap: "CURRENT MARKET CAP",
                textCirculatingPrefixSuffix: "Litecoin has a circulating supply of and a max. supply of ", 
                textLearnHeader: "Learn more about Litecoin",
                textLitecoinDescription: "Litecoin is one of the most established and stable cryptocurrencies in terms of transaction volumes and liquidity, and is commonly used as a means of exchange.",
                textLitecoinDescriptionStyled: "It's a real currency used everywhere!",
                textZeroTitle: "Zero downtime",
                textMWEBTitle: "MWEB Implementation",
                textCheapTitle: "Cheap fees",
                textFastTitle: "Fast transactions",
                textZeroDetail: "Since 2011, Litecoin has led the cryptocurrency space as a secure, decentralized and innovative currency.",
                textMWEBDetail: "MWEB keeps your wallet balance secret. This allows you to send Litecoin without strangers seeing whats in your wallet.",
                textCheapDetail: "Litecoin was designed to make it incredibly cheap to send. If the network is busy, its still very cheap...pennies.",
                textFastDetail: "Litecoin has a transaction processing speed of 54 TPS, which is significantly higher than Bitcoin's transaction processing speed of 5 TPS.",
                textPartnerHeadline: "We have great partners that help Litewallet deliver more value to our users",
                textBitrefillDetail: "Leading crypto e-commerce store that allows users to 'Live on Crypto'.",
                textMoonpayDetail: "MoonPay is active in more than 160 countries and is trusted by 300+ leading wallets, websites, and applications to accept payments and defeat fraud.",
                textSimplexDetail: "Powerful. Seamless. Impactful. As the industry leader, we empower hundreds of partners to enable millions of people to buy billions of dollars in digital assets.",
                textUDDetail: "Own your identity in the digital world. It's your name. Own it. Own your identity in the digital world. Get started with a Web3 domain.",
                textLitecoinCreatorHeadline: "While at Google, Charlie became interested in Bitcoin meeting Mike Hearn & getting his first Bitcoin. He launched Litecoin in October 2011. He founded the Litecoin Foundation in 2016, a non-profit organization whose mission is to teach the world the benefits Litecoin.",
                textLitecoinCreatorSubheadline: "Working closely with the Litewallet team, Charlie and Kerry discuss ways to increase active users while provide the features users want the most. The Litewallet team is global with a modest budget and a wide number of well funded competitors offering many types of crypto.",
                textTeamHeadline: "It's a team effort",
                textTeamSubheadline: "Litewallet has one full time team leader and a group of global volunteers. Interested in learning more about the Litecoin space while improving your knowledge of cryptocurrency?",
                textVolunteerHeadline: "Apply to become a volunteer",
                textDonationHeadline: "Empower Litecoin's Future with your donation",
                textDonationSubheadline: "Your donation to Litewallet app developers will help fuel the development of cutting-edge features and push the boundaries of what's possible. Give the gift of progress and support the team now!",
                textDonationScan: "Scan to give!",
                textDonationsSend: "Send LTC to this address:",
                textFooterHeadline: "Litewallet, The official Litecoin wallet",
                textRepoHeadline: "Litewallet code is open source and we use Github to maintain the codebase.",
                textSocialHeadline: "Litewallet social",
                textRepositories: "Repositories:",
                textFooterSubheadline: "Go to the top"
            },
            id: {
                textAboutMenu: "Tentang",
                textTeamMenu: "Tim",
                textDonationMenu: "Donasi",
                textSupportMenu: "Dukung",
                textHalvingPrefix: "Membagi dua dalam ",
                textHalvingSuffix: " hari. ", 
                textViewCountdown: "Lihat Hitung Mundur",
                textHeadline: "Dompet Litecoin resmi untuk Smartphone",
                textSubheadline: "Litecoin telah beroperasi sejak tahun 2011 tanpa henti! Litewallet adalah dompet resmi yang didukung oleh Litecoin Foundation yang menawarkan kemudahan dan keamanan untuk menggunakan Litecoin.",
                textYearCreated: "TAHUN DIBUAT",
                textMarketPrice: "HARGA PASAR SAAT INI",
                textMarketCap: "KAPITALISASI PASAR SAAT INI",
                textCirculatingPrefixSuffix: "Litecoin memiliki persediaan yang beredar dan persediaan maksimum ", 
                textLearnHeader:  "Pelajari lebih lanjut tentang Litecoin",
                textLitecoinDescription:  "Litecoin adalah salah satu mata uang kripto yang paling mapan dan stabil dalam hal volume transaksi dan likuiditas, dan umumnya digunakan sebagai alat tukar.",
                textLitecoinDescriptionStyled:  "Ini adalah mata uang sungguhan yang digunakan di mana pun!",
                textZeroTitle:  "Tanpa waktu henti",
                textMWEBTitle:  "Implementasi MWEB",
                textCheapTitle:  "Biaya murah",
                textFastTitle:  "Transaksi cepat",
                textZeroDetail: "Sejak tahun 2011, Litecoin telah memimpin dunia mata uang kripto sebagai mata uang yang aman, terdesentralisasi, dan inovatif.",
                textMWEBDetail:  "MWEB membuat saldo dompet Anda tetap tersembunyi. Hal ini memungkinkan Anda untuk mengirim Litecoin tanpa ada orang asing yang melihat apa yang ada di dalam dompet Anda.",
                textCheapDetail:  "Litecoin dirancang untuk membuatnya sangat murah untuk dikirim. Jika jaringan sedang sibuk, harganya masih sangat murah...",
                textFastDetail:  "Litecoin memiliki kecepatan pemrosesan transaksi 54 TPS, yang secara signifikan lebih tinggi daripada kecepatan pemrosesan transaksi Bitcoin yang hanya 5 TPS.",
                textPartnerHeadline:  "Kami memiliki partner-partner hebat yang membantu Litewallet memberikan nilai lebih kepada para pengguna",
                textBitrefillDetail:  "Toko e-commerce kripto terkemuka yang memungkinkan pengguna untuk 'Hidup dengan Kripto'.",
                textMoonpayDetail:  "MoonPay aktif di lebih dari 160 negara dan dipercaya oleh 300+ dompet, situs web, dan aplikasi terkemuka untuk menerima pembayaran dan mengatasi penipuan.",
                textSimplexDetail:  "Powerfull. Sempurna. Berpengaruh. Sebagai pemimpin industri, memberdayakan ratusan mitra untuk memungkinkan jutaan orang membeli aset digital bernilai miliaran dolar.",
                textUDDetail:  "Miliki identitas Anda di dunia digital. Ini adalah nama Anda. Milikilah. Miliki identitas Anda di dunia digital. Mulailah dengan domain Web3.",
                textLitecoinCreatorHeadline:  "Ketika berkarir di Google, Charlie menjadi tertarik dengan Bitcoin setelah bertemu Mike Hearn dan mendapatkan Bitcoin pertamanya. Dia meluncurkan Litecoin pada Oktober 2011. Dia mendirikan Litecoin Foundation pada tahun 2016, sebuah organisasi non-profit yang memiliki misi untuk mengajarkan manfaat Litecoin kepada dunia.",
                textLitecoinCreatorSubheadline:  "Bekerja sama secara dekat dengan tim Litewallet, Charlie dan Kerry mendiskusikan cara-cara untuk meningkatkan pengguna aktif sambil menyediakan fitur yang paling diinginkan pengguna. Tim Litewallet bersifat global dengan anggaran sederhana dan sejumlah besar pesaing yang memiliki dana besar yang menawarkan banyak jenis kripto.",
                textTeamHeadline:  "Ini adalah upaya tim",
                textTeamSubheadline:  "Litewallet memiliki satu team leader penuh waktu dan sekelompok sukarelawan global. Tertarik untuk mempelajari lebih lanjut tentang ruang Litecoin sambil meningkatkan pengetahuan Anda tentang cryptocurrency?",
                textVolunteerHeadline:  "Bergabung menjadi sukarelawan",
                textDonationHeadline:  "Dukung Masa Depan Litecoin dengan donasi Anda",
                textDonationSubheadline:  "Donasi Anda kepada pengembang aplikasi Litewallet akan membantu mendorong pengembangan fitur-fitur terdepan dan melampaui batas-batas yang dimungkinkan. Berikan dukungan untuk kemajuan dan dukung tim sekarang juga!",
                textDonationScan: "Scan untuk memberi!",
                extDonationsSend:  "Kirim LTC ke alamat ini:",
                textFooterHeadline:  "Litewallet, Dompet Litecoin resmi",
                textRepoHeadline: "Kode Litewallet bersifat open source dan kami menggunakan Github untuk memelihara basis kode.",
                textSocialHeadline:  "Media Sosial Litewallet",
                textRepositories:  "Repositori:",
                textFooterSubheadline:  "Ke atas",
            },
            fr: {
                textAboutMenu: "À propos",
                textTeamMenu: "Équipe",
                textDonationMenu: "la donation",
                textSupportMenu: "soutien",
                textHalvingPrefix: "Réduire de moitié",
                textHalvingSuffix: "jours", 
                textViewCountdown: "Afficher le compte à rebours",
                textHeadline: "Le portefeuille mobile Litecoin officiel",
                textSubheadline: "Litecoin est opérationnel depuis 2011 sans temps d'arrêt ! Litewallet est le portefeuille officiel soutenu par la Fondation Litecoin qui offre des moyens simples et sûrs d'utiliser Litecoin.",
                textYearCreated: "",
                textMarketPrice: "",
                textMarketCap: "",
                textCirculatingPrefixSuffix: "",
                textLearnHeader:  "",
                textLitecoinDescription:  "",
                textLitecoinDescriptionStyled:  "",
                textZeroTitle:  "",
                textMWEBTitle:  "",
                textCheapTitle:  "",
                textFastTitle:  "",
                textZeroDetail: "",
                textMWEBDetail:  "",
                textCheapDetail:  "",
                textFastDetail:  "",
                textPartnerHeadline:  "",
                textBitrefillDetail:  "",
                textMoonpayDetail:  "",
                textSimplexDetail:  "",
                textUDDetail:  "",
                textLitecoinCreatorHeadline:  "",
                textLitecoinCreatorSubheadline:  "",
                textTeamHeadline:  "",
                textTeamSubheadline:  "",
                textVolunteerHeadline:  "",
                textDonationHeadline:  "",
                textDonationSubheadline:  "",
                textDonationsSend:  "",
                textFooterHeadline:  "",
                textRepoHeadline: "",
                textSocialHeadline:  "",
                textRepositories:  "",
                textFooterSubheadline:  "",
            },
            es: {
                textAboutMenu: "",
                textTeamMenu: "",
                textDonationMenu: "",
                textSupportMenu: "",
                textHalvingPrefix: "",
                textHalvingSuffix: "", 
                textViewCountdown: "",
                textHeadline: "",
                textSubheadline: "",
                textYearCreated: "",
                textMarketPrice: "",
                textMarketCap: "",
                textCirculatingPrefixSuffix: "", 
                textLearnHeader: "",
                textLitecoinDescription: "",
                textLitecoinDescriptionStyled: "",
                textZeroTitle: "",
                textMWEBTitle: "",
                textCheapTitle: "",
                textFastTitle: "",
                textZeroDetail: "",
                textMWEBDetail: "",
                textCheapDetail: "",
                textFastDetail: "",
                textPartnerHeadline: "",
                textBitrefillDetail: "",
                textMoonpayDetail: "",
                textSimplexDetail: "",
                textUDDetail: "",
                textLitecoinCreatorHeadline: "",
                textLitecoinCreatorSubheadline: "",
                textTeamHeadline: "",
                textTeamSubheadline: "",
                textVolunteerHeadline: "",
                textDonationHeadline: "",
                textDonationSubheadline: "",
                textDonationsSend: "",
                textFooterHeadline: "",
                textRepoHeadline: "",
                textSocialHeadline: "",
                textRepositories: "",
                textFooterSubheadline: ""
            },
            de: {
                textAboutMenu: "Über",
                textTeamMenu: "Team",
                textDonationMenu: "Spende",
                textSupportMenu: "Unterstützung",
                textHalvingPrefix: "Halbierung in ",
                textHalvingSuffix: " Tagen. ", 
                textViewCountdown: "Countdown anzeigen",
                textHeadline: "Die offizielle Litecoin-Geldbörse",
                textSubheadline: "Litecoin ist seit 2011 ohne Ausfallzeiten in Betrieb! Litewallet ist die offizielle, von der Litecoin Foundation unterstützte Wallet, die einfache und sichere Möglichkeiten zur Nutzung von Litecoin bietet.",
                textYearCreated: "JAHR DER ERSTELLUNG",
                textMarketPrice: "AKTUELLER MARKTPREIS",
                textMarketCap: "AKTUELLE MARKTKAPITALISIERUNG",
                textCirculatingPrefixSuffix: "Litecoin hat einen zirkulierenden Vorrat von und einen maximalen Vorrat von ",
                textLearnHeader: "Erfahren Sie mehr über Litecoin",
                textLitecoinDescription: "Litecoin ist eine der etabliertesten und stabilsten Kryptowährungen, was das Transaktionsvolumen und die Liquidität angeht, und wird häufig als Tauschmittel verwendet.",
                textLitecoinDescriptionStyled: "Es ist eine echte Währung, die überall verwendet wird!",
                textZeroTitle: "Keine Ausfallzeiten",
                textMWEBTitle: "MWEB-Umsetzung",
                textCheapTitle: "Günstige Gebühren",
                textFastTitle: "Schnelle Transaktionen",
                textZeroDetail: "Seit 2011 ist Litecoin als sichere, dezentralisierte und innovative Währung führend im Bereich der Kryptowährungen.",
                textMWEBDetail: "MWEB hält Ihr Wallet-Guthaben verborgen. So können Sie Litecoin versenden, ohne dass Fremde sehen, was sich in Ihrem Wallet befindet.",
                textCheapDetail: "Litecoin wurde so konzipiert, dass es unglaublich billig ist, zu senden. Wenn das Netzwerk ausgelastet ist, ist es immer noch sehr billig... Pennies.",
                textFastDetail: "Litecoin hat eine Transaktionsverarbeitungsgeschwindigkeit von 54 TPS, was deutlich höher ist als die Transaktionsverarbeitungsgeschwindigkeit von Bitcoin von 5 TPS.",
                textPartnerHeadline: "Wir haben großartige Partner, die Litewallet dabei helfen, unseren Nutzern mehr Wert zu bieten",
                textBitrefillDetail: "Führender Krypto-E-Commerce-Shop, der es den Nutzern ermöglicht, 'von Krypto zu leben'.",
                textMoonpayDetail: "MoonPay ist in mehr als 160 Ländern aktiv und wird von mehr als 300 führenden Geldbörsen, Websites und Anwendungen als vertrauenswürdig angesehen, um Zahlungen zu akzeptieren und Betrug zu verhindern.",
                textSimplexDetail: "Kraftvoll. Nahtlos. Wirkungsvoll. Als Branchenführer befähigen wir Hunderte von Partnern, Millionen von Menschen den Kauf von digitalen Vermögenswerten im Wert von Milliarden von Dollar zu ermöglichen.",
                textUDDetail: "Besitzen Sie Ihre Identität in der digitalen Welt. Es ist Ihr Name. Besitzen Sie ihn. Besitzen Sie Ihre Identität in der digitalen Welt. Starten Sie mit einer Web3-Domain.",
                textLitecoinCreatorHeadline: "Während seiner Zeit bei Google begann Charlie sich für Bitcoin zu interessieren, traf Mike Hearn und erhielt seinen ersten Bitcoin. Er startete Litecoin im Oktober 2011. Im Jahr 2016 gründete er die Litecoin Foundation, eine gemeinnützige Organisation, deren Aufgabe es ist, der Welt die Vorteile von Litecoin zu vermitteln.",
                textLitecoinCreatorSubheadline: "In enger Zusammenarbeit mit dem Litewallet-Team erörtern Charlie und Kerry Möglichkeiten, die Zahl der aktiven Nutzer zu erhöhen und gleichzeitig die von den Nutzern am meisten gewünschten Funktionen bereitzustellen. Das Litewallet-Team ist ein globales Unternehmen mit einem bescheidenen Budget und einer großen Anzahl gut finanzierter Wettbewerber, die viele Arten von Kryptowährungen anbieten.",
                textTeamHeadline: "Es ist eine Teamleistung",
                textTeamSubheadline: "Litewallet hat einen hauptamtlichen Teamleiter und eine Gruppe von Freiwilligen weltweit. Sind Sie daran interessiert, mehr über den Litecoin-Bereich zu erfahren und gleichzeitig Ihr Wissen über Kryptowährungen zu verbessern?",
                textVolunteerHeadline: "Bewerben Sie sich als Freiwilliger",
                textDonationHeadline: "Stärken Sie die Zukunft von Litecoin mit Ihrer Spende",
                textDonationSubheadline: "Ihre Spende an die Entwickler der Litewallet-App wird dazu beitragen, die Entwicklung innovativer Funktionen voranzutreiben und die Grenzen des Machbaren zu erweitern. Schenken Sie den Fortschritt und unterstützen Sie das Team jetzt!",
                textDonationScan: "Scannen, um zu geben!",
                textDonationsSend: "Senden Sie LTC an diese Adresse:",
                textFooterHeadline: "Litewallet, Die offizielle Litecoin-Geldbörse",
                textRepoHeadline: "Der Code von Litewallet ist quelloffen und wir verwenden Github, um die Codebasis zu pflegen.",
                textSocialHeadline: "Litewallet Soziale Medien",
                textRepositories: "Repositories:",
                textFooterSubheadline: "Nach oben gehen"
            },
            ko: {
                textAboutMenu: "",
                textTeamMenu: "",
                textDonationMenu: "",
                textSupportMenu: "",
                textHalvingPrefix: "",
                textHalvingSuffix: "", 
                textViewCountdown: "",
                textHeadline: "",
                textSubheadline: "",
                textYearCreated: "",
                textMarketPrice: "",
                textMarketCap: "",
                textCirculatingPrefixSuffix: "",
                textLearnHeader: "",
                textLitecoinDescription: "",
                textLitecoinDescriptionStyled: "",
                textZeroTitle: "",
                textMWEBTitle: "",
                textCheapTitle: "",
                textFastTitle: "",
                textZeroDetail: "",
                textMWEBDetail: "",
                textCheapDetail: "",
                textFastDetail: "",
                textPartnerHeadline: "",
                textBitrefillDetail: "",
                textMoonpayDetail: "",
                textSimplexDetail: "",
                textUDDetail: "",
                textLitecoinCreatorHeadline: "",
                textLitecoinCreatorSubheadline: "",
                textTeamHeadline: "",
                textTeamSubheadline: "",
                textVolunteerHeadline: "",
                textDonationHeadline: "",
                textDonationSubheadline: "",
                textDonationsSend: "",
                textFooterHeadline: "",
                textRepoHeadline: "",
                textSocialHeadline: "",
                textRepositories: "",
                textFooterSubheadline: ""
            },
            uk: {
                textAboutMenu: "",
                textTeamMenu: "",
                textDonationMenu: "",
                textSupportMenu: "",
                textHalvingPrefix: "",
                textHalvingSuffix: "", 
                textViewCountdown: "",
                textHeadline: "",
                textSubheadline: "",
                textYearCreated: "",
                textMarketPrice: "",
                textMarketCap: "",
                textCirculatingPrefixSuffix: "",
                textLearnHeader: "",
                textLitecoinDescription: "",
                textLitecoinDescriptionStyled: "",
                textZeroTitle: "",
                textMWEBTitle: "",
                textCheapTitle: "",
                textFastTitle: "",
                textZeroDetail: "",
                textMWEBDetail: "",
                textCheapDetail: "",
                textFastDetail: "",
                textPartnerHeadline: "",
                textBitrefillDetail: "",
                textMoonpayDetail: "",
                textSimplexDetail: "",
                textUDDetail: "",
                textLitecoinCreatorHeadline: "",
                textLitecoinCreatorSubheadline: "",
                textTeamHeadline: "",
                textTeamSubheadline: "",
                textVolunteerHeadline: "",
                textDonationHeadline: "",
                textDonationSubheadline: "",
                textDonationsSend: "",
                textFooterHeadline: "",
                textRepoHeadline: "",
                textSocialHeadline: "",
                textRepositories: "",
                textFooterSubheadline: ""
            },
            ru: {
                textAboutMenu: "",
                textTeamMenu: "",
                textDonationMenu: "",
                textSupportMenu: "",
                textHalvingPrefix: "",
                textHalvingSuffix: "", 
                textViewCountdown: "",
                textHeadline: "",
                textSubheadline: "",
                textYearCreated: "",
                textMarketPrice: "",
                textMarketCap: "",
                textCirculatingPrefixSuffix: "",
                textLearnHeader: "",
                textLitecoinDescription: "",
                textLitecoinDescriptionStyled: "",
                textZeroTitle: "",
                textMWEBTitle: "",
                textCheapTitle: "",
                textFastTitle: "",
                textZeroDetail: "",
                textMWEBDetail: "",
                textCheapDetail: "",
                textFastDetail: "",
                textPartnerHeadline: "",
                textBitrefillDetail: "",
                textMoonpayDetail: "",
                textSimplexDetail: "",
                textUDDetail: "",
                textLitecoinCreatorHeadline: "",
                textLitecoinCreatorSubheadline: "",
                textTeamHeadline: "",
                textTeamSubheadline: "",
                textVolunteerHeadline: "",
                textDonationHeadline: "",
                textDonationSubheadline: "",
                textDonationsSend: "",
                textFooterHeadline: "",
                textRepoHeadline: "",
                textSocialHeadline: "",
                textRepositories: "",
                textFooterSubheadline: ""
            },
            pt: {
                textAboutMenu: "",
                textTeamMenu: "",
                textDonationMenu: "",
                textSupportMenu: "",
                textHalvingPrefix: "",
                textHalvingSuffix: "", 
                textViewCountdown: "",
                textHeadline: "",
                textSubheadline: "",
                textYearCreated: "",
                textMarketPrice: "",
                textMarketCap: "",
                textCirculatingPrefixSuffix: "",
                textLearnHeader: "",
                textLitecoinDescription: "",
                textLitecoinDescriptionStyled: "",
                textZeroTitle: "",
                textMWEBTitle: "",
                textCheapTitle: "",
                textFastTitle: "",
                textZeroDetail: "",
                textMWEBDetail: "",
                textCheapDetail: "",
                textFastDetail: "",
                textPartnerHeadline: "",
                textBitrefillDetail: "",
                textMoonpayDetail: "",
                textSimplexDetail: "",
                textUDDetail: "",
                textLitecoinCreatorHeadline: "",
                textLitecoinCreatorSubheadline: "",
                textTeamHeadline: "",
                textTeamSubheadline: "",
                textVolunteerHeadline: "",
                textDonationHeadline: "",
                textDonationSubheadline: "",
                textDonationsSend: "",
                textFooterHeadline: "",
                textRepoHeadline: "",
                textSocialHeadline: "",
                textRepositories: "",
                textFooterSubheadline: ""
            },
            zhCN: {
                textAboutMenu: "",
                textTeamMenu: "",
                textDonationMenu: "",
                textSupportMenu: "",
                textHalvingPrefix: "",
                textHalvingSuffix: "", 
                textViewCountdown: "",
                textHeadline: "",
                textSubheadline: "",
                textYearCreated: "",
                textMarketPrice: "",
                textMarketCap: "",
                textCirculatingPrefixSuffix: "",
                textLearnHeader: "",
                textLitecoinDescription: "",
                textLitecoinDescriptionStyled: "",
                textZeroTitle: "",
                textMWEBTitle: "",
                textCheapTitle: "",
                textFastTitle: "",
                textZeroDetail: "",
                textMWEBDetail: "",
                textCheapDetail: "",
                textFastDetail: "",
                textPartnerHeadline: "",
                textBitrefillDetail: "",
                textMoonpayDetail: "",
                textSimplexDetail: "",
                textUDDetail: "",
                textLitecoinCreatorHeadline: "",
                textLitecoinCreatorSubheadline: "",
                textTeamHeadline: "",
                textTeamSubheadline: "",
                textVolunteerHeadline: "",
                textDonationHeadline: "",
                textDonationSubheadline: "",
                textDonationsSend: "",
                textFooterHeadline: "",
                textRepoHeadline: "",
                textSocialHeadline: "",
                textRepositories: "",
                textFooterSubheadline: ""
            },
            zhTW: {
                textAboutMenu: "",
                textTeamMenu: "",
                textDonationMenu: "",
                textSupportMenu: "",
                textHalvingPrefix: "",
                textHalvingSuffix: "", 
                textViewCountdown: "",
                textHeadline: "",
                textSubheadline: "",
                textYearCreated: "",
                textMarketPrice: "",
                textMarketCap: "",
                textCirculatingPrefixSuffix: "",
                textLearnHeader: "",
                textLitecoinDescription: "",
                textLitecoinDescriptionStyled: "",
                textZeroTitle: "",
                textMWEBTitle: "",
                textCheapTitle: "",
                textFastTitle: "",
                textZeroDetail: "",
                textMWEBDetail: "",
                textCheapDetail: "",
                textFastDetail: "",
                textPartnerHeadline: "",
                textBitrefillDetail: "",
                textMoonpayDetail: "",
                textSimplexDetail: "",
                textUDDetail: "",
                textLitecoinCreatorHeadline: "",
                textLitecoinCreatorSubheadline: "",
                textTeamHeadline: "",
                textTeamSubheadline: "",
                textVolunteerHeadline: "",
                textDonationHeadline: "",
                textDonationSubheadline: "",
                textDonationsSend: "",
                textFooterHeadline: "",
                textRepoHeadline: "",
                textSocialHeadline: "",
                textRepositories: "",
                textFooterSubheadline: ""
            },
            tr: {
                textAboutMenu: "Hakkında",
                textTeamMenu: "Takım",
                textDonationMenu: "Bağış",
                textSupportMenu: "Destek",
                textHalvingPrefix: "Yarıya iniyor ",
                textHalvingSuffix: " günde. ", 
                textViewCountdown: "Geri Sayımı Görüntüle",
                textHeadline: "Resmi Litecoin mobil cüzdanı",
                textSubheadline: "Bin günde yarıya iniyor.",
                textYearCreated: "Litecoin 2011'den beri hiç kesinti olmadan çalışıyor! Litewallet, Litecoin'i kullanmanın basit ve güvenli yollarını sunan Litecoin Vakfı tarafından desteklenen resmi cüzdandır.",
                textMarketPrice: "YARATILDIĞI YIL",
                textMarketCap: "MEVCUT PIYASA FIYATI",
                textCirculatingPrefixSuffix: "MEVCUT PIYASA DEĞERI",
                textLearnHeader: "Litecoin'in dolaşımdaki arzı ve maksimum arzı ",
                textLitecoinDescription: "Litecoin, işlem hacimleri ve likidite açısından en köklü ve istikrarlı kripto para birimlerinden biridir ve yaygın olarak bir değişim aracı olarak kullanılmaktadır.",
                textLitecoinDescriptionStyled: "Her yerde kullanılan gerçek bir para birimidir!",
                textZeroTitle: "Sıfır kesinti süresi",
                textMWEBTitle: "MWEB Uygulaması",
                textCheapTitle: "Ucuz ücretler",
                textFastTitle: "Hızlı işlemler",
                textZeroDetail: "Litecoin 2011 yılından bu yana güvenli, merkezi olmayan ve yenilikçi bir para birimi olarak kripto para dünyasına öncülük etmektedir.",
                textMWEBDetail: "MWEB cüzdan bakiyenizi gizli tutar. Bu, yabancılar cüzdanınızda ne olduğunu görmeden Litecoin göndermenize olanak tanır.",
                textCheapDetail: "Litecoin, göndermeyi inanılmaz derecede ucuz hale getirmek için tasarlandı. Ağ meşgulse, yine de çok ucuzdur... kuruşlar.",
                textFastDetail: "Litecoin, Bitcoin'in 5 TPS'lik işlem işleme hızından önemli ölçüde daha yüksek olan 54 TPS'lik bir işlem işleme hızına sahiptir.",
                textPartnerHeadline: "Litewallet'in kullanıcılarımıza daha fazla değer sunmasına yardımcı olan harika ortaklarımız var",
                textBitrefillDetail: "Kullanıcıların 'Kriptoda Yaşamasına' olanak tanıyan lider kripto e-ticaret mağazası.",
                textMoonpayDetail: "MoonPay 160'tan fazla ülkede aktiftir ve 300'den fazla lider cüzdan, web sitesi ve uygulama tarafından ödemeleri kabul etmek ve dolandırıcılığı önlemek için güvenilmektedir.",
                textSimplexDetail: "Güçlü. Kusursuz. Etkileyici. Sektör lideri olarak, milyonlarca insanın milyarlarca dolarlık dijital varlık satın almasını sağlamak için yüzlerce iş ortağımızı güçlendiriyoruz.",
                textUDDetail: "Dijital dünyada kimliğinize sahip çıkın. Bu sizin adınız. Ona sahip çıkın. Dijital dünyada kimliğinize sahip çıkın. Bir Web3 alan adı ile başlayın.",
                textLitecoinCreatorHeadline: "Google'dayken Charlie, Mike Hearn ile tanışarak ve ilk Bitcoin'ini alarak Bitcoin ile ilgilenmeye başladı. Ekim 2011'de Litecoin'i piyasaya sürdü. Misyonu dünyaya Litecoin'in faydalarını öğretmek olan kar amacı gütmeyen bir kuruluş olan Litecoin Vakfı'nı 2016 yılında kurdu.",
                textLitecoinCreatorSubheadline: "Litewallet ekibiyle yakın işbirliği içinde çalışan Charlie ve Kerry, kullanıcıların en çok istediği özellikleri sağlarken aktif kullanıcıları artırmanın yollarını tartışıyor. Litewallet ekibi, mütevazı bir bütçe ve birçok kripto türü sunan çok sayıda iyi finanse edilmiş rakip ile küreseldir.",
                textTeamHeadline: "Bu bir ekip çalışması",
                textTeamSubheadline: "Litewallet'ın bir tam zamanlı ekip lideri ve bir grup küresel gönüllüsü vardır. Kripto para bilginizi geliştirirken Litecoin alanı hakkında daha fazla bilgi edinmek ister misiniz?",
                textVolunteerHeadline: "Gönüllü olmak için başvurun",
                textDonationHeadline: "Bağışınızla Litecoin'in Geleceğini Güçlendirin",
                textDonationSubheadline: "Litewallet uygulama geliştiricilerine yapacağınız bağış, en yeni özelliklerin geliştirilmesine ve mümkün olanın sınırlarının zorlanmasına yardımcı olacaktır. İlerleme hediyesini verin ve ekibi şimdi destekleyin!",
                textDonationScan: "Vermek için tarayın!",
                textDonationsSend: "LTC'yi bu adrese gönderin:",
                textFooterHeadline: "Litewallet, Resmi Litecoin cüzdanı",
                textRepoHeadline: "Litewallet kodu açık kaynak kodludur ve kod tabanını korumak için Github kullanıyoruz.",
                textSocialHeadline: "Litewallet sosyal medya",
                textRepositories: "Depolar:",
                textFooterSubheadline: "En üste git"
            }
        };

        if (window.location.hash) {
                if (window.location.hash === "#en") { //#1
                    document.querySelector(".selected").innerText = "English";
                    textAboutMenu.textContent  = language.en.textAboutMenu;
                    textTeamMenu.textContent = language.en.textTeamMenu;
                    textDonationMenu.textContent = language.en.textDonationMenu;
                    textSupportMenu.textContent = language.en.textSupportMenu;
                    textHalvingPrefix.textContent = language.en.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.en.textHalvingSuffix;
                    textViewCountdown.textContent = language.en.textViewCountdown;
                    textHeadline.textContent = language.en.textHeadline;
                    textSubheadline.textContent = language.en.textSubheadline; 
                    textYearCreated.textContent = language.en.textYearCreated; 
                    textMarketPrice.textContent = language.en.textMarketPrice;  
                    textMarketCap.textContent  = language.en.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.en.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.en.textLearnHeader; 
                    textLitecoinDescription.textContent = language.en.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.en.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.en.textZeroTitle; 
                    textMWEBTitle.textContent = language.en.textMWEBTitle; 
                    textCheapTitle.textContent = language.en.textCheapTitle; 
                    textFastTitle.textContent = language.en.textFastTitle; 
                    textZeroDetail.textContent = language.en.textZeroDetail; 
                    textMWEBDetail.textContent = language.en.textMWEBDetail; 
                    textCheapDetail.textContent = language.en.textCheapDetail; 
                    textFastDetail.textContent = language.en.textFastDetail; 
                    textPartnerHeadline.textContent = language.en.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.en.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.en.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.en.textSimplexDetail; 
                    textUDDetail.textContent = language.en.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.en.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.en.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.en.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.en.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.en.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.en.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.en.textDonationSubheadline; 
                    textDonationsSend.textContent = language.en.textDonationsSend; 
                    textFooterHeadline.textContent = language.en.textFooterHeadline; 
                    textRepoHeadline.textContent = language.en.textRepoHeadline; 
                    textSocialHeadline.textContent = language.en.textSocialHeadline; 
                    textRepositories.textContent = language.en.textRepositories; 
                    textFooterSubheadline = language.en.textFooterSubheadline;  
                }
                else if(window.location.hash === "#id") { //#2
                    document.querySelector(".selected").innerText = "Bahasa Indonesia";
                    textAboutMenu.textContent  = language.id.textAboutMenu;
                    textTeamMenu.textContent = language.id.textTeamMenu;
                    textDonationMenu.textContent = language.id.textDonationMenu;
                    textSupportMenu.textContent = language.id.textSupportMenu;
                    textHalvingPrefix.textContent = language.id.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.id.textHalvingSuffix;
                    textViewCountdown.textContent = language.id.textViewCountdown;
                    textHeadline.textContent = language.id.textHeadline;
                    textSubheadline.textContent = language.id.textSubheadline; 
                    textYearCreated.textContent = language.id.textYearCreated; 
                    textMarketPrice.textContent = language.id.textMarketPrice;  
                    textMarketCap.textContent  = language.id.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.id.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.id.textLearnHeader; 
                    textLitecoinDescription.textContent = language.id.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.id.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.id.textZeroTitle; 
                    textMWEBTitle.textContent = language.id.textMWEBTitle; 
                    textCheapTitle.textContent = language.id.textCheapTitle; 
                    textFastTitle.textContent = language.id.textFastTitle; 
                    textZeroDetail.textContent = language.id.textZeroDetail; 
                    textMWEBDetail.textContent = language.id.textMWEBDetail; 
                    textCheapDetail.textContent = language.id.textCheapDetail; 
                    textFastDetail.textContent = language.id.textFastDetail; 
                    textPartnerHeadline.textContent = language.id.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.id.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.id.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.id.textSimplexDetail; 
                    textUDDetail.textContent = language.id.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.id.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.id.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.id.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.id.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.id.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.id.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.id.textDonationSubheadline; 
                    textDonationsSend.textContent = language.id.textDonationsSend; 
                    textFooterHeadline.textContent = language.id.textFooterHeadline; 
                    textRepoHeadline.textContent = language.id.textRepoHeadline; 
                    textSocialHeadline.textContent = language.id.textSocialHeadline; 
                    textRepositories.textContent = language.id.textRepositories; 
                    textFooterSubheadline = language.id.textFooterSubheadline;  
                }
                else if (window.location.hash === "#es") { //#3
                    document.querySelector(".selected").innerText = "Español";
                    textAboutMenu.textContent  = language.es.textAboutMenu;
                    textTeamMenu.textContent = language.es.textTeamMenu;
                    textDonationMenu.textContent = language.es.textDonationMenu;
                    textSupportMenu.textContent = language.es.textSupportMenu;
                    textHalvingPrefix.textContent = language.es.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.es.textHalvingSuffix;
                    textViewCountdown.textContent = language.es.textViewCountdown;
                    textHeadline.textContent = language.es.textHeadline;
                    textSubheadline.textContent = language.es.textSubheadline; 
                    textYearCreated.textContent = language.es.textYearCreated; 
                    textMarketPrice.textContent = language.es.textMarketPrice;  
                    textMarketCap.textContent  = language.es.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.es.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.es.textLearnHeader; 
                    textLitecoinDescription.textContent = language.es.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.es.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.es.textZeroTitle; 
                    textMWEBTitle.textContent = language.es.textMWEBTitle; 
                    textCheapTitle.textContent = language.es.textCheapTitle; 
                    textFastTitle.textContent = language.es.textFastTitle; 
                    textZeroDetail.textContent = language.es.textZeroDetail; 
                    textMWEBDetail.textContent = language.es.textMWEBDetail; 
                    textCheapDetail.textContent = language.es.textCheapDetail; 
                    textFastDetail.textContent = language.es.textFastDetail; 
                    textPartnerHeadline.textContent = language.es.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.es.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.es.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.es.textSimplexDetail; 
                    textUDDetail.textContent = language.es.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.es.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.es.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.es.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.es.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.es.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.es.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.es.textDonationSubheadline; 
                    textDonationsSend.textContent = language.es.textDonationsSend; 
                    textFooterHeadline.textContent = language.es.textFooterHeadline; 
                    textRepoHeadline.textContent = language.es.textRepoHeadline; 
                    textSocialHeadline.textContent = language.es.textSocialHeadline; 
                    textRepositories.textContent = language.es.textRepositories; 
                    textFooterSubheadline = language.es.textFooterSubheadline;  
                }
                else if (window.location.hash === "#pt") { //#4
                    document.querySelector(".selected").innerText = "Portuguese";
                    textAboutMenu.textContent  = language.pt.textAboutMenu;
                    textTeamMenu.textContent = language.pt.textTeamMenu;
                    textDonationMenu.textContent = language.pt.textDonationMenu;
                    textSupportMenu.textContent = language.pt.textSupportMenu;
                    textHalvingPrefix.textContent = language.pt.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.pt.textHalvingSuffix;
                    textViewCountdown.textContent = language.pt.textViewCountdown;
                    textHeadline.textContent = language.pt.textHeadline;
                    textSubheadline.textContent = language.pt.textSubheadline; 
                    textYearCreated.textContent = language.pt.textYearCreated; 
                    textMarketPrice.textContent = language.pt.textMarketPrice;  
                    textMarketCap.textContent  = language.pt.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.pt.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.pt.textLearnHeader; 
                    textLitecoinDescription.textContent = language.pt.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.pt.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.pt.textZeroTitle; 
                    textMWEBTitle.textContent = language.pt.textMWEBTitle; 
                    textCheapTitle.textContent = language.pt.textCheapTitle; 
                    textFastTitle.textContent = language.pt.textFastTitle; 
                    textZeroDetail.textContent = language.pt.textZeroDetail; 
                    textMWEBDetail.textContent = language.pt.textMWEBDetail; 
                    textCheapDetail.textContent = language.pt.textCheapDetail; 
                    textFastDetail.textContent = language.pt.textFastDetail; 
                    textPartnerHeadline.textContent = language.pt.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.pt.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.pt.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.pt.textSimplexDetail; 
                    textUDDetail.textContent = language.pt.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.pt.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.pt.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.pt.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.pt.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.pt.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.pt.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.pt.textDonationSubheadline; 
                    textDonationsSend.textContent = language.pt.textDonationsSend; 
                    textFooterHeadline.textContent = language.pt.textFooterHeadline; 
                    textRepoHeadline.textContent = language.pt.textRepoHeadline; 
                    textSocialHeadline.textContent = language.pt.textSocialHeadline; 
                    textRepositories.textContent = language.pt.textRepositories; 
                    textFooterSubheadline = language.pt.textFooterSubheadline;  
                }
                else if (window.location.hash === "#uk") { //#5
                    document.querySelector(".selected").innerText = "українська";
                    textAboutMenu.textContent  = language.uk.textAboutMenu;
                    textTeamMenu.textContent = language.uk.textTeamMenu;
                    textDonationMenu.textContent = language.uk.textDonationMenu;
                    textSupportMenu.textContent = language.uk.textSupportMenu;
                    textHalvingPrefix.textContent = language.uk.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.uk.textHalvingSuffix;
                    textViewCountdown.textContent = language.uk.textViewCountdown;
                    textHeadline.textContent = language.uk.textHeadline;
                    textSubheadline.textContent = language.uk.textSubheadline; 
                    textYearCreated.textContent = language.uk.textYearCreated; 
                    textMarketPrice.textContent = language.uk.textMarketPrice;  
                    textMarketCap.textContent  = language.uk.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.uk.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.uk.textLearnHeader; 
                    textLitecoinDescription.textContent = language.uk.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.uk.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.uk.textZeroTitle; 
                    textMWEBTitle.textContent = language.uk.textMWEBTitle; 
                    textCheapTitle.textContent = language.uk.textCheapTitle; 
                    textFastTitle.textContent = language.uk.textFastTitle; 
                    textZeroDetail.textContent = language.uk.textZeroDetail; 
                    textMWEBDetail.textContent = language.uk.textMWEBDetail; 
                    textCheapDetail.textContent = language.uk.textCheapDetail; 
                    textFastDetail.textContent = language.uk.textFastDetail; 
                    textPartnerHeadline.textContent = language.uk.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.uk.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.uk.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.uk.textSimplexDetail; 
                    textUDDetail.textContent = language.uk.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.uk.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.uk.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.uk.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.uk.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.uk.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.uk.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.uk.textDonationSubheadline; 
                    textDonationsSend.textContent = language.uk.textDonationsSend; 
                    textFooterHeadline.textContent = language.uk.textFooterHeadline; 
                    textRepoHeadline.textContent = language.uk.textRepoHeadline; 
                    textSocialHeadline.textContent = language.uk.textSocialHeadline; 
                    textRepositories.textContent = language.uk.textRepositories; 
                    textFooterSubheadline = language.uk.textFooterSubheadline;  
                } 
                else if (window.location.hash === "#ru") { //#6
                    document.querySelector(".selected").innerText = "Русский";
                    textAboutMenu.textContent  = language.ru.textAboutMenu;
                    textTeamMenu.textContent = language.ru.textTeamMenu;
                    textDonationMenu.textContent = language.ru.textDonationMenu;
                    textSupportMenu.textContent = language.ru.textSupportMenu;
                    textHalvingPrefix.textContent = language.ru.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.ru.textHalvingSuffix;
                    textViewCountdown.textContent = language.ru.textViewCountdown;
                    textHeadline.textContent = language.ru.textHeadline;
                    textSubheadline.textContent = language.ru.textSubheadline; 
                    textYearCreated.textContent = language.ru.textYearCreated; 
                    textMarketPrice.textContent = language.ru.textMarketPrice;  
                    textMarketCap.textContent  = language.ru.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.ru.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.ru.textLearnHeader; 
                    textLitecoinDescription.textContent = language.ru.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.ru.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.ru.textZeroTitle; 
                    textMWEBTitle.textContent = language.ru.textMWEBTitle; 
                    textCheapTitle.textContent = language.ru.textCheapTitle; 
                    textFastTitle.textContent = language.ru.textFastTitle; 
                    textZeroDetail.textContent = language.ru.textZeroDetail; 
                    textMWEBDetail.textContent = language.ru.textMWEBDetail; 
                    textCheapDetail.textContent = language.ru.textCheapDetail; 
                    textFastDetail.textContent = language.ru.textFastDetail; 
                    textPartnerHeadline.textContent = language.ru.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.ru.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.ru.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.ru.textSimplexDetail; 
                    textUDDetail.textContent = language.ru.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.ru.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.ru.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.ru.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.ru.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.ru.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.ru.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.ru.textDonationSubheadline; 
                    textDonationsSend.textContent = language.ru.textDonationsSend; 
                    textFooterHeadline.textContent = language.ru.textFooterHeadline; 
                    textRepoHeadline.textContent = language.ru.textRepoHeadline; 
                    textSocialHeadline.textContent = language.ru.textSocialHeadline; 
                    textRepositories.textContent = language.ru.textRepositories; 
                    textFooterSubheadline = language.ru.textFooterSubheadline;  
                }  
                else if (window.location.hash === "#fr") { //#7
                    document.querySelector(".selected").innerText = "Français";
                    textAboutMenu.textContent  = language.fr.textAboutMenu;
                    textTeamMenu.textContent = language.fr.textTeamMenu;
                    textDonationMenu.textContent = language.fr.textDonationMenu;
                    textSupportMenu.textContent = language.fr.textSupportMenu;
                    textHalvingPrefix.textContent = language.fr.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.fr.textHalvingSuffix;
                    textViewCountdown.textContent = language.fr.textViewCountdown;
                    textHeadline.textContent = language.fr.textHeadline;
                    textSubheadline.textContent = language.fr.textSubheadline; 
                    textYearCreated.textContent = language.fr.textYearCreated; 
                    textMarketPrice.textContent = language.fr.textMarketPrice;  
                    textMarketCap.textContent  = language.fr.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.fr.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.fr.textLearnHeader; 
                    textLitecoinDescription.textContent = language.fr.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.fr.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.fr.textZeroTitle; 
                    textMWEBTitle.textContent = language.fr.textMWEBTitle; 
                    textCheapTitle.textContent = language.fr.textCheapTitle; 
                    textFastTitle.textContent = language.fr.textFastTitle; 
                    textZeroDetail.textContent = language.fr.textZeroDetail; 
                    textMWEBDetail.textContent = language.fr.textMWEBDetail; 
                    textCheapDetail.textContent = language.fr.textCheapDetail; 
                    textFastDetail.textContent = language.fr.textFastDetail; 
                    textPartnerHeadline.textContent = language.fr.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.fr.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.fr.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.fr.textSimplexDetail; 
                    textUDDetail.textContent = language.fr.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.fr.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.fr.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.fr.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.fr.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.fr.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.fr.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.fr.textDonationSubheadline; 
                    textDonationsSend.textContent = language.fr.textDonationsSend; 
                    textFooterHeadline.textContent = language.fr.textFooterHeadline; 
                    textRepoHeadline.textContent = language.fr.textRepoHeadline; 
                    textSocialHeadline.textContent = language.fr.textSocialHeadline; 
                    textRepositories.textContent = language.fr.textRepositories; 
                    textFooterSubheadline = language.fr.textFooterSubheadline;  
                }
                else if (window.location.hash === "#de") { //#8
                    document.querySelector(".selected").innerText = "Deutsch";
                    textAboutMenu.textContent  = language.de.textAboutMenu;
                    textTeamMenu.textContent = language.de.textTeamMenu;
                    textDonationMenu.textContent = language.de.textDonationMenu;
                    textSupportMenu.textContent = language.de.textSupportMenu;
                    textHalvingPrefix.textContent = language.de.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.de.textHalvingSuffix;
                    textViewCountdown.textContent = language.de.textViewCountdown;
                    textHeadline.textContent = language.de.textHeadline;
                    textSubheadline.textContent = language.de.textSubheadline; 
                    textYearCreated.textContent = language.de.textYearCreated; 
                    textMarketPrice.textContent = language.de.textMarketPrice;  
                    textMarketCap.textContent  = language.de.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.de.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.de.textLearnHeader; 
                    textLitecoinDescription.textContent = language.de.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.de.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.de.textZeroTitle; 
                    textMWEBTitle.textContent = language.de.textMWEBTitle; 
                    textCheapTitle.textContent = language.de.textCheapTitle; 
                    textFastTitle.textContent = language.de.textFastTitle; 
                    textZeroDetail.textContent = language.de.textZeroDetail; 
                    textMWEBDetail.textContent = language.de.textMWEBDetail; 
                    textCheapDetail.textContent = language.de.textCheapDetail; 
                    textFastDetail.textContent = language.de.textFastDetail; 
                    textPartnerHeadline.textContent = language.de.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.de.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.de.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.de.textSimplexDetail; 
                    textUDDetail.textContent = language.de.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.de.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.de.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.de.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.de.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.de.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.de.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.de.textDonationSubheadline; 
                    textDonationsSend.textContent = language.de.textDonationsSend; 
                    textFooterHeadline.textContent = language.de.textFooterHeadline; 
                    textRepoHeadline.textContent = language.de.textRepoHeadline; 
                    textSocialHeadline.textContent = language.de.textSocialHeadline; 
                    textRepositories.textContent = language.de.textRepositories; 
                    textFooterSubheadline = language.de.textFooterSubheadline;  
                }
                else if (window.location.hash === "#zhCN") { //#9
                    document.querySelector(".selected").innerText = "中国人";
                    textAboutMenu.textContent  = language.zhCN.textAboutMenu;
                    textTeamMenu.textContent = language.zhCN.textTeamMenu;
                    textDonationMenu.textContent = language.zhCN.textDonationMenu;
                    textSupportMenu.textContent = language.zhCN.textSupportMenu;
                    textHalvingPrefix.textContent = language.zhCN.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.zhCN.textHalvingSuffix;
                    textViewCountdown.textContent = language.zhCN.textViewCountdown;
                    textHeadline.textContent = language.zhCN.textHeadline;
                    textSubheadline.textContent = language.zhCN.textSubheadline; 
                    textYearCreated.textContent = language.zhCN.textYearCreated; 
                    textMarketPrice.textContent = language.zhCN.textMarketPrice;  
                    textMarketCap.textContent  = language.zhCN.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.zhCN.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.zhCN.textLearnHeader; 
                    textLitecoinDescription.textContent = language.zhCN.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.zhCN.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.zhCN.textZeroTitle; 
                    textMWEBTitle.textContent = language.zhCN.textMWEBTitle; 
                    textCheapTitle.textContent = language.zhCN.textCheapTitle; 
                    textFastTitle.textContent = language.zhCN.textFastTitle; 
                    textZeroDetail.textContent = language.zhCN.textZeroDetail; 
                    textMWEBDetail.textContent = language.zhCN.textMWEBDetail; 
                    textCheapDetail.textContent = language.zhCN.textCheapDetail; 
                    textFastDetail.textContent = language.zhCN.textFastDetail; 
                    textPartnerHeadline.textContent = language.zhCN.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.zhCN.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.zhCN.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.zhCN.textSimplexDetail; 
                    textUDDetail.textContent = language.zhCN.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.zhCN.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.zhCN.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.zhCN.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.zhCN.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.zhCN.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.zhCN.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.zhCN.textDonationSubheadline; 
                    textDonationsSend.textContent = language.zhCN.textDonationsSend; 
                    textFooterHeadline.textContent = language.zhCN.textFooterHeadline; 
                    textRepoHeadline.textContent = language.zhCN.textRepoHeadline; 
                    textSocialHeadline.textContent = language.zhCN.textSocialHeadline; 
                    textRepositories.textContent = language.zhCN.textRepositories; 
                    textFooterSubheadline = language.zhCN.textFooterSubheadline;  
                }
                else if (window.location.hash === "#zhTW") { //#10
                    document.querySelector(".selected").innerText = "中國人";
                    textAboutMenu.textContent  = language.zhTW.textAboutMenu;
                    textTeamMenu.textContent = language.zhTW.textTeamMenu;
                    textDonationMenu.textContent = language.zhTW.textDonationMenu;
                    textSupportMenu.textContent = language.zhTW.textSupportMenu;
                    textHalvingPrefix.textContent = language.zhTW.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.zhTW.textHalvingSuffix;
                    textViewCountdown.textContent = language.zhTW.textViewCountdown;
                    textHeadline.textContent = language.zhTW.textHeadline;
                    textSubheadline.textContent = language.zhTW.textSubheadline; 
                    textYearCreated.textContent = language.zhTW.textYearCreated; 
                    textMarketPrice.textContent = language.zhTW.textMarketPrice;  
                    textMarketCap.textContent  = language.zhTW.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.zhTW.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.zhTW.textLearnHeader; 
                    textLitecoinDescription.textContent = language.zhTW.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.zhTW.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.zhTW.textZeroTitle; 
                    textMWEBTitle.textContent = language.zhTW.textMWEBTitle; 
                    textCheapTitle.textContent = language.zhTW.textCheapTitle; 
                    textFastTitle.textContent = language.zhTW.textFastTitle; 
                    textZeroDetail.textContent = language.zhTW.textZeroDetail; 
                    textMWEBDetail.textContent = language.zhTW.textMWEBDetail; 
                    textCheapDetail.textContent = language.zhTW.textCheapDetail; 
                    textFastDetail.textContent = language.zhTW.textFastDetail; 
                    textPartnerHeadline.textContent = language.zhTW.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.zhTW.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.zhTW.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.zhTW.textSimplexDetail; 
                    textUDDetail.textContent = language.zhTW.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.zhTW.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.zhTW.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.zhTW.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.zhTW.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.zhTW.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.zhTW.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.zhTW.textDonationSubheadline; 
                    textDonationsSend.textContent = language.zhTW.textDonationsSend; 
                    textFooterHeadline.textContent = language.zhTW.textFooterHeadline; 
                    textRepoHeadline.textContent = language.zhTW.textRepoHeadline; 
                    textSocialHeadline.textContent = language.zhTW.textSocialHeadline; 
                    textRepositories.textContent = language.zhTW.textRepositories; 
                    textFooterSubheadline = language.zhTW.textFooterSubheadline;  
                }
                else if (window.location.hash === "#ko") { //#11
                    document.querySelector(".selected").innerText = "한국인";
                    textAboutMenu.textContent  = language.ko.textAboutMenu;
                    textTeamMenu.textContent = language.ko.textTeamMenu;
                    textDonationMenu.textContent = language.ko.textDonationMenu;
                    textSupportMenu.textContent = language.ko.textSupportMenu;
                    textHalvingPrefix.textContent = language.ko.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.ko.textHalvingSuffix;
                    textViewCountdown.textContent = language.ko.textViewCountdown;
                    textHeadline.textContent = language.ko.textHeadline;
                    textSubheadline.textContent = language.ko.textSubheadline; 
                    textYearCreated.textContent = language.ko.textYearCreated; 
                    textMarketPrice.textContent = language.ko.textMarketPrice;  
                    textMarketCap.textContent  = language.ko.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.ko.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.ko.textLearnHeader; 
                    textLitecoinDescription.textContent = language.ko.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.ko.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.ko.textZeroTitle; 
                    textMWEBTitle.textContent = language.ko.textMWEBTitle; 
                    textCheapTitle.textContent = language.ko.textCheapTitle; 
                    textFastTitle.textContent = language.ko.textFastTitle; 
                    textZeroDetail.textContent = language.ko.textZeroDetail; 
                    textMWEBDetail.textContent = language.ko.textMWEBDetail; 
                    textCheapDetail.textContent = language.ko.textCheapDetail; 
                    textFastDetail.textContent = language.ko.textFastDetail; 
                    textPartnerHeadline.textContent = language.ko.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.ko.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.ko.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.ko.textSimplexDetail; 
                    textUDDetail.textContent = language.ko.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.ko.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.ko.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.ko.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.ko.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.ko.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.ko.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.ko.textDonationSubheadline; 
                    textDonationsSend.textContent = language.ko.textDonationsSend; 
                    textFooterHeadline.textContent = language.ko.textFooterHeadline; 
                    textRepoHeadline.textContent = language.ko.textRepoHeadline; 
                    textSocialHeadline.textContent = language.ko.textSocialHeadline; 
                    textRepositories.textContent = language.ko.textRepositories; 
                    textFooterSubheadline = language.ko.textFooterSubheadline;  
                } 
                else if(window.location.hash === "#tr") { //#12
                    document.querySelector(".selected").innerText = "Türkçe";
                    textAboutMenu.textContent  = language.tr.textAboutMenu;
                    textTeamMenu.textContent = language.tr.textTeamMenu;
                    textDonationMenu.textContent = language.tr.textDonationMenu;
                    textSupportMenu.textContent = language.tr.textSupportMenu;
                    textHalvingPrefix.textContent = language.tr.textHalvingPrefix;
                    textHalvingSuffix.textContent = language.tr.textHalvingSuffix;
                    textViewCountdown.textContent = language.tr.textViewCountdown;
                    textHeadline.textContent = language.tr.textHeadline;
                    textSubheadline.textContent = language.tr.textSubheadline; 
                    textYearCreated.textContent = language.tr.textYearCreated; 
                    textMarketPrice.textContent = language.tr.textMarketPrice;  
                    textMarketCap.textContent  = language.tr.textMarketCap; 
                    textCirculatingPrefixSuffix.textContent = language.tr.textCirculatingPrefixSuffix; 
                    textLearnHeader.textContent = language.tr.textLearnHeader; 
                    textLitecoinDescription.textContent = language.tr.textLitecoinDescription; 
                    textLitecoinDescriptionStyled.textContent = language.tr.textLitecoinDescriptionStyled; 
                    textZeroTitle.textContent = language.tr.textZeroTitle; 
                    textMWEBTitle.textContent = language.tr.textMWEBTitle; 
                    textCheapTitle.textContent = language.tr.textCheapTitle; 
                    textFastTitle.textContent = language.tr.textFastTitle; 
                    textZeroDetail.textContent = language.tr.textZeroDetail; 
                    textMWEBDetail.textContent = language.tr.textMWEBDetail; 
                    textCheapDetail.textContent = language.tr.textCheapDetail; 
                    textFastDetail.textContent = language.tr.textFastDetail; 
                    textPartnerHeadline.textContent = language.tr.textPartnerHeadline; 
                    textBitrefillDetail.textContent = language.tr.textBitrefillDetail; 
                    textMoonpayDetail.textContent = language.tr.textMoonpayDetail; 
                    textSimplexDetail.textContent = language.tr.textSimplexDetail; 
                    textUDDetail.textContent = language.tr.textUDDetail; 
                    textLitecoinCreatorHeadline.textContent = language.tr.textLitecoinCreatorHeadline; 
                    textLitecoinCreatorSubheadline.textContent = language.tr.textLitecoinCreatorSubheadline; 
                    textTeamHeadline.textContent = language.tr.textTeamHeadline; 
                    textTeamSubheadline.textContent = language.tr.textTeamSubheadline; 
                    textVolunteerHeadline.textContent = language.tr.textVolunteerHeadline; 
                    textDonationHeadline.textContent = language.tr.textDonationHeadline; 
                    textDonationSubheadline.textContent = language.tr.textDonationSubheadline; 
                    textDonationsSend.textContent = language.tr.textDonationsSend; 
                    textFooterHeadline.textContent = language.tr.textFooterHeadline; 
                    textRepoHeadline.textContent = language.tr.textRepoHeadline; 
                    textSocialHeadline.textContent = language.tr.textSocialHeadline; 
                    textRepositories.textContent = language.tr.textRepositories; 
                    textFooterSubheadline = language.tr.textFooterSubheadline;  
                }
            }

        // get all dropdowns
        const dropdownItems = document.querySelectorAll('.dropdown');

        // iterate all dropdown elements
        dropdownItems.forEach(el => {
            // get inner elements of each dropdown
            const select = el.querySelector('.select');
            const caret = el.querySelector('.caret');
            const menuDropdown = el.querySelector('.menu-dropdown');
            const selected = el.querySelector('.selected');
            const options = el.querySelectorAll('.menu-dropdown li');
            
            // click event for the select element
            select.addEventListener('click', () => {
                // add the styles to caret, and menu dropdown
                caret.classList.toggle('caret-rotate');
                menuDropdown.classList.toggle('menu-dropdown-open');
            });

            // iterate through all option elements
            options.forEach(option => {
                // click event for each option
                option.addEventListener('click', () => {
                    // remove styles to the select element, caret, 
                    // menu dropdown, and active class from all option elements
                    select.classList.remove('select-clicked');
                    caret.classList.remove('caret-rotate');
                    menuDropdown.classList.remove('menu-dropdown-open');
                    options.forEach(option => {
                        option.classList.remove('active');
                    });
                    // add active class to clicked option element
                    option.classList.add('active');
                    location.hash = option.getAttribute("data-lang");
	                location.reload();
                    
                });
            });
        });