const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div>
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-primary" />
        </label>
      </div>
      <div>
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-primary" />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
