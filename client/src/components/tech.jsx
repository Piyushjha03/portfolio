const Tech = (props) => {
  return (
    <>
      <div className="shell bg-[var(--primary-border)] border-[1px] border-[var(--secondary-border)] rounded-2xl p-2 flex items-center gap-3">
        <div className="image bg-[var(--secondary-border)] w-9 h-9 rounded-lg p-1">
          <img
            src={props.imgsrc}
            alt={`${props.imgsrc}`}
            className="h-full w-full"
          />
        </div>
        <div className={"name text-[#cccccc] font-mano"}>{props.techname}</div>
      </div>
    </>
  );
};

export default Tech;
