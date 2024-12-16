import Image from "./images/image.jpg";
import s from "./productShort.module.scss";

const ProductShort: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        Мой товар
      </div>
      <div className={s.picture}>
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export { ProductShort };
