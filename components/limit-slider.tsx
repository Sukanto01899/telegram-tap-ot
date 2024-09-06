type LimitSliderProps = {
  totalPower: number;
  usedPower: number;
};

const LimitSlider = ({ totalPower, usedPower }: LimitSliderProps) => {
  return (
    <div className="w-[90%] fixed bottom-24 h-16 rounded-3xl overflow-hidden bg-slate-700 flex flex-col items-center justify-center px-3 gap-2 bg-opacity-70 shadow-xl">
      <div className="flex justify-between w-full text-white">
        <div className="text-sm">
          {usedPower} <span className="text-orange-500 font-extrabold">/</span>{" "}
          {totalPower}
        </div>
        <div>+5</div>
      </div>
      <div className="h-2 w-full bg-slate-700 rounded-3xl overflow-hidden">
        <div className="h-full w-[30%] bg-orange-500"></div>
      </div>
    </div>
  );
};

export default LimitSlider;
