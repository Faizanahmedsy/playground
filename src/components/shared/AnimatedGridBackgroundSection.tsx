import { Tiles } from "./animated-tiles";

const AnimatedGridBackgroundSection: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      className={
        "w-full h-full min-h-[400px] relative overflow-hidden flex items-center justify-center"
      }
    >
      <div className={"w-fit h-fit relative z-[2]"}>{children}</div>
      <div className={"absolute top-0 left-0 h-full w-full"}>
        <Tiles rows={30} cols={20} />
      </div>
    </div>
  );
};

export default AnimatedGridBackgroundSection;
