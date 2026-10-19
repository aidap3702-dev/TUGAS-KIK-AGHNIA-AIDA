import SiswaLayout from '@/Layouts/SiswaLayout';

export default function Sertifikat({ sertifikats }) {
  return (
    <SiswaLayout title="Sertifikat">
      {!sertifikats?.length && (
        <div className="bg-white border border-[--line] rounded-xl p-8 text-center text-[--ink-500] text-[13.5px]">
          Selesaikan seluruh pertemuan untuk membuka sertifikat.
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {sertifikats?.map((s) => (
          <div key={s.id} className="bg-white border border-[--line] rounded-xl p-5 flex items-center justify-between">
            <div>
              <div className="text-[12px] font-semibold text-[--gold-500]">{s.kelas?.program?.nama}</div>
              <div className="text-[15px] font-bold text-[--plum-900]">{s.kelas?.nama_kelas}</div>
              <div className="text-[12.5px] text-[--ink-500]">Terbit: {s.tanggal_terbit ?? '-'}</div>
            </div>
            {s.file ? (
              <a href={`/storage/${s.file}`} target="_blank" className="text-[13px] font-bold text-[--plum-700] underline">Unduh</a>
            ) : (
              <span className="text-[12px] text-[--ink-500]">Belum tersedia</span>
            )}
          </div>
        ))}
      </div>
    </SiswaLayout>
  );
}