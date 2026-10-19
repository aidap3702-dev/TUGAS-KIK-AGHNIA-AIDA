import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

const fitur = [
  'Pantau jadwal kelas dan progres belajarmu',
  'Cek status pendaftaran dan pembayaran',
  'Unduh sertifikat setelah kelas selesai',
];

const inputClass =
  'w-full rounded-[11px] border border-[--line] bg-white px-4 py-3 text-[14px] text-[--ink-900] placeholder:text-[--ink-500] focus:border-[--plum-900] focus:ring-0 focus:outline-none';

function pesanError(pesan) {
  if (!pesan) return null;
  if (pesan.includes('do not match our records')) return 'Email atau kata sandi salah.';
  return pesan;
}

function Logo({ gelap = false }) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-[19px]">
      <span
        className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center text-[15px] font-bold text-white"
        style={{
          background: gelap
            ? 'linear-gradient(135deg,var(--plum-900),var(--lilac-500))'
            : 'rgba(255,255,255,0.2)',
        }}
      >
        B
      </span>
      <span className={gelap ? 'text-[--plum-900]' : 'text-white'}>LKP Badami</span>
    </Link>
  );
}

export default function Login({ status, canResetPassword }) {
  const [tampilSandi, setTampilSandi] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  function submit(e) {
    e.preventDefault();
    post('/login', { onFinish: () => reset('password') });
  }

  return (
    <>
      <Head title="Masuk" />

      <div className="min-h-screen grid lg:grid-cols-2 bg-[--cream-050]">
        {/* ===== Panel kiri (hanya di layar lebar) ===== */}
        <div
          className="relative hidden lg:flex flex-col justify-between overflow-hidden p-14 text-white"
          style={{
            background:
              'linear-gradient(150deg, var(--plum-900) 0%, var(--plum-700) 50%, var(--lilac-500) 100%)',
          }}
        >
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white/5" />

          <div className="relative">
            <Logo />
          </div>

          <div className="relative max-w-md">
            <div className="inline-flex items-center gap-1.5 text-[12px] font-bold bg-white/15 px-3 py-1.5 rounded-full mb-5">
              ★ Portal Siswa
            </div>
            <h1 className="text-[40px] leading-tight mb-4">Selamat datang kembali</h1>
            <p className="text-white/80 text-[15px] leading-relaxed mb-8">
              Masuk untuk melanjutkan perjalanan belajarmu bersama LKP Badami.
            </p>

            <ul className="flex flex-col gap-3.5">
              {fitur.map((teks) => (
                <li key={teks} className="flex items-start gap-3 text-[14px] text-white/90">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[11px] font-bold shrink-0">
                    ✓
                  </span>
                  {teks}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative text-[12px] text-white/60">
            © 2026 LKP Badami. Seluruh hak cipta dilindungi.
          </div>
        </div>

        {/* ===== Panel kanan: form ===== */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12">
          <div className="w-full max-w-[420px] mx-auto">
            <div className="lg:hidden mb-8">
              <Logo gelap />
            </div>

            <h2 className="text-[28px] text-[--plum-900] mb-1">Masuk ke akun</h2>
            <p className="text-[14px] text-[--ink-500] mb-8">
              Gunakan email dan kata sandi yang kamu daftarkan.
            </p>

            {status && (
              <div className="mb-5 rounded-xl bg-[#E3F1E7] text-[#3F7D57] text-[13px] font-semibold p-3.5">
                {status}
              </div>
            )}

            <form onSubmit={submit} className="flex flex-col gap-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[12.5px] font-semibold text-[--ink-900] mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  autoComplete="username"
                  autoFocus
                  placeholder="nama@email.com"
                  className={inputClass}
                  onChange={(e) => setData('email', e.target.value)}
                />
                {errors.email && (
                  <div className="text-[#B24747] text-[12.5px] mt-1.5">{pesanError(errors.email)}</div>
                )}
              </div>

              {/* Kata sandi */}
              <div>
                <label htmlFor="password" className="block text-[12.5px] font-semibold text-[--ink-900] mb-1.5">
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={tampilSandi ? 'text' : 'password'}
                    name="password"
                    value={data.password}
                    autoComplete="current-password"
                    placeholder="Masukkan kata sandi"
                    className={`${inputClass} pr-12`}
                    onChange={(e) => setData('password', e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setTampilSandi((v) => !v)}
                    aria-label={tampilSandi ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                    className="absolute inset-y-0 right-0 px-4 flex items-center text-[--ink-500] hover:text-[--plum-900]"
                  >
                    {tampilSandi ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3l18 18" />
                        <path d="M10.6 5.1A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2M6.6 6.6C3.7 8.4 2 12 2 12s3.5 7 10 7c1.7 0 3.2-.4 4.5-1" />
                        <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <div className="text-[#B24747] text-[12.5px] mt-1.5">{pesanError(errors.password)}</div>
                )}
              </div>

              {/* Ingat saya + lupa sandi */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-[13px] text-[--ink-500] cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={data.remember}
                    onChange={(e) => setData('remember', e.target.checked)}
                    className="rounded border-[--line] text-[--plum-900] focus:ring-0 focus:ring-offset-0"
                  />
                  Ingat saya
                </label>

                {canResetPassword && (
                  <Link
                    href="/forgot-password"
                    className="text-[13px] font-semibold text-[--plum-700] hover:text-[--plum-900]"
                  >
                    Lupa kata sandi?
                  </Link>
                )}
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full bg-[--plum-900] hover:bg-[--plum-700] text-white text-[14px] font-bold py-3.5 rounded-[11px] transition-colors disabled:opacity-60"
              >
                {processing ? 'Memproses...' : 'Masuk'}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[--line] text-center text-[13.5px] text-[--ink-500]">
              Belum punya akun?{' '}
              <Link href="/daftar" className="font-bold text-[--plum-700] hover:text-[--plum-900]">
                Daftar sekarang
              </Link>
            </div>

            <div className="mt-4 text-center">
              <Link href="/" className="text-[12.5px] font-semibold text-[--ink-500] hover:text-[--plum-900]">
                ← Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}