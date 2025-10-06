
const profilePage = ({params}: any) => {
  return (
    <div className=" flex justify-center align-center items-center h-screen">
      <h1 className="text-4xl">Profile
        <span className="ml-2 p-2 bg-amber-500 text-black font-semibold rounded">{params.id}</span>
      </h1>
    </div>
  );
};

export default profilePage;