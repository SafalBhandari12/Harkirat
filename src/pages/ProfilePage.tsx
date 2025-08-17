function ProfilePage() {
  return (
    <>
      <div className='w-96 p-3 relative'>
        <div className='h-28 bg-slate-400'>hi</div>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s'
          alt=''
          className='absolute rounded-full left-1/2 -translate-x-1/2 top-16 w-28'
        />
        <div className='h-72 bg-slate-600 flex flex-col gap-4 justify-center items-center'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col justify-center items-center'>
              <div>Rita Correia</div>
              <div>London</div>
            </div>
            <hr />
            <div className='flex justify-center align-middle items-centers gap-6'>
              <div className='flex flex-col justify-center items-center'>
                <div>80k</div>
                <div>Followers</div>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div>80k</div>
                <div>Followers</div>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <div>80k</div>
                <div>Followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
