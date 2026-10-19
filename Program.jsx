import SiswaLayout from '@/Layouts/SiswaLayout';

export default function Program({ pendaftarans }) {
  return (
    <SiswaLayout title="Program Saya">
      <div className="grid md:grid-cols-2 gap-4">
        {pendaftarans?.map((p) => (
          <div key={p.id} className="bg-white border border-[--line] rounded-xl p-5">
              <div className="text-[12px] font-semibold text-[--gold-500] mb-1">{p.kelas?.program?.nama}</div>
              <h3 className="text-[17px] font-bold text-[--plum-900] mb-2">{p.kelas?.nama_kelas}</h3>
              <p className="text-[13px] text-[--ink-500] mb-3">{p.kelas?.program?.deskripsi}</p>
              <div className="text-[12.5px] text-[--ink-500]">Jadwal: {p.kelas?.hari}, {p.kelas?.jam}</div>
              <div className="text-[12.5px] text-[--ink-500]">Kuota kelas: {p.kelas?.kuota} orang</div>
          </div>
        ))}
        {!pendaftarans?.length && (
          <div className="text-[--ink-500] text-[13.5px]">Kamu belum mengikuti program apapun.</div>
        )}
      </div>
    </SiswaLayout>
  );
}