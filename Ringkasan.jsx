import { useEffect } from 'react';
import SiswaLayout from '@/Layouts/SiswaLayout';
import { usePage, router } from '@inertiajs/react';

const statusColor = {
  pending: 'bg-[--amber-100] text-[--amber-600]',
  diterima: 'bg-[--green-100] text-[--green-600]',
  ditolak: 'bg-[--red-100] text-[--red-600]',
};

export default function Ringkasan({ pendaftarans }) {
  const { flash } = usePage().props;

  // Perbarui data kehadiran otomatis tiap 30 detik
  useEffect(() => {
    const timer = setInterval(() => {
      router.reload({ only: ['pendaftarans'], preserveScroll: true });
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const totalKursus = pendaftarans?.length ?? 0;
  const totalHadir = pendaftarans?.reduce((sum, p) => sum + (p.hadir ?? 0), 0) ?? 0;

  return (
    <SiswaLayout title="Ringkasan">
      {flash?.nomor_pendaftaran && (
        <div className="mb-6 bg-[--green-100] border border-[--green-600]/30 rounded-xl p-4">
          <div className="font-bold text-[--green-600] text-[14px] mb-1">
            Pendaftaran berhasil! 🎉
          </div>
          <div className="text-[13.5px] text-[--ink-900]">
            Nomor pendaftaranmu: <b>{flash.nomor_pendaftaran}</b>. Simpan nomor ini — admin akan
            memverifikasi data & pembayaranmu dalam 1x24 jam.
          </div>
        </div>
      )}

      <h2 className="text-[20px] text-[--plum-900] mb-1">Selamat datang kembali 👋</h2>
      <p className="text-[--ink-500] text-[13.5px] mb-6">Berikut ringkasan program yang kamu ikuti di LPK Badami.</p>

      {!!totalKursus && (
  <div className="grid grid-cols-2 gap-4 mb-6 max-w-xl">
    {/* Kursus diikuti */}
    <div
      className="relative overflow-hidden rounded-2xl p-5 text-white shadow-md"
      style={{ background: 'linear-gradient(135deg, #4a2f55 0%, #8a6a9c 100%)' }}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
      <div className="absolute -right-2 bottom-[-28px] h-16 w-16 rounded-full bg-white/10" />
      <div className="relative">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-[20px]">
          📚
        </div>
        <div className="text-[12.5px] text-white/80">Kursus diikuti</div>
        <div className="text-[30px] font-bold leading-tight">{totalKursus}</div>
      </div>
    </div>

    {/* Total kehadiran */}
    <div
      className="relative overflow-hidden rounded-2xl p-5 text-white shadow-md"
      style={{ background: 'linear-gradient(135deg, #1f8a5b 0%, #5cc99a 100%)' }}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
      <div className="absolute -right-2 bottom-[-28px] h-16 w-16 rounded-full bg-white/10" />
      <div className="relative">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-[20px]">
          ✅
        </div>
        <div className="text-[12.5px] text-white/80">Total kehadiran</div>
        <div className="text-[30px] font-bold leading-tight">{totalHadir}</div>
      </div>
    </div>
  </div>
)}

      <div
  className="relative overflow-hidden rounded-2xl p-5 text-white shadow-md"
  style={{ background: 'linear-gradient(135deg, #c98a1b 0%, #f0c35e 100%)' }}
>
  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
  <div className="relative">
    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-[20px]">
      📈
    </div>
    <div className="text-[12.5px] text-white/80">Rata-rata kehadiran</div>
    <div className="text-[30px] font-bold leading-tight">
      {(() => {
        const total = pendaftarans.reduce((s, p) => s + (p.total_pertemuan ?? 0), 0);
        return total > 0 ? Math.round((totalHadir / total) * 100) : 0;
      })()}%
    </div>
  </div>
</div>

      <div className="grid md:grid-cols-2 gap-4">
        {pendaftarans?.map((p) => {
          const hadir = p.hadir ?? 0;
          const total = p.total_pertemuan ?? 0;
          const persen = total > 0 ? Math.round((hadir / total) * 100) : 0;

          return (
            <div key={p.id} className="bg-white border border-[--line] rounded-xl p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-[12px] font-semibold text-[--gold-500]">{p.kelas?.program?.nama}</div>
                  <div className="text-[16px] font-bold text-[--plum-900]">{p.kelas?.nama_kelas}</div>
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${statusColor[p.status_verifikasi]}`}>
                  {p.status_verifikasi}
                </span>
              </div>
              <div className="text-[12.5px] text-[--ink-500]">No. Pendaftaran: {p.nomor_pendaftaran}</div>
              <div className="text-[12.5px] text-[--ink-500]">Jadwal: {p.kelas?.hari}, {p.kelas?.jam}</div>

              {p.status_verifikasi === 'diterima' && (
                <div className="mt-4 pt-4 border-t border-[--line]">
                  <div className="flex items-center justify-between text-[12.5px] mb-1.5">
                    <span className="text-[--ink-500]">Kehadiran</span>
                    <span className="font-bold text-[--plum-900]">
                      {hadir} dari {total} pertemuan
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-[--line] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[--green-600] transition-all"
                      style={{ width: `${persen}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SiswaLayout>
  );
}