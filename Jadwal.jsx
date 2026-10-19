import SiswaLayout from '@/Layouts/SiswaLayout';

export default function Jadwal({ jadwal }) {
  return (
    <SiswaLayout title="Jadwal Kelas">
      {!jadwal?.length && (
        <div className="bg-white border border-[--line] rounded-xl p-8 text-center text-[--ink-500] text-[13.5px]">
          Belum ada jadwal pertemuan.
        </div>
      )}
      <div className="flex flex-col gap-3">
        {jadwal?.map((j) => (
          <div key={j.id} className="bg-white border border-[--line] rounded-xl p-4 flex items-center justify-between">
            <div>
              <div className="text-[12px] font-semibold text-[--gold-500]">{j.kelas?.program?.nama} — {j.kelas?.nama_kelas}</div>
              <div className="text-[14.5px] font-bold text-[--plum-900]">{j.materi}</div>
              <div className="text-[12.5px] text-[--ink-500]">{new Date(j.tanggal).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>
            </div>
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${j.status === 'selesai' ? 'bg-[--green-100] text-[--green-600]' : 'bg-[--amber-100] text-[--amber-600]'}`}>
              {j.status}
            </span>
          </div>
        ))}
      </div>
    </SiswaLayout>
  );
}