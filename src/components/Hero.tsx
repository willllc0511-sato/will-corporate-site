export default function Hero() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          鹿児島から、AIを
          <br className="sm:hidden" />
          <span className="text-indigo-600">&ldquo;使える形&rdquo;</span>
          で
          <br className="hidden sm:block" />
          お届けします
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          ChatGPT・Claude・Gemini・Microsoft&nbsp;Copilotなどの
          AIを、地域の事業者さまの今のお仕事で使える形に整えます。
        </p>
        <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          難しい言葉は使いません。お困りごとから一緒に整理していきます。
        </p>
        <a
          href="https://shindan.will0511.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-indigo-600 text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-indigo-700 transition-colors shadow-sm"
        >
          まずは無料診断を試す
        </a>
        <p className="mt-3 text-xs text-gray-400">3分で完了・費用はかかりません</p>
      </div>
    </section>
  );
}
