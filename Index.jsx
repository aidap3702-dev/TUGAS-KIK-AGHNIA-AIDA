import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';

export default function Index({ kelas }) {
  function hapus(id) {
    if (confirm('Hapus kelas ini?')) {
      router.delete(`/admin/kelas/${id}`);
    }
  }

  return (
    <AdminLayout title="Kelola Kelas">
      <div className="flex justify-end mb-4">
        <Link href="/admin/kelas/create" className="bg-[--plum-900] text-white text-[13.5px] font-bold px-5 py-2.5 rounded-[10px] hover:bg-[--plum-700]">
          + Tambah Kelas Baru
        </Link>
      </div>

      <div className="bg-white border border-[--line] rounded-xl overflow-hidden">
        <table className="w-full text-[13.5px]">
          <thead className="bg-[--cream-100] text-left">
            <tr>
              <th className="p-3">Program</th>
              <th className="p-3">Nama Kelas</th>
              <th className="p-3">Jadwal</th>
              <th className="p-3">Kuota</th>
              <th className="p-3">Status</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kelas?.map((k) => (
              <tr key={k.id} className="border-t border-[--line]">
                <td className="p-3">{k.program?.nama}</td>
                <td className="p-3 font-semibold text-[--plum-900]">{k.nama_kelas}</td>
                <td className="p-3">{k.hari}, {k.jam}</td>
                <td className="p-3">{k.kuota}</td>
                <td className="p-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${k.status === 'buka' ? 'bg-[--green-100] text-[--green-600]' : 'bg-[--red-100] text-[--red-600]'}`}>
                    {k.status}
                  </span>
                </td>
                <td className="p-3 flex gap-3">
                  <Link href={`/admin/kelas/${k.id}/edit`} className="text-[--plum-700] font-semibold hover:underline">Edit</Link>
                  <button onClick={() => hapus(k.id)} className="text-[--red-600] font-semibold hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
            {!kelas?.length && (
              <tr><td colSpan={6} className="p-6 text-center text-[--ink-500]">Belum ada kelas.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}