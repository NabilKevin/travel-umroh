import { useContext } from "react"
import { AppContext } from "../../App"

const Description = () => {
    const {mode} = useContext(AppContext)
    return (
        <div className={`container-lg mt-5 mb-5 text-start bg-${mode === 'light' ? 'lights' : mode} text-${mode === 'dark' ? 'light' : 'dark'} description`}>
            <div className="mb-5">
            <h3 className='mb-3 fs-1'>Keuntungan menggunakan Nabil Travel</h3>
                <p className="fs-5">
                    Nabil Travel menawarkan berbagai keuntungan untuk perjalanan umrah Anda, antara lain:
                </p>
                <ol className="ps-3 fs-5">
                    <li>
                        <strong>Paket Lengkap:</strong> Kami menyediakan paket umrah yang lengkap, termasuk tiket pesawat, akomodasi, transportasi lokal, dan makanan, sehingga Anda tidak perlu repot mengurus detail perjalanan sendiri.
                    </li>
                    <li>
                        <strong>Pembimbing Berpengalaman:</strong> Kami memiliki tim pembimbing umrah yang berpengalaman dan bersertifikat untuk memastikan perjalanan Anda berjalan lancar dan sesuai dengan syariat Islam.
                    </li>
                    <li>
                        <strong>Harga Kompetitif:</strong> Kami menawarkan harga yang kompetitif dengan berbagai pilihan paket yang dapat disesuaikan dengan budget Anda.
                    </li>
                    <li>
                    <strong>Layanan Pelanggan 24/7:</strong> Layanan pelanggan kami siap membantu Anda kapan saja, mulai dari proses pendaftaran hingga kembali ke tanah air.
                    </li>
                    <li>
                        <strong>Akomodasi Nyaman:</strong> Kami bekerja sama dengan hotel-hotel terbaik di Mekkah dan Madinah untuk memberikan kenyamanan maksimal selama Anda beribadah.
                    </li>
                    <li>
                        <strong>Asuransi Perjalanan:</strong> Setiap paket umrah kami termasuk asuransi perjalanan untuk memberikan rasa aman dan tenang selama perjalanan.
                    </li>
                    <li>
                        <strong>Program Manasik:</strong> Kami menyediakan program manasik umrah sebelum keberangkatan untuk memberikan pengetahuan dan kesiapan mental bagi para jamaah.
                    </li>
                </ol>
            </div>
            <div className="mb-5">
            <h3 className='mb-3 fs-1'>Apa itu umroh</h3>
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda expedita aliquam rem quis, voluptates officiis itaque enim! Autem laudantium perspiciatis temporibus blanditiis animi nobis, adipisci dolorum illum tempore atque delectus libero consectetur vitae. Ad optio, tenetur reiciendis illo totam nemo? Minus maiores atque ea sequi quibusdam esse? Eligendi vel, totam dicta, ipsa dolorum quas incidunt ducimus, quo enim error cupiditate? Illo numquam facere fugiat et soluta facilis odio labore magni voluptates impedit quidem veniam incidunt doloribus dolorum laboriosam dolores suscipit hic, eius optio expedita accusamus laborum? Omnis expedita totam ipsum quam rerum est hic quod, aut ducimus praesentium reiciendis.</p>
            </div>
            <div className="mb-5">
            <h3 className='mb-3 fs-1'>Bagaimana cara umroh</h3>
            <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda expedita aliquam rem quis, voluptates officiis itaque enim! Autem laudantium perspiciatis temporibus blanditiis animi nobis, adipisci dolorum illum tempore atque delectus libero consectetur vitae. Ad optio, tenetur reiciendis illo totam nemo? Minus maiores atque ea sequi quibusdam esse? Eligendi vel, totam dicta, ipsa dolorum quas incidunt ducimus, quo enim error cupiditate? Illo numquam facere fugiat et soluta facilis odio labore magni voluptates impedit quidem veniam incidunt doloribus dolorum laboriosam dolores suscipit hic, eius optio expedita accusamus laborum? Omnis expedita totam ipsum quam rerum est hic quod, aut ducimus praesentium reiciendis.</p>
            </div>
        </div>
    )
}

export default Description;