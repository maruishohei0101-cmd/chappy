const PRODUCTS_DATA = {
  "item_01": {
    id: "item_01",
    category: "CLEANSING & WASH",
    tag: "PICK UP",
    name: "ACFIT VSANG Beta-g Secure Cleansing 200ml（アクフィット クレンジング）",
    catchcopy: "洗う瞬間から、肌のうるおいを守る鎮静クレンジング",
    prices: {
      general: 11000,
      agency: 8400,
      vip_agency: 6000
    },
    description: 
    `5種のヒアルロン酸※1、3種の保湿成分※1、4種の発酵ろ過液※1、そして10種の自然由来エキス※1を贅沢に配合。肌のうるおいを守りながら、心地よくやさしく洗い上げます。マイルドな洗浄成分を採用し、乾燥などでゆらぎがちなデリケートな肌の方にも毎日心地よくお使いいただける処方です。

・5種のヒアルロン酸＆保湿成分※1： うるおいをキープし、しっとりとした洗い上がりに
・4種の発酵ろ過液※1： 肌をすこやかに保ち、キメの整った印象へ
・10種の自然由来エキス※1＆マイルド洗浄成分： 肌への摩擦や負担を抑えた、やさしい洗い心地
     
※1 すべて保湿成分（または整肌成分）
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/cleansing/1.jpg",
      "images/cleansing/2.jpg",
      "images/cleansing/3.jpg",
      "images/cleansing/4.jpg"

    ],
    specs: [
      { label: "内容量", value: "200mL（約1.5〜2ヶ月分）" },
      { label: "全成分", value: "水、BG、グリセリン、セラミドNP、セラミドAP、ヒアルロン酸Na 他" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
  "item_02": {
    id: "item_02",
    category: "BASIC SKINCARE",
    tag: "NEW",
    name: "ACFIT VSANG Beta-G Secure Toner 200ml（アクフィット トナー）",
    catchcopy: "洗顔後の肌を、うるおいとキメから整えるファーストケアの化粧品",
    prices: {
      general: 11000,
      agency: 8400,
      vip_agency: 6000
    },
    description: 
        `しなやかで心地よい素肌へ導く、うるおい保湿化粧水12種の自然由来エキス※1、4種の発酵ろ過液※1、そして保湿成分※1を贅沢に配合。乾燥でゆらぎがちな肌をうるおいで満たし、キメの整ったすこやかな状態へと導きます。乾燥によるくすみやハリ不足にアプローチするダブルのケア処方で、デリケートな肌にもやさしく寄り添います。

・12種の自然由来エキス＆保湿成分※1： うるおいをたっぷり補給し、肌をすこやかに整える
・4種の発酵ろ過液※1： キメをなめらかに整え、ハリのある引き締まった印象へ
・透明感※2＆エイジングケア※3のWアプローチ： 乾燥によるくすみを防ぎ、ツヤと輝きに満ちたすこやかな素肌へ
     
※1 すべて保湿成分（または整肌成分） 
※2 うるおいを与えることによる肌印象 
※3 年齢に応じたうるおいケア ※すべての方に皮膚刺激が起きないわけではありません。`,

    images: [
      "images/toner/1.jpg",
      "images/toner/2.jpg",
      "images/toner/3.jpg",
      "images/toner/4.jpg"
    ],
    specs: [
      { label: "内容量", value: "200ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">NIGHT CARE</span>
        <h3>寝ている間の「水分蒸散」をブロックする密着処方</h3>
        <p>エアコンや季節の変わり目でゆらぎやすい肌に、濃厚なクリームがぴったり密着。翌朝の洗顔時に違いを実感できます。</p>
        <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80" alt="クリームイメージ">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80" alt="成分イメージ">
        </div>
        <div class="lp-grid-text">
          <span class="lp-badge">INGREDIENT</span>
          <h3>話題の整肌成分ナイアシンアミド配合</h3>
          <p>乾燥による小ジワを目立たなくし、キメの整ったなめらかな肌印象へと導きます。</p>
        </div>
      </div>
    `
  },
  "item_03": {
    id: "item_03",
    category: "BASIC SKINCARE",
    tag: "BEST SELLER",
    name: "ACFIT VSANG Beta-G Infusing Skin Booster 100ml（アクフィット スキンブースター）",
    catchcopy: "インナードライを和らげ、うるおいとハリを満たす集中保湿美容液",
    prices: {
      general: 9900,
      agency: 3850,
      vip_agency: 2750
    },
    description: 
    `角質層のすみずみまでうるおいで満たす、保湿＆ハリケア美容液。分子量の異なる5種のヒアルロン酸※1と6種のペプチド※1を贅沢に配合。乾燥してカサつきがちな肌に豊かなうるおいを届け、みずみずしく整えます。デリケートな肌にも寄り添うマイルドな使い心地で、なめらかでハリのあるすこやかな肌コンディションを一日中キープします。

・5種のヒアルロン酸※1： 角質層のすみずみまでうるおいを届け、しっとり感をキープ
・6種のペプチド※1： 肌をすこやかに保ち、ハリとツヤのあるなめらかなキメへ
・マイルド処方： デリケートな肌の方にも、毎日心地よくお使いいただけるやさしい使い心地
     
※1 すべて保湿成分（または整肌成分） 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/skin/4.jpg",
      "images/skin/2.jpg",
      "images/skin/3.jpg"
      ],
    specs: [
      { label: "内容量", value: "100ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }

    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">FRICTIONLESS</span>
        <h3>こすらず「浮かせて落とす」から、洗い上がりもつっぱらない</h3>
        <p>6種のオーガニック植物オイルを配合。汚れだけを的確に落とし、肌に必要な潤いはしっかり残します。</p>
        <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=80" alt="クレンジングイメージ">
      </div>
    `
  },
  "item_04": {
    id: "item_04",
    category: "SPECIAL CARE",
    tag: "",
    name: "ACFIT VSANG Beta-G Lactocare Ampoule（アクフィット ラクトケアアンプル）",
    catchcopy: "肌表面の環境まで見つめる、発酵コンディショニング美容液",
    prices: {
      general: 15400,
      agency: 3360,
      vip_agency: 2400
    },
    description: 
    `うるおいバリアを守り、すこやかな肌バランスへ導く集中保湿アンプル独自のマイクロバイオームケア成分※1、分子量の異なる9種のヒアルロン酸※2、パンテノール※2を贅沢に配合。乾燥や外部刺激※3によりゆらぎがちな肌に豊かなうるおいを届け、キメの整ったすこやかな状態へと導きます。濃密なうるおいが肌バランスを整え、みずみずしくなめらかな素肌を保ちます。

・独自マイクロバイオームケア成分※1： 肌のうるおいバリアを保ち、すこやかな肌環境へ
・9種のヒアルロン酸※2＆パンテノール※2： 角質層のすみずみまでうるおいを与え、肌荒れを防ぐ
・マイルド処方： デリケートな肌の方にも、毎日心地よくお使いいただけるやさしい使い心地
     
※1 整肌成分（美肌菌に着目した保湿・整肌成分）
※2 保湿成分 
※3 乾燥など 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/Ampoule/1.png",
      "images/Ampoule/2.png",
      "images/Ampoule/3.png"
    ],
    specs: [
      { label: "内容量", value: "30ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">ALL IN ONE</span>
        <h3>1本で3役。毎日のケアをシンプルかつ上質に</h3>
        <p>ヘアオイル・ボディオイル・ネイルケアとしてマルチに活躍。酸化しにくい製法で最後の1滴までフレッシュな香りを楽しめます。</p>
        <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" alt="マルチオイル">
      </div>
    `
  },
  "item_05": {
    id: "item_05",
    category: "SPECIAL CARE",
    tag: "",
    name: "ACFIT VSANG Beta-G Azulene Focus Oil（アクフィット アズレンオイル）",
    catchcopy: "乾燥でこわばる肌を、青のエモリエントケアでしなやかに包む鎮静オイル",
    prices: {
      general: 6600,
      agency: 16800,
      vip_agency: 12000
    },
    description: 
    `デリケートな肌をやさしく包み込む、保湿ケアオイル高純度アズレン※1、トコフェロール※2、ヒマワリ種子油※3、スクワラン※3を贅沢に配合。乾燥でゆらぎがちな肌をうるおいで満たし、乾燥による肌荒れを防ぎます。保湿・ツヤ・キメを整えるマルチなケアで、敏感に傾きがちな肌も心地よく包み込み、すこやかな素肌へと導きます。

・高純度アズレン※1： 乾燥による肌荒れを防ぎ、すこやかな肌状態へ整える
・トコフェロール※2＆植物由来オイル※3： 角質層のすみずみまでうるおいを届け、しっとり感をキープ
・ウコン根エキス※1： 乾燥によるくすみを防ぎ、ツヤと輝きのある明るい印象へ
     
※1 整肌成分 
※2 製品の抗酸化剤（または整肌成分） 
※3 保湿成分 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/oil/1.jpg",
      "images/oil/2.jpg",
      "images/oil/3.jpg",
      "images/oil/4.jpg"
    ],
    specs: [
      { label: "内容量", value: "15ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">SPECIAL SET</span>
        <h3>「落とす・与える・守る」の3ステップで理想の素肌へ</h3>
        <p>ライン使いすることで各アイテムの相乗効果を最大化。初めての方やギフトにも最適です。</p>
        <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80" alt="セットイメージ">
      </div>
    `
  },
  "item_06": {
    id: "item_06",
    category: "BASIC SKINCARE",
    tag: "",
    name: "ACFIT VSANG Cream（アクフィット クリーム）",
    catchcopy: "軽やかに包み、肌のうるおいとしなやかさを守る水分クリーム",
    // バリエーション（プルダウン用：左から順に並びます）
    variants: [
      {
        id: "50ml",
        label: "50ml",
        prices: {
          general: 11000,
          agency: 4620,
          vip_agency: 3300
        }
      },
      {
        id: "200ml",
        label: "200ml",
        prices: {
          general: 24200,
          agency: 8400,
          vip_agency: 6000
        }
      }
    ],
    // 一覧表示用の基準価格（最安値の50mlなどを入れておきます）
    prices: {
      general: 11000,
      agency: 4620,
      vip_agency: 3300
    },
    description: 
    `乾燥によるくすみ肌をうるおいで満たし、ツヤを与える保湿クリーム。ナイアシンアミド※1、パンテノール※1、アロエベラエキス※1、ドクダミエキス※1を贅沢に配合。乾燥で荒れがちなデリケートな肌をやさしく包み込み、豊かなうるおいを与えてツヤのあるすこやかな素肌へと導きます。透明感※2とエイジングケア※3にアプローチするダブルのケア処方で、なめらかでハリのあるキメへと整えます。

・ナイアシンアミド※1＆パンテノール※1： 豊かなうるおいを与え、透明感※2とハリのある印象へ
・アロエベラ※1・ドクダミ※1・ハマメリス※1： 乾燥による肌荒れを防ぎ、なめらかなキメへ整える
・6種の保湿成分※4： 角質層のすみずみまでうるおいを届け、しっとり感を一日中キープ

※1 整肌成分 
※2 うるおいを与えることによる肌印象 
※3 年齢に応じたうるおいケア 
※4 保湿成分 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/v-cream/2.jpg",
      "images/v-cream/1.jpg",
      "images/v-cream/3.jpg",
      "images/v-cream/5.jpg"
    ],
    specs: [
      { label: "内容量", value: "50ml / 200ml" },
      { label: "主要成分", value: "ナイアシンアミド、パンテノール、アロエベラエキス、ドクダミエキス" },
      { label: "原産国", value: "韓国" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
  "item_07": {
    id: "item_07",
    category: "BASIC SKINCARE",
    tag: "",
    name: "ACFIT VSANG Gel 300ml（アクフィット ジェル）",
    catchcopy: "外部刺激で敏感になった肌をうるおいで包む、クーリング鎮静ジェル",
    prices: {
      general: 13200,
      agency: 8400,
      vip_agency: 6000
    },
    description: 
    `乾燥などの外部刺激でゆらぎがちな肌をうるおいで満たす、ひんやり保湿ジェルハナビラタケエキス※1、独自のクーリング保湿成分※2、5種のヒアルロン酸※2を贅沢に配合。乾燥や外部刺激※3によりほてり・カサつきが気になる肌にひんやりとした心地よい使用感でうるおいを与え、キメの整ったすこやかな肌コンディションへと導きます。デリケートな肌の方にも毎日心地よくお使いいただけるマイルド処方の保湿ジェルです。

・独自クーリング保湿成分※2： ひんやりとした使用感で肌を引き締め、すこやかに整える
・ハナビラタケエキス※1＆β-グルカン※2： 乾燥などの外部刺激から肌を守り、うるおいを保つ
・5種のヒアルロン酸※2： 角質層のすみずみまでうるおいを届け、水分バランスをキープ
     
※1 整肌成分 
※2 保湿成分 
※3 乾燥や紫外線による乾燥など 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/Gel/3.png",
      "images/Gel/1.png",
      "images/Gel/2.png",
      "images/Gel/4.png"
    ],
    specs: [
      { label: "内容量", value: "200ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
  "item_08": {
    id: "item_08",
    category: "BASIC SKINCARE",
    tag: "",
    name: "ACFIT V-SANG Beta-g Lacto Care Cream（アクフィット ラクトケアクリーム）",
    catchcopy: "発酵由来成分とうるおいで、乾燥肌を健やかに整える高保湿クリーム",
    prices: {
      general: 19800,
      agency: 8400,
      vip_agency: 6000
    },
    description: 
    `乳酸桿菌由来の発酵成分と植物由来の整肌成分に、複合保湿原料「Hyal11」を配合。ヒマワリ種子油、シア脂、パンテノール、ベータグルカン、アラントインなどの保湿・整肌成分が、肌のうるおいを保ち、乾燥による肌荒れを防ぎます。なめらかな広がり、肌を柔らかく包むテクスチャー。しっとりとした保湿感を求める肌に適したクリームです。
          
※1 整肌成分 
※2 保湿成分 
※3 乾燥や紫外線による乾燥など 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/G-care /1.jpg",
      "images/G-care /2.jpg"

    ],
    specs: [
      { label: "内容量", value: "150ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
  "item_09": {
    id: "item_09",
    category: "SPECIAL CARE",
    tag: "",
    name: "ACFIT VSANG Pack（アクフィット マスクパック）",
    catchcopy: "密着する美容液で、キメまで整える集中保湿×鎮静トリートメントパック",
    prices: {
      general: 11000,
      agency: 8400,
      vip_agency: 6000
    },
    description:
     `デリケートな肌をうるおいで包み込む、集中保湿マスクパック3種の発酵成分※1、EGF※1（ヒトオリゴペプチド-1）、そしてうるおい・ツヤケア成分※1を贅沢に配合。乾燥などの外部刺激※2によりゆらぎがちな肌に豊かなうるおいを届け、油分と水分のバランスを整えてすこやかな肌コンディションへと導きます。デリケートな肌の方にも、毎日のスペシャルケアとして心地よくお使いいただけるマイルド処方のマスクパックです。

・3種の発酵成分※1＆EGF※1： 肌にハリとツヤを与え、キメの整ったすこやかな素肌へ
・うるおい＆ツヤケア成分※1： 乾燥によるくすみを防ぎ、明るく透明感※3のある肌印象へ
・マイルド処方： デリケートな肌の方にも、毎日心地よくお使いいただけるやさしい使い心地
     
※1 整肌成分 
※2 乾燥や紫外線による乾燥など 
※3 うるおいを与えることによる肌印象 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/v-pack/2.jpg"
    
    ],
    specs: [
      { label: "内容量", value: "10枚" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
  "item_10": {
    id: "item_10",
    category: "BASIC SKINCARE",
    tag: "",
    name: "ACFIT VSANG Beta-G Lacto Sun Cream（アクフィット サンクリーム）",
    catchcopy: "紫外線から守り、うるおいと美しい肌印象を保つ日焼け止め",
    prices: {
      general: 12000,
      agency: 8400,
      vip_agency: 6000
    },
    description: 
 `紫外線吸収剤と紫外線散乱剤を組み合わせたハイブリッドUV処方に、乳酸桿菌由来の発酵成分や植物由来の整肌成分、ヒアルロン酸などの保湿成分を配合。肌のうるおいを保ちながら、日やけを防ぎます。淡いベージュ色のクリームがなめらかに伸び、赤みを自然にカバー。紫外線防御と日中の保湿に加え、素肌を整って見せる仕上がりまで考えた、スキンケア発想の日焼け止めです。
     
※1 整肌成分 
※2 乾燥や紫外線による乾燥など 
※3 うるおいを与えることによる肌印象 
※すべての方に皮膚刺激が起きないわけではありません。`,    
    images: [
      "images/G-sun/1.png",
      "images/G-sun/2.png"
    ],
    specs: [
      { label: "内容量", value: "200ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
  "item_11": {
    id: "item_11",
    category: "SPECIAL CARE",
    tag: "",
    name: "ACFIT VSANG Beta-G Bluepeel Solution（ブルーピール ソリューション）",
    catchcopy: "毛穴詰まり・ざらつきが気になる肌に。角質ケアと鎮静を組み合わせたブルーピール",
    prices: {
      general: 12000,
      agency: 8400,
      vip_agency: 6000
    },
    description:
    `キメの整ったなめらかな素肌へ導く、マイルドピーリング美容液カラミン※1、自然由来エキス※1、ヒアルロン酸※2を贅沢に配合。デリケートな肌にも寄り添うやさしい使い心地で、乾燥やごわつきの原因となる古い角質をやさしくケアし、なめらかな肌印象へと導きます。うるおいを与えながらキメを整え、ツヤのあるすこやかな素肌を保つブルーピール美容液です。

・カラミン※1： 乾燥による肌荒れを防ぎ、キメの整ったすこやかな肌へ
・自然由来エキス※1： 乾燥などの外部刺激から肌を守り、ツヤとハリのある印象へ
・ヒアルロン酸※2： 角質層のすみずみまでうるおいを届け、なめらかな肌触りへ
     
※1 整肌成分 
※2 保湿成分 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/Bluepeel/1.png"
    ],
    specs: [
      { label: "内容量", value: "200ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
  "item_12": {
    id: "item_12",
    category: "CLEANSING & WASH",
    tag: "",
    name: "ACFIT VSANG Beta-G Freeze Dried Solution（フリーズドライ ソリューション）",
    catchcopy: "ベタつくのに、乾燥する。トラブル肌の水分不足をケアする業務用美容液",
    prices: {
      general: 12000,
      agency: 8400,
      vip_agency: 6000
    },
    description: 
    `ピュアな美容成分※1をそのまま閉じ込めた、集中ケアアンプルフリーズドライ製法を採用し、フレッシュな状態のビタミンC※2、ツボクサエキス※2、ヒアルロン酸※3、コラーゲン※3を角質層のすみずみまで届け、豊かなうるおいで満たします。乾燥や外部刺激※4でゆらぎがちな肌や、乾燥によるくすみが気になる肌をうるおいで整え、透明感※5とハリのあるすこやかな素肌へと導く集中美容液です。

・ビタミンC※2＆ツボクサエキス※2： 乾燥による肌荒れを防ぎ、透明感※5のある明るい印象へ
・ヒアルロン酸※3＆コラーゲン※3： 角質層のすみずみまでうるおいを届け、ハリと弾力のあるキメへ
・フリーズドライ製法： 美容成分※1をフレッシュな状態で閉じ込め、角質層までダイレクトに届ける
     
※1 整肌・保湿成分 
※2 整肌成分 
※3 保湿成分 
※4 乾燥など 
※5 うるおいを与えることによる肌印象 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/dried/1.jpg",
      "images/dried/2.jpg",
      "images/dried/3.jpg",
      "images/dried/4.jpg"
    
    ],
    specs: [
      { label: "内容量", value: "200ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
  "item_13": {
    id: "item_13",
    category: "SPECIAL CARE",
    tag: "PICK UP",
    name: "ACFIT VSANG Beta-G Secure Solution 5ml x 5ea（セキュア ソリューション）",
    catchcopy: "ニキビ後の肌にも、整えるケアを。鎮静・透明感の集中コンディショニング業務用美容液",
    prices: {
      general: 12000,
      agency: 8400,
      vip_agency: 6000
    },
    description: 
    `乾燥や肌荒れを防ぎ、すこやかな素肌へ導く集中ケアアンプルナイアシンアミド※1、ペプチド※1＆コラーゲン※2、ツボクサエキス※1＆チャ葉水※2を贅沢に配合。乾燥などの外部刺激※3でゆらぎがちな肌をうるおいで整えながら、ハリとツヤのある明るい肌印象へと導きます。乾燥によるごわつきやくすみが気になる肌を、みずみずしくなめらかなコンディションへ導くデイリー美容液です。

・ナイアシンアミド※1： 乾燥によるくすみを防ぎ、透明感※4のある明るい印象へ
・ペプチド※1＆コラーゲン※2： 肌にハリと弾力を与え、キメの整ったすこやかな素肌へ
・ツボクサエキス※1＆チャ葉水※2： 乾燥による肌荒れを防ぎ、デリケートな肌をうるおいで守る
     
※1 整肌成分 
※2 保湿成分 
※3 乾燥など 
※4 うるおいを与えることによる肌印象 
※すべての方に皮膚刺激が起きないわけではありません。`,
    images: [
      "images/secure/1.jpg",
      "images/secure/2.jpg",
      "images/secure/3.jpg",
      "images/secure/4.jpg"
    ],
    specs: [
      { label: "内容量", value: "200ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
  "item_14": {
    id: "item_14",
    category: "CLEANSING & WASH",
    tag: "PICK UP",
    name: "ACFIT VSANG Clay Beta-g Immuca（クレイ イミュカ）",
    catchcopy: "皮脂を吸着し、うるおいを守る。弱酸性クレイトリートメント",
    prices: {
      general: 12000,
      agency: 8400,
      vip_agency: 6000
    },
    description: "毛穴の汚れや余分な皮脂をすっきり洗い流しながら、しっとりとした洗い上がりを叶える弱酸性の洗い流すクレイパックです。クレイ特有のつっぱり感を抑え、キメの整ったなめらかな素肌へ導きます。",
    images: [
      "images/G-immuca/1.jpg",
      "images/G-immuca/2.png",
      "images/G-immuca/3.jpg"
    ],
    specs: [
      { label: "内容量", value: "200ml（約2ヶ月分）" },
      { label: "主要成分", value: "ナイアシンアミド、シア脂、スクワラン、トコフェロール" },
      { label: "原産国", value: "日本" }
    ],
    lpHtml: `
      <div class="lp-block lp-hero-banner">
        <span class="lp-badge">POINT 01</span>
        <h3>分子サイズの異なる3種のセラミドが、肌バリアを徹底サポート</h3>
        <p>年齢や乾燥によって失われがちな潤い保持力を補い、翌朝までしっとりとした吸い付くような肌へ導きます。</p>
        <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=80" alt="美容液テクスチャー">
      </div>
      <div class="lp-block lp-grid-2">
        <div class="lp-grid-text">
          <span class="lp-badge">POINT 02</span>
          <h3>ベタつかないのに、濃密な保湿感</h3>
          <p>とろみのあるテクスチャーが肌に触れた瞬間にみずみずしく変化。朝のメイク前でもヨレにくく、1日中乾燥知らずのツヤ肌をキープします。</p>
        </div>
        <div class="lp-grid-img">
          <img src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80" alt="使用イメージ">
        </div>
      </div>
      <div class="lp-block lp-steps">
        <h3>ご使用方法（HOW TO USE）</h3>
        <div class="lp-step-cards">
          <div class="lp-step-card">
            <div class="step-num">STEP 1</div>
            <h4>洗顔後すぐに塗布</h4>
            <p>清潔な手のひらに2〜3プッシュ取り、顔全体にやさしくなじませます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 2</div>
            <h4>ハンドプレスで浸透</h4>
            <p>両手で顔を包み込み、体温でじっくりと角質層へ押し込みます。</p>
          </div>
          <div class="lp-step-card">
            <div class="step-num">STEP 3</div>
            <h4>いつものケアを重ねる</h4>
            <p>その後、化粧水やクリームで蓋をすることで保湿効果がさらに高まります。</p>
          </div>
        </div>
      </div>
    `
  },
};

// ランク表示ラベル
const RANK_LABELS = {
  general: "一般会員（通常価格）",
  agency: "代理店卸会員（30%OFF）",
  vip_agency: "上位代理店会員（50%OFF）"
};

// 現在の会員ランク取得（デモ用にlocalStorageで切り替え可能に）
function getCurrentRank() {
  return localStorage.getItem("demo_user_rank") || "general";
}

function setCurrentRank(rank) {
  localStorage.setItem("demo_user_rank", rank);
  location.reload();
}

// カートデータ操作（デモ用localStorage）
function getCart() {
  return JSON.parse(localStorage.getItem("demo_cart") || "[]");
}

function addToCart(productId, qty = 1, variantId = null) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId && (item.variantId || null) === (variantId || null));
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, variantId: variantId, qty: qty });
  }
  localStorage.setItem("demo_cart", JSON.stringify(cart));
  updateCartBadge();
  openCartDrawer();
}

function removeFromCart(productId, variantId = null) {
  const cart = getCart().filter(item => !(item.id === productId && (item.variantId || null) === (variantId || null)));
  localStorage.setItem("demo_cart", JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = totalQty;
  });
}

// 共通ヘッダー・ハンバーガーメニュー・カートドロワーの初期化
document.addEventListener("DOMContentLoaded", () => {
  const currentRank = getCurrentRank();

  // デモ用ランク切替バー＋共通ヘッダーを挿入
  const headerHTML = `
    <div class="demo-rank-bar">
      <span>【APIログイン状態デモ切替】現在の表示：</span>
      <select id="rank-switcher">
        <option value="general" ${currentRank === "general" ? "selected" : ""}>一般（通常価格）</option>
        <option value="agency" ${currentRank === "agency" ? "selected" : ""}>代理店卸（30%OFF）</option>
        <option value="vip_agency" ${currentRank === "vip_agency" ? "selected" : ""}>上位代理店（50%OFF）</option>
      </select>
    </div>
    <header class="site-header">
      <div class="header-inner">
        <button class="hamburger-btn" id="hamburger-btn" aria-label="メニューを開く">
          <span></span><span></span><span></span>
        </button>
        <a href="index.html" class="brand-logo">ACFIT JAPAN</a>
        <button class="cart-btn" id="cart-open-btn">
          CART (<span class="cart-count">0</span>)
        </button>
      </div>
    </header>

    <!-- ハンバーガーメニュー（ドロワー） -->
    <div class="menu-overlay" id="menu-overlay"></div>
    <nav class="drawer-menu" id="drawer-menu">
      <div class="drawer-header">
        <span>MENU</span>
        <button class="close-btn" id="menu-close-btn">&times;</button>
      </div>
      <ul class="drawer-nav">
        <li><a href="index.html">TOP / ブランドについて</a></li>
        <li><a href="products.html">ALL PRODUCTS / 商品一覧</a></li>
        <li><a href="support.html?category=support">Support / お問い合わせ</a></li>
      </ul>
      <div class="drawer-footer">
        <p class="rank-status">ログイン状態：<br><strong>${RANK_LABELS[currentRank]}</strong></p>
      </div>
    </nav>

    <!-- カートドロワー（Square決済連携イメージ） -->
    <div class="cart-drawer" id="cart-drawer">
      <div class="drawer-header">
        <span>SHOPPING CART</span>
        <button class="close-btn" id="cart-close-btn">&times;</button>
      </div>
      <div class="cart-items-body" id="cart-items-body"></div>
      <div class="cart-drawer-footer" id="cart-drawer-footer"></div>
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  const footerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-logo">ACFIT JAPAN</div>
        <ul class="footer-links">
          <li><a href="index.html">TOP</a></li>
          <li><a href="products.html">商品一覧</a></li>
        </ul>
        <p class="copyright">&copy; ACFIT JAPAN All Rights Reserved.</p>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // イベント登録
  document.getElementById("rank-switcher").addEventListener("change", (e) => {
    setCurrentRank(e.target.value);
  });

  const menuOverlay = document.getElementById("menu-overlay");
  const drawerMenu = document.getElementById("drawer-menu");
  const cartDrawer = document.getElementById("cart-drawer");

  document.getElementById("hamburger-btn").addEventListener("click", () => {
    drawerMenu.classList.add("is-open");
    menuOverlay.classList.add("is-open");
  });

  document.getElementById("menu-close-btn").addEventListener("click", closeAllDrawers);
  document.getElementById("cart-close-btn").addEventListener("click", closeAllDrawers);
  menuOverlay.addEventListener("click", closeAllDrawers);

  document.getElementById("cart-open-btn").addEventListener("click", openCartDrawer);

  updateCartBadge();
});

function closeAllDrawers() {
  document.getElementById("drawer-menu").classList.remove("is-open");
  document.getElementById("cart-drawer").classList.remove("is-open");
  document.getElementById("menu-overlay").classList.remove("is-open");
}

function openCartDrawer() {
  renderCartDrawer();
  document.getElementById("cart-drawer").classList.add("is-open");
  document.getElementById("menu-overlay").classList.add("is-open");
}

function renderCartDrawer() {
  const cart = getCart();
  const rank = getCurrentRank();
  const bodyEl = document.getElementById("cart-items-body");
  const footerEl = document.getElementById("cart-drawer-footer");

  if (cart.length === 0) {
    bodyEl.innerHTML = `<p class="empty-cart">カートに商品は入っていません。</p>`;
    footerEl.innerHTML = "";
    return;
  }

  let total = 0;
  let html = "";
  cart.forEach(entry => {
    const product = PRODUCTS_DATA[entry.id];
    if (!product) return;

    let unitPrice = product.prices[rank];
    let variantLabel = "";
    if (product.variants && entry.variantId) {
      const variant = product.variants.find(v => v.id === entry.variantId);
      if (variant) {
        unitPrice = variant.prices[rank];
        variantLabel = `（${variant.label}）`;
      }
    }

    const subtotal = unitPrice * entry.qty;
    total += subtotal;
    const vArg = entry.variantId ? `'${entry.variantId}'` : "null";

    html += `
      <div class="cart-item-row">
        <img src="${product.images[0]}" alt="${product.name}">
        <div class="cart-item-info">
          <h4>${product.name}${variantLabel}</h4>
          <p class="cart-item-price">¥${unitPrice.toLocaleString()} × ${entry.qty}</p>
          <button class="remove-item-btn" onclick="removeFromCart('${product.id}', ${vArg})">削除</button>
        </div>
      </div>
    `;
  });

  bodyEl.innerHTML = html;
  footerEl.innerHTML = `
    <div class="cart-rank-note">適用価格：${RANK_LABELS[rank]}</div>
    <div class="cart-total-row">
      <span>合計（税込）</span>
      <strong>¥${total.toLocaleString()}</strong>
    </div>
    <button class="checkout-btn" onclick="proceedToSquareCheckout()">
      Square決済へ進む
    </button>
  `;
}
  // ★GASのウェブアプリURL
const GAS_CHECKOUT_URL = 'https://script.google.com/macros/s/AKfycbzAhe7MGFiVspzAXTtQrM0Bli8s86FbuKLIPWGNae-zhus0zysF10x-ouX6u0Z07Fq_tQ/exec';

async function proceedToSquareCheckout() {
  const cart = getCart();
  const rank = getCurrentRank();
  if (cart.length === 0) return;

  const btn = document.querySelector('.checkout-btn');
  btn.disabled = true;
  btn.textContent = '決済ページを準備中...';

  try {
    const res = await fetch(GAS_CHECKOUT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ cart: cart, rank: rank })
    });

    const data = await res.json();

    if (data.status === 'success' && data.checkoutUrl) {
      localStorage.removeItem('demo_cart');
      window.location.href = data.checkoutUrl;
    } else {
      alert('決済ページの生成に失敗しました：' + (data.message || '不明なエラー'));
      btn.disabled = false;
      btn.textContent = 'Square決済へ進む';
    }
  } catch (error) {
    alert('通信エラーが発生しました。時間をおいて再度お試しください。');
    btn.disabled = false;
    btn.textContent = 'Square決済へ進む';
  }
}
