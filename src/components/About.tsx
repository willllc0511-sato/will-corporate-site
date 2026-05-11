export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          代表者紹介
        </h2>
        <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 max-w-3xl mx-auto">
          {/* TODO: タキさんから顔写真を提供いただき、ここを <Image> に差し替えてください */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <span className="text-3xl sm:text-4xl font-bold text-indigo-600">
              T
            </span>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold text-gray-900">髙城 智</p>
            <p className="text-sm text-gray-500 mt-1">
              たき さとし / 代表社員
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              鹿児島で、地域の事業者さまにAIをわかりやすくお届けしています。
              <br />
              難しい言葉は使わず、お困りごとから一緒に整理していきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
