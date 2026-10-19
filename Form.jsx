import AdminLayout from '@/Layouts/AdminLayout';
import { Link, useForm } from '@inertiajs/react';

function Field({ label, error, children, className = '' }) {
  return (
    <div className={className}>
      <label className="block text-[12.5px] font-semibold text-[--ink-900] mb-1.5">{label}</label>
      {children}
      {error && <div className="text-[12px] mt-1" style={{ color: '#B24747' }}>{error}</div>}
    </div>
  );
}

export default function Form({ siswa, kelas }) {
  const edit = Boolean(siswa);

  const { data, setData, post, processing, errors } = useForm({
    ...(edit ? { _method: 'put' } : {}),
    nama: siswa?.nama ?? '',
    nik: siswa?.nik ?? '',
    tempat_lahir: siswa?.tempat_lahir ?? '',
    tgl_lahir: siswa?.tgl_lahir ?? '',
    alamat: siswa?.alamat ?? '',
    hp: siswa?.hp ?? '',
    pendidikan: siswa?.pendidikan ?? '',
    email: siswa?.email ?? '',
    password: '',
    kelas_id: siswa?.kelas_id ? String(siswa.kelas_id) : '',
    sumber_subsidi: ['subsidi', 'mandiri'].includes(siswa?.pembiayaan) ? siswa.pembiayaan : '',
    status_siswa: siswa?.status_siswa ?? 'aktif',
    kk_file: null,
    ktp_file: null,
    foto: null,
  });

  function submit(e) {
    e.preventDefault();
    post(edit ? `/admin/siswa/${siswa.id}` : '/admin/siswa', { forceFormData: true });
  }

  const adaError = Object.keys(errors).length > 0;

  return (
    <AdminLayout title={edit ? 'Ubah Data Siswa' : 'Tambah Siswa'}>
      <form onSubmit={submit} className="max-w-3xl">
        {adaError && (
          <div className="mb-5 rounded-xl p-4 text-[13px]" style={{ background: '#F6E4E4', border: '1px solid #E7B8B8', color: '#B24747' }}>
            <div className="font-bold mb-1.5">Data belum bisa disimpan. Periksa isian berikut:</div>
            <ul className="list-disc pl-5 space-y-0.5">
              {Object.values(errors).map((pesan, i) => <li key={i}>{pesan}</li>)}
            </ul>
          </div>
        )}

        <div className="bg-white border border-[--line] rounded-xl p-6 mb-5">
          <h3 className="text-[16px] text-[--plum-900] mb-4">Data diri</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nama Lengkap" error={errors.nama}>
              <input className="input" value={data.nama} onChange={(e) => setData('nama', e.target.value)} />
            </Field>
            <Field label="NIK" error={errors.nik}>
              <input maxLength={16} className="input" value={data.nik} onChange={(e) => setData('nik', e.target.value)} placeholder="16 digit sesuai KTP" />
            </Field>
            <Field label="Tempat Lahir" error={errors.tempat_lahir}>
              <input className="input" value={data.tempat_lahir} onChange={(e) => setData('tempat_lahir', e.target.value)} />
            </Field>
            <Field label="Tanggal Lahir" error={errors.tgl_lahir}>
              <input type="date" className="input" value={data.tgl_lahir} onChange={(e) => setData('tgl_lahir', e.target.value)} />
            </Field>
            <Field label="No. HP / WhatsApp" error={errors.hp}>
              <input className="input" value={data.hp} onChange={(e) => setData('hp', e.target.value)} />
            </Field>
            <Field label="Pendidikan Terakhir" error={errors.pendidikan}>
              <select className="input" value={data.pendidikan} onChange={(e) => setData('pendidikan', e.target.value)}>
                <option value="">Pilih pendidikan</option>
                <option>SD</option>
                <option>SMP</option>
                <option>SMA/SMK</option>
                <option>Diploma/Sarjana</option>
              </select>
            </Field>
            <Field label="Alamat" className="sm:col-span-2" error={errors.alamat}>
              <input className="input" value={data.alamat} onChange={(e) => setData('alamat', e.target.value)} />
            </Field>
          </div>
        </div>

        <div className="bg-white border border-[--line] rounded-xl p-6 mb-5">
          <h3 className="text-[16px] text-[--plum-900] mb-4">Akun</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Email" error={errors.email}>
              <input type="email" className="input" value={data.email} onChange={(e) => setData('email', e.target.value)} />
            </Field>
            <Field label={edit ? 'Kata Sandi Baru (kosongkan jika tidak diubah)' : 'Kata Sandi'} error={errors.password}>
              <input type="password" className="input" value={data.password} onChange={(e) => setData('password', e.target.value)} placeholder="Minimal 8 karakter" />
            </Field>
            <Field label="Status Siswa" error={errors.status_siswa}>
              <select className="input" value={data.status_siswa} onChange={(e) => setData('status_siswa', e.target.value)}>
                <option value="aktif">Aktif</option>
                <option value="nonaktif">Nonaktif</option>
              </select>
            </Field>
          </div>
        </div>

        <div className="bg-white border border-[--line] rounded-xl p-6 mb-5">
          <h3 className="text-[16px] text-[--plum-900] mb-4">Kelas</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Keterampilan / Kelas" error={errors.kelas_id}>
              <select className="input" value={data.kelas_id} onChange={(e) => setData('kelas_id', e.target.value)}>
                <option value="">Pilih kelas</option>
                {kelas.map((k) => (
                  <option key={k.id} value={k.id}>{k.program?.nama} — {k.nama_kelas}</option>
                ))}
              </select>
            </Field>
            <Field label="Jenis Kelas" error={errors.sumber_subsidi}>
              <select className="input" value={data.sumber_subsidi} onChange={(e) => setData('sumber_subsidi', e.target.value)}>
                <option value="">Pilih jenis kelas</option>
                <option value="mandiri">Reguler (berbayar)</option>
                <option value="subsidi">Banper (gratis)</option>
              </select>
            </Field>
          </div>
        </div>

        <div className="bg-white border border-[--line] rounded-xl p-6 mb-6">
          <h3 className="text-[16px] text-[--plum-900] mb-1">Berkas</h3>
          <p className="text-[12.5px] text-[--ink-500] mb-4">
            Format JPG atau PNG, maksimal 2 MB per file.
            {edit && ' Unggah file baru hanya jika ingin mengganti yang lama.'}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Fotokopi KK" error={errors.kk_file}>
              <input type="file" accept="image/png,image/jpeg,image/jpg" className="input" onChange={(e) => setData('kk_file', e.target.files[0])} />
              {edit && <div className="text-[11.5px] text-[--ink-500] mt-1">{siswa.ada_kk ? 'Sudah ada' : 'Belum ada'}</div>}
            </Field>
            <Field label="Fotokopi KTP" error={errors.ktp_file}>
              <input type="file" accept="image/png,image/jpeg,image/jpg" className="input" onChange={(e) => setData('ktp_file', e.target.files[0])} />
              {edit && <div className="text-[11.5px] text-[--ink-500] mt-1">{siswa.ada_ktp ? 'Sudah ada' : 'Belum ada'}</div>}
            </Field>
            <Field label="Pas Foto" error={errors.foto}>
              <input type="file" accept="image/png,image/jpeg,image/jpg" className="input" onChange={(e) => setData('foto', e.target.files[0])} />
              {edit && <div className="text-[11.5px] text-[--ink-500] mt-1">{siswa.ada_foto ? 'Sudah ada' : 'Belum ada'}</div>}
            </Field>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            disabled={processing}
            className="bg-[--plum-900] text-white text-[13.5px] font-bold px-6 py-3 rounded-[10px] hover:bg-[--plum-700] disabled:opacity-60"
          >
            {processing ? 'Menyimpan...' : edit ? 'Simpan Perubahan' : 'Simpan Siswa'}
          </button>
          <Link
            href={edit ? `/admin/siswa/${siswa.id}` : '/admin/siswa'}
            className="text-[13.5px] font-semibold text-[--ink-500] hover:text-[--plum-900]"
          >
            Batal
          </Link>
        </div>
      </form>
    </AdminLayout>
  );
}