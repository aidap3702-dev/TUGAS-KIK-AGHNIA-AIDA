<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <title>Data Siswa LKP Badami</title>
    <style>
        body { font-family: DejaVu Sans, sans-serif; font-size: 8px; color: #332438; }
        h1 { font-size: 15px; margin: 0 0 2px; color: #4A3450; }
        .sub { font-size: 9px; color: #8A7789; margin-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; }
        th { background: #4A3450; color: #ffffff; text-align: left; padding: 5px 4px; font-size: 8px; }
        td { border-bottom: 1px solid #E5D8E5; padding: 4px; vertical-align: top; }
        .alt td { background: #FAF6F8; }
    </style>
</head>
<body>
    <h1>Data Siswa LKP Badami</h1>
    <div class="sub">Dicetak {{ $tanggal }} &middot; Total {{ $siswa->count() }} siswa</div>

    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Nama</th>
                <th>NIK</th>
                <th>Tempat, Tgl Lahir</th>
                <th>Alamat</th>
                <th>No. HP/WA</th>
                <th>Pendidikan</th>
                <th>Email</th>
                <th>Jenis Kelas</th>
                <th>Keterampilan</th>
                <th>FC KK</th>
                <th>FC KTP</th>
                <th>Pas Foto</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($siswa as $i => $s)
                <tr class="{{ $i % 2 ? 'alt' : '' }}">
                    <td>{{ $i + 1 }}</td>
                    <td>{{ $s['nama'] }}</td>
                    <td>{{ $s['nik'] ?: '-' }}</td>
                    <td>{{ $s['ttl'] }}</td>
                    <td>{{ $s['alamat'] ?: '-' }}</td>
                    <td>{{ $s['hp'] ?: '-' }}</td>
                    <td>{{ $s['pendidikan'] ?: '-' }}</td>
                    <td>{{ $s['email'] }}</td>
                    <td>{{ $s['jenis_kelas'] }}</td>
                    <td>{{ $s['keterampilan'] ?: '-' }}</td>
                    <td>{{ $s['ada_kk'] ? 'Ada' : 'Belum' }}</td>
                    <td>{{ $s['ada_ktp'] ? 'Ada' : 'Belum' }}</td>
                    <td>{{ $s['ada_foto'] ? 'Ada' : 'Belum' }}</td>
                    <td>{{ ucfirst($s['status_siswa']) }}</td>
                </tr>
            @empty
                <tr><td colspan="14">Belum ada data siswa.</td></tr>
            @endforelse
        </tbody>
    </table>
</body>
</html>