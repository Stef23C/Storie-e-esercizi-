/* ==========================================================
   AGGIUNTE COMPLETE: APPLAUSI, STELLE, SILLABE, GRUPPI
   ========================================================== */

/* ===== AUDIO & STELLE ===== */
let audioCtx = null;
let lastSound = "";

function playJingle() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let sounds = ['success', 'applause', 'sparkle'];
    let pick = sounds[Math.floor(Math.random() * sounds.length)];
    if (pick === lastSound) pick = sounds[(sounds.indexOf(pick) + 1) % sounds.length];
    lastSound = pick;

    if (pick === 'success') {
      [523, 659, 783].forEach((f, i) => {
        let o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.connect(g); g.connect(audioCtx.destination);
        o.frequency.value = f; o.type = 'sine';
        g.gain.setValueAtTime(.2, audioCtx.currentTime + i * .1);
        g.gain.exponentialRampToValueAtTime(.01, audioCtx.currentTime + i * .1 + .15);
        o.start(audioCtx.currentTime + i * .1); o.stop(audioCtx.currentTime + i * .1 + .15);
      });
    } else if (pick === 'applause') {
      let bs = audioCtx.sampleRate * .8;
      let bf = audioCtx.createBuffer(1, bs, audioCtx.sampleRate);
      let dt = bf.getChannelData(0);
      for (let i = 0; i < bs; i++) dt[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bs, 2);
      let src = audioCtx.createBufferSource();
      src.buffer = bf;
      let g = audioCtx.createGain();
      g.gain.value = .3;
      src.connect(g); g.connect(audioCtx.destination);
      src.start();
    } else {
      for (let i = 0; i < 5; i++) {
        let o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.connect(g); g.connect(audioCtx.destination);
        o.frequency.value = 1200 + Math.random() * 500;
        o.type = 'triangle';
        g.gain.setValueAtTime(.15, audioCtx.currentTime + i * .08);
        g.gain.exponentialRampToValueAtTime(.01, audioCtx.currentTime + i * .08 + .1);
        o.start(audioCtx.currentTime + i * .08); o.stop(audioCtx.currentTime + i * .08 + .1);
      }
    }
  } catch (e) {}
}

function launchStars(n) {
  let c = document.querySelector('.screen.active .panel');
  if (!c) return;
  document.querySelectorAll('.dynamic-star').forEach(s => s.remove());
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      let s = document.createElement('div');
      s.className = 'dynamic-star';
      s.textContent = ['⭐', '✨', '🌟', '💖'][Math.floor(Math.random() * 4)];
      s.style.cssText = `position:absolute;left:50%;top:50%;font-size:${25 + Math.random() * 30}px;pointer-events:none;z-index:9999;opacity:1`;
      c.appendChild(s);
      s.style.setProperty('--tx', (Math.random() * 200 - 100) + 'px');
      s.style.setProperty('--ty', (-(150 + Math.random() * 100)) + 'px');
      s.style.setProperty('--rot', (Math.random() * 360) + 'deg');
      s.style.animation = 'dynamic-star 1.2s ease-out forwards';
      setTimeout(() => s.remove(), 1300);
    }, i * 30);
  }
}

function celebrateBurst(container) {
  if (!container) return;
  launchStars(25);
  playJingle();
}

/* ===== REGISTRAZIONE SILLABE ===== */
let syllableRecordings = {};
let syllableMediaRecorder = null;
let syllableRecordedChunks = [];
let recordingSyllableKey = null;

let wordRecordings = {};
let wordPronunciationMediaRecorder = null;
let wordPronunciationChunks = [];
let recordingWordPronunciationKey = null;

function syllableRecordingKey(syllable, lang) {
  return lang + ':' + syllable.toLowerCase();
}

function renderSyllablePronunciations() {
  let lang = document.getElementById('syllable-pronunciation-lang');
  if (lang) lang.value = currentLang;
  let el = document.getElementById('syllable-pronunciations-list');
  if (!el) return;
  el.innerHTML = '';
  let syllables = Object.keys(syllableRecordings).filter(k => k.startsWith(currentLang + ':'));
  syllables.forEach(key => {
    let rec = syllableRecordings[key];
    el.innerHTML += `
      <div class="story-item">
        <div class="emoji">🔤</div>
        <div class="info"><h4>${rec.syllable}</h4><p>${rec.url ? '✅ Registrata' : '🎙️ Pronta'}</p></div>
        <button class="icon-btn" style="background:var(--lilac);" onclick="toggleRecordSyllable('${key}')">${recordingSyllableKey === key ? '⏹️' : '🎙️'}</button>
        ${rec.url ? `<button class="icon-btn" style="background:var(--sunshine);" onclick="playSyllableRecording('${key}')">🔊</button><button class="icon-btn" style="background:var(--coral);" onclick="deleteSyllableRecording('${key}')">🗑️</button>` : ''}
      </div>`;
  });
}

function addCustomSyllablePronunciation() {
  let input = document.getElementById('new-pronunciation-syllable');
  let lang = document.getElementById('syllable-pronunciation-lang').value;
  let syllable = input.value.trim();
  if (!syllable) { alert('Scrivi una sillaba!'); return; }
  let key = syllableRecordingKey(syllable, lang);
  if (!syllableRecordings[key]) syllableRecordings[key] = { syllable: syllable.toUpperCase(), lang, url: null };
  input.value = '';
  renderSyllablePronunciations();
  saveState();
}

async function toggleRecordSyllable(key) {
  if (recordingSyllableKey === key) { syllableMediaRecorder.stop(); return; }
  if (recordingSyllableKey) { alert('Registrazione in corso'); return; }
  let rec = syllableRecordings[key];
  if (!rec) return;
  try {
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    syllableMediaRecorder = new MediaRecorder(stream);
    syllableRecordedChunks = [];
    recordingSyllableKey = key;
    syllableMediaRecorder.ondataavailable = e => { if (e.data.size) syllableRecordedChunks.push(e.data); };
    syllableMediaRecorder.onstop = () => {
      let blob = new Blob(syllableRecordedChunks, { type: 'audio/webm' });
      let reader = new FileReader();
      reader.onload = () => {
        syllableRecordings[key] = { ...rec, url: reader.result };
        recordingSyllableKey = null;
        saveState();
        renderSyllablePronunciations();
      };
      reader.readAsDataURL(blob);
      stream.getTracks().forEach(t => t.stop());
    };
    syllableMediaRecorder.start();
    renderSyllablePronunciations();
  } catch (e) { alert('Microfono non disponibile'); }
}

function playSyllableRecording(key) {
  let rec = syllableRecordings[key];
  if (rec && rec.url) new Audio(rec.url).play();
}

function deleteSyllableRecording(key) {
  delete syllableRecordings[key];
  saveState();
  renderSyllablePronunciations();
}

function addAndRecordSyllable() {
  let input = document.getElementById('new-pronunciation-syllable');
  let lang = document.getElementById('syllable-pronunciation-lang').value;
  let syllable = input.value.trim().toUpperCase();
  if (!syllable) { alert('Scrivi una sillaba!'); return; }
  let key = syllableRecordingKey(syllable, lang);
  if (!syllableRecordings[key]) syllableRecordings[key] = { syllable, lang, url: null };
  input.value = '';
  renderSyllablePronunciations();
  setTimeout(() => toggleRecordSyllable(key), 200);
}

function uploadSyllableMp3(evt) {
  let file = evt.target.files[0];
  if (!file) return;
  let input = document.getElementById('new-pronunciation-syllable');
  let lang = document.getElementById('syllable-pronunciation-lang').value;
  let syllable = input.value.trim().toUpperCase();
  if (!syllable) { alert('Scrivi prima la sillaba'); return; }
  let key = syllableRecordingKey(syllable, lang);
  if (!syllableRecordings[key]) syllableRecordings[key] = { syllable, lang, url: null };
  let reader = new FileReader();
  reader.onload = () => {
    syllableRecordings[key] = { ...syllableRecordings[key], url: reader.result };
    saveState();
    renderSyllablePronunciations();
  };
  reader.readAsDataURL(file);
}

/* ===== GRUPPI DI PAROLE ===== */
let customGroups = [];
let editingGroupIndex = null;

function saveGroup() {
  let name = document.getElementById('new-group-name').value.trim();
  let lang = document.getElementById('new-group-lang').value;
  if (!name) { alert('Scrivi un nome per il gruppo.'); return; }
  let checked = Array.from(document.querySelectorAll('#group-word-checklist input:checked')).map(cb => cb.value);
  if (checked.length === 0) { alert('Seleziona almeno una parola.'); return; }
  let groupData = { name, lang, wordKeys: checked };
  if (editingGroupIndex !== null) {
    customGroups[editingGroupIndex] = groupData;
  } else {
    customGroups.push(groupData);
  }
  cancelEditGroup();
  renderGroupsScreen();
  saveState();
}

function editGroup(idx) {
  let g = customGroups[idx];
  editingGroupIndex = idx;
  document.getElementById('new-group-name').value = g.name;
  document.getElementById('new-group-lang').value = g.lang;
  renderGroupWordChecklist();
  document.getElementById('group-form-title').textContent = '✏️ Modifica gruppo';
  document.getElementById('group-form-submit').textContent = '💾 Salva';
  document.getElementById('group-form-cancel').style.display = 'inline-flex';
}

function cancelEditGroup() {
  editingGroupIndex = null;
  document.getElementById('new-group-name').value = '';
  document.getElementById('group-form-title').textContent = t('group_form_add_title');
  document.getElementById('group-form-submit').textContent = t('group_form_add_btn');
  document.getElementById('group-form-cancel').style.display = 'none';
  renderGroupWordChecklist();
}

function deleteGroup(idx) {
  customGroups.splice(idx, 1);
  if (editingGroupIndex === idx) cancelEditGroup();
  renderGroupsScreen();
  saveState();
}

function groupWords(idx) {
  let g = customGroups[idx];
  return wordPool(g.lang).filter(w => g.wordKeys.includes(wordKey(w)));
}

function playGroup(idx, gameType) {
  let list = groupWords(idx);
  if (list.length === 0) { alert(t('no_words_lang')); return; }
  if (gameType === 'syllables') startSyllableGame(list);
  else if (gameType === 'words') startWordReading(list);
  else if (gameType === 'quiz') startQuiz(list);
}

function renderGroupsScreen() {
  let langSel = document.getElementById('new-group-lang');
  if (langSel) langSel.value = currentLang;
  renderGroupWordChecklist();
  let el = document.getElementById('groups-list');
  if (customGroups.length === 0) {
    el.innerHTML = `<p style="font-weight:600;color:#7a6b8a;">Nessun gruppo creato ancora.</p>`;
    return;
  }
  el.innerHTML = '';
  customGroups.forEach((g, idx) => {
    let item = document.createElement('div');
    item.className = 'story-item';
    item.style.cursor = 'default';
    item.innerHTML = `
      <div class="info" style="flex:1;">
        <h4>${g.name} <span class="tag">${g.lang === 'it' ? '🇮🇹' : '🇫🇷'}</span></h4>
        <p>${g.wordKeys.length} parole</p>
      </div>
      <button class="icon-btn" style="background:var(--coral);" onclick="playGroup(${idx},'syllables')">🪨</button>
      <button class="icon-btn" style="background:var(--ocean);" onclick="playGroup(${idx},'words')">🔤</button>
      <button class="icon-btn" style="background:var(--sunshine);" onclick="playGroup(${idx},'quiz')">🎯</button>
      <button class="icon-btn" style="background:var(--lilac);" onclick="editGroup(${idx})">✏️</button>
      <button class="icon-btn" style="background:var(--coral);" onclick="deleteGroup(${idx})">🗑️</button>
    `;
    el.appendChild(item);
  });
}

function renderGroupWordChecklist() {
  let lang = document.getElementById('new-group-lang').value;
  let container = document.getElementById('group-word-checklist');
  let words = wordPool(lang);
  let checkedKeys = (editingGroupIndex !== null) ? customGroups[editingGroupIndex].wordKeys : [];
  container.innerHTML = words.map(w => {
    let key = wordKey(w);
    let checked = checkedKeys.includes(key) ? 'checked' : '';
    return `<label style="display:flex;align-items:center;gap:8px;padding:4px 0;font-weight:600;">
      <input type="checkbox" value="${key}" ${checked} style="width:18px;height:18px;">
      ${iconHtml(w, 26)} ${w.word}
    </label>`;
  }).join('') || `<p style="font-weight:600;color:#7a6b8a;">${t('no_words_lang')}</p>`;
}

/* ===== GRUPPI DI FRASI ===== */
let customSentenceGroups = [];
let editingSentenceGroupIndex = null;

function saveSentenceGroup() {
  let name = document.getElementById('new-sgroup-name').value.trim();
  let lang = document.getElementById('new-sgroup-lang').value;
  if (!name) { alert('Scrivi un nome per il gruppo.'); return; }
  let checked = Array.from(document.querySelectorAll('#sgroup-checklist input:checked')).map(cb => cb.value);
  if (checked.length === 0) { alert('Seleziona almeno una frase.'); return; }
  let groupData = { name, lang, sentenceKeys: checked };
  if (editingSentenceGroupIndex !== null) {
    customSentenceGroups[editingSentenceGroupIndex] = groupData;
  } else {
    customSentenceGroups.push(groupData);
  }
  cancelEditSentenceGroup();
  renderSentenceGroupsScreen();
  saveState();
}

function editSentenceGroup(idx) {
  let g = customSentenceGroups[idx];
  editingSentenceGroupIndex = idx;
  document.getElementById('new-sgroup-name').value = g.name;
  document.getElementById('new-sgroup-lang').value = g.lang;
  renderSentenceGroupChecklist();
  document.getElementById('sgroup-form-title').textContent = '✏️ Modifica gruppo';
  document.getElementById('sgroup-form-submit').textContent = '💾 Salva';
  document.getElementById('sgroup-form-cancel').style.display = 'inline-flex';
}

function cancelEditSentenceGroup() {
  editingSentenceGroupIndex = null;
  document.getElementById('new-sgroup-name').value = '';
  document.getElementById('sgroup-form-title').textContent = t('sgroup_form_add_title');
  document.getElementById('sgroup-form-submit').textContent = t('sgroup_form_add_btn');
  document.getElementById('sgroup-form-cancel').style.display = 'none';
  renderSentenceGroupChecklist();
}

function deleteSentenceGroup(idx) {
  customSentenceGroups.splice(idx, 1);
  if (editingSentenceGroupIndex === idx) cancelEditSentenceGroup();
  renderSentenceGroupsScreen();
  saveState();
}

function sentenceGroupItems(idx) {
  let g = customSentenceGroups[idx];
  return sentencePool(g.lang).filter(s => g.sentenceKeys.includes(sentenceKey(s)));
}

function playSentenceGroup(idx) {
  let list = sentenceGroupItems(idx);
  if (list.length === 0) { alert(t('no_words_lang')); return; }
  startSentenceGame(list);
}

function renderSentenceGroupsScreen() {
  let langSel = document.getElementById('new-sgroup-lang');
  if (langSel) langSel.value = currentLang;
  renderSentenceGroupChecklist();
  let el = document.getElementById('sgroups-list');
  if (customSentenceGroups.length === 0) {
    el.innerHTML = `<p style="font-weight:600;color:#7a6b8a;">Nessun gruppo di frasi creato.</p>`;
    return;
  }
  el.innerHTML = '';
  customSentenceGroups.forEach((g, idx) => {
    let item = document.createElement('div');
    item.className = 'story-item';
    item.style.cursor = 'default';
    item.innerHTML = `
      <div class="info" style="flex:1;">
        <h4>${g.name} <span class="tag">${g.lang === 'it' ? '🇮🇹' : '🇫🇷'}</span></h4>
        <p>${g.sentenceKeys.length} frasi</p>
      </div>
      <button class="icon-btn" style="background:var(--ocean);" onclick="playSentenceGroup(${idx})">📝</button>
      <button class="icon-btn" style="background:var(--lilac);" onclick="editSentenceGroup(${idx})">✏️</button>
      <button class="icon-btn" style="background:var(--coral);" onclick="deleteSentenceGroup(${idx})">🗑️</button>
    `;
    el.appendChild(item);
  });
}

function renderSentenceGroupChecklist() {
  let lang = document.getElementById('new-sgroup-lang').value;
  let container = document.getElementById('sgroup-checklist');
  let sentences = sentencePool(lang);
  let checkedKeys = (editingSentenceGroupIndex !== null) ? customSentenceGroups[editingSentenceGroupIndex].sentenceKeys : [];
  container.innerHTML = sentences.map(s => {
    let key = sentenceKey(s);
    let checked = checkedKeys.includes(key) ? 'checked' : '';
    return `<label style="display:flex;align-items:center;gap:8px;padding:4px 0;font-weight:600;">
      <input type="checkbox" value="${key}" ${checked} style="width:18px;height:18px;">
      ${iconHtml(s, 26)} ${s.words.join(' ')}
    </label>`;
  }).join('') || `<p style="font-weight:600;color:#7a6b8a;">${t('no_words_lang')}</p>`;
}

/* ===== AGGIUNGE PULSANTI ===== */
function openSettings() {
  showScreen('screen-settings');
}

document.addEventListener('DOMContentLoaded', () => {
  let topbar = document.querySelector('#screen-home .topbar');
  if (topbar) {
    let settingsBtn = document.createElement('button');
    settingsBtn.className = 'icon-btn';
    settingsBtn.innerHTML = '⚙️';
    settingsBtn.onclick = openSettings;
    topbar.appendChild(settingsBtn);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  let settingsPanel = document.querySelector('#screen-settings .panel');
  if (settingsPanel) {
    let btn = document.createElement('button');
    btn.className = 'big-btn btn-lilac';
    btn.style.marginTop = '10px';
    btn.innerHTML = '🎙️ Gestisci pronunce';
    btn.onclick = () => {
      showScreen('screen-syllable-pronunciations');
      renderSyllablePronunciations();
    };
    settingsPanel.appendChild(btn);
  }
});
