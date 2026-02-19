import { createTheme } from '@mui/material/styles'

export const FAQContent = [
  {
    title: 'Bagaimana cara melakukan voting di PEMIRA IKM FASILKOM UI?',
    desc: 'Untuk dapat melakukan voting pada PEMIRA IKM FASILKOM UI, kamu hanya harus melakukan login dengan menggunakan SSO. Setelah kamu sudah login, kamu dapat mengakses halaman e-voting. Pastikan dahulu data dirimu sudah benar pada halaman e-voting. Pastikan kandidat yang ingin kamu pilih terdapat dalam daftar kandidat di halaman e-voting. Klik tombol "Pilih" untuk menggunakan hak suara kamu.',
  },
  {
    title: 'Apakah mahasiswa selain FASILKOM bisa melakukan voting?',
    desc: 'Tidak, hanya mahasiswa yang terdaftar sebagai mahasiswa aktif pada Fakultas Ilmu Komputer yang dapat melakukan voting pada PEMIRA IKM FASILKOM UI.',
  },
  {
    title: 'Apakah saya bisa melakukan voting lebih dari sekali?',
    desc: 'Tidak, kamu hanya boleh menggunakan hak suara kamu sebanyak 1 kali. Oleh karena itu, pastikan pilihan kamu sudah tepat ya!',
  },
  {
    title: 'Apa yang harus saya siapkan untuk melakukan voting?',
    desc: 'Kamu hanya harus menyiapkan akun SSO kamu.',
  },
  {
    title: 'Kapan voting dimulai?',
    desc: 'Voting akan dimulai pada tanggal 21 Januari dan akan berlangsung selama 7 hari sampai 27 Januari dan akan dilakukan penghitungan suara pada tanggal 28 Januari bersamaan dengan dilakukannya Grand Closing.',
  },
]

export const style = createTheme({
  typography: {
    fontFamily: 'Inter',
    h1: {
      fontSize: 24,
      '@media (min-width:900px)': {
        fontSize: 64,
      },
      fontWeight: 600,
    },
    h2: {
      fontSize: 32,
      '@media (min-width:900px)': {
        fontSize: 48,
      },
      fontWeight: 600,
      color: '#FEE87A',
    },
    h3: {
      fontSize: 32,
      '@media (min-width:900px)': {
        fontSize: 64,
      },
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      '@media (min-width:900px)': {
        fontSize: 20,
      },
    },
    body2: {
      fontSize: 14,
      '@media (min-width:900px)': {
        fontSize: 16,
      },
    },
  },
  breakpoints: {
    values: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      xxs: 0,
      xs: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})
