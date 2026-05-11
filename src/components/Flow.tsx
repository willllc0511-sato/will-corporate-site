const steps = [
  {
    num: "1",
    title: "無料診断（3分）",
    description: "Webで簡単な質問に答えるだけ。お困りごとを整理します。",
  },
  {
    num: "2",
    title: "結果に合わせてご提案",
    description:
      "診断結果をもとに、お客さまの今のお仕事に合ったサポートをご案内します。",
  },
  {
    num: "3",
    title: "設定・使い方サポート",
    description:
      "AIの初期設定から使い方まで、対面またはオンラインで丁寧にサポートします。",
  },
  {
    num: "4",
    title: "必要に応じて継続支援",
    description:
      "月額サポートや研修など、お客さまのペースに合わせた継続支援もご用意しています。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          ご利用の流れ
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-bold">
                {step.num}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute" />
              )}
              <h3 className="mt-4 font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://shindan.will0511.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            まずは無料診断から始める
          </a>
        </div>
      </div>
    </section>
  );
}
