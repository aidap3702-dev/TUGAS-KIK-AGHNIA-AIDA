import AdminLayout from '@/Layouts/AdminLayout';
import { useForm } from '@inertiajs/react';

export default function Create({ programs }) {
  const { data, setData, post, errors, processing } = useForm({
        program_id: '',
        nama_kelas: '',
        hari: '',
        jam: '',
        kuota: 20,
  });

  function submit(e) {
    e.preventDefault();
    post('/admin/kelas');
  }

  return (
    <AdminLayout title="Tambah Kelas Baru">
      <form onSubmit={submit} className="bg-white border border-[--line] p-6 rounded-xl max-w-lg flex flex-col gap-4">
        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Program</label>
          <select className="input" value={data.program_id} onChange={(e) => setData('program_id', e.target.value)}>
            <option value="">Pilih Program</option>
            {programs.map((p) => <option key={p.id} value={p.id}>{p.nama}</option>)}
          </select>
          {errors.program_id && <div className="text-[--red-600] text-[12px] mt-1">{errors.program_id}</div>}
        </div>

        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Nama Kelas</label>
          <input className="input" value={data.nama_kelas} onChange={(e) => setData('nama_kelas', e.target.value)} placeholder="Contoh: Menjahit Batch 2" />
          {errors.nama_kelas && <div className="text-[--red-600] text-[12px] mt-1">{errors.nama_kelas}</div>}
        </div>

        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Hari</label>
          <input className="input" value={data.hari} onChange={(e) => setData('hari', e.target.value)} placeholder="Senin & Rabu" />
          {errors.hari && <div className="text-[--red-600] text-[12px] mt-1">{errors.hari}</div>}
        </div>

        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Jam</label>
          <input className="input" value={data.jam} onChange={(e) => setData('jam', e.target.value)} placeholder="13:00 - 15:00" />
          {errors.jam && <div className="text-[--red-600] text-[12px] mt-1">{errors.jam}</div>}
        </div>

        <div>
          <label className="block text-[12.5px] font-semibold mb-1.5">Kuota</label>
          <input type="number" className="input" value={data.kuota} onChange={(e) => setData('kuota', e.target.value)} />
          {errors.kuota && <div className="text-[--red-600] text-[12px] mt-1">{errors.kuota}</div>}
        </div>

        <button disabled={processing} className="bg-[--plum-900] text-white text-[13.5px] font-bold py-2.5 rounded-[10px] hover:bg-[--plum-700]">
          {processing ? 'Menyimpan...' : 'Simpan Kelas'}
        </button>
      </form>
    </AdminLayout>
  );
}