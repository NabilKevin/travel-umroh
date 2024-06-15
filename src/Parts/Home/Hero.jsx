const Hero = () => {
    return (
        <div className="hero w-100 position-relative contents mb-5">
            <img src="/src/images/Mekah.jpg" />
            <div className="container-lg text-light position-absolute top-0 start-0 z-1 end-0 bottom-0 d-flex justify-content-center flex-column">
            <h1>Nabil Travel</h1>
            <h2 className=''>Menggapai Kesucian dengan Perjalanan Penuh Berkah</h2>
            <p className='mt-4 fw-normal'>Perjalan umroh bersama Nabil Travel menyediakan berbagai fasilitas yang sangat terbaik, dan harga yang sangat terjangkau mulai dari 20jt - 35jt saja</p>
            </div>
            <div className="position-absolute opacity-75 top-0 bottom-0 start-0 end-0 bg-black"></div>
        </div>
    )
}

export default Hero;