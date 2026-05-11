export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 合同会社Will</p>
          <div className="flex gap-6">
            {/* TODO: 特定商取引法に基づく表記ページを作成後、hrefを差し替えてください */}
            <a href="#" className="hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
            {/* TODO: プライバシーポリシーページを作成後、hrefを差し替えてください */}
            <a href="#" className="hover:text-white transition-colors">
              プライバシーポリシー
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
