<div class="screen" id="screen-syllable-pronunciations">
  <div class="back-row"><button class="back-btn" onclick="showScreen('screen-settings')">← Indietro</button><h2 class="screen-title">🎙️ Repertorio pronunce</h2></div>
  <div class="panel">
    <div class="add-story-box">
      <h3>🔤 Sillabe personalizzate</h3>
      <select id="syllable-pronunciation-lang" onchange="renderSyllablePronunciations(); renderWordPronunciations();">
        <option value="it">🇮🇹 Italiano</option>
        <option value="fr">🇫🇷 Français</option>
      </select>
      <input id="new-pronunciation-syllable" placeholder="Scrivi sillaba (es: CA)">
      <div style="display:flex;gap:10px;">
        <button class="big-btn btn-lilac" onclick="addAndRecordSyllable()">🎙️ Registra</button>
        <button class="big-btn btn-ocean" onclick="document.getElementById('syllable-mp3-upload').click()">📁 Importa MP3</button>
        <input type="file" id="syllable-mp3-upload" accept="audio/*" style="display:none;" onchange="uploadSyllableMp3(event)">
      </div>
    </div>
    <div class="story-list" id="syllable-pronunciations-list"></div>
  </div>
</div>/* ==========================================
   AGGIUNGI PULSANTE IMPOSTAZIONI NELLA HOME
   ========================================== */

// Funzione che apre le impostazioni quando si clicca sull'ingranaggio
function openSettings() {
  showScreen('screen-settings');
}

// Aggiunge il pulsante Impostazioni (⚙️) nella barra superiore
document.addEventListener('DOMContentLoaded', () => {
  let topbar = document.querySelector('#screen-home .topbar');
  if (topbar) {
    let settingsBtn = document.createElement('button');
    settingsBtn.className = 'icon-btn';
    settingsBtn.innerHTML = '⚙️';
    settingsBtn.onclick = openSettings;
    topbar.appendChild(settingsBtn);
  }
});// Aggiungi il pulsante "🎙️ Gestisci pronunce" dentro le impostazioni
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
