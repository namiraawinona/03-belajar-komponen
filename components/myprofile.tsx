import { getImageUrlV2 } from '../utils/utils';

function MyAvatar({ person, size }: any) {
  // Logika Soal 8: Jika size kurang dari 90, gunakan 's', jika tidak gunakan 'b'
  const imageSize = size < 90 ? 's' : 'b';
  
  return (
    <img
      className="avatar"
      src={getImageUrlV2(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function MyProfile() {
  return (
    <div>
      <h3>Avatar Ukuran Kecil (size = 40):</h3>
      <MyAvatar
        size={40}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP'
        }}
      />
      
      <h3>Avatar Ukuran Besar (size = 120):</h3>
      <MyAvatar
        size={120}
        person={{
          name: 'Gregorio Y. Zara',
          imageId: '7vQD0fP'
        }}
      />
    </div>
  );
}