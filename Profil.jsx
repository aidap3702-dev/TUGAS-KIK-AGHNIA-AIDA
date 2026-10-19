import SiswaLayout from '@/Layouts/SiswaLayout';
import { useForm } from '@inertiajs/react';

function inisial(nama) {
  return (nama || '?')
    .trim()
    .split(/\s+/)
    .filter((kata) => /^\p{L}/u.test(kata))
    .slice(0, 2)
    .map((kata) => kata[0])
    .join('')
    .toUpperCase() || '?';
}

function statusKartu(user, pendaftaran) {
  if (pendaftaran?.status_verifikasi === 'pending') {
    return { label: 'Menunggu Verifikasi', bg: '#FBEED3', color: '#9C6B1E' };
  }
  if (pendaftaran?.status_verifikasi === 'ditolak') {
    return { label: 'Ditolak', bg: '#F6E4E4', color: '#B24747' };
  }
  if (user.status_siswa === 'aktif') {
    return { label: 'Aktif', bg: '#E3F1E7', color: '#3F7D57' };
  }
  return { label: 'Nonaktif', bg: '#F6E4E4', color: '#B24747' };
}

function KartuSiswa({ user, pendaftaran }) {
  const status = statusKartu(user, pendaftaran);

  return (
    <div>
      <div className="text-[12.5px] font-semibold text-[--ink-500] mb-2">Kartu Siswa</div>

      <div
        className="relative overflow-hidden rounded-2xl p-6 text-white shadow-lg min-h-[260px] flex flex-col justify-between"
        style={{ background: 'linear-gradient(135deg, var(--plum-900) 0%, var(--plum-700) 55%, var(--lilac-500) 100%)' }}
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-14 -left-8 w-44 h-44 rounded-full bg-white/5" />

        {/* Header kartu */}
        <div className="relative flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-[13px] font-bold">
              B
            </span>
            <div className="leading-tight">
              <div className="text-[13px] font-bold">LKP Badami</div>
              <div className="text-[10px] tracking-[0.18em] text-white/70">KARTU SISWA</div>
            </div>
          </div>
          <span
            className="text-[10.5px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
            style={{ background: status.bg, color: status.color }}
          >
            {status.label}
          </span>
        </div>

        {/* Identitas siswa */}
        <div className="relative flex items-center gap-4 my-5">
          <div className="w-16 h-16 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-[22px] font-bold shrink-0">
            {inisial(user.name)}
          </div>
          <div className="min-w-0">
            <h3 className="text-[18px] font-bold leading-tight break-words">{user.name}</h3>
            <div className="text-[12.5px] text-white/80 mt-1">
              {pendaftaran?.kelas?.program?.nama ?? '-'}
            </div>
            <div className="text-[11.5px] text-white/60">{pendaftaran?.kelas?.nama_kelas ?? ''}</div>
          </div>
        </div>

        {/* Kode kartu */}
        <div className="relative">
          <div className="text-[10px] tracking-[0.18em] text-white/60 mb-1">KODE KARTU</div>
          <div className="bg-white/15 border border-white/25 rounded-lg px-4 py-2.5 text-[19px] font-bold tracking-[0.12em] font-mono">
            {pendaftaran?.nomor_pendaftaran ?? '-'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Profil({ user, pendaftaran }) {
  const { data, setData, put, processing, errors, recentlySuccessful } = useForm({
    name: user.name ?? '',
    hp: user.hp ?? '',
    alamat: user.alamat ?? '',
  });

  function submit(e) {
    e.preventDefault();
    put('/dashboard/profil');
  }

  return (
    <SiswaLayout title="Profil Saya">
      <div className="grid lg:grid-cols-2 gap-6 items-start max-w-5xl">
        {/* Data profil */}
        <form onSubmit={submit} className="bg-white border border-[--line] rounded-xl p-6 flex flex-col gap-4">
          <div>
            <label className="block text-[12.5px] font-semibold mb-1.5">Nama Lengkap</label>
            <input className="input" value={data.name} onChange={(e) => setData('name', e.target.value)} />
            {errors.name && <div className="text-[--red-600] text-[12px] mt-1">{errors.name}</div>}
          </div>
          <div>
            <label className="block text-[12.5px] font-semibold mb-1.5">No. HP</label>
            <input className="input" value={data.hp} onChange={(e) => setData('hp', e.target.value)} />
            {errors.hp && <div className="text-[--red-600] text-[12px] mt-1">{errors.hp}</div>}
          </div>
          <div>
            <label className="block text-[12.5px] font-semibold mb-1.5">Alamat</label>
            <input className="input" value={data.alamat} onChange={(e) => setData('alamat', e.target.value)} />
            {errors.alamat && <div className="text-[--red-600] text-[12px] mt-1">{errors.alamat}</div>}
          </div>
          <div className="flex items-center gap-3">
            <button
              disabled={processing}
              className="bg-[--plum-900] text-white text-[13.5px] font-bold px-5 py-2.5 rounded-[10px] hover:bg-[--plum-700]"
            >
              Simpan Perubahan
            </button>
            {recentlySuccessful && <span className="text-[--green-600] text-[12.5px]">Tersimpan.</span>}
          </div>
        </form>

        {/* Kartu siswa */}
        <KartuSiswa user={user} pendaftaran={pendaftaran} />
      </div>
    </SiswaLayout>
  );
}