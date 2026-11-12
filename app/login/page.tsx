"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      if (email === "admin@smkmoklet.sch.id" && password === "password123") {
        ; (window as any).route = "/"
      } else {
        setError("Email atau password salah")
      }
    } catch (err) {
      setError("Terjadi kesalahan")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center mb-8">
          <Image
            src="/next.svg"
            alt="SMK MOKLET"
            width={40}
            height={40}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-blue-900">Masuk Akun</h2>
          <p className="text-gray-600">Login untuk mengakses dashboard</p>
        </div>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded mb-6 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="masuk@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kata Sandi
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-college disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Masuk
            </button>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="font-medium text-blue-600 hover underline"
              >
                Daftar sekarang
              </Link>
            </p>
            <p className="text-gray-600 mt-2">
              Lupa kata sandi?{" "}
              <Link
                href="/forgot-password"
                className="font-medium text-blue-600 hover underline"
              >
                Kirim tautan reset
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}