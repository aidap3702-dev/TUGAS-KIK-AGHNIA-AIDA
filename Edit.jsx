import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';

export default function Edit({ kelas, programs }) {
  const { data, setData, put, errors, processing } = useForm({
    program_id: kelas.program_id,
    nama_kelas: kelas.nama_kelas,
    hari: kelas.hari ?? '',
    jam: kelas.jam ?? '',
    kuota: kelas.kuota,
    status: kelas.status,
  });

  function submit(e) {
    e.preventDefault();
    put(`/admin/kelas/${kelas.id}`);
  }

  return (
    <AdminLayout title="Edit Kelas">
      <form onSubmit={submit} className="bg-white border border-[--line] p-6 rounded-xl max-w-lg flex flex-col gap-4">
        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Program</label>
          <select className="input" value={data.program_id} onChange={(e) => setData('program_id', e.target.value)}>
            {programs.map((p) => <option key={p.id} value={p.id}>{p.nama}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Nama Kelas</label>
          <input className="input" value={data.nama_kelas} onChange={(e) => setData('nama_kelas', e.target.value)} />
        </div>
        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Hari</label>
          <input className="input" value={data.hari} onChange={(e) => setData('hari', e.target.value)} />
        </div>
        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Jam</label>
          <input className="input" value={data.jam} onChange={(e) => setData('jam', e.target.value)} />
        </div>
        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Kuota</label>
          <input type="number" className="input" value={data.kuota} onChange={(e) => setData('kuota', e.target.value)} />
        </div>
        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Status</label>
          <select className="input" value={data.status} onChange={(e) => setData('status', e.target.value)}>
            <option value="buka">Buka</option>
            <option value="tutup">Tutup</option>
          </select>
        </div>
        {Object.keys(errors).length > 0 && (
          <div className="text-[--red-600] text-[12px]">Periksa kembali isian form.</div>
        )}
        <button disabled={processing} className="bg-[--plum-900] text-white text-[13.5px] font-bold py-2.5 rounded-[10px] hover:bg-[--plum-700]">
          {processing ? 'Menyimpan...' : 'Simpan Perubahan'}
        </button>
      </form>
    </AdminLayout>
  );
}