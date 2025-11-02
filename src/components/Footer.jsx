import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 py-6 text-center text-sm text-gray-600 border-t border-gray-300">
      <div className="flex justify-center gap-4 mb-2">
        <Link href="/privacy" className="hover:underline">プライバシーポリシー</Link>
      </div>
      <p>© 2025 KOBITO BASE / こびとのにわ & KOBITO LAB</p>
    </footer>
  );
}
