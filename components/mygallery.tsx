import { getImageUrl } from '../utils/utils';

// Ini adalah komponen yang diekstrak untuk mengurangi duplikasi
function MyProfile({ name, imageId, profession, awardsCount, awards, discovery }: any) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profesi: </b>
          {profession}
        </li>
        <li>
          <b>Penghargaan: {awardsCount} </b>
          ({awards})
        </li>
        <li>
          <b>Telah Menemukan: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

// Ini adalah komponen utama yang akan dirender
export default function MyGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <MyProfile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession="Fisikawan dan kimiawan"
        awardsCount={4}
        awards="Penghargaan Nobel Fisika, Penghargaan Nobel Kimia, Medali Davy, Medali Matteucci"
        discovery="polonium (unsur kimia)"
      />
      <MyProfile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="Ahli Geokimia"
        awardsCount={2}
        awards="Penghargaan Miyake Geokimia, Penghargaan Tanaka"
        discovery="sebuah metode untuk mengukur karbon dioksida pada air laut"
      />
    </div>
  );
}