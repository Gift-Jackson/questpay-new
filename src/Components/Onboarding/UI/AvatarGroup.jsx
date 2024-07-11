import avatar1 from "../../../assets/avatar-1.avif"
import avatar2 from "../../../assets/avatar-2.avif"
import avatar3 from "../../../assets/avatar-3.avif"
import avatar4 from "../../../assets/avatar-4.avif"
import avatar5 from "../../../assets/avatar-5.avif"

const AvatarGroup = () => {
  return (
    <>
      <div className="avatar_grp mt-6">
      <div className="count bg-mediumbg">100+</div>
        <div className="avatar border-[3px] border-stroke">
          <img src={avatar1} alt="avatar" />
        </div>
        <div className="avatar border-[3px] border-stroke">
          <img src={avatar2} alt="avatar" />
        </div>
        <div className="avatar border-[3px] border-stroke">
          <img src={avatar3} alt="avatar" />
        </div>
        <div className="avatar border-[3px] border-stroke">
          <img src={avatar4} alt="avatar" />
        </div>
        <div className="avatar border-[3px] border-stroke">
          <img src={avatar5} alt="avatar" />
        </div>
      </div>
    </>
  );
};

export default AvatarGroup;
