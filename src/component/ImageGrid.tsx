import taskGrid1 from "../assets/task grid1.png";
import taskGrid2 from "../assets/taskGrid2.jpg";
const ImageGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      <div>
        <img
          src={taskGrid1}
          className="h-full w-full object-cover rounded-md shadow-xl"
          alt="banner image"
        />
      </div>
      <div>
        <img
          src={taskGrid2}
          className="h-full w-full object-cover rounded-md shadow-xl"
          alt="banner image"
        />
      </div>
    </div>
  );
};
export default ImageGrid;
