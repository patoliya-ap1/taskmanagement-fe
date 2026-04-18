import taskManagementBanner from "../assets/task-management.jpg";
const HeroBanner = () => {
  return (
    <div className="h-80">
      <img
        src={taskManagementBanner}
        className="h-full w-full object-cover rounded-md shadow-xl"
        alt="banner image"
      />
    </div>
  );
};
export default HeroBanner;
