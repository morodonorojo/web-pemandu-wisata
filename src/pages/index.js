import Head from "next/head";
import Image from "next/image";

import ArrowDown from "../assets/circle-arrow-down.svg";
import { FasilitasCard } from "../components/Card";
import { createClient } from "../prismic/prismicio";

export default function Home({ fasilitas }) {
  return (
    <main className="bg-white text-black">
      <Head>
        <title>TIC Ngiroboyo | Moro Donorojo 2022</title>
        <meta
          name="description"
          content="KKN-PPM (Kuliah Kerja Nyata - Pembelajaran Pemberdayaan Masyarakat) UGM adalah salah  satu bentuk  nyata  komitmen  kerakyatan  dan kebangsaan Universitas Gadjah Mada. KKN-PPM UGM ini  merupakan  mata  kuliah  wajib  yang mempunyai  sejarah  panjang;  rintisannya  telah dimulai  sejak  tahun  1951. KKN-PPM UGM 2022 Moro Donorojo menyasar dua desa yang terdapat di Kecamatan Donorojo, Kabupaten Pacitan, yaitu Desa Sendang dan Desa Kalak. KKN-PPM UGM 2022 Moro Donorojo memiliki tema 'Peningkatan Ekonomi Desa Kalak dan Sendang yang Berkelanjutan Melalui Konsep Ekowisata' yang bertujuan untuk mengembangkan potensi pariwisata dan meningkatkan ekonomi masyarkat pada Desa Sendang dan Desa Kalak"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero w-full h-screen flex flex-col relative rounded-b-2xl overflow-hidden">
        <div className="absolute w-full h-full">
          <Image
            src="/images/bg-hero.jpg"
            layout="fill"
            objectFit="cover"
            alt="Gambar background mengenai pesisir pantai"
          />
        </div>
        <div className="hero-text absolute w-full h-full p-4 py-12 flex flex-col justify-between">
          <div className="text-white text-center">
            <h2 className="text-sm md:text-md">Pesona Ngiroboyo</h2>
            <h1 className="text-3xl md:text-4xl">Tourism Information Center</h1>
            <p className="text-sm md:text-md">
              Pusat Informasi Wisata Pantai Ngiroboyo
            </p>
          </div>
          <div className="text-black text-center cursor-pointer">
            <p className="text-sm">Pelajari Lebih Lanjut</p>
            <ArrowDown className="mx-auto" />
          </div>
        </div>
      </section>

      <section className="fasilitas p-4 mx-auto md:max-w-3xl">
        <h2 className="font-bold my-4">Fasilitas Pantai Ngiroboyo</h2>
        <div className="fasilitas-list w-full md:flex md:flex-row md:flex-wrap md:justify-center">
          {fasilitas.map((item, index) => {
            return (
              <FasilitasCard
                key={item.id}
                title={item.data.title}
                description={item.data.description}
                icon={item.data.icon}
                color={item.data.color}
                className="mb-4 md:mx-2"
              />
            );
          })}
        </div>
      </section>

      <section className="event p-4 mx-auto md:max-w-3xl">
        <h2 className="font-bold my-4">Event Pesona Ngiroboyo</h2>
        <div className="fasilitas-list w-full">
          <div className="relative w-full aspect-[3/2]">
            <Image
              src="/images/bg-event.jpg"
              alt="Foto balap kapal dayung"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <h3 className="font-bold my-2 text-xl">Lomba Dayung Tahunan</h3>
          <p className="mb-2 text-justify">
            Saksikan kemeriahan perayaan Lomba Dayung di Sungai Ngiroboyo yang
            berbatasan langsung dengan Pantai Ngiroboyo. Perayaan ini diadakan
            tiap satu tahun sekali dan dapat disaksikan oleh umum.
          </p>
          <p className="mb-2 text-justify">
            Unik dan menarik, hanya dapat ditemukan di Pesona Ngiroboyo. Untuk
            informasi detail waktu pelaksanaan Lomba Dayung Tahunan, silakan
            hubungi Tourism Information Officer dibawah!
          </p>
        </div>
      </section>

      <section className="lokasi p-4 mx-auto md:max-w-3xl">
        <div className="header">
          <div className="flex flex-row justify-start items-center">
            <div className="relative aspect-square w-32">
              <Image
                src="/images/lokasi.png"
                alt="Foto logo lokasi"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="font-bold my-4 ml-2">Lokasi Pantai Ngiroboyo</h2>
          </div>
          <p className="my-2 font-bold text-gray-custom text">
            Pantai Ngiroboyo, Sambi, Sendang, Donorojo, Kabupaten Pacitan, Jawa
            Timur
          </p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7137.977597508164!2d110.95930525056734!3d-8.22585982406108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bdcf147f72ea5%3A0x50aff4f688c8edaf!2sPantai%20Ngiroboyo!5e0!3m2!1sid!2sid!4v1659002640526!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-lg aspect-[3/2] w-full"
          />
        </div>
        <div className="informasi-akses">
          <h3 className="font-bold my-2 text-xl">
            Informasi Jalan ke Pantai Ngiroboyo
          </h3>

          <ul className="list-disc px-4 text-justify">
            <li>
              Jalan untuk ke Pantai Ngiroboyo sebagian berupa jalan cor dan
              berbatu, untuk itu pastikan kondisi pengendara prima agar lebih
              aman.
            </li>
            <li>
              Pastikan kendaraan sudah di cek, terutama untuk kondisi rem, ban,
              dan mesin.
            </li>
            <li>Kendaraan yang disarankan adalah motor, mobil, dan elf.</li>
            <li>
              Sudah tersedia plang penunjuk jalan untuk sampai ke Pantai
              Ngiroboyo
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const client = createClient();

  const fasilitas = await client.getAllByType("fasilitas_ngiroboyo", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  return {
    props: { fasilitas },
  };
}
