import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  MonitorSmartphone, 
  Sparkles, 
  TrendingUp, 
  Calendar, 
  ExternalLink,
  HeartHandshake,
  Lightbulb,
  Target,
  ChevronRight
} from 'lucide-react';

const timelineData = [
  { date: "1990年〜2010年", title: "父の会社を立ち上げからサポート" },
  { date: "2010年〜2015年", title: "会計事務所勤務" },
  { date: "2015年〜2020年", title: "ウェディング映像編集（フリーランス）" },
  { date: "2020年11月", title: "レーザー加工（オリジナル商品製造加工）開始" },
  { date: "2021年6月", title: "マーケティング学ぶ" },
  { date: "2021年7月", title: "デジタル化応援隊専門家登録" },
  { date: "2021年12月", title: "中小企業119専門家派遣登録" },
  { date: "2022年3月", title: "いばらきグローバル推進機構専門家登録" },
  { date: "2022年7月", title: "Google式10X仕事デザイナー認定" },
  { date: "2023年4月", title: "経済産業省認可『わたしの起業応援団』\nPCが苦手な事業者のためのデジタル応援団（動画編集及びICT担当）" },
  { date: "2024年4月", title: "茨城県よろず支援拠点スタートアップサポーター" },
  { date: "2024年7月", title: "エキスパートバンク事業専門家" },
  { date: "2026年", title: "茨城県よろず支援拠点コーディネーター" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-orange-200">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <div className="font-bold text-lg tracking-tight text-slate-900">
            夢実工房 <span className="text-orange-500 font-normal mx-1">|</span> Yumemi AI Lab
          </div>
        </div>
      </header>

      <main>
        {/* Greeting & Profile (Moved to Top) */}
        <section className="pt-32 pb-20 bg-white px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative">
                  <img 
                    src="/my-photo.png" 
                    alt="千田悦子" 
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 bg-orange-100 w-32 h-32 rounded-full -z-10 blur-2xl"></div>
                <div className="absolute -top-6 -left-6 bg-amber-100 w-32 h-32 rounded-full -z-10 blur-2xl"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6">
                  <HeartHandshake className="w-4 h-4" />
                  ご挨拶
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  伝統と革新の架け橋として
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    こんにちは。茨城県よろず支援拠点コーディネーターの <strong className="text-slate-900">千田悦子（チダエツコ）</strong> です。
                  </p>
                  <p>
                    私の根底にあるのは、父のもとで20年間、工場での現場を肌で感じながら学んできた経営の心です。経営者が抱える孤独や、日々の試行錯誤の重みを深く理解しています。
                  </p>
                  <p>
                    一方で、現在はマーケティングやデジタル活用の専門家として、最新のテクノロジーをいかに商売に活かすかを追求しています。私自身も、レーザー加工事業「夢実（ゆめみ）工房」や、AI活用を支援する「Yumemi AI Lab」を運営する現役の個人事業主です。
                  </p>
                  <p className="text-lg font-medium text-slate-800 border-l-4 border-orange-500 pl-4 mt-6">
                    「教える人」ではなく、「一緒に汗をかくパートナー」として、あなたの事業に伴走します。
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Timeline */}
            <div className="mt-24 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-center text-slate-900 mb-12">経歴・実績</h3>
              <div className="relative border-l-2 border-orange-200 ml-4 md:ml-8 space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative pl-8 md:pl-10"
                  >
                    {/* Dot */}
                    <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
                    <div className="flex flex-col bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-sm font-bold text-orange-600 mb-2">{item.date}</span>
                      <span className="text-slate-700 font-medium whitespace-pre-wrap leading-relaxed">{item.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">私がお手伝いできること</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                ITが苦手な方でも安心して取り組めるよう、専門用語を使わずにサポートします。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <MonitorSmartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">SNS・ホームページ<br/>活用支援</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>SNS発信の第一歩：</strong>「何から始めればいい？」を一緒に整理します。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>Canvaでデザイン：</strong>チラシや投稿をおしゃれに、簡単に作るコツを伝授。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong>HP制作相談：</strong>難しい仕組みは抜きにして、伝わるページ作りを考えます。</span>
                  </li>
                </ul>
              </motion.div>

              {/* Service 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full -z-10 opacity-50"></div>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">生成AI・最新ツールの<br/>導入</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>業務の効率化：</strong>AI（Google Geminiなど）を使って、事務作業の時間を半分にする方法を提案。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>新しい仕組み作り：</strong>ツールを使いこなし、本業に集中できる環境を整えます。</span>
                  </li>
                </ul>
              </motion.div>

              {/* Service 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">経営・補助金<br/>相談</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>次の一手：</strong>売上アップや事業拡大に向けた戦略を一緒に練ります。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>資金活用：</strong>あなたの事業で使える補助金の情報提供や申請のアドバイス。</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Businesses */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">運営事業のご紹介</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">夢実（ゆめみ）工房</h4>
                  <p className="text-sm text-slate-600">レーザー加工技術を用いたものづくり。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Yumemi AI Lab</h4>
                  <p className="text-sm text-slate-600">中小企業・小規模事業者のためのAI導入・ICT支援。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Message & Subtle CTA (Moved to Bottom) */}
        <section className="py-24 px-6 bg-orange-50/50 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
                あなたの経営に寄り添う<br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  伴走者
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                「ITやデジタルは難しそう…」と感じている経営者の皆さんの不安を、
                <br className="hidden md:block" />
                <span className="font-semibold text-slate-800">「これなら自分にもできる！」</span>というワクワクに変えるお手伝いをしています。
              </p>

              <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm max-w-2xl mx-auto mt-12">
                <p className="text-lg font-medium text-slate-800 mb-4">
                  「こんなこと聞いてもいいのかな？」と思うことこそ、<br className="hidden md:block"/>ぜひご相談ください。
                </p>
                <p className="text-slate-600 mb-8">
                  相談は何度でも無料です。まずは、あなたの「今の想い」を聞かせてください。<br/>
                  あなたの商売がもっと楽しく、もっと楽になる未来を一緒に創りましょう。
                </p>
                
                {/* Subtle Links */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                  <a 
                    href="https://forms.gle/tXVj4QseedwvMMBT7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors group"
                  >
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="underline underline-offset-4">無料個別相談のお申し込み</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                  <a 
                    href="https://calendar.app.google/Z1hRFZk9s9G7VcmdA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors group"
                  >
                    <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="underline underline-offset-4">予約カレンダー</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} 夢実工房 / Yumemi AI Lab. All rights reserved.</p>
      </footer>
    </div>
  );
}
