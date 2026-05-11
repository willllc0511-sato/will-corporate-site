export default function Partner() {
  return (
    <section className="py-12 sm:py-16 bg-indigo-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          営業パートナーも募集しています
        </h2>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          当社のAI導入支援サービスを一緒に届けていただけるパートナーを募集しています。
          <br />
          詳細はLINEまたはお問い合わせよりお気軽にご連絡ください。
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 border border-indigo-600 text-indigo-600 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors"
        >
          お問い合わせはこちら
        </a>
      </div>
    </section>
  );
}
