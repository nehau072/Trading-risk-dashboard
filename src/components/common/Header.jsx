function Header() {

  return (

    <div className="
      bg-slate-900
      border
      border-slate-700
      rounded-2xl
      p-6
      shadow-lg
      flex
      flex-col
      md:flex-row
      justify-between
      items-center
      gap-4
    ">


      <div>

        <h1 className="
          text-3xl
          md:text-4xl
          font-bold
          text-white
        ">

          Trading Risk Dashboard

        </h1>


        <p className="
          text-gray-400
          mt-2
        ">

          Monitor account health and trading risk in real time

        </p>


      </div>




      <div className="
        bg-green-500/20
        border
        border-green-500/30
        px-5
        py-3
        rounded-xl
      ">


        <p className="text-green-400 font-semibold">

          ● Market Active

        </p>


      </div>


    </div>

  );

}


export default Header;