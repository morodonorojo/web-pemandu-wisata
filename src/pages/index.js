import Head from "next/head";
import Image from "next/image";

import ArrowDown from "../assets/circle-arrow-down.svg";
import { FasilitasCard } from "../components/Card";
import { createClient } from "../prismic/prismicio";

export default function Home({ fasilitas }) {
  console.log(fasilitas);

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
            <h2 className="text-sm">Pesona Ngiroboyo</h2>
            <h1 className="text-3xl">Tourism Information Center</h1>
            <p className="text-sm">Pusat Informasi Wisata Pantai Ngiroboyo</p>
          </div>
          <div className="text-black text-center cursor-pointer">
            <p className="text-sm">Pelajari Lebih Lanjut</p>
            <ArrowDown className="mx-auto" />
          </div>
        </div>
      </section>

      <section className="fasilitas w-full p-4">
        <h2 className="font-bold my-4">Fasilitas Pantai Ngiroboyo</h2>
        <div className="fasilitas-list w-full">
          {fasilitas.map((item, index) => {
            return (
              <FasilitasCard
                key={item.id}
                title={item.data.title}
                description={item.data.description}
                icon={item.data.icon}
                color={item.data.color}
                className="mb-4"
              />
            );
          })}
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
