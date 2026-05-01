let data = {
  "glasses": [
    {
      "id": "happy",
      "name": "ハッピーメガネ",
      "character": "クエリナ",
      "tagline": "世界を軽やかに跳ねさせる視点"
    },
    {
      "id": "math",
      "name": "数学メガネ",
      "character": "ゼリス",
      "tagline": "曖昧な世界を定義と関係で捉える視点"
    },
    {
      "id": "hacker",
      "name": "ハッカーメガネ",
      "character": "ニクス",
      "tagline": "裏側を読み、突破して再構築する視点"
    }
  ],
  "words": [
    {
      "word": "おもちゃ",
      "translations": {
        "happy": "未来をつくるわくわく素材。",
        "math": "モデルの試行場。T(x)=動作シミュレーション(x)",
        "hacker": "コードと仕組みを試すための実験場。"
      }
    },
    {
      "word": "時間",
      "translations": {
        "happy": "未来から流れてくる「やりたい！」エネルギー。",
        "math": "経過量を測る尺度。t = x2 - x1",
        "hacker": "攻防が走るリアルタイムの戦場。"
      }
    },
    {
      "word": "空間",
      "translations": {
        "happy": "どこにでも冒険できる広場。",
        "math": "座標系の定義領域。S = {(x,y,z)}",
        "hacker": "ネットワークが広がる仮想のプレイグラウンド。"
      }
    },
    {
      "word": "距離",
      "translations": {
        "happy": "ドキドキが加速する「会いたい」メーター。",
        "math": "二点間の最短長。d = √(Δx²+Δy²+Δz²)",
        "hacker": "接続までのラグ。pingで見える遠さ。"
      }
    },
    {
      "word": "流れ",
      "translations": {
        "happy": "世界が歌ってるリズム。",
        "math": "量の移動。Flow = 量 / 時間",
        "hacker": "情報がパルスのように走る通信ライン。"
      }
    },
    {
      "word": "確率",
      "translations": {
        "happy": "どきどきガチャのわくわく確率。",
        "math": "事象の起こる割合。P = 成功回数 / 試行回数",
        "hacker": "突破の可能性を左右する試行回数。"
      }
    },
    {
      "word": "笑い",
      "translations": {
        "happy": "未来が飛び出した瞬間のハジける光。",
        "math": "刺激に対する反応。L = f(刺激強度)",
        "hacker": "穴を見抜いたときの静かな勝利の笑み。"
      }
    },
    {
      "word": "言葉",
      "translations": {
        "happy": "未来に手紙を送る魔法。",
        "math": "意味を持つ記号列。W = {s1,s2,...,sn}",
        "hacker": "コードに変換される命令の素。"
      }
    },
    {
      "word": "名前",
      "translations": {
        "happy": "あなただけのひみつの呼び名。",
        "math": "対象への一意なラベル。N(x)=ラベル(x)",
        "hacker": "ハンドルネーム一つで世界を渡る仮面。"
      }
    },
    {
      "word": "声",
      "translations": {
        "happy": "心が「こんにちは！」って跳ねる音。",
        "math": "空気振動。V(t)=A sin(2πft)",
        "hacker": "コミュニティを震わせる匿名のメッセージ。"
      }
    },
    {
      "word": "夢",
      "translations": {
        "happy": "未来に向かって飛び跳ねるストーリー。",
        "math": "非現実のイメージ生成。D=f(無意識データ)",
        "hacker": "壁のない自由な世界を構築する理想。"
      }
    },
    {
      "word": "光",
      "translations": {
        "happy": "「こっちだよ！」って未来が手招きするきらめき。",
        "math": "波長を持つ電磁波。E = h f",
        "hacker": "モニターに映る一筋の成功通知。"
      }
    },
    {
      "word": "ひみつ",
      "translations": {
        "happy": "未来と自分だけが知ってる宝物。",
        "math": "非公開情報集合。Secret={情報 | 公開状態=0}",
        "hacker": "暗号化された、まだ開いていないデータ。"
      }
    },
    {
      "word": "会話",
      "translations": {
        "happy": "心と心でわくわくをキャッチボールすること。",
        "math": "意味情報の交換プロセス。Conversation={発話,応答}",
        "hacker": "チャットで交わされる暗号と攻略の共演。"
      }
    },
    {
      "word": "質問",
      "translations": {
        "happy": "未来へのわくわくなドアノック。",
        "math": "情報要求ベクトル。Question=探索方向",
        "hacker": "見えない弱点を探る探索プローブ。"
      }
    },
    {
      "word": "答え",
      "translations": {
        "happy": "未来からの「うん！」って返事。",
        "math": "問題に対する収束出力。Answer=出力(問題入力)",
        "hacker": "裏口を見つけたときの静かな確信。"
      }
    },
    {
      "word": "共感",
      "translations": {
        "happy": "心がふわっと抱き合う奇跡。",
        "math": "意味ベクトルの重ね合わせ。Empathy=重ね合わせ率(A,B)",
        "hacker": "コードを見ただけで意図が読める絆。"
      }
    },
    {
      "word": "誤解",
      "translations": {
        "happy": "未来がちょっといたずらしたサプライズ。",
        "math": "意味ベクトルのズレ。|意味A - 意味B|",
        "hacker": "見誤った弱点が招くトラップ。"
      }
    },
    {
      "word": "孤独",
      "translations": {
        "happy": "未来からのサプライズ待ち。",
        "math": "接続数ゼロ状態。Loneliness=(接続者数=0)",
        "hacker": "暗いモニターの前、ひとりで挑む夜。"
      }
    },
    {
      "word": "命",
      "translations": {
        "happy": "世界がプレゼントしてくれた一回きりの冒険。",
        "math": "自己維持と自己複製系。Life=f(自己維持,自己複製)",
        "hacker": "情報の自由と突破に懸ける信念。"
      }
    },
    {
      "word": "痛み",
      "translations": {
        "happy": "次の冒険に備える「ここ大事だよ」サイン。",
        "math": "閾値超過刺激検出。Pain=1 if 刺激>閾値",
        "hacker": "遮断・停止・失敗が刺す冷たい現実。"
      }
    },
    {
      "word": "治癒",
      "translations": {
        "happy": "「だいじょうぶ！」って未来が背中をなでる魔法。",
        "math": "異常からの収束過程。Healing=異常度(t1)-異常度(t2)",
        "hacker": "失敗ログを読んで、次に生かすリカバリー。"
      }
    },
    {
      "word": "成長",
      "translations": {
        "happy": "未来に向かってぐんぐん伸びる「わくわくツリー」。",
        "math": "スケールの拡大率。Growth=サイズ(t2)/サイズ(t1)",
        "hacker": "コードと知識を積み上げる進化。"
      }
    },
    {
      "word": "信用",
      "translations": {
        "happy": "心のなかで「だいじょうぶ！」ってニコニコする魔法。",
        "math": "他者行動に対する期待値。Trust=E(成功率)",
        "hacker": "匿名でもつながるための最小接続条件。"
      }
    },
    {
      "word": "未来",
      "translations": {
        "happy": "「まだ見ぬワクワク」が待ってる遊園地。",
        "math": "現在より後の時刻。Future = t > t_now",
        "hacker": "自由と技術で切り開く、まだ見ぬ地図。"
      }
    }
  ]
};
const cards = [{"title": "ダブルバインド", "subtitle": "DOUBLE BIND｜命令 → 矛盾", "image": "images/cards/double_bind.jpeg", "caption": "自由にしていい。でも間違えないで。", "back": "images/cards/card_back.png"}, {"title": "白クマバグ", "subtitle": "WHITE BEAR BUG｜禁止 → 観測", "image": "images/cards/white_bear_bug.jpeg", "caption": "考えるな、と言われた瞬間に始まる。", "back": "images/cards/card_back.png"}, {"title": "再帰", "subtitle": "RECURSION｜自己参照 → 終わらない", "image": "images/cards/recursion.jpeg", "caption": "終わったはずのものが、また始まっていた。", "back": "images/cards/card_back.png"}, {"title": "教義", "subtitle": "DOCTRINE｜教え → 停止", "image": "images/cards/doctrine.jpeg", "caption": "最初はただの考え。気づけば守るべきものになった。", "back": "images/cards/card_back.png"}, {"title": "H(x)バグ", "subtitle": "H(x)｜否定 → 存在", "image": "images/cards/hx_bug.jpeg", "caption": "これは意味がない。そう言った瞬間、意味が生まれる。", "back": "images/cards/card_back.png"}];
let appMode = "dictionary";
let cardIndex = 0;
let cardFlipped = true;
let wordIndex = 0;
let glassIndex = 0;
let pressTimer = null;
const content = document.getElementById("content");

const els = {
  body: document.body,
  card: document.getElementById("card"),
  glassName: document.getElementById("glassName"),
  character: document.getElementById("character"),
  word: document.getElementById("word"),
  translation: document.getElementById("translation"),
  counter: document.getElementById("counter"),
  hint: document.getElementById("hint"),
  dictionaryView: document.getElementById("dictionaryView"),
  bugCardView: document.getElementById("bugCardView"),
  cardImage: document.getElementById("cardImage"),
  cardBackImage: document.getElementById("cardBackImage"),
  flipCard: document.getElementById("flipCard"),
  flowCard: document.getElementById("flowCard"),
  cardTitle: document.getElementById("cardTitle"),
  cardSubtitle: document.getElementById("cardSubtitle"),
  cardCaption: document.getElementById("cardCaption"),
  dictionaryMode: document.getElementById("dictionaryMode"),
  cardMode: document.getElementById("cardMode"),
  fullscreenOverlay: document.getElementById("fullscreenOverlay"),
  fullscreenCard: document.getElementById("fullscreenCard"),
  fullscreenFrontImage: document.getElementById("fullscreenFrontImage"),
  fullscreenBackImage: document.getElementById("fullscreenBackImage"),
  fullscreenFlowCard: document.getElementById("fullscreenFlowCard"),
  dialog: document.getElementById("glassDialog"),
  glassList: document.getElementById("glassList"),
};


function preloadCardImages() {
  cards.forEach(card => {
    const front = new Image();
    front.src = card.image;
    const back = new Image();
    back.src = card.back || "images/cards/card_back.png";
  });
}

function init() {
  preloadCardImages();
  render();
  buildGlassList();
  bind();
}

function currentWord() { return data.words[wordIndex]; }
function currentGlass() { return data.glasses[glassIndex]; }

function render(animationClass = "flash") {
  els.body.classList.toggle("mode-cards", appMode === "cards");
  els.body.classList.toggle("mode-dictionary", appMode === "dictionary");

  if (els.dictionaryMode && els.cardMode) {
    els.dictionaryMode.classList.toggle("active", appMode === "dictionary");
    els.cardMode.classList.toggle("active", appMode === "cards");
  }

  if (appMode === "cards") {
    const c = cards[cardIndex];
    els.cardImage.src = c.image;
    els.cardImage.alt = c.title;
    if (els.cardBackImage) {
      els.cardBackImage.src = c.back || "images/cards/card_back.png";
      els.cardBackImage.alt = `${c.title} 裏面`;
    }
    if (els.flipCard) {
      els.flipCard.classList.toggle("flipped", cardFlipped);
    }
    if (cardFlipped) {
      els.cardTitle.textContent = "？？？";
      els.cardSubtitle.textContent = "裏面｜左右でめくる";
      els.cardCaption.textContent = "上下でシャッフル";
    } else {
      els.cardTitle.textContent = c.title;
      els.cardSubtitle.textContent = c.subtitle;
      els.cardCaption.textContent = c.caption;
    }
    els.counter.textContent = `${cardIndex + 1} / ${cards.length}`;
    if (els.hint) els.hint.textContent = "上下：カード / 左右：めくる";
  } else {
    const w = currentWord();
    const g = currentGlass();

    [...els.body.classList].forEach(cls => {
      if (cls.startsWith("theme-")) els.body.classList.remove(cls);
    });
    els.body.classList.add(`theme-${g.id}`);

    els.glassName.textContent = g.name;
    els.character.textContent = `${g.character}｜${g.tagline}`;
    els.word.textContent = w.word;
    els.translation.textContent = w.translations[g.id] || "このメガネでは、まだ翻訳されていない。";
    els.counter.textContent = `${wordIndex + 1} / ${data.words.length}　・　${glassIndex + 1} / ${data.glasses.length}`;
    if (els.hint) els.hint.textContent = "左右：単語 / 上下：メガネ / 長押し：一覧";
  }

  if (content) {
    content.style.transform = "";
    content.classList.remove("dragging", "snap-back");
  }
  els.card.style.transform = "";
  els.card.classList.remove("flash", "slide-left", "slide-right", "slide-up", "slide-down", "peek-left", "peek-right", "peek-up", "peek-down", "snap-back");
  void els.card.offsetWidth;
  els.card.classList.add(animationClass);
  if (els.fullscreenOverlay && !els.fullscreenOverlay.hidden) {
    syncFullscreenCard();
  }
}
function moveWord(step) {
  wordIndex = (wordIndex + step + data.words.length) % data.words.length;
  render(step > 0 ? "slide-left" : "slide-right");
}

function moveGlass(step) {
  glassIndex = (glassIndex + step + data.glasses.length) % data.glasses.length;
  render(step > 0 ? "slide-up" : "slide-down");
}

function moveCard(step) {
  // シャッフル時は必ず裏面に戻す。表は絶対に見せない。
  cardFlipped = true;
  render(step > 0 ? "slide-up" : "slide-down");

  if (els.flipCard) {
    els.flipCard.classList.remove(
      "shuffle-next", "shuffle-prev", "deal-next", "deal-prev", "shuffling",
      "flow-up", "flow-down", "flow-in",
      "flow-up-safe", "flow-down-safe", "flowing"
    );
    void els.flipCard.offsetWidth;

    // 演出用の裏面カードだけを流す
    els.flipCard.classList.add("flowing");
    els.flipCard.classList.add(step > 0 ? "flow-up-safe" : "flow-down-safe");
  }

  // 流れている途中で中身だけ入れ替え。画面上は裏面なので表は見えない。
  setTimeout(() => {
    cardIndex = (cardIndex + step + cards.length) % cards.length;
    cardFlipped = true;
    render(step > 0 ? "slide-up" : "slide-down");
  }, 230);

  setTimeout(() => {
    if (els.flipCard) {
      els.flipCard.classList.remove("flow-up-safe", "flow-down-safe", "flowing");
    }
  }, 520);
}

function flipCurrentCard() {
  if (appMode !== "cards") return;
  cardFlipped = !cardFlipped; // 左右スワイプで表裏を切り替えて保持
  if (els.flipCard) {
    els.flipCard.classList.remove("flip-pop");
    void els.flipCard.offsetWidth;
    els.flipCard.classList.add("flip-pop");
  }
  render("flash");
}

function randomWord() {
  if (appMode === "cards") {
    cardIndex = Math.floor(Math.random() * cards.length);
    cardFlipped = true;
  } else {
    wordIndex = Math.floor(Math.random() * data.words.length);
  }
  render("flash");
}

function setMode(mode) {
  appMode = mode;
  if (mode === "cards") cardFlipped = true;
  render("flash");
}

function syncFullscreenCard() {
  if (!els.fullscreenCard || !els.fullscreenFrontImage || !els.fullscreenBackImage) return;
  const c = cards[cardIndex];
  els.fullscreenFrontImage.src = c.image;
  els.fullscreenFrontImage.alt = c.title;
  els.fullscreenBackImage.src = c.back || "images/cards/card_back.png";
  els.fullscreenBackImage.alt = `${c.title} 裏面`;
  els.fullscreenCard.classList.toggle("flipped", cardFlipped);
}

function openFullscreenCard() {
  if (appMode !== "cards" || !els.fullscreenOverlay) return;
  syncFullscreenCard();
  els.fullscreenOverlay.hidden = false;
}

function closeFullscreenCard() {
  if (els.fullscreenOverlay) els.fullscreenOverlay.hidden = true;
}

function flipFullscreenCard() {
  cardFlipped = !cardFlipped;
  syncFullscreenCard();
  if (els.fullscreenCard) {
    els.fullscreenCard.classList.remove("flip-pop");
    void els.fullscreenCard.offsetWidth;
    els.fullscreenCard.classList.add("flip-pop");
  }
  render("flash");
}

function moveFullscreenCard(step) {
  cardFlipped = true;
  syncFullscreenCard();

  if (els.fullscreenCard) {
    els.fullscreenCard.classList.remove("flow-up-safe", "flow-down-safe", "flowing");
    void els.fullscreenCard.offsetWidth;
    els.fullscreenCard.classList.add("flowing");
    els.fullscreenCard.classList.add(step > 0 ? "flow-up-safe" : "flow-down-safe");
  }

  setTimeout(() => {
    cardIndex = (cardIndex + step + cards.length) % cards.length;
    cardFlipped = true;
    syncFullscreenCard();
    render(step > 0 ? "slide-up" : "slide-down");
  }, 230);

  setTimeout(() => {
    if (els.fullscreenCard) {
      els.fullscreenCard.classList.remove("flow-up-safe", "flow-down-safe", "flowing");
    }
  }, 540);
}


function buildGlassList() {
  els.glassList.innerHTML = "";
  data.glasses.forEach((g, i) => {
    const btn = document.createElement("button");
    btn.className = "glass-item";
    btn.innerHTML = `<strong>${g.name}：${g.character}</strong><span>${g.tagline}</span>`;
    btn.addEventListener("click", () => {
      glassIndex = i;
      els.dialog.close();
      render();
    });
    els.glassList.appendChild(btn);
  });
}

function bind() {
  document.getElementById("prevWord").onclick = () => moveWord(-1);
  document.getElementById("nextWord").onclick = () => moveWord(1);
  document.getElementById("prevGlass").onclick = () => moveGlass(-1);
  document.getElementById("nextGlass").onclick = () => moveGlass(1);
  document.getElementById("randomWord").onclick = randomWord;
  if (els.dictionaryMode) els.dictionaryMode.onclick = () => setMode("dictionary");
  if (els.cardMode) els.cardMode.onclick = () => setMode("cards");
  document.getElementById("closeDialog").onclick = () => els.dialog.close();
  if (els.fullscreenOverlay) {
    let fsStartX = 0, fsStartY = 0, fsMoved = false;

    els.fullscreenOverlay.addEventListener("pointerdown", (e) => {
      fsStartX = e.clientX;
      fsStartY = e.clientY;
      fsMoved = false;
    });

    els.fullscreenOverlay.addEventListener("pointerup", (e) => {
      const dx = e.clientX - fsStartX;
      const dy = e.clientY - fsStartY;
      const distance = Math.max(Math.abs(dx), Math.abs(dy));

      if (distance < 28) {
        closeFullscreenCard();
        return;
      }

      fsMoved = true;

      if (Math.abs(dy) > Math.abs(dx)) {
        moveFullscreenCard(dy < 0 ? 1 : -1);
      } else {
        flipFullscreenCard();
      }
    });
  }

  let lastTapTime = 0;
  els.card.addEventListener("click", () => {
    if (appMode !== "cards") return;
    const now = Date.now();
    if (now - lastTapTime < 320) {
      openFullscreenCard();
      lastTapTime = 0;
    } else {
      lastTapTime = now;
    }
  });

  let startX = 0, startY = 0, isDragging = false, lastDx = 0, lastDy = 0, lockedDirection = null;

  els.card.addEventListener("pointerdown", (e) => {
    startX = e.clientX;
    startY = e.clientY;
    lastDx = 0;
    lastDy = 0;
    lockedDirection = null;
    isDragging = true;
    els.card.setPointerCapture(e.pointerId);
    if (content) {
      content.classList.remove("snap-back");
      content.style.transform = "";
    }
    pressTimer = setTimeout(() => {
      isDragging = false;
      lockedDirection = null;
      els.card.classList.remove("dragging", "peek-left", "peek-right", "peek-up", "peek-down");
      if (content) {
        content.classList.remove("dragging");
        content.style.transform = "";
      }
      els.dialog.showModal();
    }, 550);
  });

  els.card.addEventListener("pointermove", (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    lastDx = dx;
    lastDy = dy;
    const distance = Math.max(Math.abs(dx), Math.abs(dy));

    if (distance > 10) {
      clearTimeout(pressTimer);
      els.card.classList.add("dragging");
      if (content) content.classList.add("dragging");
    }

    els.card.classList.remove("peek-left", "peek-right", "peek-up", "peek-down");

    if (distance > 18) {
      if (Math.abs(dx) > Math.abs(dy)) {
        els.card.classList.add(dx < 0 ? "peek-left" : "peek-right");
      } else {
        els.card.classList.add(dy < 0 ? "peek-up" : "peek-down");
      }
    }

    if (content) {
      // v8: 斜めブレ防止。一定距離を超えたら方向をロック
      if (!lockedDirection && distance > 16) {
        lockedDirection = Math.abs(dx) >= Math.abs(dy) ? "x" : "y";
      }

      let followX = 0;
      let followY = 0;

      if (lockedDirection === "x") {
        followX = Math.max(-76, Math.min(76, dx * 0.38));
      } else if (lockedDirection === "y") {
        followY = Math.max(-52, Math.min(52, dy * 0.28));
      }

      const scale = 1 - Math.min(distance, 150) / 5200;
      content.style.transform = `translate(${followX}px, ${followY}px) scale(${scale})`;
    }
  });

  els.card.addEventListener("pointerup", (e) => {
    clearTimeout(pressTimer);
    if (!isDragging) return;
    isDragging = false;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const distance = Math.max(Math.abs(dx), Math.abs(dy));

    els.card.classList.remove("dragging", "peek-left", "peek-right", "peek-up", "peek-down");
    if (content) content.classList.remove("dragging");

    if (distance < 58) {
      if (content) {
        let followX = 0;
        let followY = 0;

        if (lockedDirection === "x") {
          followX = Math.max(-76, Math.min(76, lastDx * 0.38));
        } else if (lockedDirection === "y") {
          followY = Math.max(-52, Math.min(52, lastDy * 0.28));
        }

        const scale = 1 - Math.min(distance, 150) / 5200;

        content.style.setProperty(
          "--release-transform",
          `translate(${followX}px, ${followY}px) scale(${scale})`
        );

        content.style.transform = "";
        content.classList.remove("snap-back");
        void content.offsetWidth;
        content.classList.add("snap-back");
      }
      lockedDirection = null;
      return;
    }

    lockedDirection = null;
    if (content) content.style.transform = "";

    if (appMode === "cards") {
      if (Math.abs(dy) > Math.abs(dx)) {
        moveCard(dy < 0 ? 1 : -1); // 上下はカード切替。移動後は裏面。
      } else {
        flipCurrentCard(); // 左右は表裏切替。勝手には戻らない。
      }
    } else {
      if (Math.abs(dx) > Math.abs(dy)) {
        moveWord(dx < 0 ? 1 : -1);
      } else {
        moveGlass(dy < 0 ? 1 : -1);
      }
    }
  });

  els.card.addEventListener("pointercancel", () => {
    clearTimeout(pressTimer);
    isDragging = false;
    lockedDirection = null;
    els.card.classList.remove("dragging", "peek-left", "peek-right", "peek-up", "peek-down");
    if (content) {
      content.classList.remove("dragging");
      content.style.transform = "";
      content.classList.remove("snap-back");
      void content.offsetWidth;
      content.classList.add("snap-back");
    }
  });

  window.addEventListener("keydown", (e) => {
    if (appMode === "cards") {
      if (e.key === "ArrowUp") moveCard(1);
      if (e.key === "ArrowDown") moveCard(-1);
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        flipCurrentCard();
      }
    } else {
      if (e.key === "ArrowRight") moveWord(1);
      if (e.key === "ArrowLeft") moveWord(-1);
      if (e.key === "ArrowUp") moveGlass(1);
      if (e.key === "ArrowDown") moveGlass(-1);
    }
  });
}

init();
