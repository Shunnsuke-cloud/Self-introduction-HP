// Public-facing copy, URLs and image settings live here for easy updates.
export const navigation = [
  { label: "About", href: "#about" },
  { label: "Favorites", href: "#favorites" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#connect" },
];

export const home = [
  "新しいことを知るのが好き。自分のアイデアが形になる瞬間が好き。そして、仲間と一緒に何かをつくることも好き。",
  "福岡のIT専門学校でWebアプリケーション開発を学びながら、個人開発やチーム開発など、興味を持ったことに挑戦しています。",
  "現在は2028年卒業予定の学生として、Webエンジニアを目指して就職活動中です。",
];

export const about = [
  "福岡デザイン＆テクノロジー専門学校で、Webアプリケーション開発を中心に学んでいます。",
  "私は、新しいことを知ったり、興味を持ったことに挑戦したりするのが好きです。",
  "特にプログラミングでは、自分で書いたコードが思い通りに動いた瞬間に、大きな達成感を感じます。その楽しさから、授業で学ぶだけでなく、個人でWebアプリケーションを開発するようになりました。",
  "また、サークルやハッカソン、インターンシップなどでのチーム開発を通じて、仲間とアイデアを出し合い、一つのものを作り上げる面白さも感じています。",
  "現在はWebエンジニアを目指して就職活動をしています。まずはエンジニアとして技術力と開発経験を積み、将来的にはプロジェクトマネージャーなどのマネジメント側に進みたいと考えています。",
  "技術を理解したうえで、メンバーそれぞれの力を活かしながら、チームでアイデアを形にできる人になることが目標です。",
];

export const profile = [
  ["名前", "占部 駿祐（Shunsuke Urabe）"],
  ["学校", "福岡デザイン＆テクノロジー専門学校"],
  ["学科", "スーパークリエーター科"],
  ["専攻", "ホワイトハッカー専攻"],
  ["卒業予定", "2028年3月"],
  ["活動拠点", "福岡"],
  ["希望職種", "Webエンジニア"],
  ["将来の目標", "プロジェクトマネージャー"],
];

export const favorites = [
  {
    title: "博多祇園山笠", english: "LOCAL CULTURE", image: "/images/favorites/yamakasa.jpg",
    alt: "博多祇園山笠で、法被姿の参加者たちが山笠を囲む様子", position: "50% 48%",
    paragraphs: ["地元・福岡の伝統行事である博多祇園山笠に参加しています。", "地域の人たちと関わりながら、みんなで一つの行事をつくり上げる時間が好きです。自分にとって大切な活動の一つです。"],
  },
  {
    title: "野球", english: "BASEBALL", image: "/images/favorites/baseball.jpg",
    alt: "球場でホークスのタオルを持ち、黄色のユニフォームを着た占部駿祐", position: "50% 48%",
    paragraphs: ["野球が好きで、福岡ソフトバンクホークスを応援しています。", "試合を見ながら一喜一憂する時間も、楽しみの一つです。"],
  },
  {
    title: "プログラミング・ものづくり", english: "PROGRAMMING", image: "/images/favorites/programming.jpg",
    alt: "眼鏡をかけ、ノートパソコンで開発に取り組む占部駿祐", position: "50% 40%",
    paragraphs: ["新しい技術を調べたり、思いついたアイデアをWebアプリとして形にしたりすることが好きです。", "うまく動かずに悩むこともありますが、試行錯誤の末に思い通りに動いた瞬間には、大きな達成感があります。"],
  },
  {
    title: "韓国の文化", english: "KOREAN CULTURE", image: "/images/favorites/korea.jpg",
    alt: "野菜とユッケが盛り付けられた韓国料理とスープ", position: "50% 58%",
    paragraphs: ["韓国ドラマや韓国料理、K-popが好きです。", "ドラマを見たり、音楽を聴いたり、おいしい韓国料理を楽しんだりする時間が好きで、韓国のさまざまな文化に興味があります。"],
  },
];

type Activity = {
  title: string; category: string; kind: "development" | "community" | "team" | "event";
  paragraphs: string[]; image?: string; alt?: string; href?: string; linkLabel?: string;
};

// User-provided official logo. Leave undefined to use the icon fallback.
const ventureLogo: string | undefined = "/images/activities/tech-c-venture.png";
// Switch to false if permission to use the supplied event image has not been confirmed.
export const showJphacksImage: boolean = true;

export const activities: Activity[] = [
  {
    title: "個人開発", category: "PERSONAL DEVELOPMENT", kind: "development",
    image: "/images/activities/intelliflow.png", alt: "個人開発アプリ IntelliFlow の実際のトップページ",
    href: "https://github.com/Shunnsuke-cloud", linkLabel: "GitHubで活動を見る",
    paragraphs: ["自分で考えたアイデアを形にしたいという思いから、Webアプリケーションの個人開発に取り組んでいます。", "企画から設計、実装まで自分で考え、試行錯誤しながら開発を進めています。", "新しい技術を試したり、思い描いた機能が実際に動いたりすることに、ものづくりの楽しさを感じています。"],
  },
  {
    title: "Tech. C. Venture", category: "COMMUNITY", kind: "community",
    image: ventureLogo, alt: "Tech. C. Venture 公式ロゴ",
    href: "https://f-tcv.com/", linkLabel: "サークルのサイトへ",
    paragraphs: ["学校のIT系サークル「Tech. C. Venture」で、チームでの企画・開発や作品展示などに取り組んでいます。", "博多どんたくをテーマにしたクイズコンテンツの制作では、アイデアを出すだけでなく、リーダーをサポートする立場として、メンバーから出た意見をまとめたり、積極的にコミュニケーションを取ったりすることを意識しました。", "この活動を通じて、一人ひとりの意見を大切にしながら、チームで協力して一つのものを形にする楽しさを学びました。"],
  },
  {
    title: "インターンシップ", category: "INTERNSHIP", kind: "team",
    paragraphs: ["インターンシップでは、チームリーダーとして開発に取り組みました。", "初対面のメンバー同士でも話しやすい雰囲気をつくるため、最初にアイスブレイクを行い、積極的にコミュニケーションを取ることを意識しました。", "また、開発中も周囲の様子に気を配り、集中力が切れてきたと感じたときには、声をかけたり、休憩を提案したりするなど、チームが前向きに取り組めるよう工夫しました。", "この経験から、チームをまとめるには、開発の進捗だけでなく、メンバー一人ひとりの様子にも目を向けることが大切だと学びました。", "将来、プロジェクトマネジメントに関わりたいと考えるうえでも、大切な経験になっています。"],
  },
  {
    title: "ハッカソン・学外活動", category: "BEYOND THE CLASSROOM", kind: "event",
    image: showJphacksImage ? "/images/activities/jphacks.jpg" : undefined,
    alt: "提供された JPHACKS 2026 のイベントビジュアル",
    paragraphs: ["ハッカソンや技術イベントなど、学校の外での活動にも積極的に参加しています。", "初めて会う人とチームを組んだり、限られた時間の中でアイデアを形にしたりする経験は、自分にとって大きな刺激になっています。", "新しい技術や考え方に触れながら、これからもさまざまなことに挑戦していきたいです。"],
  },
];

export const connect = [
  "このホームページを通じて、少しでも私のことを知っていただけたら嬉しいです。",
  "現在は2028年卒業予定の学生として、Webエンジニアを目指して就職活動をしています。",
  "企業の採用担当者の方からのカジュアル面談や採用に関するご連絡はもちろん、技術や開発、サークル活動についての交流も歓迎しています。",
  "少しでも興味を持っていただけたら、ぜひお気軽にご連絡ください。",
];
export const email = "u.shunke@gmail.com";
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Shunnsuke-cloud" },
  { label: "Zenn", href: "https://zenn.dev/shunn0429" },
  { label: "Wantedly", href: "https://www.wantedly.com/id/shunsuke_urabe_a" },
  { label: "Tech. C. Venture", href: "https://f-tcv.com/" },
];
