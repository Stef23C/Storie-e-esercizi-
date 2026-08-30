<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>L'Île aux Syllabes</title>
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Île Syllabes">
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#0EA5A0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --ocean:#0EA5A0;
  --ocean-dark:#0B7F7A;
  --coral:#FF6B5B;
  --sunshine:#FFC145;
  --plum:#3D2352;
  --sky:#8EE3F5;
  --cream:#FFFDF7;
  --pink:#FF9AC1;
  --lilac:#B497F5;
  --leaf:#6FCF6F;
  --radius:26px;
}
*{box-sizing:border-box;}
body.contrast{
  --cream:#FFFFFF;
  --plum:#000000;
}
body{
  margin:0;
  font-family:'Quicksand',sans-serif;
  background:linear-gradient(180deg,var(--sky) 0%, var(--ocean) 55%, var(--ocean-dark) 100%);
  min-height:100vh;
  color:var(--plum);
  overflow-x:hidden;
}
body.contrast{
  background:#FFFFFF;
}
h1,h2,h3,.title-font{
  font-family:'Baloo 2',cursive;
}
.contrast *{
  letter-spacing:0.04em !important;
}
#app{
  max-width:900px;
  margin:0 auto;
  padding:18px 18px 60px;
  min-height:100vh;
}
.screen{display:none;}
.screen.active{display:block;animation:fadein .35s ease;}
@keyframes fadein{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}

/* Top bar */
.topbar{
  display:flex;align-items:center;justify-content:space-between;
  margin-bottom:18px;
}
.brand{
  display:flex;align-items:center;gap:10px;
  color:var(--cream);
  cursor:pointer;
  user-select:none;
}
.brand .logo{font-size:34px;}
.brand h1{font-size:22px;margin:0;color:var(--cream);text-shadow:0 2px 0 rgba(0,0,0,.15);}
.contrast .brand h1{color:#000;}
.stars-badge{
  background:var(--sunshine);
  color:var(--plum);
  font-family:'Baloo 2';
  font-weight:800;
  padding:8px 16px;
  border-radius:999px;
  display:flex;align-items:center;gap:6px;
  box-shadow:0 4px 0 #d99a1f;
  font-size:18px;
}
.icon-btn{
  background:rgba(255,255,255,.25);
  border:none;
  border-radius:999px;
  width:44px;height:44px;
  font-size:20px;
  color:var(--cream);
  cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  transition:transform .15s;
}
.icon-btn:hover{transform:scale(1.08);}
.contrast .icon-btn{background:#000;color:#fff;}

/* Home cards */
.home-hero{
  text-align:center;
  color:var(--cream);
  margin:10px 0 26px;
}
.contrast .home-hero{color:#000;}
.home-hero h2{font-size:32px;margin:0 0 6px;text-shadow:0 3px 0 rgba(0,0,0,.15);}
.home-hero p{font-size:17px;margin:0;opacity:.95;}
.card-grid{
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  gap:16px;
}
@media(max-width:760px){.card-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:480px){.card-grid{grid-template-columns:1fr;}}
.lang-switch{
  font-family:'Baloo 2';font-weight:700;font-size:14px;
  background:rgba(255,255,255,.9);color:var(--plum);border:none;
  padding:9px 14px;border-radius:999px;cursor:pointer;
  box-shadow:0 4px 0 rgba(0,0,0,.15);
}
.lang-switch-fixed{
  position:fixed;top:16px;right:16px;z-index:50;
}
@media(max-width:600px){.lang-switch-fixed{top:auto;bottom:16px;right:16px;}}
.lang-segmented{
  display:flex;gap:0;background:rgba(255,255,255,.95);border-radius:999px;padding:4px;
  box-shadow:0 4px 0 rgba(0,0,0,.15);
}
.lang-seg-btn{
  font-family:'Baloo 2';font-weight:700;font-size:14px;
  background:transparent;color:#9a8bb0;border:none;
  padding:8px 14px;border-radius:999px;cursor:pointer;transition:.15s;
}
.lang-seg-btn.active{background:var(--coral);color:#fff;}
.menu-card{
  background:var(--cream);
  border-radius:var(--radius);
  padding:22px 18px;
  text-align:center;
  cursor:pointer;
  border:none;
  box-shadow:0 8px 0 rgba(0,0,0,.15);
  transition:transform .15s;
  font-family:'Baloo 2';
}
.menu-card:hover{transform:translateY(-4px);}
.menu-card:active{transform:translateY(2px);box-shadow:0 4px 0 rgba(0,0,0,.15);}
.menu-card .emoji{font-size:48px;display:block;margin-bottom:8px;}
.menu-card h3{margin:0 0 4px;font-size:20px;color:var(--plum);}
.menu-card p{margin:0;font-size:14px;font-family:'Quicksand';color:#6b5a7a;font-weight:600;}
.menu-card.c1{background:linear-gradient(160deg,#FFE9C7,var(--sunshine));}
.menu-card.c2{background:linear-gradient(160deg,#FFD3CC,var(--coral));}
.menu-card.c3{background:linear-gradient(160deg,#D7F5D0,var(--leaf));}
.menu-card.c4{background:linear-gradient(160deg,#E3D6FB,var(--lilac));}
.menu-card.c5{background:linear-gradient(160deg,#CDEFFA,var(--sky));}
.menu-card.c6{background:linear-gradient(160deg,#FFD7EA,var(--pink));}
.menu-card.c7{background:linear-gradient(160deg,#FDE8C8,#F5C97A);}
.menu-card.c8{background:linear-gradient(160deg,#D5F0E8,#7ED0B8);}
.category-card{
  background:var(--cream);border-radius:20px;padding:18px;text-align:center;cursor:pointer;
  border:3px solid #eee;box-shadow:0 5px 0 rgba(0,0,0,.12);font-family:'Baloo 2';font-weight:700;
  font-size:17px;color:var(--plum);
}
.category-card:hover{border-color:var(--ocean);}
.category-pill{
  font-family:'Baloo 2';font-weight:700;font-size:14px;border:none;border-radius:999px;
  padding:9px 16px;cursor:pointer;background:#eee;color:var(--plum);box-shadow:0 3px 0 rgba(0,0,0,.12);
}
.category-pill.active{background:var(--ocean);color:#fff;box-shadow:0 3px 0 var(--ocean-dark);}

/* Generic panel */
.panel{
  background:var(--cream);
  border-radius:var(--radius);
  padding:22px;
  box-shadow:0 8px 0 rgba(0,0,0,.12);
  position:relative;
}
.back-row{display:flex;align-items:center;gap:10px;margin-bottom:16px;}
.back-btn{
  background:var(--cream);color:var(--plum);border:none;border-radius:999px;
  padding:10px 18px;font-family:'Baloo 2';font-weight:700;font-size:15px;cursor:pointer;
  box-shadow:0 4px 0 rgba(0,0,0,.15);
}
.screen-title{color:var(--cream);font-size:26px;margin:0;}
.contrast .screen-title{color:#000;}

/* Big buttons */
.big-btn{
  font-family:'Baloo 2';font-weight:700;font-size:17px;
  border:none;border-radius:18px;padding:14px 22px;
  cursor:pointer;color:#fff;
  box-shadow:0 5px 0 rgba(0,0,0,.2);
  transition:transform .12s;
  display:inline-flex;align-items:center;gap:8px;
}
.big-btn:active{transform:translateY(3px);box-shadow:0 2px 0 rgba(0,0,0,.2);}
.big-btn:disabled{opacity:.35;cursor:default;box-shadow:0 5px 0 rgba(0,0,0,.1);}
.big-btn:disabled:active{transform:none;}
.btn-coral{background:var(--coral);}
.btn-ocean{background:var(--ocean);}
.btn-leaf{background:var(--leaf);}
.btn-lilac{background:var(--lilac);}
.btn-sun{background:var(--sunshine);color:var(--plum);box-shadow:0 5px 0 #d99a1f;}

/* Syllable game */
.word-emoji{font-size:80px;text-align:center;margin:6px 0 18px;}
.target-slots{
  display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:26px;min-height:70px;
}
.slot{
  min-width:64px;height:64px;border-radius:16px;
  border:3px dashed #cbb8e0;
  display:flex;align-items:center;justify-content:center;
  font-family:'Baloo 2';font-size:24px;font-weight:700;color:var(--plum);
  background:#faf7ff;
}
.slot.filled{border-style:solid;}
.stones{
  display:flex;justify-content:center;gap:14px;flex-wrap:wrap;
}
.stone{
  font-family:'Baloo 2';font-weight:800;font-size:22px;
  padding:16px 20px;border-radius:20px;color:#fff;border:none;cursor:pointer;
  box-shadow:0 6px 0 rgba(0,0,0,.2);
  transition:transform .12s;
}
.stone:hover{transform:scale(1.06);}
.stone:disabled{opacity:.25;cursor:default;transform:none;}
.stone-0{background:var(--coral);}
.stone-1{background:var(--ocean);}
.stone-2{background:var(--lilac);}
.stone-3{background:var(--sunshine);color:var(--plum);}
.game-controls{display:flex;justify-content:center;gap:12px;margin-top:22px;flex-wrap:wrap;}
.progress-dots{display:flex;justify-content:center;gap:8px;margin-bottom:18px;}
.dot{width:12px;height:12px;border-radius:50%;background:#e3dcf0;}
.dot.done{background:var(--leaf);}
.dot.current{background:var(--coral);}
.flashcard{
  font-family:'Baloo 2';font-weight:800;font-size:56px;text-align:center;
  color:var(--plum);background:#faf7ff;border:4px solid #e0d5f5;border-radius:24px;
  padding:30px 20px;margin:0 0 18px;letter-spacing:.02em;
}
.contrast .flashcard{font-size:64px;letter-spacing:.08em;}
.celebrate{
  text-align:center;font-family:'Baloo 2';font-size:22px;color:var(--leaf);
  min-height:30px;
}

/* Quiz */
.quiz-emoji{font-size:70px;text-align:center;margin:10px 0 6px;}
.quiz-q{text-align:center;font-family:'Baloo 2';font-size:19px;margin-bottom:20px;color:var(--plum);}
.quiz-opts{display:grid;gap:12px;max-width:420px;margin:0 auto;}
.quiz-opt{
  font-family:'Baloo 2';font-size:20px;font-weight:700;
  padding:16px;border-radius:16px;border:3px solid #eee;background:#fff;
  cursor:pointer;transition:.15s;
}
.quiz-opt:hover{border-color:var(--ocean);}
.quiz-opt.correct{background:var(--leaf);color:#fff;border-color:var(--leaf);}
.quiz-opt.wrong{background:var(--coral);color:#fff;border-color:var(--coral);}
.quiz-footer{display:flex;justify-content:center;margin-top:22px;}
.score-screen{text-align:center;}
.score-screen .big-emoji{font-size:70px;}

/* Stories */
.story-list{display:grid;gap:12px;}
.story-item{
  display:flex;align-items:center;gap:14px;
  background:#fff;border-radius:18px;padding:14px 16px;
  box-shadow:0 4px 0 rgba(0,0,0,.08);cursor:pointer;
}
.story-item .emoji{font-size:36px;}
.story-item .info h4{margin:0;font-family:'Baloo 2';font-size:17px;}
.story-item .info p{margin:2px 0 0;font-size:13px;color:#7a6b8a;font-weight:600;}
.add-story-box{
  margin-top:18px;padding:16px;border-radius:18px;background:#f5f0ff;
}
.add-story-box textarea, .add-story-box input{
  width:100%;font-family:'Quicksand';font-weight:600;font-size:15px;
  border:2px solid #e0d5f5;border-radius:12px;padding:10px;margin-bottom:10px;
}
.story-reader{
  font-size:26px;line-height:1.9;font-weight:600;
}
.contrast .story-reader{font-size:30px;line-height:2.1;}
.sentence{padding:2px 4px;border-radius:6px;}
.sentence.highlight{background:var(--sunshine);}
.reader-controls{
  display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:22px;
}
.reader-controls label{font-weight:700;font-size:13px;color:#6b5a7a;}
select, input[type=range]{
  font-family:'Quicksand';font-weight:700;border-radius:10px;border:2px solid #e0d5f5;padding:6px 8px;
}

/* Settings */
.settings-row{
  display:flex;align-items:center;justify-content:space-between;
  padding:14px 0;border-bottom:2px solid #f1ecf9;
}
.settings-row:last-child{border-bottom:none;}
.toggle{
  width:52px;height:30px;border-radius:999px;background:#e0d5f5;position:relative;cursor:pointer;border:none;
}
.toggle.on{background:var(--leaf);}
.toggle .knob{
  width:24px;height:24px;border-radius:50%;background:#fff;position:absolute;top:3px;left:3px;
  transition:.2s;box-shadow:0 2px 4px rgba(0,0,0,.2);
}
.toggle.on .knob{left:25px;}
.mic-status{font-size:13px;font-weight:700;color:#7a6b8a;margin-top:6px;}
.voice-slot{
  background:#f5f0ff;border-radius:16px;padding:12px 14px;margin-bottom:12px;
}
.voice-slot-label{
  font-family:'Baloo 2';font-weight:700;font-size:15px;
  border:none;border-bottom:2px dashed #cbb8e0;
  background:#fff;border-radius:8px 8px 0 0;
  width:100%;margin-bottom:8px;padding:6px 8px;color:var(--plum);
}
.voice-slot-label:focus{outline:2px solid var(--lilac);border-bottom-style:solid;}
.voice-slot-controls{display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
.mini-btn{
  font-family:'Baloo 2';font-weight:700;font-size:13px;border:none;border-radius:12px;
  padding:8px 12px;cursor:pointer;color:#fff;box-shadow:0 3px 0 rgba(0,0,0,.18);
}
.mini-lilac{background:var(--lilac);}
.mini-leaf{background:var(--leaf);}
.mini-sun{background:var(--sunshine);color:var(--plum);box-shadow:0 3px 0 #d99a1f;}
.mini-coral{background:var(--coral);}
.mini-ocean{background:var(--ocean);}
.voice-slot-status{font-size:12px;color:#7a6b8a;font-weight:600;margin:6px 0 0;}
.rec-dot{
  width:10px;height:10px;border-radius:50%;background:var(--coral);display:inline-block;
  animation:pulse 1s infinite;margin-right:6px;
}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.3;}}
@keyframes burst-fly{
  0%{transform:translateY(0) scale(0.6);opacity:1;}
  100%{transform:translateY(-70px) scale(1.3);opacity:0;}
}
@keyframes hint-pulse{
  0%,100%{box-shadow:0 6px 0 rgba(0,0,0,.2), 0 0 0 0 rgba(255,193,69,.9);}
  50%{box-shadow:0 6px 0 rgba(0,0,0,.2), 0 0 0 10px rgba(255,193,69,0);}
}
.hint-pulse{animation:hint-pulse 0.6s ease-in-out 2;outline:3px solid var(--sunshine);}
.tag{
  display:inline-block;font-size:12px;font-weight:700;background:var(--sky);color:var(--ocean-dark);
  padding:3px 10px;border-radius:999px;margin-left:8px;
}
</style>
</head>
<body>
<div id="app">

  <!-- HOME -->
  <div class="lang-switch-fixed lang-segmented">
    <button id="lang-btn-fr" class="lang-seg-btn active" onclick="setLang('fr')">🇫🇷 Français</button>
    <button id="lang-btn-it" class="lang-seg-btn" onclick="setLang('it')">🇮🇹 Italiano</button>
  </div>

  <div class="screen active" id="screen-home">
    <div class="topbar">
      <div class="brand" onclick="goHome()">
        <span class="logo">🏝️</span><h1>L'Île aux Syllabes</h1>
      </div>
      <div style="display:flex;gap:10px;align-items:center;">
        <div class="stars-badge">⭐ <span id="star-count">0</span></div>
        <button class="icon-btn" onclick="showScreen('screen-settings')" title="Réglages">⚙️</button>
      </div>
    </div>
    <div class="home-hero">
      <h2 data-i18n="home_title">Coucou ! Prêt à jouer avec les mots ?</h2>
      <p data-i18n="home_subtitle">Choisis une activité pour commencer l'aventure 🌟</p>
    </div>
    <div class="card-grid">
      <button class="menu-card c1" onclick="openCategoryPicker('syllables')">
        <span class="emoji">🪨</span>
        <h3 data-i18n="card_syllables_title">Jeu des syllabes</h3>
        <p data-i18n="card_syllables_desc">Assemble les mots pas à pas</p>
      </button>
      <button class="menu-card c5" onclick="openCategoryPicker('words')">
        <span class="emoji">🔤</span>
        <h3 data-i18n="card_words_title">Lecture de mots entiers</h3>
        <p data-i18n="card_words_desc">Lis le mot complet à voix haute</p>
      </button>
      <button class="menu-card c2" onclick="openCategoryPicker('quiz')">
        <span class="emoji">🎯</span>
        <h3 data-i18n="card_quiz_title">Quiz</h3>
        <p data-i18n="card_quiz_desc">Devine le bon mot</p>
      </button>
      <button class="menu-card c7" onclick="openCategoryPicker('sentences')">
        <span class="emoji">📝</span>
        <h3 data-i18n="card_sentences_title">Phrases</h3>
        <p data-i18n="card_sentences_desc">Remets les mots dans l'ordre</p>
      </button>
      <button class="menu-card c8" onclick="openCategoryPicker('sound')">
        <span class="emoji">🔡</span>
        <h3 data-i18n="card_sound_title">Le son du début</h3>
        <p data-i18n="card_sound_desc">Trouve l'image qui commence pareil</p>
      </button>
      <button class="menu-card c3" onclick="showScreen('screen-stories'); renderStoryList();">
        <span class="emoji">📖</span>
        <h3 data-i18n="card_stories_title">Histoires</h3>
        <p data-i18n="card_stories_desc">Écoute et lis de belles histoires</p>
      </button>
      <button class="menu-card c6" onclick="showScreen('screen-mywords'); renderMyWords();">
        <span class="emoji">✏️</span>
        <h3 data-i18n="card_mywords_title">Mes mots</h3>
        <p data-i18n="card_mywords_desc">Ajoute tes propres mots</p>
      </button>
      <button class="menu-card c4" onclick="showScreen('screen-settings')">
        <span class="emoji">🎙️</span>
        <h3 data-i18n="card_settings_title">Ma voix &amp; réglages</h3>
        <p data-i18n="card_settings_desc">Choisis une voix ou enregistre la tienne</p>
      </button>
    </div>
  </div>

  <!-- CATEGORY PICKER -->
  <div class="screen" id="screen-category">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title" data-i18n="title_category">Choisis une catégorie</h2>
    </div>
    <div class="panel">
      <div id="difficulty-row" style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:18px;"></div>
      <div class="card-grid" id="category-grid"></div>
    </div>
  </div>

  <!-- SYLLABLE GAME -->
  <div class="screen" id="screen-game">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title"><span data-i18n="title_syllables">Jeu des syllabes</span> <span class="tag" id="game-lang-badge"></span></h2>
    </div>
    <div class="panel">
      <div class="progress-dots" id="game-dots"></div>
      <div class="word-emoji" id="game-emoji">🍎</div>
      <div class="target-slots" id="game-slots"></div>
      <div class="stones" id="game-stones"></div>
      <div class="celebrate" id="game-celebrate"></div>
      <div class="game-controls">
        <button class="big-btn btn-ocean" onclick="speakCurrentWord()" data-i18n="btn_listen_word">🔊 Écouter le mot</button>
        <button class="big-btn btn-sun" id="game-reveal-btn" onclick="toggleGameImage()" data-i18n="btn_hide_image">🙈 Cacher l'image</button>
      </div>
      <div class="game-controls" style="margin-top:10px;">
        <button class="big-btn btn-lilac" onclick="nextGameWord()" data-i18n="btn_next_word">➡️ Mot suivant</button>
      </div>
      <button class="big-btn btn-ocean" style="margin-top:16px;" onclick="goToMyWordsWithCategory()" data-i18n="btn_add_word_quick">✏️ Ajouter d'autres mots</button>
    </div>
  </div>

  <!-- SENTENCE ORDERING GAME -->
  <div class="screen" id="screen-sentence">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title"><span data-i18n="title_sentences">Phrases</span> <span class="tag" id="sentence-lang-badge"></span></h2>
    </div>
    <div class="panel">
      <div class="progress-dots" id="sentence-dots"></div>
      <div class="word-emoji" id="sentence-emoji">📝</div>
      <div class="target-slots" id="sentence-slots"></div>
      <div class="stones" id="sentence-stones"></div>
      <div class="celebrate" id="sentence-celebrate"></div>
      <div class="game-controls">
        <button class="big-btn btn-ocean" onclick="speakCurrentSentence()" data-i18n="btn_listen">🔊 Écouter</button>
      </div>
      <div class="game-controls" style="margin-top:10px;">
        <button class="big-btn btn-lilac" id="sentence-prev-btn" onclick="prevSentence()" data-i18n="btn_prev_word">⬅️ Précédent</button>
        <button class="big-btn btn-lilac" id="sentence-next-btn" onclick="nextSentence()" data-i18n="btn_next_sentence">➡️ Phrase suivante</button>
      </div>
      <button class="big-btn btn-ocean" style="margin-top:20px;" onclick="goToSentenceManager()" data-i18n="btn_manage_sentences">📝 Gérer mes phrases</button>
    </div>
  </div>

  <!-- SENTENCE MANAGER -->
  <div class="screen" id="screen-sentence-manager">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title" data-i18n="title_sentence_manager">Mes phrases</h2>
    </div>
    <div class="panel">
      <p style="font-weight:600;color:#7a6b8a;margin-top:0;" data-i18n="sentences_intro">Ajoute, modifie ou supprime tes propres phrases pour le jeu "Phrases".</p>
      <div class="add-story-box">
        <h3 style="margin-top:0;font-family:'Baloo 2';" id="sentence-form-title" data-i18n="sentence_form_add_title">➕ Ajouter une phrase</h3>
        <input id="new-sentence-text" data-i18n-ph="sentence_ph_text" placeholder="Écris une phrase courte (ex : Le chien court vite)">
        <button type="button" class="mini-btn mini-ocean" style="margin-bottom:10px;" onclick="openTranslateHelper('new-sentence-text','new-sentence-lang')" data-i18n="btn_translate">🌐 Traduire</button>
        <input id="new-sentence-emoji" placeholder="Un emoji (ex : 🐶)" maxlength="4" data-i18n-ph="word_ph_emoji">
        <select id="new-sentence-lang" style="width:100%;margin-bottom:10px;">
          <option value="fr">🇫🇷 Français</option>
          <option value="it">🇮🇹 Italiano</option>
        </select>
        <input id="new-sentence-category" list="sentence-category-suggestions" data-i18n-ph="word_ph_category" placeholder="Catégorie (ex : Animaux, Facile...) — laisse vide pour Général">
        <datalist id="sentence-category-suggestions"></datalist>
        <div style="display:flex;gap:10px;">
          <button class="big-btn btn-leaf" id="sentence-form-submit" onclick="addCustomSentence()" data-i18n="sentence_form_add_btn">✅ Ajouter la phrase</button>
          <button class="big-btn btn-lilac" id="sentence-form-cancel" onclick="cancelEditSentence()" style="display:none;" data-i18n="btn_cancel">✖️ Annuler</button>
        </div>
        <div style="margin-top:16px;padding-top:16px;border-top:2px dashed #e0d5f5;">
          <p style="font-size:13px;font-weight:700;color:#7a6b8a;margin:0 0 8px;" data-i18n="import_sentences_hint">Ou importe plusieurs phrases d'un coup depuis un fichier .txt (une phrase par ligne : "Le chat dort|🐱|Animaux") :</p>
          <button type="button" class="big-btn btn-ocean" onclick="document.getElementById('sentences-txt-import').click()" data-i18n="btn_import_sentences_txt">📄 Importer une liste de phrases (.txt)</button>
          <button type="button" class="mini-btn mini-lilac" onclick="downloadSentencesTemplate()" data-i18n="btn_download_template">⬇️ Modèle .txt</button>
          <input type="file" id="sentences-txt-import" accept=".txt" style="display:none;" onchange="importSentencesTxt(event)">
          <p id="sentences-import-status" style="font-size:12px;color:#7a6b8a;font-weight:600;margin:8px 0 0;"></p>
        </div>
      </div>
      <h3 style="font-family:'Baloo 2';" data-i18n="sentences_list_title">Mes phrases ajoutées</h3>
      <div class="story-list" id="sentences-list"></div>
    </div>
  </div>

  <!-- INITIAL SOUND GAME -->
  <div class="screen" id="screen-sound">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title"><span data-i18n="title_sound">Le son du début</span> <span class="tag" id="sound-lang-badge"></span></h2>
    </div>
    <div class="panel">
      <div class="progress-dots" id="sound-dots"></div>
      <div class="flashcard" id="sound-letter" style="font-size:70px;">A</div>
      <div class="celebrate" id="sound-celebrate"></div>
      <div class="card-grid" id="sound-options" style="margin-top:18px;"></div>
      <div class="game-controls" style="margin-top:14px;">
        <button class="big-btn btn-ocean" onclick="speakCurrentSoundLetter()" data-i18n="btn_listen">🔊 Écouter</button>
      </div>
    </div>
  </div>

  <!-- PARENT PROGRESS DASHBOARD -->
  <div class="screen" id="screen-progress">
    <div class="back-row">
      <button class="back-btn" onclick="showScreen('screen-settings')" data-i18n="back">← Retour</button>
      <h2 class="screen-title" data-i18n="title_progress">Progrès</h2>
    </div>
    <div class="panel" id="progress-panel"></div>
  </div>

  <!-- WHOLE WORD READING -->
  <div class="screen" id="screen-words">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title"><span data-i18n="title_words">Lecture de mots entiers</span> <span class="tag" id="words-lang-badge"></span></h2>
    </div>
    <div class="panel">
      <div class="progress-dots" id="words-dots"></div>
      <div class="word-emoji" id="words-emoji-hidden" style="opacity:0;">📘</div>
      <div class="flashcard" id="flashcard-word">mot</div>
      <div class="word-emoji" id="words-emoji" style="display:none;">🍎</div>
      <div class="celebrate" id="words-celebrate"></div>
      <div class="game-controls">
        <button class="big-btn btn-ocean" onclick="speakCurrentFlashword()" data-i18n="btn_listen">🔊 Écouter</button>
        <button class="big-btn btn-sun" id="words-reveal-btn" onclick="toggleFlashImage()" data-i18n="btn_show_image">👀 Montrer l'image</button>
      </div>
      <div class="game-controls" style="margin-top:10px;">
        <button class="big-btn btn-coral" onclick="rateFlashword(false)" data-i18n="btn_retry">🤔 À revoir</button>
        <button class="big-btn btn-leaf" onclick="rateFlashword(true)" data-i18n="btn_success">👍 J'ai réussi !</button>
      </div>
      <div class="game-controls" style="margin-top:10px;">
        <button class="big-btn btn-lilac" id="words-prev-btn" onclick="prevFlashword()" data-i18n="btn_prev_word">⬅️ Précédent</button>
        <button class="big-btn btn-lilac" id="words-next-btn" onclick="nextFlashwordManual()" data-i18n="btn_next_word_arrow">Suivant ➡️</button>
      </div>
      <button class="big-btn btn-ocean" style="margin-top:16px;" onclick="goToMyWordsWithCategory()" data-i18n="btn_add_word_quick">✏️ Ajouter d'autres mots</button>
    </div>
  </div>

  <!-- MY WORDS -->
  <div class="screen" id="screen-mywords">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title" data-i18n="title_mywords">Mes mots</h2>
    </div>
    <div class="panel">
      <p style="font-weight:600;color:#7a6b8a;margin-top:0;" data-i18n="mywords_intro">Ajoute des mots en français ou en italien pour le jeu des syllabes, la lecture de mots et le quiz.</p>
      <p style="font-size:13px;font-weight:700;color:#7a6b8a;margin:0 0 8px;" data-i18n="category_filter_hint">Choisis une catégorie pour filtrer la liste et ajouter directement un mot dedans :</p>
      <div id="category-filter-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;"></div>
      <div class="add-story-box">
        <h3 style="margin-top:0;font-family:'Baloo 2';" id="word-form-title" data-i18n="word_form_add_title">➕ Ajouter un mot</h3>
        <input id="new-word-text" placeholder="Le mot (ex : dinosaure)" data-i18n-ph="word_ph_text">
        <button type="button" class="mini-btn mini-ocean" style="margin-bottom:10px;" onclick="openTranslateHelper('new-word-text','new-word-lang')" data-i18n="btn_translate">🌐 Traduire</button>
        <input id="new-word-syllables" placeholder="Syllabes séparées par des tirets (ex : di-no-saure) — laisse vide pour un découpage automatique" data-i18n-ph="word_ph_syllables">
        <input id="new-word-emoji" placeholder="Un emoji pour le mot (ex : 🦖)" maxlength="4" data-i18n-ph="word_ph_emoji">
        <label style="display:block;font-size:13px;font-weight:700;color:#7a6b8a;margin-bottom:6px;" data-i18n="photo_label">📷 Ou ajoute une photo à toi (remplace l'emoji) :</label>
        <input type="file" id="new-word-image" accept="image/*" onchange="previewImage(event,'new-word-image-preview', 'word')" style="margin-bottom:10px;">
        <div id="new-word-image-preview" style="margin-bottom:10px;"></div>
        <select id="new-word-lang" style="width:100%;margin-bottom:10px;">
          <option value="fr">🇫🇷 Français</option>
          <option value="it">🇮🇹 Italiano</option>
        </select>
        <input id="new-word-category" list="category-suggestions" data-i18n-ph="word_ph_category" placeholder="Catégorie (ex : Animaux, Facile...) — laisse vide pour Général" style="margin-bottom:10px;">
        <datalist id="category-suggestions"></datalist>
        <label style="display:block;font-size:13px;font-weight:700;color:#7a6b8a;margin-bottom:6px;">🎙️ Ou enregistre ta propre voix pour ce mot (contourne les voix synthétiques) :</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
          <button type="button" class="big-btn btn-lilac" id="word-record-btn" onclick="toggleRecordWordAudio()">🎙️ Enregistrer</button>
          <button type="button" class="big-btn btn-leaf" onclick="document.getElementById('new-word-audio-upload').click()">📁 Importer un MP3</button>
          <input type="file" id="new-word-audio-upload" accept="audio/*" style="display:none;" onchange="uploadWordAudio(event)">
          <button type="button" class="big-btn btn-sun" id="word-play-audio-btn" onclick="playNewWordAudio()" style="display:none;">🔊 Écouter</button>
        </div>
        <p id="word-audio-status" style="font-size:12px;color:#7a6b8a;font-weight:600;margin:0 0 10px;"></p>
        <div style="display:flex;gap:10px;">
          <button class="big-btn btn-leaf" id="word-form-submit" onclick="addCustomWord()" data-i18n="word_form_add_btn">✅ Ajouter le mot</button>
          <button class="big-btn btn-lilac" id="word-form-cancel" onclick="cancelEditWord()" style="display:none;" data-i18n="btn_cancel">✖️ Annuler</button>
        </div>
        <div style="margin-top:16px;padding-top:16px;border-top:2px dashed #e0d5f5;">
          <p style="font-size:13px;font-weight:700;color:#7a6b8a;margin:0 0 8px;" data-i18n="import_words_hint">Ou importe plusieurs mots d'un coup depuis un fichier .txt (un mot par ligne, ou "mot|syllabes|emoji|catégorie") :</p>
          <button type="button" class="big-btn btn-ocean" onclick="document.getElementById('words-txt-import').click()" data-i18n="btn_import_words_txt">📄 Importer une liste de mots (.txt)</button>
          <button type="button" class="mini-btn mini-lilac" onclick="downloadWordsTemplate()" data-i18n="btn_download_template">⬇️ Modèle .txt</button>
          <input type="file" id="words-txt-import" accept=".txt" style="display:none;" onchange="importWordsTxt(event)">
          <p id="words-import-status" style="font-size:12px;color:#7a6b8a;font-weight:600;margin:8px 0 0;"></p>
        </div>
      </div>
      <h3 style="font-family:'Baloo 2';" data-i18n="mywords_list_title">Mes mots ajoutés</h3>
      <div class="game-controls" style="margin-bottom:14px;">
        <button class="big-btn btn-coral" onclick="startSyllableGame(customWords.filter(w=>w.lang===currentLang).length ? customWords.filter(w=>w.lang===currentLang) : null)" data-i18n="btn_play_syllables_mine">🪨 Jouer aux syllabes avec mes mots</button>
        <button class="big-btn btn-ocean" onclick="startWordReading(customWords.filter(w=>w.lang===currentLang).length ? customWords.filter(w=>w.lang===currentLang) : null)" data-i18n="btn_read_mine">🔤 Lire mes mots en entier</button>
        <button class="big-btn btn-sun" onclick="startQuiz(customWords.filter(w=>w.lang===currentLang).length ? customWords.filter(w=>w.lang===currentLang) : null)" data-i18n="btn_quiz_mine">🎯 Quiz avec mes mots</button>
      </div>
      <div class="story-list" id="mywords-list"></div>
      <button class="big-btn btn-lilac" style="margin-top:16px;" onclick="showScreen('screen-groups'); renderGroupsScreen();" data-i18n="btn_manage_groups">👥 Gérer mes groupes de mots</button>
    </div>
  </div>

  <!-- WORD GROUPS -->
  <div class="screen" id="screen-groups">
    <div class="back-row">
      <button class="back-btn" onclick="showScreen('screen-mywords'); renderMyWords();" data-i18n="back">← Retour</button>
      <h2 class="screen-title" data-i18n="title_groups">Mes groupes</h2>
    </div>
    <div class="panel">
      <p style="font-weight:600;color:#7a6b8a;margin-top:0;" data-i18n="groups_intro">Crée un groupe et choisis à la main quels mots il contient — utile pour préparer une leçon précise.</p>
      <div class="add-story-box">
        <h3 style="margin-top:0;font-family:'Baloo 2';" id="group-form-title" data-i18n="group_form_add_title">➕ Créer un groupe</h3>
        <input id="new-group-name" data-i18n-ph="group_ph_name" placeholder="Nom du groupe (ex : Leçon de lundi)">
        <select id="new-group-lang" style="width:100%;margin-bottom:10px;" onchange="renderGroupWordChecklist()">
          <option value="fr">🇫🇷 Français</option>
          <option value="it">🇮🇹 Italiano</option>
        </select>
        <p style="font-size:13px;font-weight:700;color:#7a6b8a;margin:0 0 8px;" data-i18n="groups_pick_hint">Coche les mots à inclure :</p>
        <div id="group-word-checklist" style="max-height:260px;overflow-y:auto;background:#faf7ff;border-radius:12px;padding:10px;margin-bottom:12px;"></div>
        <div style="display:flex;gap:10px;">
          <button class="big-btn btn-leaf" id="group-form-submit" onclick="saveGroup()" data-i18n="group_form_add_btn">✅ Enregistrer le groupe</button>
          <button class="big-btn btn-lilac" id="group-form-cancel" onclick="cancelEditGroup()" style="display:none;" data-i18n="btn_cancel">✖️ Annuler</button>
        </div>
      </div>
      <h3 style="font-family:'Baloo 2';" data-i18n="groups_list_title">Groupes créés</h3>
      <div class="story-list" id="groups-list"></div>
    </div>
  </div>

  <!-- QUIZ -->
  <div class="screen" id="screen-quiz">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title"><span data-i18n="title_quiz">Quiz</span> <span class="tag" id="quiz-lang-badge"></span></h2>
    </div>
    <div class="panel" id="quiz-panel"></div>
  </div>

  <!-- STORIES LIST -->
  <div class="screen" id="screen-stories">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title" data-i18n="title_stories">Histoires</h2>
    </div>
    <div class="panel">
      <div class="story-list" id="story-list"></div>
      <div class="add-story-box">
        <h3 style="margin-top:0;font-family:'Baloo 2';" id="story-form-title" data-i18n="story_form_add_title">➕ Ajouter une histoire</h3>
        <input id="new-story-title" placeholder="Titre de l'histoire (ex : Le petit chat curieux)" data-i18n-ph="story_ph_title">
        <button type="button" class="mini-btn mini-ocean" style="margin-bottom:10px;" onclick="openTranslateHelper('new-story-title','new-story-lang')" data-i18n="btn_translate_title">🌐 Traduire le titre</button>
        <textarea id="new-story-text" rows="4" placeholder="Écris ou colle le texte de l'histoire ici..." data-i18n-ph="story_ph_text"></textarea>
        <button type="button" class="mini-btn mini-ocean" style="margin-bottom:10px;" onclick="openTranslateHelper('new-story-text','new-story-lang')" data-i18n="btn_translate_text">🌐 Traduire le texte</button>
        <input id="new-story-emoji" placeholder="Un emoji pour l'histoire (ex : 🐱)" maxlength="4" data-i18n-ph="story_ph_emoji">
        <label style="display:block;font-size:13px;font-weight:700;color:#7a6b8a;margin-bottom:6px;" data-i18n="photo_label">📷 Ou ajoute une photo à toi (remplace l'emoji) :</label>
        <input type="file" id="new-story-image" accept="image/*" onchange="previewImage(event,'new-story-image-preview', 'story')" style="margin-bottom:10px;">
        <div id="new-story-image-preview" style="margin-bottom:10px;"></div>
        <select id="new-story-lang" style="width:100%;margin-bottom:10px;">
          <option value="fr">🇫🇷 Français</option>
          <option value="it">🇮🇹 Italiano</option>
        </select>
        <div style="display:flex;gap:10px;">
          <button class="big-btn btn-leaf" id="story-form-submit" onclick="addStory()" data-i18n="story_form_add_btn">✅ Ajouter l'histoire</button>
          <button class="big-btn btn-lilac" id="story-form-cancel" onclick="cancelEditStory()" style="display:none;" data-i18n="btn_cancel">✖️ Annuler</button>
        </div>
        <div style="margin-top:16px;padding-top:16px;border-top:2px dashed #e0d5f5;">
          <p style="font-size:13px;font-weight:700;color:#7a6b8a;margin:0 0 8px;" data-i18n="import_stories_hint">Ou importe plusieurs histoires d'un coup depuis un fichier .txt (une histoire par ligne : "titre|texte|emoji") :</p>
          <button type="button" class="big-btn btn-ocean" onclick="document.getElementById('stories-txt-import').click()" data-i18n="btn_import_stories_txt">📄 Importer une liste d'histoires (.txt)</button>
          <button type="button" class="mini-btn mini-lilac" onclick="downloadStoriesTemplate()" data-i18n="btn_download_template">⬇️ Modèle .txt</button>
          <input type="file" id="stories-txt-import" accept=".txt" style="display:none;" onchange="importStoriesTxt(event)">
          <p id="stories-import-status" style="font-size:12px;color:#7a6b8a;font-weight:600;margin:8px 0 0;"></p>
        </div>
      </div>
    </div>
  </div>

  <!-- STORY READER -->
  <div class="screen" id="screen-reader">
    <div class="back-row">
      <button class="back-btn" onclick="showScreen('screen-stories'); renderStoryList();" data-i18n="back">← Retour</button>
      <h2 class="screen-title" id="reader-title">Histoire</h2>
    </div>
    <div class="panel">
      <div class="story-reader" id="reader-text"></div>
      <div class="reader-controls">
        <button class="big-btn btn-coral" id="reader-play-btn" onclick="toggleReadStory()" data-i18n="btn_read_story">▶️ Lire l'histoire</button>
        <div>
          <label data-i18n="label_voice">Voix</label><br>
          <select id="reader-voice-select"></select>
        </div>
        <div>
          <label data-i18n="label_speed">Vitesse</label><br>
          <input type="range" id="reader-speed" min="0.5" max="1.3" step="0.1" value="0.7">
        </div>
      </div>
      <h3 style="font-family:'Baloo 2';margin:20px 0 10px;" data-i18n="voice_slots_title">🎙️ Voix personnalisées pour cette histoire</h3>
      <p style="font-size:13px;color:#7a6b8a;font-weight:600;margin:0 0 12px;" data-i18n="voice_slots_hint">Ajoute jusqu'à 3 voix (enregistrées ou importées) et choisis celle que tu veux écouter.</p>
      <div id="reader-voice-slots"></div>
    </div>
  </div>

  <!-- SETTINGS -->
  <div class="screen" id="screen-settings">
    <div class="back-row">
      <button class="back-btn" onclick="goHome()" data-i18n="back">← Retour</button>
      <h2 class="screen-title" data-i18n="title_settings">Réglages</h2>
    </div>
    <div class="panel">
      <div class="settings-row">
        <div><strong data-i18n="settings_voice_fr">Voix pour le français 🇫🇷</strong></div>
        <select id="settings-voice-select-fr" style="min-width:180px;"></select>
      </div>
      <div class="settings-row">
        <div><strong data-i18n="settings_voice_it">Voix pour l'italien 🇮🇹</strong></div>
        <select id="settings-voice-select-it" style="min-width:180px;"></select>
      </div>
      <div class="settings-row" style="flex-direction:column;align-items:flex-start;">
        <p id="voice-debug-info" style="font-size:12px;color:#9a8bb0;font-weight:600;margin:0 0 10px;"></p>
      </div>
      <div class="settings-row">
        <div><strong data-i18n="settings_test">Tester les voix</strong></div>
        <div style="display:flex;gap:8px;">
          <button class="big-btn btn-ocean" onclick="testVoice('fr')">🔊 🇫🇷</button>
          <button class="big-btn btn-ocean" onclick="testVoice('it')">🔊 🇮🇹</button>
        </div>
      </div>
      <div class="settings-row">
        <div><strong data-i18n="settings_contrast">Lecture contrastée</strong><br><span style="font-size:13px;color:#7a6b8a;" data-i18n="settings_contrast_desc">Grand contraste, texte plus grand et plus espacé</span></div>
        <button class="toggle" id="contrast-toggle" onclick="toggleContrast()"><span class="knob"></span></button>
      </div>
      <div class="settings-row">
        <div><strong data-i18n="settings_autorepeat">Répétition automatique</strong><br><span style="font-size:13px;color:#7a6b8a;" data-i18n="settings_autorepeat_desc">Chaque mot est répété deux fois pour mieux le mémoriser</span></div>
        <button class="toggle on" id="autorepeat-toggle" onclick="toggleAutoRepeat()"><span class="knob"></span></button>
      </div>
      <div class="settings-row">
        <div><strong data-i18n="settings_simplequiz">Quiz simplifié</strong><br><span style="font-size:13px;color:#7a6b8a;" data-i18n="settings_simplequiz_desc">2 choix au lieu de 3, sans précipitation</span></div>
        <button class="toggle on" id="simplequiz-toggle" onclick="toggleSimplifiedQuiz()"><span class="knob"></span></button>
      </div>
      <div class="settings-row" style="flex-direction:column;align-items:flex-start;">
        <strong data-i18n="settings_storage">Sauvegarde</strong>
        <p style="font-size:13px;color:#7a6b8a;font-weight:600;margin:6px 0 10px;" id="storage-status" data-i18n="settings_storage_desc">
          Tes mots, histoires, enregistrements et étoiles sont sauvegardés automatiquement dans ce navigateur.
        </p>
        <p style="font-size:13px;color:var(--coral);font-weight:700;margin:0 0 10px;" data-i18n="settings_backup_hint">
          ⚠️ Le stockage du navigateur a une limite. Pour ne jamais perdre ton travail (surtout avec beaucoup d'enregistrements), exporte régulièrement une sauvegarde.
        </p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="big-btn btn-leaf" onclick="exportBackup()" data-i18n="btn_export">💾 Exporter une sauvegarde</button>
          <button class="big-btn btn-ocean" onclick="document.getElementById('backup-import-input').click()" data-i18n="btn_import_backup">📂 Importer une sauvegarde</button>
          <input type="file" id="backup-import-input" accept="application/json" style="display:none;" onchange="importBackup(event)">
        </div>
        <p id="backup-status" style="font-size:12px;color:#7a6b8a;font-weight:600;margin:8px 0 10px;"></p>
        <button class="big-btn btn-coral" onclick="resetAllData()" data-i18n="btn_reset">🗑️ Réinitialiser toutes les données</button>
      </div>
      <div class="settings-row" style="flex-direction:column;align-items:flex-start;">
        <strong data-i18n="settings_progress">Progrès de l'enfant</strong>
        <p style="font-size:13px;color:#7a6b8a;font-weight:600;margin:6px 0 10px;" data-i18n="settings_progress_desc">Vois quels mots sont déjà bien maîtrisés et lesquels ont besoin de plus de pratique.</p>
        <button class="big-btn btn-ocean" onclick="showScreen('screen-progress'); renderProgress();" data-i18n="btn_see_progress">📊 Voir les progrès</button>
      </div>
      <div class="settings-row" style="flex-direction:column;align-items:flex-start;">
        <strong data-i18n="settings_about_voices">À propos des voix</strong>
        <p style="font-size:13px;color:#7a6b8a;font-weight:600;margin:6px 0 0;" data-i18n="settings_about_voices_desc">
          Les voix proposées viennent de ton appareil (iPad, Android ou Windows) — elles peuvent changer d'un appareil à l'autre.
          L'enregistrement de "ma voix" (dans une histoire) rejoue exactement ta propre voix, ce n'est pas une voix synthétique.
        </p>
      </div>
    </div>
  </div>

</div>

<script>
/* ---------------- STATE ---------------- */
let stars = 0;
let contrastMode = false;
let autoRepeat = true;
let simplifiedQuiz = true;
let selectedVoiceURI = {fr:null, it:null};
let voicesList = [];

let currentLang = 'fr'; // 'fr' or 'it'
const STORAGE_KEY = 'ile_aux_syllabes_v1';
let storageAvailable = true;

/* ---------------- UI TRANSLATIONS ---------------- */
const I18N = {
  fr:{
    home_title:"Coucou ! Prêt à jouer avec les mots ?",
    home_subtitle:"Choisis une activité pour commencer l'aventure 🌟",
    card_syllables_title:"Jeu des syllabes",
    card_syllables_desc:"Assemble les mots pas à pas",
    card_words_title:"Lecture de mots entiers",
    card_words_desc:"Lis le mot complet à voix haute",
    card_quiz_title:"Quiz",
    card_quiz_desc:"Devine le bon mot",
    card_stories_title:"Histoires",
    card_stories_desc:"Écoute et lis de belles histoires",
    card_mywords_title:"Mes mots",
    card_mywords_desc:"Ajoute tes propres mots",
    card_settings_title:"Ma voix & réglages",
    card_settings_desc:"Choisis une voix ou enregistre la tienne",
    card_sentences_title:"Phrases",
    card_sentences_desc:"Remets les mots dans l'ordre",
    card_sound_title:"Le son du début",
    card_sound_desc:"Trouve l'image qui commence pareil",
    title_category:"Choisis une catégorie",
    title_sentences:"Phrases",
    title_sound:"Le son du début",
    title_progress:"Progrès",
    settings_progress:"Progrès de l'enfant",
    settings_progress_desc:"Vois quels mots sont déjà bien maîtrisés et lesquels ont besoin de plus de pratique.",
    btn_see_progress:"📊 Voir les progrès",
    word_ph_category:"Catégorie (ex : Animaux, Facile...) — laisse vide pour Général",
    btn_translate:"🌐 Traduire",
    btn_translate_title:"🌐 Traduire le titre",
    btn_translate_text:"🌐 Traduire le texte",
    sentence_form_add_title:"➕ Ajouter une phrase",
    sentence_ph_text:"Écris une phrase courte (ex : Le chien court vite)",
    sentence_form_add_btn:"✅ Ajouter la phrase",
    import_sentences_hint:"Ou importe plusieurs phrases d'un coup depuis un fichier .txt (une phrase par ligne : \"Le chat dort|🐱|Animaux\") :",
    btn_import_sentences_txt:"📄 Importer une liste de phrases (.txt)",
    btn_manage_sentences:"📝 Gérer mes phrases",
    title_sentence_manager:"Mes phrases",
    sentences_intro:"Ajoute, modifie ou supprime tes propres phrases pour le jeu \"Phrases\".",
    sentences_list_title:"Mes phrases ajoutées",
    btn_add_word_quick:"✏️ Ajouter d'autres mots",
    back:"← Retour",
    title_syllables:"Jeu des syllabes",
    title_words:"Lecture de mots entiers",
    title_quiz:"Quiz",
    title_stories:"Histoires",
    title_mywords:"Mes mots",
    title_settings:"Réglages",
    btn_listen_word:"🔊 Écouter le mot",
    btn_next_word:"➡️ Mot suivant",
    btn_next_sentence:"➡️ Phrase suivante",
    btn_prev_word:"⬅️ Précédent",
    btn_next_word_arrow:"Suivant ➡️",
    btn_listen:"🔊 Écouter",
    btn_show_image:"👀 Montrer l'image",
    btn_hide_image:"🙈 Cacher l'image",
    btn_retry:"🤔 À revoir",
    btn_success:"👍 J'ai réussi !",
    mywords_intro:"Ajoute des mots en français ou en italien pour le jeu des syllabes, la lecture de mots et le quiz.",
    category_filter_hint:"Choisis une catégorie pour filtrer la liste et ajouter directement un mot dedans :",
    word_form_add_title:"➕ Ajouter un mot",
    word_ph_text:"Le mot (ex : dinosaure)",
    word_ph_syllables:"Syllabes séparées par des tirets (ex : di-no-saure) — laisse vide pour un découpage automatique",
    word_ph_emoji:"Un emoji pour le mot (ex : 🦖)",
    photo_label:"📷 Ou ajoute une photo à toi (remplace l'emoji) :",
    word_form_add_btn:"✅ Ajouter le mot",
    btn_cancel:"✖️ Annuler",
    import_words_hint:"Ou importe plusieurs mots d'un coup depuis un fichier .txt (un mot par ligne, ou \"mot|syllabes|emoji|catégorie\") :",
    btn_import_words_txt:"📄 Importer une liste de mots (.txt)",
    btn_download_template:"⬇️ Modèle .txt",
    import_stories_hint:"Ou importe plusieurs histoires d'un coup depuis un fichier .txt (une histoire par ligne : \"titre|texte|emoji\") :",
    btn_import_stories_txt:"📄 Importer une liste d'histoires (.txt)",
    mywords_list_title:"Mes mots ajoutés",
    btn_play_syllables_mine:"🪨 Jouer aux syllabes avec mes mots",
    btn_read_mine:"🔤 Lire mes mots en entier",
    btn_quiz_mine:"🎯 Quiz avec mes mots",
    btn_manage_groups:"👥 Gérer mes groupes de mots",
    title_groups:"Mes groupes",
    groups_intro:"Crée un groupe et choisis à la main quels mots il contient — utile pour préparer une leçon précise.",
    group_form_add_title:"➕ Créer un groupe",
    group_ph_name:"Nom du groupe (ex : Leçon de lundi)",
    groups_pick_hint:"Coche les mots à inclure :",
    group_form_add_btn:"✅ Enregistrer le groupe",
    groups_list_title:"Groupes créés",
    story_form_add_title:"➕ Ajouter une histoire",
    story_ph_title:"Titre de l'histoire (ex : Le petit chat curieux)",
    story_ph_text:"Écris ou colle le texte de l'histoire ici...",
    story_ph_emoji:"Un emoji pour l'histoire (ex : 🐱)",
    story_form_add_btn:"✅ Ajouter l'histoire",
    btn_read_story:"▶️ Lire l'histoire",
    label_voice:"Voix",
    label_speed:"Vitesse",
    btn_record:"🎙️ Enregistrer avec ma voix",
    btn_import_mp3:"📁 Importer un MP3",
    btn_listen_myvoice:"🔊 Écouter ma voix",
    voice_slots_title:"🎙️ Voix personnalisées pour cette histoire",
    voice_slots_hint:"Ajoute jusqu'à 3 voix (enregistrées ou importées) et choisis celle que tu veux écouter.",
    slot_default_label:"Voix",
    slot_record:"🎙️ Enregistrer",
    slot_stop:"⏹️ Stop",
    slot_import:"📁 MP3",
    slot_listen:"🔊 Écouter",
    slot_delete:"🗑️",
    slot_recording:"Enregistrement en cours...",
    slot_empty:"Aucune voix ici pour l'instant.",
    settings_voice_fr:"Voix pour le français 🇫🇷",
    settings_voice_it:"Voix pour l'italien 🇮🇹",
    settings_test:"Tester les voix",
    settings_contrast:"Lecture contrastée",
    settings_contrast_desc:"Grand contraste, texte plus grand et plus espacé",
    settings_autorepeat:"Répétition automatique",
    settings_autorepeat_desc:"Chaque mot est répété deux fois pour mieux le mémoriser",
    settings_simplequiz:"Quiz simplifié",
    settings_simplequiz_desc:"2 choix au lieu de 3, sans précipitation",
    settings_storage:"Sauvegarde",
    settings_storage_desc:"Tes mots, histoires, enregistrements et étoiles sont sauvegardés automatiquement dans ce navigateur.",
    settings_backup_hint:"⚠️ Le stockage du navigateur a une limite. Pour ne jamais perdre ton travail (surtout avec beaucoup d'enregistrements), exporte régulièrement une sauvegarde.",
    btn_export:"💾 Exporter une sauvegarde",
    btn_import_backup:"📂 Importer une sauvegarde",
    btn_reset:"🗑️ Réinitialiser toutes les données",
    settings_about_voices:"À propos des voix",
    settings_about_voices_desc:"Les voix proposées viennent de ton appareil (iPad, Android ou Windows) — elles peuvent changer d'un appareil à l'autre. L'enregistrement de \"ma voix\" (dans une histoire) rejoue exactement ta propre voix, ce n'est pas une voix synthétique.",
    quiz_question:"Quel est ce mot ?",
    quiz_replay:"🔊 Réécouter",
    quiz_score_label:"Score",
    quiz_score_sub:"Continue comme ça, tu progresses !",
    quiz_again:"🔁 Rejouer",
    quiz_home:"🏠 Accueil",
    quiz_see_score:"🏁 Voir mon score",
    no_words_lang:"Aucun mot disponible dans cette langue pour l'instant.",
    no_stories_lang:"Aucune histoire dans cette langue pour l'instant — ajoutes-en une ci-dessous !",
    no_mywords:"Tu n'as pas encore ajouté de mot.",
    all_words_read:"Bravo, tu as lu tous les mots !"
  },
  it:{
    home_title:"Ciao! Pronto a giocare con le parole?",
    home_subtitle:"Scegli un'attività per iniziare l'avventura 🌟",
    card_syllables_title:"Gioco delle sillabe",
    card_syllables_desc:"Componi le parole passo dopo passo",
    card_words_title:"Lettura di parole intere",
    card_words_desc:"Leggi la parola intera ad alta voce",
    card_quiz_title:"Quiz",
    card_quiz_desc:"Indovina la parola giusta",
    card_stories_title:"Storie",
    card_stories_desc:"Ascolta e leggi belle storie",
    card_mywords_title:"Le mie parole",
    card_mywords_desc:"Aggiungi le tue parole",
    card_settings_title:"La mia voce e impostazioni",
    card_settings_desc:"Scegli una voce o registra la tua",
    card_sentences_title:"Frasi",
    card_sentences_desc:"Rimetti le parole in ordine",
    card_sound_title:"Il suono iniziale",
    card_sound_desc:"Trova l'immagine che inizia allo stesso modo",
    title_category:"Scegli una categoria",
    title_sentences:"Frasi",
    title_sound:"Il suono iniziale",
    title_progress:"Progressi",
    settings_progress:"Progressi del bambino",
    settings_progress_desc:"Guarda quali parole sono già ben padroneggiate e quali hanno bisogno di più pratica.",
    btn_see_progress:"📊 Vedi i progressi",
    word_ph_category:"Categoria (es: Animali, Facile...) — lascia vuoto per Generale",
    btn_translate:"🌐 Traduci",
    btn_translate_title:"🌐 Traduci il titolo",
    btn_translate_text:"🌐 Traduci il testo",
    sentence_form_add_title:"➕ Aggiungi una frase",
    sentence_ph_text:"Scrivi una frase corta (es: Il cane corre veloce)",
    sentence_form_add_btn:"✅ Aggiungi la frase",
    import_sentences_hint:"Oppure importa più frasi insieme da un file .txt (una frase per riga: \"Il gatto dorme|🐱|Animali\"):",
    btn_import_sentences_txt:"📄 Importa un elenco di frasi (.txt)",
    btn_manage_sentences:"📝 Gestisci le mie frasi",
    title_sentence_manager:"Le mie frasi",
    sentences_intro:"Aggiungi, modifica o elimina le tue frasi per il gioco \"Frasi\".",
    sentences_list_title:"Le mie frasi aggiunte",
    btn_add_word_quick:"✏️ Aggiungi altre parole",
    back:"← Indietro",
    title_syllables:"Gioco delle sillabe",
    title_words:"Lettura di parole intere",
    title_quiz:"Quiz",
    title_stories:"Storie",
    title_mywords:"Le mie parole",
    title_settings:"Impostazioni",
    btn_listen_word:"🔊 Ascolta la parola",
    btn_next_word:"➡️ Parola successiva",
    btn_next_sentence:"➡️ Frase successiva",
    btn_prev_word:"⬅️ Precedente",
    btn_next_word_arrow:"Successiva ➡️",
    btn_listen:"🔊 Ascolta",
    btn_show_image:"👀 Mostra l'immagine",
    btn_hide_image:"🙈 Nascondi immagine",
    btn_retry:"🤔 Da rivedere",
    btn_success:"👍 Ce l'ho fatta!",
    mywords_intro:"Aggiungi parole in francese o in italiano per il gioco delle sillabe, la lettura di parole e il quiz.",
    category_filter_hint:"Scegli una categoria per filtrare la lista e aggiungere direttamente una parola in essa:",
    word_form_add_title:"➕ Aggiungi una parola",
    word_ph_text:"La parola (es: dinosauro)",
    word_ph_syllables:"Sillabe separate da trattini (es: di-no-sau-ro) — lascia vuoto per una divisione automatica",
    word_ph_emoji:"Un emoji per la parola (es: 🦖)",
    photo_label:"📷 Oppure aggiungi una tua foto (sostituisce l'emoji):",
    word_form_add_btn:"✅ Aggiungi la parola",
    btn_cancel:"✖️ Annulla",
    import_words_hint:"Oppure importa più parole insieme da un file .txt (una parola per riga, oppure \"parola|sillabe|emoji|categoria\"):",
    btn_import_words_txt:"📄 Importa un elenco di parole (.txt)",
    btn_download_template:"⬇️ Modello .txt",
    import_stories_hint:"Oppure importa più storie insieme da un file .txt (una storia per riga: \"titolo|testo|emoji\"):",
    btn_import_stories_txt:"📄 Importa un elenco di storie (.txt)",
    mywords_list_title:"Le mie parole aggiunte",
    btn_play_syllables_mine:"🪨 Gioca alle sillabe con le mie parole",
    btn_read_mine:"🔤 Leggi le mie parole intere",
    btn_quiz_mine:"🎯 Quiz con le mie parole",
    btn_manage_groups:"👥 Gestisci i miei gruppi di parole",
    title_groups:"I miei gruppi",
    groups_intro:"Crea un gruppo e scegli a mano quali parole contiene — utile per preparare una lezione precisa.",
    group_form_add_title:"➕ Crea un gruppo",
    group_ph_name:"Nome del gruppo (es: Lezione di lunedì)",
    groups_pick_hint:"Seleziona le parole da includere:",
    group_form_add_btn:"✅ Salva il gruppo",
    groups_list_title:"Gruppi creati",
    story_form_add_title:"➕ Aggiungi una storia",
    story_ph_title:"Titolo della storia (es: Il gattino curioso)",
    story_ph_text:"Scrivi o incolla qui il testo della storia...",
    story_ph_emoji:"Un emoji per la storia (es: 🐱)",
    story_form_add_btn:"✅ Aggiungi la storia",
    btn_read_story:"▶️ Leggi la storia",
    label_voice:"Voce",
    label_speed:"Velocità",
    btn_record:"🎙️ Registra con la mia voce",
    btn_import_mp3:"📁 Importa un MP3",
    btn_listen_myvoice:"🔊 Ascolta la mia voce",
    voice_slots_title:"🎙️ Voci personalizzate per questa storia",
    voice_slots_hint:"Aggiungi fino a 3 voci (registrate o importate) e scegli quale ascoltare.",
    slot_default_label:"Voce",
    slot_record:"🎙️ Registra",
    slot_stop:"⏹️ Stop",
    slot_import:"📁 MP3",
    slot_listen:"🔊 Ascolta",
    slot_delete:"🗑️",
    slot_recording:"Registrazione in corso...",
    slot_empty:"Nessuna voce qui per il momento.",
    settings_voice_fr:"Voce per il francese 🇫🇷",
    settings_voice_it:"Voce per l'italiano 🇮🇹",
    settings_test:"Prova le voci",
    settings_contrast:"Lettura ad alto contrasto",
    settings_contrast_desc:"Contrasto elevato, testo più grande e spaziato",
    settings_autorepeat:"Ripetizione automatica",
    settings_autorepeat_desc:"Ogni parola viene ripetuta due volte per memorizzarla meglio",
    settings_simplequiz:"Quiz semplificato",
    settings_simplequiz_desc:"2 scelte invece di 3, senza fretta",
    settings_storage:"Salvataggio",
    settings_storage_desc:"Le tue parole, storie, registrazioni e stelle vengono salvate automaticamente in questo browser.",
    settings_backup_hint:"⚠️ Lo spazio di archiviazione del browser ha un limite. Per non perdere mai il tuo lavoro (soprattutto con molte registrazioni), esporta regolarmente un backup.",
    btn_export:"💾 Esporta un backup",
    btn_import_backup:"📂 Importa un backup",
    btn_reset:"🗑️ Reimposta tutti i dati",
    settings_about_voices:"A proposito delle voci",
    settings_about_voices_desc:"Le voci proposte provengono dal tuo dispositivo (iPad, Android o Windows) — possono cambiare da un dispositivo all'altro. La registrazione \"la mia voce\" (in una storia) riproduce esattamente la tua voce, non è una voce sintetica.",
    quiz_question:"Qual è questa parola?",
    quiz_replay:"🔊 Riascolta",
    quiz_score_label:"Punteggio",
    quiz_score_sub:"Continua così, stai migliorando!",
    quiz_again:"🔁 Rigioca",
    quiz_home:"🏠 Home",
    quiz_see_score:"🏁 Vedi il punteggio",
    no_words_lang:"Nessuna parola disponibile in questa lingua per il momento.",
    no_stories_lang:"Nessuna storia in questa lingua per il momento — aggiungine una qui sotto!",
    no_mywords:"Non hai ancora aggiunto nessuna parola.",
    all_words_read:"Bravo, hai letto tutte le parole!"
  }
};
function applyUILang(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(I18N[currentLang][key] !== undefined) el.textContent = I18N[currentLang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    if(I18N[currentLang][key] !== undefined) el.placeholder = I18N[currentLang][key];
  });
}
function t(key){
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.fr[key] || key;
}

const WORDS_FR = [
  {word:"maison", syllables:["mai","son"], emoji:"🏠", lang:"fr", category:"Maison"},
  {word:"table", syllables:["ta","ble"], emoji:"🍽️", lang:"fr", category:"Maison"},
  {word:"chaise", syllables:["chai","se"], emoji:"🪑", lang:"fr", category:"Maison"},
  {word:"lit", syllables:["lit"], emoji:"🛏️", lang:"fr", category:"Maison"},
  {word:"porte", syllables:["por","te"], emoji:"🚪", lang:"fr", category:"Maison"},
  {word:"fenêtre", syllables:["fe","nê","tre"], emoji:"🪟", lang:"fr", category:"Maison"},
  {word:"livre", syllables:["li","vre"], emoji:"📖", lang:"fr", category:"Maison"},
  {word:"soleil", syllables:["so","leil"], emoji:"☀️", lang:"fr", category:"Nature"},
  {word:"lune", syllables:["lu","ne"], emoji:"🌙", lang:"fr", category:"Nature"},
  {word:"étoile", syllables:["é","toi","le"], emoji:"⭐", lang:"fr", category:"Nature"},
  {word:"arbre", syllables:["ar","bre"], emoji:"🌳", lang:"fr", category:"Nature"},
  {word:"fleur", syllables:["fleur"], emoji:"🌸", lang:"fr", category:"Nature"},
  {word:"montagne", syllables:["mon","ta","gne"], emoji:"⛰️", lang:"fr", category:"Nature"},
  {word:"mer", syllables:["mer"], emoji:"🌊", lang:"fr", category:"Nature"},
  {word:"tomate", syllables:["to","ma","te"], emoji:"🍅", lang:"fr", category:"Nourriture"},
  {word:"chocolat", syllables:["cho","co","lat"], emoji:"🍫", lang:"fr", category:"Nourriture"},
  {word:"banane", syllables:["ba","na","ne"], emoji:"🍌", lang:"fr", category:"Nourriture"},
  {word:"pain", syllables:["pain"], emoji:"🍞", lang:"fr", category:"Nourriture"},
  {word:"fromage", syllables:["fro","ma","ge"], emoji:"🧀", lang:"fr", category:"Nourriture"},
  {word:"pomme", syllables:["pom","me"], emoji:"🍎", lang:"fr", category:"Nourriture"},
  {word:"fraise", syllables:["frai","se"], emoji:"🍓", lang:"fr", category:"Nourriture"},
  {word:"lait", syllables:["lait"], emoji:"🥛", lang:"fr", category:"Nourriture"},
  {word:"gâteau", syllables:["gâ","teau"], emoji:"🎂", lang:"fr", category:"Nourriture"},
  {word:"glace", syllables:["gla","ce"], emoji:"🍦", lang:"fr", category:"Nourriture"},
  {word:"pizza", syllables:["piz","za"], emoji:"🍕", lang:"fr", category:"Nourriture"},
  {word:"papillon", syllables:["pa","pi","llon"], emoji:"🦋", lang:"fr", category:"Animaux"},
  {word:"poisson", syllables:["pois","son"], emoji:"🐟", lang:"fr", category:"Animaux"},
  {word:"chat", syllables:["chat"], emoji:"🐱", lang:"fr", category:"Animaux"},
  {word:"chien", syllables:["chien"], emoji:"🐶", lang:"fr", category:"Animaux"},
  {word:"lion", syllables:["li","on"], emoji:"🦁", lang:"fr", category:"Animaux"},
  {word:"vache", syllables:["va","che"], emoji:"🐮", lang:"fr", category:"Animaux"},
  {word:"cheval", syllables:["che","val"], emoji:"🐴", lang:"fr", category:"Animaux"},
  {word:"oiseau", syllables:["oi","seau"], emoji:"🐦", lang:"fr", category:"Animaux"},
  {word:"lapin", syllables:["la","pin"], emoji:"🐰", lang:"fr", category:"Animaux"},
  {word:"souris", syllables:["sou","ris"], emoji:"🐭", lang:"fr", category:"Animaux"},
  {word:"canard", syllables:["ca","nard"], emoji:"🦆", lang:"fr", category:"Animaux"},
  {word:"vélo", syllables:["vé","lo"], emoji:"🚲", lang:"fr", category:"Jeux"},
  {word:"ballon", syllables:["bal","lon"], emoji:"🎈", lang:"fr", category:"Jeux"},
  {word:"nounours", syllables:["nou","nours"], emoji:"🧸", lang:"fr", category:"Jeux"},
  {word:"puzzle", syllables:["puz","zle"], emoji:"🧩", lang:"fr", category:"Jeux"},
  {word:"cerf-volant", syllables:["cerf","vo","lant"], emoji:"🪁", lang:"fr", category:"Jeux"},
  {word:"voiture", syllables:["voi","tu","re"], emoji:"🚗", lang:"fr", category:"Transports"},
  {word:"train", syllables:["train"], emoji:"🚂", lang:"fr", category:"Transports"},
  {word:"bateau", syllables:["ba","teau"], emoji:"⛵", lang:"fr", category:"Transports"},
  {word:"avion", syllables:["a","vion"], emoji:"✈️", lang:"fr", category:"Transports"},
  {word:"bus", syllables:["bus"], emoji:"🚌", lang:"fr", category:"Transports"},
  {word:"camion", syllables:["ca","mion"], emoji:"🚚", lang:"fr", category:"Transports"},
  {word:"moto", syllables:["mo","to"], emoji:"🏍️", lang:"fr", category:"Transports"},
  {word:"fusée", syllables:["fu","sée"], emoji:"🚀", lang:"fr", category:"Transports"},
  {word:"tête", syllables:["tê","te"], emoji:"😀", lang:"fr", category:"Corps"},
  {word:"main", syllables:["main"], emoji:"✋", lang:"fr", category:"Corps"},
  {word:"pied", syllables:["pied"], emoji:"🦶", lang:"fr", category:"Corps"},
  {word:"oeil", syllables:["oeil"], emoji:"👁️", lang:"fr", category:"Corps"},
  {word:"bouche", syllables:["bou","che"], emoji:"👄", lang:"fr", category:"Corps"},
  {word:"nez", syllables:["nez"], emoji:"👃", lang:"fr", category:"Corps"},
  {word:"oreille", syllables:["o","reille"], emoji:"👂", lang:"fr", category:"Corps"},
  {word:"bras", syllables:["bras"], emoji:"💪", lang:"fr", category:"Corps"},
  {word:"pluie", syllables:["pluie"], emoji:"🌧️", lang:"fr", category:"Météo"},
  {word:"neige", syllables:["nei","ge"], emoji:"❄️", lang:"fr", category:"Météo"},
  {word:"vent", syllables:["vent"], emoji:"💨", lang:"fr", category:"Météo"},
  {word:"nuage", syllables:["nua","ge"], emoji:"☁️", lang:"fr", category:"Météo"},
  {word:"orage", syllables:["o","ra","ge"], emoji:"⛈️", lang:"fr", category:"Météo"},
  {word:"brouillard", syllables:["brouil","lard"], emoji:"🌫️", lang:"fr", category:"Météo"}
];
const WORDS_IT = [
  {word:"casa", syllables:["ca","sa"], emoji:"🏠", lang:"it", category:"Casa"},
  {word:"tavolo", syllables:["ta","vo","lo"], emoji:"🍽️", lang:"it", category:"Casa"},
  {word:"sedia", syllables:["se","dia"], emoji:"🪑", lang:"it", category:"Casa"},
  {word:"letto", syllables:["let","to"], emoji:"🛏️", lang:"it", category:"Casa"},
  {word:"porta", syllables:["por","ta"], emoji:"🚪", lang:"it", category:"Casa"},
  {word:"finestra", syllables:["fi","ne","stra"], emoji:"🪟", lang:"it", category:"Casa"},
  {word:"libro", syllables:["li","bro"], emoji:"📖", lang:"it", category:"Casa"},
  {word:"sole", syllables:["so","le"], emoji:"☀️", lang:"it", category:"Natura"},
  {word:"luna", syllables:["lu","na"], emoji:"🌙", lang:"it", category:"Natura"},
  {word:"stella", syllables:["stel","la"], emoji:"⭐", lang:"it", category:"Natura"},
  {word:"albero", syllables:["al","be","ro"], emoji:"🌳", lang:"it", category:"Natura"},
  {word:"fiore", syllables:["fio","re"], emoji:"🌸", lang:"it", category:"Natura"},
  {word:"montagna", syllables:["mon","ta","gna"], emoji:"⛰️", lang:"it", category:"Natura"},
  {word:"mare", syllables:["ma","re"], emoji:"🌊", lang:"it", category:"Natura"},
  {word:"pomodoro", syllables:["po","mo","do","ro"], emoji:"🍅", lang:"it", category:"Cibo"},
  {word:"cioccolato", syllables:["cioc","co","la","to"], emoji:"🍫", lang:"it", category:"Cibo"},
  {word:"banana", syllables:["ba","na","na"], emoji:"🍌", lang:"it", category:"Cibo"},
  {word:"pane", syllables:["pa","ne"], emoji:"🍞", lang:"it", category:"Cibo"},
  {word:"formaggio", syllables:["for","mag","gio"], emoji:"🧀", lang:"it", category:"Cibo"},
  {word:"mela", syllables:["me","la"], emoji:"🍎", lang:"it", category:"Cibo"},
  {word:"fragola", syllables:["fra","go","la"], emoji:"🍓", lang:"it", category:"Cibo"},
  {word:"latte", syllables:["lat","te"], emoji:"🥛", lang:"it", category:"Cibo"},
  {word:"torta", syllables:["tor","ta"], emoji:"🎂", lang:"it", category:"Cibo"},
  {word:"gelato", syllables:["ge","la","to"], emoji:"🍦", lang:"it", category:"Cibo"},
  {word:"pizza", syllables:["piz","za"], emoji:"🍕", lang:"it", category:"Cibo"},
  {word:"farfalla", syllables:["far","fal","la"], emoji:"🦋", lang:"it", category:"Animali"},
  {word:"pesce", syllables:["pe","sce"], emoji:"🐟", lang:"it", category:"Animali"},
  {word:"gatto", syllables:["gat","to"], emoji:"🐱", lang:"it", category:"Animali"},
  {word:"cane", syllables:["ca","ne"], emoji:"🐶", lang:"it", category:"Animali"},
  {word:"leone", syllables:["le","o","ne"], emoji:"🦁", lang:"it", category:"Animali"},
  {word:"mucca", syllables:["muc","ca"], emoji:"🐮", lang:"it", category:"Animali"},
  {word:"cavallo", syllables:["ca","val","lo"], emoji:"🐴", lang:"it", category:"Animali"},
  {word:"uccello", syllables:["uc","cel","lo"], emoji:"🐦", lang:"it", category:"Animali"},
  {word:"coniglio", syllables:["co","ni","glio"], emoji:"🐰", lang:"it", category:"Animali"},
  {word:"topo", syllables:["to","po"], emoji:"🐭", lang:"it", category:"Animali"},
  {word:"anatra", syllables:["a","na","tra"], emoji:"🦆", lang:"it", category:"Animali"},
  {word:"bici", syllables:["bi","ci"], emoji:"🚲", lang:"it", category:"Giochi"},
  {word:"pallone", syllables:["pal","lo","ne"], emoji:"🎈", lang:"it", category:"Giochi"},
  {word:"orsacchiotto", syllables:["or","sac","chiot","to"], emoji:"🧸", lang:"it", category:"Giochi"},
  {word:"puzzle", syllables:["puz","zle"], emoji:"🧩", lang:"it", category:"Giochi"},
  {word:"aquilone", syllables:["a","qui","lo","ne"], emoji:"🪁", lang:"it", category:"Giochi"},
  {word:"macchina", syllables:["mac","chi","na"], emoji:"🚗", lang:"it", category:"Trasporti"},
  {word:"treno", syllables:["tre","no"], emoji:"🚂", lang:"it", category:"Trasporti"},
  {word:"barca", syllables:["bar","ca"], emoji:"⛵", lang:"it", category:"Trasporti"},
  {word:"aereo", syllables:["a","e","re","o"], emoji:"✈️", lang:"it", category:"Trasporti"},
  {word:"autobus", syllables:["au","to","bus"], emoji:"🚌", lang:"it", category:"Trasporti"},
  {word:"camion", syllables:["ca","mion"], emoji:"🚚", lang:"it", category:"Trasporti"},
  {word:"moto", syllables:["mo","to"], emoji:"🏍️", lang:"it", category:"Trasporti"},
  {word:"razzo", syllables:["raz","zo"], emoji:"🚀", lang:"it", category:"Trasporti"},
  {word:"testa", syllables:["te","sta"], emoji:"😀", lang:"it", category:"Corpo"},
  {word:"mano", syllables:["ma","no"], emoji:"✋", lang:"it", category:"Corpo"},
  {word:"piede", syllables:["pie","de"], emoji:"🦶", lang:"it", category:"Corpo"},
  {word:"occhio", syllables:["oc","chio"], emoji:"👁️", lang:"it", category:"Corpo"},
  {word:"bocca", syllables:["boc","ca"], emoji:"👄", lang:"it", category:"Corpo"},
  {word:"naso", syllables:["na","so"], emoji:"👃", lang:"it", category:"Corpo"},
  {word:"orecchio", syllables:["o","rec","chio"], emoji:"👂", lang:"it", category:"Corpo"},
  {word:"braccio", syllables:["brac","cio"], emoji:"💪", lang:"it", category:"Corpo"},
  {word:"pioggia", syllables:["piog","gia"], emoji:"🌧️", lang:"it", category:"Meteo"},
  {word:"neve", syllables:["ne","ve"], emoji:"❄️", lang:"it", category:"Meteo"},
  {word:"vento", syllables:["ven","to"], emoji:"💨", lang:"it", category:"Meteo"},
  {word:"nuvola", syllables:["nu","vo","la"], emoji:"☁️", lang:"it", category:"Meteo"},
  {word:"temporale", syllables:["tem","po","ra","le"], emoji:"⛈️", lang:"it", category:"Meteo"},
  {word:"nebbia", syllables:["neb","bia"], emoji:"🌫️", lang:"it", category:"Meteo"}
];
let customWords = []; // {word, syllables, emoji, image, audio, lang, category}
let newWordImageData = null;
let newStoryImageData = null;
let editingWordIndex = null;
let editingBaseWordKey = null; // set when editing a built-in word (its original "lang:word" key)
let editingStoryId = null;
let selectedCategoryFilter = null; // null = show all categories
let selectedDifficultyFilter = null; // null | 'easy' (<=2 syllables/mots) | 'hard' (3+)
let wordStats = {}; // key "lang:word" -> {streak, attempts, successes}
let gameWrongCount = 0;
let autoSpeakTimeout = null; // tracks pending delayed speech, so switching words cancels stale audio
let reinforcedRepeatTimeout = null; // tracks the pending "say it again" from speakReinforced
function scheduleAutoSpeak(fn, delay){
  if(autoSpeakTimeout){ clearTimeout(autoSpeakTimeout); autoSpeakTimeout = null; }
  if(reinforcedRepeatTimeout){ clearTimeout(reinforcedRepeatTimeout); reinforcedRepeatTimeout = null; } // cancel any pending "repeat the word again" from the previous word too
  // stop any speech still queued/playing from a moment ago right away — the actual
  // new speech only starts after "delay", so this never repeats the tight
  // cancel()-then-speak() sequence that broke voice selection on Windows/Chrome
  window.speechSynthesis.cancel();
  autoSpeakTimeout = setTimeout(()=>{ autoSpeakTimeout = null; fn(); }, delay);
}
let sentenceWrongCount = 0;

function wordKey(w){
  return (w.lang || currentLang) + ':' + (w.word || '').toLowerCase();
}
/* ---------------- DUPLICATE DETECTION ---------------- */
function wordExists(word, lang, excludeBaseKey, excludeCustomIdx){
  const norm = word.trim().toLowerCase();
  return wordPool(lang).some(w=>{
    if(w.word.trim().toLowerCase() !== norm) return false;
    if(w.isBase && w.baseKey === excludeBaseKey) return false; // it's the one being edited
    if(!w.isBase && excludeCustomIdx !== undefined && customWords[excludeCustomIdx] === w) return false;
    return true;
  });
}
function sentenceExists(words, lang, excludeSentence){
  const norm = words.join(' ').trim().toLowerCase();
  return sentencePool(lang).some(s=>{
    if(s.words.join(' ').trim().toLowerCase() !== norm) return false;
    if(excludeSentence && s === excludeSentence) return false;
    return true;
  });
}
function storyExists(title, lang, excludeId){
  const norm = title.trim().toLowerCase();
  return stories.some(s=>{
    if(s.lang !== lang) return false;
    if(s.title.trim().toLowerCase() !== norm) return false;
    if(excludeId !== undefined && s.id === excludeId) return false;
    return true;
  });
}
function recordWordResult(w, success){
  if(!w || !w.word) return;
  const key = wordKey(w);
  if(!wordStats[key]) wordStats[key] = {streak:0, attempts:0, successes:0};
  const s = wordStats[key];
  s.attempts++;
  if(success){ s.successes++; s.streak++; } else { s.streak = 0; }
  saveState();
}
function wordStreak(w){
  const s = wordStats[wordKey(w)];
  return s ? s.streak : 0;
}
function isMastered(w){
  const s = wordStats[wordKey(w)];
  if(s && typeof s.manual === 'boolean') return s.manual;
  return wordStreak(w) >= 3;
}
// picks up to n items from pool, favoring words that aren't mastered yet (spaced repetition)
function weightedPick(pool, n){
  const weighted = [];
  pool.forEach(w=>{
    const effectiveStreak = isMastered(w) ? 3 : Math.min(wordStreak(w), 2);
    const weight = Math.max(1, 4 - effectiveStreak);
    for(let i=0;i<weight;i++) weighted.push(w);
  });
  const shuffled = weighted.sort(()=>Math.random()-0.5);
  const seen = new Set();
  const result = [];
  for(const w of shuffled){
    const k = wordKey(w);
    if(!seen.has(k)){ seen.add(k); result.push(w); }
    if(result.length >= n) break;
  }
  return result;
}
let newWordAudioData = null; // {url: dataURL}
let wordMediaRecorder = null;
let wordRecordedChunks = [];
let isRecordingWord = false;
let pendingGameType = null; // which game to launch after picking a category

const SENTENCES_FR = [
  {words:["Le","chat","dort"], emoji:"🐱", lang:"fr", category:"Animaux"},
  {words:["Le","soleil","brille"], emoji:"☀️", lang:"fr", category:"Nature"},
  {words:["La","banane","est","jaune"], emoji:"🍌", lang:"fr", category:"Nourriture"},
  {words:["J'aime","le","chocolat"], emoji:"🍫", lang:"fr", category:"Nourriture"},
  {words:["Le","poisson","nage"], emoji:"🐟", lang:"fr", category:"Animaux"},
  {words:["La","lune","est","belle"], emoji:"🌙", lang:"fr", category:"Nature"},
  {words:["Le","chien","court","vite"], emoji:"🐶", lang:"fr", category:"Animaux"},
  {words:["Il","pleut","beaucoup"], emoji:"🌧️", lang:"fr", category:"Météo"},
  {words:["La","voiture","est","rapide"], emoji:"🚗", lang:"fr", category:"Transports"},
  {words:["J'ai","mal","au","pied"], emoji:"🦶", lang:"fr", category:"Corps"}
];
const SENTENCES_IT = [
  {words:["Il","gatto","dorme"], emoji:"🐱", lang:"it", category:"Animali"},
  {words:["Il","sole","splende"], emoji:"☀️", lang:"it", category:"Natura"},
  {words:["La","banana","è","gialla"], emoji:"🍌", lang:"it", category:"Cibo"},
  {words:["Mi","piace","il","cioccolato"], emoji:"🍫", lang:"it", category:"Cibo"},
  {words:["Il","pesce","nuota"], emoji:"🐟", lang:"it", category:"Animali"},
  {words:["La","luna","è","bella"], emoji:"🌙", lang:"it", category:"Natura"},
  {words:["Il","cane","corre","veloce"], emoji:"🐶", lang:"it", category:"Animali"},
  {words:["Piove","molto","oggi"], emoji:"🌧️", lang:"it", category:"Meteo"},
  {words:["La","macchina","è","veloce"], emoji:"🚗", lang:"it", category:"Trasporti"},
  {words:["Mi","fa","male","il","piede"], emoji:"🦶", lang:"it", category:"Corpo"}
];
let customSentences = []; // {words:[], emoji, lang, category}
let editingSentenceIndex = null;
function sentencePool(lang){
  const base = lang === 'it' ? SENTENCES_IT : SENTENCES_FR;
  return base.concat(customSentences.filter(s=>s.lang===lang));
}
function sentenceCategoriesForLang(lang){
  const cats = sentencePool(lang).map(s => s.category || (lang==='it' ? 'Generale' : 'Général'));
  return [...new Set(cats)].sort();
}
let customGroups = []; // {name, lang, wordKeys:[...]}
let editingGroupIndex = null;
function renderGroupWordChecklist(){
  const lang = document.getElementById('new-group-lang').value;
  const container = document.getElementById('group-word-checklist');
  const words = wordPool(lang);
  const checkedKeys = (editingGroupIndex !== null) ? customGroups[editingGroupIndex].wordKeys : [];
  container.innerHTML = words.map(w=>{
    const key = wordKey(w);
    const checked = checkedKeys.includes(key) ? 'checked' : '';
    return `<label style="display:flex;align-items:center;gap:8px;padding:4px 0;font-weight:600;">
      <input type="checkbox" value="${key}" ${checked} style="width:18px;height:18px;">
      ${iconHtml(w, 26)} ${w.word}
    </label>`;
  }).join('') || `<p style="font-weight:600;color:#7a6b8a;">${t('no_words_lang')}</p>`;
}
function saveGroup(){
  const name = document.getElementById('new-group-name').value.trim();
  const lang = document.getElementById('new-group-lang').value;
  if(!name){ alert(currentLang==='it' ? 'Scrivi un nome per il gruppo.' : 'Écris un nom pour le groupe.'); return; }
  const checked = Array.from(document.querySelectorAll('#group-word-checklist input:checked')).map(cb=>cb.value);
  if(checked.length === 0){ alert(currentLang==='it' ? 'Seleziona almeno una parola.' : 'Sélectionne au moins un mot.'); return; }
  const groupData = {name, lang, wordKeys: checked};
  if(editingGroupIndex !== null){ customGroups[editingGroupIndex] = groupData; }
  else { customGroups.push(groupData); }
  cancelEditGroup();
  renderGroupsScreen();
  saveState();
}
function editGroup(idx){
  const g = customGroups[idx];
  editingGroupIndex = idx;
  document.getElementById('new-group-name').value = g.name;
  document.getElementById('new-group-lang').value = g.lang;
  renderGroupWordChecklist();
  document.getElementById('group-form-title').textContent = currentLang==='it' ? '✏️ Modifier le groupe' : '✏️ Modifier le groupe';
  document.getElementById('group-form-submit').textContent = currentLang==='it' ? '💾 Salva le modifiche' : '💾 Enregistrer les modifications';
  document.getElementById('group-form-cancel').style.display = 'inline-flex';
  document.getElementById('group-form-title').scrollIntoView({behavior:'smooth', block:'center'});
}
function cancelEditGroup(){
  editingGroupIndex = null;
  document.getElementById('new-group-name').value = '';
  document.getElementById('group-form-title').textContent = t('group_form_add_title');
  document.getElementById('group-form-submit').textContent = t('group_form_add_btn');
  document.getElementById('group-form-cancel').style.display = 'none';
  renderGroupWordChecklist();
}
function deleteGroup(idx){
  customGroups.splice(idx,1);
  if(editingGroupIndex === idx) cancelEditGroup();
  renderGroupsScreen();
  saveState();
}
function groupWords(idx){
  const g = customGroups[idx];
  return wordPool(g.lang).filter(w => g.wordKeys.includes(wordKey(w)));
}
function playGroup(idx, gameType){
  const list = groupWords(idx);
  if(list.length === 0){ alert(t('no_words_lang')); return; }
  if(gameType === 'syllables') startSyllableGame(list);
  else if(gameType === 'words') startWordReading(list);
  else if(gameType === 'quiz') startQuiz(list);
}
function renderGroupsScreen(){
  const langSel = document.getElementById('new-group-lang');
  if(langSel) langSel.value = currentLang;
  renderGroupWordChecklist();
  const el = document.getElementById('groups-list');
  if(customGroups.length === 0){
    el.innerHTML = `<p style="font-weight:600;color:#7a6b8a;">${currentLang==='it' ? 'Nessun gruppo creato ancora.' : "Aucun groupe créé pour l'instant."}</p>`;
    return;
  }
  el.innerHTML = '';
  customGroups.forEach((g,idx)=>{
    const item = document.createElement('div');
    item.className = 'story-item';
    item.style.cursor = 'default';
    item.style.flexWrap = 'wrap';
    item.innerHTML = `
      <div class="info" style="flex:1;min-width:160px;">
        <h4>${g.name} <span class="tag">${g.lang==='it' ? '🇮🇹 Italiano' : '🇫🇷 Français'}</span></h4>
        <p>${g.wordKeys.length} ${currentLang==='it' ? 'parole' : 'mots'}</p>
      </div>
      <button class="icon-btn" style="background:var(--coral);" onclick="playGroup(${idx},'syllables')" title="Jouer aux syllabes">🪨</button>
      <button class="icon-btn" style="background:var(--ocean);" onclick="playGroup(${idx},'words')" title="Lire les mots">🔤</button>
      <button class="icon-btn" style="background:var(--sunshine);" onclick="playGroup(${idx},'quiz')" title="Quiz">🎯</button>
      <button class="icon-btn" style="background:var(--lilac);" onclick="editGroup(${idx})" title="Modifier">✏️</button>
      <button class="icon-btn" style="background:var(--coral);" onclick="deleteGroup(${idx})" title="Supprimer">🗑️</button>
    `;
    el.appendChild(item);
  });
}


function resizeImageFile(file, maxDim, callback){
  const reader = new FileReader();
  reader.onload = function(e){
    const img = new Image();
    img.onload = function(){
      let w = img.width, h = img.height;
      if(w > h){ if(w > maxDim){ h = Math.round(h*maxDim/w); w = maxDim; } }
      else { if(h > maxDim){ w = Math.round(w*maxDim/h); h = maxDim; } }
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      callback(canvas.toDataURL('image/jpeg',0.82));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}
function previewImage(evt, previewId, kind){
  const file = evt.target.files[0];
  if(!file) return;
  resizeImageFile(file, 400, dataUrl=>{
    if(kind === 'word') newWordImageData = dataUrl; else newStoryImageData = dataUrl;
    document.getElementById(previewId).innerHTML =
      `<img src="${dataUrl}" style="width:70px;height:70px;object-fit:cover;border-radius:12px;box-shadow:0 3px 0 rgba(0,0,0,.15);">`;
  });
}
function iconHtml(item, size){
  size = size || 60;
  if(item.image){
    return `<img src="${item.image}" style="width:${size}px;height:${size}px;object-fit:cover;border-radius:${Math.round(size*0.22)}px;box-shadow:0 3px 0 rgba(0,0,0,.15);">`;
  }
  return `<span style="font-size:${Math.round(size*0.85)}px;">${item.emoji||''}</span>`;
}

let deletedBaseWordKeys = []; // array of "lang:word" keys for base words the user deleted
let baseWordOverrides = {}; // "lang:word" (original) -> edited fields
function wordPool(lang){
  const base = (lang === 'it' ? WORDS_IT : WORDS_FR)
    .filter(w => !deletedBaseWordKeys.includes(wordKey(w)))
    .map(w => {
      const key = wordKey(w);
      return baseWordOverrides[key] ? Object.assign({}, w, baseWordOverrides[key], {isBase:true, baseKey:key}) : Object.assign({}, w, {isBase:true, baseKey:key});
    });
  return base.concat(customWords.filter(w=>w.lang===lang));
}
function categoriesForLang(lang){
  const cats = wordPool(lang).map(w=>w.category || (lang==='it' ? 'Generale' : 'Général'));
  return [...new Set(cats)].sort();
}
function autoSyllabifyCore(w){
  // heuristic syllabifier for French/Italian: groups vowel runs as single nuclei
  // (handles diphthongs like "oi", "eau"), and distributes consonant clusters
  // following common rules — single consonant → next syllable, unsplittable
  // clusters (bl, br, tr, gn, ch...) stay together, other clusters split evenly.
  const vowels = 'aeiouyàèéìòùâêîôûäëïöü';
  const isVowel = c => vowels.includes(c);
  const unsplittable = new Set(['bl','br','cl','cr','dr','fl','fr','gl','gr','pl','pr','tr','vr','ch','gh','gn','sc','qu']);
  const chars = w.split('');
  const groups = [];
  let i = 0;
  while(i < chars.length){
    if(isVowel(chars[i])){
      let j = i;
      while(j < chars.length && isVowel(chars[j])) j++;
      groups.push({type:'V', text: chars.slice(i,j).join('')});
      i = j;
    } else {
      let j = i;
      while(j < chars.length && !isVowel(chars[j])) j++;
      groups.push({type:'C', text: chars.slice(i,j).join('')});
      i = j;
    }
  }
  if(!groups.some(g=>g.type==='V')) return [w];
  const syllables = [];
  let current = '';
  for(let k=0; k<groups.length; k++){
    const g = groups[k];
    if(g.type === 'C'){
      const isFirst = k === 0;
      const isLast = k === groups.length - 1;
      if(isFirst || isLast){
        current += g.text;
      } else {
        const c = g.text;
        if(c.length === 1){
          syllables.push(current);
          current = c;
        } else {
          const lastTwo = c.slice(-2);
          if(unsplittable.has(lastTwo)){
            current += c.slice(0, -2);
            syllables.push(current);
            current = lastTwo;
          } else {
            current += c.slice(0, 1);
            syllables.push(current);
            current = c.slice(1);
          }
        }
      }
    } else {
      current += g.text;
    }
  }
  syllables.push(current);
  return syllables.filter(Boolean);
}
function autoSyllabify(word){
  const w = word.toLowerCase();
  // compound words (hyphens, apostrophes, spaces) — syllabify each alphabetic
  // chunk separately, then re-attach the separators so they don't get treated
  // as consonants and produce broken results (e.g. "arc-en-ciel")
  const tokens = w.match(/[a-zàèéìòùâêîôûäëïöü]+|[^a-zàèéìòùâêîôûäëïöü]+/g);
  if(!tokens || tokens.length <= 1) return autoSyllabifyCore(w);
  let result = [];
  tokens.forEach(tok=>{
    if(/^[a-zàèéìòùâêîôûäëïöü]+$/.test(tok)){
      result = result.concat(autoSyllabifyCore(tok));
    } else if(result.length){
      result[result.length-1] += tok; // attach separator to the previous syllable
    } else {
      result.push(tok);
    }
  });
  return result.length ? result : [word];
}
// opens Google Translate in a new tab with the current field's text, pre-set to translate
// into whichever language is selected in the paired language dropdown — requires internet,
// and the person still copies the result back manually (no in-app auto-translation).
function openTranslateHelper(textFieldId, langFieldId){
  const textEl = document.getElementById(textFieldId);
  const text = (textEl.value || '').trim();
  if(!text){
    alert(currentLang==='it' ? 'Scrivi prima un testo da tradurre.' : "Écris d'abord un texte à traduire.");
    return;
  }
  const targetLang = document.getElementById(langFieldId).value || currentLang;
  const url = `https://translate.google.com/?sl=auto&tl=${targetLang}&text=${encodeURIComponent(text)}&op=translate`;
  window.open(url, '_blank');
}

/* ---------------- BULK IMPORT FROM .TXT ---------------- */
function downloadTextFile(filename, content){
  const blob = new Blob([content], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 2000);
}
function downloadWordsTemplate(){
  const content = currentLang==='it'
    ? "# Un modo semplice: una parola per riga\ncoccinella\nfarfalla\n\n# Un modo pi\u00f9 completo (facoltativo): parola|sillabe|emoji|categoria\ndinosauro|di-no-sau-ro|\ud83e\udd96|Animali\n"
    : "# Façon simple : un mot par ligne\ncoccinelle\npapillon\n\n# Façon complète (facultatif) : mot|syllabes|emoji|catégorie\ndinosaure|di-no-saure|\ud83e\udd96|Animaux\n";
  downloadTextFile('modele-mots.txt', content);
}
function downloadStoriesTemplate(){
  const content = currentLang==='it'
    ? "# Una storia per riga: titolo|testo|emoji (emoji facoltativa)\nIl coniglio veloce|Il coniglio corre nel prato. Salta felice tra i fiori.|\ud83d\udc30\n"
    : "# Une histoire par ligne : titre|texte|emoji (emoji facultatif)\nLe lapin rapide|Le lapin court dans le pré. Il saute joyeusement parmi les fleurs.|\ud83d\udc30\n";
  downloadTextFile('modele-histoires.txt', content);
}
function importWordsTxt(evt){
  const file = evt.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    const lang = document.getElementById('new-word-lang').value;
    const lines = reader.result.split(/\r?\n/).map(l=>l.trim()).filter(l=>l && !l.startsWith('#'));
    let count = 0, skipped = 0;
    const seenInFile = new Set();
    lines.forEach(line=>{
      const parts = line.split('|').map(p=>p.trim());
      const word = parts[0];
      if(!word) return;
      const norm = lang+':'+word.toLowerCase();
      if(seenInFile.has(norm) || wordExists(word, lang)){ skipped++; return; }
      seenInFile.add(norm);
      const syllables = parts[1] ? parts[1].split('-').map(s=>s.trim()).filter(Boolean) : autoSyllabify(word);
      const emoji = parts[2] || '📘';
      const category = parts[3] || (lang==='it' ? 'Generale' : 'Général');
      customWords.push({word, syllables, emoji, image:null, audio:null, lang, category});
      count++;
    });
    document.getElementById('words-txt-import').value = '';
    document.getElementById('words-import-status').textContent = currentLang==='it'
      ? `✅ ${count} parole importate! ${skipped ? `(${skipped} già presenti, saltate)` : ''}`
      : `✅ ${count} mots importés ! ${skipped ? `(${skipped} déjà présents, ignorés)` : ''}`;
    renderMyWords();
    saveState();
  };
  reader.readAsText(file, 'UTF-8');
}
function importStoriesTxt(evt){
  const file = evt.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    const lang = document.getElementById('new-story-lang').value;
    const lines = reader.result.split(/\r?\n/).map(l=>l.trim()).filter(l=>l && !l.startsWith('#'));
    let count = 0, skipped = 0;
    const seenInFile = new Set();
    lines.forEach(line=>{
      const parts = line.split('|').map(p=>p.trim());
      const title = parts[0];
      const text = parts[1];
      if(!title || !text) return;
      const norm = lang+':'+title.toLowerCase();
      if(seenInFile.has(norm) || storyExists(title, lang)){ skipped++; return; }
      seenInFile.add(norm);
      const emoji = parts[2] || '📘';
      const id = Date.now() + count;
      stories.push({id, title, emoji, image:null, text, lang});
      count++;
    });
    document.getElementById('stories-txt-import').value = '';
    document.getElementById('stories-import-status').textContent = currentLang==='it'
      ? `✅ ${count} storie importate! ${skipped ? `(${skipped} già presenti, saltate)` : ''}`
      : `✅ ${count} histoires importées ! ${skipped ? `(${skipped} déjà présentes, ignorées)` : ''}`;
    renderStoryList();
    saveState();
  };
  reader.readAsText(file, 'UTF-8');
}
function downloadSentencesTemplate(){
  const content = currentLang==='it'
    ? "# Una frase per riga: frase|emoji|categoria (emoji e categoria facoltative)\nIl gatto dorme|\ud83d\udc31|Animali\nLa mela \u00e8 rossa|\ud83c\udf4e|Cibo\n"
    : "# Une phrase par ligne : phrase|emoji|catégorie (emoji et catégorie facultatifs)\nLe chat dort|🐱|Animaux\nLa pomme est rouge|🍎|Nourriture\n";
  downloadTextFile('modele-phrases.txt', content);
}
function importSentencesTxt(evt){
  const file = evt.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    const lang = document.getElementById('new-sentence-lang').value;
    const lines = reader.result.split(/\r?\n/).map(l=>l.trim()).filter(l=>l && !l.startsWith('#'));
    let count = 0, skipped = 0;
    const seenInFile = new Set();
    lines.forEach(line=>{
      const parts = line.split('|').map(p=>p.trim());
      const phrase = parts[0];
      if(!phrase) return;
      const words = phrase.split(/\s+/).filter(Boolean);
      if(words.length < 2) return; // a "sentence" needs at least 2 words to be orderable
      const norm = lang+':'+words.join(' ').toLowerCase();
      if(seenInFile.has(norm) || sentenceExists(words, lang)){ skipped++; return; }
      seenInFile.add(norm);
      const emoji = parts[1] || '📘';
      const category = parts[2] || (lang==='it' ? 'Generale' : 'Général');
      customSentences.push({words, emoji, lang, category});
      count++;
    });
    document.getElementById('sentences-txt-import').value = '';
    document.getElementById('sentences-import-status').textContent = currentLang==='it'
      ? `✅ ${count} frasi importate! ${skipped ? `(${skipped} già presenti, saltate)` : ''}`
      : `✅ ${count} phrases importées ! ${skipped ? `(${skipped} déjà présentes, ignorées)` : ''}`;
    renderSentenceManager();
    saveState();
  };
  reader.readAsText(file, 'UTF-8');
}

let gameWords = [];
let gameIndex = 0;
let gameSlots = [];
let gameNextExpected = 0;

let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;

let wordsQueue = [];
let wordsIndex = 0;

let stories = [
  {id:1, lang:"fr", title:"Le petit chat curieux", emoji:"🐱", builtin:true,
   text:"Un petit chat vit dans un jardin. Il aime chasser les papillons. Un jour, il voit une étoile qui brille. Il rêve de voler jusqu'à la lune."},
  {id:2, lang:"fr", title:"La tomate et la banane", emoji:"🍅", builtin:true,
   text:"Dans le panier, il y a une tomate rouge et une banane jaune. Elles discutent du soleil. La tomate aime la pluie, la banane aime la chaleur."},
  {id:3, lang:"fr", title:"Le vélo magique", emoji:"🚲", builtin:true,
   text:"Léo a un vélo magique. Il pédale et vole au-dessus de la maison. Il salue le poisson dans l'étang. Puis il rentre pour manger du chocolat."},
  {id:7, lang:"fr", title:"Le chien et le chat", emoji:"🐶", builtin:true,
   text:"Le chien joue dans le jardin. Le chat dort sur la chaise. Il pleut dehors, alors ils restent à la maison. Ensemble, ils regardent la pluie tomber."},
  {id:8, lang:"fr", title:"Le voyage en train", emoji:"🚂", builtin:true,
   text:"Léa monte dans le train avec sa maman. Elle regarde les montagnes par la fenêtre. Le train traverse un pont au-dessus de la mer. Elle mange une pomme pendant le voyage."},
  {id:9, lang:"fr", title:"Une journée pluvieuse", emoji:"🌧️", builtin:true,
   text:"Il y a des nuages dans le ciel. Le vent souffle fort. Puis la pluie commence à tomber. Léo met ses bottes et va jouer dehors quand même."},
  {id:4, lang:"it", title:"Il gattino curioso", emoji:"🐱", builtin:true,
   text:"Un piccolo gatto vive in giardino. Gli piace rincorrere le farfalle. Un giorno vede una stella che brilla. Sogna di volare fino alla luna."},
  {id:5, lang:"it", title:"Il pomodoro e la banana", emoji:"🍅", builtin:true,
   text:"Nel cestino c'è un pomodoro rosso e una banana gialla. Parlano del sole. Il pomodoro ama la pioggia, la banana ama il caldo."},
  {id:6, lang:"it", title:"La bici magica", emoji:"🚲", builtin:true,
   text:"Leo ha una bici magica. Pedala e vola sopra la casa. Saluta il pesce nello stagno. Poi torna a casa per mangiare cioccolato."},
  {id:10, lang:"it", title:"Il cane e il gatto", emoji:"🐶", builtin:true,
   text:"Il cane gioca in giardino. Il gatto dorme sulla sedia. Fuori piove, quindi restano in casa. Insieme guardano la pioggia cadere."},
  {id:11, lang:"it", title:"Il viaggio in treno", emoji:"🚂", builtin:true,
   text:"Lea sale sul treno con la mamma. Guarda le montagne dal finestrino. Il treno attraversa un ponte sopra il mare. Mangia una mela durante il viaggio."},
  {id:12, lang:"it", title:"Una giornata di pioggia", emoji:"🌧️", builtin:true,
   text:"Ci sono nuvole nel cielo. Il vento soffia forte. Poi inizia a piovere. Leo mette gli stivali e va comunque a giocare fuori."}
];
let storyRecordings = {}; // id -> {url}  (url is a data: URL so it can be saved)
let currentStoryId = null;
let mediaRecorder = null;
let recordedChunks = [];
let currentRecordingSlot = null; // index 0-2 of the slot currently being recorded, or null
let currentUtterance = null;
let isSpeaking = false;

function setLang(lang){
  currentLang = lang;
  document.getElementById('lang-btn-fr').classList.toggle('active', lang==='fr');
  document.getElementById('lang-btn-it').classList.toggle('active', lang==='it');
  applyUILang();
  const activeId = document.querySelector('.screen.active').id;
  if(activeId === 'screen-stories') renderStoryList();
  if(activeId === 'screen-mywords') renderMyWords();
  saveState();
}

/* ---------------- NAV ---------------- */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.speechSynthesis.cancel();
  isSpeaking = false;
}
function goHome(){ showScreen('screen-home'); }

/* ---------------- VOICES ---------------- */
function voiceKey(v){
  // voiceURI is unreliable on some browsers/devices (empty or duplicated) —
  // name + lang is a much more stable identifier across getVoices() calls.
  return v.name + '|' + v.lang;
}
function votesForLang(lang){
  const matches = voicesList.filter(v=>v.lang && v.lang.toLowerCase().startsWith(lang));
  return matches.length ? matches : voicesList;
}
function populateVoiceSelect(id, lang){
  const sel = document.getElementById(id);
  if(!sel) return;
  const opts = votesForLang(lang);
  sel.innerHTML = '';
  opts.forEach(v=>{
    const opt = document.createElement('option');
    opt.value = voiceKey(v);
    opt.textContent = v.name + ' (' + v.lang + ')';
    sel.appendChild(opt);
  });
  if(selectedVoiceURI[lang]) sel.value = selectedVoiceURI[lang];
}
function loadVoices(){
  const fresh = window.speechSynthesis.getVoices();
  if(fresh && fresh.length) voicesList = fresh;
  ['fr','it'].forEach(lang=>{
    if(!selectedVoiceURI[lang]){
      const opts = votesForLang(lang);
      selectedVoiceURI[lang] = opts[0] ? voiceKey(opts[0]) : null;
    }
  });
  populateVoiceSelect('settings-voice-select-fr', 'fr');
  populateVoiceSelect('settings-voice-select-it', 'it');
  // if a story is currently open in the reader, refresh its voice list too
  const s = stories.find(x=>x.id===currentStoryId);
  if(s) populateVoiceSelect('reader-voice-select', s.lang);
}
window.speechSynthesis.onvoiceschanged = loadVoices;
loadState();
applyLoadedStateToUI();
loadVoices();

document.getElementById('settings-voice-select-fr').addEventListener('change', e=>{
  selectedVoiceURI.fr = e.target.value;
  const readerSel = document.getElementById('reader-voice-select');
  const s = stories.find(x=>x.id===currentStoryId);
  if(readerSel && s && s.lang==='fr') readerSel.value = e.target.value;
  showVoiceDebugInfo('fr');
  saveState();
});
document.getElementById('settings-voice-select-it').addEventListener('change', e=>{
  selectedVoiceURI.it = e.target.value;
  const readerSel = document.getElementById('reader-voice-select');
  const s = stories.find(x=>x.id===currentStoryId);
  if(readerSel && s && s.lang==='it') readerSel.value = e.target.value;
  showVoiceDebugInfo('it');
  saveState();
});
document.getElementById('reader-voice-select').addEventListener('change', e=>{
  const s = stories.find(x=>x.id===currentStoryId);
  if(!s) return;
  selectedVoiceURI[s.lang] = e.target.value;
  const settingsSel = document.getElementById('settings-voice-select-'+s.lang);
  if(settingsSel) settingsSel.value = e.target.value;
  saveState();
});

function speak(text, rate, onend, lang){
  // refresh the voice list right before speaking — on some browsers/devices
  // getVoices() returns an empty/stale array until this is called again
  const freshVoices = window.speechSynthesis.getVoices();
  if(freshVoices && freshVoices.length) voicesList = freshVoices;
  const targetLang = lang || currentLang;
  const u = new SpeechSynthesisUtterance(text);
  let v = voicesList.find(v=>voiceKey(v) === selectedVoiceURI[targetLang]);
  if(!v) v = voicesList.find(v=>v.lang && v.lang.toLowerCase().startsWith(targetLang));
  if(v) u.voice = v;
  u.lang = (v && v.lang) || (targetLang === 'it' ? 'it-IT' : 'fr-FR');
  u.rate = rate || 0.95;
  if(onend) u.onend = onend;
  const dbg = document.getElementById('voice-debug-info');
  u.onerror = (ev)=>{
    if(dbg) dbg.textContent = `⚠️ Échec de la voix "${v ? v.name : '?'}" (${ev.error}) — le navigateur n'a pas pu l'utiliser.`;
  };
  u.onstart = ()=>{
    if(dbg && v) dbg.textContent = `✅ Lecture en cours avec : ${v.name} (${v.lang})`;
  };
  currentUtterance = u;
  // NEVER cancel() an in-progress utterance just to start a new one — on Chrome/Windows,
  // cancel()+speak() in quick succession makes the browser silently revert to the default
  // voice for the rest of the session. Letting new utterances queue naturally (as the
  // story reader already did) avoids that bug entirely; only showScreen() cancels speech,
  // when actually leaving a screen.
  window.speechSynthesis.speak(u);
}
function testVoice(lang){
  const targetLang = lang || currentLang;
  const msg = targetLang === 'it'
    ? "Ciao! Sono pronta a farti scoprire tante parole divertenti."
    : "Bonjour ! Je suis prête à te faire découvrir plein de mots amusants.";
  speak(msg, 0.95, null, targetLang);
  showVoiceDebugInfo(targetLang);
}
function showVoiceDebugInfo(lang){
  const el = document.getElementById('voice-debug-info');
  if(!el) return;
  const v = voicesList.find(v=>voiceKey(v) === selectedVoiceURI[lang]);
  el.textContent = v
    ? `▶ ${lang.toUpperCase()} : ${v.name} (${v.lang})`
    : `▶ ${lang.toUpperCase()} : aucune voix sélectionnée — ${voicesList.length} voix détectées au total sur cet appareil`;
}
// speaks a word, and if "auto repeat" is enabled, says it a second time after a short pause
function speakReinforced(text, rate, lang, onend){
  if(reinforcedRepeatTimeout){ clearTimeout(reinforcedRepeatTimeout); reinforcedRepeatTimeout = null; }
  const times = autoRepeat ? 2 : 1;
  let count = 0;
  function step(){
    speak(text, rate, ()=>{
      count++;
      if(count < times){ reinforcedRepeatTimeout = setTimeout(()=>{ reinforcedRepeatTimeout = null; step(); }, 400); }
      else if(onend){ onend(); }
    }, lang);
  }
  step();
}

/* ---------------- CONTRAST & SUPPORT TOGGLES ---------------- */
function toggleContrast(){
  contrastMode = !contrastMode;
  document.body.classList.toggle('contrast', contrastMode);
  document.getElementById('contrast-toggle').classList.toggle('on', contrastMode);
  saveState();
}
function toggleAutoRepeat(){
  autoRepeat = !autoRepeat;
  document.getElementById('autorepeat-toggle').classList.toggle('on', autoRepeat);
  saveState();
}
function toggleSimplifiedQuiz(){
  simplifiedQuiz = !simplifiedQuiz;
  document.getElementById('simplequiz-toggle').classList.toggle('on', simplifiedQuiz);
  saveState();
}

/* ---------------- PRAISE & CELEBRATION ---------------- */
const PRAISE_FR = ["Bravo !","Super !","Génial !","C'est ça !","Continue comme ça !","Magnifique !"];
const PRAISE_IT = ["Bravo!","Ottimo!","Fantastico!","Sei stato bravissimo!","Continua così!","Magnifico!"];
function praise(lang){
  const arr = lang==='it' ? PRAISE_IT : PRAISE_FR;
  return arr[Math.floor(Math.random()*arr.length)];
}
function celebrateBurst(container){
  if(!container) return;
  const symbols = ['⭐','🎉','✨','👏','🌟'];
  for(let i=0;i<6;i++){
    const span = document.createElement('span');
    span.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    span.style.cssText = `position:absolute;left:${40+Math.random()*20}%;top:50%;font-size:${26+Math.random()*16}px;pointer-events:none;animation:burst-fly ${0.8+Math.random()*0.5}s ease-out forwards;animation-delay:${i*0.05}s;`;
    container.appendChild(span);
    setTimeout(()=>span.remove(), 1600);
  }
}

/* ---------------- STARS ---------------- */
function addStars(n){
  stars += n;
  document.getElementById('star-count').textContent = stars;
  saveState();
}

/* ---------------- SAVE / LOAD (localStorage) ---------------- */
function buildBackupData(){
  return {
    appVersion: 2,
    stars,
    currentLang,
    contrastMode,
    autoRepeat,
    simplifiedQuiz,
    selectedVoiceURI,
    customWords,
    customSentences,
    wordStats,
    customGroups,
    deletedBaseWordKeys,
    baseWordOverrides,
    allStories: stories, // full snapshot — lets built-in stories be edited/deleted too
    storyRecordings // {id: {url: dataURL}}
  };
}
function saveState(){
  if(!storageAvailable) return;
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(buildBackupData()));
    const bEl = document.getElementById('backup-status');
    // clear any previous quota warning once a save succeeds again
    if(bEl && bEl.dataset.quotaWarning) { bEl.textContent = ''; delete bEl.dataset.quotaWarning; }
  }catch(err){
    // quota exceeded or storage blocked — keep working in memory only, but warn visibly
    console.warn('Sauvegarde impossible :', err);
    const bEl = document.getElementById('backup-status');
    if(bEl){
      bEl.dataset.quotaWarning = '1';
      bEl.style.color = 'var(--coral)';
      bEl.textContent = currentLang==='it'
        ? "⚠️ Spazio di salvataggio pieno! Le ultime modifiche NON sono state salvate automaticamente. Esporta subito un backup e valuta di eliminare vecchie registrazioni."
        : "⚠️ Espace de sauvegarde plein ! Les dernières modifications n'ont PAS été sauvegardées automatiquement. Exporte immédiatement une sauvegarde et envisage de supprimer d'anciens enregistrements.";
    }
  }
}
function exportBackup(){
  const data = buildBackupData();
  const json = JSON.stringify(data, null, 0);
  const blob = new Blob([json], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const date = new Date().toISOString().slice(0,10);
  a.href = url;
  a.download = `ile-aux-syllabes-sauvegarde-${date}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 2000);
  const statusEl = document.getElementById('backup-status');
  if(statusEl){
    statusEl.style.color = '#7a6b8a';
    statusEl.textContent = currentLang==='it'
      ? '✅ Backup scaricato! Conservalo in un posto sicuro (es. Documenti o Drive).'
      : '✅ Sauvegarde téléchargée ! Garde-la dans un endroit sûr (ex. Documents ou Drive).';
  }
}
function importBackup(evt){
  const file = evt.target.files[0];
  if(!file) return;
  const statusEl = document.getElementById('backup-status');
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const data = JSON.parse(reader.result);
      if(typeof data.stars === 'number') stars = data.stars;
      if(data.currentLang) currentLang = data.currentLang;
      if(typeof data.contrastMode === 'boolean') contrastMode = data.contrastMode;
      if(typeof data.autoRepeat === 'boolean') autoRepeat = data.autoRepeat;
      if(typeof data.simplifiedQuiz === 'boolean') simplifiedQuiz = data.simplifiedQuiz;
      if(data.selectedVoiceURI) selectedVoiceURI = data.selectedVoiceURI;
      if(Array.isArray(data.customWords)) customWords = data.customWords;
      if(Array.isArray(data.customSentences)) customSentences = data.customSentences;
      if(data.wordStats) wordStats = data.wordStats;
      if(Array.isArray(data.customGroups)) customGroups = data.customGroups;
      if(Array.isArray(data.deletedBaseWordKeys)) deletedBaseWordKeys = data.deletedBaseWordKeys;
      if(data.baseWordOverrides) baseWordOverrides = data.baseWordOverrides;
      if(Array.isArray(data.allStories)){
        stories = data.allStories;
      } else if(Array.isArray(data.customStories)){
        stories = stories.filter(s=>s.builtin).concat(data.customStories);
      }
      if(data.storyRecordings) storyRecordings = data.storyRecordings;
      applyLoadedStateToUI();
      renderStoryList();
      renderMyWords();
      saveState();
      if(statusEl){
        statusEl.style.color = '#7a6b8a';
        statusEl.textContent = currentLang==='it'
          ? '✅ Backup importato con successo!'
          : '✅ Sauvegarde importée avec succès !';
      }
    }catch(err){
      if(statusEl){
        statusEl.style.color = 'var(--coral)';
        statusEl.textContent = currentLang==='it'
          ? '⚠️ Questo file non sembra un backup valido.'
          : '⚠️ Ce fichier ne semble pas être une sauvegarde valide.';
      }
    }
  };
  reader.readAsText(file);
}
function loadState(){
  // test whether storage actually works in this environment (may be blocked in a sandboxed preview)
  try{
    localStorage.setItem('__test__','1');
    localStorage.removeItem('__test__');
  }catch(err){
    storageAvailable = false;
  }
  if(!storageAvailable) return;
  let raw;
  try{
    raw = localStorage.getItem(STORAGE_KEY);
  }catch(err){
    storageAvailable = false;
    return;
  }
  if(!raw) return;
  try{
    const data = JSON.parse(raw);
    if(typeof data.stars === 'number') stars = data.stars;
    if(data.currentLang) currentLang = data.currentLang;
    if(typeof data.contrastMode === 'boolean') contrastMode = data.contrastMode;
    if(typeof data.autoRepeat === 'boolean') autoRepeat = data.autoRepeat;
    if(typeof data.simplifiedQuiz === 'boolean') simplifiedQuiz = data.simplifiedQuiz;
    if(data.selectedVoiceURI) selectedVoiceURI = data.selectedVoiceURI;
    if(Array.isArray(data.customWords)) customWords = data.customWords;
      if(Array.isArray(data.customSentences)) customSentences = data.customSentences;
      if(data.wordStats) wordStats = data.wordStats;
      if(Array.isArray(data.customGroups)) customGroups = data.customGroups;
      if(Array.isArray(data.deletedBaseWordKeys)) deletedBaseWordKeys = data.deletedBaseWordKeys;
      if(data.baseWordOverrides) baseWordOverrides = data.baseWordOverrides;
    if(Array.isArray(data.allStories)){
      stories = data.allStories;
    } else if(Array.isArray(data.customStories)){
      stories = stories.filter(s=>s.builtin).concat(data.customStories);
    }
    if(data.storyRecordings) storyRecordings = data.storyRecordings;
  }catch(err){
    console.warn('Données sauvegardées illisibles :', err);
  }
}
function applyLoadedStateToUI(){
  document.getElementById('star-count').textContent = stars;
  document.getElementById('lang-btn-fr').classList.toggle('active', currentLang==='fr');
  document.getElementById('lang-btn-it').classList.toggle('active', currentLang==='it');
  document.body.classList.toggle('contrast', contrastMode);
  document.getElementById('contrast-toggle').classList.toggle('on', contrastMode);
  document.getElementById('autorepeat-toggle').classList.toggle('on', autoRepeat);
  document.getElementById('simplequiz-toggle').classList.toggle('on', simplifiedQuiz);
  applyUILang();
  const statusEl = document.getElementById('storage-status');
  if(statusEl && !storageAvailable){
    statusEl.textContent = currentLang==='it'
      ? "⚠️ Il salvataggio automatico non è disponibile in questa anteprima. Apri il file scaricato direttamente nel tuo browser (Chrome, Safari, Edge...) perché tutto venga salvato."
      : "⚠️ La sauvegarde automatique n'est pas disponible dans cet aperçu. Ouvre le fichier téléchargé directement dans ton navigateur (Chrome, Safari, Edge...) pour que tout soit sauvegardé.";
  }
}
function resetAllData(){
  if(!confirm("Es-tu sûr(e) de vouloir tout effacer (mots, histoires, enregistrements, étoiles) ? Cette action est irréversible.")) return;
  try{ localStorage.removeItem(STORAGE_KEY); }catch(err){}
  location.reload();
}

/* ---------------- CATEGORY PICKER ---------------- */
function openCategoryPicker(gameType){
  pendingGameType = gameType;
  selectedDifficultyFilter = null;
  const cats = gameType === 'sentences' ? sentenceCategoriesForLang(currentLang) : categoriesForLang(currentLang);
  const grid = document.getElementById('category-grid');
  const allLabel = currentLang==='it' ? '🌈 Tutte le parole' : '🌈 Tous les mots';
  const addLabel = gameType === 'sentences'
    ? (currentLang==='it' ? '➕ Gestisci le mie frasi' : '➕ Gérer mes phrases')
    : (currentLang==='it' ? '➕ Aggiungi una parola' : '➕ Ajouter un mot');
  const addAction = gameType === 'sentences' ? 'goToSentenceManager()' : 'goToMyWordsWithCategory()';
  grid.innerHTML = `<button class="menu-card c1" onclick="pickCategory(null)"><span class="emoji">🌈</span><h3>${allLabel}</h3></button>` +
    cats.map(c=>`<button class="menu-card c5" onclick="pickCategory('${c.replace(/'/g,"\\'")}')"><span class="emoji">🏷️</span><h3>${c}</h3></button>`).join('') +
    `<button class="menu-card c6" onclick="${addAction}"><span class="emoji">✏️</span><h3>${addLabel}</h3></button>`;
  const diffRow = document.getElementById('difficulty-row');
  if(diffRow){
    if(gameType === 'sound'){
      diffRow.style.display = 'none';
    } else {
      diffRow.style.display = 'flex';
      renderDifficultyRow();
    }
  }
  showScreen('screen-category');
}
function renderDifficultyRow(){
  const diffRow = document.getElementById('difficulty-row');
  if(!diffRow) return;
  const labels = currentLang==='it'
    ? {all:'Tutte le difficoltà', easy:'🟢 Facile', hard:'🔴 Difficile'}
    : {all:'Toutes difficultés', easy:'🟢 Facile', hard:'🔴 Difficile'};
  diffRow.innerHTML = ['all','easy','hard'].map(d=>{
    const val = d==='all' ? null : d;
    const active = selectedDifficultyFilter === val;
    return `<button class="category-pill ${active?'active':''}" onclick="setDifficultyFilter(${val?`'${val}'`:'null'})">${labels[d]}</button>`;
  }).join('');
}
function setDifficultyFilter(diff){
  selectedDifficultyFilter = diff;
  renderDifficultyRow();
}
function goToMyWordsWithCategory(){
  selectedCategoryFilter = null;
  showScreen('screen-mywords');
  renderMyWords();
}
function goToSentenceManager(){
  showScreen('screen-sentence-manager');
  renderSentenceManager();
}
function matchesDifficulty(w){
  if(!selectedDifficultyFilter) return true;
  const len = (w.syllables || w.words || [w.word]).length;
  return selectedDifficultyFilter === 'easy' ? len <= 2 : len >= 3;
}
function pickCategory(category){
  if(pendingGameType === 'sentences'){
    let spool = sentencePool(currentLang).filter(s => !category || (s.category || (currentLang==='it'?'Generale':'Général')) === category);
    spool = spool.filter(matchesDifficulty);
    startSentenceGame(spool.length ? spool : null);
    return;
  }
  let pool = wordPool(currentLang).filter(w => !category || (w.category || (currentLang==='it'?'Generale':'Général')) === category);
  pool = pool.filter(matchesDifficulty);
  const list = pool.length ? pool : null;
  if(pendingGameType === 'syllables') startSyllableGame(list);
  else if(pendingGameType === 'words') startWordReading(list);
  else if(pendingGameType === 'quiz') startQuiz(list);
  else if(pendingGameType === 'sound') startSoundGame(list);
}

/* ---------------- SYLLABLE GAME ---------------- */
function startSyllableGame(customList){
  const pool = customList || wordPool(currentLang);
  if(pool.length === 0){ alert(t('no_words_lang')); return; }
  gameWords = customList ? [...pool].sort(()=>Math.random()-0.5).slice(0, Math.min(6, pool.length)) : weightedPick(pool, Math.min(6, pool.length));
  gameIndex = 0;
  showScreen('screen-game');
  const badge = document.getElementById('game-lang-badge');
  if(badge) badge.textContent = gameWords[0].lang === 'it' ? '🇮🇹 Italiano' : '🇫🇷 Français';
  loadGameWord();
}
function loadGameWord(){
  const w = gameWords[gameIndex];
  gameSlots = new Array(w.syllables.length).fill(null);
  gameNextExpected = 0;
  gameWrongCount = 0;
  document.getElementById('game-emoji').innerHTML = iconHtml(w, 90);
  document.getElementById('game-emoji').style.display = 'block';
  const revealBtn = document.getElementById('game-reveal-btn');
  if(revealBtn) revealBtn.textContent = t('btn_hide_image');
  document.getElementById('game-celebrate').textContent = '';

  // dots
  const dotsEl = document.getElementById('game-dots');
  dotsEl.innerHTML = '';
  gameWords.forEach((_,i)=>{
    const d = document.createElement('div');
    d.className = 'dot' + (i < gameIndex ? ' done' : (i===gameIndex ? ' current' : ''));
    dotsEl.appendChild(d);
  });

  // slots
  const slotsEl = document.getElementById('game-slots');
  slotsEl.innerHTML = '';
  w.syllables.forEach(()=>{
    const s = document.createElement('div');
    s.className = 'slot';
    slotsEl.appendChild(s);
  });

  // stones (shuffled)
  const shuffled = w.syllables.map((s,i)=>({s,i})).sort(()=>Math.random()-0.5);
  const stonesEl = document.getElementById('game-stones');
  stonesEl.innerHTML = '';
  shuffled.forEach(item=>{
    const btn = document.createElement('button');
    btn.className = 'stone stone-' + (item.i % 4);
    btn.textContent = item.s;
    btn.dataset.idx = item.i;
    btn.onclick = ()=>pickSyllable(item.i, item.s, btn);
    stonesEl.appendChild(btn);
  });

  scheduleAutoSpeak(speakCurrentWord, 150);
}
function pickSyllable(correctIndex, syl, btn){
  if(correctIndex === gameNextExpected){
    gameWrongCount = 0;
    const slotsEl = document.getElementById('game-slots');
    const slot = slotsEl.children[gameNextExpected];
    slot.textContent = syl;
    slot.classList.add('filled');
    btn.disabled = true;
    speak(syl, 0.9, null, gameWords[gameIndex].lang);
    gameNextExpected++;
    if(gameNextExpected === gameWords[gameIndex].syllables.length){
      addStars(1);
      const lang = gameWords[gameIndex].lang;
      recordWordResult(gameWords[gameIndex], true);
      document.getElementById('game-celebrate').textContent = '🎉 ' + praise(lang);
      celebrateBurst(document.getElementById('screen-game').querySelector('.panel'));
      scheduleAutoSpeak(()=>{ playWordAudioOrSpeak(gameWords[gameIndex], 0.75, lang, null, true); }, 300);
    }
  } else {
    btn.style.transform = 'translateX(-6px)';
    setTimeout(()=>{ btn.style.transform=''; }, 150);
    gameWrongCount++;
    if(gameWrongCount >= 2){
      const hintBtn = document.querySelector(`#game-stones .stone[data-idx="${gameNextExpected}"]`);
      if(hintBtn){
        hintBtn.classList.add('hint-pulse');
        setTimeout(()=>hintBtn.classList.remove('hint-pulse'), 1200);
      }
    }
  }
}
function speakCurrentWord(){
  playWordAudioOrSpeak(gameWords[gameIndex], 0.75, gameWords[gameIndex].lang, null, true);
}
function toggleGameImage(){
  const el = document.getElementById('game-emoji');
  const btn = document.getElementById('game-reveal-btn');
  const hidden = el.style.display === 'none';
  el.style.display = hidden ? 'block' : 'none';
  btn.textContent = hidden ? t('btn_hide_image') : t('btn_show_image');
}
function nextGameWord(){
  gameIndex++;
  if(gameIndex >= gameWords.length){
    document.getElementById('game-celebrate').textContent = '🏆 Terminé ! Tu as gagné des étoiles !';
    setTimeout(goHome, 1600);
    return;
  }
  loadGameWord();
}

/* ---------------- SENTENCE ORDERING GAME ---------------- */
let sentenceQueue = [];
let sentenceIndex = 0;
let sentenceSlots = [];
let sentenceNextExpected = 0;
function startSentenceGame(customList){
  const pool = customList || sentencePool(currentLang);
  if(pool.length === 0){ alert(t('no_words_lang')); return; }
  sentenceQueue = [...pool].sort(()=>Math.random()-0.5).slice(0, Math.min(6, pool.length));
  sentenceIndex = 0;
  showScreen('screen-sentence');
  const badge = document.getElementById('sentence-lang-badge');
  if(badge) badge.textContent = sentenceQueue[0].lang === 'it' ? '🇮🇹 Italiano' : '🇫🇷 Français';
  loadSentence();
}
function loadSentence(){
  const s = sentenceQueue[sentenceIndex];
  sentenceSlots = new Array(s.words.length).fill(null);
  sentenceNextExpected = 0;
  sentenceWrongCount = 0;
  document.getElementById('sentence-emoji').innerHTML = iconHtml(s, 70);
  document.getElementById('sentence-celebrate').textContent = '';

  const dotsEl = document.getElementById('sentence-dots');
  dotsEl.innerHTML = '';
  sentenceQueue.forEach((_,i)=>{
    const d = document.createElement('div');
    d.className = 'dot' + (i < sentenceIndex ? ' done' : (i===sentenceIndex ? ' current' : ''));
    dotsEl.appendChild(d);
  });
  const prevBtn = document.getElementById('sentence-prev-btn');
  if(prevBtn) prevBtn.disabled = (sentenceIndex <= 0);

  const slotsEl = document.getElementById('sentence-slots');
  slotsEl.innerHTML = '';
  s.words.forEach(()=>{
    const d = document.createElement('div');
    d.className = 'slot';
    slotsEl.appendChild(d);
  });

  const shuffled = s.words.map((w,i)=>({w,i})).sort(()=>Math.random()-0.5);
  const stonesEl = document.getElementById('sentence-stones');
  stonesEl.innerHTML = '';
  shuffled.forEach(item=>{
    const btn = document.createElement('button');
    btn.className = 'stone stone-' + (item.i % 4);
    btn.textContent = item.w;
    btn.dataset.idx = item.i;
    btn.onclick = ()=>pickSentenceWord(item.i, item.w, btn);
    stonesEl.appendChild(btn);
  });

  scheduleAutoSpeak(speakCurrentSentence, 150);
}
function pickSentenceWord(correctIndex, word, btn){
  if(correctIndex === sentenceNextExpected){
    sentenceWrongCount = 0;
    const slotsEl = document.getElementById('sentence-slots');
    const slot = slotsEl.children[sentenceNextExpected];
    slot.textContent = word;
    slot.classList.add('filled');
    btn.disabled = true;
    sentenceNextExpected++;
    if(sentenceNextExpected === sentenceQueue[sentenceIndex].words.length){
      addStars(1);
      const s = sentenceQueue[sentenceIndex];
      recordWordResult({word: s.words.join(' '), lang: s.lang}, true);
      document.getElementById('sentence-celebrate').textContent = '🎉 ' + praise(s.lang);
      celebrateBurst(document.getElementById('screen-sentence').querySelector('.panel'));
      setTimeout(()=>{ speak(s.words.join(' '), 0.85, null, s.lang); }, 300);
    }
  } else {
    btn.style.transform = 'translateX(-6px)';
    setTimeout(()=>{ btn.style.transform=''; }, 150);
    sentenceWrongCount++;
    if(sentenceWrongCount >= 2){
      const hintBtn = document.querySelector(`#sentence-stones .stone[data-idx="${sentenceNextExpected}"]`);
      if(hintBtn){
        hintBtn.classList.add('hint-pulse');
        setTimeout(()=>hintBtn.classList.remove('hint-pulse'), 1200);
      }
    }
  }
}
function speakCurrentSentence(){
  const s = sentenceQueue[sentenceIndex];
  speak(s.words.join(' '), 0.8, null, s.lang);
}
function prevSentence(){
  if(sentenceIndex <= 0) return;
  sentenceIndex--;
  loadSentence();
}
function nextSentence(){
  sentenceIndex++;
  if(sentenceIndex >= sentenceQueue.length){
    document.getElementById('sentence-celebrate').textContent = t('all_words_read');
    setTimeout(goHome, 1600);
    return;
  }
  loadSentence();
}
function addCustomSentence(){
  const text = document.getElementById('new-sentence-text').value.trim();
  const emoji = document.getElementById('new-sentence-emoji').value.trim() || '📘';
  const lang = document.getElementById('new-sentence-lang').value;
  const category = document.getElementById('new-sentence-category').value.trim() || (lang==='it' ? 'Generale' : 'Général');
  if(!text){ alert(t('no_words_lang')); return; }
  const words = text.split(/\s+/).filter(Boolean);
  if(words.length < 2){ alert(currentLang==='it' ? 'Scrivi almeno due parole.' : 'Écris au moins deux mots.'); return; }
  if(editingSentenceIndex === null && sentenceExists(words, lang)){
    alert(currentLang==='it' ? '⚠️ Questa frase esiste già in questa lingua.' : '⚠️ Cette phrase existe déjà dans cette langue.');
    return;
  }
  const sentenceData = {words, emoji, lang, category};
  if(editingSentenceIndex !== null){
    customSentences[editingSentenceIndex] = sentenceData;
  } else {
    customSentences.push(sentenceData);
  }
  cancelEditSentence();
  renderSentenceManager();
  saveState();
}
function editCustomSentence(idx){
  const s = customSentences[idx];
  editingSentenceIndex = idx;
  document.getElementById('new-sentence-text').value = s.words.join(' ');
  document.getElementById('new-sentence-emoji').value = s.emoji || '';
  document.getElementById('new-sentence-lang').value = s.lang;
  document.getElementById('new-sentence-category').value = s.category || '';
  document.getElementById('sentence-form-title').textContent = currentLang==='it' ? '✏️ Modifica la frase' : '✏️ Modifier la phrase';
  document.getElementById('sentence-form-submit').textContent = currentLang==='it' ? '💾 Salva le modifiche' : '💾 Enregistrer les modifications';
  document.getElementById('sentence-form-cancel').style.display = 'inline-flex';
  document.getElementById('sentence-form-title').scrollIntoView({behavior:'smooth', block:'center'});
}
function cancelEditSentence(){
  editingSentenceIndex = null;
  document.getElementById('new-sentence-text').value = '';
  document.getElementById('new-sentence-emoji').value = '';
  document.getElementById('new-sentence-category').value = '';
  document.getElementById('sentence-form-title').textContent = t('sentence_form_add_title');
  document.getElementById('sentence-form-submit').textContent = t('sentence_form_add_btn');
  document.getElementById('sentence-form-cancel').style.display = 'none';
}
function removeCustomSentence(idx){
  customSentences.splice(idx,1);
  if(editingSentenceIndex === idx) cancelEditSentence();
  renderSentenceManager();
  saveState();
}
function renderSentenceManager(){
  const langSel = document.getElementById('new-sentence-lang');
  if(langSel && editingSentenceIndex === null) langSel.value = currentLang;
  const dl = document.getElementById('sentence-category-suggestions');
  if(dl) dl.innerHTML = sentenceCategoriesForLang(currentLang).map(c=>`<option value="${c}">`).join('');
  const el = document.getElementById('sentences-list');
  if(customSentences.length === 0){
    el.innerHTML = `<p style="font-weight:600;color:#7a6b8a;">${currentLang==='it' ? 'Non hai ancora aggiunto nessuna frase.' : "Tu n'as pas encore ajouté de phrase."}</p>`;
    return;
  }
  el.innerHTML = '';
  customSentences.forEach((s,idx)=>{
    const item = document.createElement('div');
    item.className = 'story-item';
    item.style.cursor = 'default';
    const cat = s.category || (s.lang==='it' ? 'Generale' : 'Général');
    item.innerHTML = `
      <div class="emoji">${iconHtml(s, 40)}</div>
      <div class="info" style="flex:1;">
        <h4>${s.words.join(' ')} <span class="tag">${s.lang==='it' ? '🇮🇹 Italiano' : '🇫🇷 Français'}</span> <span class="tag">🏷️ ${cat}</span></h4>
      </div>
      <button class="icon-btn" style="background:var(--ocean);" onclick="event.stopPropagation(); startSentenceGame([customSentences[${idx}]])" title="Jouer">📝</button>
      <button class="icon-btn" style="background:var(--sunshine);" onclick="event.stopPropagation(); editCustomSentence(${idx})" title="Modifier">✏️</button>
      <button class="icon-btn" style="background:var(--coral);" onclick="event.stopPropagation(); removeCustomSentence(${idx})" title="Supprimer">🗑️</button>
    `;
    el.appendChild(item);
  });
}

/* ---------------- INITIAL SOUND GAME ---------------- */
let soundQueue = [];
let soundIndex = 0;
function startSoundGame(customList){
  const pool = customList || wordPool(currentLang);
  if(pool.length < 3){ alert(t('no_words_lang')); return; }
  soundQueue = weightedPick(pool, Math.min(6, pool.length));
  soundIndex = 0;
  showScreen('screen-sound');
  const badge = document.getElementById('sound-lang-badge');
  if(badge) badge.textContent = soundQueue[0].lang === 'it' ? '🇮🇹 Italiano' : '🇫🇷 Français';
  loadSoundRound();
}
function loadSoundRound(){
  const dotsEl = document.getElementById('sound-dots');
  dotsEl.innerHTML = '';
  soundQueue.forEach((_,i)=>{
    const d = document.createElement('div');
    d.className = 'dot' + (i < soundIndex ? ' done' : (i===soundIndex ? ' current' : ''));
    dotsEl.appendChild(d);
  });
  if(soundIndex >= soundQueue.length){
    document.getElementById('sound-letter').textContent = '🏆';
    document.getElementById('sound-options').innerHTML = '';
    document.getElementById('sound-celebrate').textContent = t('all_words_read');
    return;
  }
  const target = soundQueue[soundIndex];
  const lang = target.lang;
  const pool = wordPool(lang);
  const firstLetter = w => w.word.trim()[0].toLowerCase();
  const distractors = pool
    .filter(w => w.word !== target.word && firstLetter(w) !== firstLetter(target))
    .sort(()=>Math.random()-0.5)
    .slice(0, 2);
  const options = [target, ...distractors].sort(()=>Math.random()-0.5);
  document.getElementById('sound-letter').textContent = firstLetter(target).toUpperCase();
  document.getElementById('sound-celebrate').textContent = '';
  const optsEl = document.getElementById('sound-options');
  optsEl.innerHTML = '';
  options.forEach(w=>{
    const btn = document.createElement('button');
    btn.className = 'menu-card c5';
    btn.innerHTML = `<span class="emoji">${iconHtml(w, 60)}</span><h3 style="font-size:15px;">${w.word}</h3>`;
    btn.onclick = ()=>answerSoundRound(w.word === target.word, target, btn);
    optsEl.appendChild(btn);
  });
  scheduleAutoSpeak(speakCurrentSoundLetter, 150);
}
function speakCurrentSoundLetter(){
  if(soundIndex >= soundQueue.length) return;
  const target = soundQueue[soundIndex];
  const letter = target.word.trim()[0];
  speak(letter, 0.8, null, target.lang);
}
function answerSoundRound(success, target, btn){
  document.querySelectorAll('#sound-options .menu-card').forEach(b=>b.onclick = null);
  recordWordResult(target, success);
  if(success){
    addStars(1);
    btn.style.outline = '3px solid var(--leaf)';
    document.getElementById('sound-celebrate').textContent = '🎉 ' + praise(target.lang);
    celebrateBurst(document.getElementById('screen-sound').querySelector('.panel'));
  } else {
    btn.style.outline = '3px solid var(--coral)';
    document.getElementById('sound-celebrate').textContent = target.lang==='it'
      ? 'Non è questa, riprova la prossima volta!'
      : "Ce n'est pas celle-là, on réessaiera !";
  }
  setTimeout(()=>{
    soundIndex++;
    loadSoundRound();
  }, success ? 1200 : 1600);
}

/* ---------------- PARENT PROGRESS DASHBOARD ---------------- */
function isManuallySet(w){
  const s = wordStats[wordKey(w)];
  return !!s && typeof s.manual === 'boolean';
}
function setManualMastery(key, value){
  if(!wordStats[key]) wordStats[key] = {streak:0, attempts:0, successes:0};
  wordStats[key].manual = value;
  saveState();
  renderProgress();
}
function clearManualMastery(key){
  if(wordStats[key]) delete wordStats[key].manual;
  saveState();
  renderProgress();
}
function renderProgress(){
  const panel = document.getElementById('progress-panel');
  const masteredLabel = currentLang==='it' ? 'Padroneggiata' : 'Maîtrisé';
  const practiceLabel = currentLang==='it' ? 'À exercer' : 'À exercer';
  const toPracticeLabel = currentLang==='it' ? 'Da esercitare' : 'À exercer';
  let html = '';
  ['fr','it'].forEach(lang=>{
    const langLabel = lang==='it' ? '🇮🇹 Italiano' : '🇫🇷 Français';
    const words = wordPool(lang);
    const cats = categoriesForLang(lang);
    html += `<h3 style="font-family:'Baloo 2';margin-top:18px;">${langLabel}</h3>`;
    cats.forEach(cat=>{
      const catWords = words.filter(w => (w.category || (lang==='it'?'Generale':'Général')) === cat);
      const masteredCount = catWords.filter(isMastered).length;
      const pct = catWords.length ? Math.round(masteredCount/catWords.length*100) : 0;
      html += `
        <div style="background:#f5f0ff;border-radius:14px;padding:12px 14px;margin-bottom:10px;">
          <strong style="font-family:'Baloo 2';">🏷️ ${cat}</strong>
          <span style="font-size:13px;color:#7a6b8a;font-weight:700;"> — ${masteredCount}/${catWords.length} (${pct}%)</span>
          <div style="background:#e0d5f5;border-radius:999px;height:10px;margin:6px 0 10px;overflow:hidden;">
            <div style="background:var(--leaf);height:100%;width:${pct}%;"></div>
          </div>`;
      catWords.forEach(w=>{
        const key = wordKey(w);
        const mastered = isMastered(w);
        const manual = isManuallySet(w);
        html += `
          <div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-top:1px solid #e6ddf7;">
            <span style="flex:1;font-weight:700;font-size:14px;">${w.word}${manual ? ' <span class="tag" style="font-size:10px;">✋ manuel</span>' : ''}</span>
            <button class="mini-btn ${mastered?'mini-leaf':'mini-coral'}" onclick="setManualMastery('${key}', ${!mastered})">${mastered ? '✅ '+masteredLabel : '🔁 '+toPracticeLabel}</button>
            ${manual ? `<button class="mini-btn mini-lilac" onclick="clearManualMastery('${key}')" title="Revenir au calcul automatique">↺</button>` : ''}
          </div>`;
      });
      html += `</div>`;
    });
  });
  html += `<p style="font-size:12px;color:#9a8bb0;font-weight:600;margin-top:18px;">${currentLang==='it'
    ? 'Automaticamente, una parola diventa "padroneggiata" dopo 3 successi consecutivi. Puoi comunque decidere tu in ogni momento con i pulsanti sopra — la tua scelta ha sempre la priorità.'
    : "Automatiquement, un mot devient \u00ab\u00a0maîtrisé\u00a0\u00bb après 3 réussites d'affilée. Tu peux aussi décider toi-même à tout moment avec les boutons ci-dessus — ton choix a toujours la priorité."}</p>`;
  panel.innerHTML = html;
}

/* ---------------- QUIZ ---------------- */
function startQuiz(customList){
  const allWords = wordPool(currentLang);
  const questionSource = (customList && customList.length) ? customList : allWords;
  if(questionSource.length === 0){ alert(t('no_words_lang')); return; }
  const pool = customList ? [...questionSource].sort(()=>Math.random()-0.5).slice(0, Math.min(5, questionSource.length)) : weightedPick(questionSource, Math.min(5, questionSource.length));
  const distractorCount = simplifiedQuiz ? 1 : 2;
  quizQuestions = pool.map(w=>{
    const distractorSource = allWords.length > 2 ? allWords : questionSource;
    const distractors = distractorSource.filter(x=>x.word!==w.word).sort(()=>Math.random()-0.5).slice(0,distractorCount).map(x=>x.word);
    const options = [w.word, ...distractors].sort(()=>Math.random()-0.5);
    return {emoji:w.emoji, image:w.image, audio:w.audio, answer:w.word, options, lang:w.lang};
  });
  quizIndex = 0;
  quizScore = 0;
  showScreen('screen-quiz');
  const badge = document.getElementById('quiz-lang-badge');
  if(badge) badge.textContent = currentLang === 'it' ? '🇮🇹 Italiano' : '🇫🇷 Français';
  renderQuizQuestion();
}
function renderQuizQuestion(){
  const q = quizQuestions[quizIndex];
  const panel = document.getElementById('quiz-panel');
  const isLast = quizIndex === quizQuestions.length - 1;
  panel.innerHTML = `
    <div class="progress-dots">${quizQuestions.map((_,i)=>`<div class="dot ${i<quizIndex?'done':(i===quizIndex?'current':'')}"></div>`).join('')}</div>
    <div class="quiz-emoji">${iconHtml(q, 80)}</div>
    <div class="quiz-q">${t('quiz_question')}</div>
    <div class="quiz-opts">
      ${q.options.map(o=>`<button class="quiz-opt" onclick="answerQuiz('${o}', this)">${o}</button>`).join('')}
    </div>
    <div class="quiz-footer" style="flex-direction:column;gap:10px;">
      <button class="big-btn btn-ocean" onclick="replayQuizAudio()">${t('quiz_replay')}</button>
      <div class="game-controls">
        <button class="big-btn btn-lilac" id="quiz-prev-btn" onclick="prevQuizQuestion()" ${quizIndex===0?'disabled':''}>${t('btn_prev_word')}</button>
        <button class="big-btn btn-lilac" id="quiz-next-btn" onclick="goToNextQuizQuestion()" style="display:none;">${isLast ? t('quiz_see_score') : t('btn_next_word_arrow')}</button>
      </div>
    </div>
  `;
  scheduleAutoSpeak(()=>{ playWordAudioOrSpeak({word:q.answer, audio:q.audio}, 0.8, q.lang); }, 150);
}
function replayQuizAudio(){
  const q = quizQuestions[quizIndex];
  playWordAudioOrSpeak({word:q.answer, audio:q.audio}, 0.85, q.lang);
}
function prevQuizQuestion(){
  if(quizIndex <= 0) return;
  quizIndex--;
  renderQuizQuestion();
}
function goToNextQuizQuestion(){
  quizIndex++;
  if(quizIndex >= quizQuestions.length){ renderQuizScore(); }
  else { renderQuizQuestion(); }
}
function answerQuiz(choice, btn){
  const q = quizQuestions[quizIndex];
  const allBtns = document.querySelectorAll('.quiz-opt');
  allBtns.forEach(b=>b.disabled = true);
  const success = (choice === q.answer);
  recordWordResult({word:q.answer, lang:q.lang}, success);
  if(success){
    btn.classList.add('correct');
    quizScore++;
    addStars(1);
    speak(praise(q.lang), 1, null, q.lang);
    celebrateBurst(document.getElementById('quiz-panel'));
  } else {
    btn.classList.add('wrong');
    allBtns.forEach(b=>{ if(b.textContent===q.answer) b.classList.add('correct'); });
    speak(q.lang==='it' ? 'Non è proprio così, guarda bene.' : 'Pas tout à fait, regarde bien.', 0.9, null, q.lang);
  }
  const nextBtn = document.getElementById('quiz-next-btn');
  if(nextBtn) nextBtn.style.display = 'inline-flex';
}
function renderQuizScore(){
  const panel = document.getElementById('quiz-panel');
  const total = quizQuestions.length;
  panel.innerHTML = `
    <div class="score-screen">
      <div class="big-emoji">${quizScore===total?'🏆':'🌟'}</div>
      <h2 style="font-family:'Baloo 2';">${t('quiz_score_label')} : ${quizScore} / ${total}</h2>
      <p style="font-weight:700;color:#7a6b8a;">${t('quiz_score_sub')}</p>
      <div style="display:flex;gap:12px;justify-content:center;margin-top:16px;flex-wrap:wrap;">
        <button class="big-btn btn-coral" onclick="startQuiz()">${t('quiz_again')}</button>
        <button class="big-btn btn-lilac" onclick="goHome()">${t('quiz_home')}</button>
        <button class="big-btn btn-ocean" onclick="goToMyWordsWithCategory()">${t('btn_add_word_quick')}</button>
      </div>
    </div>
  `;
}

/* ---------------- STORIES ---------------- */
function renderStoryList(){
  const el = document.getElementById('story-list');
  el.innerHTML = '';
  const langSel = document.getElementById('new-story-lang');
  if(langSel) langSel.value = currentLang;
  // show every story regardless of language (like Mes mots) — filtering by the active
  // language toggle used to hide stories saved in the other language, looking like data loss
  if(stories.length===0){
    el.innerHTML = '<p style="font-weight:600;color:#7a6b8a;">' + t('no_stories_lang') + '</p>';
    return;
  }
  const sorted = [...stories].sort((a,b)=> (a.lang===currentLang ? -1 : 1) - (b.lang===currentLang ? -1 : 1));
  sorted.forEach(s=>{
    const item = document.createElement('div');
    item.className = 'story-item';
    item.onclick = ()=>openStory(s.id);
    const langTag = s.lang==='it' ? '🇮🇹 Italiano' : '🇫🇷 Français';
    item.innerHTML = `
      <div class="emoji">${iconHtml(s, 44)}</div>
      <div class="info" style="flex:1;">
        <h4>${s.title} <span class="tag">${langTag}</span> ${(Array.isArray(storyRecordings[s.id]) ? storyRecordings[s.id].some(x=>x) : !!storyRecordings[s.id]) ? '<span class="tag">🎙️ Ma voix</span>' : ''}</h4>
        <p>${s.text.slice(0,50)}...</p>
      </div>
      <button class="icon-btn" style="background:var(--sunshine);" onclick="event.stopPropagation(); editStory(${s.id})" title="Modifier">✏️</button>
      <button class="icon-btn" style="background:var(--coral);" onclick="event.stopPropagation(); deleteStory(${s.id})" title="Supprimer">🗑️</button>
    `;
    el.appendChild(item);
  });
}
function addStory(){
  const title = document.getElementById('new-story-title').value.trim();
  const text = document.getElementById('new-story-text').value.trim();
  const emoji = document.getElementById('new-story-emoji').value.trim() || '📘';
  const lang = document.getElementById('new-story-lang').value;
  if(!title || !text){ alert("Ajoute un titre et un texte pour l'histoire !"); return; }
  if(editingStoryId === null && storyExists(title, lang)){
    alert(currentLang==='it' ? `⚠️ Una storia intitolata "${title}" esiste già in questa lingua.` : `⚠️ Une histoire intitulée "${title}" existe déjà dans cette langue.`);
    return;
  }
  if(editingStoryId !== null){
    const idx = stories.findIndex(s=>s.id===editingStoryId);
    if(idx !== -1){
      stories[idx] = Object.assign({}, stories[idx], {title, emoji, image:newStoryImageData || stories[idx].image, text, lang});
    }
  } else {
    const id = Date.now();
    stories.push({id, title, emoji, image:newStoryImageData, text, lang});
  }
  cancelEditStory();
  renderStoryList();
  saveState();
}
function editStory(id){
  const s = stories.find(x=>x.id===id);
  if(!s) return;
  editingStoryId = id;
  document.getElementById('new-story-title').value = s.title;
  document.getElementById('new-story-text').value = s.text;
  document.getElementById('new-story-emoji').value = s.image ? '' : (s.emoji || '');
  document.getElementById('new-story-lang').value = s.lang;
  newStoryImageData = s.image || null;
  document.getElementById('new-story-image-preview').innerHTML = s.image
    ? `<img src="${s.image}" style="width:70px;height:70px;object-fit:cover;border-radius:12px;box-shadow:0 3px 0 rgba(0,0,0,.15);">`
    : '';
  const titleEl = document.getElementById('story-form-title');
  const submitEl = document.getElementById('story-form-submit');
  const cancelEl = document.getElementById('story-form-cancel');
  if(titleEl) titleEl.textContent = currentLang==='it' ? '✏️ Modifica la storia' : "✏️ Modifier l'histoire";
  if(submitEl) submitEl.textContent = currentLang==='it' ? '💾 Salva le modifiche' : '💾 Enregistrer les modifications';
  if(cancelEl) cancelEl.style.display = 'inline-flex';
  if(titleEl) titleEl.scrollIntoView({behavior:'smooth', block:'center'});
}
function cancelEditStory(){
  editingStoryId = null;
  document.getElementById('new-story-title').value = '';
  document.getElementById('new-story-text').value = '';
  document.getElementById('new-story-emoji').value = '';
  document.getElementById('new-story-image').value = '';
  document.getElementById('new-story-image-preview').innerHTML = '';
  newStoryImageData = null;
  const titleEl = document.getElementById('story-form-title');
  const submitEl = document.getElementById('story-form-submit');
  const cancelEl = document.getElementById('story-form-cancel');
  if(titleEl) titleEl.textContent = t('story_form_add_title');
  if(submitEl) submitEl.textContent = t('story_form_add_btn');
  if(cancelEl) cancelEl.style.display = 'none';
}
function deleteStory(id){
  stories = stories.filter(s=>s.id!==id);
  if(editingStoryId === id) cancelEditStory();
  Object.keys(storyRecordings).forEach(key=>{ if(String(key)===String(id)) delete storyRecordings[key]; });
  renderStoryList();
  saveState();
}
function openStory(id){
  currentStoryId = id;
  const s = stories.find(x=>x.id===id);
  document.getElementById('reader-title').innerHTML = iconHtml(s, 34) + ' ' + s.title + ' ' + (s.lang==='it' ? '🇮🇹' : '🇫🇷');
  populateVoiceSelect('reader-voice-select', s.lang);
  const sentences = s.text.split(/(?<=[.!?])\s+/).filter(Boolean);
  document.getElementById('reader-text').innerHTML = sentences.map((sent,i)=>`<span class="sentence" id="sent-${i}">${sent}</span>`).join(' ');
  document.getElementById('reader-play-btn').textContent = "▶️ Lire l'histoire";
  isSpeaking = false;
  currentRecordingSlot = null;
  renderVoiceSlots();
  showScreen('screen-reader');
}
function toggleReadStory(){
  const btn = document.getElementById('reader-play-btn');
  if(isSpeaking){
    window.speechSynthesis.cancel();
    isSpeaking = false;
    btn.textContent = "▶️ Lire l'histoire";
    return;
  }
  const s = stories.find(x=>x.id===currentStoryId);
  const sentences = s.text.split(/(?<=[.!?])\s+/).filter(Boolean);
  const rate = parseFloat(document.getElementById('reader-speed').value);
  isSpeaking = true;
  btn.textContent = '⏸️ Pause';
  let i = 0;
  function readNext(){
    if(i >= sentences.length || !isSpeaking){
      isSpeaking = false;
      btn.textContent = "▶️ Lire l'histoire";
      document.querySelectorAll('.sentence').forEach(el=>el.classList.remove('highlight'));
      return;
    }
    document.querySelectorAll('.sentence').forEach(el=>el.classList.remove('highlight'));
    const el = document.getElementById('sent-'+i);
    if(el) el.classList.add('highlight');
    speak(sentences[i], rate, ()=>{ i++; readNext(); }, s.lang);
  }
  readNext();
}

/* ---------------- MULTI-SLOT VOICE RECORDINGS (up to 3 per story) ---------------- */
function getStorySlots(id){
  let slots = storyRecordings[id];
  if(!Array.isArray(slots)){
    // migrate from the old single-recording format {url: ...}
    slots = (slots && slots.url) ? [slots, null, null] : [null, null, null];
    storyRecordings[id] = slots;
  }
  while(slots.length < 3) slots.push(null);
  return slots;
}
function renderVoiceSlots(){
  const container = document.getElementById('reader-voice-slots');
  if(!container) return;
  const slots = getStorySlots(currentStoryId);
  container.innerHTML = slots.map((slot, i)=>{
    const label = (slot && slot.label) || `${t('slot_default_label')} ${i+1}`;
    const recording = currentRecordingSlot === i;
    return `
      <div class="voice-slot">
        <input class="voice-slot-label" value="${label.replace(/"/g,'&quot;')}" onchange="renameSlot(${i}, this.value)">
        <div class="voice-slot-controls">
          <button type="button" class="mini-btn mini-lilac" onclick="toggleRecordSlot(${i})">${recording ? t('slot_stop') : t('slot_record')}</button>
          <button type="button" class="mini-btn mini-leaf" onclick="document.getElementById('slot-upload-${i}').click()">${t('slot_import')}</button>
          <input type="file" id="slot-upload-${i}" accept="audio/*" style="display:none;" onchange="uploadToSlot(${i}, event)">
          ${slot ? `<button type="button" class="mini-btn mini-sun" onclick="playSlot(${i})">${t('slot_listen')}</button>` : ''}
          ${slot ? `<button type="button" class="mini-btn mini-coral" onclick="clearSlot(${i})">${t('slot_delete')}</button>` : ''}
        </div>
        <p class="voice-slot-status">${recording ? t('slot_recording') : (slot ? '' : t('slot_empty'))}</p>
      </div>
    `;
  }).join('');
}
function renameSlot(i, value){
  const slots = getStorySlots(currentStoryId);
  if(slots[i]){
    slots[i].label = value.trim() || `${t('slot_default_label')} ${i+1}`;
    saveState();
  }
}
async function toggleRecordSlot(i){
  if(currentRecordingSlot === i){
    mediaRecorder.stop();
    currentRecordingSlot = null;
    renderVoiceSlots();
    return;
  }
  if(currentRecordingSlot !== null){
    return; // already recording another slot
  }
  try{
    const stream = await navigator.mediaDevices.getUserMedia({audio:true});
    mediaRecorder = new MediaRecorder(stream);
    recordedChunks = [];
    mediaRecorder.ondataavailable = e=>{ if(e.data.size>0) recordedChunks.push(e.data); };
    mediaRecorder.onstop = ()=>{
      const blob = new Blob(recordedChunks, {type:'audio/webm'});
      const reader = new FileReader();
      reader.onload = ()=>{
        const slots = getStorySlots(currentStoryId);
        const existingLabel = slots[i] && slots[i].label;
        slots[i] = {url: reader.result, label: existingLabel || `${t('slot_default_label')} ${i+1}`};
        renderVoiceSlots();
        renderStoryList();
        saveState();
      };
      reader.readAsDataURL(blob);
      stream.getTracks().forEach(t=>t.stop());
    };
    mediaRecorder.start();
    currentRecordingSlot = i;
    renderVoiceSlots();
  }catch(err){
    alert("⚠️ Le micro n'est pas accessible ici. Ouvre le fichier téléchargé directement dans ton navigateur pour pouvoir enregistrer.");
  }
}
function uploadToSlot(i, evt){
  const file = evt.target.files[0];
  if(!file) return;
  if(!file.type.startsWith('audio/')){
    alert('Choisis un fichier audio (MP3, WAV, M4A...).');
    return;
  }
  const reader = new FileReader();
  reader.onload = ()=>{
    const slots = getStorySlots(currentStoryId);
    const existingLabel = slots[i] && slots[i].label;
    slots[i] = {url: reader.result, label: existingLabel || `${t('slot_default_label')} ${i+1}`};
    renderVoiceSlots();
    renderStoryList();
    saveState();
  };
  reader.readAsDataURL(file);
}
function playSlot(i){
  const slots = getStorySlots(currentStoryId);
  if(slots[i]) new Audio(slots[i].url).play();
}
function clearSlot(i){
  const slots = getStorySlots(currentStoryId);
  slots[i] = null;
  renderVoiceSlots();
  renderStoryList();
  saveState();
}

/* ---------------- WORD AUDIO (record / import for a single word) ---------------- */
async function toggleRecordWordAudio(){
  const statusEl = document.getElementById('word-audio-status');
  const btn = document.getElementById('word-record-btn');
  if(isRecordingWord){
    wordMediaRecorder.stop();
    isRecordingWord = false;
    btn.innerHTML = '🎙️ Enregistrer';
    return;
  }
  try{
    const stream = await navigator.mediaDevices.getUserMedia({audio:true});
    wordMediaRecorder = new MediaRecorder(stream);
    wordRecordedChunks = [];
    wordMediaRecorder.ondataavailable = e=>{ if(e.data.size>0) wordRecordedChunks.push(e.data); };
    wordMediaRecorder.onstop = ()=>{
      const blob = new Blob(wordRecordedChunks, {type:'audio/webm'});
      const reader = new FileReader();
      reader.onload = ()=>{
        newWordAudioData = {url: reader.result};
        document.getElementById('word-play-audio-btn').style.display = 'inline-flex';
        statusEl.textContent = '✅ Enregistrement ajouté à ce mot.';
      };
      reader.readAsDataURL(blob);
      stream.getTracks().forEach(t=>t.stop());
    };
    wordMediaRecorder.start();
    isRecordingWord = true;
    btn.innerHTML = '<span class="rec-dot"></span> Stop';
    statusEl.textContent = "Enregistrement en cours... prononce le mot !";
  }catch(err){
    statusEl.textContent = "⚠️ Le micro n'est pas accessible ici. Essaie d'ouvrir le fichier téléchargé directement dans ton navigateur.";
  }
}
function uploadWordAudio(evt){
  const file = evt.target.files[0];
  if(!file) return;
  if(!file.type.startsWith('audio/')){
    alert('Choisis un fichier audio (MP3, WAV, M4A...).');
    return;
  }
  const reader = new FileReader();
  reader.onload = ()=>{
    newWordAudioData = {url: reader.result};
    document.getElementById('word-play-audio-btn').style.display = 'inline-flex';
    document.getElementById('word-audio-status').textContent = '✅ Fichier audio ajouté à ce mot.';
  };
  reader.readAsDataURL(file);
}
function playNewWordAudio(){
  if(!newWordAudioData) return;
  new Audio(newWordAudioData.url).play();
}
// plays a recorded/imported audio for a word if available, otherwise falls back to text-to-speech
function playWordAudioOrSpeak(w, rate, lang, onend, repeat){
  if(w && w.audio && w.audio.url){
    const a = new Audio(w.audio.url);
    if(repeat && autoRepeat){
      a.onended = ()=>{ setTimeout(()=>{
        const a2 = new Audio(w.audio.url);
        if(onend) a2.onended = onend;
        a2.play();
      }, 400); };
    } else if(onend){
      a.onended = onend;
    }
    a.play();
  } else if(repeat){
    speakReinforced(w.word, rate, lang, onend);
  } else {
    speak(w.word, rate, onend, lang);
  }
}

/* ---------------- WHOLE-WORD READING GAME ---------------- */
function startWordReading(customList){
  const pool = customList || wordPool(currentLang);
  if(pool.length === 0){ alert(t('no_words_lang')); return; }
  wordsQueue = customList ? [...pool].sort(()=>Math.random()-0.5) : weightedPick(pool, pool.length);
  wordsIndex = 0;
  showScreen('screen-words');
  const badge = document.getElementById('words-lang-badge');
  if(badge) badge.textContent = wordsQueue[0].lang === 'it' ? '🇮🇹 Italiano' : '🇫🇷 Français';
  loadFlashword();
}
function loadFlashword(){
  const dotsEl = document.getElementById('words-dots');
  dotsEl.innerHTML = '';
  wordsQueue.forEach((_,i)=>{
    const d = document.createElement('div');
    d.className = 'dot' + (i < wordsIndex ? ' done' : (i===wordsIndex ? ' current' : ''));
    dotsEl.appendChild(d);
  });
  const prevBtn = document.getElementById('words-prev-btn');
  const nextBtn = document.getElementById('words-next-btn');
  const revealBtn = document.getElementById('words-reveal-btn');
  if(revealBtn) revealBtn.textContent = t('btn_show_image');
  if(prevBtn) prevBtn.disabled = (wordsIndex <= 0);
  if(wordsIndex >= wordsQueue.length){
    document.getElementById('flashcard-word').textContent = '🏆';
    document.getElementById('words-emoji').style.display = 'none';
    document.getElementById('words-celebrate').textContent = t('all_words_read');
    if(nextBtn) nextBtn.disabled = true;
    return;
  }
  if(nextBtn) nextBtn.disabled = false;
  const w = wordsQueue[wordsIndex];
  document.getElementById('flashcard-word').textContent = w.word;
  document.getElementById('words-emoji').style.display = 'none';
  document.getElementById('words-emoji').innerHTML = iconHtml(w, 90);
  document.getElementById('words-celebrate').textContent = '';
}
function prevFlashword(){
  if(wordsIndex <= 0) return;
  wordsIndex--;
  loadFlashword();
}
function nextFlashwordManual(){
  if(wordsIndex >= wordsQueue.length) return;
  wordsIndex++;
  loadFlashword();
}
function speakCurrentFlashword(){
  if(wordsIndex >= wordsQueue.length) return;
  const w = wordsQueue[wordsIndex];
  playWordAudioOrSpeak(w, 0.7, w.lang, null, true);
}
function toggleFlashImage(){
  if(wordsIndex >= wordsQueue.length) return;
  const el = document.getElementById('words-emoji');
  const btn = document.getElementById('words-reveal-btn');
  const hidden = el.style.display === 'none';
  el.style.display = hidden ? 'block' : 'none';
  btn.textContent = hidden ? t('btn_hide_image') : t('btn_show_image');
}
function rateFlashword(success){
  if(wordsIndex >= wordsQueue.length) return;
  const w = wordsQueue[wordsIndex];
  recordWordResult(w, success);
  if(success){
    addStars(1);
    document.getElementById('words-celebrate').textContent = '⭐ ' + praise(w.lang);
    celebrateBurst(document.getElementById('screen-words').querySelector('.panel'));
  } else {
    document.getElementById('words-celebrate').textContent = w.lang==='it'
      ? 'Non fa niente, riproveremo presto questa parola!'
      : "Pas grave, on réessaiera ce mot bientôt !";
  }
  setTimeout(()=>{
    wordsIndex++;
    loadFlashword();
  }, success ? 1000 : 1400);
}

/* ---------------- MY WORDS ---------------- */
function selectCategoryFilter(cat){
  selectedCategoryFilter = cat;
  renderMyWords();
}
function renderMyWords(){
  const el = document.getElementById('mywords-list');
  el.innerHTML = '';
  const langSel = document.getElementById('new-word-lang');
  if(langSel) langSel.value = currentLang;
  const dl = document.getElementById('category-suggestions');
  const cats = categoriesForLang(currentLang);
  if(dl) dl.innerHTML = cats.map(c=>`<option value="${c}">`).join('');

  // category filter pills
  const filterRow = document.getElementById('category-filter-row');
  if(filterRow){
    const allLabel = currentLang==='it' ? '🌈 Tutte' : '🌈 Toutes';
    filterRow.innerHTML = `<button class="category-pill ${!selectedCategoryFilter?'active':''}" onclick="selectCategoryFilter(null)">${allLabel}</button>` +
      cats.map(c=>`<button class="category-pill ${selectedCategoryFilter===c?'active':''}" onclick="selectCategoryFilter('${c.replace(/'/g,"\\'")}')">🏷️ ${c}</button>`).join('');
  }
  const catInput = document.getElementById('new-word-category');
  if(catInput && selectedCategoryFilter && editingWordIndex === null) catInput.value = selectedCategoryFilter;

  // show every word (base + custom) for the current language, so base words can be edited/deleted too
  const displayed = wordPool(currentLang)
    .filter(w => !selectedCategoryFilter || (w.category || (currentLang==='it'?'Generale':'Général')) === selectedCategoryFilter);

  if(displayed.length === 0){
    el.innerHTML = '<p style="font-weight:600;color:#7a6b8a;">' + t('no_mywords') + '</p>';
    return;
  }
  displayed.forEach((w)=>{
    const item = document.createElement('div');
    item.className = 'story-item';
    item.style.cursor = 'default';
    const cat = w.category || (w.lang==='it' ? 'Generale' : 'Général');
    const refAttr = w.isBase ? `'${w.baseKey.replace(/'/g,"\\'")}'` : `${customWords.indexOf(w)}`;
    item.innerHTML = `
      <div class="emoji">${iconHtml(w, 44)}</div>
      <div class="info" style="flex:1;">
        <h4>${w.word} <span class="tag">${w.lang==='it' ? '🇮🇹 Italiano' : '🇫🇷 Français'}</span> <span class="tag">🏷️ ${cat}</span>${w.audio ? ' <span class="tag">🎙️ Ma voix</span>' : ''}${w.isBase ? '' : ' <span class="tag">✏️ Perso</span>'}</h4>
        <p>${w.syllables.join(' - ')}</p>
      </div>
      <button class="icon-btn" style="background:var(--ocean);" onclick="event.stopPropagation(); playWordFromList(${w.isBase}, ${refAttr})" title="Jouer aux syllabes">🪨</button>
      <button class="icon-btn" style="background:var(--sunshine);" onclick="event.stopPropagation(); editWordEntry(${w.isBase}, ${refAttr})" title="Modifier">✏️</button>
      <button class="icon-btn" style="background:var(--coral);" onclick="event.stopPropagation(); removeWordEntry(${w.isBase}, ${refAttr})" title="Supprimer">🗑️</button>
    `;
    el.appendChild(item);
  });
}
function addCustomWord(){
  const word = document.getElementById('new-word-text').value.trim();
  const syllRaw = document.getElementById('new-word-syllables').value.trim();
  const emoji = document.getElementById('new-word-emoji').value.trim() || '📘';
  const lang = document.getElementById('new-word-lang').value;
  const category = document.getElementById('new-word-category').value.trim() || (lang==='it' ? 'Generale' : 'Général');
  if(!word){ alert('Écris un mot à ajouter !'); return; }
  const isEditing = editingBaseWordKey !== null || editingWordIndex !== null;
  if(!isEditing && wordExists(word, lang)){
    alert(currentLang==='it' ? `⚠️ La parola "${word}" esiste già in questa lingua.` : `⚠️ Le mot "${word}" existe déjà dans cette langue.`);
    return;
  }
  const syllables = syllRaw ? syllRaw.split('-').map(s=>s.trim()).filter(Boolean) : autoSyllabify(word);
  const wordData = {word, syllables, emoji, image:newWordImageData, audio:newWordAudioData, lang, category};
  if(editingBaseWordKey !== null){
    // editing one of the built-in words — store as an override keyed by its ORIGINAL identity
    baseWordOverrides[editingBaseWordKey] = wordData;
  } else if(editingWordIndex !== null){
    customWords[editingWordIndex] = wordData;
  } else {
    customWords.push(wordData);
  }
  resetWordForm();
  renderMyWords();
  saveState();
}
function playWordFromList(isBase, ref){
  const w = isBase ? wordPool(currentLang).find(x=>x.baseKey===ref) : customWords[ref];
  if(w) startSyllableGame([w]);
}
function editWordEntry(isBase, ref){
  if(isBase){ editCustomWord(null, ref); }
  else { editCustomWord(ref, null); }
}
function removeWordEntry(isBase, ref){
  if(isBase){
    if(!deletedBaseWordKeys.includes(ref)) deletedBaseWordKeys.push(ref);
    if(editingBaseWordKey === ref) resetWordForm();
  } else {
    customWords.splice(ref,1);
    if(editingWordIndex === ref) resetWordForm();
  }
  renderMyWords();
  saveState();
}
function editCustomWord(idx, baseKey){
  const w = baseKey ? wordPool(currentLang).find(x=>x.baseKey===baseKey) : customWords[idx];
  if(!w) return;
  editingWordIndex = baseKey ? null : idx;
  editingBaseWordKey = baseKey || null;
  document.getElementById('new-word-text').value = w.word;
  document.getElementById('new-word-syllables').value = w.syllables.join('-');
  document.getElementById('new-word-emoji').value = w.image ? '' : (w.emoji || '');
  document.getElementById('new-word-lang').value = w.lang;
  document.getElementById('new-word-category').value = w.category || '';
  newWordImageData = w.image || null;
  document.getElementById('new-word-image-preview').innerHTML = w.image
    ? `<img src="${w.image}" style="width:70px;height:70px;object-fit:cover;border-radius:12px;box-shadow:0 3px 0 rgba(0,0,0,.15);">`
    : '';
  newWordAudioData = w.audio || null;
  document.getElementById('word-play-audio-btn').style.display = w.audio ? 'inline-flex' : 'none';
  document.getElementById('word-audio-status').textContent = w.audio ? '🎙️ Ce mot a déjà un enregistrement.' : '';
  document.getElementById('word-form-title').textContent = '✏️ Modifier le mot';
  document.getElementById('word-form-submit').textContent = '💾 Enregistrer les modifications';
  document.getElementById('word-form-cancel').style.display = 'inline-flex';
  document.getElementById('word-form-title').scrollIntoView({behavior:'smooth', block:'center'});
}
function cancelEditWord(){
  resetWordForm();
  renderMyWords();
}
function resetWordForm(){
  editingWordIndex = null;
  editingBaseWordKey = null;
  document.getElementById('new-word-text').value = '';
  document.getElementById('new-word-syllables').value = '';
  document.getElementById('new-word-emoji').value = '';
  document.getElementById('new-word-image').value = '';
  document.getElementById('new-word-image-preview').innerHTML = '';
  newWordImageData = null;
  document.getElementById('new-word-audio-upload').value = '';
  document.getElementById('word-play-audio-btn').style.display = 'none';
  document.getElementById('word-audio-status').textContent = '';
  newWordAudioData = null;
  document.getElementById('new-word-category').value = selectedCategoryFilter || '';
  document.getElementById('word-form-title').textContent = '➕ Ajouter un mot';
  document.getElementById('word-form-submit').textContent = '✅ Ajouter le mot';
  document.getElementById('word-form-cancel').style.display = 'none';
}


/* init */
document.getElementById('reader-speed').addEventListener('input', ()=>{});
// register the service worker (only works when served over http/https — silently
// does nothing when opened as a local file, which is fine)
if('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
</script>
</body>
</html>
