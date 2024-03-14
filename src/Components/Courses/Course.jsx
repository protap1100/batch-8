const Course = ({course}) => {
    console.log(course)
    const {name,description,photo,price,credit} = course;
    console.log(name)
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-center">
        <figure><img src={photo} alt="" /></figure>
        <div className="card-body ">
          <h2 className="text-center font-bold text-xl">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
            <p>Price:{price}</p>
                 <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    >
                    <path d="M12 15c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0013 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1z" />
                    <path d="M5 2H2v2h2v17a1 1 0 001 1h14a1 1 0 001-1V4h2V2H5zm13 18H6V4h12z" />
                 </svg>
            </div>
            <div className="flex items-center gap-5">
            <p>Total Credit:{credit}</p>
                <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    >
                    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
            </div>
          </div>
          <div>
            <button className="mt-5 btn w-full bg-blue-950 btn-primary">Select</button>
          </div>
        </div>
      </div>
    );
};

export default Course;