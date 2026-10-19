import { Link } from '@inertiajs/react';

const iconByProgram = {
  jahit: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#63456C" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M5 5l6 6M19 5l-6 6M5 19l6-6M19 19l-6-6" />
    </svg>
  ),
  rias: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BE9A50" strokeWidth="1.8">
      <path d="M12 3c3 4 6 6 6 10a6 6 0 0 1-12 0c0-4 3-6 6-10z" />
    </svg>
  ),
  hantaran: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A6A45" strokeWidth="1.8">
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M4 13h16" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
    </svg>
  ),
};

const tagByProgram = {
  jahit: 'Pemula · 12 Pertemuan',
  rias: 'Menengah · 8 Pertemuan',
  hantaran: 'Pemula · 6 Pertemuan',
};

const descByProgram = {
  jahit: 'Belajar mengukur pola, teknik jahit rapi, hingga finishing berbagai jenis busana dari dasar.',
  rias: 'Menguasai rias wajah pengantin, sanggul tradisional dan modern, serta pemasangan busana adat.',
  hantaran: 'Merangkai seserahan, membuat kotak hias, dan dekorasi hantaran yang cantik untuk pernikahan.',
};

function formatRupiah(angka) {
  return 'Rp' + Number(angka || 0).toLocaleString('id-ID');
}

export default function Beranda({ programs }) {
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-[--cream-050]/90 backdrop-blur border-b border-[--line]">
        <div className="max-w-6xl mx-auto px-8 h-[72px] flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-[19px] text-[--plum-900]">
            <span
              className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center text-white text-[15px] font-bold"
              style={{ background: 'linear-gradient(135deg,var(--plum-900),var(--lilac-500))' }}
            >
              B
            </span>
            LKP Badami
          </a>

          <div className="hidden md:flex items-center gap-1 text-[13.5px] font-semibold text-[--ink-500]">
            <a href="#home" className="px-4 py-2 rounded-[10px] hover:text-[--plum-900] hover:bg-[--cream-100]">Beranda</a>
            <a href="#program" className="px-4 py-2 rounded-[10px] hover:text-[--plum-900] hover:bg-[--cream-100]">Program</a>
            <a href="#tentang" className="px-4 py-2 rounded-[10px] hover:text-[--plum-900] hover:bg-[--cream-100]">Tentang Kami</a>
            <a href="#kontak" className="px-4 py-2 rounded-[10px] hover:text-[--plum-900] hover:bg-[--cream-100]">Kontak</a>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden md:inline text-[13.5px] font-semibold text-[--ink-500] hover:text-[--plum-900]">
              Masuk
            </Link>
            <Link
              href="/daftar"
              className="bg-[--plum-900] hover:bg-[--plum-700] text-white text-[13.5px] font-bold px-5 py-2.5 rounded-[11px] transition-colors"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-16 px-6" id="home">
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-[28px] overflow-hidden grid md:grid-cols-2 min-h-[380px] items-stretch"
            style={{ background: 'linear-gradient(120deg, var(--lilac-300) 0%, var(--lilac-500) 55%, var(--plum-700) 100%)' }}
          >
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white bg-white/20 px-3 py-1.5 rounded-full w-fit mb-4">
                ★ Lembaga Kursus Terpercaya
              </div>
              <h1 className="text-white text-[36px] md:text-[42px] leading-tight max-w-[420px]">LKP Badami</h1>
              <p className="mt-4 text-white/90 text-[15px] leading-relaxed max-w-[380px]">
                Mengasah bakat menjahit, tata rias pengantin, dan hantaran bersama instruktur
                berpengalaman — untuk bekal keterampilan dan usaha masa depan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/daftar"
                  className="bg-white text-[--plum-900] font-bold text-[13.5px] px-6 py-3 rounded-[11px] inline-flex items-center gap-2 hover:opacity-90"
                >
                  Daftar Sekarang →
                </Link>

                <a
                  href="#program"
                  className="border border-white/60 text-white font-semibold text-[13.5px] px-6 py-3 rounded-[11px] hover:bg-white/10"
                >
                  Lihat Program
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center relative">
              <div className="bg-white/10 rounded-3xl w-[70%] aspect-square flex items-center justify-center">
                <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3">
                  <path d="M12 3c3 4 6 6 6 10a6 6 0 0 1-12 0c0-4 3-6 6-10z" />
                </svg>
              </div>
              <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-5 py-4 shadow-lg">
                <div className="text-2xl font-bold text-[--plum-900]">500+</div>
                <div className="text-xs text-[--ink-500]">Alumni Terampil</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" id="program">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="text-[12px] font-bold tracking-wide text-[--gold-500] mb-2">PROGRAM UNGGULAN</div>
            <h2 className="text-[28px] md:text-[32px] text-[--plum-900]">Kelas yang kami tawarkan</h2>
            <p className="mt-3 text-[--ink-500] text-[14.5px]">
              Bidang keterampilan utama yang bisa kamu pelajari langsung dari praktisi berpengalaman.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs?.map((program) => (
              <div
                key={program.id}
                className="bg-white border border-[--line] rounded-2xl p-7 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[--cream-100] flex items-center justify-center mb-4">
                  {iconByProgram[program.slug] ?? iconByProgram.jahit}
                </div>
                <div className="text-[12px] font-semibold text-[--ink-500] mb-1">
                  {tagByProgram[program.slug] ?? 'Program kursus'}
                </div>
                <h3 className="text-[20px] text-[--plum-900] mb-2">{program.nama}</h3>
                <p className="text-[13.5px] text-[--ink-500] leading-relaxed mb-3">
                  {program.deskripsi || descByProgram[program.slug]}
                </p>
                <div className="text-[13.5px] font-bold text-[--gold-500] mb-4">
                  {formatRupiah(program.biaya)} <span className="font-normal text-[--ink-500]">/ program</span>
                </div>
                <Link
                  href={`/program/${program.slug}`}
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[--plum-700] hover:text-[--plum-900]"
                >
                  Lihat Detail →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[--cream-100]" id="tentang">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-1 text-[--gold-500] font-bold mb-3">★★★★★ <span className="text-[--ink-900] ml-1">4.9 / 5</span></div>
          <h2 className="text-[24px] md:text-[28px] text-[--plum-900] max-w-lg mx-auto">
            Dipercaya ratusan siswa untuk membangun keterampilan sejak awal
          </h2>
          <p className="mt-3 text-[--ink-500] text-[14.5px] max-w-lg mx-auto">
            LKP Badami hadir dengan instruktur berpengalaman, kelas praktik langsung, dan pendampingan
            hingga siswa siap berkarya secara mandiri.
          </p>
        </div>
      </section>

      <footer className="bg-[--plum-900] text-white/80 py-14 px-6" id="kontak">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-[13.5px]">
          <div>
            <div className="flex items-center gap-2 font-bold text-[18px] text-white mb-3">
              <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">B</span>
              LKP Badami
            </div>
            <p className="text-white/60 max-w-xs">
              Lembaga kursus keterampilan menjahit, tata rias pengantin, dan hantaran.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-white font-semibold mb-1 text-xs tracking-wide">PROGRAM</h5>
            <a href="#program" className="hover:text-white">Menjahit</a>
            <a href="#program" className="hover:text-white">Tata Rias Pengantin</a>
            <a href="#program" className="hover:text-white">Hantaran</a>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-white font-semibold mb-1 text-xs tracking-wide">KONTAK</h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yayasanbadami@gmail.com&su=Pertanyaan%20untuk%20LPK%20Badami"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white">yayasanbadami@gmail.com</a>
            <a href="https://wa.me/6287833194881?text=Halo%20Admin%20LPK%20Badami,%20saya%20ingin%20bertanya%20tentang%20program%20kursus."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white inline-flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.12c-.25.69-1.43 1.32-1.97 1.4-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.01-2.42c.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.25.6.84 2.07.91 2.22.07.15.12.32.02.51-.1.19-.15.31-.29.48l-.44.51c-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.19.73-.85.93-1.14.19-.29.39-.24.65-.15.26.1 1.66.78 1.94.93.29.14.48.22.55.34.07.12.07.7-.18 1.39z"/>
              </svg>
              +6287-8331-94881
              </a>
            <span>Bandung, Jawa Barat</span>
          </div>

        </div>
        <div className="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-6 text-[12px] text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 LKP Badami. Seluruh hak cipta dilindungi.</span>
          <span>Dibuat dengan ♥ untuk calon pengrajin Indonesia</span>
        </div>
      </footer>
    </div>
  );
}