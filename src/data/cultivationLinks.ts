/**
 * 野菜ごとの栽培資料リンク
 * 発行元: JA・農林水産省・都道府県農業センター・大手種苗会社など信頼できる機関のみ
 */

export interface CultivationLink {
  title: string;
  url: string;
  source: string;
  type: 'pdf' | 'web';
}

export const cultivationLinks: Record<string, CultivationLink[]> = {
  tomato: [
    { title: 'タキイのトマト栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/tomato.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのトマト栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/manual_tomato.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'トマト露地・トンネル栽培のポイント｜タキイ種苗 家庭菜園', url: 'https://www.takii.co.jp/tsk/y_garden/spring/tomato/index.html', source: 'タキイ種苗', type: 'web' },
    { title: '有機ミニトマト 病害虫管理体系標準作業手順書（農研機構）', url: 'https://www.naro.go.jp/publicity_report/publication/laboratory/naro/sop/143690.html', source: '農研機構', type: 'web' },
  ],
  eggplant: [
    { title: 'タキイのナス栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/nasu.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのナス栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/manual_nasu.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'なす栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-1.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'ナス栽培技術基礎知識', url: 'https://www.pref.wakayama.lg.jp/prefg/070300/kisotisiki/mokuji_d/fil/nasu.pdf', source: '和歌山県農業振興課', type: 'pdf' },
    { title: 'ナス露地・トンネル栽培のポイント｜タキイ種苗 家庭菜園', url: 'https://www.takii.co.jp/tsk/y_garden/spring/nasu/index.html', source: 'タキイ種苗', type: 'web' },
  ],
  cucumber: [
    { title: 'タキイのキュウリ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/kyuuri.html', source: 'タキイ種苗', type: 'web' },
    { title: 'きゅうり栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-3.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'トンネル・露地キュウリ 栽培技術の手引き（PDF）', url: 'https://www.pref.ishikawa.lg.jp/nousan/eco/documents/m5nokyuuri.pdf', source: '石川県農林水産部', type: 'pdf' },
    { title: 'きゅうり定植までの栽培管理', url: 'https://www.jahanamaki.or.jp/imagem/saibai/1494924010_01.pdf', source: 'JAいわて花巻', type: 'pdf' },
  ],
  pepper: [
    { title: 'タキイのピーマン栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/piman.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのピーマン栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/manual_piman.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'ピーマン栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-2.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'トンネル・露地ピーマン 定植後の管理', url: 'https://www.jahanamaki.or.jp/imagem/saibai/1494923752_01.pdf', source: 'JAいわて花巻', type: 'pdf' },
  ],
  shishito: [
    { title: 'とうがらし類 栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-5.pdf', source: '農林水産省', type: 'pdf' },
    { title: '野菜栽培技術指針（シシトウ・ピーマン含む）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-5.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'シシトウ 栽培技術体系', url: 'https://k-engei.net/contents/koushu_standard/133%E3%82%B7%E3%82%B7%E3%83%88%E3%82%A6.pdf', source: '熊本県野菜振興協会', type: 'pdf' },
  ],
  chili: [
    { title: '甘長とうがらし 育て方マニュアル', url: 'https://www.takii.co.jp/umauma/manual/tougarashi/index.html', source: 'タキイ種苗', type: 'web' },
    { title: 'とうがらし栽培マニュアル', url: 'https://www.midorinet.or.jp/overview/wp-content/uploads/sites/4/2025/02/tougarasi.pdf', source: 'JA庄内みどり', type: 'pdf' },
    { title: 'とうがらし類の有機栽培技術（農研機構）', url: 'https://www.naro.go.jp/publicity_report/publication/files/narc_man_yuuki03.pdf', source: '農研機構', type: 'pdf' },
  ],
  pumpkin: [
    { title: 'タキイのカボチャ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/kabocha.html', source: 'タキイ種苗', type: 'web' },
    { title: 'かぼちゃ栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-4.pdf', source: '農林水産省', type: 'pdf' },
    { title: '野菜栽培技術指針（カボチャ）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-4.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'トンネル早熟かぼちゃ栽培マニュアル', url: 'https://www.pref.ishikawa.lg.jp/nousan/eco/documents/m5notokabotya.pdf', source: '石川県農林水産部', type: 'pdf' },
  ],
  watermelon: [
    { title: 'タキイのスイカ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/suika.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのスイカ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/suika.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'すいか栽培技術指針（宮城県）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/pdf/miyagi_yasai18_7.pdf', source: '農林水産省（宮城県）', type: 'pdf' },
    { title: 'スイカの立体栽培に適した品種選定', url: 'https://www.pref.kumamoto.jp/uploaded/attachment/6491.pdf', source: '熊本県農業研究センター', type: 'pdf' },
  ],
  melon: [
    { title: 'タキイのメロン栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/meron.html', source: 'タキイ種苗', type: 'web' },
    { title: 'メロン栽培技術指針（宮城県）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/pdf/miyagi_yasai18_8.pdf', source: '農林水産省（宮城県）', type: 'pdf' },
    { title: '露地メロン・マクワウリ 栽培方法', url: 'https://www.pref.shiga.lg.jp/file/attachment/1049314.pdf', source: '滋賀県農業技術振興センター', type: 'pdf' },
  ],
  okra: [
    { title: 'タキイのオクラ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/okura.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのオクラ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/okura.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'オクラ栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-23.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'オクラ（露地）栽培技術体系', url: 'https://k-engei.net/contents/koushu_standard/104%E6%B7%BB%E5%89%8A%E5%BE%8C%20%E3%82%AA%E3%82%AF%E3%83%A9%EF%BC%88%E9%9C%B2%E5%9C%B0%EF%BC%89.pdf', source: '熊本県野菜振興協会', type: 'pdf' },
    { title: 'オクラ栽培基準（千葉県）', url: 'https://www.pref.chiba.lg.jp/annou/documents/29ecocard-okura.pdf', source: '千葉県農林水産部', type: 'pdf' },
  ],
  zucchini: [
    { title: 'ズッキーニ栽培マニュアル', url: 'https://www.pref.aomori.lg.jp/soshiki/nourin/ni-nosui/files/zukkinisaibaimanyuaru.pdf', source: '青森県農林水産部', type: 'pdf' },
    { title: 'ズッキーニの栽培法（岡山県）', url: 'https://www.pref.okayama.jp/uploaded/life/55809_191202_misc.pdf', source: '岡山県農林水産総合センター', type: 'pdf' },
  ],
  bittermelon: [
    { title: 'タキイのニガウリ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/nigauri.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのニガウリ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/nigauri.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'ゴーヤー生産マニュアル（沖縄県）', url: 'https://www.pref.okinawa.jp/site/nousui/nougyo/kikaku/documents/goya_manual.pdf', source: '沖縄県農林水産部', type: 'pdf' },
    { title: 'ゴーヤー特産化技術マニュアル（沖縄県農業研究センター）', url: 'https://www.pref.okinawa.jp/_res/projects/default_project/_page_/001/010/680/tokusai_goya_15-28.pdf', source: '沖縄県農業研究センター', type: 'pdf' },
  ],
  shiroouri: [
    { title: '果菜類 シロウリ・トウガン栽培方法', url: 'https://www.pref.shiga.lg.jp/file/attachment/1049306.pdf', source: '滋賀県農業技術振興センター', type: 'pdf' },
    { title: 'シロウリ 栽培情報', url: 'https://www.takii.co.jp/CGI/tsk/shohin/shohin.cgi?breed_seq=00000494&hinmoku_cd=AZU&area_cd=5&daigi_flg=0', source: 'タキイ種苗', type: 'web' },
  ],
  togan: [
    { title: 'トウガン｜山田式家庭菜園教室', url: 'https://www.takii.co.jp/tsk/y_garden/spring/tougan/index.html', source: 'タキイ種苗', type: 'web' },
    { title: '果菜類 シロウリ・トウガン栽培方法', url: 'https://www.pref.shiga.lg.jp/file/attachment/1049306.pdf', source: '滋賀県農業技術振興センター', type: 'pdf' },
  ],
  hayatouri: [
    { title: 'ハヤトウリ栽培マニュアル', url: 'https://www.pref.shiga.lg.jp/file/attachment/1049312.pdf', source: '滋賀県農業技術振興センター', type: 'pdf' },
    { title: 'ハヤトウリづくりのポイント', url: 'https://www.pref.nara.lg.jp/n120/16287.html', source: '奈良県農林部', type: 'web' },
  ],
  tsurumurasaki: [
    { title: 'ツルムラサキ｜サカタのタネ', url: 'https://www.sakataseed.co.jp/special/midori/suitable/entry-101.html', source: 'サカタのタネ', type: 'web' },
    { title: 'ツルムラサキ 栽培情報', url: 'https://www.takii.co.jp/CGI/tsk/shohin/shohin.cgi?breed_seq=00000638', source: 'タキイ種苗', type: 'web' },
  ],
  morohiya: [
    { title: 'モロヘイヤ 作型（農林水産省）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/pdf/02020311hinmoku6.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'モロヘイヤ｜JAみえなか', url: 'https://www.ja-mienaka.or.jp/agri/crops/moroheiya/', source: 'JAみえなか', type: 'web' },
    { title: '高ビタミンK含有モロヘイヤの栽培方法（PDF）', url: 'https://www.pref.mie.lg.jp/common/content/000399688.pdf', source: '三重県農業研究所', type: 'pdf' },
  ],
  strawberry: [
    { title: 'タキイのイチゴ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/strawberry.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのイチゴ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/manual_strawberry.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'イチゴ栽培方法｜JAあいち尾東', url: 'https://kateisaien-jaab.jp/cultivation/strawberry/', source: 'JAあいち尾東', type: 'web' },
    { title: 'イチゴ栽培技術指針（農研機構）', url: 'https://www.naro.go.jp/laboratory/nivfs/contents/research/fruits/strawberry/', source: '農研機構', type: 'web' },
  ],
  hakusai: [
    { title: 'タキイのハクサイ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/hakusai.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのハクサイ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/hakusai.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'ハクサイ栽培方法｜JAあいち尾東', url: 'https://kateisaien-jaab.jp/cultivation/chinese_cabbage/', source: 'JAあいち尾東', type: 'web' },
    { title: 'はくさい栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-12.pdf', source: '農林水産省', type: 'pdf' },
    { title: '葉茎菜類 ハクサイ 栽培方法', url: 'https://www.pref.shiga.lg.jp/file/attachment/1049334.pdf', source: '滋賀県農業技術振興センター', type: 'pdf' },
  ],
  cabbage: [
    { title: 'タキイのキャベツ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/kyabetsu.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのキャベツ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/kyabetsu.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'キャベツ栽培方法｜JAあいち尾東', url: 'https://kateisaien-jaab.jp/cultivation/cabbage/', source: 'JAあいち尾東', type: 'web' },
    { title: 'キャベツ施肥基準・栽培指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-12.pdf', source: '農林水産省', type: 'pdf' },
    { title: '業務・加工用キャベツ 4-5月どり栽培技術（農研機構）', url: 'https://www.naro.go.jp/publicity_report/publication/files/nifts_kyabetsusaibai_4-5doritec20200520.pdf', source: '農研機構 野菜花き研究部門', type: 'pdf' },
    { title: 'キャベツ栽培暦（JA南砺）', url: 'https://www.ja-nanto.or.jp/farming/document/family-farm/cabbage.pdf', source: 'JA南砺', type: 'pdf' },
  ],
  lettuce: [
    { title: 'タキイのレタス栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/retasu.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのレタス栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/retasu.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'レタス栽培と作型｜JA石川かほく', url: 'https://www.is-ja.jp/kahoku/saien/retasu.html', source: 'JA石川かほく', type: 'web' },
    { title: 'レタス類 栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-12.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'レタス栽培資料（JA福岡京築）', url: 'https://www.ja-kei.or.jp/wp/wp-content/themes/ja-kei/pdf/r6-lettuce2-h.pdf', source: 'JA福岡京築・京築普及指導センター', type: 'pdf' },
    { title: 'キャベツ・レタスのIPM最新技術集（農研機構）', url: 'https://www.naro.go.jp/publicity_report/publication/files/ipm004.pdf', source: '農研機構', type: 'pdf' },
  ],
  'green-lettuce': [
    { title: 'リーフレタス栽培方法｜JAあいち尾東', url: 'https://kateisaien-jaab.jp/cultivation/leaf_lettuce/', source: 'JAあいち尾東', type: 'web' },
    { title: 'タキイのレタス栽培マニュアル（リーフレタス含む）', url: 'https://www.takii.co.jp/tsk/manual/retasu.html', source: 'タキイ種苗', type: 'web' },
  ],
  saladana: [
    { title: 'タキイのレタス栽培マニュアル（サラダ菜含む）', url: 'https://www.takii.co.jp/tsk/manual/retasu.html', source: 'タキイ種苗', type: 'web' },
    { title: 'サラダ菜｜JA全農ふくれん', url: 'https://zennoh-fukuren.jp/consumer/vegetables/saradana', source: 'JA全農ふくれん', type: 'web' },
  ],
  spinach: [
    { title: 'ホウレンソウ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/hourensou.html', source: 'タキイ種苗', type: 'web' },
    { title: 'ホウレンソウ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/hourensou.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'ほうれんそう露地栽培 施肥基準（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/pdf/05220119rensou.pdf', source: '農林水産省', type: 'pdf' },
    { title: '周年安定生産に向けたほうれんそう栽培マニュアル（PDF）', url: 'https://www.maff.go.jp/j/seisan/gizyutu/hukyu/h_zirei/brand/attach/pdf/201023_3-1.pdf', source: '農林水産省・富山県農業技術課', type: 'pdf' },
    { title: 'ほうれん草栽培マニュアル（PDF）', url: 'https://www.pref.miyagi.jp/documents/45159/horenso-manual.pdf', source: '宮城県・JA新みやぎ', type: 'pdf' },
  ],
  komatsuna: [
    { title: 'タキイのコマツナ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/komatsuna.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのコマツナ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/komatsuna.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'コマツナ栽培｜JA石川かほく', url: 'https://www.is-ja.jp/kahoku/saien/komatsuna.html', source: 'JA石川かほく', type: 'web' },
  ],
  mizuna: [
    { title: 'タキイのミズナ・ミブナ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/mizunamibuna.html', source: 'タキイ種苗', type: 'web' },
    { title: 'ミズナ 施肥基準・栽培指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-12.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'ミズナ・ミブナ｜トーホク種苗', url: 'https://www.tohokuseed.co.jp/beginners/mizuna.html', source: 'トーホク種苗', type: 'web' },
  ],
  chingensai: [
    { title: 'チンゲンサイ栽培方法｜タキイ種苗', url: 'https://www.takii.co.jp/tsk/fukuro/yasai/chingensai.html', source: 'タキイ種苗', type: 'web' },
    { title: '葉茎菜類 野菜栽培技術指針（チンゲンサイ含む）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-12.pdf', source: '農林水産省', type: 'pdf' },
  ],
  broccoli: [
    { title: 'タキイのブロッコリー・カリフラワー栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/broccoli_cauliflower.html', source: 'タキイ種苗', type: 'web' },
    { title: 'ブロッコリー栽培マニュアル（愛知県）', url: 'https://www.pref.aichi.jp/uploaded/attachment/517167.pdf', source: '愛知県農業総合試験場', type: 'pdf' },
    { title: '葉茎菜類 野菜栽培技術指針（ブロッコリー含む）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-12.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'JAえちご上越 ブロッコリー栽培マニュアル', url: 'https://www.pref.niigata.lg.jp/uploaded/attachment/375340.pdf', source: '新潟県上越農業普及指導センター', type: 'pdf' },
    { title: 'キャベツ・ブロッコリー グリーンな栽培体系マニュアル', url: 'https://www.pref.fukui.lg.jp/doc/fukui-noso/shienbu/guri-nnnasaibaihenotennkannsap_d/fil/kyabetuburokksenmanyuaru.pdf', source: '福井県農業試験場', type: 'pdf' },
  ],
  cauliflower: [
    { title: 'タキイのブロッコリー・カリフラワー栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/broccoli_cauliflower.html', source: 'タキイ種苗', type: 'web' },
    { title: 'カリフラワー栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-12.pdf', source: '農林水産省', type: 'pdf' },
    { title: '葉茎菜類 野菜栽培技術指針（カリフラワー含む）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-12.pdf', source: '農林水産省', type: 'pdf' },
  ],
  shungiku: [
    { title: 'タキイのシュンギク栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/shungiku.html', source: 'タキイ種苗', type: 'web' },
    { title: '春菊 栽培技術（JA全農）', url: 'https://www.jeinou.com/benri/garden/leaf_stem_vegetables/2011/12/281430.html', source: 'JA全農', type: 'web' },
    { title: '葉茎菜類 野菜栽培技術指針（シュンギク含む）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-12.pdf', source: '農林水産省', type: 'pdf' },
  ],
  nozawana: [
    { title: '野沢菜｜トーホク種苗', url: 'https://www.tohokuseed.co.jp/beginners/nozawana.html', source: 'トーホク種苗', type: 'web' },
    { title: 'ノザワナの作り方｜みんなの農業広場（JA全農）', url: 'https://www.jeinou.com/benri/garden/leaf_stem_vegetables/2012/05/310930.html', source: 'JA全農', type: 'web' },
    { title: '野沢菜 農薬使用基準（栽培概要含む）', url: 'https://www.pref.nagano.lg.jp/bojo/nouyaku/bojokijun/documents/6-23.pdf', source: '長野県', type: 'pdf' },
  ],
  celery: [
    { title: 'タキイのセルリー栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/celery.html', source: 'タキイ種苗', type: 'web' },
    { title: 'セロリ｜トーホク種苗', url: 'https://tohokuseed.co.jp/beginners/serori.html', source: 'トーホク種苗', type: 'web' },
  ],
  parsley: [
    { title: 'パセリ｜タキイ種苗 家庭菜園', url: 'https://www.takii.co.jp/tsk/kateisaien/parsley.html', source: 'タキイ種苗', type: 'web' },
    { title: 'パセリ｜トーホク種苗', url: 'https://www.tohokuseed.co.jp/beginners/parsley.html', source: 'トーホク種苗', type: 'web' },
    { title: 'パセリ栽培方法（PDF）', url: 'https://www.tohokuseed.co.jp/uploads/Manual/contents_0_6548299e11f0e.pdf', source: 'トーホク種苗', type: 'pdf' },
  ],
  'asparagus-green': [
    { title: 'アスパラガス収量性向上マニュアル（PDF）', url: 'https://www.pref.nagano.lg.jp/enchiku/sangyo/nogyo/engei-suisan/yasai/documents/aspragusmanual.pdf', source: '長野県農政部', type: 'pdf' },
    { title: 'アスパラガス枠板式高畝栽培マニュアル（PDF）', url: 'https://www.pref.nagano.lg.jp/enchiku/sangyo/nogyo/engei-suisan/yasai/documents/nagano_asupara.pdf', source: '長野県野菜花き試験場', type: 'pdf' },
    { title: 'アスパラガス栽培方法（PDF）', url: 'https://tohokuseed.co.jp/uploads/Manual/contents_0_64b1d390ec18d.pdf', source: 'トーホク種苗', type: 'pdf' },
  ],
  'white-asparagus': [
    { title: '筒状簡易軟白器具によるホワイトアスパラガスの栽培法', url: 'https://www.pref.nara.jp/22947.htm', source: '奈良県', type: 'web' },
    { title: 'ホワイトアスパラガス無培土栽培技術（PDF）', url: 'https://www.hro.or.jp/upload/19806/07.pdf', source: '北海道立花・野菜技術センター', type: 'pdf' },
  ],
  udo: [
    { title: 'ヤマウド栽培の基本（PDF）', url: 'https://www.takii.co.jp/tsk/bn/pdf/1305n_073_075.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: '山ウド栽培｜みんなの農業広場（JA全農）', url: 'https://www.jeinou.com/benri/others/2016/11/161410.html', source: 'JA全農', type: 'web' },
    { title: 'うど 栽培技術（PDF）', url: 'https://www.pref.yamanashi.jp/documents/24738/udo_1.pdf', source: '山梨県農業技術センター', type: 'pdf' },
  ],
  eisai: [
    { title: 'エンサイ（空芯菜）栽培技術', url: 'https://www.jeinou.com/benri/garden/leaf_stem_vegetables/2015/04/161000.html', source: 'JA全農', type: 'web' },
    { title: 'エンサイ｜トーホク種苗', url: 'https://www.tohokuseed.co.jp/beginners/ensai.html', source: 'トーホク種苗', type: 'web' },
    { title: 'エンサイの作り方｜みんなの農業広場（JA全農）', url: 'https://www.jeinou.com/benri/garden/leaf_stem_vegetables/2015/04/161000.html', source: 'JA全農', type: 'web' },
  ],
  kale: [
    { title: 'ケール｜トーホク種苗', url: 'https://www.tohokuseed.co.jp/beginners/kale.html', source: 'トーホク種苗', type: 'web' },
    { title: 'ケール 食べる健康ケール｜サカタのタネ', url: 'https://www.sakataseed.co.jp/product/item/?code=922371', source: 'サカタのタネ', type: 'web' },
  ],
  takana: [
    { title: 'タカナ｜トーホク種苗', url: 'https://www.tohokuseed.co.jp/beginners/takana.html', source: 'トーホク種苗', type: 'web' },
    { title: 'タカナ栽培方法（PDF）', url: 'https://tohokuseed.co.jp/uploads/Manual/contents_0_64e00f3fd5f04.pdf', source: 'トーホク種苗', type: 'pdf' },
  ],
  coriander: [
    { title: 'コリアンダー【サワディ】栽培ガイド', url: 'https://www.tokitaseed.co.jp/bai.php?varietycode=180101', source: 'トキタ種苗', type: 'web' },
  ],
  'leaf-shiso': [
    { title: 'シソ 栽培技術資料（PDF）', url: 'https://www.takii.co.jp/tsk/bn/pdf/20011028.pdf', source: 'タキイ種苗', type: 'pdf' },
  ],
  norabona: [
    { title: 'のらぼう菜｜江戸東京野菜について｜JA東京中央会', url: 'https://www.tokyo-ja.or.jp/farm/edo/15.php', source: 'JA東京中央会', type: 'web' },
    { title: 'のらぼう菜のトンネル栽培（PDF）', url: 'https://www.tokyo-aff.or.jp/uploaded/attachment/7043.pdf', source: '東京都農林水産振興財団', type: 'pdf' },
    { title: '伝統野菜「比企のらぼう菜」の復活（PDF）', url: 'https://www.maff.go.jp/j/seisan/gizyutu/hukyu/h_zirei/pdf/6-11saitama.pdf', source: '農林水産省', type: 'pdf' },
  ],
  nabana: [
    { title: '第12節 なばな類 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/pdf/miyagi_yasai18_15.pdf', source: '農林水産省（宮城県）', type: 'pdf' },
    { title: 'ナバナ類 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-23.pdf', source: '農林水産省', type: 'pdf' },
  ],
  fuki: [
    { title: 'フキの植えつけと上手な管理｜JA埼玉中央', url: 'https://www.ja-sc.or.jp/consult/huki_zyouzunakanri/', source: 'JA埼玉中央', type: 'web' },
    { title: '山フキの栽培（PDF）', url: 'https://www.takii.co.jp/tsk/bn/pdf/20080159.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: '葉茎菜類 フキ 栽培方法（PDF）', url: 'https://www.pref.shiga.lg.jp/file/attachment/1049335.pdf', source: '滋賀県農業技術振興センター', type: 'pdf' },
  ],
  chicory: [
    { title: 'チコリ（キク科キクニガナ属）野菜もの知り百科｜JAあつぎ', url: 'https://www.ja-atsugi.or.jp/learn/garden/knowing/2021/12.html', source: 'JAあつぎ', type: 'web' },
    { title: 'チコリ（アンディーブ）栽培（PDF）', url: 'https://www.takii.co.jp/tsk/bn/pdf/20100879.pdf', source: 'タキイ種苗', type: 'pdf' },
  ],
  warabi: [
    { title: '山菜の栽培技術指針 ワラビ（PDF）', url: 'https://www.pref.tokushima.lg.jp/file/attachment/436109.pdf', source: '徳島県農林水産部', type: 'pdf' },
    { title: 'ワラビ栽培方法（PDF）', url: 'https://www.pref.yamanashi.jp/documents/24738/warabi_1.pdf', source: '山梨県', type: 'pdf' },
    { title: 'ワラビポット苗づくり（PDF）', url: 'https://www.pref.yamagata.jp/documents/3843/warabi.pdf', source: '山形県', type: 'pdf' },
  ],
  taranoki: [
    { title: '山菜類 野菜栽培技術指針（タラノメ含む）（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-24.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'タラノキの育て方とタラノメ収穫時期の調整（PDF）', url: 'https://www.hro.or.jp/upload/3848/kiho76-5.pdf', source: '北海道立総合研究機構', type: 'pdf' },
    { title: 'タラノキ栽培技術指針（PDF）', url: 'https://www.pref.ishikawa.lg.jp/ringyo/publish/documents/sansai_1.pdf', source: '石川県林業経営課', type: 'pdf' },
  ],
  daikon: [
    { title: 'タキイのダイコン栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/daikon.html', source: 'タキイ種苗', type: 'web' },
    { title: 'だいこん栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-7.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'ダイコンのつくりかた（岐阜県農業技術センター）', url: 'https://www.gifu-agri.jp/pdf/h22-yasai/daikon.pdf', source: '岐阜県農業技術センター', type: 'pdf' },
  ],
  carrot: [
    { title: 'タキイのニンジン栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/ninjin.html', source: 'タキイ種苗', type: 'web' },
    { title: 'にんじん栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-7.pdf', source: '農林水産省', type: 'pdf' },
    { title: '夏まきにんじん栽培マニュアル（PDF）', url: 'https://www.maff.go.jp/j/seisan/gizyutu/hukyu/h_zirei/brand/attach/pdf/201023_3-42.pdf', source: '農林水産省（富山県農業技術課）', type: 'pdf' },
    { title: 'にんじん栽培マニュアル（アルプス農協）', url: 'https://ja-alps.jp/img/2023417/R5%E3%81%AB%E3%82%93%E3%81%98%E3%82%93.pdf', source: 'JA長野（アルプス農協）', type: 'pdf' },
    { title: 'ニンジン栽培技術資料（JA全農とやま）', url: 'https://www.zennoh.or.jp/ty/einou/vegetable/pdf/farm_ninjin.pdf', source: 'JA全農とやま', type: 'pdf' },
  ],
  turnip: [
    { title: 'タキイのカブ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/kabu.html', source: 'タキイ種苗', type: 'web' },
    { title: 'カブ栽培のために（PDF）', url: 'https://www.pref.chiba.lg.jp/annou/documents/02ecocard-kokabu.pdf', source: '千葉県農林水産部', type: 'pdf' },
  ],
  gobou: [
    { title: 'タキイのゴボウ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/burdock.html', source: 'タキイ種苗', type: 'web' },
    { title: 'ごぼう栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-7.pdf', source: '農林水産省', type: 'pdf' },
  ],
  'lotus-root': [
    { title: 'れんこんの適正施肥マニュアル（PDF）', url: 'https://www.pref.ibaraki.jp/nourinsuisan/nougi/documents/2203renkonmanual.pdf', source: '茨城県農林水産部', type: 'pdf' },
    { title: 'れんこんのグリーンな栽培体系マニュアル（PDF）', url: 'https://www.pref.tokushima.lg.jp/file/attachment/935120.pdf', source: '徳島県', type: 'pdf' },
  ],
  satoimo: [
    { title: 'さといもの栽培方法｜農林水産省', url: 'https://www.maff.go.jp/j/kids/crops/taro/cultivation01.html', source: '農林水産省', type: 'web' },
    { title: 'さといも栽培マニュアル（PDF）', url: 'https://ja-alps.jp/img/2023417/R5%E3%81%95%E3%81%A8%E3%81%84%E3%82%82.pdf', source: 'JA長野（アルプス農協）', type: 'pdf' },
  ],
  wakegi: [
    { title: 'タキイのネギ栽培マニュアル（ワケギ含む）', url: 'https://www.takii.co.jp/tsk/manual/negi.html', source: 'タキイ種苗', type: 'web' },
    { title: 'ワケギ 家庭菜園｜JAさが', url: 'http://jasaga.or.jp/kateisaien/yasai/wakegi', source: 'JAさが', type: 'web' },
  ],
  nagaimo: [
    { title: '山芋（ヤマイモ）の栽培方法・育て方', url: 'https://shop.takii.co.jp/simages/shop/selection/yamaimo1312.html', source: 'タキイ種苗', type: 'web' },
    { title: '野菜栽培技術指針（根菜類・いも類）（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-7.pdf', source: '農林水産省', type: 'pdf' },
  ],
  jinenjo: [
    { title: '自然薯の栽培方法・育て方', url: 'https://shop.takii.co.jp/simages/shop/selection/yamaimo1312_02.html', source: 'タキイ種苗', type: 'web' },
    { title: 'じねんじょの養分吸収特性に基づく省力的施肥（PDF）', url: 'https://www.maff.go.jp/j/seisan/gizyutu/hukyu/h_zirei/brand/attach/pdf/201023_3-34.pdf', source: '農林水産省', type: 'pdf' },
  ],
  edamame: [
    { title: 'タキイのエダマメ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/edamame.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのエダマメ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/edamame.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: '豆類 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-20.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'えだまめ栽培マニュアル（燕市農業再生協議会）', url: 'https://www.city.tsubame.niigata.jp/material/files/group/17/tsubame_edamame_r4.pdf', source: '燕市農業再生協議会（新潟県）', type: 'pdf' },
    { title: '奄美地域 エダマメ栽培マニュアル', url: 'https://www.pref.kagoshima.jp/ag11/pop-tech/nenndo/documents/82280_20240611103327-1.pdf', source: '鹿児島県農業開発総合センター', type: 'pdf' },
  ],
  'green-beans': [
    { title: 'タキイのインゲン栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/ingen.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのインゲン栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/ingen.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: '豆類 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-20.pdf', source: '農林水産省', type: 'pdf' },
    { title: '品目別の栽培方法 マメ類 インゲン', url: 'https://www.pref.shiga.lg.jp/file/attachment/1049295.pdf', source: '滋賀県農業技術振興センター', type: 'pdf' },
  ],
  'snap-pea': [
    { title: 'タキイのエンドウ栽培マニュアル（スナップエンドウ含む）', url: 'https://www.takii.co.jp/tsk/manual/endou.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのエンドウ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/endou.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: '豆類 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-20.pdf', source: '農林水産省', type: 'pdf' },
  ],
  sayaendou: [
    { title: 'タキイのエンドウ栽培マニュアル（サヤエンドウ含む）', url: 'https://www.takii.co.jp/tsk/manual/endou.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのエンドウ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/endou.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: '豆類 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-20.pdf', source: '農林水産省', type: 'pdf' },
  ],
  'minori-endou': [
    { title: 'タキイのエンドウ栽培マニュアル（実エンドウ含む）', url: 'https://www.takii.co.jp/tsk/manual/endou.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのエンドウ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/endou.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: '豆類 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-20.pdf', source: '農林水産省', type: 'pdf' },
  ],
  'broad-bean': [
    { title: 'タキイのソラマメ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/soramame.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのソラマメ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/tools/y_manual_pdf/y_manual_soramame.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: '豆類 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-20.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'ソラマメの露地栽培に適した品種と整枝方法', url: 'https://www.pref.kumamoto.jp/uploaded/attachment/101622.pdf', source: '熊本県農政部', type: 'pdf' },
    { title: 'そらまめ栽培基準（千葉県）', url: 'https://www.pref.chiba.lg.jp/annou/documents/36ecocard-soramame.pdf', source: '千葉県農林水産部', type: 'pdf' },
  ],
  'sweet-corn': [
    { title: 'タキイのスイートコーン栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/corn.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのスイートコーン栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/corn.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'スイートコーン 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/pdf/miyagi_yasai18_11.pdf', source: '農林水産省（宮城県）', type: 'pdf' },
    { title: 'スイートコーン栽培マニュアル（長野県）', url: 'https://www.pref.nagano.lg.jp/nogi/midori/documents/r5-manyuaru_matsumoto.pdf', source: '長野県農業農村支援センター', type: 'pdf' },
    { title: 'スイートコーン栽培管理資料（JA福岡京築）', url: 'https://www.ja-kei.or.jp/wp/wp-content/themes/ja-kei/pdf/r7-cone1-h.pdf', source: 'JA福岡京築', type: 'pdf' },
  ],
  potato: [
    { title: 'タキイのジャガイモ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/potato.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのジャガイモ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/potato.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'じゃがいもの栽培方法｜農林水産省', url: 'https://www.maff.go.jp/j/kids/crops/potato/cultivation01.html', source: '農林水産省', type: 'web' },
    { title: 'バレイショ大規模栽培マニュアル（JA全農とやま）', url: 'https://www.zennoh.or.jp/ty/einou/vegetable/pdf/farm_bareisho.pdf', source: 'JA全農とやま', type: 'pdf' },
    { title: 'ばれいしょ栽培マニュアル（アルプス農協）', url: 'https://ja-alps.jp/img/2023417/R5%E3%81%B0%E3%82%8C%E3%81%84%E3%81%97%E3%82%87.pdf', source: 'JA長野（アルプス農協）', type: 'pdf' },
  ],
  'sweet-potato': [
    { title: 'タキイのサツマイモ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/sweetpotato.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのサツマイモ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/sweetpotato.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'サツマイモ栽培技術指針（千葉県）', url: 'https://www.pref.chiba.lg.jp/ninaite/seikafukyu/documents/r4-06-satumaimosaibai.pdf', source: '千葉県農林水産技術会議', type: 'pdf' },
  ],
  onion: [
    { title: 'タキイのタマネギ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/tamanegi.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのタマネギ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/tamanegi.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: '加工業務用タマネギ栽培の手引き（PDF）', url: 'https://www.maff.go.jp/j/seisan/gizyutu/hukyu/h_zirei/brand/attach/pdf/201023_3-23.pdf', source: '農林水産省', type: 'pdf' },
    { title: '機械化一貫体系によるタマネギ栽培マニュアル（茨城県）', url: 'https://www.pref.ibaraki.jp/nourinsuisan/enken/manual/documents/onionmanual2020.pdf', source: '茨城県農業総合センター', type: 'pdf' },
    { title: '東北地域における春まきタマネギ栽培マニュアル（農研機構）', url: 'https://www.naro.go.jp/publicity_report/publication/files/Onion_Manual.pdf', source: '農研機構', type: 'pdf' },
  ],
  garlic: [
    { title: 'ニンニク 上手に育てる・貯蔵する｜タキイ種苗', url: 'https://shop.takii.co.jp/selection/garlic1208.html', source: 'タキイ種苗', type: 'web' },
    { title: 'ニンニク栽培マニュアル（PDF）', url: 'https://www.midorinet.or.jp/overview/wp-content/uploads/sites/4/2025/02/ninnniku.pdf', source: 'JA庄内みどり', type: 'pdf' },
    { title: 'ニンニク栽培暦（PDF）', url: 'https://www.ja-nanto.or.jp/farming/document/family-farm/garlic.pdf', source: 'JA南砺', type: 'pdf' },
  ],
  rakkyo: [
    { title: 'ラッキョウの栽培方法｜タキイ種苗', url: 'https://shop.takii.co.jp/selection/rakkyou1308.html', source: 'タキイ種苗', type: 'web' },
    { title: 'ラッキョウの育て方｜JA晴れの国岡山', url: 'https://www.ja-hareoka.or.jp/agri_food/kateisaien/2023/041/', source: 'JA晴れの国岡山', type: 'web' },
  ],
  negi: [
    { title: 'タキイのネギ栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/negi.html', source: 'タキイ種苗', type: 'web' },
    { title: 'タキイのネギ栽培マニュアル（PDF）', url: 'https://www.takii.co.jp/tsk/manual/pdf/negi.pdf', source: 'タキイ種苗', type: 'pdf' },
    { title: 'ねぎ栽培作業体系マニュアル（PDF）', url: 'https://www.maff.go.jp/tohoku/seisan/gurisapo/attach/pdf/gurisapo-8.pdf', source: '農林水産省 東北農政局', type: 'pdf' },
    { title: '加工・業務用葉ねぎ栽培管理マニュアル（香川県）', url: 'https://www.pref.kagawa.lg.jp/documents/23127/hanegi-vol2.pdf', source: '香川県農業試験場', type: 'pdf' },
    { title: '白ネギ栽培の手引き（JA福岡京築）', url: 'https://www.ja-kei.or.jp/wp/wp-content/themes/ja-kei/pdf/r6-white_onion1-h.pdf', source: 'JA福岡京築・京築普及指導センター', type: 'pdf' },
  ],
  nira: [
    { title: 'ニラ 栽培技術指針', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-6.pdf', source: '農林水産省', type: 'pdf' },
    { title: 'ニラ 野菜栽培技術指針（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-6.pdf', source: '農林水産省', type: 'pdf' },
  ],
  ginger: [
    { title: '生姜（ショウガ）の栽培方法・育て方｜タキイ種苗', url: 'https://shop.takii.co.jp/simages/shop/selection/ginger1402.html', source: 'タキイ種苗', type: 'web' },
    { title: '露地ショウガ産地のための栽培マニュアル 熊本県（PDF）', url: 'https://www.affrc.maff.go.jp/docs/pdf/kumamoto_manual.pdf', source: '農林水産省 農研機構', type: 'pdf' },
    { title: '露地ショウガ産地のための栽培マニュアル 高知県（PDF）', url: 'https://www.affrc.maff.go.jp/docs/pdf/kouchi_manual.pdf', source: '農林水産省 農研機構', type: 'pdf' },
  ],
  'leaf-ginger': [
    { title: '生姜（ショウガ・葉ショウガ）の栽培方法・育て方｜タキイ種苗', url: 'https://shop.takii.co.jp/simages/shop/selection/ginger1402.html', source: 'タキイ種苗', type: 'web' },
    { title: '露地ショウガ栽培マニュアル（葉ショウガ含む）（PDF）', url: 'https://www.affrc.maff.go.jp/docs/pdf/kumamoto_manual.pdf', source: '農林水産省 農研機構', type: 'pdf' },
  ],
  myoga: [
    { title: 'みょうが栽培暦（PDF）', url: 'https://www.ja-nanto.or.jp/farming/document/family-farm/myouga.pdf', source: 'JA南砺', type: 'pdf' },
    { title: '山菜類 野菜栽培技術指針（ミョウガ含む）（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-25.pdf', source: '農林水産省', type: 'pdf' },
  ],
  mitsuba: [
    { title: 'ミツバ 栽培マニュアル（PDF）', url: 'https://jaimari.saga-ja.jp/assets/pdf/vegetable/m02.pdf', source: 'JA伊万里（佐賀県）', type: 'pdf' },
    { title: '根みつば露地・トンネル栽培 技術資料（PDF）', url: 'https://www.maff.go.jp/j/seisan/kankyo/hozen_type/h_sehi_kizyun/attach/pdf/aki3-25.pdf', source: '農林水産省', type: 'pdf' },
  ],
};
