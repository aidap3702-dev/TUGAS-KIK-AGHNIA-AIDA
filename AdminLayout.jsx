import { Link, router, usePage } from '@inertiajs/react';

const menu = [
  { label: 'Dashboard', href: '/admin', match: '/admin' },
  { label: 'Kelola Kelas', href: '/admin/kelas', match: '/admin/kelas' },
  { label: 'Verifikasi', href: '/admin/verifikasi', match: '/admin/verifikasi' },
  { label: 'Daftar Siswa', href: '/admin/siswa', match: '/admin/siswa' },
];

export default function AdminLayout({ children, title }) {
  const { url } = usePage();

  function logout(e) {
    e.preventDefault();
    router.post('/logout');
  }

  return (
    <div className="min-h-screen flex bg-[--cream-050]">
      <aside className="w-64 text-white flex flex-col" style={{ background: 'var(--plum-900)' }}>
        <div className="h-[64px] flex items-center gap-2 px-6 border-b border-white/10 font-bold">
          <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-[13px] font-bold">B</span>
          LPK Badami
          <span className="ml-auto text-[10px] font-bold bg-white/15 px-2 py-1 rounded-full">ADMIN</span>
        </div>
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2.5 rounded-[10px] text-[13.5px] font-semibold ${
                url === item.match || (item.match !== '/admin' && url.startsWith(item.match))
                  ? 'bg-white text-[--plum-900]'
                  : 'text-white/75 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href="/logout" onClick={logout} className="px-4 py-2.5 block rounded-[10px] text-[13.5px] font-semibold text-white/75 hover:bg-white/10 hover:text-white">
            Keluar
          </a>
        </div>
      </aside>

      <main className="flex-1">
        <div className="h-[64px] flex items-center px-8 border-b border-[--line] bg-white">
          <h1 className="text-[16px] font-bold text-[--plum-900]">{title}</h1>
        </div>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}