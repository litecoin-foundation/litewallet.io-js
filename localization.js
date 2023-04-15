// localization.js
// This code loads of the text for every text element given a certain language

// Define the language reload anchors
    var language = {
            en: {
                textAboutMenu: "About",
                textTeamMenu: "Team",
                textDonationMenu: "Donation",
                textSupportMenu: "Support",
                textHalvingPrefix: "Halving in",
                textHalvingSuffix: "days", 
                textViewCountdown: "View Countdown",
                textHeadline: "The Official Litecoin mobile wallet",
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
                textMWEBDetail: "MWEB keeps your wallet balance hidden. This allows you to send Litecoin without strangers seeing whats in your wallet.",
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
                textSupportMenu: "Dukung Kami",
                textHalvingPrefix: "Membagi dua",
                textHalvingSuffix: "hari", 
                textViewCountdown: "Lihat hitungan mundur",
                textHeadline: "Dompet Litecoin resmi untuk Smartphone",
                textSubheadline: "Litecoin telah beroperasi sejak 2011 tanpa downtime! Litewallet adalah dompet resmi yang didukung oleh Litecoin Foundation yang menawarkan cara sederhana dan aman untuk menggunakan Litecoin.",
                textYearCreated: "",
                textMarketPrice: "",
                textMarketCap: "",
                textCirculatingPrefixSuffix: "Litecoin has a circulating supply of and a max. supply of ", 
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
                textFooterSubheadline: "",
            },
            fr: {
                textAboutMenu: "À propos",
                textTeamMenu: "Équipe",
                textDonationMenu: "Don",
                textSupportMenu: "Soutien",
                textHalvingPrefix: "Réduire de moitié",
                textHalvingSuffix: "jours", 
                textViewCountdown: "Afficher le compte à rebours",
                textHeadline: "Le portefeuille mobile Litecoin officiel",
                textSubheadline: "Litecoin est opérationnel depuis 2011 sans temps d'arrêt ! Litewallet est le portefeuille officiel soutenu par la Fondation Litecoin qui offre des moyens simples et sûrs d'utiliser Litecoin.",
                textYearCreated: "ANNÉE DE CRÉATION",
                textMarketPrice: "PRIX ACTUEL DU MARCHÉ",
                textMarketCap: "CAPACITÉ DE MARCHÉ ACTUELLE",
                textCirculatingPrefixSuffix: "Litecoin a une offre en circulation de et un max. fourniture de",
                textLearnHeader: "En savoir plus sur le Litecoin",
                textLitecoinDescription: "Litecoin est l'une des crypto-monnaies les plus établies et les plus stables en termes de volumes de transactions et de liquidité, et est couramment utilisée comme moyen d'échange.",
                textLitecoinDescriptionStyled: "C'est une véritable monnaie utilisée partout!",
                textZeroTitle: "Zéro temps d'arrêt",
                textMWEBTitle: "Implémentation MWEB",
                textCheapTitle: "Prix ​​pas cher",
                textFastTitle: "Transactions rapides",
                textZeroDetail: "Depuis 2011, Litecoin est à la tête de l'espace des crypto-monnaies en tant que monnaie sécurisée, décentralisée et innovante.",
                textMWEBDetail: "MWEB garde le solde de votre portefeuille caché. Cela vous permet d'envoyer des Litecoins sans que des étrangers ne voient ce qu'il y a dans votre portefeuille.",
                textCheapDetail: "Litecoin a été conçu pour le rendre incroyablement bon marché à envoyer. Si le réseau est occupé, c'est encore très bon marché... des sous.",
                textFastDetail: "Litecoin a une vitesse de traitement des transactions de 54 TPS, ce qui est nettement supérieur à la vitesse de traitement des transactions de Bitcoin de 5 TPS.",
                textPartnerHeadline: "Nous avons d'excellents partenaires qui aident Litewallet à offrir plus de valeur à nos utilisateurs",
                textBitrefillDetail: "Principal magasin de commerce électronique crypto qui permet aux utilisateurs de 'vivre sur Crypto'.",
                textMoonpayDetail: "MoonPay est actif dans plus de 160 pays et bénéficie de la confiance de plus de 300 portefeuilles, sites Web et applications de premier plan pour accepter les paiements et lutter contre la fraude.",
                textSimplexDetail: "Puissant. Transparent. Impactant. En tant que leader du secteur, nous donnons à des centaines de partenaires les moyens de permettre à des millions de personnes d'acheter des milliards de dollars d'actifs numériques.",
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
                textFooterSubheadline: "",
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
            ko: {
                textAboutMenu: "에 대한",
                textTeamMenu: "팀",
                textDonationMenu: "기부",
                textSupportMenu: "지원하다",
                textHalvingPrefix: "반감",
                textHalvingSuffix: "날", 
                textViewCountdown: "카운트다운 보기",
                textHeadline: "공식 Litecoin 모바일 지갑",
                textHalving: "000일 후 반감기",
 		        textSubheadline: "Litecoin은 2011년부터 다운타임 없이 운영되었습니다! Litewallet은 Litecoin Foundation에서 지원하는 공식 지갑으로 Litecoin을 간단하고 안전하게 사용할 수 있는 방법을 제공합니다.",
                textYearCreated: "만든 연도",
                textMarketPrice: "현재 시장 가격",
                textMarketCap: "현재 시가 총액",
                textCirculatingPrefixSuffix: "Litecoin의 순환 공급량은 최대입니다. 공급",
                textLearnHeader: "라이트코인에 대해 자세히 알아보기",
                textLitecoinDescription: "Litecoin은 거래량과 유동성 측면에서 가장 확립되고 안정적인 암호화폐 중 하나이며 일반적으로 교환 수단으로 사용됩니다.",
                textLitecoinDescriptionStyled: "어디에서나 사용되는 진짜 화폐입니다!",
                textZeroTitle: "제로 다운타임",
                textMWEBTitle: "MWEB 구현",
                textCheapTitle: "저렴한 수수료",
                textFastTitle: "빠른 거래",
                textZeroDetail: "2011년부터 Litecoin은 안전하고 분산된 혁신적인 통화로서 암호화폐 공간을 이끌어 왔습니다.",
                textMWEBDetail: "MWEB는 지갑 잔액을 비밀로 유지합니다. 이를 통해 낯선 사람이 지갑에 있는 것을 보지 않고 Litecoin을 보낼 수 있습니다.",
                textCheapDetail: "Litecoin은 전송 비용이 엄청나게 저렴하도록 설계되었습니다. 네트워크가 바쁘더라도 여전히 매우 저렴합니다.",
                textFastDetail: "Litecoin은 54TPS의 트랜잭션 처리 속도를 가지며 이는 Bitcoin의 트랜잭션 처리 속도인 5TPS보다 훨씬 빠릅니다.",
                textPartnerHeadline: "Litewallet이 사용자에게 더 많은 가치를 제공하도록 돕는 훌륭한 파트너가 있습니다.",
                textBitrefillDetail: "사용자가 'Live on Crypto'를 허용하는 선도적인 암호화 전자 상거래 스토어입니다.",
                textMoonpayDetail: "MoonPay는 160개 이상의 국가에서 활동하고 있으며 300개 이상의 주요 지갑, 웹사이트 및 애플리케이션에서 결제를 수락하고 사기를 방지하는 것으로 신뢰받고 있습니다.",
                textSimplexDetail: "강한. 원활한. 임팩트 있는 업계 리더로서 수백 명의 파트너가 수백만 명의 사람들이 수십억 달러의 디지털 자산을 구매할 수 있도록 지원합니다.",
                textUDDetail: "디지털 세계에서 자신의 정체성을 소유하십시오. 그것은 당신의 이름입니다. 그것을 소유하십시오. 디지털 세계에서 자신의 정체성을 소유하십시오. Web3 도메인으로 시작하세요.",
                textLitecoinCreatorHeadline: "Google에 있는 동안 Charlie는 Bitcoin이 Mike Hen을 만나고 첫 번째 Bitcoin을 얻는 데 관심을 갖게 되었습니다. 그는 2011년 10월에 라이트코인을 시작했습니다. 그는 2016년에 라이트코인의 이점을 전 세계에 알리는 것을 사명으로 하는 비영리 조직인 라이트코인 재단을 설립했습니다.",
                textLitecoinCreatorSubheadline: "Litewallet 팀과 긴밀히 협력하여 Charlie와 Kerry는 활성 사용자를 늘리는 동시에 사용자가 가장 원하는 기능을 제공하는 방법에 대해 논의합니다. Litewallet 팀은 적당한 예산과 다양한 유형의 암호 화폐를 제공하는 충분한 자금이 있는 많은 경쟁업체를 통해 전 세계적으로 활동하고 있습니다.",
                textTeamHeadline: "팀의 노력입니다",
                textTeamSubheadline: "Litewallet에는 풀타임 팀 리더 한 명과 글로벌 자원봉사자 그룹이 있습니다. cryptocurrency에 대한 지식을 향상시키면서 Litecoin 공간에 대해 더 많이 배우고 싶습니까?",
                textVolunteerHeadline: "자원 봉사자가되기 위해 신청하십시오",
                textDonationHeadline: "당신의 기부로 Litecoin의 미래에 힘을 실어주세요",
                textDonationSubheadline: "Litewallet 앱 개발자에 대한 우리의 기부는 최첨단 기능의 개발을 촉진하고 가능한 것의 경계를 넓히는 데 도움이 될 것입니다. 발전의 선물을 주고 지금 팀을 지원하세요!",
                textDonationScan: "스캔하여 선물하세요!",
		        textDonationsSend: "다음 주소로 LTC를 보내십시오:",
                textFooterHeadline: "Litewallet, 라이트코인 공식 지갑",
                textRepoHeadline: "Litewallet 코드는 오픈 소스이며 코드베이스를 유지하기 위해 Github를 사용합니다.",
                textSocialHeadline: "라이트월렛 소셜",
                textRepositories: "리포지토리:",
                textFooterSubheadline: "맨 위로 이동"
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