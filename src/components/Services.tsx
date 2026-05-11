const services = [
  {
    title: "AIお困りごと診断・導入支援",
    badge: "主力サービス",
    description:
      "まずは3分の無料診断から。お困りごとを整理し、AIでできることをご提案します。",
    details: [
      "ChatGPT / Claude 初期設定・業務整理",
      "SNS・メール・LINE文章作成支援",
      "法人向けAI研修（ライト / スタンダード / プレミアム）",
      "月額AI伴走サポート",
    ],
    link: "https://shindan.will0511.com",
    linkLabel: "無料診断はこちら",
  },
  {
    title: "AI補助金スタジオ",
    description: "AIを活用した補助金診断・申請サポート。対象の補助金をお調べします。",
    details: ["補助金診断", "申請サポート"],
    link: "https://hojokin.will0511.com",
    linkLabel: "詳しく見る",
  },
  {
    title: "AIテキストスタジオ",
    description: "講座やセミナーの教材をAIで自動生成するサービスです。",
    details: ["講座教材自動生成"],
    /* TODO: リンク先が確定したらURLを差し替えてください */
    link: "#",
    linkLabel: "準備中",
  },
  {
    title: "楽天モバイル代理店",
    description:
      "スマホ・通信環境の見直しをサポートします。お気軽にご相談ください。",
    details: ["スマホ・通信環境の見直しサポート"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-indigo-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          事業内容
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                {s.badge && (
                  <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                    {s.badge}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {s.description}
              </p>
              <ul className="mt-3 space-y-1">
                {s.details.map((d) => (
                  <li
                    key={d}
                    className="text-sm text-gray-500 flex items-start gap-2"
                  >
                    <span className="text-indigo-600 mt-0.5">&#10003;</span>
                    {d}
                  </li>
                ))}
              </ul>
              {s.link && (
                <a
                  href={s.link}
                  target={s.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-auto pt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  {s.linkLabel} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
