import Image from 'next/image';

const PauseIcon = () => {
  return (
    <>
      <Image
        src="/icons/pause.png"
        alt=""
        width={24}
        height={24}
        layout="fixed"
      />
    </>
  );
};

export default PauseIcon;
