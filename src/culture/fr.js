﻿(function (translator) {
	translator.translations["fr"] = {
		// javascript alerts or messages
		"testneteditionactivated": "Testnet activé",
		"paperlabelbitcoinaddress": "Adresse Bitcoin Cash:",
		"paperlabelprivatekey": "Clé privée:",
		"paperlabelencryptedkey": "Clé privée encryptée (Mot de passe requis)",
		"bulkgeneratingaddresses": "Création de l'adresse... ",
		"detailalertnotvalidprivatekey": "La clé privée que vous avez entré est invalide",
		"detailconfirmsha256": "La clé privée que vous avez entré est invalide.\n\nVoulez-vous utiliser ce texte comme mot de passe pour une clé privée hacher appartir de celui-ci?\n\nAttention: choisir un mot de passe sécuritaire est important pour vous protéger des attaques par force brute visant à trouver votre mot de passe et voler vos bitcoins.",
		"bip38alertincorrectpassphrase": "Ce mot de passe est incorrect pour cette clé privée encryptée.",
		"bip38alertpassphraserequired": "Mot de passe pour votre clé BIP38 est requis",
		"vanityinvalidinputcouldnotcombinekeys": "Entrée non valide. Impossible de combiner les clés.",
		"vanityalertinvalidinputpublickeysmatch": "Entrée non valide. La clé publique des deux entrées est identique. Vous devez saisir deux clés différentes.",
		"vanityalertinvalidinputcannotmultiple": "Entrée non valide. Il n'est pas possible de multiplier deux clés publiques. Sélectionner 'Ajouter' pour combiner deux clés publiques pour obtenir une adresse Bitcoin Cash.",
		"vanityprivatekeyonlyavailable": "Cette option est seulement disponible si vous combinez deux clés privées",
		"vanityalertinvalidinputprivatekeysmatch": "Entrée non valide. La clé privée des deux entrées est identique. Vous devez saisir deux clés différentes.",

		// header and menu html
		"tagline": "Générateur de porte-monnaie papier pour Bitcoin Cash hors-ligne Javascript", // I didn't add the client-side as it would be redundant in French and sentence is already quite long. Not camel case either as it is not used in French.
		"generatelabelbitcoinaddress": "Création de l'adresse Bitcoin Cash...",
		"generatelabelmovemouse": "Bougez votre souris pour ajouter l'entropie nécessaire...",
		"generatelabelkeypress": "Ou tapez des caractères aléatoires dans le rectangle blanc suivant",
		"singlewallet": "Porte-monnaie simple",
		"paperwallet": "Porte-monnaie papier",
		"bulkwallet": "Porte-monnaie en vrac",
		"vanitywallet": "Porte-monnaie de courtoisie",
		"splitwallet": "Porte-monnaie partagé",
		"splitlabelthreshold": "Nombre minimale de parts requises pour combiner",
		"splitlabelshares": "Nombre de parts totale",
		"splitview": "Générer les parts",
		"detailwallet": "Détails du porte-monnaie",

		// footer html
		"footerlabeldonations": "Don:",
		"footerlabeltranslatedby": "Traduction: <b>checksum0</b> 1EsQy5Ry8guF6BuUgWCgBCQt11PCQhXqHA",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Historique des versions",
		"footerlabelgithub": "Dépôt Github",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright cashaddress.org.",
		"footerlabelcopyright2": "Les droits d'auteurs JavaScript sont inclus dans le code source.",
		"footerlabelnowarranty": "Ce logiciel est fournis \"tel quel\", sans aucune garantie.",

		// status html
		"statuslabelcryptogood": "&#10004; Parfait!",
		"statuslabelcryptogood1": "Votre navigateur peux générer des clés cryptographiques aléatoires à l'aire de window.crypto.getRandomValues",
		"statusokcryptogood": "OK",
		"statuslabelcryptobad": "&times; Oh non!",
		"statuslabelcryptobad1": "Votre navigateur NE supporte PAS window.crypto.getRandomValues. Vous devriez utiliser un navigateur moderne avec ce générateur de porte-monnaie afin d'acroitre la sécurité des clés générées.",
		"statusokcryptobad": "OK",
		"statuslabelunittestsgood": "&#10004; Parfait!",
		"statuslabelunittestsgood1": "Tous les essaies d'unitésont passés.",
		"statusokunittestsgood": "OK",
		"statuslabelunittestsbad": "&times; Oh non!",
		"statuslabelunittestsbad1": "Certains essaies d'unité ont ÉCHOUÉS. Vous devriez utiliser un navigateur moderne avec ce générateur de porte-monnaie.",
		"statusokunittestsbad": "OK",
		"statuslabelprotocolgood": "&#10004; Parfait!",
		"statuslabelprotocolgood1": "Vous exécuté ce générateur de porte-monnaie à partir de votre ordinateur local.<br />Vérifier que vous êtes hors-ligne avant d'utiliser ce générateur.",
		"statusokprotocolgood": "OK",
		"statuslabelprotocolbad": "&#9888; Pensez-y à deux fois!",
		"statuslabelprotocolbad1": "Vous exécuté ce générateur en-ligne à partir d'un site web public. Pour les porte-monnaies vulnérable, il est recommendé de",
		"statuslabelprotocolbad2": "télécharger",
		"statuslabelprotocolbad3": "le fichier ZIP du dépôt Github et d'exécuter le générateur à partir d'un ordinateur hors-ligne.",
		"statusokprotocolbad": "OK",
		"statuslabelkeypool1": "Ceci est un journal de toutes les clés privées et addresses qui ont été générés pendant cette session. Recharger cette page créera une nouvelle session.",
		"statuskeypoolrefresh": "Rafraichir",
		"statusokkeypool": "OK",

		// single wallet html
		"newaddress": "Générer une nouvelle adresse",
		"singleprint": "Imprimer",
		"singlelabelbitcoinaddress": "Adresse Bitcoin Cash",
		"singlelabelprivatekey": "Clé privée (Format d'importation de porte-monnaie):",
		"singletip1": "<b>Un porte-monnaie Bitcoin Cash</b> est aussi simple qu'une paire de clés cryptographiques dont une correspond est privée est l'autre correspond à l'address Bitcoin Cash. Le porte-monnaie affiché ci-dessus a été généré pour vous dans votre propre navigateur internet.",
		"singletip2": "<b>Pour garder en sécurité ce porte-monnaie,</b> vous devez l'imprimer ou, alternativement, enregistrer l'adresse de réception Bitcoin et la clé privée. Il est important de créer une copie de sauvegarde de la clé privée et de l'entreposer à un endroit sûr. Ce site n'a aucune base prédéterminée ou de sauvegarde de votre clé privée. Si vous êtes initiés à PGP, vous pouvez télécharger la version toute-en-1 de la page HTML et ainsi vérifier que vous avez une version authentique issue par l'auteur du site en comparant l'encryptage SHA1 de votre page HTML sauvegardée avec l'encryptage SHA1 disponible sur l'historique certifiée indiquée en bas de ce site. Si vous quittez ou rafraichissez ce site ou que vous appuyez sur \"générer une nouvelle adresse\" une nouvelle clé privée sera générée et la précédente clé privée affichée ne pourra plus être retrouvée. Votre clé privée Bitcoin Cash doit être gardée secrète. Celui qui connaît la clé privée aura la possibilité de dépenser tous les Bitcoin Cash accumulés et associés à l'adresse de réception. Si vous imprimez le porte-monnaie, pensez à le mettre à l'abri de l'eau dans un sac étanche. Traitez le porte-monnaie papier comme de l'argent en espèces.",
		"singletip3": "<b>Pour ajouter</b> des fonds à votre porte-monnaie, envoyez des Bitcoin Cash à votre adresse de réception.",
		"singletip4": "<b>Vous pouvez vérifier le contenu de votre porte-monnaie</b> en consultant <a href=\"https://blockchair.com/bitcoin-cash/blocks\">blockchair.com</a> et en y tapant votre adresse de réception Bitcoin Cash.",
		"singletip5": "<b>Télécharger un des <a href=\"https://www.bitcoinabc.org/\">client Bitcoin Cash</a></b> populaires pour dépenser vos Bitcoin cash en y important votre clé privée. Garder à l'esprit que lorsque vous importez une clé privée dans un client et que vous dépenser le contenu, vos fonds seront attaché aux autres clés privés contenu dans le client. Lorsque vous effectez une transaction, votre change sera envoyé vers une autre address Bitcoin Cash déja présente dans le client. Vous devez donc faire une sauvegarde de ce porte-monnaie et le garder en sureté en tout temps puisque le reste de vos fonds y sera contenu. Satoshi suggère de ne jamais effacer un porte-monnaie.",
		"singleshare": "PARTAGER",
		"singlesecret": "SECRET",
		"combinelabelentershares": "Entrez les parts disponibles (séparer par un espace blanc)",

		// paper wallet html
		"paperlabelhideart": "Enlever l'image?",
		"paperlabeladdressesperpage": "Nombre d'adresses par page:",
		"paperlabeladdressestogenerate": "Nombre d'adresses à créer:",
		"papergenerate": "Générer",
		"paperprint": "Imprimer",
		"paperlabelBIPpassphrase": "mot de passe:",
		"paperlabelencrypt": "Encrypter avec BIP38?",

		// bulk wallet html
		"bulklabelstartindex": "Commencer à l'index:",
		"bulklabelrowstogenerate": "Nombre de colonnes à générer:",
		"bulklabelcompressed": "Adresses compressées?",
		"bulkgenerate": "Générer",
		"bulkprint": "Imprimer",
		"bulklabelcsv": "Fichier à valeur séparées par virgule (CSV):",
		"bulklabelformat": "Index, Adresse, Clé privée (WIF)",
		"bulklabelq1": "Pourquoi utiliser un \"porte-monnaie en vrac\" pour accepter des Bitcoin Cash sur mon site web?",
		"bulka1": "L'approche traditionnelle pour accepter des Bitcoin Cash sur votre site web requière l'installation du client Bitcoin Cash (\"bitcoind\"). Plusieurs hébergeurs ne supportent pas l'installation d'un tel logiciel. De plus, faire fonctionner ce logiciel Bitcoin sur votre serveur web signifie que vos clés privées seront hébergées sur le serveur et pourraient donc être volées si votre serveur web était compromis. En utilisant un porte-monnaie en vrac, vous publiez seulement les adresses Bitcoin Cash sur votre serveur et non les clés privées. Vous n'avez donc pas à vous inquieter du risque de vous faire voler votre porte-monnaie si votre serveur était compromis.",
		"bulklabelq2": "Comment utiliser le \"porte-monnaie en vrac\" pour utiliser le Bitcoin sur mon site web?",
		"bulklabela2li1": "Utilisez le \"porte-monnaie en vrac\" pour prégénérer une large quantité d'adresses Bitcoin (10,000+). Copiez collez les données séparées par des virgules (CSV) dans un fichier texte sécurisé dans votre ordinateur. Sauvegardez ce fichier dans un endroit sécurisé.",
		"bulklabela2li2": "Importez les adresses Bitcoin Cash dans une base de donnée sur votre serveur web. (N'ajoutez pas le porte-monnaie ou les clés privées sur votre serveur web, sinon vous risquez de vous faire voler si votre serveur est compromis. Ajoutez seulement les adresses Bitcoin Cash qui seront visibles à vos visiteurs.)",
		"bulklabela2li3": "Ajoutez une option dans votre panier en ligne afin que vos clients puissent vous payer en Bitcoin Cash. Quand un client choisi de vous payer en Bitcoin Cash, vous affichez une des adresses de votre base de donnée comme \"adresse de paiment\" pour votre client et sauvegarder cette adresse avec sa commande.",
		"bulklabela2li4": "Vous avez maintenant besoin d'être avisé quand le paiement est reçu. Cherchez \"bitcoin payment notification\" sur Google et inscrivez-vous à un service de notification de paiement Bitcoin Cash. Il y a plusieurs services qui vous avertiront via des services Web, API, SMS, Email, etc. Une fois que vous avez reçu l'avis, qui devrait être programmée automatiquement, vous pouvez traiter la commande de votre client. Pour vérifier manuellement si un paiement est arrivé, vous pouvez utiliser un explorateur. La confirmation de la transaction pourrait prendre de 10 à 60 minutes pour être confirmée.",
		"bulklabela2li5": "Vos Bitcoin Cash s'accumuleront de façon sécuritaire dans la chaîne de bloc. Utilisez le porte-monnaie original que vous avez généré à l'étape 1 pour les dépenser.",

		// vanity wallet html
		"vanitylabelstep1": "Étape 1 - Générer votre paire de clés \"étape 1\"",
		"vanitynewkeypair": "Générer",
		"vanitylabelstep1publickey": "Clé Publique \"étape 1\":",
		"vanitylabelstep1pubnotes": "Copiez celle-ci dans la case Votre-Clé-Publique du site Vanity Pool.",
		"vanitylabelstep1privatekey": "Clé Privée \"étape 1\":",
		"vanitylabelstep1privnotes": "Copiez cette clé privée dans un fichier texte. Idéalement, sauvegardez la dans un fichier encrypté. Vous en aurez besoin pour récupérer la clé privée lorsque Vanity Pool aura trouvé votre préfixe.",
		"vanitylabelstep2calculateyourvanitywallet": "Étape 2 - Calculer votre Porte-monnaie de courtoisie",
		"vanitylabelenteryourpart": "Entrez votre clé privée (générée à l'étape 1 plus haut et précédemment sauvegardée):",
		"vanitylabelenteryourpoolpart": "Entrez la clé privée (provenant de Vanity Pool):",
		"vanitylabelnote1": "[NOTE: cette case peut accepter une clé publique ou un clé privée]",
		"vanitylabelnote2": "[NOTE: cette case peut accepter une clé publique ou un clé privée]",
		"vanitylabelradioadd": "Ajouter",
		"vanitylabelradiomultiply": "Multiplier",
		"vanitycalc": "Calculer le porte-monnaie de courtoisie",
		"vanitylabelbitcoinaddress": "Adresse Bitcoin Cash de courtoisie:",
		"vanitylabelnotesbitcoinaddress": "Ci-haut est votre nouvelle adresse qui devrait inclure le préfix requis.",
		"vanitylabelpublickeyhex": "Clé publique de courtoisie (HEX):",
		"vanitylabelnotespublickeyhex": "Ceci est la clé publique en format hexadécimal. ",
		"vanitylabelprivatekey": "Clé privée de courtoisie (WIF):",
		"vanitylabelnotesprivatekey": "Ceci est la clé privée pour accéder à votre porte-monnaie. ",

		// detail wallet html
		"detaillabelenterprivatekey": "Entrez la clé privée",
		"detailkeyformats": "Format de la clé: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Voir les détails",
		"detailprint": "Imprimer",
		"detaillabelnote1": "Votre Clé Privée Bitcoin Cash est un nombre secret que vous êtes le seul à connaître. Il peut être encodé sous la forme d'un nombre sous différents formats. Ci-bas, nous affichons l'adresse Bitcoin Cash et la clé publique qui corresponds à la clé privée ainsi que la clé privée dans les formats d'encodage les plus populaires (WIF, WIFC, HEX, B64).",
		"detaillabelnote2": "Bitcoin v0.6+ conserve les clés publiques dans un format compressé. Le logiciel supporte maintenant aussi l'importation et l'exportation de clés privées avec les commandes \"importprivkey/dumpprivkey\". Le format de la clé privée exportée est déterminé selon la version du porte-monnaie Bitcoin Cash.",
		"detaillabelbitcoinaddress": "Adresse Bitcoin Cash:",
		"detaillabelbitcoinaddresscomp": "Adresse Bitcoin Cash (compressée):",
		"detaillabelpublickey": "Clé publique (130 caractères [0-9A-F]):",
		"detaillabelpublickeycomp": "Clé publique (compressée, 66 caractères [0-9A-F]):",
		"detaillabelprivwif": "Clé privée WIF (51 caractères base58, débute avec un a):",
		"detaillabelprivwifcomp": "Clé privée WIF (compressée, 52 caractères base58, débute avec un a):",
		"detailcompwifprefix": "'K' ou 'L'",
		"detaillabelprivhex": "Clé privée au format hexadecimal (64 caractères [0-9A-F]):",
		"detaillabelprivb64": "Clé privée au format Base64 (44 caractères):",
		"detaillabelprivmini": "Clé privée au format miniature (22, 26 ou 30 caractères, débute avec un 'S'):",
		"detaillabelpassphrase": "Mot de passe BIP38",
		"detailbip38decryptbutton": "Decrypter BIP38",
		"detailbip38encryptbutton": "Encrypter BIP38",
		"detaillabelq1": "Comment créer un porte-monnaie avec un simple dé à six face?",
		"detaila1": "Une partie important de la création d'un porte-monnaie Bitcoin Cash est de s'assurer que les nombres aléatoires utilisé pour créer le porte-monnaie sont vraiment aléatoires. Un système de nombre aléatoire physique est supérier à un système basé sur ordinateur pseudo-aléatoire. Le moyen le plus simple pour générer un nombre aléatoire physique est avec un simple dé à six faces. Pour générer une clé privée Bitcoin Cash, vous devez rouler le dé 99 fois en enregistrant les valeurs selon 1=1, 2=2, 3=3, 4=4 5=5 et 6=0. En ce fesant, vous créer votre clé privée au format base 6. Vous pouvez par la suite saisir les 99 numéro pour créer votre clé privée base 6 dans le champ texte et cliquer sur \"Voir les détails\". Vous aurez accès à l'address Bitcoin Cash associée à cette clé privée. Vous devriez aussi noter votre clé privée au format WIF."
	};
})(ninja.translator);