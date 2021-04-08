var Q = new Array();

var Q1 = {Num:1, Question:"Les portions de génomes qui s'expriment sont situées :", 
	linkImage : "http://3.bp.blogspot.com/-9jX2og9EV0I/UbV_eElARZI/AAAAAAAADtc/GAlf5cKmclQ/s640/22435000.jpg",
	nb_rep:6, 
	propositions :["dans le noyau","dans la cellule","dans l'euchromatine","dans la chromatine","dans l'hétérochromatine","dans les chromatides"], 
	correction : ["c'est trop vague, à votre niveau vous devez être plus précis !",
	"c'est vraiment trop imprécis !",
	"en effet, c'est lorsque l'ADN est décondensé qu'il est accessible aux facteurs de transcription, et à l'ARN polymérase. <sub><a href='http://monsterddl.free.fr/CD%20M%E9decine%202006-2007/Biocell/Mdb/Noyau2.htm' target ='_blank'>pour en savoir plus</a></sub ",
	"c'est vague, et une partie est condensée, donc non exprimée !","surement pas ! L'<mark>ADN condensé est innaccessible aux facteurs de transcription</mark>.",
	"l'ADN lors de la mitose et de la méïose est condensé donc non transcrit !"],
	justesse : [0,0,1,0,-1,-1]};

var Q2 = {Num:2, Question:"Le génome c'est : ", 
	linkImage : "",
	nb_rep:4, 
	propositions :["les gènes qui s'expriment dans une cellule","l'ensemble des gènes d'une cellule","l'inverse du phénotype","l'ensemble de l'ADN d'une cellule"], 
	correction : ["l'ensemble des gènes qui s'expriment produit un phénotype et non pas un génotype !","c'est bien ça !",
	"il ne faut pas dire n'importe quoi ! Cela ne veut rien dire.","L'ensemble de l'ADN n'est pas fait que de gènes ! Il y a beaucoup de séquences non codantes, elles ne sont pourtant pas inutiles mais leur rôle est difficile à comprendre."],
	justesse : [-1,1,-1,0]};
	
var Q3 = {Num:3, Question:"Le génome peut être codé dans : ", 
	linkImage : "",
	nb_rep:4, 
	propositions :["les protéines","uniquement l'ADN","l'ADN et les ARN","l'ensemble ADN, ARN, protéines"], 
	correction : ["les protéines portent une information mais ne la perpétue pas ; les protéines ne se répliquent pas, ce ne sont pas elles qui transmettent l'information génétique",
	"c'est souvent le cas, sauf chez certains virus comme les rétro-virus ou le coronavirus 🤨 (à génome ARN)",
	"oui, le patrimoine génétique est dans l'ADN cellulaire et des organites (mitochondries, chloroplastes) ou bien dans les particules virales des virus à ARN (grippe, HIV, etc ...)",
	"Il faut arrêter d'essayer n'importe quoi ! Le savoir, c'est avant tout du travail 🤔"],
	justesse : [-1,0,1,-1]};
	
var Q4 = {Num:4, Question:"Le corps humain contient plus de mille types cellulaires différents : ", 
	linkImage : "",
	nb_rep:4, 
	propositions :["il contient donc plus de mille versions du génome",
	"le génome change en fonction de l'environnement cellulaire", 
	"le génome ne varie pas d'une cellule à l'autre, c'est son expression différentielle qui explique les différents phénotypes", 
	"ce n'est pas le génome qui détermine les types cellulaires"], 
	correction : ["NON ! &Agrave; part quelques modifications mineures (gènes des anticorps dans les plasmocytes), TOUTES les celulles d'un individu ont le même génome !",
	"Le génome est immuable (il ne change pas à chaque division cellulaire (sauf accident = mutation) ; c'est son expression qui change d'une cellule à l'autre en fonction des signaux de son environnement",
	"C'est bien ça.", 
	"Le génome de chaque cellule ne change pas (sauf par un processus de dégradation, mutation accidentelle, vieillissement &hellip;)", 
	"le génome contient toute l'information pour que les cellules se différencient et changent en fonctions des informations reçues par leur voisines ou le corps (hormones) "],
	justesse : [-1,-1,1,-1]};
	
var Q5 = {Num:5, Question:"Un gène s'exprime de manière différentielle, cela veut dire (2 réponses possibles) : ", 
	linkImage : "",
	nb_rep:6, 
	propositions :["ce gène n'est pas tout le temps transcrit par une ARN polymérase",
		"le gène est modifié de manière différente pendant la transcription",
		"je ne sais pas",
		"le niveau de transcription, c'est à dire la quantité d'ARN produit est variable en fonction des signaux environnementaux",
		"un gène ne peut pas s'exprimer !",
		"l'expression du gène dépend d'équations différentielles"], 
	correction : ["en effet ; la fixation de l'ARN polymérase sur son promoteur peut être stabilisée par des protéines activatrices ou inhibitrices (facteur de transcription activateur ou inhibiteur)",
		"il faut arrêter de mélanger les termes au hasard en espérant que ce sera la bonne réponse, ce n'est pas le loto !",
		"c'est bien dommage ! Persévérez !",
		"tout à fait, les signaux de régulation conduisent à une augmentation ou une diminution de la transcription de l'ADN en ARN",
		"un gène est exprimé quand les signaux de régulation activent la transcription ; c'est ce que signifie 's'exprimer'",
		"peut être mais c'est hors sujet ! (contre sens)"],
	justesse : [1,-1,0,1,-1,0]};
	
var Q6 = {Num:6, Question:"quelles sont les techniques d'étude du phénotype (plusieurs réponses possibles) : ", 
	linkImage : "",
	nb_rep:6, 
	propositions :["la PCR","la RT-PCR","le Southern Blot",
	"le Northern Blot","l'Eastern Blot","le Western Blot"], 
	correction : ["Faux ! la PCR c'est pour le génotype !",
	"exact, c'est une méthode de choix qui permet même de quantifier les ARNm",
	"faux, c'est pour le génotype puisque cela détecte de l'ADN !",
	"exact, même si c'est devenu obsolète !",
	"cela n'existe toujours pas !",
	"Oui, cela détecte la production de protéines issues de la traduction des ARNm transcrits à partir des gènes."],
	justesse : [0,1,0,1,0,1]};

var Q7 = {Num:7, Question:"quelles sont les techniques d'étude du génotype (plusieurs réponses possibles) : ", 
	linkImage : "",
	nb_rep:6, 
	propositions :["la PCR","la RT-PCR","le Southern Blot",
	"le Northern Blot","l'Eastern Blot","le Western Blot"], 
	correction : ["en effet, la PCR c'est pour le génotype !",
	"faux, c'est une méthode de pour détecter et quantifier les ARNm, mais pas l'ADN génomique",
	"vrai, c'est pour le génotype puisque cela détecte de l'ADN !",
	"faux, c'était utilisé pour détecter les ARN mais c'est obsolète !",
	"cela n'existe toujours pas !",
	"Non, cela détecte la production de protéines issues de la traduction des ARNm transcrits à partir des gènes. Mais tous les gènes ne s'expriment pas !"],
	justesse : [1,0,1,0,1,0]};

var Q8 = {Num:8, Question:"qu'est ce qui peut augmenter l'expression de l'opéron lactose quand cela augmente ? (différentes réponses)", 
	linkImage : "https://rnbio.upmc.fr/sites/default/files/doc/operon_bilan2.jpg",
	nb_rep:7, 
	propositions :["le galactose","le lactose","l'IPTG","le glucose","le répresseur","l'allo-lactose", "l'AMPc"], 
	correction : ["non c'est le résultat de l'hydrolyse du lactose par la béta-galactosidase",
	"oui mais après avoir été transformé en allo-lactose",
	"oui, c'est un inducteur gratuit, c'est à dire qu'il n'est pas hydrolysé, il est donc gratuit et ne rapporte rien à la cellule ;  son effet est plus puissant que celui de l'allo-lactose",
	"non, le glucose est utilisé prioritairement, en sa présence le taux d'AMPc est faible et la protéine CAP ne favorise pas l'expression des opérons du catabolisme énergétique",
	"non ! le répresseur est la protéine (facteur trans inhibiteur) qui bloque l'expression de l'opéron lactose en sefixant sur la séquence opératrice !",
	"oui, c'est l'inducteur naturel ; c'est lui qui agit quand du lactose s'accumule dans le cytoplasme",
	"oui, mais cela ne suffit pas, il faut du lactose ou de l'IPTG en plus !"
	],
	justesse : [0,1,1,0,0,1,1]};

var Q9 = {Num:9, Question:"quels sont les opérons liés au catabolisme ?", 
	linkImage : "",
	nb_rep:6, 
	propositions :["leucine","tryptophane","vitamine C","saccharose","amylase","lactose"], 
	correction : ["non, c'est un acide aminé, donc c'est lié à l'anabolisme",
	"non, c'est un acide aminé, donc c'est lié à l'anabolisme",
	"non, c'est une vitamine donc un cofacteur enzymatique, c'est donc c'est lié à l'anabolisme",
	"oui, c'est un diose hydrolysable en glucose et fructose",
	"oui, cela permet de dégrader (par hydrolyse) l'amidon en glucose",
	"oui, revoir le cours si nécessaire !"],
	justesse : [0,0,0,1,1,1]};

var Q10 = {Num:10, Question:"quels sont les opérons liés à l'anabolisme ?", 
	linkImage : "",
	nb_rep:6, 
	propositions :["leucine","tryptophane","vitamine C","saccharose","amylase","lactose"], 
	correction : ["oui, c'est un acide aminé, donc c'est lié à l'anabolisme",
	"oui, c'est un acide aminé, donc c'est lié à l'anabolisme",
	"oui, c'est une vitamine donc un cofacteur enzymatique, c'est donc c'est lié à l'anabolisme",
	"non, c'est un diose hydrolysable en glucose et fructose",
	"non, cela permet de dégrader (par hydrolyse) l'amidon en glucose",
	"non, revoir le cours si nécessaire !"],
	justesse : [1,1,1,0,0,0]};
	
var Q11 = {Num:11, Question:"un facteur trans c'est : ", 
	linkImage : "",
	nb_rep:6, 
	propositions :["une protéine trans activatrice par exemple",
	"l'ARN polymérase","le ribosome","l'ADN","la TATA Box","un employé de la poste qui ..."], 
	correction : ["oui c'est forcément une protéine qui se fixe sur une séquence d'ADN cis régulatrice et agit sur la fixation de l'ARN polymérase sur le promoteur du gène. ",
	"non, c'est une protéine mais elle ne régule pas elle-même sa stabilisation sur le promoteur.",
	"n'importe quoi ! vous confondez la transcription et la traduction, l'ADN et l'ARN !",
	"non, le facteur fait, l'ADN subit.",
	"non, ça c'est une séquence du promoteur",
	"on s'amuse comme on peut ..."],
	justesse : [1,0,0,0,0,0]};
	
var Q12 = {Num:6, Question:"rien (2 réponses possibles) : ", 
	linkImage : "",
	nb_rep:6, 
	propositions :["","","","","",""], 
	correction : ["","","","","",""],
	justesse : [0,0,0,0,0,0]};
	
Q = [Q1,Q2,Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11]; //liste des objets questions réponses corrigés

