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
      // { label: "内容量", value: "200mL（約1.5〜2ヶ月分）" },
      // { label: "全成分", value: "水、BG、グリセリン、セラミドNP、セラミドAP、ヒアルロン酸Na 他" },
      // { label: "原産国", value: "日本" }
    ],
    lpHtml: `
     <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
      <div class="vsang-lp-fv-head">
       <img src="images/lp/1-fv.jpg">
      </div>
  </section>

  <!-- VOICE & IMPRESSION（使用感・お声） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <h3 class="vsang-lp-heading-ja">丁寧なクレンジングから始まる、すこやかな素肌習慣</h3>
        <p class="vsang-lp-heading-desc">日々ご愛用いただいているお客様から寄せられた、使い心地の声をご紹介します。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「クレンジングだけなのに、洗い上がりがしっとり」</h4>
          <p class="vsang-lp-voice-text">
            洗顔後のつっぱり感が気になりにくくて毎日使いやすいです。みずみずしくなめらかな洗い上がりで、次のスキンケアにも心地よく進めます。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「厳選された成分設計で、毎日の洗顔が楽しみに」</h4>
          <p class="vsang-lp-voice-text">
            肌あたりがやわらかく、ゆらぎがちな季節でもやさしく洗えるのが嬉しいポイント。すっきりと汚れを落としながら、うるおい感を守ってくれます。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「洗い上がりのつっぱり感が少なく、乾燥しやすい肌にも」</h4>
          <p class="vsang-lp-voice-text">
            洗顔直後から肌がやわらかく整うような使用感です。必要なうるおいを残しながら洗い上げてくれるので、乾燥が気になる時期にも重宝しています。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「手早く泡立ち、朝晩の洗顔にぴったり」</h4>
          <p class="vsang-lp-voice-text">
            水となじませるとキメ細かな泡がすばやく立ち、摩擦を抑えてやさしく洗えます。朝の洗顔にも夜のクレンジングにも使いやすい一本です。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- 4 SOLUTIONS（4つの設計） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <h3 class="vsang-lp-heading-ja">すっきり落としながら、うるおいを守る4つの設計</h3>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">グリセリン × β-グルカン<sup>※1</sup> 配合</h4>
          <p class="vsang-lp-sol-text">保湿成分が洗顔後の肌にうるおいを与え、しっとりとした質感に整えます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">5種の発酵エキス<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">クレンジング中も肌のうるおい環境をサポートし、すこやかな状態へ導きます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">マイルドな洗浄成分2種<sup>※3</sup> ＋ クエン酸<sup>※4</sup></h4>
          <p class="vsang-lp-sol-text">肌へのやさしさに配慮した洗浄ベースで、不要な汚れや皮脂を穏やかにオフします。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 04</span>
          <h4 class="vsang-lp-sol-title">9種の植物由来エキス<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">自然の恵みを取り入れた整肌成分が、みずみずしく澄んだ印象の素肌へ整えます。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 保湿成分 ※2 整肌成分 ※3 ココイルメチルタウリンNa、ヤシ脂肪酸（洗浄成分） ※4 整肌・pH調整成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01（保湿ベース成分） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <h3 class="vsang-lp-heading-ja">洗顔後の肌にもうるおいを残す<br>グリセリン × β-グルカン ＋ パンテノール<sup>※</sup></h3>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>成分イメージ画像 01（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">洗うたび、水分を抱え込むようなしっとり感へ</h4>
          <p class="vsang-lp-split-text">
            優れた保水力をもつ保湿成分「グリセリン」と、キノコや穀物などから得られる自然由来の「β-グルカン」、さらに肌荒れを防いでうるおいを保つ「パンテノール（デクスパンテノール）」をバランスよく配合しました。
          </p>
          <ul class="vsang-lp-tags">
            <li>グリセリン（保湿成分）</li>
            <li>β-グルカン（保湿成分）</li>
            <li>パンテノール（保湿・整肌成分）</li>
          </ul>
          <p class="vsang-lp-note">※すべて保湿・整肌成分としての配合目的</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MOISTURE LAYERING（5種のヒアルロン酸） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">MOISTURE LAYERING</span>
        <h3 class="vsang-lp-heading-ja">うるおいに、さらなるうるおいを重ねる<br>5種のヒアルロン酸<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">角質層のすみずみまで、みずみずしく満たす</h4>
          <p class="vsang-lp-split-text">
            分子サイズや特性の異なる5種類のヒアルロン酸を複合配合。洗顔中から洗い上がりまで肌表面にうるおいのヴェールをつくり、角質層まで水分を届けて乾燥によるカサつきを防ぎます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>ヒアルロン酸Na</li>
            <li>ヒアルロン酸</li>
            <li>加水分解ヒアルロン酸</li>
            <li>加水分解ヒアルロン酸Na</li>
            <li>ヒアルロン酸クロスポリマーNa</li>
          </ul>
          <p class="vsang-lp-note">※すべて保湿成分</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>ヒアルロン酸イメージ画像（推奨：500 × 420px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 02 - 04（発酵エキス・洗浄成分・9種植物エキス） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 02 - 04</span>
        <h3 class="vsang-lp-heading-ja">肌へのやさしさと、すこやかな肌環境を考えた成分設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">SOLUTION 02</span>
          <h4 class="vsang-lp-detail-title">5種の発酵エキス<sup>※1</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>発酵エキスイメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            乳酸桿菌発酵液、サッカロミセス培養液、ガラクトミセス培養液、ビフィズス菌培養溶解質、乳酸桿菌／オウゴン根発酵液を配合。乾燥などの外部環境から肌を守り、すこやかな素肌へと整えます。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">SOLUTION 03</span>
          <h4 class="vsang-lp-detail-title">マイルドな洗浄成分2種<sup>※2</sup> ＋ クエン酸<sup>※3</sup></h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>洗浄成分イメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            アミノ酸系・植物由来の洗浄成分（ココイルメチルタウリンNa、ヤシ脂肪酸）にクエン酸を組み合わせ、肌のうるおいバランスを保ちながら、余分な皮脂や汚れをやさしく洗い流します。
          </p>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>9種の植物由来エキス画像（推奨：500 × 380px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 04</span>
          <h4 class="vsang-lp-split-title">自然の恵みを取り入れた9種の植物由来エキス<sup>※1</sup></h4>
          <p class="vsang-lp-split-text">
            アロエベラ葉エキス、プロポリスエキス、ツボクサエキス、チャ葉エキス、オウレン根エキス、ザクロ果実エキス、イチジク果実エキス、ビート根エキス、ワサビノキ種子エキスを厳選配合。肌を穏やかに整え、キメの整ったなめらかな肌へ導きます。
          </p>
          <p class="vsang-lp-note">※1 整肌成分 ※2 洗浄成分 ※3 整肌・pH調整成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE &amp; CLEANSING</span>
        <h3 class="vsang-lp-heading-ja">みずみずしいジェルから、キメ細かな濃密泡へ</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          水分クリームのようにやわらかなジェルテクスチャーが、水に触れることでふんわりとした微細泡に変化。<br class="vsang-lp-pc-only">
          肌との摩擦を和らげながら汚れを包み込み、すっきりとみずみずしい洗い上がりを叶えます。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：ジェル（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">なめらかに伸び広がる水分ジェル</h4>
          <p class="vsang-lp-tex-text">肌あたりがやさしいジェルが毛穴まわりの汚れや皮脂にもスムーズになじみます。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：泡立ち（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">クッションのように包み込む微細バブル</h4>
          <p class="vsang-lp-tex-text">きめ細かな泡が肌をやさしく洗い上げ、すすいだ後もしっとりとした心地よさが続きます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW TO USE（ご使用方法） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">HOW TO USE</span>
        <h3 class="vsang-lp-heading-ja">ご使用方法</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 01</span>
            <h4 class="vsang-lp-step-title">適量を手にとり、泡立てる</h4>
          </div>
          <p class="vsang-lp-step-text">清潔な手のひらに適量（2〜3プッシュ目安）をとり、少量の水またはぬるま湯を加えてよく泡立てます。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 02</span>
            <h4 class="vsang-lp-step-title">泡で包み込むようにやさしく洗う</h4>
          </div>
          <p class="vsang-lp-step-text">顔全体を泡で包み込み、指の腹で円を描くようにやさしくマッサージしながら汚れとなじませます。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 03</span>
            <h4 class="vsang-lp-step-title">ぬるま湯で丁寧にすすぐ</h4>
          </div>
          <p class="vsang-lp-step-text">水またはぬるま湯で洗い残しがないよう丁寧にすすぎ、清潔なタオルで押さえるように水分を拭き取ります。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン ベータG セキュアクレンジング（V-SANG BETA-G SECURE CLEANSING）</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>200mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>適量を手にとり、水またはぬるま湯で泡立てて顔全体をやさしく洗ったあと、十分にすすいでください。</td>
          </tr>
          <tr>
            <th>全成分</th>
            <td>
              水、ココイルメチルタウリンNa、グリセリン、ヤシ脂肪酸、ラウリルヒドロキシスルタイン、塩化Na、β-グルカン、パンテノール、ヒアルロン酸Na、ヒアルロン酸、加水分解ヒアルロン酸、加水分解ヒアルロン酸Na、ヒアルロン酸クロスポリマーNa、乳酸桿菌発酵液、サッカロミセス培養液、ガラクトミセス培養液、ビフィズス菌培養溶解質、乳酸桿菌／オウゴン根発酵液、アロエベラ葉エキス、プロポリスエキス、ツボクサエキス、チャ葉エキス、オウレン根エキス、ザクロ果実エキス、イチジク果実エキス、ビート根エキス、ワサビノキ種子エキス、クエン酸、BG、1,2-ヘキサンジオール、EDTA-2Na、エチルヘキシルグリセリン、香料
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン ベータG セキュアクレンジング</h4>
          <p class="vsang-lp-buy-en">V-SANG BETA-G SECURE CLEANSING</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥6,600</span>
            <span class="vsang-lp-buy-tax">（税込） / 200mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            毎日の洗顔でうるおいを守りながら、不要な汚れや皮脂をやさしくオフするジェルタイプのマイルドクレンジング。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="200ml">200mL — ¥6,600（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="beta-g-cleansing">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

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
      <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-fv-head">
        <p class="vsang-lp-fv-brand">ACFIT V-SANG</p>
        <p class="vsang-lp-fv-lead">素肌の印象を変える、最初のうるおい習慣</p>
        <h2 class="vsang-lp-fv-title">V-SANG BETA-G<br class="vsang-lp-sp-only"> SECURE TONER</h2>
        <p class="vsang-lp-fv-sub">洗顔後の無防備な肌に、みずみずしい水分ヴェールを届ける高保湿トナー。</p>
      </div>
      <div class="vsang-lp-placeholder vsang-lp-placeholder--fv">
        <span>FV メインビジュアル配置エリア（推奨：1040 × 560px）</span>
      </div>
    </div>
  </section>

  <!-- VOICE & IMPRESSION（お声・使用感） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">VOICE &amp; IMPRESSION</span>
        <h3 class="vsang-lp-heading-ja">毎日のスキンケアが心地よくなる、みずみずしい使用感</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">日々ご愛用いただいているお客様から寄せられた、使い心地の声をご紹介します。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「乾燥が気になる肌にも、すっとなじんでしっとり」</h4>
          <p class="vsang-lp-voice-text">
            重たさやベタつきがないのに、重ねるほど肌がもっちりとうるおう感覚が気に入っています。季節の変わり目でも毎日手放せない一本です。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「ビサン トナーを使うようになって、ツヤ感がアップ」</h4>
          <p class="vsang-lp-voice-text">
            洗顔後すぐになじませると、肌表面がなめらかに整って自然なツヤが出ます。メイク前の保湿ケアに使うと化粧ノリも心地よく感じられます。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「朝までしっとり感が続き、乾燥によるカサつき対策に」</h4>
          <p class="vsang-lp-voice-text">
            夜のスキンケアでたっぷりなじませておくと、翌朝までみずみずしい肌触りが続きます。大容量サイズもあるので惜しみなく使えるのが嬉しいです。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「顔だけでなく、乾燥しやすいボディの保湿にも大活躍」</h4>
          <p class="vsang-lp-voice-text">
            さらっとみずみずしいテクスチャーなので、顔はもちろん首元やデコルテ、乾燥が気になる腕や脚の水分補給にも心地よく使えます。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- TWO CHOICES（2サイズ展開） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">LINEUP &amp; SIZE</span>
        <h3 class="vsang-lp-heading-ja">ライフスタイルに合わせて選べる2つのサイズ</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">持ち運びや毎日のケアに使いやすい200mLと、たっぷり使える1000mLをご用意しました。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">REGULAR SIZE / 200mL</span>
          <h4 class="vsang-lp-detail-title">毎日使いやすいスタンダードサイズ（200mL）</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
            <span>200mL ボトル画像（推奨：500 × 420px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            洗面台やドレッサーにすっきりと置ける200mLサイズ。初めてお使いいただく方や、旅行・ジムなどへの持ち運びにも便利です。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">LARGE SIZE / 1000mL</span>
          <h4 class="vsang-lp-detail-title">惜しみなくたっぷり使える大容量サイズ（1000mL）</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
            <span>1000mL ボトル画像（推奨：500 × 420px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            朝晩の重ねづけやコットンパック、全身の水分ケアまで気兼ねなく使える1000mLの大容量ボトル。サロンケアやご家族でのシェアにもおすすめです。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5 SOLUTIONS（5つのアプローチ） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">5 SOLUTIONS</span>
        <h3 class="vsang-lp-heading-ja">うるおい・ツヤ・ハリを多角的に支える5つの設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">グリセリン × β-グルカン ＋ 保湿成分3種<sup>※1</sup></h4>
          <p class="vsang-lp-sol-text">角質層のすみずみまで水分を届け、しっとりとしたうるおいヴェールで包み込みます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">5種の発酵エキス<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">乾燥などの外部環境から肌を守り、キメの整ったすこやかな素肌へ導きます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">ナイアシンアミド × アデノシン<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">乾燥によるくすみやハリ不足にアプローチし、ツヤと弾力感のある肌印象へ整えます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 04</span>
          <h4 class="vsang-lp-sol-title">10種の植物由来エキス<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">自然の恵みを取り入れた整肌成分が、肌を穏やかに整えてみずみずしさを保ちます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 05</span>
          <h4 class="vsang-lp-sol-title">クエン酸（シトリックアシッド）<sup>※3</sup> 配合</h4>
          <p class="vsang-lp-sol-text">古い角質によるゴワつきを和らげ、つるんとなめらかな肌触りへ導きます。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 保湿成分 ※2 整肌成分 ※3 整肌・pH調整成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01（グリセリン × β-グルカン & 保湿成分3種） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 01</span>
        <h3 class="vsang-lp-heading-ja">角質層のすみずみまでうるおいで満たす<br>グリセリン × β-グルカン<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>水分ヴェールイメージ画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">みずみずしさを抱え込み、乾燥から肌を守る</h4>
          <p class="vsang-lp-split-text">
            保水力に優れた「グリセリン」と、キノコや穀物などから得られる自然由来の保湿成分「β-グルカン」を配合。洗顔後の乾きやすい肌に素早くなじみ、角質層までうるおいを届けます。
          </p>
          <ul class="vsang-lp-tags">
            <li>グリセリン（保湿成分）</li>
            <li>β-グルカン（保湿成分）</li>
          </ul>
          <p class="vsang-lp-note">※保湿成分</p>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">MOISTURE LAYERING</span>
          <h4 class="vsang-lp-split-title">うるおいに、さらなるうるおいを重ねる3種の保湿成分<sup>※</sup></h4>
          <p class="vsang-lp-split-text">
            水分を抱え込む「ヒアルロン酸Na」、乾燥環境でもうるおいを保つ「トレハロース」、肌にハリと弾力感を与える「加水分解コラーゲン」を組み合わせ、しっとり感が続くみずみずしい肌へ導きます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>ヒアルロン酸Na（保湿成分）</li>
            <li>トレハロース（保湿成分）</li>
            <li>加水分解コラーゲン（保湿成分）</li>
          </ul>
          <p class="vsang-lp-note">※すべて保湿成分</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>3種の保湿成分イメージ画像（推奨：500 × 420px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 02 & 03（発酵エキス5種 & ナイアシンアミド×アデノシン） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 02 &amp; 03</span>
        <h3 class="vsang-lp-heading-ja">すこやかな肌環境と、ツヤ・ハリ感のための厳選成分</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">SOLUTION 02</span>
          <h4 class="vsang-lp-detail-title">5種の発酵エキス<sup>※1</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>発酵エキスイメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            乳酸桿菌発酵液、サッカロミセス培養液、ガラクトミセス培養液、ビフィズス菌培養溶解質、乳酸桿菌／オウゴン根発酵液を配合。肌のうるおいバランスを整え、乾燥による肌荒れを防ぎます。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">SOLUTION 03</span>
          <h4 class="vsang-lp-detail-title">ナイアシンアミド × アデノシン<sup>※1</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>ナイアシンアミド・アデノシン画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            人気の整肌成分「ナイアシンアミド」と「アデノシン」をダブルで配合。うるおいを与えることで乾燥によるくすみを防ぎ、ピンとしたハリとツヤのある素肌へ導きます。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 すべて整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 04 & 05（10種の植物由来エキス & クエン酸） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 04 &amp; 05</span>
        <h3 class="vsang-lp-heading-ja">自然由来の植物エキスと、なめらかな肌表面へ整える角質ケア</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>10種の植物由来エキス画像（推奨：500 × 380px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 04</span>
          <h4 class="vsang-lp-split-title">自然の恵みを凝縮した10種の植物由来エキス<sup>※1</sup></h4>
          <p class="vsang-lp-split-text">
            アラントイン、スピルリナプラテンシスエキス、アロエベラ葉エキス、プロポリスエキス、ツボクサエキス、オオアザミ種子エキス、ザクロ果実エキス、ワサビノキ種子エキス、チャ葉エキス、オウレン根エキスを贅沢に配合。ゆらぎやすい肌も穏やかに整えます。
          </p>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 05</span>
          <h4 class="vsang-lp-split-title">なめらかな肌触りへ導くクエン酸（シトリックアシッド）<sup>※2</sup></h4>
          <p class="vsang-lp-split-text">
            AHAの一種であるクエン酸をバランスよく配合。乾燥や古い角質によってゴワつきがちな肌表面をやさしく整え、次に使う美容液やクリームがなじみやすいやわらかな素肌へ導きます。
          </p>
          <p class="vsang-lp-note">※1 整肌成分 ※2 整肌・pH調整成分</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>角質ケアメカニズムイメージ画像（推奨：500 × 380px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE</span>
        <h3 class="vsang-lp-heading-ja">すっと吸い込まれるような、みずみずしいウォーターテクスチャー</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          ベタつきを抑えた軽やかな使い心地でありながら、肌になじませると角質層までしっとりとうるおうウォータータイプ。<br class="vsang-lp-pc-only">
          乾燥した肌にみずみずしいツヤとハリ感を与え、心地よいスキンケアタイムを演出します。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：水感（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">角質層まで素早くなじむ浸透感<sup>※</sup></h4>
          <p class="vsang-lp-tex-text">肌表面に残りにくく、重ねづけしても重たくならないフレッシュな使用感です。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：ツヤ肌（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">内側からうるおうようなツヤ仕上げ</h4>
          <p class="vsang-lp-tex-text">うるおいを抱え込んだ、もっちりやわらかな素肌へと整えます。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※角質層まで</p>
    </div>
  </section>

  <!-- HOW TO USE（ご使用方法） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">HOW TO USE</span>
        <h3 class="vsang-lp-heading-ja">2通りの使い方で、毎日のうるおいケア</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 01</span>
            <h4 class="vsang-lp-step-title">毎日のデイリー保湿トナーとして</h4>
          </div>
          <p class="vsang-lp-step-text">洗顔後、適量を手にとり、顔全体から首元にかけてやさしくパッティングするようになじませます。乾燥が気になる部分には重ねづけがおすすめです。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 02</span>
            <h4 class="vsang-lp-step-title">集中うるおい補給のコットンパックとして</h4>
          </div>
          <p class="vsang-lp-step-text">特に乾燥が気になる日やメイク前のケアには、コットンにトナーをたっぷり含ませ、頬や額などに3〜5分ほど密着させて集中保湿パックとしてもお使いいただけます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン ベータG セキュアトナー（V-SANG BETA-G SECURE TONER）</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>200mL ／ 1000mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>洗顔後、適量を手またはコットンにとり、肌のキメに沿ってやさしくなじませてください。</td>
          </tr>
          <tr>
            <th>全成分</th>
            <td>
              水、グリセリン、BG、ナイアシンアミド、1,2-ヘキサンジオール、ベタイン、β-グルカン、ヒアルロン酸Na、トレハロース、加水分解コラーゲン、アデノシン、乳酸桿菌発酵液、サッカロミセス培養液、ガラクトミセス培養液、ビフィズス菌培養溶解質、乳酸桿菌／オウゴン根発酵液、アラントイン、スピルリナプラテンシスエキス、アロエベラ葉エキス、プロポリスエキス、ツボクサエキス、オオアザミ種子エキス、ザクロ果実エキス、ワサビノキ種子エキス、チャ葉エキス、オウレン根エキス、クエン酸、PEG-60水添ヒマシ油、ヒドロキシアセトフェノン、エチルヘキシルグリセリン、EDTA-2Na、香料
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン ベータG セキュアトナー</h4>
          <p class="vsang-lp-buy-en">V-SANG BETA-G SECURE TONER</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥6,600〜</span>
            <span class="vsang-lp-buy-tax">（税込） / 200mL・1000mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            洗顔後の肌に素早くうるおいを届け、ツヤとハリのあるすこやかな素肌へ導く高保湿化粧水。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="200ml">200mL — ¥6,600（税込）</option>
              <option value="1000ml">1000mL — ¥16,500（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="beta-g-toner">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

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
     <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-fv-head">
        <p class="vsang-lp-fv-brand">ACFIT V-SANG</p>
        <p class="vsang-lp-fv-lead">みずみずしさが続く、すこやかな素肌の秘訣</p>
        <h2 class="vsang-lp-fv-title">V-SANG BETA-G<br class="vsang-lp-sp-only"> INFUSING SKIN BOOSTER</h2>
        <p class="vsang-lp-fv-sub">スキンケアの最初にうるおいの道筋をつくり、角質層まで水分を抱え込む導入ブースター。</p>
      </div>
      <div class="vsang-lp-placeholder vsang-lp-placeholder--fv">
        <span>FV メインビジュアル配置エリア（推奨：1040 × 560px）</span>
      </div>
    </div>
  </section>

  <!-- VOICE & IMPRESSION（お声・使用感） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">VOICE &amp; IMPRESSION</span>
        <h3 class="vsang-lp-heading-ja">一度使うと手放せなくなる、みずみずしい導入ケア</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">日々ご愛用いただいているお客様から寄せられた、使い心地の声をご紹介します。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「表面はさらっと軽やかなのに、角質層までしっとり」</h4>
          <p class="vsang-lp-voice-text">
            重たさやベタつきが苦手なのですが、これは水のようにすっとなじんで2〜3回重ねづけすると肌がもっちりうるおう感じがして心地よいです。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「スキンブースターを使うと、次のセラムやクリームのなじみが違う」</h4>
          <p class="vsang-lp-voice-text">
            洗顔後にまずこれをなじませておくと、肌がやわらかく整ってその後の美容液やクリームがスムーズになじむ感覚があります。毎日のベースケアに欠かせません。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「つっぱり感が気になりにくく、乾燥シーズンも頼もしい一本」</h4>
          <p class="vsang-lp-voice-text">
            洗顔後すぐの乾きやすいタイミングにワンプッシュするだけで、みずみずしいうるおいが広がります。しっとり感が続くので季節を問わず使いやすいです。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「みずみずしさが続く感覚で、毎日のスキンケアが楽しみに」</h4>
          <p class="vsang-lp-voice-text">
            肌の上でベタつかず、内側<sup>※</sup>までうるおいで満たされるような使い心地です。他のスキンケアアイテムともケンカせず合わせやすいのがお気に入りです。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※角質層まで ※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- 4 SOLUTIONS（4つのアプローチ） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">4 SOLUTIONS</span>
        <h3 class="vsang-lp-heading-ja">スキンケアの土台を整える4つの設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">グリセリン × β-グルカン × ヒアルロン酸5種<sup>※1</sup></h4>
          <p class="vsang-lp-sol-text">角質層のすみずみまでうるおいを届け、みずみずしい水分ヴェールで肌を包み込みます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">ヒノキ水 × ヒノキ油 × 発酵エキス2種<sup>※2</sup></h4>
          <p class="vsang-lp-sol-text">乾燥や外部環境でゆらぎがちな肌を穏やかに整え、すこやかな素肌環境をサポートします。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">5種の植物由来エキス<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">自然の恵みを取り入れた植物エキスが、キメの整ったなめらかな肌へと導きます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 04</span>
          <h4 class="vsang-lp-sol-title">6種のペプチド<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">ハリと弾力感にアプローチする整肌成分が、ふっくらとしたツヤ肌印象へ整えます。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 保湿成分 ※2 保湿・整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01（グリセリン × β-グルカン & ヒアルロン酸5種） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 01</span>
        <h3 class="vsang-lp-heading-ja">角質層のすみずみまでうるおいを届ける<br>グリセリン × β-グルカン<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>水分補給イメージ画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">洗顔後すぐの肌に、すっとなじむうるおいベース</h4>
          <p class="vsang-lp-split-text">
            保水力に優れた「グリセリン」と、キノコや穀物などから得られる自然由来の保湿成分「β-グルカン」をバランスよく配合。乾きやすい洗顔後の肌をみずみずしく整え、次のスキンケアがなじみやすい状態へ導きます。
          </p>
          <ul class="vsang-lp-tags">
            <li>グリセリン（保湿成分）</li>
            <li>β-グルカン（保湿成分）</li>
          </ul>
          <p class="vsang-lp-note">※保湿成分</p>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">MOISTURE LAYERING</span>
          <h4 class="vsang-lp-split-title">うるおいに、さらなるうるおいを重ねる5種のヒアルロン酸<sup>※</sup></h4>
          <p class="vsang-lp-split-text">
            分子サイズの異なる5種類のヒアルロン酸を複合配合。角質層のすみずみまで水分を行き渡らせると同時に肌表面にうるおいの膜をつくり、乾燥によるカサつきを防ぎます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>ヒアルロン酸Na</li>
            <li>ヒアルロン酸</li>
            <li>加水分解ヒアルロン酸</li>
            <li>加水分解ヒアルロン酸Na</li>
            <li>ヒアルロン酸クロスポリマーNa</li>
          </ul>
          <p class="vsang-lp-note">※すべて保湿成分</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>5種のヒアルロン酸イメージ画像（推奨：500 × 420px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 02（ヒノキ水 × ヒノキ油 & 発酵エキス2種） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 02</span>
        <h3 class="vsang-lp-heading-ja">森林の清らかな恵みと発酵の力で、すこやかな肌環境へ</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">CYPRESS CARE</span>
          <h4 class="vsang-lp-detail-title">ヒノキ水 × ヒノキ油<sup>※1</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>ヒノキ水・ヒノキ油イメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            清らかなヒノキから抽出された「ヒノキ水」と「ヒノキ油」を配合。乾燥や季節の変化でゆらぎやすい肌にみずみずしいうるおいを与え、穏やかに整えます。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">FERMENTATION CARE</span>
          <h4 class="vsang-lp-detail-title">2種の発酵エキス<sup>※2</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>発酵エキスイメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            「乳酸桿菌発酵液」と「乳酸桿菌／オウゴン根発酵液」の2種の発酵エキスを配合。肌のうるおいバランスを保ち、乾燥による肌荒れを防いでキメの整った素肌へ導きます。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 保湿・整肌成分 ※2 整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 03 & 04（5種の植物由来エキス & 6種のペプチド） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 03 &amp; 04</span>
        <h3 class="vsang-lp-heading-ja">自然由来エキスと6種のペプチドが支える、ハリ・ツヤ設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>5種の植物由来エキス画像（推奨：500 × 380px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 03</span>
          <h4 class="vsang-lp-split-title">厳選された5種の植物由来エキス<sup>※1</sup></h4>
          <p class="vsang-lp-split-text">
            ハマスゲ根エキス、オタネニンジン根エキス、マグワ樹皮エキス、チャ葉エキス、カンゾウ根エキスをバランスよく配合。乾燥によるくすみを防ぎ、明るく澄んだ印象のツヤ肌へ導きます。
          </p>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 04</span>
          <h4 class="vsang-lp-split-title">ハリ・弾力感を与える6種のペプチド<sup>※1</sup></h4>
          <p class="vsang-lp-split-text">
            アミノ酸が結合した整肌成分「ペプチド」を6種類厳選して配合。乾燥や年齢サインが気になり始めた肌にうるおいを与え、ふっくらと弾むようなハリ感をもたらします。
          </p>
          <ul class="vsang-lp-bullets">
            <li>ペンタペプチド-3</li>
            <li>パルミトイルペンタペプチド-4</li>
            <li>パルミトイルトリペプチド-5</li>
            <li>パルミトイルテトラペプチド-1</li>
            <li>パルミトイルテトラペプチド-7</li>
            <li>トリペプチド-1銅</li>
          </ul>
          <p class="vsang-lp-note">※1 すべて整肌成分</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>6種のペプチドイメージ画像（推奨：500 × 380px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE</span>
        <h3 class="vsang-lp-heading-ja">ベタつきを抑えた、みずみずしい高保湿テクスチャー</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          とろみとみずみずしさを両立した軽やかなエッセンスが、肌に触れた瞬間すっとなじんで角質層まで浸透<sup>※</sup>。<br class="vsang-lp-pc-only">
          スキンケアのファーストステップとして、重たさを残さずうるおいをチャージします。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：エッセンス（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">すっと伸びて角質層まで素早くなじむ</h4>
          <p class="vsang-lp-tex-text">肌表面にベタつきを残しにくく、朝のメイク前にも心地よくお使いいただけます。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：うるおい感（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">重ねるほどみずみずしく整うレイヤリング設計</h4>
          <p class="vsang-lp-tex-text">乾燥が気になる部分には重ねづけすることで、しっとりとしたツヤ肌へ整えます。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※角質層まで</p>
    </div>
  </section>

  <!-- HOW TO USE（ご使用方法） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">HOW TO USE</span>
        <h3 class="vsang-lp-heading-ja">3通りの使い方で、コンディションに合わせたうるおいケア</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 01</span>
            <h4 class="vsang-lp-step-title">洗顔後すぐのファースト導入ケア</h4>
          </div>
          <p class="vsang-lp-step-text">洗顔後、化粧水や美容液の前に適量（2〜3プッシュ）を手にとり、顔全体になじませます。後に使うスキンケアのなじみをサポートします。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 02</span>
            <h4 class="vsang-lp-step-title">ゆらぎが気になる日の整肌コットンパック</h4>
          </div>
          <p class="vsang-lp-step-text">乾燥や外部刺激で肌が敏感に傾きがちなときは、コットンにたっぷり含ませて頬や額に3〜5分ほど置き、穏やかに肌を整えます。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 03</span>
            <h4 class="vsang-lp-step-title">乾燥部位への2〜3回重ねづけレイヤリング</h4>
          </div>
          <p class="vsang-lp-step-text">特にカサつきが気になる目元・口元・頬には、少量を2〜3回に分けてハンドプレスしながら重ねづけすることで、しっとり感が長持ちします。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン ベータG インフュージング スキンブースター（V-SANG BETA-G INFUSING SKIN BOOSTER）</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>150mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>洗顔後、適量を手にとり、顔全体から首元にかけてやさしくなじませてください。</td>
          </tr>
          <tr>
            <th>全成分</th>
            <td>
              水、グリセリン、BG、1,2-ヘキサンジオール、ベタイン、β-グルカン、ヒアルロン酸Na、ヒアルロン酸、加水分解ヒアルロン酸、加水分解ヒアルロン酸Na、ヒアルロン酸クロスポリマーNa、ヒノキ水、ヒノキ油、乳酸桿菌発酵液、乳酸桿菌／オウゴン根発酵液、ハマスゲ根エキス、オタネニンジン根エキス、マグワ樹皮エキス、チャ葉エキス、カンゾウ根エキス、ペンタペプチド-3、パルミトイルペンタペプチド-4、パルミトイルトリペプチド-5、パルミトイルテトラペプチド-1、パルミトイルテトラペプチド-7、トリペプチド-1銅、カルボマー、アルギニン、PEG-60水添ヒマシ油、エチルヘキシルグリセリン、EDTA-2Na、香料
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン ベータG インフュージング スキンブースター</h4>
          <p class="vsang-lp-buy-en">V-SANG BETA-G INFUSING SKIN BOOSTER</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥7,700</span>
            <span class="vsang-lp-buy-tax">（税込） / 150mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            洗顔後の肌に素早くうるおいを届け、次に使うスキンケアがなじみやすいハリ・ツヤ肌へ整える導入ブースター。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="150ml">150mL — ¥7,700（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="beta-g-skin-booster">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

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
     <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-fv-head">
        <p class="vsang-lp-fv-brand">ACFIT V-SANG</p>
        <p class="vsang-lp-fv-lead">ゆらぎやすい肌コンディションをすこやかに整える、新基準</p>
        <h2 class="vsang-lp-fv-title">V-SANG BETA-G<br class="vsang-lp-sp-only"> LACTO CARE AMPOULE</h2>
        <p class="vsang-lp-fv-sub">繊細に設計された一滴のラクトケア習慣で、ハリとうるおいに満ちたツヤ肌へ。</p>
      </div>
      <div class="vsang-lp-placeholder vsang-lp-placeholder--fv">
        <span>FV メインビジュアル配置エリア（推奨：1040 × 560px）</span>
      </div>
    </div>
  </section>

  <!-- VOICE & IMPRESSION（お声・使用感） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">VOICE &amp; IMPRESSION</span>
        <h3 class="vsang-lp-heading-ja">日々の肌リズムに寄り添う、濃密なうるおいケア</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">日々ご愛用いただいているお客様から寄せられた、使い心地の声をご紹介します。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「どんなアイテムを重ねても物足りなかった肌に、心地よい満足感」</h4>
          <p class="vsang-lp-voice-text">
            乾燥で肌がゆらぎやすい時期でも、ベタつかずすっとなじんでしっとり感が続きます。毎日使い続けるほど肌のキメが整うような使い心地です。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「なめらかなツヤ感と、もっちりとした肌触りがお気に入り」</h4>
          <p class="vsang-lp-voice-text">
            とろみがありながら肌の上でみずみずしく伸び広がり、なじんだ後はふっくらやわらかな感触に。朝晩のスキンケアに欠かせない存在です。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「軽やかななじみ心地なのに、しっとり感が長く続く」</h4>
          <p class="vsang-lp-voice-text">
            美容液特有の重たさやペタペタ感が少なく、角質層まで素早くなじむ感覚です。乾燥が気になる季節でも、うるおいのヴェールに守られているような安心感があります。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「肌が敏感になりがちな時期でも使いやすく、リピート中」</h4>
          <p class="vsang-lp-voice-text">
            季節の変わり目や乾燥による肌荒れを防ぎたいときに頼りにしています。肌あたりがやさしく、日々のコンディションを整えてくれる一本です。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- 4 SOLUTIONS（4つのアプローチ） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">4 SOLUTIONS</span>
        <h3 class="vsang-lp-heading-ja">肌に寄り添う一滴が叶える、4つのトータル設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">ナイアシンアミド × アデノシン<sup>※1</sup> 配合</h4>
          <p class="vsang-lp-sol-text">乾燥によるくすみやハリ不足にうるおいを与え、明るく弾力感のある肌印象へ導きます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">独自複合成分3種 ＋ 発酵エキス2種<sup>※1</sup> 配合</h4>
          <p class="vsang-lp-sol-text">乳酸菌由来の発酵成分と植物由来の複合整肌成分が、ゆらぎやすい肌をすこやかに整えます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">9種のヒアルロン酸 × グリセリン<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">分子サイズの異なる9種類のヒアルロン酸が角質層のすみずみまで水分を届けます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 04</span>
          <h4 class="vsang-lp-sol-title">自然由来の5種の整肌エキス<sup>※1</sup> 配合</h4>
          <p class="vsang-lp-sol-text">厳選された植物・自然由来エキスが肌にうるおいとツヤを与え、なめらかな素肌へ導きます。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 整肌成分 ※2 保湿成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01（ナイアシンアミド × アデノシン） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 01</span>
        <h3 class="vsang-lp-heading-ja">ツヤとハリ感を同時に引き出す<br>ナイアシンアミド × アデノシン<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>ナイアシンアミド・アデノシン画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">乾燥によるくすみとハリ不足にアプローチするダブル整肌設計</h4>
          <p class="vsang-lp-split-text">
            うるおいを与えてキメを整え、ツヤのある明るい肌印象へ導く「ナイアシンアミド」と、年齢サインが気になり始めた肌にハリ・弾力感を与える「アデノシン」を贅沢に配合。日々の乾燥ダメージを受けやすい肌にみずみずしい活力を与えます。
          </p>
          <ul class="vsang-lp-tags">
            <li>ナイアシンアミド（整肌成分）</li>
            <li>アデノシン（整肌成分）</li>
          </ul>
          <p class="vsang-lp-note">※すべて整肌成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 02（マイクロバイオーム 4X ケア & 独自複合成分） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 02</span>
        <h3 class="vsang-lp-heading-ja">すこやかな肌環境を支える<br>マイクロバイオーム 4X ケア<sup>※1</sup></h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          乳酸桿菌発酵溶解質と植物由来複合エキス（BIORAN EX Infla Care<sup>※2</sup>）を組み合わせ、<br class="vsang-lp-pc-only">
          外部環境の変化や乾燥でゆらぎやすい肌コンディションを穏やかに整えます。
        </p>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">BIORAN EX INFLA CARE</span>
          <h4 class="vsang-lp-split-title">肌荒れを防ぎ、穏やかに整える4つの厳選成分<sup>※1</sup></h4>
          <p class="vsang-lp-split-text">
            ニレ根エキス、メリアアザジラクタ花／葉／茎エキス、イヌゴマエキス、タンポポ葉エキスの複合植物成分と乳酸桿菌発酵溶解質をバランスよく配合。乾燥による肌荒れを防ぎ、すこやかな素肌へと導きます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>乳酸桿菌発酵溶解質（整肌成分）</li>
            <li>メリアアザジラクタ花／葉／茎エキス（整肌成分）</li>
            <li>イヌゴマエキス（整肌成分）</li>
            <li>タンポポ葉エキス（整肌成分）</li>
          </ul>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>マイクロバイオーム4Xイメージ画像（推奨：500 × 420px）</span>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <!-- 独自複合エキス2種 ＋ 発酵エキス2種 -->
      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">PHYTOIN BALANCE-BIOME × BIO MARINE SUMMER</span>
          <h4 class="vsang-lp-detail-title">植物＆海藻由来の複合整肌成分<sup>※2</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>複合整肌成分イメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            オタネニンジン根エキス・トウキ根エキス・ヨモギ葉エキスからなる「PhytoIN Balance-Biome」と、アッケシソウエキス・ヒバマタエキス・乳酸桿菌発酵溶解質を組み合わせた「BIO Marine Summer」を配合し、肌に豊かなうるおいを与えます。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">DUAL FERMENTATION CARE</span>
          <h4 class="vsang-lp-detail-title">2種の乳酸菌由来発酵エキス<sup>※1</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>ビフィズス菌・乳酸桿菌発酵画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            「ビフィズス菌培養溶解質」と「乳酸桿菌発酵溶解質」をダブル配合。乾燥などの外部刺激から肌を守り、キメの整ったなめらかな肌環境をサポートします。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 整肌成分 ※2 韓国特許登録原料を含む複合整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 03 & 04（9重ヒアルロン酸 & 5種の自然由来エキス） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 03 &amp; 04</span>
        <h3 class="vsang-lp-heading-ja">角質層まで満たす9種のヒアルロン酸と、5種の自然由来エキス</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>グリセリン＆9種ヒアルロン酸画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 03 / 9-LAYER HYALURONIC ACID</span>
          <h4 class="vsang-lp-split-title">グリセリン × 9種のヒアルロン酸<sup>※1</sup> でうるおいをキープ</h4>
          <p class="vsang-lp-split-text">
            高分子・中分子・低分子の異なる9種類のヒアルロン酸とグリセリンを配合。角質層のすみずみまで水分を届けながら肌表面のうるおいを逃さず、しっとり感を長時間保ちます。
          </p>
          <ul class="vsang-lp-tags">
            <li>ヒアルロン酸Na</li>
            <li>加水分解ヒアルロン酸Na</li>
            <li>加水分解グリコサミノグリカン</li>
            <li>ヒアルロン酸ヒドロキシプロピルトリモニウム</li>
            <li>ヒアルロン酸クロスポリマーNa</li>
            <li>加水分解ヒアルロン酸</li>
            <li>アセチルヒアルロン酸Na</li>
            <li>ヒアルロン酸</li>
            <li>ヒアルロン酸ジメチルシラノール</li>
          </ul>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 04 / 5 NATURAL EXTRACTS</span>
          <h4 class="vsang-lp-split-title">自然の恵みを凝縮した5種の整肌エキス<sup>※2</sup></h4>
          <p class="vsang-lp-split-text">
            古来より美容に重宝されてきた5種類の植物・自然由来エキスをバランスよく配合。乾燥やゆらぎが気になる肌を穏やかに整え、健やかなツヤとハリを与えます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>オウレン根エキス（整肌成分）</li>
            <li>スベリヒユエキス（整肌成分）</li>
            <li>リョクトウ種子エキス（整肌成分）</li>
            <li>冬虫夏草エキス（整肌成分）</li>
            <li>レイシエキス（整肌成分）</li>
          </ul>
          <p class="vsang-lp-note">※1 保湿成分 ※2 整肌成分</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>5種の自然由来エキス画像（推奨：500 × 420px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE</span>
        <h3 class="vsang-lp-heading-ja">みずみずしくすっとなじむ、シルキーな高保湿エッセンス</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          水分をたっぷり抱え込んだウォータリーなテクスチャーが、肌に触れた瞬間なめらかに伸び広がり、<br class="vsang-lp-pc-only">
          ベタつきを残さず角質層までしっとりとうるおいで満たします。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：スポイト滴下（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">一滴ずつ衛生的に使えるスポイト設計</h4>
          <p class="vsang-lp-tex-text">肌コンディションに合わせて使用量を細かく調整でき、必要な場所へダイレクトに届けられます。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：なじみ感（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">ベタつきを抑えた軽やかなシルキー仕上げ</h4>
          <p class="vsang-lp-tex-text">塗布後すぐに次のクリームやメイクへ進める、みずみずしく快適な肌触りです。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW TO USE（ご使用方法） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">HOW TO USE</span>
        <h3 class="vsang-lp-heading-ja">肌コンディションに合わせて選べる3つの使い方</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 01</span>
            <h4 class="vsang-lp-step-title">毎日の基本ケアに「デイリーアンプル」として</h4>
          </div>
          <p class="vsang-lp-step-text">洗顔後、化粧水やブースターで肌を整えたあと、適量（スポイト1〜2滴目安）を手にとり、顔全体から首元にかけてやさしくなじませます。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 02</span>
            <h4 class="vsang-lp-step-title">ゆらぎが気になる日の「集中整肌パック」として</h4>
          </div>
          <p class="vsang-lp-step-text">乾燥や外部刺激で肌が敏感に傾いているときは、コットンにアンプルをたっぷり含ませ、気になる部分に3〜5分ほど密着させて穏やかに整えます。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 03</span>
            <h4 class="vsang-lp-step-title">乾燥・カサつき部分への「スポット重ねづけ」として</h4>
          </div>
          <p class="vsang-lp-step-text">目元・口元・頬など、特に乾燥やハリ不足が気になるポイントには、指先で少量をトントンと重ねづけすることで集中保湿ケアができます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン ベータG ラクティケア アンプル（V-SANG BETA-G LACTO CARE AMPOULE）</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>30mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>適量を手にとり、肌のキメに沿って顔全体にやさしくなじませてください。</td>
          </tr>
          <tr>
            <th>全成分</th>
            <td>
              水、メチルプロパンジオール、ビフィズス菌培養溶解質、グリセリン、1,2-ヘキサンジオール、ジプロピレングリコール、ナイアシンアミド、パレス-12、ヒドロキシアセトフェノン、アクリレーツ／アクリル酸アルキル（C10-30）クロスポリマー、トロメタミン、キサンタンガム、エチルヘキシルグリセリン、メリアアザジラクタ花／葉／茎エキス、イヌゴマエキス、タンポポ葉エキス、アデノシン、BG、オウレン根エキス、スベリヒユエキス、ポリクオタニウム-51、ベタイン、EDTA-2Na、リョクトウ種子エキス、チャ葉エキス、トリ（カプリル酸／カプリン酸）グリセリル、オタネニンジン根エキス、トウキ根エキス、ヨモギ葉エキス、アッケシソウエキス、ヒバマタエキス、冬虫夏草エキス、レイシエキス、乳酸桿菌発酵溶解質、ヒアルロン酸Na、プロパンジオール、加水分解グリコサミノグリカン、ベンジルグリコール、加水分解ヒアルロン酸、ヒアルロン酸ヒドロキシプロピルトリモニウム、ヒアルロン酸クロスポリマーNa、アセチルヒアルロン酸Na、ヒアルロン酸ジメチルシラノール、ヒアルロン酸、加水分解ヒアルロン酸Na、香料
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン ベータG ラクティケア アンプル</h4>
          <p class="vsang-lp-buy-en">V-SANG BETA-G LACTO CARE AMPOULE</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥9,900</span>
            <span class="vsang-lp-buy-tax">（税込） / 30mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            乳酸菌由来の発酵成分と9種のヒアルロン酸、複合植物エキスを凝縮。ゆらぎがちな肌をすこやかに整える高保湿美容液。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="30ml">30mL — ¥9,900（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="beta-g-lacto-care-ampoule">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

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
      <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-fv-head">
        <p class="vsang-lp-fv-brand">ACFIT V-SANG</p>
        <p class="vsang-lp-fv-lead">ゆらぎやすい肌に寄り添う、濃密な一滴のうるおいヴェール</p>
        <h2 class="vsang-lp-fv-title">V-SANG BETA-G<br class="vsang-lp-sp-only"> AZULENE FOCUS OIL</h2>
        <p class="vsang-lp-fv-sub">グアイアズレン<sup>※1</sup>とリポソーム設計<sup>※2</sup>で、角質層までみずみずしく包み込む美容オイル。</p>
      </div>
      <div class="vsang-lp-placeholder vsang-lp-placeholder--fv">
        <span>FV メインビジュアル配置エリア（推奨：1040 × 560px）</span>
      </div>
      <p class="vsang-lp-note">※1 整肌成分 ※2 水添レシチン（保湿・整肌成分）によるリポソーム構造</p>
    </div>
  </section>

  <!-- VOICE & IMPRESSION（お声・使用感） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">VOICE &amp; IMPRESSION</span>
        <h3 class="vsang-lp-heading-ja">オイルの常識を変える、軽やかでみずみずしい使い心地</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">日々ご愛用いただいているお客様から寄せられた、使い心地の声をご紹介します。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「オイル特有の重たさやベタつきが少なく、すっとなじむ」</h4>
          <p class="vsang-lp-voice-text">
            これまで美容オイルはベタつくイメージがありましたが、こちらはサラッと軽やかな質感で肌になじみやすく、季節を問わず心地よく使えています。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「乾燥でゆらぎがちな日も、うるおいの膜で守られる安心感」</h4>
          <p class="vsang-lp-voice-text">
            乾燥や季節の変わり目で肌が敏感に傾いているときでも、やさしい使い心地でしっとり整います。朝のメイク前に少量をなじませるとツヤ感もきれいです。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「手持ちのクリームに1〜2滴混ぜるだけで、しっとり感がアップ」</h4>
          <p class="vsang-lp-voice-text">
            特に乾燥が気になる夜は、普段使っている保湿クリームに数滴ブレンドして使っています。翌朝までカサつきにくく、もっちりとした肌触りが続きます。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「美しいブルーのオイルで、毎日のケアが特別な時間に」</h4>
          <p class="vsang-lp-voice-text">
            自然由来のグアイアズレンならではの澄んだブルーが印象的。数滴伸ばすだけで肌表面がなめらかに整い、上品なツヤを与えてくれます。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- 3 SOLUTIONS（3つのアプローチ） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">3 SOLUTIONS</span>
        <h3 class="vsang-lp-heading-ja">乾燥・ゆらぎ肌を穏やかに包み込む3つの設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">グアイアズレン × リポソーム保湿成分<sup>※1</sup> 配合</h4>
          <p class="vsang-lp-sol-text">肌荒れを防ぐグアイアズレンとリポソーム化保湿成分が、角質層のすみずみまでうるおいを届けます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">グリセリン × β-グルカン<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">保水力に優れた2つの保湿成分が水分を抱え込み、しっとりとしたやわらかな素肌を保ちます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">7種の植物由来オイル × トコフェロール<sup>※3</sup> 配合</h4>
          <p class="vsang-lp-sol-text">厳選されたボタニカルオイルとビタミンE（トコフェロール）がうるおいを閉じ込め、ツヤ肌へ導きます。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 整肌・保湿成分 ※2 保湿成分 ※3 エモリエント・整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01（グアイアズレン & リポソーム設計） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 01</span>
        <h3 class="vsang-lp-heading-ja">ゆらぎがちな肌を穏やかに整える<br>グアイアズレン × リポソーム設計<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>グアイアズレンイメージ画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">GUAIAZULENE CARE</span>
          <h4 class="vsang-lp-split-title">カモミール由来の澄んだブルー「グアイアズレン」<sup>※1</sup></h4>
          <p class="vsang-lp-split-text">
            製品の美しいブルーの色調は、カモミール（カミツレ）などから得られる整肌成分「グアイアズレン」によるもの。乾燥や外部環境の影響を受けやすい肌を穏やかに整え、すこやかな状態へと導きます。
          </p>
          <ul class="vsang-lp-tags">
            <li>グアイアズレン（整肌成分）</li>
            <li>合成着色料フリー</li>
          </ul>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">LIPOSOME DELIVERY</span>
          <h4 class="vsang-lp-split-title">角質層まで素早くなじむリポソーム構造<sup>※2</sup></h4>
          <p class="vsang-lp-split-text">
            肌の細胞間脂質と親和性の高いリン脂質（水添レシチン）によるリポソームカプセルに、セラミドNPやパンテノールなどのうるおい成分を内包。角質層のすみずみまでスムーズに浸透<sup>※3</sup>し、乾燥によるカサつきを防ぎます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>セラミドNP（保湿成分）</li>
            <li>パンテノール（保湿・整肌成分）</li>
            <li>水添レシチン（保湿・整肌成分）</li>
          </ul>
          <p class="vsang-lp-note">※1 整肌成分 ※2 水添レシチン（保湿・整肌成分）によるリポソーム構造 ※3 角質層まで</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>リポソーム浸透メカニズム画像（推奨：500 × 420px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 02（グリセリン × β-グルカン） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 02</span>
        <h3 class="vsang-lp-heading-ja">うるおいを抱え込み、しっとり感をキープする<br>グリセリン × β-グルカン<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>グリセリン・β-グルカン画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">水分と油分のバランスを整え、みずみずしい肌へ</h4>
          <p class="vsang-lp-split-text">
            優れた保水力をもつ「グリセリン」と、キノコや穀物などから得られる自然由来の保湿成分「β-グルカン」をバランスよく配合。オイルでありながら水分保持力にも優れ、乾燥しやすい肌にうるおいを与えてやわらかく保ちます。
          </p>
          <ul class="vsang-lp-tags">
            <li>グリセリン（保湿成分）</li>
            <li>β-グルカン（保湿成分）</li>
          </ul>
          <p class="vsang-lp-note">※すべて保湿成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 03（7種の植物由来オイル × トコフェロール） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 03</span>
        <h3 class="vsang-lp-heading-ja">自然の恵みでうるおいを閉じ込める<br>7種の植物由来オイル × トコフェロール<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">肌なじみのよいボタニカルオイルが、上質なツヤヴェールを形成</h4>
          <p class="vsang-lp-split-text">
            ホホバ種子油やアルガニアスピノサ核油（アルガンオイル）、ヒマワリ種子油など7種類の植物由来オイルと、製品の鮮度と肌のすこやかさを守る「トコフェロール（ビタミンE）」を厳選配合。水分蒸散を防ぎながら、ベタつきのないなめらかなツヤ肌へ導きます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>ホホバ種子油・アルガニアスピノサ核油（エモリエント成分）</li>
            <li>ヒマワリ種子油・ツバキ種子油・マカデミア種子油（エモリエント成分）</li>
            <li>オリーブ果実油・アボカド油（エモリエント成分）</li>
            <li>トコフェロール（整肌・製品の抗酸化成分）</li>
          </ul>
          <p class="vsang-lp-note">※エモリエント・整肌成分</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>7種の植物由来オイル・ビタミンE画像（推奨：500 × 420px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE</span>
        <h3 class="vsang-lp-heading-ja">サラッと軽く伸び広がり、しっとり落ち着くシルキーオイル</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          重たさや油膜感を抑えた軽やかなテクスチャーで、肌になじませた瞬間すっと溶け込むような使い心地。<br class="vsang-lp-pc-only">
          乾燥が気になる肌にも心地よくフィットし、自然なツヤとやわらかさを与えます。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：ブルーオイル（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">一滴ずつ調整できるスポイトタイプ</h4>
          <p class="vsang-lp-tex-text">顔全体へのケアから乾燥部分のポイント使い、他アイテムとのブレンドまで自在にコントロールできます。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：ツヤ仕上げ（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">ベタつきを残さず、うるおいを長時間キープ</h4>
          <p class="vsang-lp-tex-text">塗布後の肌表面はさらりとなめらかで、角質層のうるおいをしっかり閉じ込めます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW TO USE（ご使用方法） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">HOW TO USE</span>
        <h3 class="vsang-lp-heading-ja">シーンに合わせて選べる2通りの使い方</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 01</span>
            <h4 class="vsang-lp-step-title">スキンケアの仕上げに「単品オイルケア」として</h4>
          </div>
          <p class="vsang-lp-step-text">化粧水や美容液で肌を整えたあと、適量（2〜3滴）を手のひらにとり、両手で温めてから顔全体を包み込むようにやさしくハンドプレスしてなじませます。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 02</span>
            <h4 class="vsang-lp-step-title">クリームやセラムに1〜2滴混ぜる「ブレンドケア」として</h4>
          </div>
          <p class="vsang-lp-step-text">特に乾燥が気になる日や季節の変わり目には、お手持ちの保湿クリームや美容液に1〜2滴混ぜてなじませることで、より濃密なしっとり感とツヤをプラスできます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン ベータG アズレン フォーカスオイル（V-SANG BETA-G AZULENE FOCUS OIL）</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>30mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>適量（2〜3滴）を手にとり、顔全体にやさしくなじませてください。お手持ちのクリーム等に混ぜてもお使いいただけます。</td>
          </tr>
          <tr>
            <th>全成分</th>
            <td>
              水、トリ（カプリル酸／カプリン酸）グリセリル、BG、グリセリン、1,2-ヘキサンジオール、ホホバ種子油、アルガニアスピノサ核油、ヒマワリ種子油、ツバキ種子油、マカデミア種子油、オリーブ果実油、アボカド油、グアイアズレン、β-グルカン、セラミドNP、パンテノール、水添レシチン、トコフェロール、ベタイン、カルボマー、アルギニン、キサンタンガム、エチルヘキシルグリセリン、EDTA-2Na、香料
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン ベータG アズレン フォーカスオイル</h4>
          <p class="vsang-lp-buy-en">V-SANG BETA-G AZULENE FOCUS OIL</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥11,000</span>
            <span class="vsang-lp-buy-tax">（税込） / 30mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            カモミール由来のグアイアズレンとリポソーム保湿成分、7種の植物由来オイルを凝縮。ゆらぎやすい肌にうるおいとツヤを与える美容オイル。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="30ml">30mL — ¥11,000（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="beta-g-azulene-oil">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

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
      <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-fv-head">
        <p class="vsang-lp-fv-brand">ACFIT V-SANG</p>
        <p class="vsang-lp-fv-lead">ひと塗りで、肌にみずみずしく広がる軽やかなうるおい</p>
        <h2 class="vsang-lp-fv-title">ACFIT V-SANG CREAM</h2>
        <p class="vsang-lp-fv-sub">ハナビラタケエキス<sup>※</sup>とβ-グルカン<sup>※</sup>が乾燥から肌を守り、しっとりなめらかな素肌へ導く水分クリーム。</p>
      </div>
      <div class="vsang-lp-placeholder vsang-lp-placeholder--fv">
        <span>FV メインビジュアル配置エリア（推奨：1040 × 560px）</span>
      </div>
      <p class="vsang-lp-note">※保湿・整肌成分</p>
    </div>
  </section>

  <!-- VOICE & IMPRESSION（お声・使用感） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">VOICE &amp; IMPRESSION</span>
        <h3 class="vsang-lp-heading-ja">毎日のスキンケアが心地よく変わる、軽やかな濃密保湿</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">日々ご愛用いただいているお客様から寄せられた、使い心地の声をご紹介します。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「クリームの中で一番お気に入り。重たくないのにしっとり」</h4>
          <p class="vsang-lp-voice-text">
            こっくりしすぎるクリームが苦手でしたが、これはみずみずしく伸びてベタつかず、角質層までうるおう感覚が続いて毎日心地よく使えています。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「季節の変わり目でゆらぎがちな肌にも、やさしい使い心地」</h4>
          <p class="vsang-lp-voice-text">
            乾燥で肌が敏感に傾きやすい時期でも刺激感なくすっとなじみ、肌表面をなめらかに整えてくれるので手放せない一本です。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「肌あたりがとてもなめらかで、朝のメイク前にもぴったり」</h4>
          <p class="vsang-lp-voice-text">
            塗布した直後から肌がもっちりやわらかく整い、ベタつきやモロモロが出にくいので、朝の保湿ケアにも夜の仕上げにも大活躍しています。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「家族みんなで使える、クセのない爽やかな保湿クリーム」</h4>
          <p class="vsang-lp-voice-text">
            重たさがなくみずみずしい質感なので、乾燥しやすい部分は重ねづけして使っています。サイズ展開も豊富で用途に合わせて選べるのが嬉しいです。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- LINEUP & SIZE（3サイズ展開：PC2カラム構成） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">LINEUP &amp; SIZE</span>
        <h3 class="vsang-lp-heading-ja">用途に合わせて選べる3つの容量ラインナップ</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">持ち歩きや毎日のホームケアに便利なデイリーサイズ（15mL・50mL）と、たっぷり使えるプロケアサイズ（200mL）をご用意しました。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">DAILY SIZE / 15mL &amp; 50mL</span>
          <h4 class="vsang-lp-detail-title">ポーチインや毎日のケアに「デイリーサイズ（15mL / 50mL）」</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
            <span>15mL・50mL チューブ画像（推奨：500 × 420px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            お試しや外出先での保湿直しに便利な15mLと、朝晩のスキンケアに使いやすいスタンダードな50mL。いつでもフレッシュな状態でご使用いただけます。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">PRO CARE SIZE / 200mL</span>
          <h4 class="vsang-lp-detail-title">顔から首元・全身まで惜しみなく使える「大容量（200mL）」</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
            <span>200mL 大容量チューブ画像（推奨：500 × 420px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            乾燥が気になる時期のたっぷり重ねづけや、首元・デコルテケア、サロンでの施術仕上げまで気兼ねなくお使いいただける200mLのプロケアサイズです。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4 SOLUTIONS（4つのアプローチ） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">4 SOLUTIONS</span>
        <h3 class="vsang-lp-heading-ja">ゆらぎやすい肌をすこやかに守る4つの設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">ハナビラタケエキス67%<sup>※1</sup> ＋ β-グルカン<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">自然由来の保湿・整肌成分が乾燥や外部刺激から肌を守り、すこやかな素肌環境へ導きます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">6種の保湿成分<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">角質層のすみずみまで水分を届け、肌表面にうるおいヴェールをつくってしっとり感をキープします。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">3種の自然由来成分<sup>※3</sup> 配合</h4>
          <p class="vsang-lp-sol-text">植物由来のエモリエント・整肌成分が肌をやさしく包み込み、なめらかでツヤのある質感へ整えます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 04</span>
          <h4 class="vsang-lp-sol-title">ナイアシンアミド × アデノシン<sup>※4</sup> 配合</h4>
          <p class="vsang-lp-sol-text">乾燥によるくすみやハリ不足にアプローチし、明るく弾力感のある肌印象へ導きます。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 ハナビラタケエキス（保湿・整肌成分）を全体の67%配合 ※2 保湿成分 ※3 エモリエント・整肌成分 ※4 整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01（ハナビラタケエキス67% ＋ β-グルカン） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 01</span>
        <h3 class="vsang-lp-heading-ja">すこやかな素肌を守る自然の恵み<br>ハナビラタケエキス67%<sup>※1</sup> ＋ β-グルカン<sup>※2</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>ハナビラタケ・β-グルカン画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">精製水の代わりにハナビラタケエキスを贅沢にベース配合</h4>
          <p class="vsang-lp-split-text">
            キノコ類の中でも特に「β-グルカン」を豊富に含むことで知られるハナビラタケエキスを67%配合。さらにβ-グルカンそのものをプラスすることで、乾燥や外部環境の影響を受けやすい肌を穏やかに整え、しっとりとした健やかな肌を保ちます。
          </p>
          <ul class="vsang-lp-tags">
            <li>ハナビラタケエキス（保湿・整肌成分）</li>
            <li>β-グルカン（保湿成分）</li>
          </ul>
          <p class="vsang-lp-note">※1 保湿・整肌成分 ※2 保湿成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 02（6種の水分保湿成分） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 02</span>
        <h3 class="vsang-lp-heading-ja">角質層のすみずみまでうるおいを満たす<br>6種の保湿成分<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">水分を抱え込み、逃さない濃密うるおいヴェール</h4>
          <p class="vsang-lp-split-text">
            保水力に優れた6種類の保湿成分をバランスよく組み合わせました。肌表面にみずみずしいうるおいの膜をつくりながら角質層まで水分を届け、乾燥によるカサつきを防いでしっとり感を長時間キープします。
          </p>
          <ul class="vsang-lp-bullets">
            <li>ヒアルロン酸Na（保湿成分）</li>
            <li>グリセリン（保湿成分）</li>
            <li>トレハロース（保湿成分）</li>
            <li>プロパンジオール（保湿成分）</li>
            <li>ジプロピレングリコール（保湿成分）</li>
            <li>アルギニン（保湿・pH調整成分）</li>
          </ul>
          <p class="vsang-lp-note">※すべて保湿・整肌成分</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>6種の保湿成分イメージ画像（推奨：500 × 420px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 03 & 04（自然由来成分3種 & ナイアシンアミド×アデノシン） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 03 &amp; 04</span>
        <h3 class="vsang-lp-heading-ja">自然由来のエモリエント成分と、ハリ・ツヤのためのダブル整肌設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">SOLUTION 03</span>
          <h4 class="vsang-lp-detail-title">3種の自然由来成分<sup>※1</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>自然由来成分3種イメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            マカデミア種子油、テンモンドウ根エキス、ホホバ種子油の3種の自然由来成分を配合。肌なじみのよい植物オイルとエキスがうるおいを閉じ込め、やわらかくなめらかな素肌へと導きます。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">SOLUTION 04</span>
          <h4 class="vsang-lp-detail-title">ナイアシンアミド × アデノシン<sup>※2</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>ナイアシンアミド・アデノシン画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            人気の整肌成分「ナイアシンアミド」と「アデノシン」をダブル配合。うるおいを与えることで乾燥によるくすみを防ぎ、ピンとしたハリとツヤのある肌印象へ整えます。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 エモリエント・整肌成分 ※2 整肌成分</p>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE</span>
        <h3 class="vsang-lp-heading-ja">重たさを感じさせない、みずみずしく軽やかな水分クリーム</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          肌に伸ばした瞬間、水分がはじけるようにすっと広がるフレッシュなクリームテクスチャー。<br class="vsang-lp-pc-only">
          ベタつきを抑えながら角質層までしっかりうるおいを届け、心地よいしっとり感が続きます。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：クリーム質感（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">なめらかに伸び広がるシルキーな肌あたり</h4>
          <p class="vsang-lp-tex-text">摩擦感なくやさしく塗布でき、乾燥してゴワつきやすい肌もふっくらやわらかに整えます。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：なじみ後（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">ベタつきを残さず、うるおいヴェールで密着</h4>
          <p class="vsang-lp-tex-text">朝のメイク前にも夜の集中保湿にも使いやすい、軽やかで心地よい仕上がりです。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW TO USE / LINE STEP（おすすめライン使いステップ） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG ROUTINE</span>
        <h3 class="vsang-lp-heading-ja">ビサン ライン使いで、よりすこやかなうるおいケア</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 01</span>
            <h4 class="vsang-lp-step-title">ビサン クレンジングでやさしくオフ</h4>
          </div>
          <p class="vsang-lp-step-text">マイルドなジェル泡で肌のうるおいを守りながら、一日の汚れや余分な皮脂をすっきりと洗い流します。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 02</span>
            <h4 class="vsang-lp-step-title">ビサン マスク・化粧水で水分チャージ</h4>
          </div>
          <p class="vsang-lp-step-text">洗顔後の清潔な肌にトナーやシートマスクでたっぷりと水分を補給し、角質層までみずみずしく整えます。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 03</span>
            <h4 class="vsang-lp-step-title">ビサン クリームでうるおいを閉じ込める</h4>
          </div>
          <p class="vsang-lp-step-text">仕上げに適量（パール粒大）を手にとり、顔全体から首元にかけてやさしくなじませ、うるおいのヴェールで包み込みます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン クリーム（ACFIT V-SANG CREAM）</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>15mL ／ 50mL ／ 200mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>スキンケアの最後に適量を手にとり、肌のキメに沿って顔全体から首元までやさしくなじませてください。</td>
          </tr>
          <tr>
            <th>全成分</th>
            <td>
              ハナビラタケエキス（67%）、グリセリン、BG、ジプロピレングリコール、水、ナイアシンアミド、1,2-ヘキサンジオール、プロパンジオール、マカデミア種子油、ホホバ種子油、β-グルカン、ヒアルロン酸Na、トレハロース、テンモンドウ根エキス、アデノシン、カルボマー、アルギニン、セテアリルアルコール、ステアリン酸グリセリル、ポリソルベート60、セスキオレイン酸ソルビタン、エチルヘキシルグリセリン、EDTA-2Na、香料
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン クリーム</h4>
          <p class="vsang-lp-buy-en">ACFIT V-SANG CREAM</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥8,800〜</span>
            <span class="vsang-lp-buy-tax">（税込） / 15mL・50mL・200mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            ハナビラタケエキス67%とβ-グルカン、6種の保湿成分を凝縮。みずみずしく軽やかな使い心地でうるおいを守る高保湿クリーム。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="15ml">15mL（トライアル） — ¥3,300（税込）</option>
              <option value="50ml" selected>50mL（レギュラー） — ¥8,800（税込）</option>
              <option value="200ml">200mL（大容量） — ¥19,800（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="v-sang-cream">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

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
      <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-fv-head">
        <p class="vsang-lp-fv-brand">ACFIT V-SANG</p>
        <p class="vsang-lp-fv-lead">全身に惜しみなく使える、みずみずしい高保湿マルチジェル</p>
        <h2 class="vsang-lp-fv-title">ACFIT V-SANG GEL</h2>
        <p class="vsang-lp-fv-sub">ハナビラタケエキス<sup>※</sup>と8種のヒアルロン酸<sup>※</sup>が、乾燥やほてりがちな肌をひんやりうるおいで包み込みます。</p>
      </div>
      <div class="vsang-lp-placeholder vsang-lp-placeholder--fv">
        <span>FV メインビジュアル配置エリア（推奨：1040 × 560px）</span>
      </div>
      <p class="vsang-lp-note">※保湿・整肌成分</p>
    </div>
  </section>

  <!-- CHECK POINT & VOICE（こんなお悩みに・使用感の声） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">RECOMMENDED &amp; VOICE</span>
        <h3 class="vsang-lp-heading-ja">顔からボディまで、家族みんなで使える心地よさ</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">ベタつきを抑えたみずみずしいジェルが、乾燥しやすい素肌をすこやかに整えます。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「お風呂上がりや日差しを浴びた後のクールダウン保湿に」</h4>
          <p class="vsang-lp-voice-text">
            ひんやりみずみずしいテクスチャーが肌に気持ちよくなじみ、乾燥やほてりが気になりやすい季節のボディケアに大活躍しています。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「大容量サイズだから、全身にたっぷり惜しみなく使える」</h4>
          <p class="vsang-lp-voice-text">
            顔だけでなく首元・デコルテ・腕や脚まで気兼ねなく伸ばせる大容量ボトル。ベタつかないのですぐに服を着られるのも嬉しいポイントです。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「水分ジェルパックとして使うと、もっちりやわらかな肌触りに」</h4>
          <p class="vsang-lp-voice-text">
            特に乾燥が気になる日は、洗顔後の肌に厚めに塗って数分置いてからなじませています。角質層までうるおいで満たされるような使い心地です。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「クセがなくやさしい肌あたりで、季節を問わず常備したい一本」</h4>
          <p class="vsang-lp-voice-text">
            乾燥でカサつきやすい肌にもスムーズに伸び広がり、しっとり感をキープしてくれます。ポンプ式で手早く使えるところもお気に入りです。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- LINEUP & SIZE（2サイズ展開：500mL / 1000mL） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">LINEUP &amp; SIZE</span>
        <h3 class="vsang-lp-heading-ja">使用シーンに合わせて選べる2つの大容量ラインナップ</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">毎日のホームケアに使いやすい500mLと、全身・サロンケアにもたっぷり使える1000mLをご用意しました。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">HOME CARE SIZE / 500mL</span>
          <h4 class="vsang-lp-detail-title">毎日のフェイス＆ボディケアに「500mL ポンプボトル」</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
            <span>500mL ボトル画像（推奨：500 × 420px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            洗面所やリビングに置いて手軽に使える500mLサイズ。お風呂上がりのボディ保湿や朝の水分チャージにぴったりです。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">PRO &amp; FAMILY SIZE / 1000mL</span>
          <h4 class="vsang-lp-detail-title">ご家族でのシェアや全身ケアに「1000mL 大容量ボトル」</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
            <span>1000mL 大容量ボトル画像（推奨：500 × 420px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            たっぷりの水分ジェルパックや全身マッサージ、エステサロンでの施術用ジェルとしても惜しみなく使える1000mLサイズです。
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4 SOLUTIONS（4つのアプローチ） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">4 SOLUTIONS</span>
        <h3 class="vsang-lp-heading-ja">みずみずしさとすこやかさを支える4つの設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">ハナビラタケエキス ＋ β-グルカン<sup>※1</sup> 配合</h4>
          <p class="vsang-lp-sol-text">自然由来の保湿・整肌成分が乾燥や外部刺激から肌を守り、すこやかな素肌環境へ導きます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">8種のヒアルロン酸 × グリセリン<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">分子サイズの異なる8種類のヒアルロン酸が角質層のすみずみまで水分を届け、うるおいをキープします。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">9種の植物由来整肌エキス<sup>※3</sup> 配合</h4>
          <p class="vsang-lp-sol-text">ツボクサやドクダミなどのボタニカルエキスが、ゆらぎがちな肌を穏やかに整えます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 04</span>
          <h4 class="vsang-lp-sol-title">ベタつきを抑えた高水分クールジェル処方</h4>
          <p class="vsang-lp-sol-text">肌に触れた瞬間みずみずしく伸び広がり、重たさを残さずさらっと快適なうるおいヴェールを形成します。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 保湿・整肌成分 ※2 保湿成分 ※3 整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01（ハナビラタケエキス ＋ β-グルカン） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 01</span>
        <h3 class="vsang-lp-heading-ja">すこやかな素肌を守る自然の恵み<br>ハナビラタケエキス ＋ β-グルカン<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>ハナビラタケ・β-グルカン画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">うるおいを抱え込み、乾燥に負けない肌へ</h4>
          <p class="vsang-lp-split-text">
            「β-グルカン」を豊富に含むハナビラタケエキスと、保水力に優れたβ-グルカンをダブルで配合。乾燥や紫外線などの外部環境でゆらぎやすい肌にみずみずしいうるおいを与え、キメの整ったなめらかな肌を保ちます。
          </p>
          <ul class="vsang-lp-tags">
            <li>ハナビラタケエキス（保湿・整肌成分）</li>
            <li>β-グルカン（保湿成分）</li>
          </ul>
          <p class="vsang-lp-note">※保湿・整肌成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 02（8種のヒアルロン酸 × グリセリン） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 02</span>
        <h3 class="vsang-lp-heading-ja">角質層のすみずみまで水分を届ける<br>8種のヒアルロン酸 × グリセリン<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">多層的なうるおいヴェールで、しっとり感を長時間維持</h4>
          <p class="vsang-lp-split-text">
            高分子から低分子まで分子サイズの異なる8種類のヒアルロン酸とグリセリンを複合配合。肌表面にうるおいの膜をつくりながら角質層まで水分を行き渡らせ、乾燥によるカサつきを防ぎます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>ヒアルロン酸Na</li>
            <li>ヒアルロン酸</li>
            <li>加水分解ヒアルロン酸</li>
            <li>加水分解ヒアルロン酸Na</li>
            <li>ヒアルロン酸クロスポリマーNa</li>
            <li>アセチルヒアルロン酸Na</li>
            <li>ヒアルロン酸ヒドロキシプロピルトリモニウム</li>
            <li>ヒアルロン酸ジメチルシラノール</li>
          </ul>
          <p class="vsang-lp-note">※すべて保湿成分</p>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>8種のヒアルロン酸イメージ画像（推奨：500 × 420px）</span>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 03（9種の植物由来整肌エキス） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 03</span>
        <h3 class="vsang-lp-heading-ja">肌を穏やかに整える<br>9種の植物由来整肌エキス<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>9種の植物由来エキス画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">自然の恵みで、ゆらぎがちな肌もすこやかにケア</h4>
          <p class="vsang-lp-split-text">
            ツボクサエキスやドクダミエキス、アロエベラ葉エキスをはじめとする9種類の植物由来整肌エキスを厳選配合。乾燥による肌荒れを防ぎ、全身の肌をみずみずしく清潔に整えます。
          </p>
          <ul class="vsang-lp-tags">
            <li>ツボクサエキス</li>
            <li>ドクダミエキス</li>
            <li>アロエベラ葉エキス</li>
            <li>チャ葉エキス</li>
            <li>カンゾウ根エキス</li>
            <li>カミツレ花エキス</li>
            <li>ローズマリー葉エキス</li>
            <li>オウゴン根エキス</li>
            <li>イタドリ根エキス</li>
          </ul>
          <p class="vsang-lp-note">※すべて整肌成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE</span>
        <h3 class="vsang-lp-heading-ja">ぷるんとみずみずしく、すっと肌になじむ高水分ジェル</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          水分をたっぷり含んだ透明感のあるジェルテクスチャーが、肌の上でみずみずしくほどけて角質層まで浸透<sup>※</sup>。<br class="vsang-lp-pc-only">
          ベタつきやぬるつきを残さず、さらりと心地よいしっとり仕上げを叶えます。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：透明ジェル質感（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">摩擦を抑えてなめらかに伸び広がる</h4>
          <p class="vsang-lp-tex-text">みずみずしいクッション性のあるジェルが、広い面積にもストレスなくスムーズになじみます。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：なじみ後（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">塗布後すぐに服を着られる軽やかな仕上がり</h4>
          <p class="vsang-lp-tex-text">肌表面にベタつきが残りにくく、朝のメイク前や入浴後の全身ケアにも快適です。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※角質層まで</p>
    </div>
  </section>

  <!-- HOW TO USE（ご使用方法：マルチ活用3ステップ） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">HOW TO USE</span>
        <h3 class="vsang-lp-heading-ja">全身に使える3つのマルチ活用法</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">USE 01</span>
            <h4 class="vsang-lp-step-title">顔・首元の「デイリー保湿＆ジェルパック」として</h4>
          </div>
          <p class="vsang-lp-step-text">洗顔後、適量を手にとり顔全体になじませます。乾燥やほてりが気になるときは、やや厚めに塗布して3〜5分ほど置き、やさしくなじませる水分パックもおすすめです。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">USE 02</span>
            <h4 class="vsang-lp-step-title">お風呂上がり・日焼け後の「全身ボディケア」として</h4>
          </div>
          <p class="vsang-lp-step-text">乾燥しやすい腕・脚・背中・デコルテなど、全身にたっぷり伸ばしてなじませます。ひんやり心地よい使用感で、季節を問わず全身のうるおいを保ちます。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">USE 03</span>
            <h4 class="vsang-lp-step-title">マッサージや美顔器ケアの「ベースジェル」として</h4>
          </div>
          <p class="vsang-lp-step-text">なめらかな伸びとみずみずしさが続くため、フェイシャル・ボディマッサージや、お手持ちの美容機器を使用する際の保湿ベースジェルとしても活用いただけます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン ジェル（ACFIT V-SANG GEL）</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>500mL ／ 1000mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>適量を手にとり、顔やボディなど乾燥が気になる部分にやさしくなじませてください。</td>
          </tr>
          <tr>
            <th>全成分</th>
            <td>
              水、グリセリン、BG、1,2-ヘキサンジオール、ハナビラタケエキス、β-グルカン、ヒアルロン酸Na、ヒアルロン酸、加水分解ヒアルロン酸、加水分解ヒアルロン酸Na、ヒアルロン酸クロスポリマーNa、アセチルヒアルロン酸Na、ヒアルロン酸ヒドロキシプロピルトリモニウム、ヒアルロン酸ジメチルシラノール、ツボクサエキス、ドクダミエキス、アロエベラ葉エキス、チャ葉エキス、カンゾウ根エキス、カミツレ花エキス、ローズマリー葉エキス、オウゴン根エキス、イタドリ根エキス、カルボマー、アルギニン、PEG-60水添ヒマシ油、エチルヘキシルグリセリン、EDTA-2Na、香料
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン ジェル</h4>
          <p class="vsang-lp-buy-en">ACFIT V-SANG GEL</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥7,700〜</span>
            <span class="vsang-lp-buy-tax">（税込） / 500mL・1000mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            ハナビラタケエキスと8種のヒアルロン酸、9種の植物由来整肌エキスを配合。顔からボディまで全身をみずみずしく整える高保湿マルチジェル。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="500ml">500mL — ¥7,700（税込）</option>
              <option value="1000ml">1000mL — ¥13,200（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="v-sang-gel">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

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
      <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-fv-head">
        <p class="vsang-lp-fv-brand">ACFIT V-SANG</p>
        <p class="vsang-lp-fv-lead">ひと塗りで、肌にみずみずしく広がる軽やかなうるおい</p>
        <h2 class="vsang-lp-fv-title">V-SANG BETA-G<br class="vsang-lp-sp-only"> LACTO CARE CREAM</h2>
        <p class="vsang-lp-fv-sub">乳酸菌由来成分<sup>※1</sup>と豊富なうるおいレイヤリング<sup>※2</sup>で、ゆらぎがちな肌コンディションをすこやかに整える高保湿クリーム。</p>
      </div>
      <div class="vsang-lp-placeholder vsang-lp-placeholder--fv">
        <span>FV メインビジュアル配置エリア（推奨：1040 × 560px）</span>
      </div>
      <p class="vsang-lp-note">※1 乳酸桿菌発酵溶解質、乳酸桿菌発酵液（すべて整肌成分） ※2 保湿成分</p>
    </div>
  </section>

  <!-- VOICE & IMPRESSION（お声・使用感） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">VOICE &amp; IMPRESSION</span>
        <h3 class="vsang-lp-heading-ja">肌が心地よく整う理由。毎日のラクトケア実感レビュー</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">日々ご愛用いただいているお客様から寄せられた、使い心地の声をご紹介します。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「乾燥しがちな角質層までしっとり。朝晩手放せないクリーム」</h4>
          <p class="vsang-lp-voice-text">
            表面のベタつきは気になるのに内側は乾きやすい肌質で、ずっとクリームを探していました。ラクトケアクリームは重たさなくしっとり包み込んでくれるので、朝晩毎日使っています。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「ゆらぎやすい日の集中保湿ケアにぴったりのやさしい使い心地」</h4>
          <p class="vsang-lp-voice-text">
            季節の変わり目など肌コンディションが傾きやすいときでも、なめらかに伸びて肌を穏やかに整えてくれます。使い続けるほど肌表面がやわらかく整う感覚がお気に入りです。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「もっちりとしたうるおい感で、翌朝までなめらかな肌触り」</h4>
          <p class="vsang-lp-voice-text">
            重すぎるクリームは苦手で、軽すぎるとすぐ乾燥してしまうのが悩みでしたが、これはもっちりとした保湿ヴェールが心地よく続き、翌朝の肌触りがなめらかに整います。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「エアコンによる乾燥対策に、持ち歩いて使いたいデイリー定番」</h4>
          <p class="vsang-lp-voice-text">
            空調の効いた室内に長くいるとすぐカサつきが気になりますが、これをなじませておくとみずみずしさが長持ちします。大容量でたっぷり使えるのも嬉しいです。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- 4 SOLUTIONS（4つのアプローチ） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">4 SOLUTIONS</span>
        <h3 class="vsang-lp-heading-ja">素肌の毎日をすこやかに支える4つの設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">ナイアシンアミド × アデノシン<sup>※1</sup> 配合</h4>
          <p class="vsang-lp-sol-text">乾燥によるくすみやハリ不足にうるおいを与え、明るく弾力感のあるツヤ肌へ導きます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">BIORAN EX INFLA CARE<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">乳酸菌由来成分と植物由来複合エキスが、ゆらぎがちな肌を穏やかに整えます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">独自マイクロバイオームシステム<sup>※2</sup> 採用</h4>
          <p class="vsang-lp-sol-text">2種の独自複合整肌成分が肌のうるおい環境をサポートし、すこやかな素肌を保ちます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 04</span>
          <h4 class="vsang-lp-sol-title">複合ヒアルロン酸 × 保湿ケア成分6種<sup>※3</sup></h4>
          <p class="vsang-lp-sol-text">多層的な水分レイヤリングで角質層のすみずみまで満たし、しっとり感を長時間キープします。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 整肌成分 ※2 整肌・保湿成分 ※3 保湿・エモリエント成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01（ナイアシンアミド × アデノシン） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 01</span>
        <h3 class="vsang-lp-heading-ja">ツヤとハリ感を同時に引き出す<br>ナイアシンアミド × アデノシン<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>ナイアシンアミド・アデノシン画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">うるおいで満たし、明るく弾むような肌印象へ</h4>
          <p class="vsang-lp-split-text">
            乾燥によるくすみを防ぎ、透明感<sup>※1</sup>のあるツヤ肌へ導く「ナイアシンアミド」と、年齢サインが気になり始めた肌にハリ・弾力感を与える「アデノシン」をダブル配合。日々の乾燥ダメージから肌を守り、なめらかで引き締まった印象の素肌へ整えます。
          </p>
          <ul class="vsang-lp-tags">
            <li>ナイアシンアミド（整肌成分）</li>
            <li>アデノシン（整肌成分）</li>
          </ul>
          <p class="vsang-lp-note">※整肌成分 ※1 うるおいによる肌印象</p>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 02 & 03（BIORAN EX INFLA CARE & マイクロバイオームシステム） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 02 &amp; 03</span>
        <h3 class="vsang-lp-heading-ja">ゆらぎやすい肌コンディションをすこやかに整える<br>独自複合アプローチ</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <!-- SOLUTION 02 -->
      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 02 / BIORAN EX INFLA CARE</span>
          <h4 class="vsang-lp-split-title">植物複合発酵エキス × 乳酸桿菌発酵溶解質<sup>※1</sup></h4>
          <p class="vsang-lp-split-text">
            イヌゴマ、オグルマ（金仏草）、タンポポの植物複合発酵エキスと乳酸桿菌発酵溶解質を組み合わせた独自処方（韓国特許登録原料<sup>※2</sup>）を採用。外部環境の変化や乾燥で敏感に傾きがちな肌を穏やかに整え、すこやかなコンディションを保ちます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>乳酸桿菌発酵溶解質（整肌成分）</li>
            <li>オグルマ花エキス（整肌成分）</li>
            <li>イヌゴマエキス（整肌成分）</li>
            <li>セイヨウタンポポ葉エキス（整肌成分）</li>
          </ul>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>BIORAN EX INFLA CARE イメージ画像（推奨：500 × 420px）</span>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <!-- SOLUTION 03 -->
      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">MICROBIOME SYSTEM 01</span>
          <h4 class="vsang-lp-detail-title">ACTI-BARRIER™ 複合整肌成分<sup>※1</sup></h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>ACTI-BARRIER イメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            リョクトウ種子エキス、スベリヒユエキス、オウレン根エキス、乳酸桿菌発酵液をバランスよく配合。乾燥による肌荒れを防ぎ、うるおいバリアをサポートします。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">MICROBIOME SYSTEM 02</span>
          <h4 class="vsang-lp-detail-title">BIO Marine Summer 複合整肌成分<sup>※2</sup></h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>BIO Marine Summer イメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            乳酸桿菌発酵溶解質、カワラヨモギエキス、ハマナス花エキスを組み合わせた独自複合成分（韓国特許登録原料）が、肌に豊かなうるおいとみずみずしさを与えます。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 整肌成分 ※2 韓国特許登録原料を含む複合整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 04（Hyal 11 × 保湿ケア成分6種） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 04</span>
        <h3 class="vsang-lp-heading-ja">自然の恵みとうるおいのレイヤリング<br>複合ヒアルロン酸 × 保湿ケア成分6種<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>水分レイヤリングイメージ画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">MULTI-LAYER HYDRATION</span>
          <h4 class="vsang-lp-split-title">角質層のすみずみまで水分を届け、しっとり感を閉じ込める</h4>
          <p class="vsang-lp-split-text">
            分子サイズの異なる9種類のヒアルロン酸複合成分（Hyal 11<sup>※1</sup>）に加え、グリセリンやシア脂、パンテノールなど6種類の保湿・エモリエント成分を贅沢に配合。水分補給と保湿ヴェールのダブルの働きで、乾燥知らずのやわらかな素肌をキープします。
          </p>
          <ul class="vsang-lp-tags">
            <li>ヒアルロン酸Na</li>
            <li>ヒアルロン酸</li>
            <li>加水分解ヒアルロン酸Na</li>
            <li>加水分解ヒアルロン酸</li>
            <li>加水分解グリコサミノグリカン</li>
            <li>ヒアルロン酸ジメチルシラノール</li>
            <li>アセチルヒアルロン酸Na</li>
            <li>ヒアルロン酸クロスポリマーNa</li>
            <li>ヒアルロン酸ヒドロキシプロピルトリモニウム</li>
          </ul>
          <ul class="vsang-lp-bullets">
            <li>グリセリン・パンテノール・β-グルカン（保湿成分）</li>
            <li>アラントイン（整肌成分）</li>
            <li>ヒマワリ種子油・シア脂（エモリエント成分）</li>
          </ul>
          <p class="vsang-lp-note">※1 保湿成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE</span>
        <h3 class="vsang-lp-heading-ja">なめらかに伸び広がる、ミルキーで軽やかなクリームテクスチャー</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          コクがありながらも重たさを抑えたミルキーな質感で、肌に触れた瞬間すっと溶け込むようになじみます。<br class="vsang-lp-pc-only">
          ベタつきを残さず角質層までしっとりとうるおいを届け、心地よい肌触りが続きます。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：ミルキークリーム（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">摩擦を抑えてやさしく広がるなめらかさ</h4>
          <p class="vsang-lp-tex-text">乾燥してゴワつきやすい肌にもスムーズに伸び、ふっくらやわらかな感触へ導きます。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：なじみ後（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">ベタつきを抑えた、もっちりツヤ仕上がり</h4>
          <p class="vsang-lp-tex-text">塗布後の肌表面はさらりとなめらかで、朝のメイク前にも夜の集中保湿にも快適にお使いいただけます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW TO USE（ご使用方法） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">HOW TO USE</span>
        <h3 class="vsang-lp-heading-ja">ご使用方法</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 01</span>
            <h4 class="vsang-lp-step-title">スキンケアの仕上げに適量をとる</h4>
          </div>
          <p class="vsang-lp-step-text">化粧水や美容液で肌を整えたあと、清潔な手のひらに適量（パール粒大〜さくらんぼ大目安）をとります。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 02</span>
            <h4 class="vsang-lp-step-title">顔全体から首元にかけてやさしくなじませる</h4>
          </div>
          <p class="vsang-lp-step-text">額・両頬・鼻・あごの5点に置き、内側から外側に向かって肌のキメに沿ってやさしく伸ばします。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 03</span>
            <h4 class="vsang-lp-step-title">ハンドプレスでうるおいを密着させる</h4>
          </div>
          <p class="vsang-lp-step-text">最後に両手のひらで顔全体をやさしく包み込み、角質層までしっかりなじませます。乾燥が気になる目元・口元には重ねづけがおすすめです。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン ベータG ラクティケア クリーム（V-SANG BETA-G LACTO CARE CREAM）</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>150mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>スキンケアの最後に適量を手にとり、肌のキメに沿って顔全体から首元にかけてやさしくなじませてください。</td>
          </tr>
          <tr>
            <th>全成分</th>
            <td>
              水、グリセリン、BG、トリ（カプリル酸／カプリン酸）グリセリル、ナイアシンアミド、シア脂、ヒマワリ種子油、1,2-ヘキサンジオール、セテアリルアルコール、ステアリン酸グリセリル、ベタイン、パンテノール、β-グルカン、アラントイン、アデノシン、乳酸桿菌発酵溶解質、乳酸桿菌発酵液、オグルマ花エキス、イヌゴマエキス、セイヨウタンポポ葉エキス、リョクトウ種子エキス、スベリヒユエキス、オウレン根エキス、カワラヨモギエキス、ハマナス花エキス、ヒアルロン酸Na、ヒアルロン酸、加水分解ヒアルロン酸Na、加水分解ヒアルロン酸、加水分解グリコサミノグリカン、ヒアルロン酸ジメチルシラノール、アセチルヒアルロン酸Na、ヒアルロン酸クロスポリマーNa、ヒアルロン酸ヒドロキシプロピルトリモニウム、カルボマー、アルギニン、エチルヘキシルグリセリン、EDTA-2Na、香料
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン ベータG ラクティケア クリーム</h4>
          <p class="vsang-lp-buy-en">V-SANG BETA-G LACTO CARE CREAM</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥9,900</span>
            <span class="vsang-lp-buy-tax">（税込） / 150mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            乳酸菌由来成分と独自複合植物エキス、多層ヒアルロン酸を凝縮。ゆらぎやすい肌にうるおいとツヤを与える大容量高保湿クリーム。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="150ml">150mL — ¥9,900（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="beta-g-lacto-care-cream">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

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
      
    `
  },
  "item_10": {
    id: "item_10",
    category: "BASIC SKINCARE",
    tag: "",
    name: "ACFIT VSANG Beta-G Lacto Sun Cream（アクフィット サンクリーム）",
    catchcopy: "紫外線から守り、うるおいと美しい肌印象を保つ日焼け止め",
    prices: {
      general: 8000,
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
      <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-fv-head">
        <p class="vsang-lp-fv-brand">ACFIT V-SANG / UV PROTECTION SPF50+ PA+++</p>
        <p class="vsang-lp-fv-lead">毎日みずみずしく包み込む、澄んだ素肌印象の秘訣</p>
        <h2 class="vsang-lp-fv-title">V-SANG BETA-G<br class="vsang-lp-sp-only"> LACTO SUN CREAM</h2>
        <p class="vsang-lp-fv-sub">SPF50+ PA+++の紫外線防御力と濃密なうるおいケアを両立し、日やけによるシミ・ソバカスを防ぐデイリーUVクリーム。</p>
      </div>
      <div class="vsang-lp-placeholder vsang-lp-placeholder--fv">
        <span>FV メインビジュアル配置エリア（推奨：1040 × 560px）</span>
      </div>
    </div>
  </section>

  <!-- VOICE & IMPRESSION（お声・使用感） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">VOICE &amp; IMPRESSION</span>
        <h3 class="vsang-lp-heading-ja">日やけ止め選びに迷っていた方も愛用する、軽やかな密着感</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">日々ご愛用いただいているお客様から寄せられた、使い心地の声をご紹介します。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「メイク前でもヨレにくく、一日中快適なつけ心地」</h4>
          <p class="vsang-lp-voice-text">
            ベタつく日やけ止めが苦手でしたが、こちらは塗った瞬間軽やかに密着して驚きました。メイク前に使ってもモロモロが出にくく、時間が経っても心地よい使用感が続きます。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「毎日自然と手が伸びる、スキンケア感覚のみずみずしさ」</h4>
          <p class="vsang-lp-voice-text">
            屋外で過ごす時間が長いものの、重たい日やけ止めは敬遠しがちでした。ラクトサンクリームはみずみずしく伸びて後肌がさらりとしているので、毎日快適に使えています。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「乾燥しやすい肌にもすっとなじみ、ツヤのある仕上がりに」</h4>
          <p class="vsang-lp-voice-text">
            乾燥肌なので日やけ止めを塗ると粉吹きや浮きが気になっていましたが、これは保湿クリームのようにしっとりなじむので、ベースメイクのノリもきれいに整います。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「塗り直しても重たくならず、テカリにくい密着力」</h4>
          <p class="vsang-lp-voice-text">
            日中に重ね塗りしても厚塗り感が出にくく、時間が経っても過剰にテカリにくいのが嬉しいポイント。外出時の持ち歩き用としても重宝しています。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- 4 SOLUTIONS（4つのアプローチ） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">4 SOLUTIONS</span>
        <h3 class="vsang-lp-heading-ja">365日のUVケアを心地よく支える4つの設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">SPF50+ PA+++ × ナイアシンアミド・アデノシン<sup>※1</sup></h4>
          <p class="vsang-lp-sol-text">紫外線から肌を守りながら、乾燥によるくすみやハリ不足にうるおいを与える多機能UV設計です。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">BIORAN EX Infla Care<sup>※2</sup> 配合</h4>
          <p class="vsang-lp-sol-text">乳酸菌由来成分と植物複合エキスが、紫外線や乾燥でゆらぎがちな肌を穏やかに整えます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">独自マイクロバイオームシステム<sup>※2</sup> 採用</h4>
          <p class="vsang-lp-sol-text">2種の独自複合整肌成分が肌のうるおいバランスをサポートし、日中のすこやかな素肌を保ちます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 04</span>
          <h4 class="vsang-lp-sol-title">7種のヒアルロン酸 × 4種の保湿ケア成分<sup>※3</sup></h4>
          <p class="vsang-lp-sol-text">角質層のすみずみまで水分を補給し、日中の乾燥から肌を守ってしっとり感を維持します。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 整肌成分 ※2 整肌・保湿成分 ※3 保湿・整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01（ハイブリッドUV × ナイアシンアミド・アデノシン） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 01</span>
        <h3 class="vsang-lp-heading-ja">紫外線防御とスキンケア発想をひとつに<br>ハイブリッドUV処方 × 整肌成分<sup>※1</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>UVケア・整肌成分イメージ画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">HYBRID UV &amp; SKIN CARE</span>
          <h4 class="vsang-lp-split-title">なめらかさと密着感を両立したバランスUV設計</h4>
          <p class="vsang-lp-split-text">
            みずみずしくなめらかに伸びる紫外線吸収剤と、肌表面で軽やかにフィットする紫外線散乱剤をバランスよく組み合わせたハイブリッド処方を採用。さらに「ナイアシンアミド」と「アデノシン」を配合し、紫外線から肌を守りながらツヤとハリ感のある素肌へと整えます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>SPF50+ PA+++ で日常の紫外線からレジャーまでしっかりガード</li>
            <li>ナイアシンアミド・アデノシン（整肌成分）配合</li>
            <li>白浮きやきしみ感を抑えた軽やかな密着テクスチャー</li>
          </ul>
          <p class="vsang-lp-note">※1 ナイアシンアミド、アデノシン（すべて整肌成分）</p>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 02 & 03（BIORAN EX Infla Care & マイクロバイオームシステム） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 02 &amp; 03</span>
        <h3 class="vsang-lp-heading-ja">日中の乾燥・紫外線環境から素肌をすこやかに守る<br>独自複合アプローチ</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <!-- SOLUTION 02 -->
      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 02 / BIORAN EX INFLA CARE</span>
          <h4 class="vsang-lp-split-title">植物複合発酵エキス × 乳酸桿菌発酵溶解質<sup>※1</sup></h4>
          <p class="vsang-lp-split-text">
            イヌゴマ、オグルマ（金仏草）、タンポポの植物複合発酵エキスと乳酸桿菌発酵溶解質を組み合わせた独自処方（韓国特許登録原料<sup>※2</sup>）を採用。日中の紫外線や乾燥でゆらぎがちな肌を穏やかに整え、すこやかなコンディションを保ちます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>乳酸桿菌発酵溶解質（整肌成分）</li>
            <li>オグルマ花エキス（整肌成分）</li>
            <li>イヌゴマエキス（整肌成分）</li>
            <li>セイヨウタンポポ葉エキス（整肌成分）</li>
          </ul>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>BIORAN EX Infla Care イメージ画像（推奨：500 × 420px）</span>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <!-- SOLUTION 03 -->
      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">MICROBIOME SYSTEM 01</span>
          <h4 class="vsang-lp-detail-title">ACTI-BARRIER™ 複合整肌成分<sup>※1</sup></h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>ACTI-BARRIER イメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            リョクトウ種子エキス、スベリヒユエキス、オウレン根エキス、乳酸桿菌発酵液をバランスよく配合。乾燥による肌荒れを防ぎ、うるおいバリアをサポートします。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">MICROBIOME SYSTEM 02</span>
          <h4 class="vsang-lp-detail-title">BIO Marine Summer 複合整肌成分<sup>※2</sup></h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>BIO Marine Summer イメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            乳酸桿菌発酵溶解質、カワラヨモギエキス、ハマナス花エキスを組み合わせた独自複合成分（韓国特許登録原料）が、日中の肌にも豊かなうるおいを与えます。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 整肌成分 ※2 韓国特許登録原料を含む複合整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 04（7種のヒアルロン酸 × 4種の保湿ケア成分） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 04</span>
        <h3 class="vsang-lp-heading-ja">日中の乾きを寄せ付けないうるおい設計<br>7種のヒアルロン酸 × 4種の保湿ケア成分<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>7種ヒアルロン酸・保湿成分画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">MOISTURE LOCK UV</span>
          <h4 class="vsang-lp-split-title">角質層のすみずみまで水分を抱え込み、しっとり感をキープ</h4>
          <p class="vsang-lp-split-text">
            分子サイズの異なる7種類のヒアルロン酸に加え、グリセリンやβ-グルカン、グリチルリチン酸2K、トコフェロールを配合。紫外線や空調で乾燥しやすい日中の肌にもみずみずしいうるおいを届けます。
          </p>
          <ul class="vsang-lp-tags">
            <li>ヒアルロン酸Na</li>
            <li>ヒアルロン酸</li>
            <li>加水分解ヒアルロン酸</li>
            <li>加水分解ヒアルロン酸Na</li>
            <li>ヒアルロン酸クロスポリマーNa</li>
            <li>アセチルヒアルロン酸Na</li>
            <li>ヒアルロン酸ヒドロキシプロピルトリモニウム</li>
          </ul>
          <ul class="vsang-lp-bullets">
            <li>グリセリン・β-グルカン（保湿成分）</li>
            <li>グリチルリチン酸2K・トコフェロール（整肌成分）</li>
          </ul>
          <p class="vsang-lp-note">※保湿・整肌成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE</span>
        <h3 class="vsang-lp-heading-ja">保湿クリームのようにみずみずしく、軽やかに密着するUVテクスチャー</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          なめらかに伸び広がる軽やかなテクスチャーで、小鼻や目元の細かな凹凸にもピタッとフィット。<br class="vsang-lp-pc-only">
          ベタつきや重たさを残さず、365日心地よく使える快適なUVケアを叶えます。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：エッセンスUV質感（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">すっと伸びてムラになりにくいなめらかさ</h4>
          <p class="vsang-lp-tex-text">摩擦感なく均一に塗り広げやすく、重ね塗りをしてもヨレにくい軽やかな使用感です。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：ツヤ密着仕上げ（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">化粧下地としても使いやすい上品なツヤ感</h4>
          <p class="vsang-lp-tex-text">肌表面をなめらかに整え、次に重ねるファンデーションやベースメイクの仕上がりを引き立てます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW TO USE（ご使用方法） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">HOW TO USE</span>
        <h3 class="vsang-lp-heading-ja">ご使用方法</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 01</span>
            <h4 class="vsang-lp-step-title">朝のスキンケアの最後に適量をとる</h4>
          </div>
          <p class="vsang-lp-step-text">朝のスキンケアで肌を整えたあと、適量（パール粒2個分目安）を手にとります。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 02</span>
            <h4 class="vsang-lp-step-title">顔全体から首元にかけてムラなく伸ばす</h4>
          </div>
          <p class="vsang-lp-step-text">額・両頬・鼻・あごに置き、顔の中心から外側に向かってムラなく均一になじませます。紫外線が当たりやすい頬骨まわりや首元・耳の後ろにも丁寧にお使いください。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">STEP 03</span>
            <h4 class="vsang-lp-step-title">日中はこまめな塗り直しでUV防御力をキープ</h4>
          </div>
          <p class="vsang-lp-step-text">汗をかいた後やタオルで拭いた後、また長時間屋外で過ごす場合は2〜3時間おきを目安に塗り直すことをおすすめします。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン ベータG ラクティ サンクリーム（V-SANG BETA-G LACTO SUN CREAM）</td>
          </tr>
          <tr>
            <th>UV防御指数</th>
            <td>SPF50+ / PA+++</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>50mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>朝のスキンケアの最後に、適量を手にとり、顔全体から首元など紫外線の当たりやすい部分にムラなくのばしてください。</td>
          </tr>
          <tr>
            <th>主な配合成分</th>
            <td>
              水、グリセリン、ナイアシンアミド、β-グルカン、アデノシン、トコフェロール、グリチルリチン酸2K、乳酸桿菌発酵溶解質、乳酸桿菌発酵液、オグルマ花エキス、イヌゴマエキス、セイヨウタンポポ葉エキス、リョクトウ種子エキス、スベリヒユエキス、オウレン根エキス、カワラヨモギエキス、ハマナス花エキス、ヒアルロン酸Na、ヒアルロン酸、加水分解ヒアルロン酸、加水分解ヒアルロン酸Na、ヒアルロン酸クロスポリマーNa、アセチルヒアルロン酸Na、ヒアルロン酸ヒドロキシプロピルトリモニウム 他
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン ベータG ラクティ サンクリーム</h4>
          <p class="vsang-lp-buy-en">V-SANG BETA-G LACTO SUN CREAM（SPF50+ PA+++）</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥6,600</span>
            <span class="vsang-lp-buy-tax">（税込） / 50mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            SPF50+ PA+++の紫外線防御力と、乳酸菌由来成分・7種のヒアルロン酸のうるおいをひとつに。ベタつかず軽やかに密着するデイリーUVクリーム。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="50ml">50mL — ¥6,600（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="beta-g-lacto-sun-cream">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

</div>
    `
  },
  
  "item_11": {
    id: "item_11",
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
      <div class="vsang-lp-wrap">

  <!-- FV（ファーストビュー：テキスト＋画像配置枠） -->
  <section class="vsang-lp-fv">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-fv-head">
        <p class="vsang-lp-fv-brand">ACFIT V-SANG / SKIN REFINING CLAY CARE</p>
        <p class="vsang-lp-fv-lead">余分な皮脂・テカリをオフして、みずみずしく澄んだ素肌へ</p>
        <h2 class="vsang-lp-fv-title">V-SANG CLAY<br class="vsang-lp-sp-only"> BETA-G IMMUCA</h2>
        <p class="vsang-lp-fv-sub">2種のクレイ<sup>※1</sup>と5種のツボクサ由来成分<sup>※2</sup>、豊富な保湿成分<sup>※3</sup>を凝縮。洗い上がりもしっとり整う弱酸性クレイマスク。</p>
      </div>
      <div class="vsang-lp-placeholder vsang-lp-placeholder--fv">
        <span>FV メインビジュアル配置エリア（推奨：1040 × 560px）</span>
      </div>
      <p class="vsang-lp-note">※1 カオリン、ベントナイト（吸着・洗浄成分） ※2 整肌成分 ※3 保湿成分</p>
    </div>
  </section>

  <!-- VOICE & IMPRESSION（お声・使用感） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">VOICE &amp; IMPRESSION</span>
        <h3 class="vsang-lp-heading-ja">つっぱり感を抑えてすっきり整う、新感覚クレイケアの声</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">日々ご愛用いただいているお客様から寄せられた、使い心地の声をご紹介します。</p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 01（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「洗い流したあともつっぱりにくく、しっとり感が残る」</h4>
          <p class="vsang-lp-voice-text">
            これまでのクレイパックは洗い流した後の乾燥やつっぱり感が苦手でしたが、こちらは余分な皮脂をすっきりオフしながら肌がしっとりやわらかく整うので愛用しています。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 02（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「午後の皮脂テカリが気になりにくくなり、後肌がすっきり」</h4>
          <p class="vsang-lp-voice-text">
            時間とともに浮いてくる皮脂や毛穴まわりのベタつきが悩みでしたが、使った後は肌表面がさらっと清潔に整う感覚で、重たさや息苦しさがないのもお気に入りです。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 03（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「クリームのようにやわらかく伸びて、やさしい使い心地」</h4>
          <p class="vsang-lp-voice-text">
            固くて塗りにくいクレイとは違い、ホイップクリームのようにスムーズに伸び広がります。肌あたりが穏やかで心地よいので、週に数回のスペシャルケアとして続けています。
          </p>
        </div>

        <div class="vsang-lp-voice-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>イメージ画像 04（推奨：500 × 320px）</span>
          </div>
          <h4 class="vsang-lp-voice-title">「朝のメイク前に使うと、肌表面がなめらかに整って快適」</h4>
          <p class="vsang-lp-voice-text">
            メイク前の皮脂浮きや化粧崩れが気になっていましたが、このクレイで軽くケアしてからメイクすると肌がすっきり整い、ベースメイクの仕上がりがきれいに保てます。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※個人の感想であり、使用感には個人差があります。</p>
    </div>
  </section>

  <!-- 5 SOLUTIONS（5つのアプローチ） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">5 SOLUTIONS</span>
        <h3 class="vsang-lp-heading-ja">落とすケアとうるおいケアをひとつにした5つの設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 01</span>
          <h4 class="vsang-lp-sol-title">2種のクレイ成分（カオリン × ベントナイト）<sup>※1</sup></h4>
          <p class="vsang-lp-sol-text">微細なクレイ粒子が余分な皮脂や毛穴汚れ・古い角質を吸着し、すっきり清潔な素肌へ導きます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 02</span>
          <h4 class="vsang-lp-sol-title">SOOTHING COOLER<sup>※2</sup> 植物複合エキス配合</h4>
          <p class="vsang-lp-sol-text">5種の植物由来保湿成分が乾燥やほてりがちな肌をひんやりみずみずしく整えます。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 03</span>
          <h4 class="vsang-lp-sol-title">5種のツボクサ由来整肌成分<sup>※3</sup> 配合</h4>
          <p class="vsang-lp-sol-text">ツボクサエキスやマデカッソシドなど5種の成分が、ゆらぎやすい肌を穏やかにケアします。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 04</span>
          <h4 class="vsang-lp-sol-title">7種の高保湿ソリューション<sup>※4</sup> 配合</h4>
          <p class="vsang-lp-sol-text">β-グルカンやグリセリンなどの保湿成分が洗い上がりのつっぱり感を防ぎ、しっとり感を守ります。</p>
        </div>

        <div class="vsang-lp-sol-item">
          <span class="vsang-lp-sol-num">SOLUTION 05</span>
          <h4 class="vsang-lp-sol-title">11種のアミノ酸 ＋ 弱酸性（pH 5.5〜6.5）処方</h4>
          <p class="vsang-lp-sol-text">すこやかな素肌に近い弱酸性ベースと11種のアミノ酸<sup>※4</sup>が、うるおいバランスを保ちます。</p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 吸着・洗浄成分 ※2 韓国特許登録原料を含む複合保湿・整肌成分 ※3 整肌成分 ※4 保湿成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 01 & 02（2種のクレイ & SOOTHING COOLER） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 01 &amp; 02</span>
        <h3 class="vsang-lp-heading-ja">皮脂・毛穴汚れの吸着オフと、ひんやり穏やかな整肌設計</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">SOLUTION 01 / DUAL CLAY</span>
          <h4 class="vsang-lp-detail-title">2種の厳選クレイ成分<sup>※1</sup> 配合</h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>カオリン・ベントナイトイメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            皮脂吸着性に優れた「カオリン」と、毛穴まわりの汚れや古い角質をすっきり絡めとる「ベントナイト」をバランスよく配合。テカリやザラつきを抑え、なめらかで澄んだ印象の肌へ整えます。
          </p>
        </div>

        <div class="vsang-lp-detail-item">
          <span class="vsang-lp-detail-label">SOLUTION 02 / SOOTHING COOLER</span>
          <h4 class="vsang-lp-detail-title">5種の植物複合エキス「SOOTHING COOLER」<sup>※2</sup></h4>
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>SOOTHING COOLER イメージ画像（推奨：500 × 280px）</span>
          </div>
          <p class="vsang-lp-detail-text">
            マコンブエキス、ハルニレ根エキス、アロエベラ葉エキス、スミレ花エキス、ヤマノイモ根エキスを組み合わせた植物複合成分（韓国特許登録原料）を配合。乾燥や日差しでほてりやすい肌にみずみずしい心地よさを与えます。
          </p>
        </div>
      </div>

      <p class="vsang-lp-note">※1 吸着・洗浄成分 ※2 保湿・整肌成分</p>
    </div>
  </section>

  <!-- V-SANG SOLUTION 03（5種のツボクサ由来成分） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 03</span>
        <h3 class="vsang-lp-heading-ja">ゆらぎやすい素肌を穏やかに整える<br>5種のツボクサ由来整肌成分<sup>※</sup></h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>5種のツボクサ由来成分画像（推奨：500 × 420px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <h4 class="vsang-lp-split-title">5つのCICA（ツボクサ）関連成分を贅沢にブレンド</h4>
          <p class="vsang-lp-split-text">
            ツボクサエキスだけでなく、ツボクサ由来の有用成分4種（マデカッソシド、マデカシン酸、アシアチコシド、アシアチン酸）を厳選配合。クレイケア中も肌をやさしくいたわり、乾燥による肌荒れを防いですこやかなコンディションへ導きます。
          </p>
          <ul class="vsang-lp-bullets">
            <li>ツボクサエキス（整肌成分）</li>
            <li>マデカッソシド（整肌成分）</li>
            <li>マデカシン酸（整肌成分）</li>
            <li>アシアチコシド（整肌成分）</li>
            <li>アシアチン酸（整肌成分）</li>
          </ul>
          <p class="vsang-lp-note">※すべて整肌成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- V-SANG SOLUTION 04 & 05（7種の保湿ソリューション & 11種のアミノ酸・弱酸性） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">V-SANG SOLUTION 04 &amp; 05</span>
        <h3 class="vsang-lp-heading-ja">洗い上がりもしっとり整う、多層保湿と11種のアミノ酸</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 04 / 7 MOISTURE FACTORS</span>
          <h4 class="vsang-lp-split-title">うるおいを抱え込んで逃さない7種の保湿成分<sup>※1</sup></h4>
          <p class="vsang-lp-split-text">
            β-グルカンやグリセリンをはじめ、天然保湿因子（NMF）にも含まれるPCA・PCA-Na・乳酸Naなどを複合配合。クレイが余分な皮脂や汚れを吸着する一方で、肌に必要なうるおいをしっかりとキープします。
          </p>
          <ul class="vsang-lp-tags">
            <li>β-グルカン</li>
            <li>グリセリン</li>
            <li>グリコシルトレハロース</li>
            <li>加水分解水添デンプン</li>
            <li>PCA</li>
            <li>PCA-Na</li>
            <li>乳酸Na</li>
          </ul>
        </div>
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>7種の保湿成分イメージ画像（推奨：500 × 420px）</span>
        </div>
      </div>

      <div class="vsang-lp-divider"></div>

      <div class="vsang-lp-grid vsang-lp-split">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>11種のアミノ酸・弱酸性pH画像（推奨：500 × 380px）</span>
        </div>
        <div class="vsang-lp-split-body">
          <span class="vsang-lp-detail-label">SOLUTION 05 / 11 AMINO ACIDS &amp; pH 5.5–6.5</span>
          <h4 class="vsang-lp-split-title">11種のアミノ酸<sup>※1</sup> × 素肌に近い弱酸性フォーミュラ</h4>
          <p class="vsang-lp-split-text">
            角質層のうるおいを支える11種類のアミノ酸（グリシン、バリン、セリン、アスパラギン酸、イソロイシン、アラニン、アルギニン、トレオニン、フェニルアラニン、プロリン、ヒスチジン）を配合。さらに健康な素肌に近い弱酸性（pH 5.5〜6.5）設計で、毎日でも心地よく使えるマイルドさを実現しました。
          </p>
          <p class="vsang-lp-note">※1 すべて保湿成分</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TEXTURE（テクスチャー） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">TEXTURE</span>
        <h3 class="vsang-lp-heading-ja">時間が経っても乾きにくい、なめらかなクリーミーマッド</h3>
        <div class="vsang-lp-heading-line"></div>
        <p class="vsang-lp-heading-desc">
          ホイップクリームのようにきめ細かくやわらかなクレイテクスチャーが、肌の凹凸にもぴたりと密着。<br class="vsang-lp-pc-only">
          従来のクレイパックのようにパリパリに乾きすぎず、心地よく洗い流せるしっとり処方です。
        </p>
      </div>

      <div class="vsang-lp-grid">
        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 01：クリーミークレイ（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">なめらかに伸び広がるホイップ質感</h4>
          <p class="vsang-lp-tex-text">摩擦を抑えて均一に塗り広げやすく、小鼻やTゾーンの細かな部分にもしっかりフィットします。</p>
        </div>

        <div class="vsang-lp-tex-item">
          <div class="vsang-lp-placeholder vsang-lp-placeholder--land">
            <span>テクスチャー画像 02：洗い上がり（推奨：500 × 340px）</span>
          </div>
          <h4 class="vsang-lp-tex-title">水ですっきり落ちる快適な洗い流し</h4>
          <p class="vsang-lp-tex-text">ぬるま湯でスムーズに洗い流せ、ベタつきもつっぱり感もないすこやかな素肌へ整えます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW TO USE（肌コンディション別の4つの活用法） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">HOW TO USE</span>
        <h3 class="vsang-lp-heading-ja">肌コンディションに合わせて選べる4つの使い方</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-steps">
        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 01</span>
            <h4 class="vsang-lp-step-title">テカリ・毛穴汚れが気になるときの「クレイマスク」として</h4>
          </div>
          <p class="vsang-lp-step-text">洗顔後、水気を軽く拭き取った肌に目元・口元を避けて均一に伸ばし、5〜10分ほど置いたあと、ぬるま湯でやさしくマッサージしながら洗い流します。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 02</span>
            <h4 class="vsang-lp-step-title">Tゾーンや小鼻など気になる部分の「スポット集中パック」として</h4>
          </div>
          <p class="vsang-lp-step-text">皮脂やザラつきが特に気になる小鼻・あご・額などに厚めにのせ、数分置いてから洗い流すことでポイントケアとしてもお使いいただけます。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 03</span>
            <h4 class="vsang-lp-step-title">乾燥が気になる日は「ヴィサンクリームとブレンドケア」として</h4>
          </div>
          <p class="vsang-lp-step-text">乾燥やつっぱり感が気になるときは、ヴィサンクリームと1:1の割合で混ぜて塗布し、5分ほど置いてから洗い流すとよりしっとりとした洗い上がりになります。</p>
        </div>

        <div class="vsang-lp-step-row">
          <div class="vsang-lp-step-head">
            <span class="vsang-lp-step-num">WAY 04</span>
            <h4 class="vsang-lp-step-title">日差しを浴びた後の「ヴィサンジェル重ね塗りケア」として</h4>
          </div>
          <p class="vsang-lp-step-text">ほてりを感じやすい日は、先にヴィサンジェルを薄く塗布してからイミュカを重ねて数分置き、ぬるま湯で洗い流すことでひんやり心地よく整えます。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRODUCT INFORMATION（製品情報） -->
  <section class="vsang-lp-sec">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">PRODUCT INFORMATION</span>
        <h3 class="vsang-lp-heading-ja">製品情報</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <table class="vsang-lp-table">
        <tbody>
          <tr>
            <th>商品名</th>
            <td>ヴィサン クレイ ベータG イミュカ（V-SANG CLAY BETA-G IMMUCA）</td>
          </tr>
          <tr>
            <th>内容量</th>
            <td>180mL</td>
          </tr>
          <tr>
            <th>使用期限</th>
            <td>未開封36ヶ月 ／ 開封後12ヶ月以内を目安にご使用ください</td>
          </tr>
          <tr>
            <th>使用方法</th>
            <td>洗顔後、目元・口元を避けて顔全体に均一に伸ばし、5〜10分ほど置いたあとぬるま湯で十分に洗い流してください。</td>
          </tr>
          <tr>
            <th>主な配合成分</th>
            <td>
              水、カオリン、ベントナイト、グリセリン、BG、β-グルカン、ツボクサエキス、マデカッソシド、マデカシン酸、アシアチコシド、アシアチン酸、マコンブエキス、ハルニレ根エキス、アロエベラ葉エキス、スミレ花エキス、ヤマノイモ根エキス、グリコシルトレハロース、加水分解水添デンプン、PCA、PCA-Na、乳酸Na、グリシン、バリン、セリン、アスパラギン酸、イソロイシン、アラニン、アルギニン、トレオニン、フェニルアラニン、プロリン、ヒスチジン 他
            </td>
          </tr>
          <tr>
            <th>ご使用上の注意</th>
            <td>
              1. お肌に異常が生じていないかよく注意して使用してください。化粧品がお肌に合わないとき即ち次のような場合には、使用を中止してください。そのまま化粧品類の使用を続けますと、症状を悪化させることがありますので、皮膚科専門医等にご相談されることをおすすめします。<br>
              (1) 使用中、赤味、はれ、かゆみ、刺激、色抜け（白斑等）や黒ずみ等の異常があらわれた場合<br>
              (2) 使用したお肌に、直射日光があたって上記のような異常があらわれた場合<br>
              2. 傷やはれもの、しっしん等、異常のある部位にはお使いにならないでください。<br>
              3. 目に入ったときは、直ちに洗い流してください。<br>
              4. 乳幼児の手の届かないところに保管してください。高温多湿または直射日光のあたる場所には保管しないでください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- PURCHASE SECTION（購入エリア） -->
  <section class="vsang-lp-sec vsang-lp-sec--blue">
    <div class="vsang-lp-inner">
      <div class="vsang-lp-heading">
        <span class="vsang-lp-heading-en">ONLINE STORE</span>
        <h3 class="vsang-lp-heading-ja">ご購入はこちら</h3>
        <div class="vsang-lp-heading-line"></div>
      </div>

      <div class="vsang-lp-grid vsang-lp-buy-box">
        <div class="vsang-lp-placeholder vsang-lp-placeholder--sq">
          <span>商品パッケージ画像（推奨：500 × 500px）</span>
        </div>

        <div class="vsang-lp-buy-info">
          <p class="vsang-lp-buy-brand">ACFIT V-SANG</p>
          <h4 class="vsang-lp-buy-name">ヴィサン クレイ ベータG イミュカ</h4>
          <p class="vsang-lp-buy-en">V-SANG CLAY BETA-G IMMUCA</p>

          <div class="vsang-lp-buy-price-row">
            <span class="vsang-lp-buy-price">¥7,700</span>
            <span class="vsang-lp-buy-tax">（税込） / 180mL</span>
          </div>

          <p class="vsang-lp-buy-desc">
            カオリン・ベントナイトの2種のクレイと5種のツボクサ由来成分、11種のアミノ酸を配合。余分な皮脂をオフしながらしっとり整える弱酸性クレイマスク。
          </p>

          <div class="vsang-lp-buy-select-wrap">
            <label class="vsang-lp-buy-label">内容量を選択</label>
            <select class="vsang-lp-buy-select">
              <option value="180ml">180mL — ¥7,700（税込）</option>
            </select>
          </div>

          <button type="button" class="vsang-lp-buy-btn" data-product-id="v-sang-clay-immuca">
            カートに入れる
          </button>
        </div>
      </div>
    </div>
  </section>

</div>
    `
  },
};

// 常に一般価格（general）を返す
function getCurrentRank() {
  return "general";
}

// カートデータ操作（localStorage）
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
  // 共通ヘッダーを挿入
  const headerHTML = `
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
    </nav>

    <!-- カートドロワー -->
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

  const menuOverlay = document.getElementById("menu-overlay");
  const drawerMenu = document.getElementById("drawer-menu");

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

    let unitPrice = product.prices.general;
    let variantLabel = "";
    if (product.variants && entry.variantId) {
      const variant = product.variants.find(v => v.id === entry.variantId);
      if (variant) {
        unitPrice = variant.prices.general;
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
  if (cart.length === 0) return;

  const btn = document.querySelector('.checkout-btn');
  btn.disabled = true;
  btn.textContent = '決済ページを準備中...';

  try {
    const res = await fetch(GAS_CHECKOUT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ cart: cart, rank: 'general' })
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