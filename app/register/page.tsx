"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      if (password !== confirmPassword) {
        setError("Kata sandi tidak cocok")
        return
      }

      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)
    } catch (err) {
      setError("Terjadi kesalahan, coba lagi nanti")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md">
          <Image
            src="/next.svg"
            alt="Success"
            width={60}
            height={60}
            className="mx-auto mb-6 opacity-50"
          />
          <h3 className="text-3xl font-bold text-green-600 mb-4">Daftar Berhasil!</h3>
          <p className="text-gray-600 mb-6">Akun Anda sudah berhasil dibuat. Silakan login.</p>
          <div className="flex justify-center">
            <a href="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-college">
              Masuk ke Akun
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center mb-8">
          <Image
            src="/next.svg"
            alt="SMK MOKLET"
            width={40}
            height={40}
            className="mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-blue-900">Buat Akun Baru</h2>
          <p className="text-gray-600 mt-2">Daftar untuk mendapatkan akses penuh</p>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6">
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama lengkap"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="masuk@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Kata Sandi
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Konfirmasi Kata Sandi
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Ulangi kata sandi"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-college disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Mendaftar..." : "Daftar"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover underline"
            >
              Masuk sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}