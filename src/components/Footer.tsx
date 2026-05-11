export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-medium text-gray-300">合同会社Will</p>
          <p>鹿児島市城山町9番2号</p>
          <p>TEL: 090-2664-0511</p>
          <div className="flex gap-6 mt-2">
            {/* TODO: 特定商取引法に基づく表記ページを作成後、hrefを差し替えてください */}
            <a href="#" className="hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
            {/* TODO: プライバシーポリシーページを作成後、hrefを差し替えてください */}
            <a href="#" className="hover:text-white transition-colors">
              プライバシーポリシー
            </a>
          </div>
          <p className="mt-2 text-gray-500">
            &copy; 2026 合同会社Will
          </p>
        </div>
      </div>
    </footer>
  );
}
