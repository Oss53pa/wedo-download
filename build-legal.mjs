// Generates cgu.html + confidentialite.html for wedo.atlas-studio.org.
// Content mirrors mobile/src/content/legal.ts — keep both in sync when editing.
// Run: node build-legal.mjs
import {writeFileSync} from 'node:fs';

const EDITEUR = 'Atlas Studio';
const APP = 'WeDo';
const CONTACT = 'atlas-studio.org';

const CGU = {
  slug: 'cgu',
  title: "Conditions Générales d'Utilisation",
  updatedAt: '13 juin 2026',
  intro: [
    `Les présentes Conditions Générales d'Utilisation (« CGU ») régissent l'accès et l'utilisation de l'application ${APP}, éditée par ${EDITEUR}. En créant un compte ou en utilisant ${APP}, vous acceptez sans réserve les présentes CGU.`,
    `${APP} est un outil numérique d'organisation de tontines (épargne rotative entre membres). ${APP} n'est pas une banque ni un établissement de crédit : la garde des fonds est assurée par un partenaire de monnaie électronique agréé (« l'EME »), au sein d'un compte de cantonnement dédié.`,
  ],
  sections: [
    {h: '1. Définitions', body: [
      "• Tontine : groupe d'épargne dont les membres versent une cotisation à chaque tour ; la cagnotte est reversée à un ou plusieurs bénéficiaires selon un ordre défini.",
      '• Tour : période de cotisation au terme de laquelle la cagnotte est distribuée.',
      '• Tête (part) : unité de participation. Une personne peut détenir plusieurs têtes ; elle verse et reçoit proportionnellement au nombre de ses têtes.',
      '• Bénéficiaires par tour : nombre de têtes servies au même tour, qui se partagent la cagnotte à parts égales par tête.',
      "• Séquestre : compte de cantonnement tenu par l'EME où les cotisations sont conservées jusqu'à leur distribution.",
      "• Frais d'activation : frais de service payés une fois au lancement du cycle.",
      "• Score de fiabilité : indicateur de ponctualité de paiement, portable d'une tontine à l'autre.",
      '• Organisateur : membre qui crée et administre une tontine.',
    ]},
    {h: '2. Objet du service', body: [
      `${APP} fournit les outils permettant de créer, rejoindre et gérer une tontine : invitation par code, suivi des cotisations, distribution automatique de la cagnotte, registre infalsifiable des mouvements et messagerie entre membres.`,
      `${APP} agit comme un intermédiaire technique. Les engagements financiers naissent entre les membres d'une même tontine ; ${EDITEUR} n'est pas partie à la tontine et ne garantit pas les versements des membres entre eux.`,
    ]},
    {h: '3. Compte et accès', body: [
      "L'inscription se fait par numéro de téléphone ou adresse e-mail, avec un code de vérification à usage unique (OTP). Aucun mot de passe n'est requis.",
      "Vous êtes responsable de la confidentialité de l'accès à votre boîte e-mail / téléphone recevant le code, et de toute activité réalisée depuis votre compte.",
      "Vous devez avoir au moins 18 ans et fournir des informations exactes. Une vérification d'identité (KYC) peut être exigée pour les tontines sous séquestre.",
    ]},
    {h: '4. Pseudonyme et identité', body: [
      'Vous pouvez choisir un pseudonyme affiché aux autres membres à la place de votre nom réel, afin de préserver votre anonymat au sein des groupes.',
      `Votre identité réelle reste néanmoins connue de ${APP}, de ${EDITEUR} et de l'EME, car elle est nécessaire à la sécurité, à la vérification d'identité et au respect des obligations légales. Le pseudonyme ne vous dispense d'aucune obligation.`,
    ]},
    {h: '5. Fonctionnement des tontines', body: [
      'À chaque tour, chaque tête active verse la cotisation. La cagnotte du tour est partagée entre les têtes bénéficiaires de ce tour, à parts égales par tête (donc proportionnellement par personne selon ses têtes).',
      "Les fonds versés sont immédiatement cantonnés dans le séquestre tenu par l'EME, puis distribués au(x) bénéficiaire(s) une fois le tour complété. Chaque mouvement est inscrit dans un registre chaîné et horodaté.",
      "Au lancement du cycle, des frais d'activation sont calculés et répartis ; ils constituent la rémunération du service et ne font pas partie de la cagnotte distribuée.",
    ]},
    {h: "6. Obligations des membres", body: [
      'Vous vous engagez à verser vos cotisations dans les délais convenus par la tontine. Tout retard ou défaut affecte votre score de fiabilité et peut entraîner des pénalités définies par l\'organisateur.',
      "Vous vous interdisez d'utiliser le service à des fins frauduleuses, de blanchiment, de financement illicite, ou pour tout usage contraire à la loi.",
    ]},
    {h: "7. Rôle de l'organisateur", body: [
      "L'organisateur définit les paramètres de la tontine (cotisation, fréquence, ordre, têtes, bénéficiaires par tour) et peut confirmer certains paiements (espèces / virement) hors Mobile Money.",
      `L'organisateur s'engage à gérer la tontine de bonne foi. ${EDITEUR} fournit des garde-fous techniques (séquestre, registre) mais n'arbitre pas les différends internes au groupe.`,
    ]},
    {h: '8. Paiements', body: [
      'Les cotisations peuvent être réglées par Mobile Money via un prestataire de paiement agréé. Les espèces et virements restent en attente jusqu\'à confirmation par l\'organisateur.',
      'Les montants, devises et éventuels frais du prestataire sont affichés avant validation. WeDo ne stocke jamais vos identifiants bancaires ou codes de paiement.',
    ]},
    {h: '9. Séquestre, registre et intégrité', body: [
      "Les fonds sont conservés dans un compte de cantonnement distinct du patrimoine de l'éditeur. Le registre des mouvements est chaîné par empreintes cryptographiques (SHA-256) afin d'en garantir l'intégrité et la traçabilité.",
      "Cet objectif « 0 perte, 0 litige » est un engagement de moyens techniques ; il ne garantit pas le comportement de paiement des autres membres.",
    ]},
    {h: '10. Score de fiabilité', body: [
      "Votre ponctualité de paiement alimente un score portable. Il peut conditionner l'accès à certaines tontines exigeant un score minimal. Le score est calculé automatiquement à partir de votre historique sur le service.",
    ]},
    {h: "11. Vérification d'identité (KYC / LCB-FT)", body: [
      "Pour les tontines sous séquestre, une vérification d'identité (pièce d'identité et, le cas échéant, vérification faciale) peut être requise, conformément aux obligations de lutte contre le blanchiment et le financement du terrorisme.",
      "Le refus de fournir ces éléments peut empêcher l'accès à certaines fonctionnalités.",
    ]},
    {h: '12. Responsabilité', body: [
      `${EDITEUR} met en œuvre des moyens raisonnables pour assurer la disponibilité et la sécurité du service, sans garantie d'absence totale d'interruption ou d'erreur.`,
      `${EDITEUR} ne saurait être tenu responsable des défauts de paiement entre membres, des décisions d'un organisateur, ni des dommages indirects. La responsabilité de l'éditeur est limitée, dans la mesure permise par la loi, aux frais de service effectivement perçus.`,
    ]},
    {h: '13. Données personnelles', body: [
      'Le traitement de vos données est décrit dans la Politique de confidentialité, qui fait partie intégrante des présentes CGU.',
    ]},
    {h: '14. Propriété intellectuelle', body: [
      `L'application ${APP}, ses marques, logos et contenus sont la propriété de ${EDITEUR}. Aucune reproduction n'est autorisée sans accord écrit préalable.`,
    ]},
    {h: '15. Suspension et résiliation', body: [
      "Vous pouvez demander la fermeture de votre compte à tout moment. Certaines données nécessaires à l'intégrité du registre et au respect des obligations légales peuvent être conservées après la fermeture.",
      "L'éditeur peut suspendre un compte en cas de fraude, d'abus ou de violation des présentes CGU.",
    ]},
    {h: '16. Modification des CGU', body: [
      "Les CGU peuvent évoluer. Les modifications importantes vous seront notifiées dans l'application. La poursuite de l'utilisation vaut acceptation des CGU mises à jour.",
    ]},
    {h: '17. Droit applicable et litiges', body: [
      "Les présentes CGU sont régies par le droit de l'État du siège de l'éditeur, membre de l'espace OHADA, ainsi que par les Actes uniformes de l'OHADA applicables, sous réserve des dispositions impératives protégeant le consommateur.",
      "En cas de différend, une solution amiable sera recherchée en priorité ; à défaut, le litige sera porté devant les juridictions compétentes du siège de l'éditeur, conformément au droit OHADA.",
    ]},
    {h: '18. Contact', body: [`Pour toute question relative aux présentes CGU : ${CONTACT}.`]},
  ],
};

const PRIVACY = {
  slug: 'confidentialite',
  title: 'Politique de confidentialité',
  updatedAt: '13 juin 2026',
  intro: [
    `La présente politique décrit comment ${EDITEUR}, éditeur de ${APP}, collecte et traite vos données personnelles, et les droits dont vous disposez. Elle s'applique à l'application ${APP}.`,
    `Nous appliquons les principes de minimisation et de finalité : nous ne collectons que ce qui est nécessaire au fonctionnement sécurisé des tontines et au respect de nos obligations légales.`,
  ],
  sections: [
    {h: '1. Responsable du traitement', body: [`${EDITEUR} est responsable du traitement de vos données. Contact : ${CONTACT}.`]},
    {h: '2. Données que nous collectons', body: [
      '• Identité et contact : nom réel, numéro de téléphone, adresse e-mail, pseudonyme éventuel, ville/région, date de naissance.',
      "• Vérification d'identité (KYC) : pièce d'identité et données de vérification, pour les tontines sous séquestre.",
      "• Données financières d'usage : cotisations, distributions, frais, historique des transactions (mais jamais vos identifiants bancaires).",
      '• Données de fiabilité : ponctualité de paiement, score.',
      '• Données techniques : identifiants de compte, journaux de connexion, données nécessaires aux notifications.',
    ]},
    {h: '3. Finalités', body: [
      '• Fournir le service : créer/rejoindre des tontines, cotiser, distribuer la cagnotte, tenir le registre.',
      "• Sécuriser les fonds via le séquestre de l'EME et garantir l'intégrité du registre.",
      "• Respecter nos obligations légales (vérification d'identité, lutte anti-blanchiment, comptabilité).",
      '• Calculer le score de fiabilité et envoyer les notifications utiles.',
    ]},
    {h: '4. Bases légales', body: [
      '• L\'exécution du contrat (les CGU) pour le fonctionnement du service.',
      '• Le respect d\'obligations légales pour le KYC et la lutte anti-blanchiment.',
      '• Votre consentement pour les traitements optionnels (ex. certaines notifications).',
    ]},
    {h: '5. Pseudonyme et identité réelle', body: [
      'Si vous définissez un pseudonyme, ce dernier est affiché aux autres membres à la place de votre nom réel.',
      `Votre nom réel n'est jamais exposé aux autres utilisateurs lorsque vous utilisez un pseudonyme. Il reste toutefois conservé et accessible à ${APP}, ${EDITEUR} et l'EME pour la sécurité, la vérification d'identité et les obligations légales.`,
    ]},
    {h: '6. Partage de vos données', body: [
      "• L'EME (établissement de monnaie électronique) : pour la tenue du séquestre et le règlement des distributions.",
      '• Le prestataire de paiement (Mobile Money) : pour exécuter les paiements que vous initiez.',
      "• L'hébergeur (Supabase) : pour le stockage sécurisé des données.",
      "• Les autorités compétentes : uniquement lorsque la loi l'exige.",
      'Nous ne vendons pas vos données et ne les utilisons pas à des fins publicitaires.',
    ]},
    {h: '7. Hébergement et localisation', body: [
      "Vos données sont hébergées dans l'Union Européenne (Supabase, région eu-central-1). Tout transfert éventuel hors UE serait encadré par des garanties appropriées.",
    ]},
    {h: '8. Durée de conservation', body: [
      'Les données de compte sont conservées tant que votre compte est actif.',
      'Les écritures du registre des mouvements et les données comptables/KYC sont conservées pendant la durée requise par la loi et pour garantir l\'intégrité des tontines, même après la fermeture du compte.',
    ]},
    {h: '9. Sécurité', body: [
      "Les fonds sont cantonnés dans un séquestre dédié ; le registre est chaîné par empreintes SHA-256 ; l'accès au compte repose sur un code à usage unique (OTP). Nous mettons en œuvre des mesures techniques et organisationnelles adaptées.",
    ]},
    {h: '10. Vos droits', body: [
      "Vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité, dans les limites prévues par la loi.",
      "Certaines données (registre, KYC) ne peuvent être effacées tant que des obligations légales ou l'intégrité des tontines l'exigent.",
      `Pour exercer vos droits : ${CONTACT}.`,
    ]},
    {h: '11. Notifications et traceurs', body: [
      "L'application peut utiliser des identifiants techniques nécessaires à son fonctionnement et, avec votre accord, des notifications. L'application n'utilise pas de traceurs publicitaires.",
    ]},
    {h: '12. Mineurs', body: ["Le service est réservé aux personnes âgées d'au moins 18 ans."]},
    {h: '13. Modifications', body: ['Cette politique peut être mise à jour. Les changements importants vous seront signalés dans l\'application.']},
    {h: '14. Contact', body: [`Pour toute question relative à vos données : ${CONTACT}.`]},
  ],
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const render = (doc, otherSlug, otherLabel) => `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>WeDo — ${esc(doc.title)}</title>
<meta name="description" content="${esc(doc.title)} de WeDo, une application Atlas Studio." />
<meta name="theme-color" content="#241810" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Grand+Hotel&family=Dosis:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{--espresso:#241810;--cream:#FBF6EC;--gold:#D4A03C;--goldL:#E6C172;--emerald:#1F7A58;--terracotta:#C2683C;--ink:#C2B6A8}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Dosis',system-ui,sans-serif;color:var(--cream);background:radial-gradient(130% 90% at 25% 8%,#4a331e,#241810 55%,#150d07);min-height:100vh;line-height:1.6;-webkit-font-smoothing:antialiased;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom)}
  .wrap{max-width:760px;margin:0 auto;padding:34px 22px 60px}
  .top{text-align:center;margin-bottom:26px}
  .brand{font-family:'Grand Hotel',cursive;font-size:46px;line-height:1;color:var(--cream)}
  .credit{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--goldL);font-weight:700;margin-top:2px}
  .stripe{height:5px;border-radius:4px;max-width:180px;margin:18px auto;display:flex;overflow:hidden}
  .stripe i{flex:1}
  h1{font-size:30px;font-weight:800;letter-spacing:-.5px;margin-bottom:4px}
  .upd{font-size:13px;color:var(--ink);margin-bottom:18px}
  .intro p{font-size:15.5px;color:#E9DECF;margin-bottom:10px}
  .card{background:rgba(255,255,255,.05);border:1px solid rgba(230,193,114,.18);border-radius:18px;padding:18px 20px;margin-top:16px}
  .card h2{font-size:18px;font-weight:800;color:var(--goldL);margin-bottom:10px}
  .card p{font-size:14.5px;color:#E9DECF;margin-bottom:7px}
  .nav{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-top:30px;font-size:14px}
  .nav a{color:var(--goldL);text-decoration:none;font-weight:700}
  .nav a:hover{text-decoration:underline}
  .foot{margin-top:26px;text-align:center;font-size:12.5px;color:#8A7E70;line-height:1.7}
</style>
</head>
<body>
  <div class="wrap">
    <div class="top">
      <div class="brand">WeDo</div>
      <div class="credit">une application Atlas Studio</div>
      <div class="stripe"><i style="background:#1F7A58"></i><i style="background:#D4A03C"></i><i style="background:#C2683C"></i><i style="background:#B23A4E"></i><i style="background:#3A3E7C"></i></div>
    </div>
    <h1>${esc(doc.title)}</h1>
    <div class="upd">Dernière mise à jour : ${esc(doc.updatedAt)}</div>
    <div class="intro">${doc.intro.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
    ${doc.sections.map((s) => `<div class="card"><h2>${esc(s.h)}</h2>${s.body.map((l) => `<p>${esc(l)}</p>`).join('')}</div>`).join('\n    ')}
    <div class="nav">
      <a href="./index.html">← Accueil</a>
      <a href="./${otherSlug}.html">${esc(otherLabel)}</a>
    </div>
    <div class="foot">
      Ce document est fourni à titre informatif et constitue une base susceptible d'évoluer.<br/>
      © 2026 Atlas Studio · WeDo
    </div>
  </div>
</body>
</html>`;

writeFileSync(new URL('./cgu.html', import.meta.url), render(CGU, 'confidentialite', 'Politique de confidentialité →'));
writeFileSync(new URL('./confidentialite.html', import.meta.url), render(PRIVACY, 'cgu', "Conditions d'utilisation →"));
console.log('Generated cgu.html + confidentialite.html');
