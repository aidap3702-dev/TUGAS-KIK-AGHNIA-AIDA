import SiswaLayout from '@/Layouts/SiswaLayout';

export default function Pembayaran({ pembayarans }) {
  return (
    <SiswaLayout title="Pembayaran">
      {!pembayarans?.length && (
        <div className="bg-white border border-[--line] rounded-xl p-8 text-center text-[--ink-500] text-[13.5px]">
          Belum ada riwayat pembayaran.
        </div>
      )}
      <div className="bg-white border border-[--line] rounded-xl overflow-hidden">
        <table className="w-full text-[13.5px]">
          <thead className="bg-[--cream-100] text-left">
            <tr>
              <th className="p-3">Kelas</th>
              <th className="p-3">Jumlah</th>
              <th className="p-3">Status</th>
              <th className="p-3">Bukti</th>
            </tr>
          </thead>
          <tbody>
            {pembayarans?.map((pb) => (
              <tr key={pb.id} className="border-t border-[--line]">
                <td className="p-3">{pb.pendaftaran?.kelas?.nama_kelas}</td>
                <td className="p-3">Rp{Number(pb.jumlah).toLocaleString('id-ID')}</td>
                <td className="p-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${pb.status === 'lunas' ? 'bg-[--green-100] text-[--green-600]' : 'bg-[--amber-100] text-[--amber-600]'}`}>
                    {pb.status}
                  </span>
                </td>
                <td className="p-3">
                  {pb.bukti_file ? (
                    <a href={`/storage/${pb.bukti_file}`} target="_blank" className="text-[--plum-700] underline">Lihat</a>
                  ) : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SiswaLayout>
  );
}