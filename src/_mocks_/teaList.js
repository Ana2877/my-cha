import { mockImgTea } from '../utils/mockImages';

const TEAS = [
  {
    id: 1,
    name: 'Camomila',
    description:
      'Quem sofre com insônia e ansiedade pode se beneficiar ao tomar uma infusão de camomila antes de deitar. A planta contém uma substância que exerce um efeito calmante no sistema nervoso, ajudando a dormir. Ela é bastante indicada para acalmar, diminuir a ansiedade e aliviar o estresse. A camomila também alivia sintomas relacionados a inflamações e auxilia no tratamento de problemas estomacais, ajuda na má digestão e a tratar as úlceras no estômago. É também utilizada para aliviar enjoos e cólicas menstruais. Entre as suas propriedades destaca-se a sua ação anti-inflamatória, antioxidante e cicatrizante. Além de apresentar diversos nutrientes, como vitamina A e minerais como potássio, cálcio, sódio, magnésio, ferro e zinco.',
    image: mockImgTea('Camomila')
  },
  {
    id: 2,
    name: 'Hibisco',
    description:
      'As flores de hibisco possuem um aroma agradável e dão origem a uma bebida que é bastante consumida por quem deseja diminuir a retenção de líquidos. Esse benefício ocorre devido a sua ação diurética e por ter ação antioxidante e anti-inflamatória. Mas, essas flores também se destacam por ajudar na diminuição da pressão arterial. Pesquisas mostram que o consumo de chá de hibisco favorece quem sofre com esse problema devido à presença de antocianinas. Além disso, os compostos antioxidantes do hibisco inibem a formação de radicais livres, combatendo o envelhecimento celular. E quem precisa controlar o colesterol ou as taxas de glicose no sangue são beneficiados com esse tipo de infusão. O hibisco possui ainda vitaminas, cálcio, ferro, fósforo, potássio, magnésio e licopeno.',
    image: mockImgTea('Hibisco')
  },
  {
    id: 3,
    name: 'Mate',
    description:
      'A erva-mate é nativa do Brasil, Argentina e Paraguai e também é bastante consumida em algumas regiões do país como chimarrão ou tererê (mate gelado). Possui vitaminas, cafeína e sais minerais, além de xantinas que são responsáveis pela ação diurética da planta. Entre os benefícios estão o aumento de energia e a redução o nível de açúcar no sangue. Além disso, a erva-mate diminui o colesterol "ruim" e aumenta o "bom", reduzindo o risco de problemas cardiovasculares. Isso ocorre porque possui alta concentração de compostos bioativos, como as saponinas, que apresentam uma ação contra o colesterol. Essa erva possui ação antioxidante por conta da presença dos polifenóis, combate os radicais livres e melhora as funções do fígado e a digestão. Aumenta a energia e o foco mental por conta da cafeína, melhora o desempenho físico e reduz o nível de açúcar no sangue.',
    image: mockImgTea('Mate')
  },
  {
    id: 4,
    name: 'Hortelã',
    description:
      'Com um sabor bastante agradável, a infusão de hortelã também proporciona vários benefícios à saúde. Ela pode ser benéfica para o estômago e digestão, já que ajuda a equilibrar a produção e concentração de ácido estomacal e das enzimas digestivas que são essenciais para a apreensão de nutrientes. Por isso, é recomendada para ajudar na cicatrização da mucosa gástrica e intestinal. A bebida também reduz os sintomas de flatulências ao diminuir os movimentos peristálticos do intestino. O mentol presente na hortelã se destaca pela ação expectorante, aliviando tosses e congestão nasal. As folhas contêm ainda antioxidantes que melhoram a memória me a capacidade de aprendizado. A hortelã também possui vitaminas A, B6, C, E, K , ácido fólico e riboflavina. Tem ação antibacteriana, antifúngica e anti-inflamatória.',
    image: mockImgTea('Hortela')
  },
  {
    id: 5,
    name: 'Chá Verde',
    description:
      'Nativo da China e da Índia, o chá verde é produzido a partir das folhas da planta Camellia sinensis e é bastante consumido por quem quer emagrecer, apesar de ser um pouco amargo. Possui antioxidantes, cafeína, aminoácidos, vitaminas B, E, C, cálcio, magnésio, zinco, potássio e ferro. A presença da cafeína e catequinas têm efeito termogênico, o que acelera o metabolismo, fazendo com que o organismo gaste mais energia. O consumo da bebida também facilita a digestão, regula o intestino e combate a retenção de líquidos no organismo. Algumas substâncias do chá verde fazem bem para o cérebro e diminui as chances de demências e Parkinson.Além disso, equilibram os níveis de colesterol no sangue melhorando a saúde do coração. Os benefícios não param por aí! Por ser rica em polifenóis, a bebida ajuda a reduzir o envelhecimento celular. E de acordo com uma pesquisa evita picos de glicose no sangue, o que é benéfico para quem tem diabetes. Um estudo feito com mais de 40 mil adultos japoneses indicou que as pessoas que beberam mais chá verde, cinco ou mais xícaras por dia, tiveram menos risco de morrer durante um período de 11 anos. Por isso, o consumo de chá verde parece contribuir com a longevidade.',
    image: mockImgTea('Verde')
  },
  {
    id: 6,
    name: 'Erva-cidreira',
    description:
      'Possui muitos nutrientes para o corpo, como a vitamina A, B, C e minerais como cobre, zinco, ferro, potássio, cálcio, magnésio e fósforo. A erva-cidreira possui efeito calmante e sedativo, auxiliando na redução de problemas de insônia, ansiedade e estresse, o que também melhor o humor de acordo com pesquisas. O consumo desse tipo de bebida diminui problemas estomacais e beneficia o sistema digestivo e diminui a indigestão. Tem também ação antioxidante e por isso combate os radicais livres, ajudando a reduzir o envelhecimento celular. Também é indicada em casos de cólicas menstruais já que relaxa a musculatura uterina. Essa erva reduz a pressão arterial, uma vez que proporciona uma vasodilatação nas veias.',
    image: mockImgTea('Cidreira')
  },
  {
    id: 7,
    name: 'Chá Preto',
    description:
      'A bebida contém polifenóis que possuem ação antioxidante. Também contém cafeína, que é um energético natural. Consumir chá preto estimula o sistema nervoso central, os músculos cardíacos, o sistema respiratório e a circulação sanguínea. Além disso, aumenta a capacidade de alerta e o desempenho nas atividades que exigem atenção. Auxilia no funcionamento do cérebro, diminui a sensação de cansaço e sonolência ao longo do dia. A cafeína também ajuda na digestão, pois aumenta a produção de ácidos digestivos. Além disso, o chá preto tem ação termogênica, o que estimula a queima de gorduras e auxilia no emagrecimento. Por ser rico em flavonóides, ajuda na prevenção de doenças cardiovasculares. Também atua na redução dos níveis de colesterol "ruim" e apresenta ação anti-inflamatória. Uma pesquisa realizada com mais de 74 mil pessoas apontou que aqueles que bebiam quatro ou mais xícaras de chá preto por dia tinham 32% menos chances de ter um derrame. Por fim, contém propriedades antimicrobianas, o que elimina substâncias nocivas e melhora as bactérias e a imunidade intestinal.',
    image: mockImgTea('Preto')
  },
  {
    id: 8,
    name: 'Erva-doce',
    description:
      'Consumir a infusão com erva-doce ajuda no combate à azia, má digestão, gases e dor de barriga. E é bastante indicada para relaxar e melhorar o sono. A planta também é conhecida por estimular a produção de leite materno. Por conter antioxidantes, ela ajuda a combater os danos oxidativos do organismo, contribui na produção de novas células e reduz os sinais de envelhecimento. Possui potássio, o que ajuda no controle da pressão arterial. Outra vantagem de consumo é que a erva-doce ajuda a conter os inchaços por ser diurética.',
    image: mockImgTea('Doce')
  },
  {
    id: 9,
    name: 'Boldo',
    description:
      'Várias espécies de plantas são chamadas de boldo, mas a mais comum no Brasil tem entre os princípios ativos a lactona, substância de gosto amargo que auxilia na digestão de gorduras. A planta contém boldina, que contribui para aumento gradual do fluxo da bile. Também faz bem para quem sofre com uma ressaca, pois diminui a intoxicação e protege as células do fígado. Também é usado no tratamento de distúrbios digestivos leves e na redução de espasmos intestinais. Um dos benefícios da bebida é o seu efeito calmante: ela melhora a sensação de bem-estar, promovendo relaxamento. Além disso, as folhas contêm outros fitoquímicos como limoneno, antioxidante que ajuda a prevenir doenças. Possui efeito diurético e levemente laxante. O boldo ainda contém uma substância conhecida como ascaridol que é um vermífugo natural.',
    image: mockImgTea('Boldo')
  },
  {
    id: 10,
    name: 'Alecrim',
    description:
      'O alecrim é uma erva que é bastante usada na culinária para adicionar sabor aos alimentos. Como bebida, ela auxilia no processo digestivo, combatendo desconfortos abdominais causados por inchaços ou distensão abdominal. Devido as suas propriedades, o alecrim contém ação antibiótica, auxiliando no tratamento de infecção urinária e quadros de vômito e diarreia. Além de ser um diurético natural, estimulando o corpo a eliminar os líquidos retidos e as toxinas do organismo. Melhora a função cognitiva entre os idosos, diminuindo o risco de perda de memória. Além disso, a erva melhora o funcionamento do fígado. Ajuda também a controlar o diabetes, devido sua capacidade de baixar a glicose.',
    image: mockImgTea('Alecrim')
  },
  {
    id: 11,
    name: 'Canela',
    description:
      'Dentre os componentes da canela está o cromo, que é conhecido por melhorar a sensibilidade do corpo à insulina. Por isso, a bebida ajuda pessoas que já tenham resistência à insulina, com pré-diabetes ou diabetes, no seu controle glicêmico, evitando picos na glicemia. A canela possui propriedades antioxidantes, que auxiliam na neutralização dos radicais livres responsáveis pelo envelhecimento celular, ajudando na prevenção de tumores e doenças degenerativas.',
    image: mockImgTea('Canela')
  },
  {
    id: 12,
    name: 'Gengibre',
    description:
      'O chá de gengibre é uma bebida rica em gingerol, paradol e zingerona, que são substâncias capazes de combater a dor de garganta, resfriados e sintomas de má digestão, como náusea, cólica e vômitos. Além disso, por ser um potente antioxidante e anti-inflamatório, o chá de gengibre também ajuda na prevenção de algumas doenças como câncer, diabetes e obesidade. Por ter ação diurética e termogênica, o chá de gengibre também auxilia na eliminação do excesso de líquido do organismo e favorece a queima de gordura corporal, contribuindo para o emagrecimento.',
    image: mockImgTea('Gengibre')
  }
];

export default TEAS;
