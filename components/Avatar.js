//next image
import Image from 'next/image';

const Avatar = () => {
  return (
  <div className='hidden xl:flex xl:max-w-none'>
    <Image
      src={'/jaypropic.png'}
      width={737}
      height={678}
      alt='website developers in my local'
      className=' w-full h-full'
    />
  </div>
  );
};
export default Avatar;
