import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router, usePage } from '@inertiajs/react';

function Item({ label, value, className = '' }) {
  return (
    <div className={className}>
      <div className="text-[11.5px] font-semibold text-[--ink-500] mb-0.5">{label}</div>
      <div className="text-[14px] text-[--ink-900]">{value || '-'}</div>
    </div>
  );
}

function Berkas({ id, jenis, label, ada }) {
  const url = `/admin/siswa/${id}/berkas/${jenis}`;

  return (
    <div className="bg-white border border-[--line] rounded-xl p-4">
      <div className="text-[12.5px] font-bold text-[--plum-900] mb-3">{label}</div>
      {ada ? (
        <>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              src={url}
              alt={label}
              className="w-full h-52 object-contain rounded-lg border border-[--line] bg-[--cream-050]"
            />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-[12.5px] font-semibold text-[--plum-700] hover:underline"
          >
            Buka ukuran penuh
          </a>
        </>
      ) : (
        <div className="h-52 rounded-lg border border-dashed border-[--line] flex items-center justify-center text-[12.5px] text-[--ink-500]">
          Belum diunggah
        </div>
      )}
    </div>
  );
}

export default function Show({ siswa }) {
  const { flash } = usePage().props;

  function hapus() {
    if (confirm(`Hapus data siswa "${siswa.nama}"?\n\nSeluruh data pendaftaran dan berkasnya ikut terhapus dan tidak bisa dikembalikan.`)) {
      router.delete(`/admin/siswa/${siswa.id}`);
    }
  }

  return (
    <AdminLayout title="Detail Siswa">
      {flash?.pesan && (
        <div className="mb-5 rounded-xl p-3.5 text-[13px] font-semibold" style={{ background: '#E3F1E7', color: '#3F7D57' }}>
          {flash.pesan}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <Link href="/admin/siswa" className="text-[13px] font-semibold text-[--ink-500] hover:text-[--plum-900]">
          ← Kembali ke daftar siswa
        </Link>
        <div className="flex gap-2">
          <Link
            href={`/admin/siswa/${siswa.id}/edit`}
            className="px-4 py-2.5 rounded-[10px] bg-[--plum-900] text-white text-[13px] font-bold hover:bg-[--plum-700]"
          >
            Ubah Data
          </Link>
          <button
            onClick={hapus}
            className="px-4 py-2.5 rounded-[10px] text-[13px] font-bold"
            style={{ background: '#F6E4E4', color: '#B24747' }}
          >
            Hapus
          </button>
        </div>
      </div>

      <div className="bg-white border border-[--line] rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between gap-3 mb-5">
          <h2 className="text-[20px] text-[--plum-900]">{siswa.nama}</h2>
          <span
            className="text-[11px] font-bold px-2.5 py-1 rounded-full"
            style={
              siswa.status_siswa === 'aktif'
                ? { background: '#E3F1E7', color: '#3F7D57' }
                : { background: '#F6E4E4', color: '#B24747' }
            }
          >
            {siswa.status_siswa}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          <Item label="NIK" value={siswa.nik} />
          <Item label="Tempat, Tanggal Lahir" value={siswa.ttl} />
          <Item label="No. HP / WhatsApp" value={siswa.hp} />
          <Item label="Email" value={siswa.email} />
          <Item label="Pendidikan Terakhir" value={siswa.pendidikan} />
          <Item label="Jenis Kelas" value={siswa.jenis_kelas} />
          <Item label="Keterampilan" value={siswa.keterampilan} />
          <Item label="Kelas" value={siswa.kelas} />
          <Item label="Alamat" value={siswa.alamat} className="sm:col-span-2" />
          <Item label="No. Pendaftaran" value={siswa.nomor_pendaftaran} />
        </div>
      </div>

      <h3 className="text-[16px] text-[--plum-900] mb-3">Berkas</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <Berkas id={siswa.id} jenis="kk" label="Fotokopi KK" ada={siswa.ada_kk} />
        <Berkas id={siswa.id} jenis="ktp" label="Fotokopi KTP" ada={siswa.ada_ktp} />
        <Berkas id={siswa.id} jenis="foto" label="Pas Foto" ada={siswa.ada_foto} />
      </div>
    </AdminLayout>
  );
}