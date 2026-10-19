import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';

export default function Dashboard({ stats }) {
  const cards = [
    { label: 'Total Peserta', value: stats.total_peserta, color: '--plum-900' },
    { label: 'Menunggu Verifikasi', value: stats.menunggu_verifikasi, color: '--amber-600' },
    { label: 'Diterima', value: stats.diterima, color: '--green-600' },
    { label: 'Siswa Aktif', value: stats.siswa_aktif, color: '--gold-500' },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((c) => (
          <div key={c.label} className="bg-white border border-[--line] rounded-xl p-5">
            <div className="text-[12.5px] text-[--ink-500] mb-1">{c.label}</div>
            <div className="text-[30px] font-bold" style={{ color: `var(${c.color})` }}>{c.value}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/admin/verifikasi" className="bg-[--plum-900] text-white text-[13.5px] font-bold px-5 py-2.5 rounded-[10px] hover:bg-[--plum-700]">
          Lihat Verifikasi Pending →
        </Link>
        <Link href="/admin/kelas/create" className="border border-[--line] text-[--plum-900] text-[13.5px] font-bold px-5 py-2.5 rounded-[10px] hover:bg-[--cream-100]">
          + Tambah Kelas Baru
        </Link>
      </div>
    </AdminLayout>
  );
}