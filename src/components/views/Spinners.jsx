import BarLoader from "react-spinners/BarLoader";

const PersonalBarLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <BarLoader
      color="#ff0000"
      height={10}
      width={150}
/>
    </div>
  )
}

export {PersonalBarLoader};
