import React from 'react'
import AboutGallery from '../../components/AboutGallery'
import "../Stylings/About.css"
import Layout from '../Layout'

function AboutPage() {
  return (
    <Layout pageName={"Tentang"}>
        <section className="About">

        <AboutGallery />

        {/* About Us Text Section */}
        <div className="about-container alt">
            <div className="about-text">     
                <h3>Tentang Kami</h3>
                <p className="paragraph">
                    Selamat datang di website Sistem Deteksi Hama dan Serangga! <br />
                    Website ini dikembangkan oleh Hendy dan Mitch dari Universitas Klabat, sebagai solusi berbasis AI untuk membantu para petani dan orang yang berkebun dalam mengidentifikasi hama dan serangga yang dapat merusak tanaman.
                </p>
                <p className="paragraph">
                    Dengan menggunakan teknologi AI Gemini, website ini mampu mendeteksi jenis hama dan serangga hanya melalui gambar yang diunggah oleh pengguna. Sistem ini dirancang khusus untuk membantu petani di daerah Tomohon, terutama di wilayah Kebun Mahawu, agar lebih mudah dalam mengambil tindakan pencegahan dan pengendalian hama secara efektif.
                </p>
                <p className="paragraph">
                    Kami berharap inovasi ini dapat memberikan manfaat bagi para petani dan masyarakat luas dalam meningkatkan produktivitas pertanian. Jika Anda memiliki pertanyaan atau masukan, jangan ragu untuk menghubungi kami!
                </p>
                <p className="closing">Terima kasih telah menggunakan layanan kami. 🌱🚀</p>
            </div>
        </div>

        <div className="contact-us">
            <h3>Contact :</h3>
            <div className="contact-container">
                <div className="contact-info">
                    <h4>Hendy</h4>
                    <p>📧 Email: s22110058@student.unklab.ac.id</p>
                </div>
                <div className="contact-info">
                    <h4>Mitch</h4>
                    <p>📧 Email: s22110054s@student.unklab.ac.id</p>
                </div>
            </div>
        </div>
        </section>
    </Layout>
  )
}

export default AboutPage;