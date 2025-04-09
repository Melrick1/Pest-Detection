import Layout from "../Layout"
import "../Stylings/Help.css"

function HelpPage() {
  return (
    <Layout pageName={"Bantuan"}>
        <section className="Help">
            <h2>Cara Penggunaan Website Deteksi Hama dan Serangga</h2>

            {/* Step 1 */}
            <section className="step alt">
            <img src="/images/pages/SignIn.png" alt="Step 1" className="step-image" />
            <div className="step-text">
                <h3>1. Melakukan Pendaftaran</h3>
                <p>Lakukan pendaftaran akun dengan menggunakan nama, email dan password.</p>
                <p className="note">
                Catatan: Langkah ini penting agar sistem dapat menyimpan dan menampilkan hasil deteksi khusus milik Anda.
                </p>
            </div>
            </section>

            {/* Step 2 */}
            <section className="step">
            <img src="/images/pages/SignUp.png" alt="Step 2" className="step-image" />
            <div className="step-text">
                <h3>2. Masuk ke Akun</h3>
                <p>Lakukan Sign In menggunakan email dan password yang telah Anda daftarkan sebelumnya.</p>
                <p className="note">
                Catatan: Jika Anda lupa dengan password anda, Anda dapat menekan pilihan "Lupa Password" dan sistem otomatis akan mengirim link pada email yang Anda masukkan.
                </p>
            </div>
            </section>

            {/* Step 3 */}
            <section className="step alt">
            <img src="/images/pages/SelectFile.png" alt="Step 3" className="step-image" />
            <div className="step-text">
                <h3>3. Memilih Gambar dari Perangkat</h3>
                <p>
                Setelah berhasil masuk, klik ikon berbentuk kotak seperti di petunjuk agar sistem dapat langsung mengakses file manager.
                </p>
                <p>
                Setelah itu silahkan memilih gambar tanaman yang telah tercemar hama atau serangga yang ingin Anda deteksi dari perangkat Anda.
                </p>
                <p className="note">
                Catatan: - Pastikan gambar jelas agar sistem AI dapat menganalisis dengan akurat.
                </p>
            </div>
            </section>

            {/* Step 4 */}
            <section className="step">
            <img src="/images/pages/Selected.png" alt="Step 4" className="step-image" />
            <div className="step-text">
                <h3>4. Memulai Deteksi</h3>
                <p>
                Setelah gambar berhasil dipilih, klik tombol "Deteksi" untuk memulai proses analisis menggunakan AI Gemini.
                </p>
                <p className="note">
                Catatan: Sistem akan memproses gambar secara otomatis untuk mengidentifikasi jenis hama atau serangga.
                </p>
            </div>
            </section>

            {/* Step 5 */}
            <section className="step alt">
            <img src="/images/pages/Result.png" alt="Step 5" className="step-image" />
            <div className="step-text">
                <h3>5. Lihat Hasil Deteksi</h3>
                <p>
                Tunggu beberapa detik, sistem akan menampilkan hasil identifikasi secara detail hama atau serangga.
                </p>
                <p>
                Hasil ini dapat menjadi referensi untuk mengambil langkah pengendalian yang tepat.
                </p>
            </div>
            </section>

            {/* Step 6 */}
            <section className="step">
            <img src="/images/pages/Navigation.png" alt="Step 6" className="step-image" />
            <div className="step-text">
                <h3>6. Memindah Halaman </h3>
                <p>
                Untuk pindah halaman dalam sistem, perlu diakses melaului menu navigasi.
                </p>
                <p>
                Untuk membuka/menutup menu navigasi, perlu menekan tombol menu di pojok atas kiri.
                </p>
            </div>
            </section>

            {/* Step 7 */}
            <section className="step alt">
            <img src="/images/pages/History.png" alt="Step 6" className="step-image" />
            <div className="step-text">
                <h3>7. Mengakses Riwayat Deteksi</h3>
                <p>
                Untuk melihat kembali hasil deteksi sebelumnya, pilih menu “Riwayat” di menu navigasi.
                </p>
                <p>
                Fitur ini memungkinkan Anda untuk melihat setiap deteksi yang telah Anda lakukan.
                </p>
            </div>
            </section>
        </section>
    </Layout>
  )
}

export default HelpPage