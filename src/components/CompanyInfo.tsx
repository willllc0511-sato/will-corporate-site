const rows = [
  { label: "会社名", value: "合同会社Will" },
  { label: "代表", value: "髙城 智" },
  { label: "所在地", value: "鹿児島市城山町9番2号" },
  { label: "電話番号", value: "090-2664-0511" },
  /* TODO: タキさんからメールアドレスを提供いただき差し替えてください */
  { label: "メール", value: "（後日掲載）" },
  /* TODO: タキさんから設立日を提供いただき差し替えてください */
  { label: "設立", value: "（後日掲載）" },
  {
    label: "事業内容",
    value: "AI導入支援、楽天モバイル代理店",
  },
];

export default function CompanyInfo() {
  return (
    <section id="company" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          会社情報
        </h2>
        <dl className="mt-10 divide-y divide-gray-100">
          {rows.map((r) => (
            <div
              key={r.label}
              className="py-4 sm:flex sm:gap-4"
            >
              <dt className="text-sm font-medium text-gray-500 sm:w-32 flex-shrink-0">
                {r.label}
              </dt>
              <dd className="mt-1 sm:mt-0 text-sm text-gray-900">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
