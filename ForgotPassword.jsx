import { Head, Link, useForm } from '@inertiajs/react';

const langkah = [
  'Masukkan email yang kamu daftarkan',
  'Buka email dan klik tautan reset yang kami kirim',
  'Buat kata sandi baru, lalu masuk kembali',
];

const inputClass =
  'w-full rounded-[11px] border border-[--line] bg-white px-4 py-3 text-[14px] text-[--ink-900] placeholder:text-[--ink-500] focus:border-[--plum-900] focus:ring-0 focus:outline-none';

function terjemahkan(pesan) {
  if (!pesan) return null;
  if (pesan.includes('emailed your password reset link')) {
    return 'Tautan reset kata sandi sudah dikirim ke emailmu. Cek kotak masuk atau folder spam.';
  }
  if (pesan.includes("can't find a user")) return 'Email ini belum terdaftar.';
  if (pesan.includes('Please wait before retrying')) return 'Mohon tunggu sebentar sebelum mencoba lagi.';
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

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  function submit(e) {
    e.preventDefault();
    post('/forgot-password');
  }

  return (
    <>
      <Head title="Lupa Kata Sandi" />

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
              ★ Pemulihan Akun
            </div>
            <h1 className="text-[40px] leading-tight mb-4">Lupa kata sandi?</h1>
            <p className="text-white/80 text-[15px] leading-relaxed mb-8">
              Tenang, kamu bisa membuat kata sandi baru dalam beberapa langkah mudah.
            </p>

            <ol className="flex flex-col gap-4">
              {langkah.map((teks, i) => (
                <li key={teks} className="flex items-start gap-3 text-[14px] text-white/90">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[12px] font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{teks}</span>
                </li>
              ))}
            </ol>
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

            <div className="w-12 h-12 rounded-2xl bg-[--cream-100] flex items-center justify-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#63456C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </div>

            <h2 className="text-[28px] text-[--plum-900] mb-1">Atur ulang kata sandi</h2>
            <p className="text-[14px] text-[--ink-500] mb-8">
              Masukkan email akunmu. Kami akan mengirimkan tautan untuk membuat kata sandi baru.
            </p>

            {status && (
              <div className="mb-5 rounded-xl bg-[#E3F1E7] text-[#3F7D57] text-[13px] font-semibold p-3.5">
                {terjemahkan(status)}
              </div>
            )}

            <form onSubmit={submit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="email" className="block text-[12.5px] font-semibold text-[--ink-900] mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  autoFocus
                  placeholder="nama@email.com"
                  className={inputClass}
                  onChange={(e) => setData('email', e.target.value)}
                />
                {errors.email && (
                  <div className="text-[#B24747] text-[12.5px] mt-1.5">{terjemahkan(errors.email)}</div>
                )}
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full bg-[--plum-900] hover:bg-[--plum-700] text-white text-[14px] font-bold py-3.5 rounded-[11px] transition-colors disabled:opacity-60"
              >
                {processing ? 'Mengirim...' : 'Kirim Tautan Reset'}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[--line] text-center">
              <Link href="/login" className="text-[13.5px] font-bold text-[--plum-700] hover:text-[--plum-900]">
                ← Kembali ke halaman masuk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}