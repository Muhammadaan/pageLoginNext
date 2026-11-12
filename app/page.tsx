import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
        <Image
          src="/next.svg"
          alt="SMK MOKLET"
          width={60}
          height={60}
          className="mx-auto mb-8 opacity-50"
        />
        <h1 className="text-3xl font-bold text-blue-900 mb-4">SMK MOKLET</h1>
        <p className="text-gray-600 mb-8">Sekolah Menengah Kejuruan Terleading</p>
        <div className="space-y-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-college w-full"
          >
            Masuk ke Akun
          </Link>
          <Link
            href="/register"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-college w-full"
          >
            Daftar Akun Baru
          </Link>
        </div>
      </div>
    </div>
  )
}