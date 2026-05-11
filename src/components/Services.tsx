const services = [
  {
    name: "AIお困りごとWeb診断",
    price: "無料",
    priceNote: null,
    description: "3分で終わるWeb診断。AIでお仕事のどこが楽になるかが見える化できます。",
    cta: { label: "無料で診断する", href: "https://shindan.will0511.com" },
    highlight: false,
  },
  {
    name: "AIお困りごと診断レポート",
    price: "11,000",
    priceNote: "円（税込）",
    description:
      "診断結果をもとに、お客さまの今のお仕事に合わせたレポートをお届けします。",
    cta: null,
    highlight: false,
  },
  {
    name: "AI導入はじめの一歩パック",
    price: "88,000",
    priceNote: "円（税込）",
    description: "AIを使い始めるために必要なサポートをまとめたパックです。",
    details: [
      "ChatGPT / Claude 初期設定",
      "スマホ・PCの使い方サポート",
      "業務整理（AIでできることの洗い出し）",
      "SNS・チラシ・求人・メール・LINE文の作成支援",
      "社内プロンプト整備",
      "30日間フォロー付き",
    ],
    cta: null,
    highlight: true,
  },
];

const plans = [
  {
    category: "法人向けAI研修",
    items: [
      { name: "ライト", price: "165,000円〜" },
      { name: "スタンダード", price: "330,000円〜", recommended: true },
      { name: "プレミアム", price: "550,000円〜" },
    ],
  },
  {
    category: "月額AI伴走サポート",
    items: [
      { name: "ライト", price: "33,000円/月" },
      { name: "スタンダード", price: "55,000円/月", recommended: true },
      { name: "プレミアム", price: "110,000円/月" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-indigo-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          提供サービス
        </h2>
        <p className="mt-3 text-center text-sm text-gray-500">
          お困りごとの大きさに合わせて、必要なサポートをお選びいただけます。
        </p>

        {/* メインサービスカード */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className={`bg-white rounded-xl p-6 flex flex-col ${
                s.highlight
                  ? "ring-2 ring-indigo-600 shadow-md"
                  : "border border-gray-100 shadow-sm"
              }`}
            >
              {s.highlight && (
                <span className="self-start text-xs bg-indigo-600 text-white px-2.5 py-0.5 rounded-full mb-3">
                  おすすめ
                </span>
              )}
              <h3 className="text-lg font-bold text-gray-900">{s.name}</h3>
              <p className="mt-2">
                <span
                  className={`text-2xl font-bold ${
                    s.price === "無料" ? "text-indigo-600" : "text-gray-900"
                  }`}
                >
                  {s.price}
                </span>
                {s.priceNote && (
                  <span className="text-sm text-gray-500">{s.priceNote}</span>
                )}
              </p>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {s.description}
              </p>
              {s.details && (
                <ul className="mt-3 space-y-1.5">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="text-sm text-gray-500 flex items-start gap-2"
                    >
                      <span className="text-indigo-600 mt-0.5 flex-shrink-0">
                        &#10003;
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              {s.cta && (
                <a
                  href={s.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 inline-block text-center bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  {s.cta.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* 研修・伴走プラン */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.category}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900">
                {plan.category}
              </h3>
              <div className="mt-4 space-y-3">
                {plan.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                  >
                    <span className="text-sm text-gray-700 flex items-center gap-2">
                      {item.name}
                      {item.recommended && (
                        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                          おすすめ
                        </span>
                      )}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          ※ 表示価格はすべて税込です。詳細はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
