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
    <div class="sub">Dicetak <?php echo e($tanggal); ?> &middot; Total <?php echo e($siswa->count()); ?> siswa</div>

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
            <?php $__empty_1 = true; $__currentLoopData = $siswa; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $i => $s): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                <tr class="<?php echo e($i % 2 ? 'alt' : ''); ?>">
                    <td><?php echo e($i + 1); ?></td>
                    <td><?php echo e($s['nama']); ?></td>
                    <td><?php echo e($s['nik'] ?: '-'); ?></td>
                    <td><?php echo e($s['ttl']); ?></td>
                    <td><?php echo e($s['alamat'] ?: '-'); ?></td>
                    <td><?php echo e($s['hp'] ?: '-'); ?></td>
                    <td><?php echo e($s['pendidikan'] ?: '-'); ?></td>
                    <td><?php echo e($s['email']); ?></td>
                    <td><?php echo e($s['jenis_kelas']); ?></td>
                    <td><?php echo e($s['keterampilan'] ?: '-'); ?></td>
                    <td><?php echo e($s['ada_kk'] ? 'Ada' : 'Belum'); ?></td>
                    <td><?php echo e($s['ada_ktp'] ? 'Ada' : 'Belum'); ?></td>
                    <td><?php echo e($s['ada_foto'] ? 'Ada' : 'Belum'); ?></td>
                    <td><?php echo e(ucfirst($s['status_siswa'])); ?></td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                <tr><td colspan="14">Belum ada data siswa.</td></tr>
            <?php endif; ?>
        </tbody>
    </table>
</body>
</html><?php /**PATH C:\Users\Axioo\lkp-badami\resources\views/exports/siswa-pdf.blade.php ENDPATH**/ ?>