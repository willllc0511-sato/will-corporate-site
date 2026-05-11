const items = [
  "AIに興味はあるが、何から始めればいいかわからない",
  "ChatGPTやClaudeの設定が不安",
  "文章作成やSNS投稿に時間がかかる",
  "社員向けにAI研修を検討している",
  "まずは相談できる相手がほしい",
];

export default function Problems() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          こんなお困りごとありませんか？
        </h2>
        <ul className="mt-10 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 w-5 h-5 rounded bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3 h-3 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-gray-500 text-sm">
          ひとつでも当てはまる方は、まず無料診断をお試しください。
        </p>
      </div>
    </section>
  );
}
