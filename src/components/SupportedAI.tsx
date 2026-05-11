const aiTools = [
  { name: "ChatGPT", description: "OpenAI" },
  { name: "Claude", description: "Anthropic" },
  { name: "Gemini", description: "Google" },
  { name: "Microsoft Copilot", description: "Microsoft" },
];

export default function SupportedAI() {
  return (
    <section className="py-16 sm:py-20 bg-indigo-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          対応しているAI
        </h2>
        <p className="mt-3 text-center text-sm text-gray-500">
          お客さまのお仕事や使い方に合わせて、最適なAIをご提案します。
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {aiTools.map((ai) => (
            <div
              key={ai.name}
              className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center"
            >
              <p className="text-lg font-bold text-gray-900">{ai.name}</p>
              <p className="mt-1 text-xs text-gray-400">{ai.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
