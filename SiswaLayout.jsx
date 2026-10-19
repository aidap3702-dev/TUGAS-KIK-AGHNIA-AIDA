import { Link, router, usePage } from '@inertiajs/react';

  const menu = [
      { label: 'Ringkasan', href: '/dashboard', match: '/dashboard' },
      { label: 'Program Saya', href: '/dashboard/program', match: '/dashboard/program' },
      { label: 'Jadwal Kelas', href: '/dashboard/jadwal', match: '/dashboard/jadwal' },
      { label: 'Pembayaran', href: '/dashboard/pembayaran', match: '/dashboard/pembayaran' },
      { label: 'Sertifikat', href: '/dashboard/sertifikat', match: '/dashboard/sertifikat' },
      { label: 'Profil Saya', href: '/dashboard/profil', match: '/dashboard/profil' },
    ];

export default function SiswaLayout({ children, title }) {
  const { url } = usePage();

  function logout(e) {
    e.preventDefault();
    router.post('/logout');
  }

  return (
    <div className="min-h-screen flex bg-[--cream-050]">
      <aside className="w-64 bg-white border-r border-[--line] flex flex-col">
        <div className="h-[64px] flex items-center gap-2 px-6 border-b border-[--line] font-bold text-[--plum-900]">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[13px] font-bold"
            style={{ background: 'linear-gradient(135deg,var(--plum-900),var(--lilac-500))' }}
          >
            B
          </span>
          LPK Badami
        </div>
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2.5 rounded-[10px] text-[13.5px] font-semibold ${
                url === item.match
                  ? 'bg-[--plum-900] text-white'
                  : 'text-[--ink-500] hover:bg-[--cream-100] hover:text-[--plum-900]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[--line]">
          <a href="/logout" onClick={logout} className="px-4 py-2.5 block rounded-[10px] text-[13.5px] font-semibold text-[--red-600] hover:bg-[--red-100]">
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